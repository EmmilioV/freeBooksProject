import React from 'react'
import { Link } from 'react-router-dom'
import '../../css/estilos.css'

const ReadBook = (props) => {

    return(
        <div className="btn btn-success">
            <Link to={`/readbook/${props.path}`} target="_blank">
                <button className="btn btn-success">leer</button>
            </Link>
        </div>
    )
}

export default ReadBook;
