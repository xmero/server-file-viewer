import React from 'react';

import FileViewer from 'react-file-viewer';

const API_BASE = 'http://localhost:8080/file';

const ImageFile = ({ ext, path }) => {

    return (
        <FileViewer
            fileType={ext}
            filePath={`${API_BASE}${path}`} />
    )
}

export default ImageFile;
