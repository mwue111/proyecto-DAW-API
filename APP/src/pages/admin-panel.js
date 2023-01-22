import AdminLayout from '@/components/Layouts/AdminLayout'
import ApplicationLogo from '@/components/ApplicationLogo';
import NavLink from '@/components/NavLink';

const AdminPanel = () => {

    return (
        <AdminLayout
        header={
          <h2 className="font-semibold text-xl text-gray-800 leading-tight">
              Esta vista debería tener una portada (que puede ser un crud directamente)
          </h2>
        }>

          <div className="container mx-auto px-4 sm:px-8">
            <div className="py-8">
              <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                <div className="inline-block min-w-full shadow-md rounded-lg overflow-hidden bg-white">
                </div>
              </div>
            </div>
          </div>
        </AdminLayout>

    );
  }

export default AdminPanel
