<template> 
    <div>
        <Banner/>
        <Content/>
    </div>
</template>

<script>
	import AOS from "aos";
    import Banner from "./view/Banner"
    import Content from "./view/Content"
	export default {
		name: "ProductAndayama",
		components: {
            Banner,
            Content
        },
        created : () => {
            AOS.init();
        }
	};
</script>

<style></style>
