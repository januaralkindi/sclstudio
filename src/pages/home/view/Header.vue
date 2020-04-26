<template>
	<div id="home-banner" class="banner scl-content">
		<!-- Stack the columns on mobile by making one full-width and the other half-width -->
		<v-row class="d-flex">
			<v-col cols="12" md="6" class="d-flex">
				<div class="banner-left">
					<div class="banner-content-title">
						<h1 class="banner-title">
							We <br />
							Make
						</h1>
						<h1 class="banner-title text-yellow">Design.</h1>
					</div>
					<div class="banner-devider">
						<Devider />
					</div>
					<div class="banner-subtitle">
						<p>
							Between your business objectives <br />
							and what your customers want.
						</p>
					</div>
				</div>
			</v-col>
			<v-col cols="12" md="6" class=" d-flex justify-end align-center">
				<div class="banner-right">
					<div class="banner-card">
						<img :src="grow_plant" />
						<div class="banner-card-title">
							<h3>Grow with us.</h3>
							<p>Join us in an inspiring</p>
						</div>
						<div></div>
					</div>
				</div>
			</v-col>
		</v-row>
	</div>
</template>

<script>
	import { grow_plant } from "assets/image/image";
	import Devider from "components/Devider";
	export default {
		name: "HomeHeader",
		components: {
			Devider,
		},
		data() {
			return {
				grow_plant,
			};
		},
	};
</script>

<style lang="scss">
	@import "~@/assets/style/variable/color";
	.home-banner {
	}

	.banner {
		background-image: url("~@/assets/image/home-banner.png");
		width: 100%;
		min-height: 844px;
		background-size: cover;
		display: flex;
		padding-top: 124px;
		margin-bottom: 120px;

		&-left {
			display: flex;
			flex-direction: column;
			justify-content: center;
			margin: 16px;
			min-height: 500px;
		}

		&-title {
			font-style: normal;
			font-weight: bold;
			font-size: 80px;
			line-height: 100px;
		}
		&-devider {
			display: flex;
			width: 100%;
			justify-content: flex-start;
			align-items: center;
			margin: 30px 0px;
		}
		&-subtitle {
			p {
				font-style: normal;
				font-weight: 600;
				font-size: 18px;
				line-height: 27px;
				letter-spacing: 0.5px;

				color: #121212;
			}
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

	.text-yellow {
		color: $scl_yellow;
	}

	.full-height {
		height: 100%;
	}
</style>
