import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import ApplicationLogo from '@/components/ApplicationLogo';
import AuthCard from '@/components/AuthCard';
import Button from '@/components/Button';
import GuestLayout from '@/components/Layouts/GuestLayout';
import Input from '@/components/Input';
import InputError from '@/components/InputError';
import Label from '@/components/Label';
import axios from '@/lib/axios';
import { useAuth } from '@/hooks/auth';

const Register = () => {
  const { register, login } = useAuth({
    middleware: 'guest',
    redirectIfAuthenticated: '/productos',
  });

  const defaultStore = {
    name: 'La tienda de ',
    address: {
      road_type: 'calle',
      zip_code: '04002',
      number: '11',
      name: 'Gerona',
      remarks: 'Comentarios sobre la dirección',
      town_id: 1,
    },
    email: 'mitienda@localmeria.com',
    telephone1: '950987654',
    telephone2: '950123456',
    longitude: '36.83814',
    latitude: '-2.45974',
    description: 'Nueva tienda de ',
    user_id: '1',
    deleted: '0',
  };

  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [surname1, setSurname1] = useState('');
  const [surname2, setSurname2] = useState('');
  const [email, setEmail] = useState('');
  const [type, setType] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [errors, setErrors] = useState([]);
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState(null);

  const submitForm = async (event) => {
    event.preventDefault();

    try {
      await register({
        name,
        username,
        surname1,
        surname2,
        type,
        email,
        password,
        password_confirmation: passwordConfirmation,
        setErrors,
      });

      const response = await axios.get('/usuario/encuentra/' + username);
      const userId = response.data;

      if (type === 'owner') {
        const storeData = {
          ...defaultStore,
          name: defaultStore.name + username,
          description: defaultStore.description + username,
          user_id: userId,
        };

        console.log('storeData: ', storeData);

        await axios.post('/tienda', storeData);
      }

      await login({
        email,
        password,
        setErrors,
        setStatus,
        redirectPath,
      });
    } catch (error) {
      console.log('Error:', error.response);
    }
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  let redirectPath = type === 'owner' ? '/tienda/' : '/productos';

  return (
    <GuestLayout>
      <AuthCard
        logo={
          <Link href="/">
            <ApplicationLogo className="w-20 h-20 fill-current text-gray-500" />
          </Link>
        }
      >
        <Head>
          <title>LocAlmeria - Registro de nuevo usuario</title>
        </Head>
        {type === '' ? (
          <div className="flex flex-col items-center">
            <p className="text-lg font-semibold mb-4">
              ¿Eres un cliente o eres un dueño de tienda?
            </p>
            <div className="flex">
              <Button
                className="mr-2"
                onClick={() => setType('client')}
                variant="primary"
              >
                Soy un cliente
              </Button>
              <Button onClick={() => setType('owner')} variant="secondary">
                Soy propietario de tienda
              </Button>
            </div>
          </div>
        ) : (
          <form onSubmit={submitForm} encType="multipart/form-data">
            {/* Name */}
            <div className="mt-4">
              <Label htmlFor="name">Nombre</Label>

              <Input
                id="name"
                type="text"
                value={name}
                className="block mt-1 w-full"
                onChange={(event) => setName(event.target.value)}
                required
                autoFocus
              />

              <InputError messages={errors.name} className="mt-2" />
            </div>

            {/* Surname */}
            <div className="mt-4 flex justify-between">
              <div className="w-1/2 mr-2">
                <Label htmlFor="surname1">Apellido 1</Label>

                <Input
                  id="surname1"
                  type="text"
                  value={surname1}
                  className="block mt-1 w-full rounded-l-md"
                  onChange={(event) => setSurname1(event.target.value)}
                  required
                />

                <InputError messages={errors.surname1} className="mt-2" />
              </div>

              <div className="w-1/2 ml-2">
                <Label htmlFor="surname2">Apellido 2</Label>

                <Input
                  id="surname2"
                  type="text"
                  value={surname2}
                  className="block mt-1 w-full rounded-r-md"
                  onChange={(event) => setSurname2(event.target.value)}
                />

                <InputError messages={errors.surname2} className="mt-2" />
              </div>
            </div>

            {/* Username */}
            <div className="mt-4">
              <Label htmlFor="username">Usuario</Label>

              <Input
                id="username"
                type="text"
                value={username}
                className="block mt-1 w-full"
                onChange={(event) => setUsername(event.target.value)}
                required
              />

              <InputError messages={errors.username} className="mt-2" />
            </div>

            {/* Email Address */}
            <div className="mt-4">
              <Label htmlFor="email">Email</Label>

              <Input
                id="email"
                type="email"
                value={email}
                className="block mt-1 w-full"
                onChange={(event) => setEmail(event.target.value)}
                required
              />

              <InputError messages={errors.email} className="mt-2" />
            </div>

            {/* Password */}
            <div className="mt-4">
              <Label htmlFor="password">Contraseña / Confirmar contraseña</Label>

              <div className="flex items-center rounded-md border border-gray-200">
                <Input
                  id="password"
                  type="password"
                  value={password}
                  className="block w-full rounded-l-md mt-1"
                  onChange={(event) => setPassword(event.target.value)}
                  required
                  autoComplete="new-password"
                />

                <Input
                  id="passwordConfirmation"
                  type="password"
                  value={passwordConfirmation}
                  className="block w-full rounded-r-md mt-1"
                  onChange={(event) =>
                    setPasswordConfirmation(event.target.value)
                  }
                  required
                />
              </div>

              <InputError messages={errors.password} className="mt-2" />
            </div>


              {/* File upload */}
              {type === 'owner' && (
                <div className="w-1/2 mr-2">
                  <Label htmlFor="file">Archivo</Label>
                  <div className="overflow-hidden">
                    <input
                      id="file"
                      type="file"
                      accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                      onChange={handleFileChange}
                      className="block mt-1 w-full"
                      required
                    />
                  </div>
                </div>
              )}

            {/* Hidden Role Input */}
            <input type="hidden" name="type" value={type} />

            <div className="flex items-center justify-end mt-4">
              <Link
                href="/login"
                className="underline text-sm text-gray-600 hover:text-gray-900"
              >
                ¿Ya es usuario? Inicie sesión
              </Link>
              <Button className="ml-4">Registrarse</Button>
            </div>
          </form>
        )}
      </AuthCard>
    </GuestLayout>
  );
};

export default Register;
