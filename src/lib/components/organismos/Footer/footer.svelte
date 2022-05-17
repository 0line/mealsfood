<script>
    import Fa from 'svelte-fa';
    import { faFacebook,faTwitter,faInstagram,faLinkedin } from '@fortawesome/free-brands-svg-icons';
    /* import {Servicios} from '$lib/controllers/Servicios/servicios';
    import { onMount } from 'svelte';

    let fecha_actual=new Date;
    let year=fecha_actual.getFullYear();
    var collection_servicios=[];
    let load=true;
    onMount(async () => {
        let o_servicios= new Servicios();
        o_servicios.obtenerServicios(null,null).then(data=>{
            collection_servicios=data;
            load=false;
        }).catch(()=>{
            load=false;
        });
	}); */
    var collection_servicios=[];
    let fecha_actual=new Date;
    let year=fecha_actual.getFullYear();
    let load=true;
    load=false;
</script>

<footer class="bg-center bg-no-repeat bg-cover w-full overflow-hidden relative" style="background-image: url(/imgs/index/banner-inicio-17.jpg); background-blend-mode: multiply; background-color: rgba(0,0,0,0.8);">
    <div class="container mx-auto text-white" style="">
        <div class="w-full lg:w-1/4 mx-auto">
            <div class="flex flex-row justify-between items-center p-4 social_media">
                <a href="https://www.facebook.com/drpmexico" target="_blank"><Fa icon={faFacebook} size="lg"/></a>
                <a href="https://www.instagram.com/drp_mexico/?hl=es" target="_blank"><Fa icon={faInstagram} size="lg"/></a>
                <a href="https://www.linkedin.com/company/18526487/" target="_blank"><Fa icon={faLinkedin} size="lg"/></a>
                <a href="https://twitter.com/drpmexico" target="_blank"><Fa icon={faTwitter} size="lg"/></a>
            </div>
        </div>
        <div class="grid grid-cols-1  lg:grid-cols-4 gap-10 md:gap-6 lg:gap-4 justify-center items-center lg:items-start py-8">            
            <div class="flex flex-col justify-items-center items-center lg:items-start px-8 lg:px-0">
                <img src="/imgs/logo-drpmexico-horizontal.svg" alt="" class="mb-4 w-3/5 lg:w-2/3 drpm_logo_white">
                <p class="text-justify">Somos un proveedor de servicios cloud seguros y flexibles
                    para centros de datos virtuales (VDC), Infraestructura
                    como servicio (IaaS), recuperación en caso de desastres
                    (DRaaS) y respaldos como servicio (BaaS) de manera
                    simplificada y con una experiencia de nube unificada.</p>
            </div>
            <div class="flex flex-col items-center">
                <strong>Servicios</strong>
                <ul>                    
                    {#if load}
                        <li class="py-2">
                            Cargando...
                        </li>
                    {:else}
                        {#each collection_servicios as data}
                            <li class="py-2">
                                <a href="/servicios/{data.slug}">{data.titulo}</a>
                            </li>
                        {:else}
                            <li class="py-2">
                                Error al cargar los servicios.
                            </li>  
                        {/each}
                    {/if}
                </ul> 
            </div>
            <div class="flex flex-col items-center lg:items-start">
                <strong>Acerca de</strong>
                <ul>
                    <li>
                        <a href="/nosotros">Nosotros</a>
                    </li>
                    <li>
                        <a href="https://drpmexico.freshteam.com/jobs">Carreras</a>
                    </li>
                </ul>
            </div>
            <div class="flex flex-col items-center lg:items-start">
                <strong>Contacto</strong>
                <ul>
                    <li>
                        <a href="/contacto">Contacto</a>
                    </li>
                </ul>
            </div>
        </div>
        <hr>
        <div class="w-full flex flex-col md:flex-row items-center md:justify-between item py-6">            
            <a href="#0"> Aviso de Privacidad</a>
            <strong class="mt-4 lg:md-0">© {year} DRP México.</strong>
        </div>
    </div>
</footer>
<style lang="scss">
    .social_media{
        & a{
            transition:transform 0.1s ease-in 0s;
            color:white;
            font-size: 1.5em;
            padding:1em;
            &:hover{
                transform: scale(1.5);
            }
        }
    }
    .drpm_logo_white{
        filter: invert(0) saturate(0) brightness(100);
    }
</style>
