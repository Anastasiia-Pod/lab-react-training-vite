import React from 'react';

function Greetings(props) {
  const { lang, children } = props;

  const greetings = {
    en: 'Hello',
    de: 'Hallo',
    es: 'Hola',
    fr: 'Bonjour',
  };

  return (
    <div className="greeting">
      {greetings[lang]} {children}
    </div>
  );
}

export default Greetings;