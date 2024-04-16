import React, { useState, useEffect } from 'react';


function DataFetcher() {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('https://api.example.com/data')
        .then(response => response.json())
        .then(data => setData(data))


    }, [])

    return <div>{data ? <p>Data: {data}</p> : <p>Loading...</p>}</div>

}


export default DataFetcher;


