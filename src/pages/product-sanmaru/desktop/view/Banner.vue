<template>
	<div class="banner-sanmaru scl-content">
		<v-row class="d-flex align-center">
			<v-col
				cols="12"
				md="6"
				class=" banner__detail banner-sanmaru-detail d-flex flex-column"
				data-aos="fade-right"
				data-aos-offset="100"
				data-aos-delay="50"
				data-aos-duration="1000"
				data-aos-easing="ease-in-out"
				data-aos-mirror="true"
				data-aos-once="true"
				data-aos-anchor-placement="top-center"
			>
				<h2 class="banner-sanmaru-detail__subtitle">Cool Design</h2>
				<h1 class="banner-sanmaru-detail__title">Sanmaru Apps</h1>
				<div class="banner-sanmaru-detail__store">
					<img :src="appstore" />
					<img class="store-plyastore" :src="playstore" />
				</div>
			</v-col>
			<v-col
				cols="12"
				md="6"
				class=" d-flex justify-end align-center"
				data-aos="fade-up"
				data-aos-offset="1"
				data-aos-delay="50"
				data-aos-duration="1000"
				data-aos-easing="ease-in-out"
				data-aos-mirror="true"
				data-aos-once="true"
				data-aos-anchor-placement="top-center"
			>
				<img class="banner-sanmaru__image" :src="banner_services" />
			</v-col>
		</v-row>
	</div>
</template>
<script>
	import { banner_services, appstore, playstore } from "@/assets/image/image";

	export default {
		name: "BannerOurs",
		props: {
			title: {
				type: String,
				default: "",
			},
			subTitle: {
				type: String,
				default: "",
			},
			image: String,
		},
		data: () => {
			return {
				banner_services,
				appstore,
				playstore,
			};
		},
	};
</script>

<style lang="scss" scope>
	.banner-sanmaru {
		background: url("~@/assets/image/background-banner-sanmaru.png");
		background-repeat: no-repeat;
		min-height: 792px;
		padding-top: 124px;
		display: flex;

		&__detail {
			flex-direction: column;
		}

		&__store {
			align-items: center;
		}
	}

	.banner-sanmaru-detail {
		&__subtitle {
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
		&__store {
			align-items: center;
			display: flex;
			.store-plyastore {
				width: 228px;
				margin-left: 20px;
			}
			img {
				width: 204px;
				height: auto;
			}
		}
	}
</style>
