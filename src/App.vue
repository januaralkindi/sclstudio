<template>
	<Layout>
		<transition name="fade">
			<router-view></router-view>
		</transition>
	</Layout>
</template>

<script>
	import Layout from "layout/";
	export default {
		name: "App",
		components: {
			Layout,
		},

		data: () => ({
			//
		}),
	};
</script>
<style lang="scss">
	.fade-enter-active,
	.fade-leave-active {
		transition: opacity 0.5s;
	}
	.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
		opacity: 0;
	}
</style>
