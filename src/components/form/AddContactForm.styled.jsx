import styled from 'styled-components';

export const FormWrapper = styled.form`
  display: block;
`;

export const FormLabel = styled.label`
  /* display: block; */
  font-size: 20px;
  line-height: 1.16;
  letter-spacing: 0.01em;
  color: #757575;
  margin-bottom: 4px;
  margin-right: 10px;
`;

export const FormInput = styled.input`
  /* display: block; */
  border-radius: 4px;
  border: 1px solid rgba(33, 33, 33, 0.2);
  margin: 0 auto;
  height: 30px;
  padding-left: 10px;
  outline: none;
  cursor: pointer;
`;

export const FormButton = styled.button`
  font-family: inherit;
  width: 150px;
  height: 40px;
  color: #fff;
  background-color: #2196f3;
  font-size: 16px;
  line-height: 1.87;
  letter-spacing: 0.06em;
  box-shadow: 0px 4px 4px rgb(0 0 0 / 15%);
  border-radius: 4px;
  border: transparent;
  margin: 0 auto;
  cursor: pointer;
  transition: 250ms;
  :hover {
    color: #2196f3;
    background-color: lightblue;
  }
`;
