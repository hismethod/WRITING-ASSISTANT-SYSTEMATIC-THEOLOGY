import React from 'react';
import './BibleTable.scss';
import data from './../asset/biblical_theology.json';

function BibleTable() {
    return (
        <table className="bible-table">
            <thead className="bible-table__head bible-table__head--fixed">
                <tr>
                    <th>범위</th>
                    <th>본문</th>
                </tr>
            </thead>
            <tbody className="bible-table__body">
                {
                    data.map((verse, i) => (
                    <tr key={verse.id}>
                        <td className="bible-table__body--fit-width">{verse.part}</td>
                        <td className="bible-table__body__content">{verse.content}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default BibleTable
