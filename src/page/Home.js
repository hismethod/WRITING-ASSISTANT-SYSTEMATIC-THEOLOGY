import React, { useContext } from 'react';
import './Home.scss';
import BibleTable from '../component/BibleTable/BibleTable';
import Topbar from '../system/Topbar/Topbar';
import Bottombar from '../system/Bottombar/Bottombar';
import { observer } from 'mobx-react';
import { useAppStore } from '../hooks/useAppStore';
const Home = observer(() => {
    const appStore = useAppStore();
    return (
        <div>
            <Topbar />
            <BibleTable viewMode={appStore.viewMode} store={appStore}/>
            <Bottombar />
        </div>
    )
})

export default Home