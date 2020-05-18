<template>
	<div>
		<Banner />
        <ProductList/>
	</div>
</template>

<script>
    import Banner from "./view/Banner";
    import ProductList from "./view/ProductList";

	export default {
		name: "ServicesMobile",
		components: {
            Banner,
            ProductList
		},
	};
</script>

<style></style>
