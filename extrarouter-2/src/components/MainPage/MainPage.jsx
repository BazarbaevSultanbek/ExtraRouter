// MainPage.js
import React, { Suspense } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Loading from '../Loading/Loading';

const Home = React.lazy(() => delayedFunc(import('../Home/Home')));

function MainPage() {
    return (
        <div className='MainPage'>
            <div className="container">
                <div className="MainPage-block">
                    <div className="MainPage-block-inner-nav">
                        <Link to="/Home">Home</Link>
                    </div>
                    <div className="MainPage-block-inner-items">

                        <Suspense fallback={<Loading />}>
                            <Routes>
                                <Route path="/" element={<Home />} />
                            </Routes>
                        </Suspense>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainPage;


const delayedFunc = (promise) => {
    return new Promise(resolve => {
        setTimeout(resolve, 2000);
    }).then(() => promise)
}