import AdminLayout from '@/components/Layouts/AdminLayout'


const AdminPanel = () => {

    return (
        <AdminLayout 
        header={
          <h2 className="font-semibold text-xl text-gray-800 leading-tight">
              Admin Panel
          </h2>
      }>
          <div className="container mx-auto px-4 sm:px-8">
            <div className="py-8">
              <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                <div className="inline-block min-w-full shadow-md rounded-lg overflow-hidden bg-white">
                    Cosas de admin
                </div>
              </div>
            </div>
          </div>
        </AdminLayout>
    );
  }

export default AdminPanel
