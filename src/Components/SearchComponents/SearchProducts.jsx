import React, { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import "./SearchedProduct.css"

const SearchProducts = () => {
    let [product , setproduct]=useState()
    let dispatch=useDispatch()
    let state=useSelector(state=>state.ProductReducer[0]);

    let searchedProducts=(e)=>{
        console.log(e)
         if(e.key==="Enter"){
          let value=  state.filter(a=>a.productname === e.target.value)
         console.log(value)
         dispatch({type:"GET_DATA",payload:value})
    }
    }
  return (
    <div>
        <input type="text" placeholder='search product' onKeyDown={searchedProducts}/>
    </div>
  )
}

export default SearchProducts