import React, { useState, useEffect, useRef } from 'react';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Fieldset } from 'primereact/fieldset';
import { Dropdown } from 'primereact/dropdown';
import { InputNumber } from 'primereact/inputnumber';

const DialogProduct = ({ product }) => {
    {/*
    Producto:
    -id
    -name
    -description
    -brand_id
    -category_id
    -estaría bien poner fotos, están en otra tabla
    */}

    console.log('producto: ', product);
    return(
        <div>Prueba</div>
    );
}

export default DialogProduct;
