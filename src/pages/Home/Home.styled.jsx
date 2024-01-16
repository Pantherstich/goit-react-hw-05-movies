import styled from 'styled-components';

export const PageTitle = styled.div`
  /* margin: 24px; */
  font-size: 36px;
  padding: 24px;
  line-height: 1.5;
  text-align: center;
  color: white;
  text-shadow: 0 4px 4px black;
  background: radial-gradient(circle, #d35400b2, #0000007c),
    center / cover no-repeat url(${({ $homeBack }) => $homeBack});
`;

export const HomeMain = styled.main`
  /* background:  center / cover no-repeat url(${({ $homeBack }) =>
    $homeBack}); */
`;
