<script lang="ts">
    import { createForm } from "svelte-forms-lib";
    import * as yup from 'yup';
    import Alert from '$lib/components/moleculas/alert.svelte';
    import Card from "$lib/components/atoms/card/card.svelte";
    import * as api from '$lib/api';
    let load, success, error=false;
    let mensaje='';
    const { form, errors, state, handleChange, handleSubmit } = createForm({
      initialValues: {
        qty: 0,
      },
      validationSchema: yup.object().shape({
        qty: yup.number().typeError('Debes de pedir por lo menos un platillo').required('La cantidad de platillos es obligatoria').positive('Debes de pedir por lo menos un platillo').integer('Debes de pedir por lo menos un platillo'),
      }),
      onSubmit: values => {
        load=true;
        api.post('/order', JSON.stringify(values)).then(data=>{
            
            load=false;
            if(typeof data.success !== 'undefined'
            && data.success!=false){
                success=true;
                mensaje=data.message;
            }else{
                error=true;
                if(typeof data.message == 'object'){
                    mensaje=JSON.stringify(data.message.qty.join(','));
                }else{                    
                     mensaje=data.message;
                }
            }

        }).catch(()=>{
            load=false;
        }); 
      }
    });

    let mostrarForm=false;
    function cerrar_alerta() {
        mostrarForm=true;
    }
</script>

<Card class="shadow-2xl h-full rounded-xl p-4">
    <div class="">
        {#if success} 
            <Alert on:click={cerrar_alerta} opciones={{titulo:'',mensaje:mensaje,tipo:'success',tiempo:5000}}/>
        {:else if  error}   
            <Alert on:click={cerrar_alerta} opciones={{titulo:'¡Ups! parece que ocurrio un error',mensaje:mensaje,tipo:'error',tiempo:0}}/>
        {:else}
            <!-- else content here -->
        {/if}
    </div>
    <form on:submit={handleSubmit} class="flex flex-col justify-center items-center justify-items-center">
    <div class="loader loader-default" class:is-active={load}  data-text="Enviando orden" data-blink></div>
    <div class="flex justify-center items-center justify-items-center">
        <button type="button" on:click={() => ($form.qty -= 1)} aria-label="Decrease the counter by one">
            <h2>-</h2>
        </button>
            <div class="mb-6 flex flex-col justify-center items-center justify-items-center">
                <h3 for="large-input" class="block mb-2 text-xl font-medium text-gray-900 dark:text-gray-800">
                    ¿Cúantos platillos vas a querer?</h3>
                <input type="number" name="qty" id="qty"
                on:change={handleChange}
                on:blur={handleChange}
                bind:value={$form.qty}
                class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 ">
                {#if $errors.qty}
                <small class="text-red-800">{$errors.qty}</small>
                {/if}   
            </div>

        <button type="button" on:click={() => ($form.qty += 1)} aria-label="Increase the counter by one">
            <h2>+</h2>
        </button>
        

    </div>

    <button type="submit" class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Enviar</button>


	</form>
</Card>
<style lang="scss">
	
   
    button:disabled {
        background-color: #68be88 !important;
    }

    .shake-horizontal {
	    -webkit-animation: shake-horizontal 1s ease-in both;
	    animation: shake-horizontal 1s ease-in both;
    }

    @-webkit-keyframes shake-horizontal{0%,100%{-webkit-transform:translateX(0);transform:translateX(0)}10%,30%,50%,70%{-webkit-transform:translateX(-10px);transform:translateX(-10px)}20%,40%,60%{-webkit-transform:translateX(10px);transform:translateX(10px)}80%{-webkit-transform:translateX(8px);transform:translateX(8px)}90%{-webkit-transform:translateX(-8px);transform:translateX(-8px)}}@keyframes shake-horizontal{0%,100%{-webkit-transform:translateX(0);transform:translateX(0)}10%,30%,50%,70%{-webkit-transform:translateX(-10px);transform:translateX(-10px)}20%,40%,60%{-webkit-transform:translateX(10px);transform:translateX(10px)}80%{-webkit-transform:translateX(8px);transform:translateX(8px)}90%{-webkit-transform:translateX(-8px);transform:translateX(-8px)}}

    .loader {
        color: #fff;
        position: absolute;
        box-sizing: border-box;
        left: -9999px;
        top: -9999px;
        width: 0;
        height: 0;
        overflow: hidden;
        z-index: 1;
    }
    .loader:after,
    .loader:before {
        box-sizing: border-box;
        display: none;
    }
    .loader.is-active {
        background-color: rgba(0, 0, 0, 0.5);
        width: 100%;
        height:100%;
        left: 0;
        top: 0;
    }
    .loader.is-active:after,
    .loader.is-active:before {
        display: block;
        position: absolute;
    }
    @keyframes rotation {
        0% {
            transform: rotate(0);
        }
        to {
            transform: rotate(359deg);
        }
    }
    @keyframes blink {
        0% {
            opacity: 0.5;
        }
        to {
            opacity: 1;
        }
    }
    .loader[data-text]:before {
        position: absolute;
        left: 0;
        top: 50%;
        color: currentColor;
        text-align: center;
        width: 100%;
        font-size: 2em;
    }
    .loader[data-text=""]:before {
        content: "Loading";
    }
    .loader[data-text]:not([data-text=""]):before {
        content: attr(data-text);
    }
    .loader[data-text][data-blink]:before {
        animation: blink 1s linear infinite alternate;
    }
    .loader-default[data-text]:before {
        top: calc(50% - 100px);
    }
    .loader-default:after {
        content: "";
        position: fixed;
        width: 48px;
        height: 48px;
        border: 8px solid #fff;
        border-left-color: transparent;
        border-radius: 50%;
        top: calc(50% - 24px);
        left: calc(50% - 24px);
        animation: rotation 1s linear infinite;
    }
    .loader-default[data-half]:after {
        border-right-color: transparent;
    }
    .loader-default[data-inverse]:after {
        animation-direction: reverse;
    }
</style>
