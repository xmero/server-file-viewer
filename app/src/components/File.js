import React from 'react';

import FILE_ICONS from '../utils/extension-map';
import { AiOutlineFile } from 'react-icons/ai';
import { Collapse, Button } from 'antd';

import { API_FILE_DOWNLOAD } from '../config/constants'
import FileContent from './FileContent';

const { Panel } = Collapse;

const File = ({ path, margin }) => {

  const ext = path.split('.')[1];

  return (
    <Collapse
      style={{ marginLeft: `${margin}px` }}
      destroyInactivePanel='true'
      expandIcon={() => FILE_ICONS[ext] || <AiOutlineFile />}
    >
      <Panel header={path} >
        <FileContent path={path} ext={ext} />
        <Button type='primary'>
          <a href={`${API_FILE_DOWNLOAD}${path}`}>
            Download file
          </a>
        </Button>
      </Panel>
    </Collapse>
  );
};

export default File;