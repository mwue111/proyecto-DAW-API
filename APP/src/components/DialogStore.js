import React, { useState, useEffect, useRef } from 'react';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Fieldset } from 'primereact/fieldset';
import { Dropdown } from 'primereact/dropdown';
import { InputNumber } from 'primereact/inputnumber';

const DialogStore = ({ store, getStoreData }) =>{

    console.log('item: ', store);
    console.log('item.address: ', store.direccion);
    const stringAddress = store.direccion;
    const arrayAddress = stringAddress.split(' ');
    console.log('string: ', stringAddress, ' \narray: ', arrayAddress)

    const [name, setName] = useState(store.nombre);
    const [storeDescription, setStoreDescription] = useState(store.descripcion);
    const [roadType, setRoadType] = useState({name: arrayAddress[0]});
    const [streetName, setStreetName] = useState(arrayAddress[1]);
    const [streetNumber, setStreetNumber] = useState(parseInt(arrayAddress[2]));
    const [zipCode, setZipCode] = useState(arrayAddress[3]);
    const [city, setCity] = useState(arrayAddress[4]);
    const [remarks, setRemarks] = useState(store.address.remarks);
    const [email, setEmail] = useState(store.email);
    const [telephone1, setTelephone1] = useState(store.telefono1);
    const [telephone2, setTelephone2] = useState(store.telefono2);

    const optionsRoadType = [
        {name: 'Calle'},
        {name: 'Avenida'},
        {name: 'Paseo'},
        {name: 'Boulevard'},
        {name: 'Carretera'}
    ];

    useEffect(() => {
        console.log('en useEffect: ', name);
        getStoreData([name, storeDescription]);
    }, [name, storeDescription]);

    const onChangeStoreName = (e) => {
        const newName = e.target.value;
        console.log('newName: ', newName);  //coge todo
        setName(newName);
        console.log('en dialogStore 2:', name)  //falta el último carácter
    }

    const onChangeStoreDescription = (e) => {
        setStoreDescription(e.target.value)
    }

    const onChangeRoadType = (e) => {
        setRoadType(e.value);
        //console.log(e.value);
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

    const onChangeRemarks = (e) => {
        setRemarks(e.target.value);
    }

    const onChangeStoreEmail = (e) => {
        setEmail(e.target.value);
    }

    const onChangeTelephone1 = (e) => {
        setTelephone1(e.value);
    }

    const onChangeTelephone2 = (e) => {
        setTelephone2(e.value);
    }

    return(
        <div>
            <div className='field'>
                <Fieldset legend='Datos de la tienda'>
                    <label htmlFor='storeName'>Nombre de la tienda:</label>
                    <InputText id='storeName' name='name' defaultValue={name} onChange={onChangeStoreName} required autoFocus />
                    <br/>
                    <br/>
                    <label htmlFor='storeDesc'>Descripción de la tienda:</label>
                    <InputTextarea defaultValue={storeDescription} onChange={onChangeStoreDescription} rows={5} />
                </Fieldset>
            </div>
            <br/>
            <div className='field'>
                <Fieldset legend='Dirección'>
                    {/*El Dropdown podría ser editable para no limitar al usuario*/}
                    <Dropdown value={roadType} options={optionsRoadType} onChange={onChangeRoadType} optionLabel='name' />

                    <label htmlFor='streetName'>Nombre de la calle:</label>
                    <InputText id='streetName' defaultValue={streetName} name='streetName' onChange={onChangeStreetName} required />

                    <label htmlFor='streetNumber'>Número</label>
                    <InputNumber inputId='streetNumber' value={streetNumber} onValueChange={onChangeStreetNumber} mode='decimal' useGrouping={false}/>

                    <label htmlFor='zipCode'>Código postal</label>
                    <InputText id='zipCode' name='zipCode' defaultValue={zipCode} onChange={onChangeZipCode} required />

                    <label htmlFor='city'>Ciudad</label>
                    <InputText id='city' name='city' defaultValue={city} onChange={onChangeCity} required />

                    <label htmlFor='remarks'>Comentarios adicionales:</label>
                    <InputTextarea defaultValue={remarks} onChange={onChangeRemarks} rows={5}/>

                </Fieldset>
            </div>
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
        </div>
    )
}

export default DialogStore;
