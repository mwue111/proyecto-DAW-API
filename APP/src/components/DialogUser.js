import React, { useState, useEffect, useRef } from 'react';
import Label from '@/components/Label'
import { InputText } from 'primereact/inputtext';
import { Fieldset } from 'primereact/fieldset';
import { Calendar } from 'primereact/calendar';
import { Dropdown } from 'primereact/dropdown';
import Upload from './Upload';

import InputError from '@/components/InputError';
import { Message } from 'primereact/message';

const DialogUser = ({ user, errors }) => {

    // console.log('user: ', user);
    const validBirthDay = new Date(user.nacimiento);

    {/*Para obtener la fecha de nacimiento de los usuarios*/}
    let milisec = Date.parse(user.birth_date);
    let BirthDate = new Date(milisec);
    const types = ['client','administrator','owner'];

    const [dataForm, setDataForm] = useState(user);
    const [dropdownType, setDropdownType] = useState(user.type ? user.type : null);

    const handleInputChange = (e) => {
        const target = e.target;    //el elemento html <input name="X">Y</input>
        const value = target.value; //valor del input: Y
        const name = target.name;   //name del input: X

        if(name !== null){
            switch(name){
                case 'type': setDropdownType(value); break;
            }

            dataForm[name] = value;
        }

        setDataForm(dataForm);
        // console.log('dataForm: ', dataForm);

    }

    const uploadHandler = data => {

        if(user.profile_imgs || user.files){
            const allFiles = [];

            handleFiles(data, allFiles);

            for(let i = 0; i < allFiles.length; i++){
                if(allFiles[i] instanceof File){
                    if((allFiles[i].type).toString().includes('application/pdf')){
                        // console.log('es un pdf.');
                        dataForm['files'] = data;

                        const allFiles = user.files;

                        handleFiles(data, allFiles);
                    }
                    else{
                        // console.log('es una imagen.');
                        dataForm['profile_imgs'] = data;

                        const allImages = user.profile_imgs;

                        handleFiles(data, allImages);
                    }
                }
            }
        }
    }

    const handleFiles = (data, allFiles) => {
        return data.forEach(item => {
            const files = Object.values(item);

            for(let i = 0; i < files.length; i++) {
                allFiles.push(files[i]);
            }
        })
    }

    const submitForm = event => {
        event.preventDefault();

    }

    return(
        <div>
            <form onSubmit={submitForm} encType="multipart/form-data">
            <div className='field'>
                <Fieldset legend='Datos del usuario'>
                    <Label htmlFor='username'>Nombre de usuario: </Label>
                    <InputText name='username' id='userUsername' defaultValue={dataForm.username} onChange={handleInputChange} required />
                    {/* <Message severity="error" text="Username is required" /> */}
                    {/* <InputError messages={errors.username} /> */}

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
                    <InputText name='nombre' id='name' defaultValue={dataForm.nombre} onChange={handleInputChange} required/>
                    <br/>
                    <br/>
                    <Label htmlFor='surname1'>Primer apellido: </Label>
                    <InputText name='apellido' id='surname1' defaultValue={dataForm.apellido} onChange={handleInputChange} required/>
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
                    <Calendar id='birthDate' name='nacimiento' value={dataForm.nacimiento} onChange={handleInputChange} showIcon className="custom-calendar" required/>
                    {/* <Calendar id='birthDate' name='nacimiento' value={dataForm.nacimiento} onChange={handleInputChange} showIcon required/> */}
                    <br/>
                    <Label htmlFor='profile_imgs'>Imagen de perfil:</Label>
                    <Upload item={user} setProductPic={(data) => uploadHandler(data)} name="profile_imgs"></Upload>
                    <br/>
                    <Label htmlFor='type'>Tipo:</Label>
                    <Dropdown name="type" value={dropdownType} options={types} placeholder="Seleccione el tipo" onChange={handleInputChange}/>

                    {dropdownType === 'owner' &&

                    <>
                        <br />
                        <Label htmlFor='files'>Documentos que acreditan titularidad del negocio: </Label>
                        <Upload item={user} setProductPic={(data) => uploadHandler(data)} name="files"></Upload>
                    </>

                    }
                </Fieldset>
            </div>
            </form>
        </div>
    )
}

export default DialogUser;
