import React from 'react'
import AppLayout from '@/components/Layouts/AppLayout'
import { Card } from 'primereact/card';
import { classNames } from 'primereact/utils';
import { PrimeIcons } from 'primereact/api';

const AboutUsPage = () => {
  const emilioMartinez = {
    name: 'Emilio Martín Sánchez',
    position: 'Chief Executive Officer',
    photo: 'emilio.png',
    github: 'https://github.com/enrique-martin-s',
    gustos: ['Hacer las cosas más complicadas de lo que deben ser','Mandar'],
    backgroundImage: 'daniela-bg.jpg',
  };

  const danielaAyuso = {
    name: 'Daniela Wuerich',
    position: 'President and Shotgun Owner',
    photo: '/daniela.png',
    github: 'https://github.com/mwue111',
    instagram: 'http://www.instagram.com/io_wuerich',
    gustos: ['Pasar tiempo en el panel de administración','Hablar con Pili'],
    backgroundImage: 'daniela-bg.jpg',
  };

  const renderCard = (person) => {
    const cardFooter = (
      <div className="flex items-center justify-around">
        <a
          href={person.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-red-600"
        >
          <i className={classNames('pi', PrimeIcons.GITHUB)}></i>
          Github
        </a>
        {person.instagram && (
          <a
            href={person.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-red-600"
          >
            <i className={classNames('pi', PrimeIcons.INSTAGRAM)}></i>
            Instagram
          </a>
        )}
      </div>
    );

    return (
      <Card className="p-card mb-4">
        <div className="flex flex-col h-full">
          <div className="mb-2 flex-grow">
            <img
              src={person.photo}
              alt={person.name}
              className="w-full h-40 object-cover"
            />
          </div>
          <div
            className="flex flex-col justify-center px-4 py-6 h-full"
            style={{
              backgroundImage: `url(${person.backgroundImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div>
              <h3><b>{person.name}</b></h3>
              <p>{person.position}</p>
              <br />
              <b>Gustos: </b>
                {person.gustos.map((gusto, index) => (
                    <li key={index}>{gusto}</li>
                ))}
            </div>
            <br />
            <b>Links: </b>
            <div className="mt-4">{cardFooter}</div>
          </div>
        </div>
      </Card>
    );
  };

  return (
    <AppLayout>
      <div className="max-w-2xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">Sobre Nosotros</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="md:flex justify-center">
            <div className="md:w-full flex justify-center">{renderCard(emilioMartinez)}</div>
          </div>
          <div className="md:flex justify-center">
            <div className="md:w-full flex justify-center">{renderCard(danielaAyuso)}</div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default AboutUsPage;

