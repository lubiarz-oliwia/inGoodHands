import React from 'react'

function FormHeader( {formHeader_h1, formHeader_h2}) {
    return (
        <div className="header_form">
           <h1>{formHeader_h1}</h1>
           <h2>{formHeader_h2}</h2> 
        </div>
    )
}

export default FormHeader
