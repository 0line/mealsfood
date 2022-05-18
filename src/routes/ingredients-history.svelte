<script context="module" lang="ts">
	
	// since there's no dynamic data here, we can prerender
	// it so that it gets served as a static asset in prod
	export const prerender = true;

    import HIngredients from '../lib/components/organismos/Ingredients/ingredientshistory.svelte';
    
</script>
<section class="overlay bg-center bg-no-repeat bg-cover h-screen w-full overflow-hidden relative" style="background-image: url(/bgingredientes.jpg);">
	<div class="flex h-full items-center">
		<div class="container mx-auto md:w-3/6">
			<div class="flex flex-col justify-items-center items-center mx-auto">
				<div class="text-center text-white mb-4">
					<h1 class="font-bold text-center">
						<div class="block lg:tracking-widest text-5xl md:text-8xl">
							Historico de compras
						</div>	
					</h1>
				</div>			
			</div>
		</div>
	</div>
</section>

<div class="bg-fixed" style=" ">
	<div class="max-w-screen-lg mx-auto my-16">
		<HIngredients></HIngredients>
	</div>
</div>
