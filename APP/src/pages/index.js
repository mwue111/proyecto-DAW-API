import Head from 'next/head'
import Link from 'next/link'
import { useAuth } from '@/hooks/auth'
import Navigation from '@/components/Layouts/Navigation'

export default function Home() {
    const { user } = useAuth({ middleware: 'guest' })

    return (
        <>
            <Head>
                <title>Localmeria</title>
            </Head>

        <Navigation user={user}/>
          
        <div className="py-20 bg-cover bg-no-repeat bg-fixed"  style={{backgroundImage:"url(https://thumbs.dreamstime.com/b/almer%C3%ADa-espa%C3%B1a-de-julio-puerta-entrada-al-mercado-central-vista-panor%C3%A1mica-durante-el-d%C3%ADa-216116383.jpg)"}}>
          <div className="container m-auto text-center px-6">
            <h2 className="text-4xl font-bold mb-2 text-white" style={{textShadow: "2px 2px 4px rgba(0,0,0,0.5)"}}>¡Ven al lado luminoso de las compras!</h2>
            <h3 className="text-2xl mb-8 text-gray-200" style={{textShadow: "2px 2px 4px rgba(0,0,0,0.5)"}}>Encuentra las mejores tiendas locales en Almería.</h3>
            <button className="bg-white font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider hover:border-transparent hover:text-blue-500 hover:bg-gray-800 transition-all">Compra AHORA</button>
          </div>
        </div>

      <section className="container mx-auto px-6 p-10">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">Tiendas locales en Almería</h2>
        <div className="flex items-center flex-wrap mb-20">
          <div className="w-full md:w-1/2 pr-10">
            <h4 className="text-3xl text-gray-800 font-bold mb-3">Mercado Central de Almería</h4>
            <p className="text-gray-600 mb-8">Visita el Mercado Central de Almería para encontrar productos frescos de calidad, como frutas, verduras, carne y pescado. Conoce a los comerciantes locales y apoya la economía de tu comunidad.</p>
          </div>
          <div className="w-full md:w-1/2">
            <img className="rounded-lg" src="https://multimedia.andalucia.org/content_images/main_image_67662.jpeg" alt="mercado central" />
          </div>
        </div>
        <div className="flex items-center flex-wrap mb-20">
          <div className="w-full md:w-1/2">
            <img className="rounded-lg" src="https://media-cdn.tripadvisor.com/media/photo-s/09/a2/07/a3/el-mercado-central-de.jpg" alt="frutas" />
          </div>
          <div className="w-full md:w-1/2 pl-10">
            <h4 className="text-3xl text-gray-800 font-bold mb-3">Frutas y verduras locales</h4>
            <p className="text-gray-600 mb-8">Compra frutas y verduras locales en Almería para apoyar a los agricultores y disfrutar de productos frescos y de temporada. Encuentra las mejores tiendas locales para encontrar una gran variedad de productos.</p>
          </div>
        </div>
            <div className="flex items-center flex-wrap mb-20">
              <div className="w-full md:w-1/2 pr-10">
              <h4 className="text-3xl text-gray-800 font-bold mb-3">¡Descubre las tiendas locales de Almería de productos frescos!</h4>
<p className="text-gray-600 mb-8">Almería es una ciudad que cuenta con una gran cantidad de tiendas locales que ofrecen productos únicos y de alta calidad. Desde ropa y accesorios hasta comida y artesanías, podrás encontrar una amplia variedad de productos en las tiendas locales de Almería. Además, al comprar en estas tiendas, estarás apoyando a los pequeños negocios de la ciudad y contribuyendo a la economía local. ¡No te pierdas la oportunidad de explorar lo mejor de Almería a través de sus tiendas locales!</p>
              </div>
              <div className="w-full md:w-1/2">
                <img className="rounded-lg" src="https://www.barcelo.com/guia-turismo/wp-content/uploads/2020/02/mercado-central-almeria1-1.jpg" alt="Syncing" />
              </div>
            </div>
          </section>
          
          <section className="bg-gray-100">
            <div className="container mx-auto px-6 py-20">
              <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">Clientes satisfechos</h2>
              <div className="flex flex-wrap">
                
                <div className="w-full h-auto md:w-1/3 px-2 mb-4">
                  <div className="flex flex-col justify-between h-full bg-white rounded shadow py-2">
                  <p className="text-gray-800 text-base px-6 mb-5">Encontré la tienda perfecta para comprar regalos únicos para mi familia y amigos en Almería. ¡Altamente recomendada!</p>
                  <p className="text-gray-500 text-xs md:text-sm px-6">Maria García</p>
                  </div>
                </div>
                
                <div className="w-full h-auto md:w-1/3 px-2 mb-4">
                  <div className="flex flex-col justify-between h-full bg-white rounded shadow py-2">
                  <p className="text-gray-800 text-base px-6 mb-5">Me encanta comprar productos locales y de alta calidad en Almería. ¡La tienda que encontré aquí nunca me decepciona!</p>
                  <p className="text-gray-500 text-xs md:text-sm px-6">Pedro Sánchez</p>
                  </div>
                </div>
                
                <div className="w-full h-auto md:w-1/3 px-2 mb-4">
                  <div className="flex flex-col justify-between h-full bg-white rounded shadow py-2">
                  <p className="text-gray-800 text-base px-6 mb-5">Siempre encuentro los ingredientes más frescos y sabrosos en las tiendas locales de Almería. ¡Una experiencia de compra única!</p>
                  <p className="text-gray-500 text-xs md:text-sm px-6">Ana López</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          <section style={{backgroundColor:"#667eea"}}>
            <div className="container mx-auto px-6 text-center py-20">
              <h2 className="mb-6 text-4xl font-bold text-center text-white">¿Algun comentario?</h2>
              <h3 className="my-4 text-2xl text-white">Pulsa aquí para enviarnoslo</h3>
              <button className="bg-white font-bold rounded-full mt-6 py-4 px-8 shadow-lg uppercase tracking-wider hover:border-red hover:text-white hover:bg-red-600">Añadir comentario</button>
            </div>
          </section>
          
          <footer className="bg-gray-100">
            <div className="container mx-auto px-6 pt-10 pb-6">
              <div className="flex flex-wrap">
                <div className="w-full md:w-1/4 text-center md:text-left">
                  <h5 className="uppercase mb-6 font-bold">Enlaces</h5>
                  <ul className="mb-4">
                    <li className="mt-2">
                      <a href="/" className="hover:underline text-gray-600 hover:text-orange-500">Inicio</a>
                    </li>
                    <li className="mt-2">
                      <a href="/" className="hover:underline text-gray-600 hover:text-orange-500">Productos</a>
                    </li>
                    <li className="mt-2">
                      <a href="/" className="hover:underline text-gray-600 hover:text-orange-500">Contacto</a>
                    </li>
                  </ul>
                </div>
                <div className="w-full md:w-1/4 text-center md:text-left">
                  <h5 className="uppercase mb-6 font-bold">Legal</h5>
                  <ul className="mb-4">
                    <li className="mt-2">
                      <a href="/" className="hover:underline text-gray-600 hover:text-orange-500">Términos y condiciones</a>
                    </li>
                    <li className="mt-2">
                      <a href="/" className="hover:underline text-gray-600 hover:text-orange-500">Política de privacidad</a>
                    </li>
                  </ul>
                </div>
                <div className="w-full md:w-1/4 text-center md:text-left">
                  <h5 className="uppercase mb-6 font-bold">Redes Sociales</h5>
                  <ul className="mb-4">
                    <li className="mt-2">
                      <a href="/" className="hover:underline text-gray-600 hover:text-orange-500">Facebook</a>
                    </li>
                    <li className="mt-2">
                      <a href="/" className="hover:underline text-gray-600 hover:text-orange-500">Twitter</a>
                    </li>
                    <li className="mt-2">
                      <a href="/" className="hover:underline text-gray-600 hover:text-orange-500">Instagram</a>
                    </li>
                  </ul>
                </div>
                <div className="w-full md:w-1/4 text-center md:text-left">
                  <h5 className="uppercase mb-6 font-bold">Sobre nosotros</h5>
                  <ul className="mb-4">
                    <li className="mt-2">
                      <a href="/" className="hover:underline text-gray-600 hover:text-orange-500">Equipo</a>
                    </li>
                    <li className="mt-2">
                      <a href="/" className="hover:underline text-gray-600 hover:text-orange-500">Misión</a>
                    </li>
                    <li className="mt-2">
                      <a href="/" className="hover:underline text-gray-600 hover:text-orange-500">Visión</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </footer>
        </>
    )
}
