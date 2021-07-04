import React, { useContext } from "react";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";

export function LoginForm(props) {
  const { switchToSignup } = useContext(AccountContext);

  return (
    <BoxContainer>
      <FormContainer>
        <Input type="email" placeholder="Imella" />
        <Input type="password" placeholder="Fjalekalimi" />
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <MutedLink href="#">Keni harruar fjalekalimin?</MutedLink>
      <Marginer direction="vertical" margin="1.6em" />
      <SubmitButton type="submit">Hyni</SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        Nuk ke llogari?{" "}
        <BoldLink href="#" onClick={switchToSignup}>
          Regjistrohu
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}