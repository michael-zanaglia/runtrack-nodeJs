import React, {useState, useEffect} from "react";

const ButtonForm = () => {
    const [clicked, setClicked] = useState(false);
    const [style, setStyle] = useState("add-btn");

    function handleClick(){
        setClicked(!clicked);
    };

    useEffect(()=>{
        setStyle(clicked ?"clicked-btn form-btn" : "add-btn form-btn" );
    }, [clicked]);

    return (
        <div>
            <button type="submit" className={style} onMouseDown={handleClick} onMouseUp={handleClick}>Add</button>
        </div>
    )
}

export default ButtonForm;