import { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import axios from 'axios';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';

const CommentForm = () => {
  const [nombre, setNombre] = useState('');
  const [comentario, setComentario] = useState('');
  const [captchaValue, setCaptchaValue] = useState('');
  const [responseMessage, setResponseMessage] = useState('');
  const [displayDialog, setDisplayDialog] = useState(false);

  const handleNombreChange = (e) => {
    setNombre(e.target.value);
  };

  const handleComentarioChange = (e) => {
    setComentario(e.target.value);
  };

  const handleSubmit = () => {
    // if (!captchaValue) {
    //   alert('Por favor, completa el captcha para mandar el comentario.');
    //   return;
    // }

    axios
    .post(process.env.NEXT_PUBLIC_BACKEND_URL+'/comentario', { nombre, comentario })
    .then((response) => {
      setResponseMessage(response.data.message);
      setDisplayDialog(true);
    })
    .catch((error) => {
      console.error(error);
    });

    
    setNombre('');
    setComentario('');
    setCaptchaValue('');
    
  };

  const dialogFooter = (
    <div>
        <button
          className="bg-gray-900 text-white font-bold rounded-full mt-6 py-4 px-8 shadow-lg uppercase tracking-wider hover:border-red-500 hover:text-white hover:bg-red-500 transition-all"
          onClick={() => setDisplayDialog(false)} 
          autoFocus
        >
          Ok
        </button>
    </div>
  );

  return (
    <div>
      <div>
      <input
        type="text"
        className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm mb-4"
        placeholder="Nombre"
        value={nombre}
        onChange={handleNombreChange}
      />
      <textarea
        className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm resize-none h-40"
        placeholder="Comentario"
        value={comentario}
        onChange={handleComentarioChange}
      ></textarea>
      <ReCAPTCHA
        sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_KEY}
        onChange={(value) => setCaptchaValue(value)}
      />
      <button
        className="bg-gray-900 text-white font-bold rounded-full mt-6 py-4 px-8 shadow-lg uppercase tracking-wider hover:border-red-500 hover:text-white hover:bg-red-500 transition-all"
        onClick={handleSubmit}
      >
        Enviar comentario
      </button>
    </div>
    <div>
          <Dialog
            visible={displayDialog}
            onHide={() => setDisplayDialog(false)}
            header="Comentario enviado"
            footer={dialogFooter}
            closable={false}
            style={{ width: '400px' }}
          >
            <p>{responseMessage}</p>
          </Dialog>
        </div>
    </div>
  );
};

export default CommentForm;
