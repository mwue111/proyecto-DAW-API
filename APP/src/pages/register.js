import ApplicationLogo from '@/components/ApplicationLogo'
import AuthCard from '@/components/AuthCard'
import Button from '@/components/Button'
import GuestLayout from '@/components/Layouts/GuestLayout'
import Input from '@/components/Input'
import InputError from '@/components/InputError'
import Label from '@/components/Label'
import Link from 'next/link'
import { useAuth } from '@/hooks/auth'
import { useState } from 'react'
import Head from 'next/head'
import axios from '@/lib/axios'


const Register = () => {
  const { register, login } = useAuth({
    middleware: 'guest',
    redirectIfAuthenticated: '/dashboard',
  })

  const [name, setName] = useState('')
  const [username, setUsername] = useState('')
  const [surname1, setSurname1] = useState('')
  const [surname2, setSurname2] = useState('')
  const [email, setEmail] = useState('')
  const [type, setType] = useState('client')
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')
  const [errors, setErrors] = useState([])
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState(null)

  const submitForm = event => {
    event.preventDefault()
  
    register({
      name,
      username,
      surname1,
      surname2,
      type:type,
      email,
      password,
      password_confirmation: passwordConfirmation,
      setErrors,
    }).then(() => {
        axios.get('/usuario/encuentra/' + username)
          .then(response => {
            const userId = response.data;
                     
            if (type === 'owner' && file) {
              const formData = new FormData();
              formData.append('file', file);
              formData.append('user_id', userId);
              formData.append('image_type', 'document');
              
              axios.post('/archivo', formData).then(response => {
                console.log(response);
              }).catch(error => {
                console.log(error);
              });
            }
          })
          .catch(error => {
            console.log('Error:', error.response.data);
          });
    });

    setTimeout(() => {
      login({
        email,
        password,
        setErrors,
        setStatus,
      })
    }
    , 1000);
  }

  const handleFileChange = event => {
    setFile(event.target.files[0]);
  }

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
        <form onSubmit={submitForm} encType="multipart/form-data">
          {/* Name */}
          <div className="mt-4">
            <Label htmlFor="name">Nombre</Label>

            <Input
              id="name"
              type="text"
              value={name}
              className="block mt-1 w-full"
              onChange={event => setName(event.target.value)}
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
                onChange={event => setSurname1(event.target.value)}
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
            onChange={event => setSurname2(event.target.value)}
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
          onChange={event => setUsername(event.target.value)}
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
          onChange={event => setEmail(event.target.value)}
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
            onChange={event => setPassword(event.target.value)}
            required
            autoComplete="new-password"
          />

          <Input
            id="passwordConfirmation"
            type="password"
            value={passwordConfirmation}
            className="block w-full rounded-r-md mt-1"
            onChange={event => setPasswordConfirmation(event.target.value)}
            required
          />
        </div>

        <InputError messages={errors.password} className="mt-2" />
      </div>

      {/* Role */}
      <div className="mt-4 flex justify-between">
        <div className="w-1/2 mr-2">
          <Label htmlFor="type">Tipo</Label>
          <label htmlFor="owner" className="ml-2">
            Dueño de tienda
            <input
              id="owner"
              type="radio"
              value="owner"
              checked={type === 'owner'}
              onChange={event => setType(event.target.value)}
            />
          </label>
          <label htmlFor="client" className="ml-2">
            Usuario normal
            <input
              id="client"
              type="radio"
              value="client"
              checked={type === 'client'}
              onChange={event => setType(event.target.value)}
            />
          </label>
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
      </div>

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
      </AuthCard>
    </GuestLayout>
  )
  }

export default Register