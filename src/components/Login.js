import { Button } from "@material-ui/core";
import styled from "styled-components";
import { auth, provider } from "../firebase.";

function Login() {

  const sinIn = () => {
    auth.signInWithPopup(provider).catch((error) => {
      alert(error.message)
    })
  }

  return (
    <LoginContainer>
      <LoginInnerContainer>
        <img
          src="https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg"
          alt="slack"
        />
        <h1>Sign in to the PAPA</h1>
        <p>papa.slack.com</p>
        <Button onClick={sinIn} >Sign in with Google</Button>
      </LoginInnerContainer>
    </LoginContainer>
  );
}

export default Login;

const LoginContainer = styled.div`
  background-color: #f8f8f8;
  height: 100vh;
  display: grid;
  place-items: center;
`;
const LoginInnerContainer = styled.div`
  padding: 100px;
  text-align: center;
  background-color: white;
  border-radius: 10px;

  > img {
    object-fit: contain;
    height: 100px;
    margin-bottom: 40px;
  }
  > button {
    margin-top: 50px;
    text-transform: inherit !important;
    background-color: #0aBd48 !important;
    color: white;
  }
`;
