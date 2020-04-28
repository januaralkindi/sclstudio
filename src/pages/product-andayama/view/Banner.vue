<template>
	<div class="banner scl-content">
		<v-row class="d-flex align-center">
			<v-col
				cols="12"
				md="6"
				class=" banner__detail banner-detail d-flex"
				data-aos="fade-right"
				data-aos-offset="1"
				data-aos-delay="50"
				data-aos-duration="1000"
				data-aos-easing="ease-in-out"
				data-aos-mirror="true"
				data-aos-once="true"
				data-aos-anchor-placement="top-center"
			>
				<h2 class="banner-detai__subtitle">Anandayama Group</h2>
				<h1 class="banner-detai__Title">Booking Online</h1>
			</v-col>
			<v-col
				cols="12"
				md="6"
				class=" d-flex justify-center align-center"
				data-aos="fade-up"
				data-aos-offset="1"
				data-aos-delay="50"
				data-aos-duration="1000"
				data-aos-easing="ease-in-out"
				data-aos-mirror="true"
				data-aos-once="true"
				data-aos-anchor-placement="top-center"
			>
				<img class="banner__image" :src="playstore" />
			</v-col>
		</v-row>
	</div>
</template>

<script>
	import { playstore } from "assets/image/image";
	export default {
		name: "BannerServices",
		data: () => {
			return {
				playstore,
			};
		},
	};
</script>

<style lang="scss" scope>
	.banner {
		background: url("~@/assets/image/banner-andayama.png");
		background-repeat: no-repeat;
		min-height: 586px;
		padding-top: 124px;
		background-size: 100% 100%;
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
