import React from 'react';
import { Button } from './Button';
import './Pricing.css';
import { GiFire } from 'react-icons/gi';
import { AiTwotoneGold } from 'react-icons/ai';
import { GiCutDiamond } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import { Link } from 'react-router-dom';

function Pricing() {
  return (
    <IconContext.Provider value={{ color: '#fff', size: 64 }}>
      <div className='pricing__section'>
        <div className='pricing__wrapper'>
          <h1 className='pricing__heading'>Nossos Planos</h1>
          <div className='pricing__container'>
            <Link to='/sign-up' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <GiFire />
                </div>
                <h3>Padrão</h3>
                <h4>R$ 49,90</h4>
                <p>Mensal</p>
                <ul className='pricing__container-features'>
                  <li>100 Transações</li>
                  <li>2% em Dinheiro de volta</li>
                  <li>Limite de R$50.000,00</li>
                </ul>
                <Button buttonSize='btn--wide' buttonColor='primary'>
                  Escolha o plano
                </Button>
              </div>
            </Link>
            <Link to='/sign-up' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <AiTwotoneGold />
                </div>
                <h3>Ouro </h3>
                <h4>R$ 99,90</h4>
                <p>Mensal</p>
                <ul className='pricing__container-features'>
                  <li>1000 Transações</li>
                  <li>3.5% em Dinheiro de volta</li>
                  <li>Limite de R$ 500.000,00</li>
                </ul>
                <Button buttonSize='btn--wide' buttonColor='blue'>
                  Escolha o plano
                </Button>
              </div>
            </Link>
            <Link to='/sign-up' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <GiCutDiamond />
                </div>
                <h3>Diamante</h3>
                <h4>R$ 399,90</h4>
                <p>Mensal</p>
                <ul className='pricing__container-features'>
                  <li>Transações Ilimitadas</li>
                  <li>5% de Dinheiro de volta</li>
                  <li>Gastos Ilimitados</li>
                </ul>
                <Button buttonSize='btn--wide' buttonColor='primary'>
                  Escolha o plano
                </Button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
}
export default Pricing;