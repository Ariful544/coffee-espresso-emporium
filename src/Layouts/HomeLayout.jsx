import React from 'react';
import Header from '../components/Header';
import Features from '../components/Features';
import PopularProducts from '../components/PopularProducts';

const HomeLayout = () => {
    return (
        <div className='max-w-screen-2xl min-h-screen'>
            <Header/>
            <Features/>
            <PopularProducts/>
        </div>
    );
};

export default HomeLayout;