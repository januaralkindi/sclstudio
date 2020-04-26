<template>
	<div class="banner scl-content">
		<v-row class="d-flex align-center">
			<v-col cols="12" md="6" class=" banner__detail banner-detail d-flex">
				<h2 class="banner-detai__subtitle">Every Client Brings</h2>
				<h1 class="banner-detai__Title">New Inspiration</h1>
				<p>
					We pride ourselves on our commitment to exellence, as well as our
					ability to deliver for our partners. Learn more about how our talent
					team of passionate designers, developers, and product experts can
					build value for you.
				</p>
				<p>
					We believe that individual talent can only take you so far in our
					industry. While personal excellence is highly valued at SCL, so is a
					deep commitment to collaboration both internally and externally with
					your team
				</p>
			</v-col>
			<v-col cols="12" md="6" class=" d-flex justify-end align-center">
				<img class="banner__image" :src="banner_services" />
			</v-col>
		</v-row>
	</div>
</template>

<script>
	import { banner_services } from "assets/image/image";
	export default {
        name: "BannerServices",
		data: () => {
			return {
				banner_services,
			};
		},
	};
</script>

<style lang="scss">
	.banner {
		background: url("~@/assets/image/background-banner.png");
		background-repeat: no-repeat;
		min-height: 792px;
		padding-top: 124px;

		&__detail {
			flex-direction: column;
		}
	}

	.banner-detail {
		&__sub-title {
			font-style: normal;
			font-weight: normal;
			font-size: 40px;
			line-height: 49px;
			color: #000000;
		}
		&__title {
			font-style: normal;
			font-weight: bold;
			font-size: 60px;
			line-height: 73px;
			color: #000000;
		}
		p {
			margin-top: 24px;
			font-style: normal;
			font-weight: normal;
			font-size: 16px;
			line-height: 28px;
			/* or 175% */
			letter-spacing: 0.5px;
			color: #989898;
		}
	}
</style>
