import React from "react";
import ShowCategoryComponent, {connect} from "./ShowCategoryComponent";

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