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
      <div className="container m-auto text-center px-6 opacity-100">
        <h2 className="text-4xl font-bold mb-2 text-white">¡Ven al lado oscuro de las compras!</h2>
        <h3 className="text-2xl mb-8 text-gray-200">Bueno, bonito y barato..... y ¡cerca de tí!</h3>
        <button className="bg-white font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider hover:border-transparent hover:text-blue-500 hover:bg-gray-800 transition-all">Compra AHORA</button>
      </div>
    </div>
          
          <section className="container mx-auto px-6 p-10">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">¡Dános tu dinero!</h2>
            <div className="flex items-center flex-wrap mb-20">
              <div className="w-full md:w-1/2 pr-10">
                <h4 className="text-3xl text-gray-800 font-bold mb-3">Mercado central</h4>
                <p className="text-gray-600 mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lorem mauris, mattis quis arcu eget, tempor bibendum nunc. Cras at sapien scelerisque, tempor sem eu, tempor turpis. Cras finibus mauris at risus porttitor suscipit. Nunc egestas lorem libero, et eleifend leo interdum ut. Quisque tincidunt tristique ante sed rhoncus. Sed convallis condimentum sapien, non molestie quam tincidunt commodo. Proin non ligula augue. Suspendisse et leo nec est porta vehicula non et turpis. Nam dignissim cursus ipsum, id bibendum lacus consectetur id. Integer sit amet rutrum tortor. Ut a dui sit amet felis auctor vehicula. Nullam mi nibh, consequat et laoreet tincidunt, ultrices ut metus. Vestibulum at nibh eget eros imperdiet ultrices. Maecenas sit amet ligula vitae purus euismod lobortis eget eu justo. Ut quis mattis lorem.</p>
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
                <h4 className="text-3xl text-gray-800 font-bold mb-3">Ser vegetariano es sencillo</h4>
                <p className="text-gray-600 mb-8">Donec pulvinar dui tortor. Donec a fringilla purus. Suspendisse finibus lorem ut neque blandit fermentum. Sed id pellentesque quam, ut maximus nisl. Curabitur id porttitor lectus. Aenean consectetur mi magna, sit amet suscipit justo eleifend vitae. Mauris nec lobortis massa, et mattis erat. Praesent faucibus nisl vitae velit tempor, id sagittis nunc egestas. Fusce in dui quis ipsum pharetra vulputate. In accumsan fringilla iaculis.</p>
              </div>
            </div>
            <div className="flex items-center flex-wrap mb-20">
              <div className="w-full md:w-1/2 pr-10">
                <h4 className="text-3xl text-gray-800 font-bold mb-3">Comer pescado tambien está bien</h4>
                <p className="text-gray-600 mb-8">Etiam tortor neque, tincidunt sed dui vitae, feugiat aliquet dui. Morbi viverra odio id accumsan aliquet. Morbi quis ligula sit amet sapien faucibus rhoncus ac eget enim. Aenean eget auctor orci, at tristique nunc. Aenean vestibulum mi in placerat vulputate. Sed a justo mattis, venenatis est ut, pulvinar diam. Mauris id lobortis urna, id vulputate diam. Aliquam rhoncus libero nec erat lobortis, ac tempus leo placerat. Sed at rhoncus nunc. Vivamus quis tortor eget magna accumsan fringilla ut quis turpis. Curabitur sit amet fermentum odio, in egestas odio. Ut ac eleifend urna. Integer nec tincidunt metus. In urna orci, finibus in elit vitae, accumsan vestibulum nisl. Fusce pellentesque et erat viverra malesuada. Nam gravida auctor sem vel gravida.</p>
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
                    <p className="text-gray-800 text-base px-6 mb-5">¡Que viva la República!</p>
                    <p className="text-gray-500 text-xs md:text-sm px-6">Luke Skywalker</p>
                  </div>
                </div>
                
                <div className="w-full h-auto md:w-1/3 px-2 mb-4">
                  <div className="flex flex-col justify-between h-full bg-white rounded shadow py-2">
                    <p className="text-gray-800 text-base px-6 mb-5">¡Gracias a esta Web he conseguido vender dos superdestructores a los que no daba salida!</p>
                    <p className="text-gray-500 text-xs md:text-sm px-6">Canciller Palpatine</p>
                  </div>
                </div>
                
                <div className="w-full h-auto md:w-1/3 px-2 mb-4">
                  <div className="flex flex-col justify-between h-full bg-white rounded shadow py-2">
                    <p className="text-gray-800 text-base px-6 mb-5">¡Por fin se donde encontrar recambios para el respirador cerca de casa!</p>
                    <p className="text-gray-500 text-xs md:text-sm px-6">Darth Vader</p>
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
                <div className="w-full md:w-1/4 text-center md:text-left ">
                  <h5 className="uppercase mb-6 font-bold">Links</h5>
                  <ul className="mb-4">
                    <li className="mt-2">
                      <a href="#" className="hover:underline text-gray-600 hover:text-orange-500">Link 1</a>
                    </li>
                    <li className="mt-2">
                      <a href="#" className="hover:underline text-gray-600 hover:text-orange-500">Link 2</a>
                    </li>
                    <li className="mt-2">
                      <a href="#" className="hover:underline text-gray-600 hover:text-orange-500">Link 3</a>
                    </li>
                  </ul>
                </div>
                <div className="w-full md:w-1/4 text-center md:text-left ">
                  <h5 className="uppercase mb-6 font-bold">Legal</h5>
                  <ul className="mb-4">
                    <li className="mt-2">
                      <a href="#" className="hover:underline text-gray-600 hover:text-orange-500">Legal 1</a>
                    </li>
                    <li className="mt-2">
                      <a href="#" className="hover:underline text-gray-600 hover:text-orange-500">Legal 2</a>
                    </li>
                  </ul>
                </div>
                <div className="w-full md:w-1/4 text-center md:text-left ">
                  <h5 className="uppercase mb-6 font-bold">Social</h5>
                  <ul className="mb-4">
                    <li className="mt-2">
                      <a href="#" className="hover:underline text-gray-600 hover:text-orange-500">Corellia</a>
                    </li>
                    <li className="mt-2">
                      <a href="#" className="hover:underline text-gray-600 hover:text-orange-500">Bilbringi</a>
                    </li>
                    <li className="mt-2">
                      <a href="#" className="hover:underline text-gray-600 hover:text-orange-500">Fondor</a>
                    </li>
                  </ul>
                </div>
                <div className="w-full md:w-1/4 text-center md:text-left ">
                  <h5 className="uppercase mb-6 font-bold">About us</h5>
                  <ul className="mb-4">
                    <li className="mt-2">
                      <a href="#" className="hover:underline text-gray-600 hover:text-orange-500">Link 1</a>
                    </li>
                    <li className="mt-2">
                      <a href="#" className="hover:underline text-gray-600 hover:text-orange-500">Link 2</a>
                    </li>
                    <li className="mt-2">
                      <a href="#" className="hover:underline text-gray-600 hover:text-orange-500">Link 3</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </footer>
        </>
    )
}
