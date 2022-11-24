import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { cartListSelector, grandCost } from '../../redux/selector';


const Header = () => {
    const data = useSelector(cartListSelector);
    const cost = useSelector(grandCost);
    console.log(cost);
    const toggleNavbar = () => {
        document.querySelector('[data-navbar]').classList.toggle('show');

    }
    const toggleSearch = () => {
        document.querySelector('[data-search]').classList.toggle('show');

    }
    return (
        <>
            <header className="header">
                <div className="container">
                    <Link to='/anon'>
                        <div className="logo"> Anon</div>
                    </Link>
                    <nav className='navbar' data-navbar>
                        <ul className='navbar-list'>
                            <li><Link to='/anon/category/clothes'>Clothes</Link></li>
                            <li><Link to='/anon/category/shoes'>Shoes</Link></li>
                            <li><Link to='/anon/category/bags'>Bags</Link></li>
                            <li><Link to='/anon/category/glasses'>Glasses</Link></li>
                        </ul>
                    </nav>
                    <div className="search" data-search>
                        <input type="search" name="search" className="search-field" placeholder="Search here..." />
                        <button className="btn-search">
                            <ion-icon name="search-outline"></ion-icon>
                        </button>
                    </div>
                    <div className="actions">
                        <div className="action toggle-navbar" onClick={toggleNavbar}>
                            <ion-icon name="menu-outline"></ion-icon>

                        </div>
                        <div className="action toggle-search" onClick={toggleSearch}>
                            <ion-icon name="search-outline"></ion-icon>

                        </div>
                        <Link to='/anon/cart'>
                            <button className="action">
                                <ion-icon name="bag-handle-outline"></ion-icon>
                                <span className="count">{data.length}</span>
                            </button>
                        </Link>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header