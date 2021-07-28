import React from 'react';

import ImageFile from './ImageFile';
import CodeFile from './CodeFile';

const IMAGE_EXT = ['png', 'jpg', 'gif', 'bmp', 'jpeg']

const FileContent = ({ ext, path }) => {

  const isImage = IMAGE_EXT.includes(ext);
  const Content = isImage ? ImageFile : CodeFile;

  return <Content path={path} ext={ext} />;
};

export default FileContent;
