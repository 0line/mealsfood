

export async function get(endpoint:string){
    return await fetch("https://mealsfoodapi-0line.vercel.app"+endpoint)
    .then(function (resultado){
       return resultado.json();           
    })
    .catch(function(error) {
       return error.json();
    });
}

export async function post(endpoint:string, data:any){
    return await fetch("https://mealsfoodapi-0line.vercel.app"+endpoint,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Origin': '*'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: data
     })
    .then(function (resultado){
       return resultado.json();           
    })
    .catch(function(error) {
       return error.json();
    });
}
