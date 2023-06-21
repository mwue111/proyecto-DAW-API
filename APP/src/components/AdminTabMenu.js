import React, { useState } from 'react'
import { TabMenu } from 'primereact/tabmenu'
import { Button } from 'primereact/button'
import Link from 'next/link'
import NavLink from '@/components/NavLink'
import { useRouter } from 'next/router'

/**
 * Functional component representing a tab menu for administration purposes.
 * @param {function} setContent - Callback function to set the content based on the selected tab.
 */
const AdminTabMenu = ({ setContent }) => {
    // State variables
    const [activeIndex, setActiveIndex] = useState('');

    // Router instance
    const router = useRouter()

    // Configuration for the tab menu
    const table = [
        {label: 'Tienda', icon: 'pi pi-fw pi-shopping-bag'},
        {label: 'Producto', icon: 'pi pi-fw pi-shopping-cart'},
        {label: 'Usuario', icon: 'pi pi-fw pi-users'}
    ];

    return (
        <div>
            <div className="card">
                {/*Se cambia el contenido al hacer click en una de las pestañas y se pone en minúsculas para homogeneizar*/}
                <TabMenu model={table} activeIndex={activeIndex} onTabChange={e => {setContent((e.value.label).toLowerCase()); setActiveIndex(e.index)}}/>
         </div>
        </div>
    );
}

export default AdminTabMenu;
