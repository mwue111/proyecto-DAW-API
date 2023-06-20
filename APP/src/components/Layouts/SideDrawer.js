import React, {useState} from 'react'
import { useAuth } from '@/hooks/auth'
import { Sidebar } from 'primereact/sidebar'
import { Button } from 'primereact/button'
import NavLink from '@/components/NavLink'
import { useRouter } from 'next/router'
import ApplicationLogo from '@/components/ApplicationLogo'
import Link from 'next/link';

const SideDrawer = () => {
    const [visibleLeft, setVisibleLeft] = useState(false);
    const router = useRouter()

    return(
        <div>
            <div className="card mx-8">
                <Sidebar className="bg-gray-900 text-white" visible={visibleLeft} onHide={() => setVisibleLeft(false)}>
                    <Link href="/">
                        <div className='flex items-center'>
                            <ApplicationLogo className="block h-10 w-auto fill-current text-gray-600" />
                            <span className="text-xl font-bold ml-2 hover:text-red-600">
                                Localmeria
                            </span>
                        </div>
                    </Link>
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
