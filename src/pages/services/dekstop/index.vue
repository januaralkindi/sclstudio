<template>
	<DefaultLayout>
		<BannerOurs
			:title="titleBanner"
			:subTitle="subTitleBanner"
			:image="banner_services"
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
				your team
			</p>
		</BannerOurs>
		<Services />
	</DefaultLayout>
</template>

<script>
	import AOS from "aos";
	import DefaultLayout from "layout/Default";
	import Services from "./view/Services";
	import BannerOurs from "components/BannerOurs";
	import { banner_services } from "assets/image/image";

	export default {
		name: "ServicesPage",
		components: {
			DefaultLayout,
			Services,
			BannerOurs,
		},
		data: () => ({
			banner_services,
			titleBanner: "New Inspiration",
			subTitleBanner: "Every Client Brings",
		}),
		created: () => {
			AOS.init();
		},
	};
</script>

<style lang="scss"></style>
