import GuestLayout from '@/components/Layouts/GuestLayout'
import Table from '@/components/Table'

const Test = () => {

    return (
        <GuestLayout>
          <Table fetchUrl={"http://localhost:8000/producto"}/>
          <Table fetchUrl={"http://localhost:8000/tienda"}/>
          <Table fetchUrl={"http://localhost:8000/usuario"}/>
        </GuestLayout>
    );
  }

export default Test
