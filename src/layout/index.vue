<template>
	<div>
		<mq-layout mq="sm">
			<DefaultLayoutMobile>
				<slot></slot>
			</DefaultLayoutMobile>
		</mq-layout>
		<mq-layout :mq="['md', 'lg']">
			<DefaultLayoutDesktop>
				<slot></slot>
			</DefaultLayoutDesktop>
		</mq-layout>
	</div>
</template>

<script>
	import DefaultLayoutMobile from "./DefaultMobile";
	import DefaultLayoutDesktop from "./Default";
	import AOS from "aos";

	export default {
		name: "HomePage",
		components: {
			DefaultLayoutMobile,
			DefaultLayoutDesktop,
		},
		created() {
			AOS.init();
		},
	};
</script>

<style lang="scss">
	// @import "~@/assets/style/commons";
</style>
