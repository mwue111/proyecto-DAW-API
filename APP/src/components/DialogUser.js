import React, { useState, useEffect, useRef } from 'react';
import { InputText } from 'primereact/inputtext';
import { Fieldset } from 'primereact/fieldset';
import { Input } from 'postcss';
import { Toast } from 'primereact/toast';
import { Calendar } from 'primereact/calendar';

const DialogUser = ({ user }) => {
    console.log('user: ', user);

    {/*Para obtener la fecha de nacimiento de los usuarios*/}
    let milisec = Date.parse(user.birth_date);
    let BirthDate = new Date(milisec);

    const [username, setUsername] = useState(user.username);
    const [name, setName] = useState(user.name);
    const [surname1, setSurname1] = useState(user.surname1);
    const [surname2, setSurname2] = useState(user.surname2);
    const [email, setEmail] = useState(user.email);
    const [birthDate, setBirthDate] = useState(BirthDate);
    const [type, setType] = useState(user.type);
    const toast = useRef(null);


    const onChangeUsername = (e) => {
        setUsername(e.target.value);
    }

    const onChangeName = (e) => {
        setName(e.target.value);
    }

    const onChangeSurname1 = (e) => {
        setSurname1(e.target.value);
    }

    const onChangeSurname2 = (e) => {
        setSurname2(e.target.value);
    }

    const onChangeEmail = (e) => {
        {/*Habría que comprobar que el email sea válido*/}
        setEmail(e.target.value);
    }

    const onBirthDayChange = (e) => {
        setBirthDate(e.value);
    }

    return(
        <div>
            <div className='field'>
                <Fieldset legend='Datos del usuario'>
                    <label htmlFor='username'>Nombre de usuario: </label>
                    <InputText name='username' id='userUsername' defaultValue={username} onChange={onChangeUsername}/>
                    <br/>
                    <br/>
                    <label htmlFor='name'>Nombre: </label>
                    <InputText name='name' id='userName' defaultValue={name} onChange={onChangeName} />
                    <br/>
                    <br/>
                    <label htmlFor='surname1'>Primer apellido: </label>
                    <InputText name='surname1' id='surname1' defaultValue={surname1} onChange={onChangeSurname1}/>
                    <br/>
                    <br/>
                    <label htmlFor='surname2'>Segundo apellido:</label>
                    <InputText name='surname2' id='surname2' defaultValue={surname2} onChange={onChangeSurname2} />
                    <br/>
                    <br/>
                    <label htmlFor='email'>Email: </label>
                    <InputText name='email' id='userEmail' defaultValue={email} onChange={onChangeEmail} />
                    <br/>
                    <br/>
                    <label htmlFor='birthDate'>Fecha de nacimiento: </label>
                    <Calendar id='birthDate' name='birthDate' value={birthDate} onChange={onBirthDayChange} showIcon/>
                    <br/>
                    <label htmlFor='userType'>Tipo:</label>
                    <InputText value={type} disabled/>
                </Fieldset>
            </div>
        </div>
    )
}

export default DialogUser;
