import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useAuth } from '@/hooks/auth'
import { Fieldset } from 'primereact/fieldset';
import { Dropdown } from 'primereact/dropdown';
import { InputNumber } from 'primereact/inputnumber';
import { InputTextarea } from 'primereact/inputtextarea';

const EditStoreDialog = ({ store, onUpdate}) => {
    const { user } = useAuth();
    const [visible, setVisible] = useState(false);
    const [updatedStore, setUpdatedStore] = useState(store);
    const optionsRoadType = ['Calle', 'Avenida', 'Paseo', 'Boulevard', 'Carretera'];
    const [cities, setCities] = useState([]);
    const [dropdownCity, setDropdownCity] = useState(store.address?.town ? {'name': store.address.town.name, 'id': store.address.town.id} : null);
    const [ road_type, setRoadType ] = useState(store.address ? store.address.road_type : null);

    
    useEffect(() => {
        let cityOptions = [];
        axios.get(process.env.NEXT_PUBLIC_BACKEND_URL + '/ciudad')
                .then(res => {res.data.map((item) => {
                    cityOptions.push({
                        'name': item.name,
                        'id': item.id
                    })
                })
            })
        setCities(cityOptions);
    }, []);

    useEffect(() => {
      setUpdatedStore(store);
    }, [store]);
  
    const handleChange = (e) => {
        if(e.target.name === 'address.town.name'){
            setUpdatedStore({ ...updatedStore, address: { town: { name: e.target.value.name, id:e.target.value.id } } });
            setDropdownCity(e.target.value);
        }else if (e.target.name === 'address.road_type'){
            setUpdatedStore({ ...updatedStore, address: { road_type: e.target.value } });
            setRoadType(e.target.value);
        }
        else{
            setUpdatedStore({ ...updatedStore, [e.target.name]: e.target.value });
        }
      };
      
  
      const handleUpdate = () => {
        const changedFields = Object.keys(updatedStore).filter(
          (key) => updatedStore[key] !== store[key]
        );
        const updatedFields = {};
      
        let addressChanged = false; 
      
        changedFields.forEach((field) => {
          if (field.startsWith("address.")) {
            addressChanged = true;
      
            if (!updatedFields.address) {
              updatedFields.address = {};
            }
      
            const addressField = field.replace("address.", "");
            updatedFields.address[addressField] = updatedStore[field];
          } else {
            // Set the updated value for non-address fields
            updatedFields[field] = updatedStore[field];
          }
        });
      
        if (addressChanged || (updatedFields.address && updatedFields.address.town)) {
          updatedFields.address = {
            ...updatedFields.address,
            id: store.address.id,
          };
        }
      
        console.log(updatedFields);
      
        axios
          .put(`${process.env.NEXT_PUBLIC_BACKEND_URL}/tienda/${store.id}`, updatedFields)
          .then((response) => {
            setVisible(false);
            onUpdate();
          });
      };
      
      
  
    const renderFooter = () => {
      return (
        <div>
          <Button
            label="Cancel"
            icon="pi pi-times"
            className="p-button-text"
            onClick={() => setVisible(false)}
          />
          <Button
            label="Apply Changes"
            icon="pi pi-check"
            className="p-button-text"
            onClick={handleUpdate}
          />
        </div>
      );
    };

    return (
        <>
            <Button
                label="Editar tienda"
                onClick={() => setVisible(true)}
                className="p-button-outlined p-button-info"
            />

            <Dialog
                header="Edita tu tienda"
                visible={visible}
                style={{ width: '50vw' }}
                onHide={() => setVisible(false)}
                footer={renderFooter}
            >
                <div className="p-fluid">
                    <div className="p-field">
                        <label htmlFor="name">Name</label>
                        <InputText
                            id="name"
                            name="name"
                            value={updatedStore.name}
                            onChange={handleChange}
                        />
                    </div>

                </div>
                <div className="p-fluid">
                    <div className="p-field">
                        <label htmlFor="description">Description</label>
                        <InputText
                            id="description"
                            name="description"
                            value={updatedStore.description}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="p-fluid">
                <div className='field'>
                <Fieldset legend='Dirección'>
                    <Dropdown name='address.road_type' value={road_type} options={optionsRoadType} onChange={handleChange} placeholder='Selecciona un tipo de vía' required/>
                    <br/>
                    <label htmlFor='address.name'>Nombre de la calle:</label>
                    <InputText name='address.name' defaultValue={updatedStore.address?.name ? updatedStore.address.name : null} onChange={handleChange} required />
                    <br/>
                    <label htmlFor='adress.number'>Número</label>
                    <InputNumber name='address.number' value={updatedStore.address?.number ? updatedStore.address.number : null} onValueChange={handleChange} mode='decimal' required />
                    <br/>
                    <label htmlFor='address.zip_code'>Código postal</label>
                    <InputText name='address.zip_code' defaultValue={updatedStore.address?.zip_code ? updatedStore.address.zip_code : null} onChange={handleChange} required />
                    <br/>
                    <label htmlFor='address.remarks'>Comentarios adicionales:</label>
                    <InputTextarea name='address.remarks' defaultValue={updatedStore.address?.remarks ? updatedStore.address.remarks : null} onChange={handleChange} rows={5}/>
                    <br />
                    <label htmlFor='address.town.name'>Ciudad:</label>
                    <Dropdown name='address.town.name' value={dropdownCity} options={cities} onChange={handleChange} placeholder='Selecciona una ciudad' optionLabel='name' required/>
                </Fieldset>
                </div>
                </div>
                <div className="p-fluid">
                    <div className="p-field">
                        <label htmlFor="email">Email</label>
                        <InputText
                            id="email"
                            name="email"
                            value={updatedStore.email}
                            onChange={handleChange}
                        />
                    </div>
                </div>
            </Dialog>
        </>
    );
};

export default EditStoreDialog;
  