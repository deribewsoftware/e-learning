
import { getCategory } from "@/actions/getCategory";
import AddCategoryClient from "./addCategoryClient";


const Courses =async () => {
  const categories= await getCategory();
  // const categoryBYId=await getCategoryById(categories.id)
  return ( <div className="flex flex-col">
    <AddCategoryClient categories={categories}/>

    

  </div> );
}
 
export default Courses;