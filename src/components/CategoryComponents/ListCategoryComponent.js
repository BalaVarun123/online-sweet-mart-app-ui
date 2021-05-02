import React from "react";
class ListCategoryComponent extends React.Component
{
    render()
    {
        return <div>
            <p>Info displayed</p>
            <div>Selected view</div>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th> Category Id</th>
                            <th> Category Name</th>
                            <th colSpan = {2}>Action</th>
                            <tbody>{this.props.details}</tbody>
                        </tr>
                    </thead>
                </table>
            </div>
        </div>
    }
    loadDetails = (categoryList) =>
    {
        if(categoryList && categoryList.length > 0)
        {
            let rows = [];
            for(let category of categoryList)
            {
                rows.push(
                    <tr key = {category.categoryId}>
                        <td>{category.name}</td>
                        <td><button type="button">UPDATE</button></td>
                        <td><button type="button">DELETE</button></td>
                    </tr>
                );
            }
        }
    }
componentDidMount()
{
    console.log("component mounted");
}

onClickUpdate = (event) =>
{

}

onClickDelete = (event) =>
{

}


}
export default ListCategoryComponent;