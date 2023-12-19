import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

export const MovieContainer = styled.div`
  display: flex;
  margin: 16px;
  padding: 16px;
  flex-direction: column;
  border: 1px solid #000000;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 16px;
`;
export const GoBackLink = styled(Link)`
  display: inline-block;
  text-decoration: underline;
  font-size: 20px;
  margin-bottom: 16px;
`;
export const MovieImg = styled.img`
  width: 300px;
  border-radius: 16px;
`;
export const MovieName = styled.h2`
  font-size: 30px;
`;
export const OverviewText = styled.p`
  font-size: 18px;
  padding-right: 20px;
`;
export const Genres = styled.h3`
  font-weight: bold;
`;
export const GenresText = styled.p`
  font-size: 18px;
`;
export const GenresStyles = styled.div`
  display: flex;
  gap: 8px;
`;
export const AdInfo = styled.p``;
export const NavList = styled.ul`
  display: flex;
  gap: 60px;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
`;

export const MovieInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  margin-right: 20px;
`;
export const Movie = styled.div`
  display: flex;
`;
export const AdditionalNav = styled.div`
  display: flex;
  gap: 80px;
  align-items: center;
  margin-bottom: 24px;
`;
export const NavLinkStyled = styled(NavLink)`
  text-decoration: none;
  color: black;
  font-size: 20px;

  &.active {
    text-decoration: underline;
  }
`;
