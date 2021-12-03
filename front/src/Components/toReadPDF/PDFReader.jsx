import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import ControlPanel from './ControlPanel';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const PDFReader = () => {

    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    return ( 
        <div>
            <section id="pdf-section" className="d-flex flex-column align-items-center w-100">
                <ControlPanel numPages={numPages} pageNumber={pageNumber}/>
                <Document
                    file="/assets/books/ciudad-de-hueso.pdf"
                    onLoadSuccess={onDocumentLoadSuccess}
                >
                    <Page pageNumber={pageNumber} />
                </Document>
            </section>
        </div>
    );
}

export default PDFReader;