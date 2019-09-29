import React from 'react'

const ValidationCheck = ({textLength}) => {
    let validationMessage = 'Text is long enough!';
    if(textLength<=5){
        validationMessage = 'Text is too short'
    }
    return (
        <div>
            <p>{validationMessage}</p>
        </div>
    )
}

export default ValidationCheck
