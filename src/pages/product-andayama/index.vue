<template>
	<div>
		<mq-layout mq="sm">
			<ProductAndayamaMobile />
		</mq-layout>
		<mq-layout :mq="['md', 'lg']">
			<ProductAndayamaDesktop />
		</mq-layout>
	</div>
</template>

<script>
	import ProductAndayamaDesktop from "./desktop";
	import ProductAndayamaMobile from "./mobile";
	import AOS from "aos";

	export default {
		name: "HomePage",
		components: {
			ProductAndayamaMobile,
			ProductAndayamaDesktop,
		},
		created() {
			AOS.init();
		},
	};
</script>

<style lang="scss">
	// @import "~@/assets/style/commons";
</style>
