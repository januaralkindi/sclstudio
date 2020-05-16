<template>
	<div>
		<mq-layout mq="sm">
			<ServicesMobile />
		</mq-layout>
		<mq-layout :mq="['md', 'lg']">
			<ServicesDesktop />
		</mq-layout>
	</div>
</template>

<script>
	import ServicesDesktop from "./desktop";
	import ServicesMobile from "./mobile";
	import AOS from "aos";

	export default {
		name: "HomePage",
		components: {
			ServicesDesktop,
			ServicesMobile,
		},
		created() {
			AOS.init();
		},
	};
</script>

<style lang="scss">
	// @import "~@/assets/style/commons";
</style>
