<template>
	<div>
		<BannerOurs
			:title="titleBanner"
			:subTitle="subTitleBanner"
			:image="banner_products"
		>
			<p>
				We pride ourselves on our commitment to exellence, as well as our
				ability to deliver for our partners. Learn more about how our talent
				team of passionate designers, developers, and product experts can build
				value for you.
			</p>

			<p>
				We believe that individual talent can only take you so far in our
				industry. While personal excellence is highly valued at SCL, so is a
				deep commitment to collaboration both internally and externally with
				your team.
			</p>
		</BannerOurs>
		<Product />
	</div>
</template>

<script>
	import BannerOurs from "components/BannerOurs";
	import { banner_products } from "assets/image/image";
	import Product from "./view/Product";
	import AOS from "aos";
	export default {
		name: "ProductPages",
		components: {
			BannerOurs,
			Product,
		},
		data: () => ({
			banner_products,
			titleBanner: "Our Product",
			subTitleBanner: "Fresh & Clean",
		}),
		created: () => {
			AOS.init();
		},
	};
</script>

<style></style>
