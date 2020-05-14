<template>
	<DefaultLayoutMobile>
        <Banner/>
		<About/>
		<Services/>
	</DefaultLayoutMobile>
</template>

<script>
    import DefaultLayoutMobile from "layout/DefaultMobile";
	import Banner from './view/Banner'
	import About from './view/About'
	import Services from './view/Services'

	export default {
		name: "HomeMobile",
		components: {
            DefaultLayoutMobile,
			Banner,
			Services,
			About
		},
	};
</script>

<style></style>
