import React from 'react'
import './offer.css'

const Offer = () => {
    return (
        <div className="offer">
            <div className='container'>
                <div className="row d-flex justify-content-center">
                    <div className="col-lg-4 col-sm-12 col-md-6 mb-3">
                        <ul>
                            <li><button type='button' className='active'>Cake & Milk <span>(65 items)</span></button></li>
                            <li><button>Fresh Meat <span>(30 items)</span></button></li>
                            <li><button>Vegetables <span>(25 items)</span></button></li>
                            <li><button>Apple & Mango <span>(45 items)</span></button></li>
                            <li><button>Strawberry <span>(68 items)</span></button></li>
                            <li><button className='active'>View More</button></li>
                        </ul>
                    </div>
                    <div className="col-lg-4 col-sm-12 col-md-6 img mb-3">
                        <img src="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/categories/3.jpg" alt="" />
                        <div className="off">
                            <h2>50 <span>% OFF</span></h2>
                            <div className="contant">
                                <h3>Cake</h3>
                                <div className="shop">
                                    <button className='rounded border-0'><a href="#">Shop Now</a></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-12 col-md-6 img">
                        <img src="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/categories/4.jpg" alt="" />
                        <div className="off">
                            <h2>40 <span>% OFF</span></h2>
                            <div className="contant">
                                <h3>Milk</h3>
                                <div className="shop">
                                    <button className='rounded border-0'><a href="#">Shop Now</a></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Offer
