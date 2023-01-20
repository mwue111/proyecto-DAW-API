import React, {useState} from 'react'
import { useAuth } from '@/hooks/auth'
import { Sidebar } from 'primereact/sidebar'
import { Button } from 'primereact/button'

const SideDrawer = () => {
    const [visibleLeft, setVisibleLeft] = useState(false);

    return(
        <div>
            <div className="card">
                <Sidebar visible={visibleLeft} onHide={() => setVisibleLeft(false)}>
                    <h3>Sidebarrrr</h3>
                </Sidebar>
                <Button icon="pi pi-arrow-right" onClick={() => setVisibleLeft(true)} className="mr-2" />
            </div>
        </div>
    );

}

export default SideDrawer;
