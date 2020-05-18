<template>
	<div class="andayama-mobile">
		<div
			data-aos="fade-up"
			data-aos-offset="50"
			data-aos-delay="12"
			data-aos-duration="1000"
			data-aos-anchor-placement="center-bottom"
		>
			<swiper class="swiper" :options="swiperOption">
				<swiper-slide v-for="(image, index) in imageAndayama" :key="index">
					<img class="andayama-mobile__image" :src="image" />
				</swiper-slide>

				<div class="swiper-button-prev" slot="button-prev">
					<!-- <div class="half-circle--right"></div> -->
				</div>
				<div class="swiper-button-next" slot="button-next">
					<!-- <div class="half-circle--left"></div> -->
				</div>
			</swiper>
		</div>

		<h1
			data-aos="fade-left"
			data-aos-offset="50"
			data-aos-delay="12"
			data-aos-duration="1000"
			data-aos-anchor-placement="center-bottom"
		
		>Detail Project</h1>
		<p
			data-aos="fade-up"
			data-aos-offset="50"
			data-aos-delay="12"
			data-aos-duration="1000"
			data-aos-anchor-placement="center-bottom"
		>
			Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
			tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
			veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
			commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
			velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
			cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
			est laborum.
		</p>
		<p
			data-aos="fade-up"
			data-aos-offset="50"
			data-aos-delay="12"
			data-aos-duration="1000"
			data-aos-anchor-placement="center-bottom"
		>
			It is a long established fact that a reader will be distracted by the
			readable content of a page when looking at its layout. The point of using
			Lorem Ipsum is that it has a more-or-less normal distribution of letters,
			as opposed to using 'Content here, content here', making it look like
			readable English. Many desktop publishing packages and web page editors
			now use Lorem Ipsum as their default model text, and a search for 'lorem
			ipsum' will uncover many web sites still in their infancy. Various
			versions have evolved over the years, sometimes by accident, sometimes on
			purpose.
		</p>
	</div>
</template>

<script>
	import { appstore, playstore, content_sanmaru } from "@images";
	import { Swiper, SwiperSlide } from "vue-awesome-swiper";
	import { IMAGE_ANDAYAMA } from "@/data/";
	import "swiper/css/swiper.css";
	export default {
		name: "ContentSanmaruMobile",
		components: {
			Swiper,
			SwiperSlide,
		},
		data: () => ({
			appstore,
			playstore,
			content_sanmaru,
			swiperOption: {
				slidesPerView: 1,
				spaceBetween: 30,
				loop: true,
				pagination: {
					el: ".swiper-pagination",
					clickable: true,
				},
				navigation: {
					nextEl: ".swiper-button-next",
					prevEl: ".swiper-button-prev",
				},
			},
			imageAndayama: IMAGE_ANDAYAMA,
		}),
	};
</script>

<style lang="scss" scoped>
	.andayama-mobile {
		margin: 28px 0px;
		h1 {
			font-family: Montserrat;
			font-style: normal;
			font-weight: bold;
			font-size: 16px;
			line-height: 20px;
			letter-spacing: 0.5px;
			color: #000000;
			margin: 12px 16px;
		}
		p {
			margin-bottom: 20px !important;
			margin: 0 16px;
		}
		.image-content {
			width: 100%;
			margin: 24px 0px;
		}

		&__store {
			margin-top: 24px;
			.store__appstore {
				margin-right: 16px;
				width: 98px;
				height: auto;
			}
			.store__playstore {
				margin-right: 16px;
				width: 98px;
				height: auto;
			}
		}
		&__image {
			width: 100%;
		}
	}
	.half-circle {
		&--right {
			background-color: #f4c924;
			height: 160px;
			border-bottom-right-radius: 160px;
			border-top-right-radius: 160px;
			display: flex;
			justify-content: center;
			align-items: center;
		}

		&--left {
			background-color: #f4c924;
			height: 160px;
			border-bottom-left-radius: 160px;
			border-top-left-radius: 160px;
			display: flex;
			justify-content: center;
			align-items: center;
		}
	}

	.swiper-button-prev {
		background-color: #f4c924;
		border-bottom-right-radius: 160px;
		border-top-right-radius: 160px;
		font-size: 12px;
		padding-right: 8px;
		color: black;
		left: 0px;
		right: auto;
	}

	.swiper-button-next {
		background-color: #f4c924;
		border-bottom-left-radius: 160px;
		border-top-left-radius: 160px;
		font-size: 12px;
		padding-left: 9px;
		color: black;
		right: 0px;
		left: auto;
	}

	.swiper-button-prev:after,
	.swiper-button-next:after {
		font-size: 18px;
		text-transform: none !important;
		letter-spacing: 0;
		text-transform: none;
		font-variant: initial;
		line-height: 1;
	}
</style>
