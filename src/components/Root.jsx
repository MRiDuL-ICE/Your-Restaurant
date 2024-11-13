import React from 'react';
import Header from './Header';
import Banner from './Banner';
import About from './About';
import Items from './Items';

const Root = () => {
    return (
        <div className=''>
            <Header></Header>
            <Banner></Banner>
            <About></About>
            <Items></Items>
        </div>
    );
};

export default Root;