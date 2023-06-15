import React from 'react'
import AppLayout from '@/components/Layouts/AppLayout'
import { useAuth } from '@/hooks/auth'
import { useState } from 'react'

const PrivacyPolicy = () => {
    const { forgotPassword } = useAuth({ middleware: 'guest' })

    const [email, setEmail] = useState('')
    const [errors, setErrors] = useState([])
    const [status, setStatus] = useState(null)

    const submitForm = event => {
        event.preventDefault()

        forgotPassword({ email, setErrors, setStatus })
    }

    return (
        <AppLayout>
            <div className="max-w-xl mx-auto px-4 py-8">
                <h1 className="text-2xl font-bold mb-4">Política de Privacidad</h1>
                <p>
                    Esta Política de Privacidad describe cómo recopilamos, utilizamos y compartimos información personal cuando utilizas nuestros servicios.
                </p>
                <p>
                    <b>1. Información que recopilamos</b>
                </p>
                <p>
                    Recopilamos información personal que nos proporcionas directamente, como tu nombre, dirección de correo electrónico y otra información que elijas proporcionar. También podemos recopilar información automáticamente cuando utilizas nuestros servicios, como tu dirección IP y datos de uso.
                </p>
                <p>
                    <b>2. Uso de la información</b>
                </p>
                <p>
                    Utilizamos la información recopilada para proporcionar y mantener nuestros servicios, personalizar tu experiencia, mejorar nuestros servicios y cumplir con nuestras obligaciones legales.
                </p>
                <p>
                    <b>3. Compartir información</b>
                </p>
                <p>
                    No vendemos, alquilamos ni compartimos información personal con terceros sin tu consentimiento, excepto en las situaciones permitidas por la ley o descritas en esta Política de Privacidad.
                </p>
                <p>
                    <b>4. Seguridad de la información</b>
                </p>
                <p>
                    Tomamos medidas razonables para proteger la información personal contra acceso no autorizado, uso o divulgación. Sin embargo, ninguna transmisión de datos por Internet o almacenamiento electrónico es completamente segura, por lo que no podemos garantizar su seguridad absoluta.
                </p>
                <p>
                    <b>5. Tus derechos</b>
                </p>
                <p>
                    Tienes derecho a acceder, corregir, eliminar y limitar el uso de tu información personal. También tienes derecho a oponerte al procesamiento de tu información personal y a la portabilidad de tus datos. Puedes ejercer estos derechos contactándonos a través de los datos de contacto proporcionados al final de esta Política de Privacidad.
                </p>
            </div>
        </AppLayout>
    )
}

export default PrivacyPolicy
