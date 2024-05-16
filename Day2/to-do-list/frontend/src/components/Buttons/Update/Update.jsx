import React, {useState, useEffect} from "react";

const Update = () => {
    const [clicked, setClicked] = useState(false);
    const [style, setStyle] = useState("update-btn");

    function handleClick(){
        setClicked(!clicked);
    }

    useEffect(()=>{
        setStyle(clicked ?"clicked-btn" : "update-btn" );
    }, [clicked])
    
    return (
        <div>
            <button className={style} onMouseDown={handleClick} onMouseUp={handleClick}>Update</button>
        </div>
    )
}

export default Update;