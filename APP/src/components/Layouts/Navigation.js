import ApplicationLogo from '@/components/ApplicationLogo';
import Dropdown from '@/components/Dropdown';
import Link from 'next/link';
import NavLink from '@/components/NavLink';
import ResponsiveNavLink, {
  ResponsiveNavButton,
} from '@/components/ResponsiveNavLink';
import { DropdownButton } from '@/components/DropdownLink';
import { useAuth } from '@/hooks/auth';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import SearchBar from '@/components/SearchBar';
import axios from 'axios';

const Navigation = ({ user }) => {
  const router = useRouter();
  //haz una peticion a la api si el usuario es owner, para obtener el id de la tienda
  const [store, setStore] = useState(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (user?.type === 'owner') {
      axios
        .get(process.env.NEXT_PUBLIC_BACKEND_URL + `/tienda/encontrar/${user.id}`)
        .then((response) => {
          setStore(response.data);
        });
    }
  }, [user]);

  const { logout } = useAuth();

 

  return (
    <nav className="relative z-30 flex justify-between bg-gray-900 text-white on-top">
      {/* Primary Navigation Menu */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link href="/">
                <div className="flex items-center">
                  <ApplicationLogo className="block h-10 w-auto fill-current text-gray-600" />
                  <span className="text-xl font-bold ml-2 hover:text-red-600">
                    Localmeria
                  </span>
                </div>
              </Link>
            </div>

            {/* Navigation Links */}
            <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
              <NavLink
                href="/productos"
                active={router.pathname === '/productos'}
              >
                Productos
              </NavLink>
            </div>
            {user?.type === 'owner' && (
              <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
                <NavLink
                  href={`/tienda/${store?.id}`}
                  active={router.pathname === `${user.id}`}
                >
                  Mi tienda
                </NavLink>
              </div>
            )}
            {user?.type === 'administrator' && (
              <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
                <NavLink
                  href="/admin-panel"
                  active={router.pathname === '/admin-panel'}
                >
                  Admin panel
                </NavLink>
              </div>
            )}
          </div>

          {/* Settings Dropdown */}
          {user ? (
            <div className="hidden sm:flex sm:items-center sm:ml-6 space-x-4">
              <div className="flex items-center">
                <SearchBar />
              </div>
              <Dropdown
                align="right"
                width="auto"
                trigger={
                  <button className="flex items-center text-sm font-medium text-gray-100 hover:text-red-400 focus:outline-none transition duration-150 ease-in-out">
                    <div className="text-white">
                      <i
                        className="pi pi-user"
                        style={{ fontSize: '1.5rem' }}
                      ></i>
                    </div>
                  </button>
                }
              >
                {/* Dropdown Menu */}
                <div className="p-4">
                <div className="flex items-center mb-4">
                  <div className="flex-shrink-0">
                    <svg
                      className="h-10 w-10 fill-current text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <div className="font-medium leading-6 text-base text-gray-900">
                      {user ? user.name : 'Invitado'}
                    </div>
                    <div className="font-medium leading-6 text-gray-400">
                      <div className="email-container" style={{ whiteSpace: 'nowrap' }}>
                        {user ? user.email : 'Por favor inicia sesión'}
                      </div>
                    </div>
                  </div>
                </div>
                <DropdownButton onClick={logout}>Logout</DropdownButton>
                </div>
              </Dropdown>
            </div>
          ) : (
            <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
              <div className="flex items-center">
                <SearchBar />
              </div>
              <Link
                href="/register"
                className={`my-4 inline-flex items-center px-4 py-2 rounded-md font-bold leading-5 text-gray-900 bg-yellow-400 hover:bg-yellow-300 focus:outline-none focus:bg-yellow-500 transition duration-150 ease-in-out ${
                  router.pathname === '/register' ? 'font-bold' : ''
                }`}
              >
                Registrarse
              </Link>

              <Link
                href="/login"
                className={`my-4 ml-4 inline-flex items-center px-4 py-2 rounded-md font-bold leading-5 text-gray-900 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:bg-gray-300 transition duration-150 ease-in-out ${
                  router.pathname === '/login' ? 'font-bold' : ''
                }`}
              >
                Login
              </Link>
            </div>
          )}

          {/* Hamburger */}
          <div className="-mr-2 flex items-center sm:hidden absolute top-0 inset-x-0 p-2 transition transform origin-top-right z-20">
            <button
              onClick={() => setOpen(open => !open)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {open ? (
                  <path
                    className="inline-flex"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    className="inline-flex"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Responsive Navigation Menu */}
      {open && (
        <div className="responsive-menu-overlay">
          <div className="absolute top-16 inset-x-0 bg-gray-900 sm:hidden">
            <div className="pt-2 pb-3 flex items-center space-x-4">
              <ResponsiveNavLink
                href="/productos"
                active={router.pathname === '/productos'}
              >
                Productos
              </ResponsiveNavLink>
              <SearchBar />
            </div>

            {/* Responsive Settings Options */}
            <div className="pt-4 pb-1 border-t border-gray-200">
              <div className="flex items-center px-4">
                <div className="flex-shrink-0">
                  <svg
                    className="h-10 w-10 fill-current text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <div className="ml-3">
                  <div className="font-medium leading-6 text-base text-white">
                    {user ? user.name : 'Invitado'}
                  </div>
                  <div className="font-medium leading-6 text-gray-400">
                    {user ? user.email : 'Por favor inicia sesión'}
                  </div>
                </div>
              </div>

              <div className="mt-3 space-y-1">
                {user ? (
                  <div>
                    <ResponsiveNavButton onClick={logout}>
                      Logout
                    </ResponsiveNavButton>
                  </div>
                ) : (
                  <div>
                    <ResponsiveNavLink href="/register">
                      Registrarse
                    </ResponsiveNavLink>
                    <ResponsiveNavLink href="/login">Login</ResponsiveNavLink>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;