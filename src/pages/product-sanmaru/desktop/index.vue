<template>
	<div>
		<Banner />
        <Content/>
	</div>
</template>

<script>
	import AOS from "aos";
	import { banner_works } from "assets/image/image";
    import Banner from "./view/Banner";
    import Content from './view/Content'
	export default {
		name: "ServicesPage",
		components: {
            Banner,
            Content
		},
		data: () => ({
			banner_works,
			titleBanner: "Inspiration",
			subTitleBanner: "Every Client Brings New",
		}),
		created: () => {
			AOS.init();
		},
	};
</script>

<style lang="scss"></style>
