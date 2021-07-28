import React from 'react';

import { API_BASE } from '../config/constants'
import FileViewer from 'react-file-viewer';

const ImageFile = ({ ext, path }) => {

    return (
        <FileViewer fileType={ext} filePath={`${API_BASE}${path}`} />
    )
}

export default ImageFile;
