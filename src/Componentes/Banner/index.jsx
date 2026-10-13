import { useEffect, useState } from 'react';
import circuloColorido from '../../Images/assets/anel.png';
import minhaFoto from '../../Images/assets/perfil-bruno.webp';

const introduction = 'Olá, eu sou o Bruno Olegário.';
const nameStart = 'Olá, eu sou o '.length;

export default function Banner() {
  const [visibleCharacters, setVisibleCharacters] = useState(0);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisibleCharacters(introduction.length);
      return undefined;
    }

    let timer;
    let character = 0;
    const typeNextCharacter = () => {
      character += 1;
      setVisibleCharacters(character);
      if (character < introduction.length) {
        const delay = introduction[character - 1] === ',' ? 180 : 65;
        timer = window.setTimeout(typeNextCharacter, delay);
      }
    };

    timer = window.setTimeout(typeNextCharacter, 350);
    return () => window.clearTimeout(timer);
  }, []);

  const visibleText = introduction.slice(0, visibleCharacters);
  const greeting = visibleText.slice(0, nameStart);
  const name = visibleText.slice(nameStart);

  return <section className="hero pageContainer" aria-labelledby="hero-title">
    <div className="heroCopy">
      <h1 id="hero-title" aria-label={introduction}>
        <span className="typingText" aria-hidden="true">
          {greeting}<span className="heroName">{name}</span><span className="typingCursor" />
        </span>
      </h1>
      <p className="heroRole">Desenvolvedor</p>
    </div>
    <div className="heroPortrait">
      <img className="portraitRing" src={circuloColorido} alt="" aria-hidden="true" />
      <img className="portraitPhoto" src={minhaFoto} alt="Bruno Olegário" fetchPriority="high" />
    </div>
  </section>;
}
