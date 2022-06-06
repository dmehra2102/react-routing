// import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

function Product() {
    const [prod,setProd] = useState({})
    const {id} = useParams();
    useEffect(() => {
       fetch(`http://localhost:8080/products/${id}`)
       .then((res)=> res.json())
       .then((data)=> setProd(data));
    }, []);
    
  return (
    <div>
        <p>{prod.name}</p>
        <p>{prod.price}</p>
        <p>{prod.descriptiton}</p>
    </div>
  )
}

export default Product