<template>
	<DefaultLayoutMobile>
        <Banner/>
		<About/>
		<Services/>
		<Project/>
	</DefaultLayoutMobile>
</template>

<script>
    import DefaultLayoutMobile from "layout/DefaultMobile";
	import Banner from './view/Banner'
	import About from './view/About'
	import Services from './view/Services'
	import Project from './view/Project'
	export default {
		name: "HomeMobile",
		components: {
            DefaultLayoutMobile,
			Banner,
			Services,
			About,
			Project
		},
	};
</script>

<style></style>
