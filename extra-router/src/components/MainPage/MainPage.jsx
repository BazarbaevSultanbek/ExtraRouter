import React, { useEffect, useRef, useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from '../Home/Home'
import About from '../About/About'
import Hotels from '../Hotels/Hotels'
import { List } from '../HotelList'
import Hotel from '../Hotel/Hotel'

function MainPage() {
    const [status, setStatus] = useState(false)
    const [id, setId] = useState()

    return (
        <div className='MainPage'>
            <div className="container">
                <div className="MainPage-header">
                </div>
                <div className="MainPage-block">
                    <div className="MainPage-block-inner">
                        <Link to={`./Home`}>Home</Link>
                        <Link to={`./Hotels`} onClick={() => setStatus(!status)}>Hotels</Link>
                        <div>
                            <ul className={status ? 'links' : 'hidden-links'}>
                                {
                                    List.map((item) => (
                                        <li key={item.id}><Link to={`./Hotels/${item.id}`} onClick={() => setId(item.id)}>{item.name}</Link>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                        <Link to={`./About`}>About</Link>
                    </div>
                    <div className="MainPage-block-content">
                        <Routes>
                            <Route path="Home" element={<Home />} />
                            <Route path='About' element={<About />} />
                            <Route path='Hotels' element={<Hotels setId={setId} />} />
                            <Route path={'Hotels/:id'} element={<Hotel id={id} />} />
                        </Routes>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainPage