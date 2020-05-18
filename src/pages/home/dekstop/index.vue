<template>
	<div>
		<Header />
		<About />
		<Services />
		<Project />
	</div>
</template>

<script>
	import Header from "./view/Header";
	import About from "./view/About";
	import Services from "./view/Services";
	import Project from "./view/Project";

	export default {
		name: "HomePage",
		components: {
			Header,
			About,
			Services,
			Project,
		},
		created() {
		},
	};
</script>

<style lang="scss">
	// @import "~@/assets/style/commons";
</style>
