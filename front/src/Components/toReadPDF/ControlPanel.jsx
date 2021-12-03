import React from 'react';
import '../../css/index.css'

const ControlPanel = (props) => {

    const{pageNumber, numPages, setPageNumber} = props;

    const isFirstPage = pageNumber === 1;
    const isLastPage = pageNumber === numPages;

    const firstPageClass = isFirstPage ? 'disabled' : 'clickable';
    const lastPageClass = isLastPage ? 'disabled' : 'clickable';

    const goToFirstPage = () => {
        if (!isFirstPage) setPageNumber(1);
    };
    const goToPreviousPage = () => {
        if (!isFirstPage) setPageNumber(pageNumber - 1);
    };
    const goToNextPage = () => {
        if (!isLastPage) setPageNumber(pageNumber + 1);
    };
    const goToLastPage = () => {
        if (!isLastPage) setPageNumber(numPages);
    };
    
    const onPageChange = (e) => {
        const { value } = e.target;
        setPageNumber(Number(value));
    };


    return ( 
        <div className="control-panel m-3 p-3 d-flex align-items-baseline justify-content-center">
            <i 
                className={`fa fa-fast-backward mx-3 ${firstPageClass}`} 
                onClick={goToFirstPage}/>
            <i 
                className={`fa fa-backward mx-3 ${firstPageClass}`} 
                onClick={goToPreviousPage}/>
            <span>
                Page {pageNumber} of {numPages}
            </span>
            <i 
                className={`fa fa-forward mx-3 ${lastPageClass}`} 
                onClick={goToNextPage}/>
            <i 
                className={`fa fa-fast-forward mx-3 ${lastPageClass}`} 
                onClick={goToLastPage}/>
        </div>
    );
};

export default ControlPanel;