import React, { useContext } from "react";
import Update from "./Update/Update";
import Delete from "./Delete/Delete";


const Buttons = ({ data }) => {

    return (
        <div className="buttons">
            <Update/>
            <Delete liste={data}/>
        </div>
    )
}

export default Buttons;