<template>
	<div>
		<Banner/>
		<ContentSanmaru/>
	</div>
</template>

<script>
	import Banner from "./view/Banner"
	import ContentSanmaru from './view/Content'
	export default {
		name: "ServicesMobile",
		components: {
			Banner,
			ContentSanmaru
		},
	};
</script>

<style></style>
