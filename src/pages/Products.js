import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function Product({ url, addToCart }) {
  const [name, setName] = useState('');
  const [products, setProducts] = useState([]);

  let params = useParams();

  useEffect(() => {
    let address = '';

    if (params.searchPhrase === undefined) {
      address = url + 'products/getproducts.php/' + params.categoryId;
    } else {
      address = url + 'products/searchproducts.php/' + params.searchPhrase;
    }

    axios.get(address)
      .then((response) => {
        const json = response.data;
        if (params.searchPhrase === undefined) {
          setName(json.category);
          setProducts(json.products);
        } else {
          setName(params.searchPhrase);
          setProducts(json);
        }

      }).catch(error => {
        alert(error.response === undefined ? error : error.response.data.error);
      })
  }, [params]);

  const AddToCart = (product) => {
    addToCart(product);
  };

  const imgStyle = {
    width: '200px',
    height: '200px',
    border: '2px solid black',
    borderRadius: '10px',
    padding: '0',
    margin: '0'
  };

  return (
    <div>
      <h3>Products for {name}</h3>
      {products.map(product => (
        <div key={product.id}>
          <img src={url + 'images/' + product.image} alt="tuotekuva" style={imgStyle} />
          <div>{product.name}</div>
          <div>{product.price}</div>
          <button className='btn btn-primary' type="button" onClick={e => addToCart(product)}>Add</button>
        </div>
      ))}
    </div>
  )
}