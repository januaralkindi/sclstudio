<template>
	<div>
		<BannerOurs
			:title="titleBanner"
			:subTitle="subTitleBanner"
			:image="banner_works"
		>
			<p>
				We pride ourselves on our commitment to exellence, as well as our
				ability to deliver for our partners. Learn more about how our talent
				team of passionate designers, developers, and product experts can build
				value for you
			</p>
			<p>
				We believe that individual talent can only take you so far in our
				industry. While personal excellence is highly valued at SCL, so is a
				deep commitment to collaboration both internally and externally with
				your team.
			</p>
		</BannerOurs>
        <WorkList/>
		<!-- <Services /> -->
	</div>
</template>

<script>
    import AOS from "aos";
    import BannerOurs from "components/BannerOurs"
    import { banner_works } from "assets/image/image";
    import WorkList from './view/WorkList'

	export default {
		name: "ServicesPage",
		components: {
            WorkList,
            BannerOurs
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
