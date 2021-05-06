import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


const CustomerComponent = () => {
    const carts = useSelector((state) => state.CustomerReducer.carts);
    if (carts != null) {
        const renderList = carts.map((cart) => {
            const {userId, username,sweetOrder,sweetItem,cart } = customer;


            return (
                <div key={cartId} className="container" >


                    <table class="ui red table"  >
                        <thead>
                            <tr >
                                <th className="center aligned" > USER ID </th>
                                <th className="center aligned"> USERNAME </th>
                                <th className="center aligned"> SWEET ORDER </th>
                                <th className="center aligned"> SWEET ITEM </th>
                                <th className="center aligned"> CART </th>
                                <th className="center aligned" class="center aligned" class="ui olive label"> ACTION </th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td class="center aligned"> {userId} </td>
                                <td class="center aligned"> {username} </td>
                                <td class="center aligned"> {sweetOrder} </td>
                                <td class="center aligned"> {sweetItem} </td>
                                <td class="center aligned"> {cart} </td>


                                <Link to={`/customer/show-all/${cartId}`}>
                                    <i class="user icon " ></i> SHOW CUSTOMER

                    </Link>

                            </tr>

                        </tbody>

                    </table>

                </div>


            );
        });
        return <>{renderList}</>;

    }
    else {
        return <p> please wait </p>
    }
};

export default CustomerComponent;