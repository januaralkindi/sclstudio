<template>
	<DefaultLayoutMobile>
        <Banner/>
		<h1>hiii dari mobile</h1>
	</DefaultLayoutMobile>
</template>

<script>
    import DefaultLayoutMobile from "layout/DefaultMobile";
    import Banner from './view/banner'
	export default {
		name: "HomeMobile",
		components: {
            DefaultLayoutMobile,
            Banner
		},
	};
</script>

<style></style>
