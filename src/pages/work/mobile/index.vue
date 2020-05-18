<template>
	<div>
        <Banner/>
        <WorkList/>
	</div>
</template>

<script>
    import Banner from "./view/Banner"
    import WorkList from "./view/WorkList"
	export default {
		name: "WorkMobile",
		components: {
            Banner,
            WorkList
		},
	};
</script>

<style></style>
