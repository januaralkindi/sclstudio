<template> 
    <DefaultLayout>
        <Banner/>
        <Content/>
    </DefaultLayout>
</template>

<script>
	import AOS from "aos";
    import DefaultLayout from "layout/Default";
    import Banner from "./view/Banner"
    import Content from "./view/Content"
	export default {
		name: "ProductAndayama",
		components: {
            DefaultLayout,
            Banner,
            Content
        },
        created : () => {
            AOS.init();
        }
	};
</script>

<style></style>
