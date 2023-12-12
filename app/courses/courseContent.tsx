import { LuBookMinus } from "react-icons/lu";
import CardContainer from "../components/cardContainer";
import Header from "../components/Header";
import { IoTimeOutline } from "react-icons/io5";
import { PiCertificateThin } from "react-icons/pi";
import { BsBarChart } from "react-icons/bs";

const CourseContent = () => {
  return ( <CardContainer radius>
    <Header title="This Course includes " />
      <div className=" md:px-2 md:px-10  ">

      <div className="
        border-b-[1.3px]
        flex justify-between
        p-3
        ">
          <div className="flex gap-3 ">
          <div className="mt-1"><BsBarChart/></div>
            <p>Level</p>
          </div>
          <div className="text-slate-400">Grade 12</div>

        </div>

        <div className="
        border-b-[1.3px]
        flex justify-between
        p-3
        ">
          <div className="flex gap-3 ">
          <div className="mt-1"><LuBookMinus/></div>
            <p>Lessons</p>
          </div>
          <div className="text-slate-400">133</div>

        </div>

        <div className="
        border-b-[1.3px]
        flex justify-between
        p-3
        ">
          <div className="flex gap-3 ">
            <div className="mt-1"><IoTimeOutline/></div>
            <p>Duration</p>

          </div>
          <div className="text-slate-400">112h 20min</div>

        </div>

        <div className="
        border-b-[1.3px]
        flex justify-between
        p-3
        ">
          <div className="flex gap-3 ">
          <div className="mt-1"><PiCertificateThin/></div>
            <p>Certifications</p>
          </div>
          <div className="text-slate-400">Yes</div>

        </div>
      </div>
    
      
    </CardContainer>);
}
 
export default CourseContent;