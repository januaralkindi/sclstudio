<template>
	<DefaultLayoutMobile>
		<Banner/>
		<ContentSanmaru/>
	</DefaultLayoutMobile>
</template>

<script>
	import DefaultLayoutMobile from "layout/DefaultMobile";
	import Banner from "./view/Banner"
	import ContentSanmaru from './view/Content'
	export default {
		name: "ServicesMobile",
		components: {
			DefaultLayoutMobile,
			Banner,
			ContentSanmaru
		},
	};
</script>

<style></style>
