import Container from "../Container";
import Search from "../search";
import Logo from '../../../public/images/studentsLogo.png'
import Deri from '../../../public/images/deri.jpg'
import Image from "next/image";
import { Avatar, AvatarGroup } from "@mui/material";

import { Josefin_Sans} from 'next/font/google'



const josefin=Josefin_Sans( {subsets:["latin"],weight:['400','500','600','700']})
const Banner = () => {
  return ( 
  <Container>
    <div className={`py-10 w-full flex flex-wrap justify-between gap-10  ${josefin.className} `}>
      <div className="flex flex-col  gap-10 w-2/5 p-2 md:p-8">
      <h1 className="text-3xl md:text-6xl font-extrabold text-center">Unlock the doors of knowledge with Talent Academy</h1>
      <p>Empowering students with a journey of learning that transcends boundaries, our tutorials are not just lessons; they are keys to a realm of unlimited possibilities. Elevate your skills, embrace your potential, and earn a certificate that symbolizes not just completion, but the beginning of a transformative educational voyage. At Talent Academy, we don't just teach; we inspire and certify your excellence.</p>
      <div className="w-[90%]">
      <Search/>
      </div>


      <div className="text-start flex">
        <AvatarGroup total={24}>
  <Avatar alt="Remy Sharp" src="https://en.wikipedia.org/wiki/Abiy_Ahmed#/media/File:Abiy_Ahmed_with_LI_Yong_2018_(cropped).jpeg"/>
  <Avatar alt="Student" src="https://en.wikipedia.org/wiki/Abiy_Ahmed#/media/File:Abiy_Ahmed_with_LI_Yong_2018_(cropped).jpeg"/>
  <Avatar alt="Agnes Walker" src="https://en.wikipedia.org/wiki/Abiy_Ahmed#/media/File:Abiy_Ahmed_with_LI_Yong_2018_(cropped).jpeg" />
  <Avatar alt="Trevor Henderson" src="https://www.ethiopia-insight.com/wp-content/uploads/2021/07/Hache.jpg" />
</AvatarGroup>
<p>Students Trust us.</p>
      </div>
      </div>


      <div className="relative  aspect-square w-2/5 ">
       
       <Image src={Logo} fill alt="logo" className="object-contain "/>
       </div>
      </div>
    
  </Container>
  );
}
 
export default Banner;