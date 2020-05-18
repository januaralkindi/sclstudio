<template>
	<div class="banner">
		<p
			class="banner__subtitle is-title"
			data-aos="fade-left"
			data-aos-offset="50"
			data-aos-delay="12"
			:data-aos-duration="800"
		>
			Cool Design
		</p>
		<h1
			class="banner__title is-title"
			data-aos="fade-right"
			data-aos-offset="50"
			data-aos-delay="12"
			:data-aos-duration="800"
		>
			Sanmaru Apps
		</h1>
		<div class="banner__store d-flex ">
			<img
				class="store__appstore"
				:src="appstore"
				data-aos="fade-up"
				data-aos-offset="50"
				data-aos-delay="12"
				:data-aos-duration="800"
			/>
			<img
				class="store__playstore"
				:src="playstore"
				data-aos="fade-up"
				data-aos-offset="50"
				data-aos-delay="12"
				:data-aos-duration="1000"
			/>
		</div>
	</div>
</template>

<script>
	import { appstore, playstore } from "@/assets/image/image";
	export default {
		name: "BannerStore",
		data: () => ({
			appstore,
			playstore,
		}),
	};
</script>

<style lang="scss" scoped>
	@import "~@/assets/style/variable/color";
	.banner {
		background: url("~@/assets/image/home/mobile/banner.png");
		width: 100%;
		min-height: 336px;
		padding-top: 124px;
		padding-left: 36px;
		padding-right: 36px;
		padding-bottom: 20px;
		&__subtitle {
			font-family: Montserrat;
			font-style: normal;
			font-weight: normal;
			font-size: 20px;
			line-height: 24px;
			margin-bottom: 10px;
		}
		&__title {
			font-family: Montserrat;
			font-style: normal;
			font-weight: bold;
			font-size: 28px;
			line-height: 34px;
			margin-bottom: 20px;
		}

		&__description {
			margin-bottom: 20px !important;
		}

		&__store {
			img {
				margin-right: 16px;
				width: 98px;
				height: auto;
			}
		}
	}
</style>
