import React from 'react';
import './Home.scss';
import BibleTable from '../component/BibleTable/BibleTable';
import Navbar from '../component/Navbar/Navbar';
import BottomNavbar from '../component/BottomNavbar/BottomNavbar';

const Home = () => {
    return (
        <div>
            <Navbar />
            <BibleTable />
            <BottomNavbar />
        </div>
    )
}

export default Home;