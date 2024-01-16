import styled from 'styled-components';

export const MovieList = styled.ul`
  margin: 0 auto;
  max-width: 1248px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
`;
export const MovieItem = styled.li`
  border-radius: 20px;
  overflow: hidden;
  width: 220px;

  padding-bottom: 8px;
  list-style-type: none;
  @media screen and (max-width: 639px) {
    font-size: 16px;
  }
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.85);

  transition: transform 300ms ease-in-out;
  &:hover {
    font-weight: bold;
    background-color: rgba(255, 255, 255, 0.85);
    transform: scale(1.05);
  }
`;
export const MovieImg = styled.img`
  /* object-fit: contain; */

  padding: 0;
  margin: 0;
  width: 100%;
  /* border-radius: 16px; */
`;
