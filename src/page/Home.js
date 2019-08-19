import React from 'react';
import './Home.scss';
import BibleTable from '../component/BibleTable/BibleTable';
import Topbar from '../system/Topbar/Topbar';
import Bottombar from '../system/Bottombar/Bottombar';

const Home = () => {
    return (
        <div>
            <Topbar />
            <BibleTable />
            <Bottombar />
        </div>
    )
}

export default Home