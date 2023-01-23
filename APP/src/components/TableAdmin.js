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

const TableAdmin = ({ fetchUrl }) => {
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

    const headers = Object.keys(data[0]);
    headers.splice(headers.indexOf('created_at'), headers.length - headers.indexOf('created_at'));

    const hideDialog = () => {
        setCruDialog(false);
    }

    const editData = (data) => {
        console.log(data);
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
                <Column body={actionBodyTemplate} header='Acciones' exportable={false} style={{ minWidth: '8rem' }}/>
                </DataTable>
                }
            </div>

            <Dialog visible={cruDialog} style={{ width: '450px' }} header="Añadir nuevo" modal className="p-fluid" onHide={hideDialog}>

                <div className="field">
                    <label htmlFor="name">Nombre</label>
                    <InputText id="name" value={item.name} onChange={(e) => onInputChange(e, 'name')} required autoFocus/>
                </div>
                {/*

                <div className="field">
                    <label htmlFor="description">Description</label>
                    <InputTextarea id="description" value={data.description} onChange={(e) => onInputChange(e, 'description')} required rows={3} cols={20} />
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
                {/** PENDIENTE: hacer el cuadro de diálogo de cofnirmación de borrado */}
            </Dialog>

        </div>
    )
}

export default TableAdmin;
