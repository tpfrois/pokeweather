import React from 'react';
import { BsShieldShaded, BsFillHeartFill } from 'react-icons/bs';
import { RiSwordFill, RiRunFill } from 'react-icons/ri';

import Pokeball from '../../assets/pokeball.png';
import { Container, Stats, StatsBar } from './styles';

const PokeCard = ({ img, type, name, attack, hp, defense, speed }) => (
  <Container type={type}>
    <img src={Pokeball} onError={(e) => e.target.src = Pokeball} onLoad={(e) => e.target.src = img} alt="Squirtle" />
    <p>{name}</p>
    <Stats>
      <StatsBar skill="attack" level={attack} title={`${attack} attack`}>
        <RiSwordFill size={18} color={'white'} />
        <section><div></div></section>
      </StatsBar>
      <StatsBar skill="hp" level={hp} title={`${hp} hp`}>
        <BsFillHeartFill size={18} color={'white'} />
        <section><div></div></section>
      </StatsBar>
      <StatsBar skill="defense" level={defense} title={`${defense} defense`}>
        <BsShieldShaded size={18} color={'white'} />
        <section><div></div></section>
      </StatsBar>
      <StatsBar skill="speed" level={speed} title={`${speed} speed`}>
        <RiRunFill size={18} color={'white'} />
        <section><div></div></section>
      </StatsBar>
    </Stats>
  </Container>
);

export default PokeCard;