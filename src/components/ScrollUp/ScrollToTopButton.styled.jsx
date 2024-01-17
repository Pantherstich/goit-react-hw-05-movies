import styled from 'styled-components';

export const ScrollToTopBtn = styled.button`
  position: fixed;
  right: 40px;
  bottom: 64px;
  z-index: 1200;
  width: 48px;
  height: 48px;
  padding: 0;
  background-color: #e3a300e6;

  cursor: pointer;
  border-radius: 50%;
  font-size: 36px;
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.85);

  &:hover {
    width: 56px;
    height: 56px;
    background-color: #ffffff;
    animation: rotation 1s infinite linear;
  }

  @keyframes rotation {
    0% {
      transform: translateY(0);
    }
    25% {
      transform: translateY(-20px) rotate(10deg);
    }
    50% {
      transform: translateY(0) rotate(-10deg);
    }
    75% {
      transform: translateY(20px) rotate(10deg);
    }
    100% {
      transform: translateY(0);
    }
  }

  @media screen and (max-width: 639px) {
    right: 20px;
    bottom: 32px;
  }
`;
