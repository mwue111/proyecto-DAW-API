import React, {useState} from 'react'
import { useAuth } from '@/hooks/auth'
import { Sidebar } from 'primereact/sidebar'
import { Button } from 'primereact/button'
import NavLink from '@/components/NavLink'
import { useRouter } from 'next/router'
import ApplicationLogo from '@/components/ApplicationLogo'
//Cambios aquí: añadida la clase mx-8 en la línea 13

const SideDrawer = () => {
    const [visibleLeft, setVisibleLeft] = useState(false);
    const router = useRouter()

    return(
        <div>
            <div className="card mx-8">
                <Sidebar visible={visibleLeft} onHide={() => setVisibleLeft(false)}>
                    <ApplicationLogo className="block h-10 w-auto fill-current text-gray-600" />
                    <br/>
                    <NavLink
                        href="/dashboard"
                        active={router.pathname === '/dashboard'}>
                        Dashboard
                    </NavLink>
                    <br/>
                    <NavLink
                        href="/test"
                        active={router.pathname === '/test'}>
                        Guest
                    </NavLink>
                    <br/>
                    <NavLink
                        href="/store"
                        active={router.pathname === '/store'}>
                        Tienda
                    </NavLink>
                </Sidebar>
                <Button icon="pi pi-arrow-right" onClick={() => setVisibleLeft(true)} className="mr-2" />
            </div>
        </div>
    );

}

export default SideDrawer;
