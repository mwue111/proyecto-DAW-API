import Head from 'next/head'
import Navigation from '@/components/Layouts/Navigation'

const GuestLayout = ({ header, children }) => {
    return (
        <div>
            <Head>
                <title>Laravel</title>
            </Head>

            <div className="min-h-screen bg-gray-100">
            <Navigation />

            {/* Page Heading */}
            <header className="bg-white shadow">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    {header}
                </div>
            </header>

            {/* Page Content */}
            <main className="bg-gray-100">{children}</main>
        </div>
        </div>
    )
}

export default GuestLayout
