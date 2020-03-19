import React from 'react'

const ImageButton = (props) => {
    return (<img src={props.image} onClick={props.onClick} />)
}

export default ImageButton