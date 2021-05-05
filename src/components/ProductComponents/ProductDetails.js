import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom";
import ProductService from '../../services/ProductServices/ProductServices';

const ProductDetails = () => {
    const product = useSelector((state) => state.productReducer.product);

    const {Id} = useParams();

    const dispatch = useDispatch();

    console.log("productId:" +Id);
    
    const fetchProductDetails = () => ProductService.getProduct(Id);

    useEffect(() => {
        
        dispatch (fetchProductDetails());
    }, []);

if(product!=null){
    console.log("checkingProductDetails:"+JSON.stringify(product))
    const { productId,name,description,category,listProduct, price, available,photopath} = product;
    return (
        <div>
          {Object.keys(product).length === 0 ? (
            <div>...Loading</div>
          ) : (
              <div  >
                 <div>
                    </div>

                  <div>
                    <h1>ProductID:{productId}</h1>
                    
                    {listProduct.map(category =>{
                     return (<div key={productId} >
                    <h2>ProductID: {productId} </h2> <br/>
                    <h2>ProductName: {name}<br/> </h2>
                    <h2>Price: {price}<br/> </h2>
                    <h2>ProductDescription: {description}<br/> </h2>
                    <h2>Available: {available+"" } <br/> </h2>
                    <h2>Photopath: {photopath} <br/> </h2>
                    <h2>CategoryId: {category.categoryId} <br/> </h2>
                    <h2>CategoryName: {category.name} <br/> </h2>

                    <br/> <br/>



                     </div>)})
                    }
                   
                  </div>
              </div>
          )}
        </div>
    );
          }
          else{
            return <p> please wait</p>
          }
};

export default ProductDetails;