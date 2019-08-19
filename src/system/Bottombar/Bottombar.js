import React from 'react';
import Navbar from '../../component/Navbar/Navbar';
import './Bottombar.scss';

const Bottombar = () => {
    return (
        <Navbar position="bottom">
            <div className="bottombar__content">
                <ul>
                    <li>
                        <button>다른책쓰기</button>
                    </li>
                    <li>
                        <button>한절씩</button>
                    </li>
                </ul>
            </div>
        </Navbar>
    )
}

export default Bottombar
