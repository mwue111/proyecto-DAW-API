import React, { useState, useEffect, useRef } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useAuth } from '@/hooks/auth';
import { Button } from 'primereact/button';
import { InputTextarea } from 'primereact/inputtextarea';
import { RadioButton } from 'primereact/radiobutton';
import { InputNumber } from 'primereact/inputnumber';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { classNames } from 'primereact/utils';
import DialogStore from 'components/DialogStore';
import DialogProduct from 'components/DialogProduct';
import DialogUser from 'components/DialogUser';
import { Toast } from 'primereact/toast';

const TableAdmin = ({ fetchUrl, table }) => {
    const { user } = useAuth();
    const [data, setData] = useState([]);
    const [itemDialog, setItemDialog] = useState(false);
    const [deleteItemDialog, setDeleteItemDialog] = useState(false);
    const [deleteDataDialog, setDeleteDataDialog] = useState(false);
    const [item, setItem] = useState([]);
    const [selectedData, setSelectedData] = useState(null);
    const [submitted, setSubmitted] = useState(false);
    const [globalFilter, setGlobalFilter] = useState(null);
    const toast = useRef(null);
    const dt = useRef(null);

    useEffect(() => {
        fetch(fetchUrl)
          .then(response => response.json())
          .then(data => {
            setData(data);
          })
          .catch(error => {
            console.log(error);
          });
      }, [fetchUrl]);

      console.log({table});

    if (!data.length) {
        return <div>No se han encontrado datos</div>
    }

    const JSONaddress = JSON.stringify(item.address);
    console.log(JSONaddress);

    const headers = Object.keys(data[0]);
    headers.splice(headers.indexOf('created_at'), headers.length - headers.indexOf('created_at'));

    const openNew = () => {
        setItem('');
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

    {/*No sale el toast cuando se "guarda" elemento */}
    const saveItem = () =>{
        setSubmitted(true);
        setItemDialog(false);

        if (item.name) {
            let _data = [...data];
            let _item = {...item};
            if (item.id) {
                const index = findIndexById(item.id);

                _data[index] = _item;
                toast.current.show({ severity: 'success', summary: '¡Perfecto!', detail: 'Item actualizado', life: 3000 });
            }
            else {
                _item.id = createId();
                _data.push(_item);
                toast.current.show({ severity: 'success', summary: '¡Perfecto!', detail: 'Item guardado', life: 3000 });
            }

            setData(_data);
            setItemDialog(false);
            setItem('');
        }
    }

    const editItem = (item) => {
        //console.log(data);
        setItem({...item});
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

    const findIndexById = (id) => {
        let index = -1;

        for(let i = 0; i < data.length; i++){
            if(data[i].id === id){
                index = i;
                break;
            }
        }

        return index;
    }

    const createId = () => {
        let id = '';
        let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

        for(let i = 0; i < 5; i++){
            id += chars.charAt(Math.floor(Math.random() * chars.length));
        }

        return id;
    }

    {/**Aquí -- hacer un crud funcional comunicándose con otro componente */}
    const onInputChange = (e, name) => {
        const val = (e.target && e.target.value) || '';
        let _item = {...item};
        _item[`${name}`] = val;

        setItem(_item);
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

    return (
        <div className="dataTable-crud">
            <Toast ref={toast} />

            <div className="card">

                {user && user.type === 'administrator' &&
                    <DataTable
                        value={data}
                        responsiveLayout="scroll"
                        paginator
                        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
                        paginatorLeft={paginatorButton}
                        paginatorRight={' '}
                        rows={5}
                    >

                    {headers.map(header => (
                        <Column
                            field={header}
                            header={header}
                            key={item.id}
                        />
                    ))}

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
                header={item.name ? `Modificar ${item.name}` : `Nuevo ${table}`}
                modal className="p-fluid"
                footer={itemDialogFooter}
                onHide={hideDialog}
            >

                {table === 'tienda' && <DialogStore store={item} />}
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
