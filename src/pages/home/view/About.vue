<template>
	<div id="home-about" class="home-about scl-content">
		<!-- Stack the columns on mobile by making one full-width and the other half-width -->
		<v-row class="d-flex">
			<v-col cols="12" md="6" class="d-flex justify-start align-center">
				<div
					class="d-flex justify-center flex-sm-column"
					data-aos="fade-right"
					data-aos-offset="200"
					data-aos-delay="50"
					data-aos-duration="1000"
					data-aos-easing="ease-in-out"
				>
					<h2 class="about-title">
						We are a creative <br />
						digital media.
					</h2>
					<h3 class="about-subtitle">Convenience has its rewards</h3>
					<p class="about-description">
						Buy whatever you need from any 7-Eleven branches islandwide and get
						rewarded for it. Simply scan your personal 7Rewards barcode in the
						app to earn stamps. When you've collected enough stamps, make your
						selection from a range of goodies and redeem.
					</p>
					<v-btn class="about-button" color=" tcl-yellow darken-2">
						find out more &nbsp;
						<v-icon color="black" right>mdi-arrow-right</v-icon>
					</v-btn>
				</div>
			</v-col>
			<v-col cols="12" md="6" class=" d-flex justify-center align-center">
				<img
					:src="mobile_digital_media"
					data-aos="fade-left"
					data-aos-offset="200"
					data-aos-delay="50"
					data-aos-duration="1000"
					data-aos-easing="ease-in-out"
				/>
			</v-col>
		</v-row>

		<v-row class="d-flex">
			<v-col cols="12" md="6" class="d-flex justify-start align-center">
				<img
					data-aos="fade-right"
					data-aos-offset="200"
					data-aos-delay="50"
					data-aos-duration="1000"
					data-aos-easing="ease-in-out"
					:src="mobile_branding"
				/>
			</v-col>
			<v-col cols="12" md="6" class=" d-flex justify-start align-center">
				<div
					class="d-flex justify-center flex-sm-column"
					data-aos="fade-left"
					data-aos-offset="200"
					data-aos-delay="50"
					data-aos-duration="1000"
					data-aos-easing="ease-in-out"
				>
					<h2 class="about-title">
						Ask about design <br />
						branding & development.
					</h2>
					<h3 class="about-subtitle">Convenience has its rewards</h3>
					<p class="about-description">
						The only ride booking app that allows users to save their everyday
						or most frequent rides as favourite journeys so everyone can stop
						trying to pin themselves accurately on the map. This is just one of
						the many subtle functions included in the ComfortDelgro mobile app
						that sets it apart from the tough competition out there.
					</p>
					<v-btn class="about-button" color=" tcl-yellow darken-2">
						find out more &nbsp;
						<v-icon color="black" right>mdi-arrow-right</v-icon>
					</v-btn>
				</div>
			</v-col>
		</v-row>
		<v-row class="d-flex">
			<v-col cols="12" md="6" class="d-flex justify-start align-center">
				<div
					class="d-flex justify-center flex-sm-column"
					data-aos="fade-left"
					data-aos-offset="200"
					data-aos-delay="50"
					data-aos-duration="1000"
					data-aos-easing="ease-in-out"
				>
					<h2 class="about-title">
						Being small we can
						<br />
						go into details.
					</h2>
					<h3 class="about-subtitle">Convenience has its rewards</h3>
					<p class="about-description">
						Buy whatever you need from any 7-Eleven branches islandwide and get
						rewarded for it. Simply scan your personal 7Rewards barcode in the
						app to earn stamps. When you've collected enough stamps, make your
						selection from a range of goodies and redeem.
					</p>
					<v-btn class="about-button" color=" tcl-yellow darken-2">
						find out more &nbsp;
						<v-icon color="black" right>mdi-arrow-right</v-icon>
					</v-btn>
				</div>
			</v-col>
			<v-col cols="12" md="6" class=" d-flex justify-start align-center">
				<img
					data-aos="fade-up"
					data-aos-offset="200"
					data-aos-delay="50"
					data-aos-duration="1000"
					data-aos-easing="ease-in-out"
					:src="laptop_detail"
				/>
			</v-col>
		</v-row>
	</div>
</template>

<script>
	import {
		mobile_digital_media,
		laptop_detail,
		mobile_branding,
	} from "assets/image/image";
	export default {
		name: "HomeAbout",
		data() {
			return {
				mobile_digital_media,
				mobile_branding,
				laptop_detail,
			};
		},
	};
</script>

<style lang="scss">
	@import "~@/assets/style/variable/color";

	.home-about {
		width: 100%;
		min-height: 844px;
		background-size: cover;
		margin-bottom: 200px;
	}

	.about {
		&-title {
			font-style: normal;
			font-weight: bold;
			font-size: 36px;
			line-height: 44px;
			margin: 8px 0px;
			color: #121212;
		}
		&-subtitle {
			font-style: normal;
			font-weight: 600;
			font-size: 18px;
			line-height: 27px;
			margin: 8px 0px;
			letter-spacing: 0.5px;
		}
		&-description {
			font-style: normal;
			font-weight: normal;
			font-size: 14px;
			line-height: 24px;
			margin: 20px 0px;
			letter-spacing: 0.5px;
			color: #989898;
		}
		&-button {
			margin-top: 18px;
			width: 165px;
		}
	}
	.banner-card {
		width: 408px;
		height: 339px;
		background: #ffffff;
		box-shadow: 0px 40px 40px rgba(164, 164, 164, 0.16);
		border-radius: 20px;
		padding: 27px 37px;
		margin-top: 48px;

		img {
			margin-top: -86px;
		}
	}

	.tcl-yellow {
		background-color: $scl_yellow !important;
	}
</style>
