import React, { useCallback, useEffect, useState } from 'react';
import './BibleTable.scss';
import { useAppStore } from '../../hooks/useAppStore';
import { useBibleData } from '../../hooks/useBibleData';

const BibleTable = ({ book = '1' }) => {
  const store = useAppStore();
  const bibleData = useBibleData(book);

  const onHandleDoubleClick = useCallback(() => {
    store.toggleViewMode();
  });

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
          bibleData ? bibleData.map((verse, i) => (
            <tr key={verse.id}>
              <td className="bible-table__body--fit-width">{verse.part}</td>
              <td className="bible-table__body__content" onDoubleClick={onHandleDoubleClick}>{verse.content}</td>
            </tr>
          )) : null}
      </tbody>
    </table>
  )
}

export default BibleTable
