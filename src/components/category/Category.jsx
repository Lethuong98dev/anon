import React, { useEffect } from 'react';
import Product from '../product/Product';
import './category.css';
import { useLocation } from 'react-router-dom';
import { ourProductsClothes, ourProductsShoes, ourProductsBags, ourProductsGlasses } from '../../data';

const Category = () => {
  const location = useLocation();

  let data = [];
  if(location.pathname === "/anon/category/clothes"){
    data = ourProductsClothes;
  }
  if(location.pathname === "/anon/category/shoes"){
    data = ourProductsShoes;
  }
  if(location.pathname === "/anon/category/bags"){
    data = ourProductsBags;
  }
  if(location.pathname === "/anon/category/glasses"){
    data = ourProductsGlasses;
  }
  return (
    <>
      <section className="our-product">
        <div className="container">
          <h2 className='heading'>our products</h2>
          <div className="showcase-list">
            {data.map((item) => {

              return <Product
                key={item.id}
                category={item.category}
                productName={item.productName}
                price={item.price}
                link={item.link}
              />

            })}
          </div>

        </div>
      </section>
    </>
  )
}

export default Category