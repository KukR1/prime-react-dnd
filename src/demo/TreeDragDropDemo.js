import 'primeicons/primeicons.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import '../../index.css';
import ReactDOM from 'react-dom';

import React, { useState, useEffect } from 'react';
import { Tree } from 'primereact/tree';
import { NodeService } from '../service/NodeService';

const TreeDragDropDemo = () => {
    const [nodes, setNodes] = useState(null);
    const nodeService = new NodeService();

    useEffect(() => {
        nodeService.getTreeNodes().then(data => setNodes(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div>
            <div className="card">
                <Tree value={nodes} dragdropScope="demo" onDragDrop={event => setNodes(event.value)} />
            </div>
        </div>
    )
}
                
const rootElement = document.getElementById("root");
ReactDOM.render(<TreeDragDropDemo />, rootElement);