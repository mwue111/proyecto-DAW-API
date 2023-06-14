import React, { useState, useEffect, useRef } from 'react';
import Label from '@/components/Label'
import { InputText } from 'primereact/inputtext';
import { Fieldset } from 'primereact/fieldset';
import { Calendar } from 'primereact/calendar';
import { Dropdown } from 'primereact/dropdown';
import Upload from './Upload';
import { birthDateObject } from '@/helpers/helper';
import { birthDateFormat } from '@/helpers/helper';
import { ToggleButton } from 'primereact/togglebutton';

import InputError from '@/components/InputError';
import { Message } from 'primereact/message';

const DialogUser = ({ user, errors }) => {

    if(user.tipo === 'owner'){
        console.log('user: ', user);
    }

    const types = ['client','administrator','owner'];
    const [dataForm, setDataForm] = useState(user);
    // const [dropdownType, setDropdownType] = useState(user.type ? user.type : null);
    const [selectedDate, setSelectedDate] = useState(user.id ? birthDateObject(user.nacimiento) : null);
    const [dropdownValue, setDropdownValue] = useState(user.tipo ? user.tipo : null);
    const [checked, setChecked] = useState(false);

    useEffect(() => {
        // console.log('selectedDate: ', selectedDate)
    }, []);

    const handleInputChange = (e) => {
        const target = e.target;    //el elemento html <input name="X">Y</input>
        let value = target.value;   //valor del input: Y
        const name = target.name;   //name del input: X

        if(name !== null){
            switch(name){
                case 'tipo': setDropdownValue(value); break;
                case 'nacimiento': value = birthDateFormat(value); setSelectedDate(birthDateObject(value)); break;
            }

            dataForm[name] = value;
        }

        setDataForm(dataForm);
        console.log('dataForm: ', dataForm);

    }

    const uploadHandler = data => {

        // if(user.profile_imgs || user.files){
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
        // }
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
                    <Calendar name='nacimiento' value={selectedDate} onChange={handleInputChange} showIcon required dateFormat='dd/mm/yy' />
                    {/* value={validBirthDay ? validBirthDay : null}*/}
                    <br/>
                    <Label htmlFor='profile_imgs'>Imagen de perfil:</Label>
                    <Upload item={user} setProductPic={(data) => uploadHandler(data)} name="profile_imgs"></Upload>
                    <br/>
                    <Label htmlFor='tipo'>Tipo:</Label>
                    <Dropdown name="tipo" value={dropdownValue} options={types} placeholder="Seleccione el tipo" onChange={handleInputChange}/>

                    {dropdownValue === 'owner' &&

                    <>
                        <br />
                        <Label htmlFor='files'>Documentos que acreditan titularidad del negocio: </Label>
                        <Upload item={user} setProductPic={(data) => uploadHandler(data)} name="files"></Upload>
                        <br />
                        <Label htmlFor='verified'>Dueño verificado: </Label>
                        <ToggleButton checked={checked} onChange={(e) => setChecked(e.value)} />
                    </>

                    }


                </Fieldset>
            </div>
            </form>
        </div>
    )
}

export default DialogUser;
