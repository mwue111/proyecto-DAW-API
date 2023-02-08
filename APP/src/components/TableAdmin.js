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
    const [deleteDataDialog, setDeleteDataDialog] = useState(false);
    const [item, setItem] = useState({});
    const [selectedData, setSelectedData] = useState(null);
    const [submitted, setSubmitted] = useState(false);
    const [globalFilter, setGlobalFilter] = useState(null);
    //const [storeData, setStoreData] = useState({}); //para recibir datos de DialogStore
    const toast = useRef(null);
    const dt = useRef(null);
    const [oldItem, setOldItem] = useState({});
    const [images, setImages] = useState(defaultImages);
    const galleria = useRef(null);

    useEffect(() => {
        axios.get(fetchUrl)
            .then(res => setData(formatJson(res.data, table)));
       }, [fetchUrl, oldItem]);

      console.log({table});

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
            }
    }

    const emptyProduct = {
        //Cambiar estructura en DialogProduct
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
        //switch para emptyProduct y emptyUser según el tipo
        setItem(emptyStore);
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

    const saveItem = () =>{
        setSubmitted(true);
        setItemDialog(false);

        if (item.id) {
            const jsonDB = changedJson(oldItem, item);
            console.log('oldItem en saveItem: ', oldItem);
            console.log('item en saveItem: ', item);
            console.log('jsonDB: ', jsonDB);

            const headers = {
                'Content-Type': 'application/json'
            };

            axios.put(fetchUrl + '/' + item.id, jsonDB, { headers });

            toast.current.show({ severity: 'success', summary: '¡Perfecto!', detail: 'Item actualizado', life: 3000 });
        }
        else {
                //toast.current.show({ severity: 'success', summary: '¡Perfecto!', detail: 'Item guardado', life: 3000 });
            }

            //setData(_data);
            setItemDialog(false);
            setItem(emptyStore);
    }

    const editItem = (item) => {
        const _item = objectProfoundCopy(item); //copia profunda del item (incluyendo el objeto address)
        setItem(item);
        setOldItem(_item);   //Aquí item ya tiene el address actualizado
        setItemDialog(true);
    }

    const confirmDeleteItem = (item) => {
        setItem(item);
        setDeleteItemDialog(true);
    }

    const deleteItem = () => {
        setDeleteItemDialog(false);
        toast.current.show({ severity: 'success', summary: '¡Perfecto!', detail: 'Item eliminado', life: 3000 });
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


    {/**Cada botón pasa rowData, que es la información de cada registro */}
    const actionBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <div className="space-x-4">
                    <Button icon="pi pi-pencil" className="p-button-rounded p-button-success mr-2" onClick={() => editItem(rowData)} />
                    <Button icon="pi pi-trash" className="p-button-rounded p-button-warning "  onClick={() => confirmDeleteItem(rowData)} />
                </div>
            </React.Fragment>
        );
    }

    const imagesBodyTemplate = (rowData) => {
        return(
            <React.Fragment>
                <div className="space-x-4">
                <Galleria ref={galleria} value={images} responsiveOptions={responsiveOptions} numVisible={9} style={{ maxWidth: '50%' }}
                circular fullScreen showItemNavigators item={itemTemplate} thumbnail={thumbnailTemplate} />

            <Button label="Imágenes" icon="pi pi-external-link" onClick={() => galleria.current.show()} />
                </div>
            </React.Fragment>
        )
    }

    const storesDialogFooter = (
        <React.Fragment>
            <Button label="Cancelar" icon="pi pi-times" className="p-button-text" onClick={hideDialog} />
            <Button label="Guardar" icon="pi pi-check" className="p-button-text" onClick={saveItem} />
        </React.Fragment>
    );

    const itemDialogFooter = (
        <React.Fragment>
            <Button label="Cancelar" icon="pi pi-times" className="p-button-text" onClick={hideDialog} />
            <Button label="Guardar" icon="pi pi-check" className="p-button-text" onClick={saveItem} />
        </React.Fragment>
    );

    const deleteItemDialogFooter = (
        <React.Fragment>
            <Button label="No" icon="pi pi-times" className="p-button-text" onClick={hideDeleteItemDialog} />
            <Button label="Sí" icon="pi pi-check" className="p-button-text" onClick={deleteItem} />
        </React.Fragment>
    );

    const paginatorButton = () => {
        return(
            <React.Fragment>
                <Button icon="pi pi-plus" className="p-button p-button-success mr-2" label="Nuevo" onClick={openNew} />
            </React.Fragment>
        )
    }

    const filteredData = data.map(item => {
        return Object.entries(item).reduce((acum, [key, value]) => {
            if(typeof value !== 'object'){
                acum[key] = value;
            }
            return acum;
        }, {});
    });

    return (
        <div className="dataTable-crud">
            <Toast ref={toast} />

            <div className="card">

                    <DataTable
                        value={data}
                        responsiveLayout="scroll"
                        paginator
                        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
                        paginatorLeft={paginatorButton}
                        paginatorRight={' '}
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
                style={{ width: '450px' }}
                header={item.nombre ? `Modificar ${item.nombre}` : `Crear ${table}`}
                modal className="p-fluid"
                footer={itemDialogFooter}
                onHide={hideDialog}
            >

                {table === 'tienda' && <DialogStore store={item} setItem={setItem} oldItem={oldItem}/>}
                {table === 'producto' && <DialogProduct product={item} />}
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
        </div>
    )
}

export default TableAdmin;
