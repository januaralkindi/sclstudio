<template>
	<div id="footer-client" class="footer-client scl-content ">
		<div
			class="footer-client__title client-title d-flex  justify-center align-center "
		>
			<h1 class="client-title__title">Our Client.</h1>
			<div class="client-title__devider">
				<Devider color="yellow" size="small" />
			</div>
		</div>
		<div class="footer-client__description">
			<p>
				Human beings are fortunate to be able to be aware of our awareness. This
				awareness gives us an opportunity to reflect on our soul and find
				blessing in being alive.
			</p>
		</div>
		<div class="footer-client__list">
			<vueper-slides
				class="no-shadow"
				:visible-slides="6"
				slide-multiple
				:arrows="false"
				:arrowsOutside="false"
				:gap="1"
				:slide-ratio="1 / 8"
				:dragging-distance="80"
				:breakpoints="{ 800: { visibleSlides: 2, slideMultiple: 2 } }"
			>
				<vueper-slide v-for="i in 10" :key="i" :title="i.toString()">
					<template v-slot:content>
						<div class="vueperslide__content-wrapper">
							<div class="client-item">
								<img :src="dataClients[i]" alt="" />
							</div>
						</div>
					</template>
				</vueper-slide>
			</vueper-slides>
		</div>
		<v-btn color="#F4C924"  large> See More</v-btn>
	</div>
</template>
<script>
	import Devider from "components/Devider";
	import { VueperSlides, VueperSlide } from "vueperslides";
	import "vueperslides/dist/vueperslides.css";
	import {
		anandamaya_logo,
		bellissimo_logo,
		indihome_logo,
		nescafe_logo,
		telkomsel_logo,
		unilever_logo,
	} from "assets/image/image";

	export default {
		name: "Servcies",
		components: {
			Devider,
			VueperSlides,
			VueperSlide,
		},
		data() {
			return {
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
		background: url("~@/assets/image/footer-patner-background.png");
		background-size: 100% 100%;
		min-height: 864px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.footer-client {
		&__title {
			width: auto;
			flex-direction: column;
		}
		&__description {
			margin: 36px;
			font-style: normal;
			font-weight: normal;
			font-size: 18px;
			line-height: 27px;
			text-align: center;
			letter-spacing: 0.5px;
			color: #121212;
			width: 840px;
		}

		&__list {
			width: 95%;
		}
	}
	.client-title {
		width: auto;
		&__title {
			font-style: normal;
			font-weight: bold;
			font-size: 36px;
			line-height: 44px;
			color: #121212;
			margin-bottom: 20px;
		}
		&__devider {
			width: 75px;
		}
	}

	.client-item {
		width: 170px;
		height: 108px;
		left: 167px;
		top: 5483px;
		background: #ffffff;
		box-shadow: 0px 40px 40px rgba(164, 164, 164, 0.16);
		border-radius: 8px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.vueperslides__bullets--outside .vueperslides__bullet--active .default {
		background-color: $scl_yellow;
	}
	.vueperslides__bullet,
	.vueperslides__bullets button {
	}
	.vueperslides__bullets--outside .vueperslides__bullet .default {
		border-color: $scl_yellow;
		-webkit-box-shadow: none;
		box-shadow: none;
	}
</style>
