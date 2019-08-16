import React from 'react';
import './Home.scss';
import data from './../asset/biblical_theology.json';
import BibleTable from '../component/BibleTable';

const Home = () => {
    return (
        <div>
            <BibleTable />
        </div>
    )
}

export default Home;