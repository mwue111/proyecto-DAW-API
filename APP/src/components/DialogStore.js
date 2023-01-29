import React, { useState, useEffect, useRef } from 'react';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Fieldset } from 'primereact/fieldset';
import { Dropdown } from 'primereact/dropdown';
import { InputNumber } from 'primereact/inputnumber';
import axios from 'axios';

const DialogStore = ({ store, setStoreData }) =>{

    //console.log('item: ', store);

    const [dataForm, setDataForm] = useState(store);
    const [storeAddress, setStoreAddress] = useState('');
    const [emptyForm, setEmptyForm] = useState({});
    const [dropdownValue, setDropdownValue] = useState(null);
    // const getAllAddress = () => {
    //     setStoreAddress(store.address);
    // }

    const optionsRoadType = ['Calle', 'Avenida', 'Paseo', 'Boulevard', 'Carretera'];

    // const optionsRoadType = [
    //     {name: 'Calle'},
    //     {name: 'Avenida'},
    //     {name: 'Paseo'},
    //     {name: 'Boulevard'},
    //     {name: 'Carretera'}
    // ];

    const emptyStore = {
        name:'',
        description:'',
        address: {
            road_type: '',
            zip_code: '',
            number: 0,
            name: '',
            remarks: ''
        },
        email: '',
        telephone1: '',
        telephone2: ''
    }
    useEffect(() => {
        console.log('dataForm dentro del usseEffect en DialogStore: ', dataForm);
        setStoreAddress(store.address);
        setStoreData(dataForm);
    }, [dataForm]);

    const handleInputChange = (e) => {
        const target = e.target;
        console.log('target en HIC:', target);
        const val = target.value;
        console.log('value en HIC: ', val);
        const name = target.name;
        console.log('name en HIC: ', name);

//        setStoreAddress(value);
   //     console.log('road type 2: ', storeAddress.road_type);   //no actualiza
        if(name === 'address.road_type'){
            console.log('entró');
            setDropdownValue(e.value);
        }

        setDataForm({
            [name]: val
        });
    }

    return(
        <div>
            <div className='field'>
                <Fieldset legend='Datos de la tienda'>
                    <label htmlFor='storeName'>Nombre de la tienda:</label>
                    <InputText id='storeName' name='nombre' defaultValue={dataForm.nombre} onChange={handleInputChange} required autoFocus />
                    <br/>
                    <br/>
                    <label htmlFor='descripcion'>Descripción de la tienda:</label>
                    <InputTextarea name='descripcion' defaultValue={dataForm.descripcion} onChange={handleInputChange} rows={5} />
                </Fieldset>
            </div>
            <br/>

            <div className='field'>
                <Fieldset legend='Dirección'>
                    {/**No cambia la selección */}
                    <Dropdown name='address.road_type' value={storeAddress.road_type} options={optionsRoadType} onChange={handleInputChange} placeholder='Selecciona un tipo de vía'/>
                    <br/>
                    <label htmlFor='address.name'>Nombre de la calle:</label>
                    <InputText name='address.name' defaultValue={storeAddress.name} onChange={handleInputChange} required />
                    <br/>

                    {/**

                    <label htmlFor='adress.number'>Número</label>
                    <InputNumber name='address.number' inputId='address.number' value={streetNumber} onValueChange={onChangeStreetNumber} mode='decimal' useGrouping={false}/>

                    <label htmlFor='zipCode'>Código postal</label>
                    <InputText id='zipCode' name='zipCode' defaultValue={zipCode} onChange={onChangeZipCode} required />

                    <label htmlFor='city'>Ciudad</label>
                    <InputText id='city' name='city' defaultValue={city} onChange={onChangeCity} required />

                    <label htmlFor='remarks'>Comentarios adicionales:</label>
                    <InputTextarea defaultValue={remarks} onChange={onChangeRemarks} rows={5}/>
*/}
                </Fieldset>
            </div>

            {/*
            <br/>
            <div className='field'>
                <Fieldset legend='Datos de contacto'>
                    <label htmlFor='email'>Email</label>
                    <InputText id='email' value={email} onChange={onChangeStoreEmail} required rows={3} cols={20} />

                    <label htmlFor='telephone1'>Teléfono 1</label>
                    <InputNumber inputId='telephone1' value={telephone1} onValueChange={onChangeTelephone1} mode='decimal' useGrouping={false}/>

                    <label htmlFor='telephone2'>Teléfono 2</label>
                    <InputNumber inputId='telephone2' value={telephone2} onValueChange={onChangeTelephone2} mode='decimal' useGrouping={false}/>
                </Fieldset>
            </div>

            */}
            </div>
    )
}

export default DialogStore;
