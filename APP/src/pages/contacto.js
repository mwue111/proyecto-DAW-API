import React from 'react'
import AppLayout from '@/components/Layouts/AppLayout'

const ContactPage = () => {
    return (
        <AppLayout>
            <div className="max-w-xl mx-auto px-4 py-60">
                <h1 className="text-2xl font-bold mb-4">Contacto</h1>
                <p>¡Nos encantaría saber de ti! Si tienes alguna pregunta, comentario o consulta, no dudes en ponerte en contacto con nosotros utilizando la siguiente información:</p>
                <div className="mt-4">
                    <p className="mb-2">
                        <strong>Teléfono:</strong> +34 123 456 789
                    </p>
                    <p className="mb-2">
                        <strong>Correo electrónico:</strong> info@localmeria.com
                    </p>
                    <p className="mb-2">
                        <strong>Dirección:</strong> Calle Ejemplo, 123, 04001 Almería, España
                    </p>
                </div>
            </div>
        </AppLayout>
    )
}

export default ContactPage
