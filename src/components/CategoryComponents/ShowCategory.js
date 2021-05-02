import { ReactComponent } from "*.svg";
import React from "react";
import { connect } from "react-redux";
import ShowCategoryComponent from"./ShowcategoryComponent";

class ShowCategory extends React.Component
{
   render()
   {
       return <div>
           <h2>ShowCategory</h2>
           <br/>
           <ShowCategoryComponent/>
       </div>
   }
}
export default ShowCategory;
