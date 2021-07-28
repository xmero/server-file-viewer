import React from 'react';

import { IMAGE_EXT } from '../config/constants'
import ImageFile from './ImageFile';
import CodeFile from './CodeFile';

const FileContent = ({ ext, path }) => {

  const isImage = IMAGE_EXT.includes(ext);
  const Content = isImage ? ImageFile : CodeFile;

  return <Content path={path} ext={ext} />;
};

export default FileContent;
