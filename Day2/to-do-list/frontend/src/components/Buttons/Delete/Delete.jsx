import React, {useContext, useState, useEffect} from "react";
import { fetchDelete } from "../../../utiles/fetch";
import { Context, ContextId } from "../../../App";

const Delete = ({ liste }) => {
    const [clicked, setClicked] = useState(false);
    const [style, setStyle] = useState("delete-btn");
    const [selected, setSelected] = useContext(ContextId);
    const [letGet, setLetGet] = useContext(Context)

    function handleClick(){
        setClicked(!clicked);
    }

    useEffect(()=>{
        setStyle(clicked ?"clicked-btn" : "delete-btn" );
    }, [clicked])
    

    async function handleDelete(){
        for (let object of liste) {
            if (object.id === selected) {
                const d = await fetchDelete("tasks/delete/"+selected.toString())
                setLetGet(true)
            }
        }
    }

    return (
        <div>
            <button className={style} onMouseDown={handleClick} onMouseUp={handleClick} onClick={handleDelete}>Delete</button>
        </div>     
    )
}

export default Delete;