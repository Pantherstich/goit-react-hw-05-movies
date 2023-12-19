import styled from 'styled-components';

export const MovieList = styled.ul`
  justify-self: center;
  display: flex;
  gap: 16px;
  /* flex-direction: column; */
  flex-wrap: wrap;
`;
export const MovieItem = styled.li`
  /* padding: 0; */
  /* margin: 0px; */
  border-radius: 16px;
  padding: 4px;

  list-style-type: none;
  width: 15%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  /* padding: 8px; */
  box-shadow: 0px 0px 8px 0px rgba(255, 255, 255, 0.85);

  transition: transform 300ms ease-in-out;
  &:hover {
    background-color: rgba(255, 255, 255, 0.85);
    transform: scale(1.05);
  }
`;
export const MovieImg = styled.img`
  padding: 0;
  margin: 0;
  width: 100%;
  border-radius: 16px;
  box-shadow: 0px 0px 8px 0px rgba(255, 255, 255, 0.85);
`;
