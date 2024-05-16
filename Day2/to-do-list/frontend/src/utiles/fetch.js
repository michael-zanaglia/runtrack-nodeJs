export async function fetchPost(tache, description, id){
    const localHost = "http://localhost:8080";
    const postLink = localHost + "/tasks/" + encodeURIComponent(id) + "/" + encodeURIComponent(tache) + "/" + encodeURIComponent(description);
    try {
        const response = await fetch(postLink, {
        method : "POST",
        'content-type' : 'application/json'
        });
        if (!response.ok){
            throw new Error("Un probleme est survenue.");
        } else {
            const data = await response.json()
            return data;
        }
    } catch (error){
        console.error("Erreur lors du fetch...", error)
        return;
    }
}


export async function fetchGet(route) {
    const localHost = "http://localhost:8080/";
    const postLink = localHost + route;
    try {
        const response = await fetch(postLink, {
        method : "GET",
        'content-type' : 'application/json'
        });
        if (!response.ok){
            throw new Error("Un probleme est survenue.");
        } else {
            const data = await response.json()
            return data.task;
        }
    } catch (error){
        console.error("Erreur lors du fetch...", error)
        return ;
    }
}

export async function fetchDelete(route){
    const localHost = "http://localhost:8080/";
    const postLink = localHost + route;
    try {
        const response = await fetch(postLink, {
        method : "DELETE"
        });
        if (!response.ok){
            throw new Error("Un probleme est survenue.");
        } else {
            const data = await response.json()
            return data.task;
        }
    } catch (error){
        console.error("Erreur lors du fetch...", error)
        return;
    }
}