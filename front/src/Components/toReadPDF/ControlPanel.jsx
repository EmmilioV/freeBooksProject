import React from 'react';
import '../../css/index.css'

const ControlPanel = (props) => {

    const{pageNumber, numPages} = props;

    return ( 
        <div className="control-panel m-3 p-3 d-flex align-items-baseline justify-content-center">
            <i className="fa fa-fast-backward mx-3" />
            <i className="fa fa-backward mx-3" />
            <span>
                Page {pageNumber} of {numPages}
            </span>
            <i className="fa fa-forward mx-3" />
            <i className="fa fa-fast-forward mx-3" />
        </div>
    );
};

export default ControlPanel;