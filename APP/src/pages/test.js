import GuestLayout from '@/components/Layouts/GuestLayout'
import Table from '@/components/Table'

const Test = () => {

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
                    <Table fetchUrl={"http://localhost:8000/producto"}/>
                    <Table fetchUrl={"http://localhost:8000/tienda"}/>
                    <Table fetchUrl={"http://localhost:8000/usuario"}/>
                    </div>
              </div>
            </div>
          </div>
        </GuestLayout>
    );
  }

export default Test
