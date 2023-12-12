
import { getCurrentUser } from "@/actions/getCurrentUser";
import Container from "../components/Container";
import FormWrap from "../components/FormWrap";
import LoginClient from "./loginClient";

const Login = async() => {
  const currentUser = await getCurrentUser()
  return (
    <Container>
      <FormWrap>
      <LoginClient currentUser={currentUser}/>
      </FormWrap>
    </Container>
  );
}
 
export default Login;