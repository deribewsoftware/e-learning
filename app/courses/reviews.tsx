import { Avatar, Rating } from "@mui/material";
import CardContainer from "../components/cardContainer";
import Header from "../components/Header";
type Review={
  user:any;
  date: string;
  comments: string;
  rating: number;

}

interface ReviewsProps{
  reviews: Review[];
}

const Reviews:React.FC<ReviewsProps> = ({reviews}) => {
  return (  <CardContainer radius>
    <Header title="Reviews" border/>
    <div className="mt-4">{
    reviews.map((review,index)=> <div key={index} className="flex flex-col md:flex-row  w-full md:gap-10  border-b-2 py-3 md:py-6 border-slate-400">
    <div className=""><Avatar alt={review.user.name} src={review.user.image}/></div>
    <div className="flex flex-col w-full py-2">
      <div className="flex flex-col md:flex-row justify-between w-full">
        <div className="flex flex-col md:flex-row md:gap-6"> 
        <p className="font-bold">{review.user.name}</p>
        <p>{review.date}</p>
        </div>
        <div className=""><Rating readOnly value={review.rating}/></div>
  
      </div>
  
      <p className="text-sm">{review.comments}</p>
    </div>
    
  </div>)
  }</div>
  </CardContainer> );
}
 
export default Reviews;