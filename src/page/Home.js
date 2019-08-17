import React from 'react';
import './Home.scss';
import BibleTable from '../component/BibleTable/BibleTable';
import Navbar from '../component/Navbar/Navbar';

const Home = () => {
    return (
        <div>
            <Navbar position="top" />
            <BibleTable />
            <Navbar position="bottom"/>
        </div>
    )
}

export default Home;