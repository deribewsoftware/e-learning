import { getCategory } from "@/actions/getCategory";

const CategoryList = async() => {

  const categories=await getCategory()
  return (  categories && categories.map((category)=><option key={category.id} value={category.id}> {category.category}</option>));
}
 
export default CategoryList;