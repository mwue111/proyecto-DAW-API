import Head from 'next/head';
import CookieNotice from '@/components/CookieNotice';
import { useAuth } from '@/hooks/auth';
import Navigation from '@/components/Layouts/Navigation';
import Footer from '@/components/Layouts/Footer';
import CommentForm from '@/components/CommentForm';
import Testimonials from '@/components/Testimonials';
import { useRouter } from 'next/router';

export default function Home() {
  const { user } = useAuth({ middleware: 'guest' });
  const router = useRouter();

  const handleButtonClick = () => {
    if (user) {
      router.push('/productos');
    } else {
      router.push('/login');
    }
  };

  return (
    <>
      <Head>
        <title>Localmeria</title>
      </Head>

      <Navigation user={user} />

      <div className="py-80 relative">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.mnstatic.com/0c/59/0c59a742b0dbfe091f2d170df864d496.jpg"
            alt="Your Image"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-6xl font-extrabold text-white mb-4" style={{ textShadow: '2px 4px 4px black' }}>
              ¡Ven al lado luminoso de las compras!
            </h2>
            <h3 className="text-3xl text-white font-extrabold mb-8" style={{ textShadow: '2px 4px 4px black' }}>
              Encuentra las mejores tiendas locales en Almería.
            </h3>
            <button className="bg-white text-gray-800 font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider hover:border-transparent hover:text-blue-500 hover:bg-gray-800 transition-all"
              onClick={handleButtonClick}
            >
              ¡Busca mejores precios!
            </button>
          </div>
        </div>
      </div>

        <section
          className="px-0 p-10"
          style={{
            background: `url(/landingpage.jpg) center / 100% 100% no-repeat`,
            width: '100vw',
            marginLeft: '-1rem',
            marginRight: '-1rem',
          }}
        >
        <h2 className="text-4xl font-extrabold text-center text-gray-100 mb-8">
          ¿Por qué comprar en grandes superficies cuando puedes hacerlo en las tiendas locales de Almería?
        </h2>
        <div className="flex items-center flex-wrap mb-20">
          <div className="w-full md:w-1/2 pr-10 backdrop-filter backdrop-blur-lg bg-opacity-50 rounded-lg">
            <h4 className="text-4xl text-gray-800 font-bold mb-3" >
              ¿Cansado de no encontrar los productos que buscas?
            </h4>
            <p className="text-xl font-semibold text-gray-600 mb-8">
              ¡No te preocupes! En Localmeria te ayudamos a encontrar los productos que buscas en las tiendas locales de Almería. ¡No te pierdas la oportunidad de apoyar a los pequeños negocios de la ciudad y contribuir a la economía local!
            </p>
          </div>
          <div className="w-80 md:w-1/2">
            <img className="rounded-lg" src="https://img.freepik.com/foto-gratis/pensar-sintiendose-dudoso-confundido_1194-413865.jpg?w=1380&t=st=1687386065~exp=1687386665~hmac=b340545ef972f287b68d4336a7749c88eae2ae78090ba773cf00948691686dff" alt="donde comprar" />
          </div>
        </div>
        <div className="flex items-center flex-wrap mb-20">
          <div className="w-full md:w-1/2">
            <img className="rounded-lg" src="https://img.freepik.com/foto-gratis/pequeno-carrito-supermercado-dinero-hucha_23-2147931142.jpg?w=1380&t=st=1687386167~exp=1687386767~hmac=2f9d2029477dad42e8fa6130cd177467156e3d9da10cd329b6d8d67ddac8fc50" alt="ahorro" />
          </div>
          <div className="w-full md:w-1/2 pl-10 backdrop-filter backdrop-blur-lg bg-opacity-50 rounded-lg bg-blue-100">
            <h4 className="text-4xl text-gray-800 font-bold mb-3">
              ¡Ahorra dinero comprando en las tiendas locales de Almería!
            </h4>
            <p className="text-xl font-semibold text-gray-600 mb-8">
              Almería es una ciudad que cuenta con una gran cantidad de tiendas locales que ofrecen productos únicos y de alta calidad. Desde ropa y accesorios hasta comida y artesanías, podrás encontrar una amplia variedad de productos en las tiendas locales de Almería. Además, al comprar en estas tiendas, estarás apoyando a los pequeños negocios de la ciudad y contribuyendo a la economía local. ¡No te pierdas la oportunidad de explorar lo mejor de Almería a través de sus tiendas locales!
            </p>
          </div>
        </div>
        <div className="flex items-center flex-wrap mb-20">
        <div className="w-full md:w-1/2 pr-10 backdrop-filter backdrop-blur-lg bg-opacity-50 rounded-lg">
            <h4 className="text-4xl text-gray-800 font-bold mb-3">
              ¡Descubre las tiendas locales de Almería de productos frescos!
            </h4>
            <p className="text-xl font-semibold text-gray-600 mb-8">
              Almería es una ciudad que cuenta con una gran cantidad de tiendas locales que ofrecen productos únicos y de alta calidad. Desde ropa y accesorios hasta comida y artesanías, podrás encontrar una amplia variedad de productos en las tiendas locales de Almería. Además, al comprar en estas tiendas, estarás apoyando a los pequeños negocios de la ciudad y contribuyendo a la economía local. ¡No te pierdas la oportunidad de explorar lo mejor de Almería a través de sus tiendas locales!
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <img className="rounded-lg" src="https://img.freepik.com/foto-gratis/mano-vendedor-sosteniendo-recipiente-acero-inoxidable-mientras-cliente-compra-verduras-mercado_23-2148209790.jpg?w=1380&t=st=1687387511~exp=1687388111~hmac=89fd76d360b19807ec636b7cd1a5d36d864e100a7fda30d748205d658d13f549" alt="Syncing" />
          </div>
        </div>
      </section>

      <Testimonials />

      <section className="bg-gray-100">
      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="mb-6 text-4xl font-bold text-gray-900 text-center">
              ¿Algún comentario?
            </h2>
            <h3 className="my-4 text-2xl text-gray-900 text-center">
              Deja tus opiniones por aquí y ayúdanos a mejorar. ¡Gracias!
            </h3>
          </div>
          <div>
            <CommentForm />
          </div>
        </div>
      </div>
    </section>

      <Footer />
      <CookieNotice />
    </>
  );
}
