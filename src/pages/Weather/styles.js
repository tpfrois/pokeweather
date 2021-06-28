import styled, { createGlobalStyle } from 'styled-components';

export const BodyStyle = createGlobalStyle`
  body {
    background: ${({ type }) => `linear-gradient(180deg, var(--${type}-dark) 33.75%, var(--${type}-light) 100%) fixed`};


  }
`;

export const Container = styled.div`
  height: -webkit-fill-available;
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 32px 0;
  color: white;

  a {
    font-size: 1.25rem;
    color: white;
    transition: color 0.2s;
    
    &:hover {
      color: #FFCE0A;
    }
  } 
  
  @media(min-width: 1024px) {
    height: 100vh;
  }
`;

export const LocationInfo = styled.section`
  display: flex;
  align-items: flex-start;
 
  div {
    margin: 4px;
    h1 {
      text-transform: capitalize;
      font-size: 4.5rem;
      font-weight: bold;
      line-height: 90%;
    }
    p {
      line-height: 100%;
      font-size: 1.5rem;
      font-weight: 300;
    }
  }
  span {
    &:first-of-type {
      font-size: 3rem; 
      line-height: 170%; 
      margin-left: 16px;
    }
    &:last-of-type {
      font-size: 2.25rem;
      line-height: 250%;
      margin-left: 4px;
    }
  } 

  @media (max-width: 767px) {
    flex-wrap: wrap;
    justify-content: center;
    div {
      h1 {
      font-size: 3rem;
      }
    }
  }

  @media(max-width: 376px) {
    flex-wrap: wrap;
    justify-content: center;
   div {
     h1 {
       font-size: 2.5rem;
     }
   }
  }
`;

export const TypeInfo = styled.section`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  h2 {
    text-transform: capitalize;
    font-size: 3rem;
    font-weight: 600;
    margin-right: 12px;
  }

  img {
    height: 48px;
  }
  
  @media (max-width: 767px) {
    flex-wrap: wrap;
    justify-content: center;
      h2 {
      font-size: 2rem;
    }
  }

  @media(max-width: 376px) {
    flex-wrap: wrap;
    justify-content: center;
     h2 {
       font-size: 1.5rem;
     }
  }
`;

export const CardsContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  max-width: 1024px;
`;