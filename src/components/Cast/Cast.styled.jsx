import styled from 'styled-components';
export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
`;
export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 120px;
`;
export const Photo = styled.img`
  width: 100%;
  object-fit: cover;
  border-radius: 8px;
`;
export const Name = styled.p`
  text-align: center;
  font-weight: bold;
`;
export const Info = styled.p`
  text-align: center;
`;
export const PhotoContainer = styled.div`
  width: 120px;
  height: 160px;
  display: flex;
  align-content: center;
`;
