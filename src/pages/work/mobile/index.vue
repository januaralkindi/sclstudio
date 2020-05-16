<template>
	<DefaultLayoutMobile>
        <Banner/>
        <WorkList/>
	</DefaultLayoutMobile>
</template>

<script>
    import DefaultLayoutMobile from "layout/DefaultMobile";
    import Banner from "./view/Banner"
    import WorkList from "./view/WorkList"
	export default {
		name: "WorkMobile",
		components: {
            DefaultLayoutMobile,
            Banner,
            WorkList
		},
	};
</script>

<style></style>
