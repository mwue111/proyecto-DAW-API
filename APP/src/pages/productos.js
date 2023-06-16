import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'
import FullTable from '../components/FullTable'
import RecommendedProducts from '../components/RecommendedProducts'

const Productos = () => {
    const url = process.env.NEXT_PUBLIC_BACKEND_URL + '/producto';

    return (
        <AppLayout
            header={
                <div className="p-6 bg-white border-b border-gray-200">
                            <h1 className="text-3xl font-bold">Productos más buscados</h1>
                            <RecommendedProducts />
                    </div>
            }>


            <Head>
                <title>Buscador de productos</title>
            </Head>

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <div className="p-6 bg-white border-b border-gray-200">
                            <h1 className="text-3xl font-bold">Buscador de productos</h1>
                    </div>
                        <div className="p-6 bg-white border-b border-gray-200">
                            <FullTable
                                fetchUrl={url}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    )
}

export default Productos
