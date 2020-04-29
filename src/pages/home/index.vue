<template>
	<div>
		<mq-layout mq="sm">
			<HomeMobile />
		</mq-layout>
		<mq-layout :mq="['md', 'lg']">
			<HomeDekstop />
		</mq-layout>
	</div>
</template>

<script>
	import HomeDekstop from "./dekstop";
	import HomeMobile from "./mobile";
	import AOS from "aos";

	export default {
		name: "HomePage",
		components: {
			HomeDekstop,
			HomeMobile,
		},
		created() {
			AOS.init();
		},
	};
</script>

<style lang="scss">
	@import "~@/assets/style/commons";
</style>
