import React from "react";

interface CategoryProps{
  id: string;
}

const Category = ({params}:{params:CategoryProps}) => {
  return ( <div>
    <h1>Category {params.id}</h1>
  </div> );
}
 
export default Category;