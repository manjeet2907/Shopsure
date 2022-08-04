import styled from "styled-components";

import Button from "../Button/Button";

export const PaymentFormContainer = styled.div`
  height: 30rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const FormContainer = styled.form`
  height: 10rem;
  min-width: 50rem;
`;

export const PaymentButton = styled(Button)`
  margin-left: auto;
  margin-top: 3rem;
`;
