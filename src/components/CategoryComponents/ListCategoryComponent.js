import React from "react";
import { Link } from "react-router-dom";
class ListCategoryComponent extends React.Component{



    constructor(props){
        super(props);
        this.details = [];
    }

    render(){
        this.loadDetails(this.props.categoryList);
        return <div>
            <p>{this.props.message}</p> 
            
            <div>
            <table className="ui celled table large selectable">
            <thead>
              <tr>
                  <th className = "center aligned">Category Id</th>
                  <th className = "center aligned">Category Name</th>
                  <th className = "center aligned" colSpan = {2}>Action</th> {/*UPDATE DELETE*/}

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
                             
                             <td className = "center aligned"><button type="button" className = "ui button primary" onClick = {this.onClickUpdate.bind(this,category.categoryId)}>UPDATE</button></td>
                             <td className = "center aligned"><button type="button" className = "ui button negative" onClick = {this.onClickDelete.bind(this,category.categoryId)}>DELETE</button></td>

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

export default ListCategoryComponent;