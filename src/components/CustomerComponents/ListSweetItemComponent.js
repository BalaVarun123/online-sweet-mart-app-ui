class ListSweetItemComponent extends React.Component {

    addSweetItemIdRef = React.createRef()


    render(){

        let addSection;
        if (this.props.isAddSelected){
        addSection = <div>Enter Sweet Item Id to add : <input type = "number" min = "0" ref = {this.addSweetItemIdRef}  required/>
        <button type = "button">Add</button>
        </div>
        }
        else 
        addSection = null;
        return <div>
            <button type = "button">Click to add</button>
            {addSection}
            <table>
                <thead>
                    <tr>
                        <th>Order Item Id</th>
                        <th>Product</th>
                        <th>Sweet Order</th>
                        <th colSpan = {2}>Actions</th>{/*VIEW REMOVE*/}
                    </tr>
                </thead>
                <tbody>{this.props.details}</tbody>
            </table>
        </div>
    }


    onClickClickToAdd = () => {

    }

    onClickAdd = () => {

    }

    loadDetails = (sweetItemList) =>{
        if (sweetItemList && sweetItemList.length > 0){
            let rows = [];
            for (let sweetItem of sweetItemList){
                rows.push(
                    <tr key = {sweetItem.orderItemId}>
                        <td>{sweetOrder.product}</td>
                        <td>{sweetOrder.user.sweetOrder}</td>
                        <td><button type="button">UPDATE</button></td>
                        <td><button type="button">DELETE</button></td>
                    </tr>
                );
            }
        }
    }


    componentDidMount(){
        console.log("component mounted");
    }

}
