import React, { useContext } from "react";
import { ContextId } from "../../App";


const ListBoard = ({ data }) => {
    const [selected, setSelected] = useContext(ContextId);
    
    function handleClick(id) {
        setSelected(id);
    }
    

    

    return (
        <div className="board">
            <div className="box-header">
                <p>No°</p>
                <p>Tache</p>
                <p>Description</p>
            </div>
            {data ? data.map((task, index) => (
               <div onClick={()=>handleClick(task.id)} key={index} className={selected === task.id ?"box-list focus" :"box-list"}>
                   <p>{task.id}</p>
                   <p>{task.name}</p>
                   <p>{task.description}</p>
               </div>
           )) : <p>No list.</p>}
        </div>
    )
}

export default ListBoard;