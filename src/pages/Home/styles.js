import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.main`
  min-height: 100vh;
  height: -webkit-fill-available;
  display: grid;
  place-content: center;

  @media(min-width: 1024px) {
    height: 100vh;
  }
  
  h1 {
    font-size: 4.5rem;
    font-weight: bold;
    line-height: 100%;
    color: #FCF0DE;
  }

    form {
      height: 40px;
      padding: 10px 0px 10px 10px;
      border-radius: 5px;
      
      display: flex;
      align-items: center;
      background-color: #F4B185;
      transition: background 0.2s; 

      &:focus-within {
        background: ${shade(0.04, '#F4B185')};
      }

      input {
        flex: 1;
        color: white;
        background-color: transparent;

        &::placeholder {
          color: white;
          font-size: 1.125rem;
        }
      }

      button {
        width: 70px;
        height: 40px;
        margin-left: 12px;

        background-color: #FFCE0A;
        border-radius: 5px;
        transition: background 0.2s;

        svg {
          height: 100%;
          margin: 0 auto;
        }
        &:hover, &:focus {
          background: ${shade(0.1, '#FFCE0A')}
        }
    } 
}

  @media (max-width: 767px) {
    h1 {
      font-size: 3.5rem;
    }

    div > form {
      width: 300px;
    }
  }

  @media(max-width: 376px) {
    h1 {
      font-size: 2.5rem;
    }

    div > form {
      width: 200px;
    }
  }
`;