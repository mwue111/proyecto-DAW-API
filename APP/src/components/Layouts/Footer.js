import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900">
      <div className="container mx-auto px-6 pt-10 pb-6">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/4 text-center md:text-left">
            <h5 className="uppercase mb-6 font-bold text-gray-100">Enlaces</h5>
            <ul className="mb-4">
              <li className="mt-2">
                <a
                  href="/"
                  className="hover:underline text-gray-100 hover:text-red-500"
                >
                  Inicio
                </a>
              </li>
              <li className="mt-2">
                <a
                  href="/productos"
                  className="hover:underline text-gray-100 hover:text-red-500"
                >
                  Productos
                </a>
              </li>
              <li className="mt-2">
                <a
                  href="/contacto"
                  className="hover:underline text-gray-100 hover:text-red-500"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 text-center md:text-left">
            <h5 className="uppercase mb-6 font-bold text-gray-100">Legal</h5>
            <ul className="mb-4">
              <li className="mt-2">
                <a
                  href="/terms"
                  className="hover:underline text-gray-100 hover:text-red-500"
                >
                  Términos y condiciones
                </a>
              </li>
              <li className="mt-2">
                <a
                  href="/privacy"
                  className="hover:underline text-gray-100 hover:text-red-500"
                >
                  Política de privacidad
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 text-center md:text-left">
            <h5 className="uppercase mb-6 font-bold text-gray-100">Redes Sociales</h5>
            <ul className="mb-4">
              <li className="mt-2">
                <a
                  href="/"
                  className="hover:underline text-gray-100 hover:text-red-500"
                >
                  Facebook
                </a>
              </li>
              <li className="mt-2">
                <a
                  href="/"
                  className="hover:underline text-gray-100 hover:text-red-500"
                >
                  Twitter
                </a>
              </li>
              <li className="mt-2">
                <a
                  href="/"
                  className="hover:underline text-gray-100 hover:text-red-500"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 text-center md:text-left">
            <h5 className="uppercase mb-6 font-bold text-gray-100">Sobre nosotros</h5>
            <ul className="mb-4">
              <li className="mt-2">
                <a
                  href="/equipo"
                  className="hover:underline text-gray-100 hover:text-red-500"
                >
                  Equipo
                </a>
              </li>
              <br />
              <br />
              <li className="mt-2 text-gray-100">
                  @2023 Localmeria
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
