import React from 'react';
import './main.css';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { ourProductsHome } from '../../data';
import Product from '../product/Product';

const Main = () => {
    return (
        <>
            <section className="banner">
                <div className="container">
                    <Swiper
                        spaceBetween={30}
                        slidesPerView={1}
                        loop={true}
                    >
                        <SwiperSlide>
                            <div className="banner-item">
                                <img src="https://codewithsadee.github.io/anon-ecommerce-website/assets/images/banner-1.jpg" alt="women's latest fashion sale" className="banner-img" />

                                <div className="banner-content">

                                    <p className="banner-subtitle">Trending item</p>

                                    <h2 className="banner-title">Women's latest fashion sale</h2>

                                    <p className="banner-text">
                                        starting at $ <b>20</b>.00
                                    </p>

                                    <button className="banner-btn">Shop now</button>

                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="banner-item">
                                <img src="https://codewithsadee.github.io/anon-ecommerce-website/assets/images/banner-2.jpg" alt="women's latest fashion sale" className="banner-img" />

                                <div className="banner-content">

                                    <p className="banner-subtitle">Trending item</p>

                                    <h2 className="banner-title">Women's latest fashion sale</h2>

                                    <p className="banner-text">
                                        starting at $ <b>20</b>.00
                                    </p>

                                    <button className="banner-btn">Shop now</button>

                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="banner-item">
                                <img src="https://codewithsadee.github.io/anon-ecommerce-website/assets/images/banner-3.jpg" alt="women's latest fashion sale" className="banner-img" />

                                <div className="banner-content">

                                    <p className="banner-subtitle">Trending item</p>

                                    <h2 className="banner-title">Women's latest fashion sale</h2>

                                    <p className="banner-text">
                                        starting at $ <b>20</b>.00
                                    </p>

                                    <button className="banner-btn">Shop now</button>

                                </div>
                            </div>
                        </SwiperSlide>


                    </Swiper>

                </div>
            </section>
            <section className="category">
                <div className="container">
                    <h2 className='heading'>Caterogy</h2>
                    <div className="category-list">


                        <div className="category-item">

                            <div className="category-img-box">
                                <img src="https://codewithsadee.github.io/anon-ecommerce-website/assets/images/icons/dress.svg" alt="dress & frock" width="30" />
                            </div>

                            <div className="category-content-box">

                                <div className="category-content-flex">
                                    <h3 className="category-item-title">Clothes</h3>

                                    <p className="category-item-amount">(53)</p>
                                </div>

                                <button className="category-btn">Show all</button>

                            </div>

                        </div>


                        <div className="category-item">

                            <div className="category-img-box">
                                <img src="https://codewithsadee.github.io/anon-ecommerce-website/assets/images/icons/shoes.svg" alt="winter wear" width="30" />
                            </div>

                            <div className="category-content-box">

                                <div className="category-content-flex">
                                    <h3 className="category-item-title">Shoes</h3>

                                    <p className="category-item-amount">(58)</p>
                                </div>

                                <button className="category-btn">Show all</button>

                            </div>

                        </div>


                        <div className="category-item">

                            <div className="category-img-box">
                                <img src="https://codewithsadee.github.io/anon-ecommerce-website/assets/images/icons/bag.svg" alt="dress & frock" width="30" />
                            </div>

                            <div className="category-content-box">

                                <div className="category-content-flex">
                                    <h3 className="category-item-title">Bags</h3>

                                    <p className="category-item-amount">(53)</p>
                                </div>

                                <button className="category-btn">Show all</button>

                            </div>

                        </div>

                        <div className="category-item">

                            <div className="category-img-box">
                                <img src="https://codewithsadee.github.io/anon-ecommerce-website/assets/images/icons/glasses.svg" alt="dress & frock" width="30" />
                            </div>

                            <div className="category-content-box">

                                <div className="category-content-flex">
                                    <h3 className="category-item-title">Glasses</h3>

                                    <p className="category-item-amount">(53)</p>
                                </div>

                                <button className="category-btn">Show all</button>

                            </div>

                        </div>

                    </div>

                </div>
            </section>
            <section className="our-product">
                <div className="container">
                    <h2 className='heading'>our products</h2>
                    <div className="showcase-list">
                        {ourProductsHome.map((item) => {
                            return <Product
                                key={item.id}
                                idProduct={item.id}
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

export default Main