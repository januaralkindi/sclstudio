<template>
	<DefaultLayoutMobile>
		<Banner />
		<ServicesList />
	</DefaultLayoutMobile>
</template>

<script>
	import DefaultLayoutMobile from "layout/DefaultMobile";
	import Banner from "./view/Banner";
	import ServicesList from "./view/ServicesList";
	export default {
		name: "ServicesMobile",
		components: {
			DefaultLayoutMobile,
			Banner,
			ServicesList,
		},
	};
</script>

<style></style>
