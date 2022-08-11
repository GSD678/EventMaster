import React from "react";
import {Alert} from "react-bootstrap";

const Message = ({variant, children}) => {
    return (
        <Alert variant={variant}></Alert>
    )
}

export default Message
