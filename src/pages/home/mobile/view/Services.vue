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
	import "swiper/css/swiper.css";
	import { ic_paper, ic_news, ic_lamp } from "@images";
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
					spaceBetween: 30,
					centeredSlides: true,
					pagination: {
						el: ".swiper-pagination",
						clickable: true,
					},
				},
				dataServices: [
					{
						icon: ic_paper,
						title: "User Interface",
						description:
							"Stunning, intuitive design is essential to your pro..",
					},
					{
						icon: ic_news,
						title: "User Experience",
						description: "Stunning, intuitive design is essentia...",
					},
					{
						icon: ic_lamp,
						title: "User Experience",
						description: "Stunning, intuitive design is essentia...",
					},
				],
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
