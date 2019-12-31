import React, { useContext } from 'react';
import './Home.scss';
import BibleTable from '../component/BibleTable/BibleTable';
import Topbar from '../system/Topbar/Topbar';
import Bottombar from '../system/Bottombar/Bottombar';

const Home = ({match}) => {
    const { book } = match.params;
    const bookNumber = book ? book : 1;
    return (
        <div>
            <Topbar />
            <BibleTable book={bookNumber} />
            <Bottombar />
        </div>
    )
}

export default Home