import styled from 'styled-components';

export const Container = styled.div`
  min-height: 300px;
  width: 250px;
  padding: 12px 24px;
  margin: 0px 16px 16px 0px;

  border-radius: 10px;
  background: ${({ type }) => `var(--${type}-light)`};

  display: flex;
  flex-direction: column;
  align-items: center;

  transition: transform 0.2s;

  img {
    width: 175px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.5);
    padding: 8px 0px;
  }

  p {
    text-transform: capitalize;
    font-size: 2.25rem;
  }

  &:hover {
    transform: scale(1.05);
  }
`;

export const Stats = styled.div`
  display: grid;
  grid-template-columns: auto auto;
`;

export const StatsBar = styled.div`
  display: flex;
  align-items: center;

  section {
    background: white;
    padding: 3px 4px;
    border-radius: 12px; 
    width: 80px;
    height: 12px;
    margin: 6px;

    > div {
      background: ${({ skill }) =>
    skill === "attack" ? "#F16444" :
      skill === "defense" ? "#19AEDF" :
        skill === "hp" ? "#46A047" : "#F5B915"
  };
      border-radius: 12px;
      height: 100%;
      width: ${({ level }) => level <= 100 ? `${(level)}%` : '100%'};
    }
  }
`;