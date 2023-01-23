import React, { useState } from 'react'
import { TabMenu } from 'primereact/tabmenu'
import { Button } from 'primereact/button'
import Link from 'next/link'
import NavLink from '@/components/NavLink'
import { useRouter } from 'next/router'

const AdminTabMenu = ({ setContent }) => {

    const router = useRouter()

    const items = [
        {label: 'Tienda', icon: 'pi pi-fw pi-shopping-bag'},
        {label: 'Producto', icon: 'pi pi-fw pi-shopping-cart'},
        {label: 'Usuario', icon: 'pi pi-fw pi-users'}
    ];

    return (
        <div>
            <div className="card">
                {/*Se cambia el contenido al hacer click en una de las pestañas y se pone en minúsculas para homogeneizar*/}
                <TabMenu model={items} onTabChange={e => setContent((e.value.label).toLowerCase())} />
         </div>
        </div>
    );
}

export default AdminTabMenu;
