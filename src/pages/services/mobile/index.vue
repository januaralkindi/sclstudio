<template>
	<div>
		<Banner />
		<ServicesList />
	</div>
</template>

<script>
	import Banner from "./view/Banner";
	import ServicesList from "./view/ServicesList";
	export default {
		name: "ServicesMobile",
		components: {
			Banner,
			ServicesList,
		},
	};
</script>

<style></style>
