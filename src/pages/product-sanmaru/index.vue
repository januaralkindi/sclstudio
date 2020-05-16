<template>
	<div>
		<mq-layout mq="sm">
			<ProductSanmaruMobile />
		</mq-layout>
		<mq-layout :mq="['md', 'lg']">
			<ProductSanmaruDesktop />
		</mq-layout>
	</div>
</template>

<script>
	import ProductSanmaruDesktop from "./desktop";
	import ProductSanmaruMobile from "./mobile";
	import AOS from "aos";

	export default {
		name: "HomePage",
		components: {
			ProductSanmaruMobile,
			ProductSanmaruDesktop,
		},
		created() {
			AOS.init();
		},
	};
</script>

<style lang="scss">
	// @import "~@/assets/style/commons";
</style>
