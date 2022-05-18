

export async function get(endpoint:string){
    return await fetch("https://mealsfoodapi-0line.vercel.app/"+endpoint)
    .then(function (resultado){
       return resultado.json();           
    })
    .catch(function(error) {
       return error.json();
    });
}

export async function post(endpoint:string, data:any){
    return await fetch("https://mealsfoodapi-0line.vercel.app/"+endpoint,{
        method: 'POST',
        mode: 'cors', // no-cors, *cors, same-origin,
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *client
        body: data
     })
    .then(function (resultado){
       return resultado.json();           
    })
    .catch(function(error) {
       return error.json();
    });
}
