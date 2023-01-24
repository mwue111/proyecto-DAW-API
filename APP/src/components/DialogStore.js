import React, { useState, useEffect, useRef } from 'react';
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
                <fieldset>
                    <select>
                        <option>opción</option>
                    </select>
                    <InputTextarea id="address" value={address} onChange={(e) => onInputChange(e, 'address')} required rows={3} cols={20} />

                </fieldset>
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


{/*
                <div className="field">
                    <label htmlFor="name">Nombre</label>
                    <InputText id="name" value={item.name} onChange={(e) => onInputChange(e, 'name')} required autoFocus />
                </div>
                <div className="field">
                    <label htmlFor="address">Dirección</label>
                    <InputTextarea id="address" value={JSONaddress} onChange={(e) => onInputChange(e, 'address')} required rows={3} cols={20} />
                </div>
                <div className="field">
                    <label htmlFor="email">Email</label>
                    <InputText id="email" value={item.email} onChange={(e) => onInputChange(e, 'email')} required rows={3} cols={20} />
                </div>
                <div className="field">
                    <label htmlFor="telephone1">Teléfono</label>
                    <InputText id="telephone1" value={item.telephone1} onChange={(e) => onInputChange(e, 'telephone1')} required rows={3} cols={20} />
                </div>
                <div className="field">
                    <label htmlFor="telephone2">Teléfono 2</label>
                    <InputText id="telephone2" value={item.telephone2} onChange={(e) => onInputChange(e, 'telephone2')} required rows={3} cols={20} />
                </div>
                <div className="field">
                    <label htmlFor="location">Localización</label>
                    <InputText id="location" value={`${item.longitude} - ${item.latitude}`} onChange={(e) => onInputChange(e, 'telephone2')} required rows={3} cols={20} />
                </div>
                <div className="field">
                    <label className="mb-3">Category</label>
                    <div className="formgrid grid">
                        <div className="field-radiobutton col-6">
                            <RadioButton inputId="category1" name="category" value="Accessories" onChange={onCategoryChange} checked={data.category === 'Accessories'} />
                            <label htmlFor="category1">Accessories</label>
                        </div>
                        <div className="field-radiobutton col-6">
                            <RadioButton inputId="category2" name="category" value="Clothing" onChange={onCategoryChange} checked={data.category === 'Clothing'} />
                            <label htmlFor="category2">Clothing</label>
                        </div>
                        <div className="field-radiobutton col-6">
                            <RadioButton inputId="category3" name="category" value="Electronics" onChange={onCategoryChange} checked={data.category === 'Electronics'} />
                            <label htmlFor="category3">Electronics</label>
                        </div>
                        <div className="field-radiobutton col-6">
                            <RadioButton inputId="category4" name="category" value="Fitness" onChange={onCategoryChange} checked={data.category === 'Fitness'} />
                            <label htmlFor="category4">Fitness</label>
                        </div>
                    </div>
                </div>
                <div className="formgrid grid">
                    <div className="field col">
                        <label htmlFor="price">Price</label>
                        <InputNumber id="price" value={data.price} onValueChange={(e) => onInputNumberChange(e, 'price')} mode="currency" currency="USD" locale="en-US" />
                    </div>
                    <div className="field col">
                        <label htmlFor="quantity">Quantity</label>
                        <InputNumber id="quantity" value={data.quantity} onValueChange={(e) => onInputNumberChange(e, 'quantity')} integeronly />
                    </div>
                </div>

                */}
