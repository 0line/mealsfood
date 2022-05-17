
<script lang="ts">
	import NavHeader from '$lib//components/organismos/NavHeader/index.svelte';
	import Footer from '$lib//components/organismos/Footer/footer.svelte';
	import '../app.css';
</script>

<NavHeader />

<main>
	<slot />
</main>


<style global lang="postcss">
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
	
	@import "@fortawesome/fontawesome/scss/fontawesome.scss";
	@import "@fortawesome/fontawesome/scss/solid.scss";
	@import "@fortawesome/fontawesome/scss/brands.scss";

	*,*::berore,*::after{
		box-sizing: border-box;
	}

	body{
		margin:0;
		padding:0;
		background-color:rgb(232, 232, 232);
		color:#221F1C;
		@apply font-sans font-normal;
		-webkit-text-size-adjust:100%;
	}

	h1 {
		@apply text-6xl;
	}
	h2 {
		@apply text-5xl;
	}
	h3 {
		@apply text-4xl;
	}
	h4 {
		@apply text-3xl;
	}
	h5 {
		@apply text-2xl;
	}
	h6 {
		@apply text-xl;
	}
	.overlay {
		background-position: center !important;
		background-repeat: no-repeat !important;
		background-size: cover !important;
		height: 100vh;
		background-color: rgba(0, 0, 0, 0.35) !important;
		background-blend-mode: overlay;
	}
</style>
