import React, { useState, useEffect } from 'react';
import Link from 'next/link'

const CookieNotice = () => {
  const [showNotice, setShowNotice] = useState(true);

  useEffect(() => {
    const isNoticeHidden = localStorage.getItem('cookieNoticeShown');
    if (isNoticeHidden) {
      setShowNotice(false);
    }
  }, []);

  const hideNotice = () => {
    setShowNotice(false);
    localStorage.setItem('cookieNoticeShown', 'true');
  };

  if (!showNotice) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 w-full bg-red-500 text-white p-4 text-sm z-10 flex items-center">
      <img src="/cookie.svg" alt="Cookie" className="w-6 h-6 mr-2" />
      <p className="flex-grow">
        Este sitio web utiliza cookies para garantizar que obtengas la mejor experiencia en nuestro sitio web.
      </p>
      <button
        className="text-white underline cursor-pointer mr-2 focus:outline-none"
        onClick={hideNotice}
      >
        Aceptar
      </button>
      <Link href="/cookie-information" className="text-white underline cursor-pointer focus:outline-none">
        Más información
      </Link>
    </div>
  );
};

export default CookieNotice;
