import React, {useState} from 'react'
import { useAuth } from '@/hooks/auth'
import { Sidebar } from 'primereact/sidebar'
import { Button } from 'primereact/button'
import NavLink from '@/components/NavLink'
import { useRouter } from 'next/router'
import ApplicationLogo from '@/components/ApplicationLogo'

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
                        href="/productos"
                        active={router.pathname === '/productos'}>
                        Productos
                    </NavLink>
                    <br/>
                    <NavLink
                        href="/admin"
                        active={router.pathname === '/admin'}>
                        Guest
                    </NavLink>
                    <br/>
                    <NavLink
                        href="/tienda/1"
                        active={router.pathname === '/tienda'}>
                        Tienda
                    </NavLink>
                </Sidebar>
                <Button icon="pi pi-arrow-right" onClick={() => setVisibleLeft(true)} className="mr-2" />
            </div>
        </div>
    );

}

export default SideDrawer;
