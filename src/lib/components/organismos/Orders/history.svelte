<script lang="ts">
    import Card from '../../atoms/card/card.svelte';
    import Alert from '../../moleculas/alert.svelte';
    import { onMount } from 'svelte';
    import * as api from '$lib/api';   
    
    /**
     * Jesus Lozano <zeroline>
     *Ordenar los servicios
     * 
     */   
    let meals = [];
    let load=true;
    let error=false;
    onMount(async () => {
        api.get('/order').then(data=>{
            if(typeof data.success !== 'undefined'
            && data.success!=false){
                //meals=data.data;
                var i=0;
                if(data.data.length>0){ 
                    Object.entries(data.data).forEach(([key, value]) => {
                    meals[i]={'orden':key,'platillos':value};
                    i++;
                    });
                }
            }
            load=false;
        }).catch(()=>{
            load=false;
            error=true;
        }); 
	});
</script> 
    {#if load}
        <div class="grid grid-flow-row gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 px-4 md:px-8 lg:px-0">
            {#each {length: 3} as _, i}
                <Card class="shadow-2xl h-full rounded-xl bg-white">
                    <div class="animate-pulse flex h-full flex-col justify-center justify-items-center text-center p-6 space-y-4">
                        <div class="bg-gray-800 w-full" style="height:180px;"></div>
                        <div class="bg-gray-800 w-4/5" style="height:25px;"></div>
                        <div class="bg-gray-800 w-8/12" style="height:25px;"></div>
                        <div class="bg-gray-800 w-full" style="height:25px;"></div>
                    </div>
                </Card>
            {/each}
        </div>   
    {:else}
        <div class="grid grid-flow-row gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 px-4 md:px-8 lg:px-0">
            {#each meals as data} 
                <Card class="max-w-sm rounded overflow-hidden shadow-lg bg-white">  
                    <div class="flex justify-center items-center justify-items-center p-4">
                        <img class="object-none object-center object-scale-down w-3/6" src="imgs/png/meal.png" alt="meal.png">                    
                    </div>
                    <div class="px-6 py-4 ">
                       <div class="font-bold text-xl mb-2">Orden #{data.orden}</div>
                        <ul class="list-disc">
                            {#each data.platillos as meal}
                                <li>{meal}</li>                             
                            {/each}
                        </ul>                      
                    </div>
                </Card> 
            {:else}
                {#if error}
                <div class="col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-3">            
                    <Alert opciones={{titulo:'¡Ups! parece que ocurrio un error',mensaje:'Parece que hubo un error al cargar la información',tipo:'error',tiempo:0}}/>
                </div>
                {/if}
            {/each}
        </div>  
    {/if}
    

<style>
</style>
