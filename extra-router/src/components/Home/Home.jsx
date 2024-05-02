import React from 'react'
import hotel from '../photos/Hotel.jpg'
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';


function Home() {
    return (
        <div className='Home'>
            <div className="container">
                <div className="Home-block">
                    <div className="Home-block-inner">
                        <img src={hotel} alt="hotel" />
                        <div className="Home-block-inner-abs">
                            <h1>Dubai Hotel</h1>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                Veniam voluptas quam ducimus, doloribus dolorum, omnis eius,
                                at officiis ullam nihil ipsa accusantium dicta sapiente neque pariatur.
                                Fugiat nostrum temporibus labore at qui sunt vel repellat ex sed magni
                                consectetur iure quasi mollitia itaque aspernatur quod soluta magnam
                                consequuntur quidem suscipit inventore ipsam, maiores aperiam. Natus
                                debitis dolorum minima voluptas expedita alias officia laudantium enim
                                dolor quas blanditiis quaerat, iure aspernatur tenetur odio nulla libero
                                . At laudantium quisquam corporis ullam sit itaque inventore vero qui sed,
                                quos magni aspernatur ipsum aperiam corrupti error, consequuntur ducimus
                            </p>
                            <Link to={'/Hotels'}><Button variant="contained" >View Hotels</Button></Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Home;