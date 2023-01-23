import Navigation from '@/components/Layouts/Navigation'
import AdminNavigation from '@/components/Layouts/AdminNavigation'
import { useAuth } from '@/hooks/auth'
import Head from 'next/head'
import { useState } from 'react';
import Table from '@/components/Table'

// Cuando hay un usuario admin registrado

const AdminLayout = () => {
    const { user } = useAuth({ middleware: 'auth' })

    //Creado el hook de state para poder establecer el estado y compartirlo a los hijos (adminNavigation y las tablas)
    const [content, setContent] = useState('tienda');

    return (
        <div>
            <Head>
                    <title>Administrator Layout</title>
            </Head>

            <div className="min-h-screen bg-gray-100">

                {/*Se envía setContent como props para que modifique la tabla que se va a mostrar*/}
                <AdminNavigation user={user} setContent={setContent}/>

                {/* Page Heading */}
                <header className="bg-white shadow">
                    <div className="max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
                        <div>Tabla de {content}</div>
                    </div>
                </header>

                {/* Page Content */}
                <main>
                    {/*El content por defecto (tienda) es el que aparece al entrar en esta vista y cambiará según el setState que recibe admin navigation */}
                    <Table fetchUrl={`http://localhost:8000/${content}`} />
                </main>
            </div>
        </div>
    )
}

export default AdminLayout
