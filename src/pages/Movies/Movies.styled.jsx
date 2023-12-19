import styled from 'styled-components';

export const SearchForm = styled.form`
  margin: 0 auto 24px auto;
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  border: 1px solid #000000;
  border-radius: 8px;
  overflow: hidden;
`;
export const SearchFormInput = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;

  &:placeholder {
    /* font: inherit; */
    font-size: 18px;
  }
`;
export const SearchBtn = styled.button`
  display: inline-block;
  padding: 8px 40px;
  font-size: 18px;
  border: none;
  /* width: 48px; */
  /* height: 48px; */
  border-left: 1px solid #000000;
  /* opacity: 0.6; */
  cursor: pointer;
  /* outline: none; */
  background-color: #e3a300d3;
  color: #000000;
  &:hover {
    color: #e3a300d3;
    background-color: #000000;
  }
  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
`;
