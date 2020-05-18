<template>
	<div>
		<Banner />
		<About />
		<Services />
		<Project />
	</div>
</template>

<script>
	import Banner from "./view/Banner";
	import About from "./view/About";
	import Services from "./view/Services";
	import Project from "./view/Project";
	export default {
		name: "HomeMobile",
		components: {
			Banner,
			Services,
			About,
			Project,
		},
	};
</script>

<style></style>
