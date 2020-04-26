<template>
	<div class="footer ">
		<div class="footer__patner">
			<FooterPatner />
		</div>
		<div class="footer__contact footer-contact scl-content">
			<div class="foote-contact__detail contact-detail">
				<div class="contact-detail__left contact-action">
					<div class="contact-action__title">
						<h1>Let’s have</h1>
						<h1 class="text-yellow">a chat</h1>
					</div>
					<div class="contact-action__button">
						<h2>Build an <b>Website?</b></h2>
						<v-btn color="#F4C924" class="send-button" large> SEND</v-btn>

						<!-- <v-btn class="send-button">  </v-btn> -->
					</div>
				</div>
				<div class="contact-detail__right contact-description">
					<h2>Information</h2>
					<div class="contact-description__item">
						<v-icon> mdi-map-marker-outline</v-icon>
						<p>Jl. MT.Haryono No.20 Jakarta, Indonesia</p>
					</div>
					<div class="contact-description__item">
						<v-icon>mdi-phone-outline</v-icon>
						<p>+6281 888 665 775</p>
					</div>
					<h2  class="contact-description__title-social">Follow us</h2>
					<div class="contact-description__social">
						<v-icon> fab fa-facebook-f</v-icon>
						<v-icon> fab fa-instagram</v-icon>
						<v-icon> fab fa-twitter</v-icon>
						<v-icon> fab fa-linkedin</v-icon>
					</div>
				</div>
			</div>
			<div>
				SCL Studio | All Rights Reserved 2020
			</div>
		</div>
	</div>
</template>

<script>
	import FooterPatner from "./FooterClient";
	export default {
		name: "Footer",
		components: {
			FooterPatner,
		},
	};
</script>

<style lang="scss">
	@import "~@/assets/style/variable/color";

	.footer {
		width: 100%;

		&__contact {
			min-height: 560px;
			width: 100%;
			background: url('~@/assets/image/background-footer.png') no-repeat center;
			// background-repeat: no-repeat;
			background-size: 100% 100%;
			margin-top: -112px;
			display: flex;
			justify-content: flex-end;
			align-items: center;
			align-self: center;
			flex-direction: column;
			padding-bottom: 36px !important;
    padding-top: 92px !important;
		}
	}
	.contact-detail {
		margin-bottom: 96px;
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
		width: 100%;
		&__left {
		}

		&__right {
		}
	}

	.contact-description {
		h2 {
			font-style: normal;
			font-weight: 600;
			font-size: 24px;
			line-height: 36px;
            color: #121212;
            margin: 12px 0px
        }
        &__item{
            display: flex;
            align-items: center;
            p{
                margin: 8px;
            }
        }

        &__title-social{
            margin-top: 36px!important;
        }
        &__social {
            display: flex;
            i{
                margin-right: 16px;
            }
        }
		// display: flex;
	}
	.contact-action {
		&__title {
			display: flex;
			h1 {
				margin: 8px;
				font-style: normal;
				font-weight: bold;
				font-size: 48px;
				line-height: 59px;
				/* identical to box height */

				letter-spacing: 0.5px;
			}
		}
		&__button {
			display: flex;
			margin: 8px;
			align-items: center;
			h2 {
				font-style: normal;
				font-weight: normal;
				font-size: 32px;
				line-height: 48px;
				/* identical to box height */

				letter-spacing: 0.5px;
			}
			.send-button {
				background-color: $scl_yellow;
				margin-left: 48px;
				width: 160px;
			}
		}
	}
</style>
