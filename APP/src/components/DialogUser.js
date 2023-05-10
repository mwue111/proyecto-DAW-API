import React, { useState, useEffect, useRef } from 'react';
import { InputText } from 'primereact/inputtext';
import { Fieldset } from 'primereact/fieldset';
import { Input } from 'postcss';
import { Toast } from 'primereact/toast';
import { Calendar } from 'primereact/calendar';

const DialogUser = ({ user }) => {
    // console.log('user: ', user);

    {/*Para obtener la fecha de nacimiento de los usuarios*/}
    let milisec = Date.parse(user.birth_date);
    let BirthDate = new Date(milisec);

    // const [username, setUsername] = useState(user.username);
    const [name, setName] = useState(user.name);
    const [surname1, setSurname1] = useState(user.surname1);
    const [surname2, setSurname2] = useState(user.surname2);
    const [email, setEmail] = useState(user.email);
    const [birthDate, setBirthDate] = useState(BirthDate);
    const [type, setType] = useState(user.type);
    const toast = useRef(null);

    const [dataForm, setDataForm] = useState(user);

    const handleInputChange = (e) => {
        const target = e.target;    //el elemento html <input name="X">Y</input>
        const value = target.value; //valor del input: Y
        const name = target.name;   //name del input: X

        if(name !== null){

        }

    }

    return(
        <div>
            <div className='field'>
                <Fieldset legend='Datos del usuario'>
                    <label htmlFor='username'>Nombre de usuario: </label>
                    <InputText name='username' id='userUsername' defaultValue={dataForm.username} onChange={handleInputChange}/>
                    <br/>
                    <br/>
                    <label htmlFor='name'>Nombre: </label>
                    <InputText name='name' id='userName' defaultValue={name} onChange={handleInputChange} />
                    <br/>
                    <br/>
                    <label htmlFor='surname1'>Primer apellido: </label>
                    <InputText name='surname1' id='surname1' defaultValue={surname1} onChange={handleInputChange}/>
                    <br/>
                    <br/>
                    <label htmlFor='surname2'>Segundo apellido:</label>
                    <InputText name='surname2' id='surname2' defaultValue={surname2} onChange={handleInputChange} />
                    <br/>
                    <br/>
                    <label htmlFor='email'>Email: </label>
                    <InputText name='email' id='userEmail' defaultValue={email} onChange={handleInputChange} />
                    <br/>
                    <br/>
                    <label htmlFor='birthDate'>Fecha de nacimiento: </label>
                    <Calendar id='birthDate' name='birthDate' value={birthDate} onChange={handleInputChange} showIcon/>
                    <br/>
                    <label htmlFor='userType'>Tipo:</label>
                    <InputText value={type} disabled/>
                </Fieldset>
            </div>
        </div>
    )
}

export default DialogUser;
