<template>
	<div>
		<mq-layout mq="sm">
			<ServicesMobile />
		</mq-layout>
		<mq-layout :mq="['md', 'lg']">
			<ServiceDesktop />
		</mq-layout>
	</div>
</template>

<script>
	import ServiceDesktop from "./dekstop";
	import ServicesMobile from "./mobile";
	import AOS from "aos";

	export default {
		name: "HomePage",
		components: {
			ServiceDesktop,
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
