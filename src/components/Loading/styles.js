import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: -webkit-fill-available;

  img {
    height: 200px;
  }

  div {
    margin: 16px;
    max-width: 500px;
    color: #FCF0DE;

    h1 {
      font-size: 3rem;
      font-weight: bold;
    }

    a {
      font-weight: 600;
      color: #FFCE0A;
      font-size: 2.25rem;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.1, '#FFCE0A')}
      }
    }
  }

  

  @media(min-width: 1024px) {
    flex-direction: row;
    height: 100vh;

    img {
      height: 300px;
    }
  }
`;