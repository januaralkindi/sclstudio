<template>
	<div class="services-card d-flex justify-center align-center">
		<div class="services-card__content card-content">
			<div class="card-content__icon">
				<v-icon color="#F4C924"> mdi-cellphone</v-icon>
			</div>
			<div class="card-content__title">
				user interface
			</div>
			<div class="card-content__description">
				<p>
					Stunning, intuitive design is essential to your product's
					functionality and brand story.
				</p>
			</div>
		</div>
		<div class="services-card__bottom card-bottom">
			<v-icon> mdi-arrow-right </v-icon>
		</div>
	</div>
</template>

<script>
	export default {
		name: "ServicesCard",
	};
</script>

<style lang="scss">
	.services-card {
        cursor: pointer;
		width: 350px;
		height: 290px;
		border-radius: 12px;
		box-shadow: 0px 8px 36px rgba(197, 195, 195, 0.1);
		flex-direction: column;
		background: #ffffff;
		padding: 16px;
		position: relative;
		margin: 10px;
		-webkit-transition: background-image 0.2s ease-in-out;
		transition: background-image 0.2s ease-in-out;
		.card-content {
			&__icon {
				width: 48px;
				height: 48px;
				background: rgba(244, 201, 36, 0.3);
				border-radius: 4px;
				display: flex;
				justify-content: center;
			}
			&__title {
				font-style: normal;
				font-weight: bold;
				font-size: 18px;
				line-height: 22px;
				letter-spacing: 0.5px;
				color: #121212;
				margin: 16px 0px 8px 0px;
			}
			&__description {
				font-style: normal;
				font-weight: normal;
				font-size: 14px;
				line-height: 24px;
				letter-spacing: 0.5px;
				color: #aaaaaa;
			}
		}

		.card-bottom {
			position: absolute;
			display: flex;
			justify-content: flex-end;
			width: 100%;
			padding: 10px;
			bottom: 0;
		}

		&:hover {
			background: url("~@/assets/image/service-hover.png");
            // transition: 0.4s cubic-bezier(0.25, 0.8, 0.5, 1), visibility 0s;
            transition: all .5s;

			-webkit-transition: background-image 0.2s ease-in-out;
			transition: background-image 0.2s ease-in-out;
			.card-content {
				&__icon {
					background: rgba(255, 255, 255, 0.3);
					i {
						color: #ffffff !important;
						svg {
							fill: #ffffff;
						}
					}
				}
				&__title {
					color: #ffffff;
				}
				&__description {
					color: #ffffff;
				}
			}
			.card-bottom {
				i {
					color: #ffffff !important;
				}
				position: absolute;
				display: flex;
				justify-content: flex-end;
				width: 100%;
				padding: 10px;
				bottom: 0;
			}
		}
	}
</style>
