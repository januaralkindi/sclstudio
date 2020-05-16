<template>
	<div class="andayama-content d-flex justify-center">
		<div class="andayama-content__slides">
			<vueper-slides
				class="no-shadow"
				arrows-outside
				bullets-outside
				transition-speed="250"
				:bullets="false"
			>
				<template v-slot:arrow-left>
					<div class="slider-arrow__left">
						<v-icon> fas fa-arrow-left</v-icon>
					</div>
				</template>

				<template v-slot:arrow-right>
					<div class="slider-arrow__right">
						<v-icon> fas fa-arrow-right</v-icon>
					</div>
				</template>
				<vueper-slide
					v-for="index in 10"
					:key="index"
					:title="index.toString()"
				>
					<template v-slot:content>
						<div class="vueperslide__content-wrapper">
							<v-row class="content-slide d-flex align-center">
								<v-col md="6" class=" content-slide__image d-flex">
									<img class="banner__image" :src="product_1" />
								</v-col>
								<v-col md="6" class=" content-slide__description">
									<h1 class="banner-detai__Title">Detail Project</h1>
									<p>
										Anandamaya is pride ourselves on our commitment to
										exellence, as well as our ability to deliver for our
										partners. Learn more about how our talent team of passionate
										designers, developers, and product experts can build value
										for you. We believe that individual talent can only take you
										so far in our industry. While personal excellence is highly
										valued at SCL, so is a deep commitment to collaboration both
										internally and externally with your team.
									</p>
								</v-col>
							</v-row>
						</div>
					</template>
				</vueper-slide>
			</vueper-slides>
		</div>
	</div>
</template>

<script>
	import { VueperSlides, VueperSlide } from "vueperslides";
	import "vueperslides/dist/vueperslides.css";
	import { product_1 } from "@/assets/image/image";
	export default {
		name: "ProductAndayama",
		components: {
			VueperSlides,
			VueperSlide,
		},
		data: () => ({
			product_1,
		}),
	};
</script>

<style lang="scss">
	@import "~@/assets/style/variable/color";
	.andayama-content {
		&__slides {
			width: 90%;
		}
	}
	.content-slide {
		width: 100%;
		&__image {
			img {
				width: 100%;
			}
		}
		&__description {
			height: 100%;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: flex-start;
			h1 {
				font-style: normal;
				font-weight: bold;
				font-size: 20px;
				line-height: 28px;
				letter-spacing: 0.5px;
                color: #000000;
                margin-bottom: 12px;
			}
			p {
				text-align: left;
				font-style: normal;
				font-weight: normal;
				font-size: 16px;
				line-height: 28px;
				letter-spacing: 0.5px;
			}
		}
	}
	.vueperslide__content-wrapper {
		width: 90%;
		display: flex;
	}
	.slider-arrow {
		&__left {
			background-color: $scl_yellow;
			height: 160px;
			border-bottom-right-radius: 160px;
			border-top-right-radius: 160px;
			display: flex;
			justify-content: center;
			align-items: center;
		}
		&__right {
			background-color: $scl_yellow;
			height: 160px;
			border-bottom-left-radius: 160px;
			border-top-left-radius: 160px;
			display: flex;
			justify-content: center;
			align-items: center;
		}
	}

	.vueperslides__arrow {
		width: 80px;
	}
</style>
