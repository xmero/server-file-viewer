import React, { useState, useEffect } from 'react';

import Loader from './Loader';
import fetchData from '../services/fetch-data';
import SyntaxHighlighter from 'react-syntax-highlighter';

const FETCH_TYPE = 'file';

const CodeFile = ({ ext, path }) => {

    const [fileContent, setFileContent] = useState(null);

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        const data = await fetchData(FETCH_TYPE, path);
        setFileContent(data);
    };

    if (!fileContent) return <Loader />;

    const processJSON = (data) => JSON.stringify(data);

    return (
        <SyntaxHighlighter language={ext}>
            {ext === 'json' ? processJSON(fileContent) : fileContent}
        </SyntaxHighlighter>

    )
}

export default CodeFile;
