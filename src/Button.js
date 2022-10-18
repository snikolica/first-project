import React from "react";
import Card from "./Card";
const Button = (props) => {
    return ( 
        <Card className={props.className} onClick={props.onClick}>
            {props.children}
        </Card>
        
     );
}
 
export default Button;
