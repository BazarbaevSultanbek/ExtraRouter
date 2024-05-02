import { Button } from '@mui/material'
import { List } from '../HotelList'
import React from 'react'
import { Link } from 'react-router-dom'

function Hotels({ setId }) {
    return (
        <div className='Hotels'>
            <div className="container">
                <div className="Hotels-header">
                    <h3>Hotels</h3>
                </div>
                <div className="Hotels-block">
                    <div className='Hotels-block-inner'>
                        {
                            List.map((item) => (
                                <div className='Hotels-block-inner-item' key={item.id}>
                                    <div>
                                        <img src={item.img} alt={item.name} />
                                    </div>
                                    <div className="Hotels-item-info">
                                        <h4>{item.name}</h4>
                                        <p>
                                            <span>US$</span>{item.price}
                                            <p id="green">free cancellation</p>
                                        </p>
                                    </div>
                                    <Link to={`./${item.id}`}><Button id='btn' variant="contained" onClick={() => setId(item.id)}>View</Button></Link>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hotels