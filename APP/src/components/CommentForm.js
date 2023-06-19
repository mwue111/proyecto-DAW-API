import { useState } from 'react';
import axios from 'axios';
import { Dialog } from 'primereact/dialog';
import Filter from 'bad-words';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';

const CommentForm = () => {
  const [nombre, setNombre] = useState('');
  const [comentario, setComentario] = useState('');
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [responseMessage, setResponseMessage] = useState('');
  const [displayDialog, setDisplayDialog] = useState(false);
  const [hasFilteredWords, setHasFilteredWords] = useState(false);

  const customCurseWords = ['polla', 'coño', 'puta'];
  const customFilter = new RegExp(customCurseWords.join('|'), 'gi');

  const handleSubmitForm = async (e) => {
    e.preventDefault();

    const gRecaptchaToken = await executeRecaptcha('enquiryFormSubmit');
    if (!gRecaptchaToken) {
      console.log('reCAPTCHA token not available');
      return;
    }

    const badWordsFilter = new Filter();
    const filteredWords =
      badWordsFilter.isProfane(nombre.toLowerCase()) ||
      badWordsFilter.isProfane(comentario.toLowerCase()) ||
      customFilter.test(nombre.toLowerCase()) ||
      customFilter.test(comentario.toLowerCase());

    if (filteredWords) {
      setHasFilteredWords(true);
      setResponseMessage('Por favor no utilices palabras malsonantes');
      setDisplayDialog(true);
      return;
    }

    try {
      const response = await axios.post(process.env.NEXT_PUBLIC_BACKEND_URL + '/comentario', {
        nombre,
        comentario,
        gRecaptchaToken,
      });

      setResponseMessage(response.data.message);
      setDisplayDialog(true);
      setNombre('');
      setComentario('');
      setHasFilteredWords(false);
    } catch (error) {
      console.error(error);
    }
  };

  const handleNombreChange = (e) => {
    setNombre(e.target.value);
  };

  const handleComentarioChange = (e) => {
    setComentario(e.target.value);
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

  const dialogHeader = hasFilteredWords ? 'Palabra inapropiada detectada' : 'Comentario enviado';

  return (
    <div>
      <form onSubmit={handleSubmitForm}>
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
        <button
          className="text-white font-bold rounded-full mt-6 py-4 px-8 shadow-lg uppercase tracking-wider hover:border-red-500 hover:text-white hover:bg-red-500 transition-all comment-button"
          type="submit"
        >
          Enviar comentario
        </button>
      </form>
      <Dialog
        visible={displayDialog}
        onHide={() => setDisplayDialog(false)}
        header={dialogHeader}
        footer={dialogFooter}
        closable={false}
        style={{ width: '400px' }}
      >
        <p>{responseMessage}</p>
      </Dialog>
    </div>
  );
};

export default CommentForm;
