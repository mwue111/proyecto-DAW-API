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
import { formatJson, changedJson, objectProfoundCopy} from '@/helpers/helper';
import axios from 'axios';
import { Galleria } from 'primereact/galleria';
import { Dropdown } from 'primereact/dropdown';
import { headersDB } from 'helpers/helper.js';

const TableAdmin = ({ fetchUrl, table }) => {

    const defaultImages= [
        {
            itemImageSrc: 'https://primereact.org/images/galleria/galleria1.jpg',
            thumbnailImageSrc: 'https://primereact.org/images/galleria/galleria1s.jpg',
            alt: 'Description for Image 1',
            title: 'Title 1'
        },
        {
            itemImageSrc: 'https://primereact.org/images/galleria/galleria2.jpg',
            thumbnailImageSrc: 'https://primereact.org/images/galleria/galleria2s.jpg',
            alt: 'Description for Image 2',
            title: 'Title 2'
        },
        {
            itemImageSrc: 'https://primereact.org/images/galleria/galleria3.jpg',
            thumbnailImageSrc: 'https://primereact.org/images/galleria/galleria3s.jpg',
            alt: 'Description for Image 3',
            title: 'Title 3'
        },
        {
            itemImageSrc: 'https://primereact.org/images/galleria/galleria4.jpg',
            thumbnailImageSrc: 'https://primereact.org/images/galleria/galleria4s.jpg',
            alt: 'Description for Image 4',
            title: 'Title 4'
        },
    ]

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
    const [submitted, setSubmitted] = useState(false);
    const [globalFilter, setGlobalFilter] = useState(null);
    const toast = useRef(null);
    const dt = useRef(null);
    const [oldItem, setOldItem] = useState({});
    const [images, setImages] = useState(defaultImages);
    const galleria = useRef(null);
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
    const [itemImages, setItemImages] = useState([]);

    useEffect(() => {
        axios.get(fetchUrl)
            .then(res => setData(formatJson(res.data, table)))

        let cityOptions = [];
        axios.get(process.env.NEXT_PUBLIC_BACKEND_URL + '/ciudad')
                .then(res => {res.data.map((item) => {
                    cityOptions.push({
                        'name': item.name,
                        'id': item.id
                    })
                })
        })
        setCities(cityOptions);

        let ownerOptions = [];
        axios.get(process.env.NEXT_PUBLIC_BACKEND_URL + '/propietario')
                .then(res => {res.data.map((item) => {
                    ownerOptions.push({
                        'name': item.user.name,
                        'id': item.user.id
                    })
                })
        })
        setOwners(ownerOptions);

        let categories = [];
        axios.get(process.env.NEXT_PUBLIC_BACKEND_URL + '/categoria')
                .then(res => {res.data.map((item) => {
                    categories.push(item.name);
                })})
        setProdCategories(categories);

        let brandList = [];
        axios.get(process.env.NEXT_PUBLIC_BACKEND_URL + '/marca')
                .then(res => {res.data.map((item) => {
                        brandList.push(item.name);
                    })})
        setBrands(brandList);

        let tagList = [];
        axios.get(process.env.NEXT_PUBLIC_BACKEND_URL + '/etiqueta')
                .then(res => {res.data.map((tag) => {
                    tagList.push({
                        'name': tag.name,
                        'id': tag.id});
                })})
        setTags(tagList);

        setSingleDeleted(false);

        console.log('tabla: ', table);

       }, [fetchUrl, changedItem, dataToDelete, singleDeleted]);

    if (!data.length) {
        return <div>No se han encontrado datos</div>
    }

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
        "ofertas":[],
        "tiendas": [],
        "tags": [],
        "imagen": "",
        "deleted": 0
    }

    const emptyUser = {
        //Cambiar estructura en DialogUser
    }

    const openStores = () => {
        setStoresDialog(true);
    }

    const openImages = () => {
        setItemDialog(true);
    }

    const hidestoresDialog = () => {
        setStoresDialog(false);
    }

    const openNew = () => {

        switch(table){
            case 'tienda': setItem(emptyStore); break;
            case 'producto': setItem(emptyProduct); break;
        }

        setSubmitted(false);
        setItemDialog(true);
    }

    const hideDialog = () => {
        setSubmitted(false);
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

    const saveItem = () =>{
        setSubmitted(true);
        setItemDialog(false);

        if (item.id) {

            if(item.user_id){
                item.user_id = item.user_id.id;
            }

            if(item.tags){
                let tagId = [];

                for(let i = 0; i < item.tags.length; i++){
                    tagId.push(item.tags[i].id);
                }
                item.tags = tagId;
            }

            const jsonDB = changedJson(oldItem, item);

            const headers = {
                'Content-Type': 'application/json'
            };

            console.log('oldItem: ', oldItem);
            console.log('item: ', item);
            console.log('jsonDB: ', jsonDB);

            axios.put(fetchUrl + '/' + item.id, jsonDB, { headers });

            toast.current.show({ severity: 'success', summary: '¡Perfecto!', detail: 'Item actualizado', life: 3000 });
        }
        else {
            const headers = {
                'Content-Type': 'application/json'
            };

            const itemDB = headersDB(item);

            itemDB.user_id = itemDB.user_id.id;

            if(itemDB.address && itemDB.address.town){
                itemDB.address.town_id = itemDB.address.town.id;
                delete itemDB.address.town;
            }

            console.log('itemDB: ', itemDB);

            axios.post(fetchUrl, itemDB, { headers });

            toast.current.show({ severity: 'success', summary: '¡Perfecto!', detail: 'Item guardado', life: 3000 });
        }

            setChangedItem(item);
            setItemDialog(false);
            setItem({});
            setOldItem({});
    }

    const editItem = (item) => {
        const _item = objectProfoundCopy(item); //copia profunda del item (incluyendo el objeto address)
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

    const deleteItem = () => {

        if(item.id){
            item.deleted = 1;
            const jsonDB = changedJson(oldItem, item);

            const headers = {
                'Content-Type': 'application/json'
            };

            axios.put(fetchUrl + '/' + item.id, jsonDB, { headers });

        }

        setDeleteItemDialog(false);
        toast.current.show({ severity: 'success', summary: '¡Perfecto!', detail: 'Item eliminado', life: 3000 });
    }

    const getImage = (itemId, table) => {
        console.log('rowData y table en getImage: ', itemId, ' - ', table);
        let images = [];

        axios.get(process.env.NEXT_PUBLIC_BACKEND_URL + `/imagenes/${table}/${itemId}`)
            .then(res => {console.log(res.data);
                res.data.map((item) => {
                    images.push(item);
                })
            });
        //Aquí: esto en un bucle para que no meta un array dentro de un array
        setItemImages(itemImages.push(images));
        console.log('images: ', images);
        console.log('itemImages: ', itemImages);


    }

    const responsiveOptions = [
        {
            breakpoint: '1500px',
            numVisible: 5
        },
        {
            breakpoint: '1024px',
            numVisible: 3
        },
        {
            breakpoint: '768px',
            numVisible: 2
        },
        {
            breakpoint: '560px',
            numVisible: 1
        }
    ];

    const itemTemplate = (item) => {
        return <img src={item.itemImageSrc} alt={item.alt} style={{ width: '100%', display: 'block' }} />;
    }

    const thumbnailTemplate = (item) => {
        return <img src={item.thumbnailImageSrc} alt={item.alt} style={{ display: 'block' }} />;
    }

    const confirmUndoDelete = (item) => {
        const _item = objectProfoundCopy(item);
        setItem(item);
        setOldItem(_item);
        setUndoDeleteDialog(true);
    }

    const undoDelete = () => {

        if(item.id){
            item.deleted = 0;
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

        //se envía a back la dirección /borrar + meses (body) + cabeceras
        axios.post(fetchUrl + '/borrar', {"data": months}, { headers })
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
        return(
           <Button icon='pi pi-trash' className='p-button p-button-danger' label='Eliminar registro' onClick={() => {deleteSingleItem(rowData)}} />
        )
    }

    {/**Cada botón pasa rowData, que es la información de cada registro */}
    const actionBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                {rowData.deleted == 0 ? <div className="space-x-4"><Button icon="pi pi-pencil" className="p-button-rounded p-button-success" onClick={() => editItem(rowData)} />
                <Button icon="pi pi-trash" className="p-button-rounded p-button-warning "  onClick={() => confirmDeleteItem(rowData)} /></div>
                 :
                <div className="flex justify-center"><Button icon="pi pi-refresh" label="Undo" className="p-button-raised p-button-outlined p-button-plain" onClick={() => confirmUndoDelete(rowData)} /></div>
                }
            </React.Fragment>
        );
    }

    const imagesBodyTemplate = (rowData) => {
        return(
            <React.Fragment>
                <div className="space-x-4">
                <Galleria ref={galleria} value={images} responsiveOptions={responsiveOptions} numVisible={9} style={{ maxWidth: '50%' }}
                circular fullScreen showItemNavigators item={itemTemplate} thumbnail={thumbnailTemplate} />

            {/*Aquí: que al clickar el botón se haga una petición al back*/}
            <Button label="Imágenes" icon="pi pi-external-link" onClick={() => getImage(rowData.id, table)} />
            {/*esto estaba en el onclick: () => galleria.current.show()*/}
                </div>
            </React.Fragment>
        )
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
        return(
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

        return(
            <React.Fragment>
                <div className='flex items-center space-x-2'>
                    <Dropdown value={dropdownValue} options={monthAmount} editable onChange={handleInputChange} placeholder='Meses de antiguedad' />
                    <Button icon="pi pi-trash" className="p-button p-button-danger" label="Eliminar registros antiguos" onClick={() => confirmDeleteOld()}/>
                </div>
            </React.Fragment>
        )
    }

    const filteredData = data.map(item => {
        return Object.entries(item).reduce((acum, [key, value]) => {
            if(typeof value !== 'object' && key != 'deleted' && key != 'updated_at' && key != 'user_id'){
                acum[key] = value;
            }
            return acum;
        }, {});
    });
    {/**FilteredData es un ARRAY que no contiene objetos */}

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
                    >

                    {Object.keys(filteredData[0]).map((key) => (
                        <Column field={key} header={key} key={key} />
                        )
                    )}

                        {<Column field={'imágenes'} header={'imágenes'} key={'imágenes'} body={imagesBodyTemplate}/>}
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
                {table === 'tienda' && <DialogStore store={item} setItem={setItem} cities={cities} owners={owners} />}
                {table === 'producto' && <DialogProduct product={item} setItem={setItem} allCategories={prodCategories} brands={brands} allTags={tags} />}
                {table === 'usuario' && <DialogUser user={item} />}

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
                    <i className="pi pi-exclamation-triangle mr-3" style={{ fontSize: '2rem'}}/>
                    {item && <span>¿Seguro/a que quieres eliminar este item?</span>}
                </div>

            </Dialog>

            <Dialog
                visible={undoDeleteDialog}
                style={{ width: '450px '}}
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
                        <i className="pi pi-exclamation-triangle mr-3" style={{ fontSize: '2rem' }}/>
                        <span>Vas a borrar permanentemente estos registros antiguos. ¿Estás seguro/a?</span>
                    </div>
                    <br/>
                    <DataTable
                        value={dataToDelete}
                        size='small'
                        responsiveLayout='scroll'

                    >
                        {Object.keys(filteredData[0]).map((key) => (
                            <Column field={key} header={key} key={key} />
                            )
                        )}
                        <Column  body={deleteSingleOldItem}/>
                    </DataTable>
                </div>
            </Dialog>
        </div>
    )
}

export default TableAdmin;
