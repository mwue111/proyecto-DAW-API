import React, { useState, useEffect, useRef } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useAuth } from '@/hooks/auth';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import DialogStore from 'components/DialogStore';
import DialogProduct from 'components/DialogProduct';
import DialogUser from 'components/DialogUser';
import { Toast } from 'primereact/toast';
import { formatJson, changedJson, objectProfoundCopy, formatDate } from '@/helpers/helper';
import axios from 'axios';
import { Galleria } from 'primereact/galleria';
import { Dropdown } from 'primereact/dropdown';
import { headersDB } from 'helpers/helper.js';
import Gallery from 'components/Gallery';
import Avatar from 'components/Avatar';
import { birthDateObject } from '@/helpers/helper';
import { formattedDate } from '@/helpers/helper';

const TableAdmin = ({ fetchUrl, table }) => {

    const emptyStore = {
        "nombre": "",
        "telefono1": "",
        "telefono2": "",
        "email": "",
        "descripcion": "",
        "address": {
            "road_type": "",
            "zip_code": "",
            "number": 0,
            "name": "",
            "remarks": "",
            "town_id": "",
            "town": {
                "name": "",
                "id": ""
            }
        },
        "user_id": "",
        "deleted": 0
    }

    const emptyProduct = {
        "marca": "",
        "categoria": {
            "nombre": "",
            "parent_category_id": ""
        },
        "descripcion": "",
        "nombre": "",
        "ofertas": [],
        "tiendas": [],
        "tags": [],
        "product_img": [],
        "deleted": 0,
        "img_delete": [],
    }

    const emptyUser = {
        "username": "",
        "name": "",
        "apellido": "",
        "apellido2": "",
        "email": "",
        "nacimiento": "",
        "type": "",
        "profile_imgs": [],
        "files": [],
        "deleted": 0
    }

    const { user } = useAuth();
    const [data, setData] = useState([]);
    const [itemDialog, setItemDialog] = useState(false);
    const [deleteItemDialog, setDeleteItemDialog] = useState(false);
    const [undoDeleteDialog, setUndoDeleteDialog] = useState(false);
    const [deleteOldDialog, setDeleteOldDialog] = useState(false);
    const [erasedData, setErasedData] = useState(false);
    const [deleteDataDialog, setDeleteDataDialog] = useState(false);
    const [item, setItem] = useState({});
    const [selectedData, setSelectedData] = useState(null);
    const [submitted, setSubmitted] = useState(null);
    const [globalFilter, setGlobalFilter] = useState(null);
    const toast = useRef(null);
    const dt = useRef(null);
    const [oldItem, setOldItem] = useState({});
    const [changedItem, setChangedItem] = useState({});
    const [dataToDelete, setDataToDelete] = useState({});
    const [months, setMonths] = useState(3);
    const [dropdownValue, setDropdownValue] = useState();
    const [singleDeleted, setSingleDeleted] = useState(false);
    const [cities, setCities] = useState([])
    const [owners, setOwners] = useState([])
    const [prodCategories, setProdCategories] = useState([]);
    const [brands, setBrands] = useState([]);
    const [tags, setTags] = useState([]);
    const [errors, setErrors] = useState([]);

    useEffect(() => {

        axios.get(fetchUrl)
            .then(res => {
                setData(formatJson(res.data, table));
                setSubmitted(false);
            });

        let cityOptions = [];
        axios.get(process.env.NEXT_PUBLIC_BACKEND_URL + '/ciudad')
            .then(res => {
                res.data.map((item) => {
                    cityOptions.push({
                        'name': item.name,
                        'id': item.id
                    })
                })
            })
        setCities(cityOptions);

        let ownerOptions = [];
        axios.get(process.env.NEXT_PUBLIC_BACKEND_URL + '/propietario')
            .then(res => {
                res.data.map((item) => {
                    ownerOptions.push({
                        'name': item.user.name,
                        'id': item.user.id
                    })
                })
            })
        setOwners(ownerOptions);

        let categories = [];
        axios.get(process.env.NEXT_PUBLIC_BACKEND_URL + '/categoria')
            .then(res => {
                res.data.map((item) => {
                    categories.push({
                        'name': item.name,
                        'id': item.id
                    });
                })
            })
        setProdCategories(categories);

        let brandList = [];
        axios.get(process.env.NEXT_PUBLIC_BACKEND_URL + '/marca')
            .then(res => {
                res.data.map((item) => {
                    brandList.push({
                        'name': item.name,
                        'id': item.id
                    });
                })
            })
        setBrands(brandList);

        let tagList = [];
        axios.get(process.env.NEXT_PUBLIC_BACKEND_URL + '/etiqueta')
            .then(res => {
                res.data.map((tag) => {
                    tagList.push({
                        'name': tag.name,
                        'id': tag.id
                    });
                })
            })
        setTags(tagList);

        setSingleDeleted(false);
    }, [fetchUrl, changedItem, dataToDelete, singleDeleted, submitted]);

    if (!data.length) {
        return <div>No se han encontrado datos</div>
    }

    const openNew = () => {

        switch (table) {
            case 'tienda': setItem(emptyStore); break;
            case 'producto': setItem(emptyProduct); break;
            case 'usuario': setItem(emptyUser); break;
        }

        setItemDialog(true);
    }

    const hideDialog = () => {
        setChangedItem(oldItem);
        setItemDialog(false);
    }

    const hideDeleteItemDialog = () => {
        setDeleteItemDialog(false);
    }

    const hideUndoDeleteDialog = () => {
        setUndoDeleteDialog(false);
    }

    const hideDeleteOldDialog = () => {
        setDeleteOldDialog(false);
    }

    const saveItem = () => {
        const headers = {
            'Content-Type': 'application/json'
        };

        if (item.tags) {
            item.tags = formatTags(item.tags);
        }

        if (item.id) {

            if (item.user_id) {
                item.user_id = item.user_id.id;
            }

            if (item.marca) {
                item.marca = item.marca.name;
            }

            if (item.categoria) {
                item.categoria = item.categoria.name;
            }

            const jsonDB = changedJson(oldItem, item);

            if (item.product_img && item.product_img.length !== oldItem.product_img.length) {

                for (let i = 0; i < jsonDB['product_img'].length; i++) {
                    if (jsonDB['product_img'][i] instanceof File) {
                        // console.log('archivo: ', jsonDB['product_img'][i].name);
                        const formData = new FormData();
                        formData.append('file', jsonDB['product_img'][i]);
                        formData.append('user_id', user.id);
                        formData.append('image_type', 'product_imgs');
                        formData.append('product_id', item.id);
                        formData.append('name', jsonDB['product_img'][i].name);

                        // for(var key of formData.entries()){
                        //     console.log(key[0], ' - ', key[1]);
                        // }

                        axios.post(process.env.NEXT_PUBLIC_BACKEND_URL + '/subir-archivo', formData)
                            .then(res => console.log('res: ', res));
                    }
                }
            }

            if (item.img_delete && item.img_delete.length > 0) {
                let url = process.env.NEXT_PUBLIC_BACKEND_URL + '/subir-archivo';

                for (let i = 0; i < item.img_delete.length; i++) {
                    axios.delete(url + '/' + item.img_delete[i])
                        .then(res => {
                            console.log(res.data + ' eliminada');
                        })
                        .catch(error => console.log('Ha ocurrido un error: ', error));
                }
            }

            if (jsonDB.birth_date) {
                jsonDB.birth_date = formattedDate(jsonDB.birth_date);
            }

            console.log('ITEM CAMBIADO\njsonDB: ', jsonDB);

            axios.put(fetchUrl + '/' + item.id, jsonDB, { headers });

            toast.current.show({ severity: 'success', summary: '¡Perfecto!', detail: 'Item actualizado', life: 3000 });
        }
        else {
            const itemDB = headersDB(item);

            if (itemDB.user_id) {
                itemDB.user_id = itemDB.user_id.id;
            }

            if (itemDB.address && itemDB.address.town) {
                itemDB.address.town_id = itemDB.address.town.id;
                delete itemDB.address.town;
            }

            if (itemDB.brand) {
                itemDB.brand = itemDB.brand.id;
            }

            if (itemDB.category) {
                itemDB.category = itemDB.category.id;
            }

            // if(itemDB.tags){
            //     console.log('tags: ', itemDB.tags);
            // }

            if (table === 'usuario') {
                console.log('usuario en saveItem: ', itemDB);
                let userId;
                let username;

                if (itemDB.birth_date) {
                    itemDB.birth_date = formattedDate(itemDB.birth_date);
                }

                axios.post(process.env.NEXT_PUBLIC_BACKEND_URL + '/admin-register', itemDB, { headers })
                    .then(res => {
                        userId = res.data.id;
                        username = res.data.username;

                        if (itemDB.profile_imgs.length > 0) {
                            for (let i = 0; i < itemDB['profile_imgs'].length; i++) {
                                if (itemDB['profile_imgs'][i] instanceof File) {
                                    const formData = new FormData();
                                    formData.append('file', itemDB['profile_imgs'][i]);
                                    formData.append('image_type', 'profile_imgs');
                                    formData.append('user_id', userId);
                                    formData.append('username', username);
                                    formData.append('name', itemDB['profile_imgs'][i].name);

                                    axios.post(process.env.NEXT_PUBLIC_BACKEND_URL + '/subir-archivo', formData)
                                        .then(res => console.log('res: ', res));
                                }
                            }
                        }

                        if (itemDB.files.length > 0) {
                            for (let i = 0; i < itemDB['files'].length; i++) {
                                if (itemDB['files'][i] instanceof File) {
                                    const formData = new FormData();
                                    formData.append('file', itemDB['files'][i]);
                                    formData.append('image_type', 'document');
                                    formData.append('user_id', userId);
                                    formData.append('username', username);
                                    formData.append('name', itemDB['files'][i].name);

                                    axios.post(process.env.NEXT_PUBLIC_BACKEND_URL + '/subir-archivo', formData)
                                        .then(res => console.log('res de archivo: ', res));
                                }
                            }
                        }
                    });
            }
            else {
                axios.post(fetchUrl, itemDB, { headers });
            }

            if (itemDB.product_img) {
                setTimeout(() => {
                    // if(itemDB.product_img){

                    for (let i = 0; i < itemDB['product_img'].length; i++) {
                        const formData = new FormData();
                        formData.append('file', itemDB['product_img'][i]);
                        formData.append('user_id', user.id);
                        formData.append('image_type', 'product_imgs');
                        formData.append('name', itemDB['product_img'][i].name);

                        // for(var key of formData.entries()){
                        //     console.log(key[0], ' - ', key[1]);
                        // }

                        axios.post(process.env.NEXT_PUBLIC_BACKEND_URL + '/subir-archivo', formData)
                            .then(res => console.log('res: ', res));
                    }
                    // }
                }, 2000);
            }

            toast.current.show({ severity: 'success', summary: '¡Perfecto!', detail: 'Item guardado', life: 3000 });
            setSubmitted(true);
        }

        setItemDialog(false);
        setItem({});
        setOldItem({});
    }

    const editItem = (item) => {
        const _item = objectProfoundCopy(item);
        setItem(item);
        setOldItem(_item);
        setItemDialog(true);
    }

    const confirmDeleteItem = (item) => {
        const _item = objectProfoundCopy(item);
        setItem(item);
        setOldItem(_item);
        setDeleteItemDialog(true);
    }

    const formatTags = (tags) => {
        let tagId = [];

        for (let i = 0; i < tags.length; i++) {
            tagId.push(tags[i].id);
        }

        return tagId;
    }

    const deleteItem = () => {

        if (item.id) {
            item.deleted = 1;

            if (item.tags) {
                item.tags = formatTags(item.tags);
            }

            const jsonDB = changedJson(oldItem, item);

            const headers = {
                'Content-Type': 'application/json'
            };

            axios.put(fetchUrl + '/' + item.id, jsonDB, { headers });
        }

        setDeleteItemDialog(false);
        toast.current.show({ severity: 'success', summary: '¡Perfecto!', detail: 'Item eliminado', life: 3000 });
        setRecharge(true);
    }

    const confirmUndoDelete = (item) => {
        const _item = objectProfoundCopy(item);
        setItem(item);
        setOldItem(_item);
        setUndoDeleteDialog(true);
    }

    const undoDelete = () => {

        if (item.id) {
            item.deleted = 0;

            if (item.tags) {
                item.tags = formatTags(item.tags);
            }

            const jsonDB = changedJson(oldItem, item);

            const headers = {
                'Content-Type': 'application/json'
            };

            axios.put(fetchUrl + '/' + item.id, jsonDB, { headers });
        }

        setUndoDeleteDialog(false);
        toast.current.show({ severity: 'success', summary: '¡Perfecto!', detail: 'Item recuperado', life: 3000 });
    }

    const confirmDeleteOld = () => {
        const headers = {
            'Content-Type': 'application/json'
        };

        axios.post(fetchUrl + '/borrar', { "data": months }, { headers })
            .then(res => setDataToDelete(formatJson(res.data, table))
            );
        setDeleteOldDialog(true);
    }

    const deleteOld = () => {
        const arrayToDelete = [];
        dataToDelete.map((item) => {
            arrayToDelete.push(item.id)
        });

        arrayToDelete.map((item) => {
            axios.delete(fetchUrl + '/' + item)
                .then(response => {
                    console.log(response.data + ' - eliminado');
                    setDataToDelete(arrayToDelete)
                })
                .catch(error => console.log(error + ' - ha habido un error'))
        })

        toast.current.show({ severity: 'success', summary: '¡Perfecto!', detail: 'Registros eliminados', life: 3000 });
        setDeleteOldDialog(false);
    }

    const deleteSingleItem = (item) => {
        axios.delete(fetchUrl + '/' + item.id)
            .then(response => {
                console.log(response.data + ' - eliminado');
                setSingleDeleted(true);
            })
            .catch(error => console.log(error + ' - ha habido un error'))
        setDeleteOldDialog(false);
    }

    const deleteSingleOldItem = (rowData) => {
        return (
            <Button icon='pi pi-trash' className='p-button p-button-danger' label='Eliminar registro' onClick={() => { deleteSingleItem(rowData) }} />
        )
    }

    const goToData = (row) => {
        switch (table) {
            case 'tienda': window.location.href = `/tienda/${row.data.id}`; break;
            case 'producto': window.location.href = `/producto/${row.data.id}`; break;
        }
    }

    const actionBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                {rowData.deleted == 0 ? <div className="space-x-4"><Button icon="pi pi-pencil" className="p-button-rounded p-button-success" onClick={() => editItem(rowData)} />
                    <Button icon="pi pi-trash" className="p-button-rounded p-button-warning " onClick={() => confirmDeleteItem(rowData)} /></div>
                    :
                    <div className="flex justify-center"><Button icon="pi pi-refresh" label="Undo" className="p-button-raised p-button-outlined p-button-plain" onClick={() => confirmUndoDelete(rowData)} /></div>
                }
            </React.Fragment>
        );
    }

    const imagesBodyTemplate = (rowData) => {
        if(compareKeys(rowData, emptyUser)){
            console.log('es un usuario')
            return null;
        }
        else{
            return (
                <React.Fragment>
                    <div className="space-x-4">
                        <Gallery rowData={rowData} table={table} />
                    </div>
                </React.Fragment>
            )
        }
    }

    const avatarBodyTemplate = (rowData) => {

        if(compareKeys(rowData, emptyProduct) || compareKeys(rowData, emptyStore)){
            console.log('rowData[0]: ', rowData)
            console.log('no es un usuario');
            return null;
        }
        else{
            return (
                <React.Fragment>
                    <div className="space-x-4">
                        <Avatar rowData={rowData} table={table} />
                    </div>
                </React.Fragment>
            )
        }
    }

    function compareKeys(a, b) {
        const aKeys = Object.keys(a).sort();
        const bKeys = Object.keys(b).sort();

        return JSON.stringify(aKeys[0]) === JSON.stringify(bKeys[0]);
    }

    const itemDialogFooter = (
        <React.Fragment>
            <Button label="Cancelar" icon="pi pi-times" className="p-button-text" onClick={hideDialog} />
            <Button label="Guardar" icon="pi pi-check" className="p-button-text" onClick={saveItem} />
        </React.Fragment>
    );

    const deleteItemDialogFooter = (
        <React.Fragment>
            <Button label="No" icon="pi pi-times" className="p-button-danger p-button-text" onClick={hideDeleteItemDialog} />
            <Button label="Sí" icon="pi pi-check" className="p-button-text" onClick={deleteItem} />
        </React.Fragment>
    );

    const undoDeleteDialogFooter = (
        <React.Fragment>
            <Button label="No" icon="pi pi-times" className="p-button-danger p-button-text" onClick={hideUndoDeleteDialog} />
            <Button label="Sí" icon="pi pi-check" className="p-button-text" onClick={undoDelete} />
        </React.Fragment>
    )

    const deleteOldFooter = (
        <React.Fragment>
            <Button label="No" icon="pi pi-times" className="p-button-danger p-button-text" onClick={hideDeleteOldDialog} />
            <Button label="Sí" icon="pi pi-check" className="p-button-text" onClick={deleteOld} />
        </React.Fragment>
    )

    const paginatorButton = () => {
        return (
            <React.Fragment>
                <Button icon="pi pi-plus" className="p-button p-button-success mr-2" label="Añadir nuevo registro" onClick={openNew} />
            </React.Fragment>
        )
    }

    const deleteOldItemsButton = () => {
        const monthAmount = [3, 6, 12];

        const handleInputChange = (e) => {
            setMonths(e.value);
            setDropdownValue(e.value);
        }

        return (
            <React.Fragment>
                <div className='flex items-center space-x-2'>
                    <Dropdown value={dropdownValue} options={monthAmount} editable onChange={handleInputChange} placeholder='Meses de antiguedad' />
                    <Button icon="pi pi-trash" className="p-button p-button-danger" label="Eliminar registros antiguos" onClick={() => confirmDeleteOld()} />
                </div>
            </React.Fragment>
        )
    }

    const filteredData = data.map(item => {
        return Object.entries(item).reduce((acum, [key, value]) => {
            if (typeof value !== 'object' && key != 'deleted' && key != 'updated_at' && key != 'user_id') {
                acum[key] = value;
            }
            return acum;
        }, {});
    });

    const rowClass = (data) => {
        return {
            'deleted': data.deleted == 1
        }
    }

    return (
        <div className="dataTable-crud">
            <Toast ref={toast} />

            <div className="card">

                <DataTable
                    value={data}
                    rowClassName={rowClass}
                    responsiveLayout="scroll"
                    paginator
                    paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink"
                    paginatorLeft={paginatorButton}
                    paginatorRight={deleteOldItemsButton}
                    rows={5}
                    selectionMode="single"
                    selection={null}
                    onRowClick={goToData}
                >

                    {Object.keys(filteredData[0]).map((key) => (
                        <Column field={key}
                            header={key}
                            key={key}
                        />
                    ))}

                    {<Column field={table !== 'usuario' ? 'imágenes' : 'avatar'}
                        header={ table !== 'usuario' ? 'imágenes' : 'avatar'}
                        key={table !== 'usuario' ? 'imágenes' : 'avatar'}
                        body={ table !== 'usuario' ? imagesBodyTemplate : avatarBodyTemplate}
                    />}

                    <Column
                        body={actionBodyTemplate}
                        header='Acciones'
                        exportable={false}
                        style={{ minWidth: '8rem' }}
                        key={item.id}
                    />

                </DataTable>
            </div>

            <Dialog
                visible={itemDialog}
                style={{ width: '700px' }}
                header={item.nombre ? `Modificar ${item.nombre}` : `Crear ${table}`}
                modal className="p-fluid"
                footer={itemDialogFooter}
                onHide={hideDialog}
            >
                {table === 'tienda' &&

                    <DialogStore store={item}
                        setItem={setItem}
                        cities={cities}
                        owners={owners}
                    />}

                {table === 'producto' &&

                    <DialogProduct product={item}
                        setItem={setItem}
                        allCategories={prodCategories}
                        brands={brands}
                        allTags={tags}
                        table={table}
                    />}

                {table === 'usuario' &&

                    <DialogUser user={item}
                        errors={errors}
                    // setItem={setItem}
                    />}

            </Dialog>

            <Dialog
                visible={deleteItemDialog}
                style={{ width: '450px' }}
                header="Confirmar borrado"
                modal
                footer={deleteItemDialogFooter}
                onHide={hideDeleteItemDialog}
            >
                <div className="confirmation-content">
                    <i className="pi pi-exclamation-triangle mr-3" style={{ fontSize: '2rem' }} />
                    {item && <span>¿Seguro/a que quieres eliminar este item?</span>}
                </div>

            </Dialog>

            <Dialog
                visible={undoDeleteDialog}
                style={{ width: '450px ' }}
                header='Recuperar elemento'
                modal
                footer={undoDeleteDialogFooter}
                onHide={hideUndoDeleteDialog}
            >
                <div className='confirmation-content'>
                    <i className="pi pi-exclamation-triangle mr-3" style={{ fontSize: '2rem' }} />
                    {item && <span>¿Quieres recuperar este elemento?</span>}
                </div>
            </Dialog>

            <Dialog
                visible={deleteOldDialog}
                style={{ width: '80%' }}
                modal
                header='¡Cuidado!'
                footer={deleteOldFooter}
                onHide={hideDeleteOldDialog}
            >
                <div className='confirmation-content'>
                    <div className='flex align-items justify-center bg-yellow-200 p-6 rounded-2xl'>
                        <i className="pi pi-exclamation-triangle mr-3" style={{ fontSize: '2rem' }} />
                        <span>Vas a borrar permanentemente estos registros antiguos. ¿Estás seguro/a?</span>
                    </div>
                    <br />
                    <DataTable
                        value={dataToDelete}
                        size='small'
                        responsiveLayout='scroll'

                    >
                        {Object.keys(filteredData[0]).map((key) => (
                            <Column field={key} header={key} key={key} />
                        )
                        )}
                        <Column body={deleteSingleOldItem} />
                    </DataTable>
                </div>
            </Dialog>
        </div>
    )
}

export default TableAdmin;
