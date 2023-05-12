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
    const [dataForm, setDataForm] = useState(user);

    // useEffect(() => {
    //     setItem(dataForm)
    // }, [dataForm])

    const handleInputChange = (e) => {
        const target = e.target;    //el elemento html <input name="X">Y</input>
        const value = target.value; //valor del input: Y
        const name = target.name;   //name del input: X

        if(name !== null){
         dataForm[name] = value;
        }

        setDataForm(dataForm);
        // console.log('dataForm: ', dataForm);

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
                    <InputText name='name' id='userName' defaultValue={dataForm.nombre} onChange={handleInputChange} />
                    <br/>
                    <br/>
                    <label htmlFor='surname1'>Primer apellido: </label>
                    <InputText name='apellido1' id='surname1' defaultValue={dataForm.apellido1} onChange={handleInputChange}/>
                    <br/>
                    <br/>
                    <label htmlFor='surname2'>Segundo apellido:</label>
                    <InputText name='apellido2' id='surname2' defaultValue={dataForm.apellido2} onChange={handleInputChange} />
                    <br/>
                    <br/>
                    <label htmlFor='email'>Email: </label>
                    <InputText name='email' id='userEmail' defaultValue={dataForm.email} onChange={handleInputChange} />
                    <br/>
                    <br/>
                    <label htmlFor='fecha_nacimiento'>Fecha de nacimiento: </label>
                    <Calendar id='birthDate' name='fecha_nacimiento' value={dataForm.fecha_nacimiento} onChange={handleInputChange} showIcon/>
                    <br/>
                    <label htmlFor='type'>Tipo:</label>
                    <InputText name="type" value={dataForm.tipo} onChange={handleInputChange}/>
                </Fieldset>
            </div>
        </div>
    )
}

export default DialogUser;
