import React from 'react'

const CharCount = ({character,click}) => {

    const styles={
        display : 'inline-block',
        padding : '10px',
        margin : '16px',
        border : '1px solid black',
        textAlign : 'center'
    }

    return (
        <div onClick={click} style={styles} >
            {character}
        </div>
    )
}

export default CharCount
