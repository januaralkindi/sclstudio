<template>
	<div class="footer-client">
		<div class="footer-client__title">
			<v-row class="is-padding">
				<v-col cols="6">
					<h1 class="is-title-section">Our Clients.</h1>
				</v-col>
				<v-col cols="6" class="is-text-align-right">
					<p class="is-title-section">See More</p>
				</v-col>
			</v-row>
		</div>
		<div class="footer-client__content">
			<swiper class="swiper swipper-client" :options="swiperOption">
				<swiper-slide
					class="client-slide"
					v-for="(images, index) in dataClients"
					:key="index"
				>
					<div class="client-slide">
						<img :src="images" />
					</div>
				</swiper-slide>

				<div class="swiper-pagination" slot="pagination"></div>
			</swiper>
		</div>
	</div>
</template>

<script>
	import { Swiper, SwiperSlide } from "vue-awesome-swiper";
	import "swiper/css/swiper.css";
	import {
		anandamaya_logo,
		bellissimo_logo,
		indihome_logo,
		nescafe_logo,
		telkomsel_logo,
		unilever_logo,
	} from "assets/image/image";

	export default {
		name: "FooterClientMobile",
		components: {
			Swiper,
			SwiperSlide,
		},
		data() {
			return {
				swiperOption: {
					slidesPerView: "auto",
					spaceBetween: 30,
					centeredSlides: true,
					pagination: {
						el: ".swiper-pagination",
						clickable: true,
					},
				},
				dataClients: [
					anandamaya_logo,
					bellissimo_logo,
					indihome_logo,
					indihome_logo,
					nescafe_logo,
					telkomsel_logo,
					unilever_logo,
					telkomsel_logo,
					unilever_logo,
					indihome_logo,
					nescafe_logo,
				],
			};
		},
	};
</script>

<style lang="scss">
	@import "~@/assets/style/variable/color";
	.footer-client {
		&__client {
			height: auto;
		}
		&__content {
			width: 100%;
		}
	}
	.swiper-pagination-bullet {
		width: 12px;
		height: 12px;
		display: inline-block;
		border-radius: 100%;
		background: #000;
		opacity: 0.2;
		border: 1px solid $scl_yellow;
		box-sizing: border-box;
		background: white;
		&-active {
			width: 12px;
			height: 12px;
			display: inline-block;
			border-radius: 100%;
			background: #000;
			opacity: 0.2;
			border: 1px solid $scl_yellow;
			box-sizing: border-box;
			background: $scl_orange;
		}
	}
	.swipper-client {
		height: 142px;
	}
	// .swiper-slide {
	// 	width: 60%;
	// 	height: 92px;
	// 	background: #f9f9f9;
	// 	border-radius: 8px;
	// }
	.client-slide {
		width: 228px;
		height: 92px;
		display: flex;
		justify-content: center;
		align-items: center;
		background: #f9f9f9;
		border-radius: 8px;
	}
</style>
