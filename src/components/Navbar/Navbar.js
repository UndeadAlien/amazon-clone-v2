import React from 'react'
import './Navbar.css'

import { MdLocationOn } from 'react-icons/md'
import { BiSearchAlt } from 'react-icons/bi'
import { RiArrowDownSFill } from 'react-icons/ri'
import { CgShoppingCart } from 'react-icons/cg'

const Navbar = () => {
    return (
        <>
            <div className="nav__container">
                <div className="wrapper">
                    <div className="nav__grid__layout">
                        <div className="nav__left">
                            <div className="nav__logo">
                                <img src="/images/amazon_logo.png" alt="" />
                            </div>

                            <div className="nav__address">
                                <div className="nav__address__icon">
                                    <span><MdLocationOn /></span>
                                </div>
                                <div className="nav__address__display">
                                    <span className="line__one">Hello</span>
                                    <span className="line__two">Select your address</span>
                                </div>
                            </div>

                            </div>
                        <div className="nav__center">
                        <div className="search__container">
                            <form action="">
                                <button>All<span><RiArrowDownSFill /></span></button>
                                <input type="text" placeholder="Search..." name="search" />
                                <button type="submit"><BiSearchAlt /></button>
                            </form>
                        </div>
                        </div>
                        <div className="nav__right">
                            <div className="right__side__grid">
                                <div className="country__picker">
                                    <img src="/images/icons/us.svg" alt="" />
                                </div>
                                <div className="sign__in">
                                    <span>Hello, Sign in</span>
                                    <span><strong>Account & Lists</strong></span>
                                </div>
                                <div className="returns__orders">
                                    <span>Returns</span>
                                    <span><strong>& Orders</strong></span>
                                </div>
                                <div className="cart">
                                    <span><CgShoppingCart /></span>
                                    {/* <span>0</span> */}
                                    <span><strong>Cart</strong></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar;
