import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';

const DialogSore = ({ store, address }) =>{
    return(
        <div>
            <div className="field">
                <label htmlFor="name">Nombre</label>
                <InputText id="name" value={store.name} onChange={(e) => onInputChange(e, 'name')} required autoFocus />
            </div>

            <div className="field">
                <label htmlFor="address">Dirección</label>
                <InputTextarea id="address" value={address} onChange={(e) => onInputChange(e, 'address')} required rows={3} cols={20} />
            </div>

            <div className="field">
                <label htmlFor="email">Email</label>
                <InputText id="email" value={store.email} onChange={(e) => onInputChange(e, 'email')} required rows={3} cols={20} />
            </div>

            <div className="field">
                <label htmlFor="telephone1">Teléfono</label>
                <InputText id="telephone1" value={store.telephone1} onChange={(e) => onInputChange(e, 'telephone1')} required rows={3} cols={20} />
            </div>

            <div className="field">
                <label htmlFor="telephone2">Teléfono 2</label>
                <InputText id="telephone2" value={store.telephone2} onChange={(e) => onInputChange(e, 'telephone2')} required rows={3} cols={20} />
            </div>

            <div className="field">
                <label htmlFor="location">Localización</label>
                <InputText id="location" value={`${store.longitude} - ${store.latitude}`} onChange={(e) => onInputChange(e, 'telephone2')} required rows={3} cols={20} />
            </div>
        </div>
    )
}

export default DialogSore;
