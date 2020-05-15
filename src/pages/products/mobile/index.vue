<template>
	<DefaultLayoutMobile>
		<Banner />
        <ProductList/>
	</DefaultLayoutMobile>
</template>

<script>
	import DefaultLayoutMobile from "layout/DefaultMobile";
    import Banner from "./view/Banner";
    import ProductList from "./view/ProductList";

	export default {
		name: "ServicesMobile",
		components: {
			DefaultLayoutMobile,
            Banner,
            ProductList
		},
	};
</script>

<style></style>
