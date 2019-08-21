import React, { useContext } from 'react';
import './Home.scss';
import BibleTable from '../component/BibleTable/BibleTable';
import Topbar from '../system/Topbar/Topbar';
import Bottombar from '../system/Bottombar/Bottombar';

const Home = ({match}) => {
    return (
        <div>
            <Topbar />
            <BibleTable book={`${match.params.book}`} />
            <Bottombar />
        </div>
    )
}

export default Home