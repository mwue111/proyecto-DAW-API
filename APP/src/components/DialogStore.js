import React, { useState, useEffect } from 'react';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Fieldset } from 'primereact/fieldset';
import { Dropdown } from 'primereact/dropdown';
import { InputNumber } from 'primereact/inputnumber';
import Upload from './Upload';
import Images from './Images';

/**
 * DialogStore component.
 * @param {Object} props - The component props.
 * @param {Object} props.store - The store object.
 * @param {Function} props.setItem - The function to set the store item.
 * @param {Array} props.cities - The list of cities.
 * @param {Array} props.owners - The list of owners.
 * @returns {JSX.Element} The rendered component.
 */
const DialogStore = ({ store, setItem, cities, owners, table }) => {
    const optionsRoadType = ['Calle', 'Avenida', 'Paseo', 'Boulevard', 'Carretera'];
    const newStore = store;
    const optionsCity = [...cities];
    const optionsOwner = [...owners]
    let ownerName;
    let ownerId;

    for (let i = 0; i < optionsOwner.length; i++) {
        if (store.user_id === optionsOwner[i].id) {
            ownerName = optionsOwner[i].name;
            ownerId = optionsOwner[i].id;
        }
    }

    const [dataForm, setDataForm] = useState(store);
    const [dropdownValue, setDropdownValue] = useState(store.address ? store.address.road_type : null);
    const [dropdownCities, setDropdownCities] = useState(store.address?.town ? { 'name': store.address.town.name, 'id': store.address.town.id } : null);
    const [dropdownOwner, setDropdownOwner] = useState(store.user_id ? { 'name': ownerName, 'id': ownerId } : null);

    useEffect(() => {
        setItem(dataForm);
    }, [dataForm, dropdownCities]);

    /**
     * Handles the change of input values.
     * @param {object} e - The event object.
     */
    const handleInputChange = (e) => {
        const target = e.target;
        const val = target.value;
        const name = target.name;

        if (name !== null) {
            const checkName = name.split('.');

            if (checkName.length == 2) {
                newStore[checkName[0]][checkName[1]] = val;

                if (name === 'address.road_type') {
                    setDropdownValue(e.value);
                }
            }
            else if (checkName.length == 3) {
                newStore[checkName[0]][checkName[1]][checkName[2]] = val.name;
                newStore[checkName[0]][checkName[1]]['id'] = val.id;

                if (name === 'address.town.name') {
                    setDropdownCities(e.value);
                }
            }
            else {
                if (name === 'user_id') {
                    newStore[checkName[0]] = val.id;
                    setDropdownOwner(e.value);
                }
                newStore[name] = val;
            }
            setDataForm(newStore);
        }
    }

    const uploadHandler = (data) => {
        // console.log('store: ', store);
        // let allImages = [];

        if (store.store_imgs) {
            const allImages = store.store_imgs;

            data.forEach(item => {
                const files = Object.values(item);
                for (let i = 0; i < files.length; i++) {
                    allImages.push(files[i]);
                }
            })

            console.log('allImages: ', allImages);
        }

    }

    const handleDelete = (data) => {
        dataForm['img_delete'] = data;
    }

    return (
        <div>
            <div className='field'>
                <Fieldset legend='Datos de la tienda'>
                    <label htmlFor='storeName'>Nombre de la tienda:</label>
                    <InputText id='storeName'
                        name='nombre'
                        defaultValue={dataForm.nombre}
                        onChange={handleInputChange}
                        required
                        autoFocus
                    />
                    <br />
                    <br />
                    <label htmlFor='user_id'>Propietario/a:</label>
                    <Dropdown name='user_id'
                        value={dropdownOwner}
                        options={optionsOwner}
                        onChange={handleInputChange}
                        placeholder='Seleccione el/la propietario/a'
                        optionLabel='name'
                        required
                    />
                    <br />
                    <label htmlFor='description'>Descripción de la tienda:</label>
                    <InputTextarea name='descripcion'
                        defaultValue={dataForm.descripcion}
                        onChange={handleInputChange}
                        rows={5}
                        required
                    />
                </Fieldset>
            </div>
            {/* <br />
            <Fieldset legend='Subir fotos de la tienda'>
                <Upload setProductPic={(data) => { uploadHandler(data) }}
                />

            </Fieldset>
            <br />
            <Fieldset legend='Eliminar imágenes'>
                <Images table={table}
                    product={store}
                    setImagesToDelete={(data) => { handleDelete(data) }}
                />
            </Fieldset> */}
            <br />
            <div className='field'>
                <Fieldset legend='Dirección'>
                    <Dropdown name='address.road_type'
                        value={dropdownValue}
                        options={optionsRoadType}
                        onChange={handleInputChange}
                        placeholder='Selecciona un tipo de vía'
                        required
                    />
                    <br />
                    <label htmlFor='address.name'>Nombre de la calle:</label>
                    <InputText name='address.name'
                        defaultValue={dataForm.address.name}
                        onChange={handleInputChange}
                        required
                    />
                    <br />
                    <label htmlFor='adress.number'>Número</label>
                    <InputNumber name='address.number'
                        value={dataForm.address.number}
                        onValueChange={handleInputChange}
                        mode='decimal'
                        useGrouping={false}
                        required
                    />
                    <br />
                    <label htmlFor='address.zip_code'>Código postal</label>
                    <InputText name='address.zip_code'
                        defaultValue={dataForm.address.zip_code}
                        onChange={handleInputChange}
                        required
                    />
                    <br />
                    <label htmlFor='address.remarks'>Comentarios adicionales:</label>
                    <InputTextarea name='address.remarks'
                        defaultValue={dataForm.address.remarks}
                        onChange={handleInputChange}
                        rows={5}
                    />
                    <br />
                    <label htmlFor='address.town.name'>Ciudad:</label>
                    <Dropdown name='address.town.name'
                        value={dropdownCities}
                        options={optionsCity}
                        onChange={handleInputChange}
                        placeholder='Selecciona una ciudad'
                        optionLabel='name'
                        required
                    />
                </Fieldset>
            </div>
            <br />
            <div className='field'>
                <Fieldset legend='Datos de contacto'>
                    <label htmlFor='email'>Email</label>
                    <InputText name='email'
                        defaultValue={dataForm.email}
                        onChange={handleInputChange}
                        required
                    />
                    <br />
                    <label htmlFor='telephone1'>Teléfono 1</label>
                    <InputNumber name='telefono1'
                        value={dataForm.telefono1}
                        onValueChange={handleInputChange}
                        mode='decimal'
                        useGrouping={false}
                        required
                    />
                    <br />
                    <label htmlFor='telephone2'>Teléfono 2</label>
                    <InputNumber name='telefono2'
                        value={dataForm.telefono2}
                        onValueChange={handleInputChange}
                        mode='decimal'
                        useGrouping={false}
                    />
                </Fieldset>
            </div>
        </div>
    )
}

export default DialogStore;
