<script context="module" lang="ts">
	export const prerender = true;
	import Orders from '$lib/components/organismos/Orders/index.svelte';
</script>

<script lang="ts">

</script>

<svelte:head>
	<title>Inicio</title>
</svelte:head>
<section class="overlay bg-center bg-no-repeat bg-cover h-screen w-full overflow-hidden relative" style="background-image: url(/food.jpg);">
	<div class="flex h-full items-center">
		<div class="container mx-auto md:w-3/6">
			<div class="flex flex-col justify-items-center items-center mx-auto">
				<div class="text-center text-white mb-4">
					<h1 class="font-bold text-center">
						<div class="block lg:tracking-widest text-5xl md:text-8xl">
							¡Platillos gratis!
						</div>	
					</h1>
				</div>			
			</div>
		</div>
	</div>
</section>
<div>
	<div class="max-w-screen-lg mx-auto my-16">
		<Orders></Orders>
	</div>
</div>

<style>
	
</style>
