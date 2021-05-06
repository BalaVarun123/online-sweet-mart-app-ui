import axios from "../../axios/axios";

const URL_CATEGORY_SHOW = "/category/show/";
const URL_CATEGORY_UPDATE = "/category/update";
const URL_CATEGORY_DELETE = "/category/delete/";
const URL_CATEGORY_ADD = "/category/add";
const URL_CATEGORY_SHOW_ALL = "/category/get-all";
const URL_CATEGORY_TOTAL_COST = "/category/total-cost/"
export default class categoryService {
  async getCategory(id,responseCallBack,catchCallBack){
        let category = null;       
        await axios.get(URL_CATEGORY_SHOW+id)
        .then((response) => category=response.data)
        .catch(catchCallBack);
        if(category != null)
        {
        await axios.get(URL_CATEGORY_TOTAL_COST+category.categoryId)
        .then((response) => category.totalCost=response.data )
        .catch(error => {
            console.log("The error is:"+JSON.stringify(error))
            
            catchCallBack({response:{data:"Invalid category Id"}})}) 
            console.log("category is:"+JSON.stringify(category))
        responseCallBack({data:category})
        }
        else
        {
            console.log("Else part executed")
            catchCallBack({response:{data:"Invalid category Id"}})
        }
    }

    updateCategory(category,responseCallBack,catchCallBack){
        axios.put(URL_CATEGORY_UPDATE,category)
        .then(responseCallBack)
        .catch(catchCallBack);
    }


    deleteCategory(id,responseCallBack,catchCallBack){
        axios.delete(URL_CATEGORY_DELETE+id)
        .then(responseCallBack)
        .catch(catchCallBack)
    }

    addCategory(category,responseCallBack,catchCallBack){
        axios.post(URL_CATEGORY_ADD,category)
        .then(responseCallBack)
        .catch(catchCallBack);
    }

    getAllCategory(responseCallBack,catchCallBack){
        axios.get(URL_CATEGORY_SHOW_ALL)
        .then(responseCallBack)
        .catch(catchCallBack)
    }

}