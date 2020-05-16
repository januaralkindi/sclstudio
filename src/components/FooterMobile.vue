<template>
	<div class="footer">
		<div class="footer__client">
			<FooterClientMobile />
		</div>
		<div class="footer__started is-text-align-center ">
			<p>Ready to Get Started?</p>
			<h1>
				Let’s have
				<span class="text-yellow">a chat</span>
			</h1>
		</div>
		<div class="footer__build is-text-align-center ">
			<p class="is-title">Build an <span  class="is-title">Website?</span></p>
			<v-btn color="#F4C924" class="button" large> SEND</v-btn>
		</div>
		<div class="footer__information is-text-align-center">
			<p class=" is-title-bold ">Information</p>
			<div class=" d-flex align-center justify-center is-padding">
				<v-icon> mdi-map-marker-outline</v-icon>
				<p class="is-title-section">Jl. MT.Haryono No.20 Jakarta, Indonesia</p>
			</div>
			<div class=" d-flex justify-center align-center">
				<v-icon>mdi-phone-outline</v-icon>
				<p class="is-title-section">+6281 888 665 775</p>
			</div>
			<div class="footer__social">
				<p class=" is-title-bold">Follow us</p>
				<div class=" footer__socmed d-flex align-center justify-center ">
					<v-icon> fab fa-facebook-f</v-icon>
					<v-icon> fab fa-instagram</v-icon>
					<v-icon> fab fa-twitter</v-icon>
					<v-icon> fab fa-linkedin</v-icon>
				</div>
			</div>
		</div>
		<div class="footer__copyright d-flex justify-center align-center is-text-align-center ">
			<p>SCL Studio | All Rights Reserved 2020</p>
		</div>
	</div>
</template>

<script>
	import FooterClientMobile from "./FooterClientMobile";
	export default {
		name: "FooterMobile",
		components: {
			FooterClientMobile,
		},
	};
</script>

<style lang="scss" scoped>
	@import "~@/assets/style/variable/color";
	.footer {
		&__started {
			margin-top: 64px;
			p {
				font-family: Poppins;
				font-style: normal;
				font-weight: normal;
				font-size: 18px;
				line-height: 27px;
				letter-spacing: 0.5px;
				color: #121212;
				margin-bottom: 0;
			}

			h1 {
				font-family: Montserrat;
				font-style: normal;
				font-weight: bold;
				font-size: 28px;
				line-height: 34px;
				letter-spacing: 0.5px;
			}
		}

		&__build {
			margin-top: 32px;
			p {
				font-family: Poppins;
				font-style: normal;
				font-weight: normal;
				font-size: 24px;
				line-height: 36px;
				letter-spacing: 0.5px;

				span {
					font-weight: bold;
					font-size: 24px;
					line-height: 36px;
					letter-spacing: 0.5px;
				}
			}
			button {
			}
		}
		&__information {
			margin-top: 42px;
		}

		&__social {
			margin-top: 36px;
		}

		&__socmed {
			i {
				margin: 0 12px;
			}
		}

		&__copyright {
			margin-top: 80px;
			height: 82px;
			background: #f9f9f9;
			p {
				font-family: Poppins;
				font-style: normal;
				font-weight: 600;
				font-size: 14px;
				line-height: 21px;
				text-align: center;
				letter-spacing: 0.5px;
				color: $scl_title;
			}
		}
	}
</style>
