import React, { useState, useEffect } from 'react';

import { Collapse } from 'antd';
import { AiOutlineFolder } from 'react-icons/ai';
import fetchData from '../services/fetch-data';

import Loader from './Loader';
import File from './File';

const { Panel } = Collapse;

const FETCH_TYPE = 'directory';
const MARGIN_INCREMENT = 20;

const Directory = ({ path, margin = 0 }) => {
    const [fileTree, setFileTree] = useState(null);
    const newMargin = margin + MARGIN_INCREMENT;

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        const data = await fetchData(FETCH_TYPE, path);
        setFileTree(data);
    };

    if (!fileTree) return <Loader />;

    return (
        <Collapse
            style={{ marginLeft: `${newMargin}px` }}
            destroyInactivePanel='true'
            expandIcon={() => <AiOutlineFolder />}
        >
            <Panel header={path} >
                {fileTree.children.map((child) => {
                    const childPath = `${path}/${child.path}`;
                    if (child.type === 'folder') {

                        return (
                            <Directory path={childPath} key={childPath} />
                        )
                    } else {
                        return (
                            <File path={childPath} key={childPath} margin={margin + MARGIN_INCREMENT} />
                        )
                    }
                })}
            </Panel>
        </Collapse>
    );
};

export default Directory;
