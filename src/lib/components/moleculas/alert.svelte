<script>
    /**
     * Jesus Lozono <zeroline>
    * Componente tipo alert para mostrar mensajes.
    * Los estilos determinados de la alerta son success,info,error y warning.
    * Para agregar un tipo nuevo agregar la clase con el nombre igual al tipo de alerta e icono si es necesario.
    * Los iconos utilizados son de fontawesome;  
    */
    import Card from '$lib/components/atoms/card/card.svelte';
    import Fa from 'svelte-fa';
    import { faCheckCircle, faInfoCircle,faExclamationCircle,faTimesCircle } from '@fortawesome/free-solid-svg-icons';
    
    export let opciones;
    let open=true;

    function confg_alerta(node,op) {
        if(op.tiempo && op.tiempo>0){  
            //sacar esta funcion y agregar otra que la detenga en caso de dar click en cerrar
            let cerra_ralerta=setTimeout(() => {
               open=false;
            }, op.tiempo);
            
            return {
                update(cerra_ralerta) {
                    clearInterval(cerra_ralerta);
                }
            }
        } 
    }
</script>
<svelte:head>
</svelte:head>
<div class="{open ? 'open' : 'close'}" use:confg_alerta={opciones}>
    <Card class="shadow-2xl h-full rounded-xl bg-white">
        <div class="flex justify-between border-b border-gray-100 px-5 py-4 rounded-t-lg  {opciones.tipo}">
            <div class="flex justify-items-center items-center w-full">
                {#if opciones.tipo=='success'}    
                    <Fa icon={faCheckCircle} style="margin-right: 2%;color:white;font-size: 2em;"/>
                {:else if  opciones.tipo=='error'}                
                    <Fa icon={faTimesCircle} style="margin-right: 2%;color:white;font-size: 2em;"/>
                     <!-- else if content here -->
                {:else if  opciones.tipo=='info'}
                    <Fa icon={faInfoCircle} style="margin-right: 2%;color:white;font-size: 2em;"/>
                {:else if opciones.tipo=='warning'} 
                    <Fa icon={faExclamationCircle} style="margin-right: 2%;color:white;font-size: 2em;"/>
                {/if}
                <span class="font-bold text-white text-lg">{opciones.titulo}</span>
            </div>
            <div>
            <button class="text-white text-2xl btn-close-drpmalert" on:click="{() => open = false}" on:click>x</button>
            </div>
        </div>
        <div class="px-10 py-10 text-drpm-negro-default">
            {@html opciones.mensaje}
        </div>
    </Card>
</div>
<style>
.open{
    display: block;
    animation: alerdrp 0.5s ease-in 0s 1 normal forwards;
}
.close{
    animation: alerdrp_exit 1s ease-in 0s 1 normal forwards;    
    display: none;
}
.warning{
    @apply bg-yellow-300;
}
.success{
    @apply bg-green-500;
}
.error{
    @apply bg-red-600;
}
.info{
    @apply bg-blue-500;
}

@keyframes alerdrp {
  0% {
    opacity: 0;
    transform: rotateX(70deg);
    transform-origin: top;
  }

  100% {
    opacity: 1;
    transform: rotateX(0deg);
    transform-origin: top;
  }
}
@keyframes alerdrp_exit {
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
}
</style>
