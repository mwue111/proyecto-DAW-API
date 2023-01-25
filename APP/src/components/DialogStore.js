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

    Producto:
    -id
    -name
    -description
    -brand_id
    -category_id
    -estaría bien poner fotos, están en otra tabla

    Usuario:
    -id
    -username
    -name
    -surname1
    -surname2
    -email
    -birth-date
    -type
    */}

    const [name, setName] = useState('');
    const [roadType, setRoadType] = useState(null);
    const [streetName, setStreetName] = useState('');
    const [streetNumber, setStreetNumber] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [city, setCity] = useState('');
    const [remarks, setRemarks] = useState('');
    const [email, setEmail] = useState('');
    const [telephone1, setTelephone1] = useState('');
    const [telephone2, setTelephone2] = useState('');

    const optionsRoadType = [
        {name: 'Calle'},
        {name: 'Avenida'},
        {name: 'Paseo'},
        {name: 'Boulevard'},
        {name: 'Carretera'}
    ];

    return(
        <div>
            <div className='field'>
                <Fieldset legend='Nombre de la tienda'>
                    <InputText id='name' name='name' defaultValue={store.name} onChange={e => setName(e.target.value)} required autoFocus />
                </Fieldset>
            </div>
            <br/>
            <div className='field'>
                <Fieldset legend='Dirección'>
                    {/*El Dropdown podría ser editable para no limitar al usuario*/}
                    <Dropdown value={roadType} options={optionsRoadType} onChange={e => setRoadType(e.value)} optionLabel='name'/>

                    <label htmlFor='streetName'>Nombre de la calle:</label>
                    <InputText id='streetName' defaultValue={store.address.name} name='streetName' onChange={e => setStreetName(e.target.value)} required autoFocus />

                    <label htmlFor='streetNumber'>Número</label>
                    <InputNumber inputId='streetNumber' value={store.address.number} onValueChange={e => setStreetNumber(e.value)} mode='decimal' useGrouping={false}/>

                    <label htmlFor='zipCode'>Código postal</label>
                    <InputText id='zipCode' name='zipCode' defaultValue={store.address.zip_code} onChange={e => setZipCode(e.target.value)} required autoFocus />

                    <label htmlFor='city'>Ciudad</label>
                    <InputText id='city' name='city' defaultValue={store.address.town_id} onChange={e => setCity(e.target.value)} required autoFocus />

                    <label htmlFor='location'>Localización</label>
                    <InputText id='location' value={`${store.longitude} - ${store.latitude}`} onChange={(e) => onInputChange(e, 'telephone2')} required rows={3} cols={20} />

                    <label htmlFor='remarks'>Comentarios adicionales:</label>
                    <InputTextarea defaultValue={store.address.remarks} onChange={e => setRemarks(e.target.value)} rows={5}/>

                </Fieldset>
            </div>
            <br/>
            <div className='field'>
                <Fieldset legend='Datos de contacto'>
                    <label htmlFor='email'>Email</label>
                    <InputText id='email' value={store.email} onChange={(e) => setEmail(e.target.value)} required rows={3} cols={20} />

                    <label htmlFor='telephone1'>Teléfono 1</label>
                    <InputNumber inputId='telephone1' value={store.telephone1} onValueChange={e => setTelephone1(e.value)} mode='decimal' useGrouping={false}/>

                    <label htmlFor='telephone2'>Teléfono 2</label>
                    <InputNumber inputId='telephone2' value={store.telephone2} onValueChange={e => setTelephone2(e.value)} mode='decimal' useGrouping={false}/>
                </Fieldset>
            </div>
        </div>
    )
}

export default DialogSore;
