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

export function SignupForm(props) {
  const { switchToSignin } = useContext(AccountContext);

  return (
    <BoxContainer>
      <FormContainer>
        <Input type="text" placeholder="Emri plote" />
        <Input type="email" placeholder="Imella" />
        <Input type="password" placeholder="Fjalekalimi" />
        <Input type="password" placeholder="Konfirmo Fjalekalimin" />
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <SubmitButton type="submit">Regjistrohu</SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        Posedoni nje llogari?
        <BoldLink href="#" onClick={switchToSignin}>
          Hyni
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}