import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
export const Container = styled.div`
  margin: 0 auto;
  padding: 16px 0;
`;
export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 16px 0;
  /* margin-bottom: 16px; */
  /* border-bottom: 1px solid black; */

  > nav {
    display: flex;
  }
`;
export const Link = styled(NavLink)`
  padding: 8px 40px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  &:hover {
    box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.85);
  }
  &.active {
    color: #e3a300d3;
    background-color: #000000;
    box-shadow: none;
  }
`;
