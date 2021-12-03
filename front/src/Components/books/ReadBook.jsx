import React, { Fragment } from 'react'
import '../../css/estilos.css'
import PDFReader from '../toReadPDF/PDFReader'

const ReadBook = (props) => {

    return(
        <Fragment>
            <a href={`/${props.bookPath}`} target="_blank">
                <button className="btn btn-success" onClick={PDFReader(props.bookPath)}>Leer</button>
            </a>
            <ReadBook bookPath={props.bookPath}/>
        </Fragment>
    )
}

export default ReadBook;
