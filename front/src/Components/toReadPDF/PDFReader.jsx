import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import ControlPanel from './ControlPanel';
import '../../css/estilos.css'
import { useParams } from 'react-router';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const PDFReader = () => {
    let{bookpath} = useParams();
    const [scale, setScale] = useState(1.0);
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    return ( 
        <div className="pdfBook">
            <section id="pdf-section " className="d-flex flex-column align-items-center w-100">
                <ControlPanel scale={scale} setScale={setScale} numPages={numPages} pageNumber={pageNumber} setPageNumber={setPageNumber}/>
                <Document
                    file={`/assets/books/${bookpath}`}
                    onLoadSuccess={onDocumentLoadSuccess}
                >
                    <Page pageNumber={pageNumber} scale={scale} />
                </Document>
            </section>
        </div>
    );
}

export default PDFReader;