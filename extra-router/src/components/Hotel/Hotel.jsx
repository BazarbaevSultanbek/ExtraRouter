import React from 'react'
import { List } from '../HotelList'

function Hotel({ id }) {


    // const log = () => {
    //     return List.map((item) => item.id === id ? 'right' : 'none')
    // }
    // console.log(log());
    return (
        <div className='Hotel'>
            <div className="container">
                <div className="Hotel-block">
                    <div className="Hotel-block-inner">
                        {
                            List.map((item) => {
                                if (id === item.id) {
                                    return (
                                        <div key={item.id} className='Hotel-block-inner-item'>
                                            <img src={item.img} alt={item.name} />
                                            <div>
                                                <p>{item.name}</p>
                                                <p className='green'>Free cancellation</p>
                                                <p className='price'><span>US</span>${item.price}</p>
                                                <p>{item.desc}</p>
                                            </div>
                                        </div>
                                    );
                                }
                                return null;
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hotel