import { getCurrentUser } from "@/actions/getCurrentUser";
import Container from "../components/Container";
import FormWrap from "../components/FormWrap";
import RegisterClient from "./registerClient";

const Register =async () => {

  const currentUser = await getCurrentUser()
  return ( <div className="flex justify-center  text-center h-[100%] mt-10 md:mt-40">
    <Container>
      <FormWrap>
      <RegisterClient currentUser={currentUser}/>
      </FormWrap>
    </Container>
  </div> );
}
 
export default Register;