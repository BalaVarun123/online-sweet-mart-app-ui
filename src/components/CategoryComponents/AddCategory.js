import React from "react";
import { connect } from "react-redux";
import AddCategoryComponent from "./AddCategoryComponent";
class AddCategory extends React.Component
{
    render()
    {
        return <div>
            <h2>Category</h2>
            <br/>
            <AddCategoryComponent/>
        </div>
    }
}
export default AddCategory;