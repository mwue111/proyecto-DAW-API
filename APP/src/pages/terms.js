import React from 'react'
import AppLayout from '@/components/Layouts/AppLayout'
import { useAuth } from '@/hooks/auth'
import { useState } from 'react'

const Terms = () => {
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
                <h1 className="text-2xl font-bold mb-4">Términos y Condiciones</h1>
                <p>
                    Estos términos y condiciones ("Términos") rigen el uso de nuestra aplicación o sitio web y los servicios relacionados ("Servicios"). Al utilizar nuestros Servicios, aceptas cumplir con estos Términos.
                </p>
                <br />
                <p>
                    <b>1. Uso de los Servicios</b>
                </p>
                <p>
                    Nuestros Servicios se proporcionan únicamente para fines informativos y de entretenimiento. No debes utilizar los Servicios con fines ilegales o no autorizados. Aceptas cumplir con todas las leyes y regulaciones aplicables al utilizar nuestros Servicios.
                </p>
                <br />
                <p>
                    <b>2. Propiedad Intelectual</b>
                </p>
                <br />
                <p>
                    Todos los derechos de propiedad intelectual relacionados con nuestros Servicios son propiedad nuestra. No se te concede ningún derecho o licencia para utilizar nuestra propiedad intelectual sin nuestro consentimiento previo por escrito.
                </p>
                <br />
                <p>
                    <b>3. Privacidad</b>
                </p>
                <p>
                    Respetamos tu privacidad y protegemos tus datos personales de acuerdo con nuestra Política de Privacidad. Al utilizar nuestros Servicios, aceptas nuestra recopilación, uso y divulgación de tus datos personales de acuerdo con nuestra Política de Privacidad.
                </p>
                <br />
                <p>
                    <b>4. Limitación de Responsabilidad</b>
                </p>
                <p>
                    En la máxima medida permitida por la ley, no seremos responsables por ningún daño directo, indirecto, incidental, especial o consecuencial, incluyendo, sin limitación, pérdida de beneficios, datos, uso o cualquier otro daño intangible, resultante de:
                </p>
                <ul>
                    <li>El uso o la imposibilidad de utilizar nuestros Servicios.</li>
                    <li>La conducta o el contenido de terceros en relación con nuestros Servicios.</li>
                    <li>Cualquier contenido obtenido de nuestros Servicios.</li>
                </ul>
                <br />
                <p>
                    <b>5. Modificaciones</b>
                </p>
                <p>
                    Nos reservamos el derecho de modificar o interrumpir nuestros Servicios en cualquier momento y sin previo aviso. No seremos responsables ante ti ni ante terceros por cualquier modificación, suspensión o interrupción de nuestros Servicios.
                </p>
            </div>
        </AppLayout>
    )
}

export default Terms
