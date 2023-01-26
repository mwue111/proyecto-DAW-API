import React, { useState, useEffect, useRef } from 'react';
import { InputText } from 'primereact/inputtext';
import { Fieldset } from 'primereact/fieldset';
import { Input } from 'postcss';

const DialogUser = ({ user }) => {
    {/*
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
    console.log('user: ', user);

    const [username, setUsername] = useState('');
    const [name, setName] = useState('');
    const [surname1, setSurname1] = useState('');
    const [surname2, setSurname2] = useState('');
    const [email, setEmail] = useState('');
    const [birthDate, setBirthDate] = useState('');

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
        setEmail(e.target.value);
    }

    return(
        <div>
            <div className='field'>
                <Fieldset legend='Datos del usuario'>
                    <label htmlFor='username'>Nombre de usuario: </label>
                    <InputText name='username' id='userUsername' defaultValue={user.username} onChange={onChangeUsername}/>
                    <br/>
                    <br/>
                    <label htmlFor='name'>Nombre: </label>
                    <InputText name='name' id='userName' defaultValue={user.name} onChange={onChangeName} />
                    <br/>
                    <br/>
                    <label htmlFor='surname1'>Primer apellido: </label>
                    <InputText name='surname1' id='surname1' defaultValue={user.surname1} onChange={onChangeSurname1}/>
                    <br/>
                    <br/>
                    <label htmlFor='surname2'>Segundo apellido:</label>
                    <InputText name='surname2' id='surname2' defaultValue={user.surname2} onChange={onChangeSurname2} />
                    <br/>
                    <br/>
                    <label htmlFor='email'>Email: </label>
                    <InputText name='email' id='userEmail' defaultValue={user.email} onChange={onChangeEmail} />
                </Fieldset>
            </div>
        </div>
    )
}

export default DialogUser;
