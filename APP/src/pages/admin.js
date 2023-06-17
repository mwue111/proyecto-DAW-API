import GuestLayout from '@/components/Layouts/GuestLayout'
import Table from '@/components/Table'

const AdminPanel = () => {
    const product = process.env.NEXT_PUBLIC_BACKEND_URL + '/producto';
    const store = process.env.NEXT_PUBLIC_BACKEND_URL + '/tienda';
    const user = process.env.NEXT_PUBLIC_BACKEND_URL + '/usuario';

    return (
        <GuestLayout
        header={
          <h2 className="font-semibold text-xl text-gray-800 leading-tight">
              Test
          </h2>
      }>
          <div className="container mx-auto px-4 sm:px-8">
            <div className="py-8">
              <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                <div className="inline-block min-w-full shadow-md rounded-lg overflow-hidden">
                    <Table fetchUrl={product}/>
                    <Table fetchUrl={store}/>
                    <Table fetchUrl={user}/>
                    </div>
              </div>
            </div>
          </div>
        </GuestLayout>
    );
  }

export default AdminPanel
