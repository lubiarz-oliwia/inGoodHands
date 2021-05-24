import React from 'react';
import ContactUs from './Home/ContactUs';
import FourSteps from './Home/FourSteps';
import HomeHeader from './Home/HomeHeader';
import ThreeColumns from './Home/ThreeColumns';
import UserStory from './Home/UserStory';

export default function Home() {
    return (
        <>
            <HomeHeader/>
            <ThreeColumns />
            <FourSteps />
            <UserStory />
            <ContactUs/>
        </>
    )
}
