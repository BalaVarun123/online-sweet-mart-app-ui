class ListSweetOrdersComponent extends React.Component {

    addSweetOrderIdRef = React.createRef()


    render(){

        let addSection;
        if (this.props.isAddSelected){
        addSection = <div>Enter Sweet Order Id to add : <input type = "number" min = "0" ref = {this.addSweetOrderIdRef}  required/>
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
                        <th>Sweet Order Id</th>
                        <th>User Id</th>
                        <th>Created Date</th>
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

    loadDetails = (sweetOrderList) =>{
        if (sweetOrderList && sweetOrderList.length > 0){
            let rows = [];
            for (let sweetOrder of sweetOrderList){
                rows.push(
                    <tr key = {sweetOrder.sweetOrderId}>
                        <td>{sweetOrder.sweetOrderId}</td>
                        <td>{sweetOrder.user.userId}</td>
                        <td>{sweetOrder.createdDate}</td>
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
