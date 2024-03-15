import styled from '@emotion/styled';
import { Form } from 'formik';

export const WrapperForm = styled(Form)`  
  margin: 15px auto 0;
  padding: 15px;
  border: 2px solid #1976d2;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 15px;
  label {
    display: block;
  }
  span {
    display: block;

    margin-bottom: 5px;
    font-weight: 500;
  }
  label: nth-of-type(2) span {
    margin-top: 15px;
  }
`;

export const BtnStyle = {
  width: "170px",
  height: "40px",
  margin: "25px auto",
  display: "flex",
}