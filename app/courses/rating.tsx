import CardContainer from "@/app/components/cardContainer";
import {  Rating } from "@mui/material";


const RatingPage = () => {
  const stars=[
    0,1,2,3,4,5
    ]
  return (<CardContainer radius>
    <div className="flex gap-10 flex-col md:flex-row justify-center ">
      <div className="flex flex-col justify-center gap-4 border-[3px] rounded-lg p-4 items-center">
        <h1 className="text-6xl font-bold text-center ">4.5</h1>
        <Rating readOnly  value={4.5}/>



      </div>

      <div className="flex-col justify-center w-full p-6">
        {
          stars.map((star)=><div key={star} className="flex gap-4 w-full">
          <div className="flex gap-1"><p>{star}</p><p>stars</p></div>

          <div className="h-2 w-[100%] bg-slate-100 rounded-lg my-3">
            <div style={{ width: `${(star / 5) * 100}%` }}  className="h-2 rounded-lg bg-green-500"></div>
          </div>
           <p>{(star/5)*100}%</p>
        </div>)
        }
        
      </div>
    </div>

   </CardContainer> );
}
 
export default RatingPage;