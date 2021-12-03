import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import ControlPanel from './ControlPanel';
import '../../css/estilos.css'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const PDFReader = () => {

    const [scale, setScale] = useState(1.0);
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    return ( 
        <div>
            <section id="pdf-section " className="d-flex flex-column align-items-center w-100">
                <ControlPanel scale={scale} setScale={setScale} numPages={numPages} pageNumber={pageNumber} setPageNumber={setPageNumber}/>
                <Document
                    file="/assets/books/ciudad-de-hueso.pdf"
                    onLoadSuccess={onDocumentLoadSuccess}
                >
                    <Page pageNumber={pageNumber} scale={scale} />
                </Document>
            </section>
        </div>
    );
}

export default PDFReader;