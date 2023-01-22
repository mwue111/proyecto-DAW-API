import React, { useState } from 'react'
import { TabMenu } from 'primereact/tabmenu'
import { Button } from 'primereact/button'
import Link from 'next/link'
import NavLink from '@/components/NavLink'
import { useRouter } from 'next/router'

const AdminTabMenu = ({ onTabChange }) => {
    const [activeIndex, setActiveIndex] = useState(3);
    const router = useRouter()

    const items = [
        {label: 'Tiendas', icon: 'pi pi-fw pi-shopping-bag'},
        {label: 'Productos', icon: 'pi pi-fw pi-shopping-cart'},
        {label: 'Usuarios', icon: 'pi pi-fw pi-users'}
    ];

    return (
        <div>
            <div className="card">
                <TabMenu model={items} onTabChange={{/*algo*/}} />
                {/*https://www.youtube.com/watch?time_continue=48&v=f444AP_QpBA&embeds_euri=https%3A%2F%2Fwww.google.com%2Fsearch%3Fq%3Dfunctional%2Btabmenu%2Bwith%2Breact%26rlz%3D1C1AVFC_enES889ES890%26oq%3Dfunctional%2Btabmenu%2B%26aqs%3Dchrome.0.69i59&source_ve_path=MTM5MTE3LDI4NjYzLDI4NjY0&feature=emb_logo*/}
            </div>
        </div>
    );
}

export default AdminTabMenu;
