


import { getCategory } from "@/actions/getCategory";
import CardContainer from "../components/cardContainer";
import GetCategory from "./getCategory";


const DashBoard = async() => {
  const categories=await getCategory()
  
  return ( <div className="flex flex-col gap-10 justify-center"> 
  {/* summary */}

<div className=" grid grid-cols-1 md:grid-cols-4 gap-10 p-6">
  <CardContainer>
    <div className="flex justify-center h-48 w-48">
      <h1 className="text-lg font-bold">124 Students</h1>
    </div>
  </CardContainer>
  <CardContainer>
    <div className="flex justify-center h-48 w-48">
      <h1 className="text-lg font-bold">124 Students</h1>
    </div>
  </CardContainer>
  <CardContainer>
    <div className="flex justify-center h-48 w-48">
      <h1 className="text-lg font-bold">124 Students</h1>
    </div>
  </CardContainer>
  <CardContainer>
    <div className="flex justify-center h-48 w-48">
      <h1 className="text-lg font-bold">124 Students</h1>
    </div>
  </CardContainer>
</div>

<div className="grid grid-cols-2 justify-center gap-20 p-20 text-bold text-red-900">
  <GetCategory categories={categories}/>

</div>
  </div> );
}
 
export default DashBoard;