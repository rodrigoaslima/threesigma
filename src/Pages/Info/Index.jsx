import React from 'react';
import aaveLogo from '../../assets/images/aaveLogo.svg';

// import { Container } from './styles';

export function Info() {
  return (
    <div class="container sm border-black relative box-border w-96 p-8 border">
        <img src={aaveLogo} alt="aaveLogo" class="h-9 w-48 mt-7 ml-7" />
        <h1 className='p-2 text-base font-bold '>AAVE</h1>
        <p class="mt-3  text-base ">
            Aave is a decentralised non-custodial liquidity market protocol where users can participate 
            as depositors or borrowers. Depositors provide liquidity to the market to earn a passive income, 
            while borrowers are able to borrow in an overcollateralised (perpetually) or undercollateralised 
            (one-block liquidity) fashion.
        </p>
        <p class="mt-2 text-base">
            Please join the <a href='https://aave.com/discord'>Aave community Discord server</a>; the Aave team and members of the community look 
            forward to helping you understand and use Aave.
        </p>
    </div>
  );
}
