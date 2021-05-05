import React from "react";
class ListCategoryComponents extends React.Component{



    constructor(props){
        super(props);
        this.details = [];
    }

    render(){
        this.loadDetails(this.props.categoryList);
        return <div>
            <p>{this.props.message}</p> 
            <div>Selected view</div>
            <div>
            <table>
            <thead>
              <tr>
                  <th>Category Id</th>
                  <th>Category Name</th>
                  <th>Total Cost</th>
                  <th colSpan = {2}>Action</th> {/*UPDATE DELETE*/}
              </tr>  
            </thead>
            <tbody>{this.details}</tbody>
           </table>
           </div>
        </div>
    }


    loadDetails = (categoryList) =>{
        console.log("cateogoryList is of length :"+categoryList.length);
        if (categoryList && categoryList.length > 0){
                    this.details = this.props.categoryList.map(
                     (category) => {
                         return(
                             <tr key = {category.id}>
                             <td>{category.categoryId}</td>
                             <td>{category.name}</td>
                             <td><button type="button" onClick = {this.onClickUpdate.bind(this,category.categoryId)}>UPDATE</button></td>
                             <td><button type="button" onClick = {this.onClickDelete.bind(this,category.categoryId)}>DELETE</button></td>
                             </tr>
                         );
                     }   
                    )
                    
                
            
           }
        
    }


    componentDidMount(){
        console.log("component mounted");
    }

    onClickUpdate = (id,event)=>{
        this.props.onClickUpdate(id);
    }

    onClickDelete = (id,event) => {
        this.props.onClickDelete(id);
    }

    
}

export default ListCategoryComponents;