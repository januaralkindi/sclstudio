<template>
	<div>
		<mq-layout mq="sm">
			<ProductMobile />
		</mq-layout>
		<mq-layout :mq="['md', 'lg']">
			<ProductDesktop />
		</mq-layout>
	</div>
</template>

<script>
	import ProductDesktop from "./desktop";
	import ProductMobile from "./mobile";
	import AOS from "aos";

	export default {
		name: "HomePage",
		components: {
			ProductMobile,
			ProductDesktop,
		},
		created() {
			AOS.init();
		},
	};
</script>

<style lang="scss">
	// @import "~@/assets/style/commons";
</style>
