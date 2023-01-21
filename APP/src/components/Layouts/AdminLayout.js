import Navigation from '@/components/Layouts/Navigation'
import AdminNavigation from '@/components/Layouts/AdminNavigation'
import { useAuth } from '@/hooks/auth'
import Head from 'next/head'

// Cuando hay un usuario admin registrado
//Cambios hechos en la línea 20 para mostrar un nav u otro - DUDA: cómo añadir que el usuario sea admin

const AdminLayout = ({ header, children, route }) => {
    const { user } = useAuth({ middleware: 'auth' })

    return (
        <div>
            <Head>
                    <title>Administrator Layout</title>
            </Head>

            <div className="min-h-screen bg-gray-100">

                {route === 'adminPanel' ? <AdminNavigation /> : <Navigation user={user}/>}

                {/* Page Heading */}
                <header className="bg-white shadow">
                    <div className="max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
                        {header}
                    </div>
                </header>

                {/* Page Content */}
                <main>{children}</main>
            </div>
        </div>
    )
}

export default AdminLayout
