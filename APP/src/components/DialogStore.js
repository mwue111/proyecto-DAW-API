import React, { useState, useEffect, useRef } from 'react';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Fieldset } from 'primereact/fieldset';
import { Dropdown } from 'primereact/dropdown';
import { InputNumber } from 'primereact/inputnumber';

const DialogSore = ({ store }) =>{
    console.log('store: ', store);
    {/*
    Tienda:
    -id
    -road_type
    -zip_code
    -number
    -name
    -town_id
    -remarks
    */}

    const [name, setName] = useState('');
    {/*Esto no funciona al modificar: no encuentra road_type ni ningún elemento dentro de store */}
    const [roadType, setRoadType] = useState({name: store.address.road_type.charAt(0).toUpperCase() + store.address.road_type.slice(1)});
    const [streetName, setStreetName] = useState('');
    const [streetNumber, setStreetNumber] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [city, setCity] = useState('');
    const [remarks, setRemarks] = useState('');
    const [email, setEmail] = useState('');
    const [telephone1, setTelephone1] = useState('');
    const [telephone2, setTelephone2] = useState('');
    console.log(store.address.road_type);

    const optionsRoadType = [
        {name: 'calle'},
        {name: 'Avenida'},
        {name: 'Paseo'},
        {name: 'Boulevard'},
        {name: 'Carretera'}
    ];

    const onChangeStoreName = (e) => {
        setName(e.target.value);
    }

    const onChangeRoadType = (e) => {
        setRoadType(e.value);
        console.log(e.value);
    }

    const onChangeStreetName = (e) => {
        setStreetName(e.target.value);
    }

    const onChangeStreetNumber = (e) => {
        setStreetNumber(e.value);
    }

    const onChangeZipCode = (e) => {
        setZipCode(e.target.value);
    }

    const onChangeCity = (e) => {
        setCity(e.target.value);
    }

    const onChangeLocation = (e) => {
        {/*Cambiar la localización - mapa */}
    }

    const onChangeRemarks = () => {
        setRemarks(e.target.value);
    }

    const onChangeStoreEmail = () => {
        setEmail(e.target.value);
    }

    const onChangeTelephone1 = () => {
        setTelephone1(e.value);
    }

    const onChangeTelephone2 = () => {
        setTelephone2(e.value);
    }

    return(
        <div>
            <div className='field'>
                <Fieldset legend='Nombre de la tienda'>
                    <InputText id='storeName' name='name' defaultValue={store.name} onChange={onChangeStoreName} required autoFocus />
                </Fieldset>
            </div>
            <br/>
            <div className='field'>
                <Fieldset legend='Dirección'>
                    {/*El Dropdown podría ser editable para no limitar al usuario*/}
                    <Dropdown value={roadType} options={optionsRoadType} onChange={onChangeRoadType} optionLabel='name' />

                    <label htmlFor='streetName'>Nombre de la calle:</label>
                    <InputText id='streetName' defaultValue={store.address.name} name='streetName' onChange={onChangeStreetName} required />

                    <label htmlFor='streetNumber'>Número</label>
                    <InputNumber inputId='streetNumber' value={store.address.number} onValueChange={onChangeStreetNumber} mode='decimal' useGrouping={false}/>

                    <label htmlFor='zipCode'>Código postal</label>
                    <InputText id='zipCode' name='zipCode' defaultValue={store.address.zip_code} onChange={onChangeZipCode} required />

                    <label htmlFor='city'>Ciudad</label>
                    <InputText id='city' name='city' defaultValue={store.address.town_id} onChange={onChangeCity} required />

                    <label htmlFor='location'>Localización</label>
                    <InputText id='location' value={`${store.longitude} - ${store.latitude}`} onChange={onChangeLocation} required rows={3} cols={20} />

                    <label htmlFor='remarks'>Comentarios adicionales:</label>
                    <InputTextarea defaultValue={store.address.remarks} onChange={onChangeRemarks} rows={5}/>

                </Fieldset>
            </div>
            <br/>
            <div className='field'>
                <Fieldset legend='Datos de contacto'>
                    <label htmlFor='email'>Email</label>
                    <InputText id='email' value={store.email} onChange={onChangeStoreEmail} required rows={3} cols={20} />

                    <label htmlFor='telephone1'>Teléfono 1</label>
                    <InputNumber inputId='telephone1' value={store.telephone1} onValueChange={onChangeTelephone1} mode='decimal' useGrouping={false}/>

                    <label htmlFor='telephone2'>Teléfono 2</label>
                    <InputNumber inputId='telephone2' value={store.telephone2} onValueChange={onChangeTelephone2} mode='decimal' useGrouping={false}/>
                </Fieldset>
            </div>
        </div>
    )
}

export default DialogSore;
