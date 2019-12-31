import React, { useState, useEffect } from 'react';
import cryptorjs from 'cryptorjs';

const cryptor = new cryptorjs('godisgood');

export function useBibleData (book) {
    const [bibleData, setBibleData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetch(`data/${book}.data`)
            .then(res => res.text())
            .then(cryptText => cryptor.decode(cryptText));
    
            setBibleData(data);
        }
        fetchData();
    }, [book]);
    
    return bibleData;
}
