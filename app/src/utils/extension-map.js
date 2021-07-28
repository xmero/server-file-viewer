import React from 'react';

import { DiJavascript1, DiCss3Full, DiHtml5 } from 'react-icons/di';
import { VscJson } from 'react-icons/vsc';
import { RiImageFill } from 'react-icons/ri';

const FILE_ICONS = {
  js: <DiJavascript1 />,
  css: <DiCss3Full />,
  html: <DiHtml5 />,
  json: <VscJson />,
  jpeg: <RiImageFill />
};

export default FILE_ICONS;