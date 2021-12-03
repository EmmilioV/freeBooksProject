import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import '../../css/estilos.css'

const ReadBook = (props) => {

    return(
        <div className="btn btn-success">
            <Link to={`/readbook/${props.path}`}>
                <button className="btn btn-success">leer</button>
            </Link>
        </div>
    )
}

export default ReadBook;
