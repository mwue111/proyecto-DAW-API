import Navigation from '@/components/Layouts/Navigation'
import { useAuth } from '@/hooks/auth'
import Head from 'next/head'
import CookieNotice from '../CookieNotice'

//Cuando hay un usuario registrado

const AppLayout = ({ header, children }) => {
    const { user } = useAuth()

    return (
        <div>
            <Head>
                    <title>Dahsboard</title>
            </Head>

            <div className="min-h-screen bg-gray-100">
                <Navigation user={user} />

                {/* Page Heading */}
                <header className="bg-white shadow">
                    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                        {header}
                    </div>
                </header>

                {/* Page Content */}
                <main>{children}</main>
            </div>
            <CookieNotice />
        </div>
    )
}

export default AppLayout
