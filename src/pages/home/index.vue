<template>
	<DefaultLayout>
		<Header />
		<About />
		<Services />
		<Project />
	</DefaultLayout>
</template>

<script>
	import DefaultLayout from "../../layout/Default";
	import Header from "./view/Header";
	import About from "./view/About";
	import Services from "./view/Services";
	import Project from "./view/Project";
	import AOS from "aos";

	export default {
		name: "HomePage",
		components: {
			DefaultLayout,
			Header,
			About,
			Services,
			Project,
		},
		created() {
			AOS.init();
		},
	};
</script>

<style lang="scss">
	@import "~@/assets/style/commons";
</style>
