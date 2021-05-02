import React from "react";
export default class ShowCategoryComponent extends React.Component
{
    render()
    {
        return <div>
            <div>Show Category</div>
            <div>
                Category Id : {this.props.category.categoryId}<br/>
                name : {this.props.category.name}<br/>
                <button type ="button"> Update </button>
                <button type ="button"> Delete </button>
            </div>
        </div>
    }

    onClickUpdate = (event) =>
    {

    }
    onClickDelete = (event) =>
    {
        
    }
}