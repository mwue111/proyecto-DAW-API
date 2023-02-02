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

const TableAdmin = ({ fetchUrl, table }) => {

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


    useEffect(() => {

        axios.get(fetchUrl)
            .then(res => setData(formatJson(res.data, table)));

//         fetch(fetchUrl)
//           .then(response => response.json())    //response contiene todos los datos de la url que se le pasa
//           .then(data => {   //data contiene un array con los datos de response
//             setData(formatJson(data, table));
//   //          setIsLoading(false);
//           })
//           .catch(error => {
//             console.log(error);
//     //        setIsLoading(true);
//           });

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

        // let _data = [...data];
        //let _item = {...item};
        //console.log('_data fuera del if: ', _data)

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
                // _item.id = createId();
                // _data.push(_item);
                // toast.current.show({ severity: 'success', summary: '¡Perfecto!', detail: 'Item guardado', life: 3000 });
            }

            //setData(_data);
            setItemDialog(false);
            setItem({});
            setOldItem({});
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
    {/*
        let _data = data.filter(val => val.id !== item.id);
        setData(_data);
        setDeleteDataDialog(false);
        setItem('');
    }
    */}
    }

    {/*
    const onInputPriceChange = (e, name) =>{
         Para cambiar el precio de los productos (está en la tabla products_stores)
        const val = e.value || 0;
        let _item = {...item};
        _item[`${name}`] = val;

        setItem(_item);


    }
    */}

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

    {/**item: array de arrays, con llave-valor de cada elemento de data. */}

    {/**.reduce(acumulador (objeto), valor actual(cada elemento de item, cada array llave-valor que contiene))
    la primera vuelta sería acum['nombre'] = 'frutería'. Guarda eso en acum. En 'address' no guarda nada porque el contenido de address es un objeto. Devuelve por tanto un objeto filtrado que no tiene objetos dentro. */}

    {/** el último parámetro, {}, indica el valor inicial del acumulador acum (y se declara que será un objeto además) */}
    const filteredData = data.map(item => {
        return Object.entries(item).reduce((acum, [key, value]) => {
            if(typeof value !== 'object' && key != 'deleted'){
                acum[key] = value;
            }
            return acum;
        }, {});
    });
    {/**FilteredData es un ARRAY que no contiene objetos */}

    // if(isLoading){
    //     return(<div>No hay datos</div>);
    // }

    const rowClass = (data) => {
        console.log('data: ', data);
        return {
            'bg-black-alpha-10': data.deleted == 0
        }
    }

    return (
        <div className="dataTable-crud">
            <Toast ref={toast} />

            <div className="card">

                {user && user.type === 'administrator' &&
                    <DataTable
                        value={data}
                        rowClassName={rowClass}
                        responsiveLayout="scroll"
                        paginator
                        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
                        paginatorLeft={paginatorButton}
                        paginatorRight={' '}
                        rows={5}
                    >

                    {/*

                    {headers.map(header => (
                        <Column
                            field={header}
                            header={header}
                            key={item.id}
                        />
                    ))}
                    */}

                    {/**filteredData es [tienda1, tienda2, tienda3...]. Coge [0] para coger las cabeceras (los nombres de la columna) de la primera tienda, porque todas tienen lo mismo. Con .map asigna cada llave a un elemento del componente Column*/}
                    {Object.keys(filteredData[0]).map((key) => (
                        <Column field={key} header={key} key={key} />
                        )
                    )}

                        <Column
                            body={actionBodyTemplate}
                            header='Acciones'
                            exportable={false}
                            style={{ minWidth: '8rem' }}
                            key={item.id}
                        />

                    </DataTable>
                }

            </div>

            <Dialog
                visible={itemDialog}
                style={{ width: '450px' }}
                header={item.nombre ? `Modificar ${item.nombre}` : `Crear ${table}`}
                modal className="p-fluid"
                footer={itemDialogFooter}
                onHide={hideDialog}
            >
                {/*Se le pasa setStoreData (setItem ahora) al hijo */}
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
