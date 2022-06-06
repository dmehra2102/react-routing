import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "./Product.css"

function Products() {
    const [items,setItems] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/products")
      .then((res)=> setItems(res.data));
    }, []);

  return (
    <div className='product-div'>
        {items.map((item)=>{
            return <Link to={`/products/${item.id}`}  key={item.id} className="items-div">
                <p className='item-info'>{item.name}</p>
                <p className='item-info'>{item.price}</p>
                <button className='moredetails-btn' >More Detail</button>
            </Link>
        })}
    </div>
  )
}

export default Products