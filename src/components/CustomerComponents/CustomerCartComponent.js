class CustomerCartComponent extends React.Component {

    addCartIdRef = React.createRef()


    render(){

        let addSection;
        if (this.props.isAddSelected){
        addSection = <div>Enter Cart Id to add : <input type = "number" min = "0" ref = {this.addCartIdRef}  required/>
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
                        <th>Grand total</th>
                        <th>Product</th>
                        <th>Cart id</th>
                        <th>Product count</th>
                        <th>Total</th>
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

    loadDetails = (cart) =>{
        if (cart && cart.length > 0){
            let rows = [];
            for (let cart of cart){
                rows.push(
                    <tr key = {cart.grandTotal}>
                        <td>{cart.listProduct}</td>
                        <td>{cart.cartId}</td>
                        <td>{cart.productCount}</td>
                        <td>{cart.total}</td>
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
