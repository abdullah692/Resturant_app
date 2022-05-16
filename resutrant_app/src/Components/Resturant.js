import React, { useState } from 'react'

const Resturant = ({ menuData }) => {

    return (
        <>
            {

                menuData.map((currElem, index) => {
                    const { id, category, title, price, image, description } = currElem;
                    return (
                        <>

                            <div className='container' key={id}>
                                <div className='cards'>
                                    <div className='card_body'>
                                        <span className='card_id'>{id}</span>
                                        <span className='card_subtitle'>{category}</span>
                                        <h2 className='card_title'>{title}</h2>
                                        <span className='card_price'><b>Price : {price}</b> </span>
                                        <span className='card_desc'>
                                            <b>Description:</b> <br />
                                            {description}
                                        </span>
                                        <hr></hr>
                                        <img src={image} alt='image' className='images'></img>
                                        <span className='cardTag'>Order</span>
                                    </div>

                                </div>

                            </div>
                        </>
                    )
                })
            }

        </>
    )
}

export default Resturant
