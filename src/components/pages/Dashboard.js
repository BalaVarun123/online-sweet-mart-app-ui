import React from "react";
class DashBoard extends React.Component {
    render(){
        return <div>
          <br/>
          <br/>
          <br/>
        <div className = "ui four column grid">
          <div className = "column">
              <div className="ui card">
              <div className="content">
              <a className="header" href = "/admin">Admin</a>
              <div className="description">
              For Administration tasks aggregates information from various tables.
              </div>
              </div>
              <div className="extra content">
              <a href = "/admin/add"><i className="plus icon"></i> Add </a>
              <a href = "/admin/show-all"> <i className="list alternate outline icon"></i>  Show All </a>
              </div>
              </div>
            </div>
            <div className = "column">
              <div className="ui card">
              <div className="content">
              <a className="header"  href = "/customer/show-all">Customer</a>
              <div className="description">
              For managing customer information
              </div>
              </div>
              <div className="extra content">
              <a href = "/customer/add"><i className="plus icon"></i> Add </a>
              <a href = "/customer/show-all"> <i className="list alternate outline icon"></i>  Show All </a>
              </div>
              </div>
            </div>
            <div className = "column">
              <div className="ui card">
              <div className="content">
              <a className="header"  href = "/cart/show-all-carts" >Cart</a>
              <div className="description">
              For managing carts of customers
              </div>
              </div>
              <div className="extra content">
              <a href="/cart/add-cart"><i className="plus icon"></i> Add </a>
              <a href = "/cart/show-all-carts"> <i className="list alternate outline icon"></i>  Show All </a>
              </div>
              </div>
              </div>
            <div className = "column">
              <div className="ui card">
              <div className="content">
              <a className="header" href="/product/show-all">Product</a>
              <div className="description">
              For managing product information
              </div>
              </div>
              <div className="extra content">
              <a href="/product/add"><i className="plus icon"></i> Add </a>
              <a href="/product/show-all"> <i className="list alternate outline icon"></i>  Show All </a>
              </div>
              </div>
            </div>
            <div className = "column">
              <div className="ui card">
              <div className="content">
              <a className="header" href="/category/get-all">Category</a>
              <div className="description">
              For manging product categories.
              </div>
              </div>
              <div className="extra content">
              <a href = "/category/add" ><i className="plus icon"></i> Add </a>
              <a  href = "/category/get-all"> <i className="list alternate outline icon"></i>  Show All </a>
              </div>
              </div>
              </div>
              <div className = "column">
              <div className="ui card">
              <div className="content">
              <a className="header" href = "/sweet-item/show-all">Sweet Item</a>
              <div className="description">
              For managing individual sweet items.
              </div>
              </div>
              <div className="extra content">
              <a href = "/sweet-item/add"><i className="plus icon"></i> Add </a>
              <a href = "/sweet-item/show-all"> <i className="list alternate outline icon"></i>  Show All </a>
              </div>
              </div>
              </div>
              <div className = "column">
              <div className="ui card">
              <div className="content">
              <a className="header" href = "/order-bill">Order Bill</a>
              <div className="description">
              For managing bills for sweet orders.
              </div>
              </div>
              <div className="extra content">
              <a href = "/order-bill/add"><i className="plus icon"></i> Add </a>
              <a href = "/order-bill/show-all"> <i className="list alternate outline icon"></i>  Show All </a>
              </div>
              </div>
              </div>
        
        
        </div>
        </div>
    }
}

export default DashBoard;
