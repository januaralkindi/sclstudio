<template>
	<div class="services">
		<div class="services__title">
			<v-row class="is-padding">
				<v-col cols="6">
					<h1 class="is-title-section ">Our Services.</h1>
				</v-col>
				<v-col cols="6" class="is-text-align-right">
					<p class="is-title-section">See More</p>
				</v-col>
			</v-row>
		</div>
		<div class="services__content">
			<swiper class="swiper" :options="swiperOptionerre">
				<swiper-slide
					class="services__swiper"
					v-for="(service, index) in dataServices"
					:key="index"
				>
					<!-- <div class="client-slide">
						<img :src="service.icon" />
					</div> -->
					<ServiceCard
						:key="index"
						:icon="service.icon"
						:title="service.title"
						:description="service.description"
					/>
				</swiper-slide>
			</swiper>
		</div>
	</div>
</template>

<script>
	import { Swiper, SwiperSlide } from "vue-awesome-swiper";
	import ServiceCard from "./SercviceCard";
	import { SERVICES_LIST } from "@/data";
	import "swiper/css/swiper.css";
	export default {
		name: "ServicesMobile",
		components: {
			Swiper,
			SwiperSlide,
			ServiceCard,
		},
		data() {
			return {
				swiperOptionerre: {
					slidesPerView: "auto",
					spaceBetween: 15,
					centeredSlides: true,
					pagination: {
						el: ".swiper-pagination",
						clickable: true,
					},
				},
				dataServices: SERVICES_LIST,
			};
		},
	};
</script>

<style lang="scss" scoped>
	@import "~@/assets/style/variable/color";
	.services {
		&__client {
			height: auto;
		}
		&__content {
			width: 100%;
			margin-bottom: 20px;
			// height: 200px;
		}
		&__swiper {
			width: auto;
		}
	}
	.swipper-client {
		height: 142px;
	}
</style>
