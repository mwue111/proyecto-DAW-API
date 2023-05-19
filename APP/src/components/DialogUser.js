import React, { useState, useEffect, useRef } from 'react';
import Label from '@/components/Label'
import { InputText } from 'primereact/inputtext';
import InputError from '@/components/InputError';
import { Fieldset } from 'primereact/fieldset';
import { Input } from 'postcss';
import { Toast } from 'primereact/toast';
import { Calendar } from 'primereact/calendar';

const DialogUser = ({ user, errors }) => {
    // console.log('user: ', user);

    console.log('Errores en DialogUser: ', errors.username);
    {/*Para obtener la fecha de nacimiento de los usuarios*/}
    let milisec = Date.parse(user.birth_date);
    let BirthDate = new Date(milisec);
    const [dataForm, setDataForm] = useState(user);
    // const [errors, setErrors] = useState([]);

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

    const submitForm = event => {
        event.preventDefault()
    }

    return(
        <div>
            <form onSubmit={submitForm} encType="multipart/form-data">
            <div className='field'>
                <Fieldset legend='Datos del usuario'>
                    <Label htmlFor='username'>Nombre de usuario: </Label>
                    <InputText name='username' id='userUsername' defaultValue={dataForm.username} onChange={handleInputChange} required />
                    <InputError messages={errors.username} />
                    {/*
                    className="p-invalid"
                    */}
                    <br/>
                    <br/>
                    <Label htmlFor='password'>Contraseña: </Label>
                    <InputText name='password' id='userUsername' defaultValue={dataForm.password} onChange={handleInputChange} required/>
                    {/* type="password" */}
                    <br/>
                    <br/>
                    <Label htmlFor='password'>Confirmar contraseña: </Label>
                    <InputText name='password_c' id='userUsername' defaultValue={dataForm.password_C} onChange={handleInputChange} required/>
                    {/* type="password" */}
                    <br/>
                    <br/>
                    <Label htmlFor='name'>Nombre: </Label>
                    <InputText name='name' id='userName' defaultValue={dataForm.nombre} onChange={handleInputChange} required/>
                    <br/>
                    <br/>
                    <Label htmlFor='surname1'>Primer apellido: </Label>
                    <InputText name='apellido1' id='surname1' defaultValue={dataForm.apellido1} onChange={handleInputChange} required/>
                    <br/>
                    <br/>
                    <Label htmlFor='surname2'>Segundo apellido:</Label>
                    <InputText name='apellido2' id='surname2' defaultValue={dataForm.apellido2} onChange={handleInputChange} />
                    <br/>
                    <br/>
                    <Label htmlFor='email'>Email: </Label>
                    <InputText name='email' type='email' id='userEmail' defaultValue={dataForm.email} onChange={handleInputChange} required/>
                    <br/>
                    <br/>
                    <Label htmlFor='fecha_nacimiento'>Fecha de nacimiento: </Label>
                    <Calendar id='birthDate' name='fecha_nacimiento' value={dataForm.fecha_nacimiento} onChange={handleInputChange} showIcon required/>
                    <br/>
                    <Label htmlFor='type'>Tipo:</Label>
                    <InputText name="type" value={dataForm.tipo} onChange={handleInputChange}/>
                </Fieldset>
            </div>
            </form>
        </div>
    )
}

export default DialogUser;
