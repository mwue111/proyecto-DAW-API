import React, { useState, useEffect } from 'react';
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

const TableAdmin = ({ fetchUrl, table }) => {
    const { user } = useAuth();
    const [data, setData] = useState([]);
    const [item, setItem] = useState([]);
    const [cruDialog, setCruDialog] = useState(false);
    const [deleteDialog, setDeleteDialog] = useState(false);

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


    if (!data.length) {
        return <div>No se han encontrado datos</div>
    }

    const JSONaddress = JSON.stringify(item.address);

    const headers = Object.keys(data[0]);
    headers.splice(headers.indexOf('created_at'), headers.length - headers.indexOf('created_at'));

    const hideDialog = () => {
        setCruDialog(false);
    }

    const editData = (data) => {
        //console.log(data);
        setItem({...data});
        setCruDialog(true);
    }

    const onInputChange = (e, name) => {
        const val = (e.target && e.target.value) || '';
        let _data = {...data};
        _data[`${name}`] = val;

        setData(_data);
    }

    const paginatorButton = () => {
        return(
            <React.Fragment>
                <Button icon="pi pi-plus" className="p-button p-button-success mr-2" label="Nuevo" onClick={() => setCruDialog(true)} />
            </React.Fragment>
        )
    }

    const actionBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <div className="space-x-4">
                    <Button icon="pi pi-pencil" className="p-button-rounded p-button-success mr-2" onClick={() => editData(rowData)} />
                    <Button icon="pi pi-trash" className="p-button-rounded p-button-warning "  onClick={() => confirmDeleteData(rowData)} />
                </div>
            </React.Fragment>
        );
    }

    return (
        <div>
            <div className="card">
                {user && user.type === 'administrator' &&
                <DataTable value={data} responsiveLayout="scroll" paginator paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown" paginatorLeft={paginatorButton} paginatorRight={' '} rows={5}>
                {headers.map(header => (
                    <Column field={header} header={header} key={data.id}/>
                ))}
                    <Column body={actionBodyTemplate} header='Acciones' exportable={false} style={{ minWidth: '8rem' }} key={data.id}/>
                </DataTable>
                }
            </div>

            <Dialog visible={cruDialog} style={{ width: '450px' }} header="Añadir nuevo" modal className="p-fluid" onHide={hideDialog}>

                {table === 'tienda' && <DialogStore store={item} address={JSONaddress} />}


{/*
                <div className="field">
                    <label htmlFor="name">Nombre</label>
                    <InputText id="name" value={item.name} onChange={(e) => onInputChange(e, 'name')} required autoFocus />
                </div>
                <div className="field">
                    <label htmlFor="address">Dirección</label>
                    <InputTextarea id="address" value={JSONaddress} onChange={(e) => onInputChange(e, 'address')} required rows={3} cols={20} />
                </div>
                <div className="field">
                    <label htmlFor="email">Email</label>
                    <InputText id="email" value={item.email} onChange={(e) => onInputChange(e, 'email')} required rows={3} cols={20} />
                </div>
                <div className="field">
                    <label htmlFor="telephone1">Teléfono</label>
                    <InputText id="telephone1" value={item.telephone1} onChange={(e) => onInputChange(e, 'telephone1')} required rows={3} cols={20} />
                </div>
                <div className="field">
                    <label htmlFor="telephone2">Teléfono 2</label>
                    <InputText id="telephone2" value={item.telephone2} onChange={(e) => onInputChange(e, 'telephone2')} required rows={3} cols={20} />
                </div>
                <div className="field">
                    <label htmlFor="location">Localización</label>
                    <InputText id="location" value={`${item.longitude} - ${item.latitude}`} onChange={(e) => onInputChange(e, 'telephone2')} required rows={3} cols={20} />
                </div>
                <div className="field">
                    <label className="mb-3">Category</label>
                    <div className="formgrid grid">
                        <div className="field-radiobutton col-6">
                            <RadioButton inputId="category1" name="category" value="Accessories" onChange={onCategoryChange} checked={data.category === 'Accessories'} />
                            <label htmlFor="category1">Accessories</label>
                        </div>
                        <div className="field-radiobutton col-6">
                            <RadioButton inputId="category2" name="category" value="Clothing" onChange={onCategoryChange} checked={data.category === 'Clothing'} />
                            <label htmlFor="category2">Clothing</label>
                        </div>
                        <div className="field-radiobutton col-6">
                            <RadioButton inputId="category3" name="category" value="Electronics" onChange={onCategoryChange} checked={data.category === 'Electronics'} />
                            <label htmlFor="category3">Electronics</label>
                        </div>
                        <div className="field-radiobutton col-6">
                            <RadioButton inputId="category4" name="category" value="Fitness" onChange={onCategoryChange} checked={data.category === 'Fitness'} />
                            <label htmlFor="category4">Fitness</label>
                        </div>
                    </div>
                </div>
                <div className="formgrid grid">
                    <div className="field col">
                        <label htmlFor="price">Price</label>
                        <InputNumber id="price" value={data.price} onValueChange={(e) => onInputNumberChange(e, 'price')} mode="currency" currency="USD" locale="en-US" />
                    </div>
                    <div className="field col">
                        <label htmlFor="quantity">Quantity</label>
                        <InputNumber id="quantity" value={data.quantity} onValueChange={(e) => onInputNumberChange(e, 'quantity')} integeronly />
                    </div>
                </div>

                */}

            </Dialog>
            <Dialog>
                {/** PENDIENTE: hacer el cuadro de diálogo de confirmación de borrado */}
            </Dialog>

        </div>
    )
}

export default TableAdmin;
