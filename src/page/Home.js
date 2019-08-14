import React from 'react';
import './Home.css';
import data from './../asset/biblical_theology.json';

const Home = () => {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th width="120px">범위</th>
                        <th>본문</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((verse, i) => (
                        <tr>
                            <td>{verse.part}</td>
                            <td>{verse.content}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Home;