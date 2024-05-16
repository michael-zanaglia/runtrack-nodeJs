import React, { useContext, useState } from "react";
import Inputs from "./Inputs/Inputs";
import ButtonForm from "./ButtonForm/ButtonForm";
import { fetchPost } from "../../utiles/fetch";
import { Context } from "../../App";


const Form = () => {
    const [id, setId] = useState(1)
    const [letGet, setLetGet] = useContext(Context)
    
    async function handleForm(e){
        e.preventDefault()
        const form = e.target;
        const formData = new FormData(form);
        const task = formData.get("task");
        const desc = formData.get("description");
        if (task.trim() && desc.trim()){
            let dataFromJson = await fetchPost(task, desc, id)
            dataFromJson = JSON.stringify(dataFromJson)
            setLetGet(true)
            //alert(dataFromJson)
        } else {
            alert("Veuillez completer les deux champs!")
        }
        form.reset()
        setId(id+1)
    }

    return(
        <form onSubmit={handleForm}>
            <Inputs/>
            <ButtonForm/>
        </form>
    )
}

export default Form;