<template>
	<v-navigation-drawer v-model="showModal" right fixed temporary width="312">
		<div class="modal-message">
			<div class="modal-message__close">
				<img @click="closeModal" :src="ic_close" />
			</div>
			<div class="modal-message__title message-header">
				<p class="message-header__subtitle">Every Client Brings</p>
				<h1 class="message-header__title">New Inspiration</h1>
				<p class="message-header__description">
					Request a quote Get a ballpark costing on the product or idea you want
					to build. Be specific to get a more concise cost and timeline.
				</p>
				<h2 class="message-header__note"><span>*</span>MANDATORY FIELDS</h2>
			</div>
			<div class="modal-message__form">
				<div class="form-control message-form-control">
					<p class="label-message">What do you want to build? <span>*</span></p>
					<v-row>
						<v-col cols="5">
							<Checkbox label="Mobile" />
						</v-col>
						<v-col cols="7">
							<Checkbox label="Digital Campaign" />
						</v-col>
					</v-row>
					<v-row>
						<v-col cols="5">
							<Checkbox label="Webisites" />
						</v-col>
						<v-col cols="7">
							<Checkbox label="Im Not Sure Yet" />
						</v-col>
					</v-row>
				</div>
				<div class="form-control message-form-control">
					<p class="label-message">
						What are the objectives, requirements and functionalities of this
						product? <span>*</span>
					</p>
					<v-row>
						<v-col cols="12">
							<v-textarea
								solo
								name="input-7-4"
								outlined
								height="70px"
							></v-textarea>
						</v-col>
					</v-row>
				</div>
				<div class="form-control message-form-control">
					<p class="label-message">Do you have a budget? <span>*</span></p>
					<v-row>
						<v-col cols="12">
							<v-text-field
								label="What's your estimation cost?"
								single-line
								outlined
								height="42"
								dense
							></v-text-field>
						</v-col>
					</v-row>
				</div>
				<div class="form-control message-form-control">
					<p class="label-message">Estimated launch date <span>*</span></p>
					<v-row>
						<v-col cols="12" lg="6">
							<v-menu
								ref="menu"
								v-model="menu"
								:close-on-content-click="false"
								transition="scale-transition"
								offset-y
								max-width="290px"
								min-width="290px"
							>
								<template v-slot:activator="{ on }">
									<v-text-field
										v-model="dateFormatted"
										label="Date"
										persistent-hint
										v-on="on"
									></v-text-field>
								</template>
								<v-date-picker
									v-model="date"
									no-title
									@input="menu1 = false"
								></v-date-picker>
							</v-menu>
						</v-col>
					</v-row>
				</div>
				<div class="form-control message-form-control">
					<p class="label-message">Tell us your name? <span>*</span></p>
					<v-row>
						<v-col cols="12">
							<v-text-field
								label="Your Name"
								single-line
								outlined
								height="42"
								dense
							></v-text-field>
						</v-col>
					</v-row>
				</div>
				<div class="form-control message-form-control">
					<p class="label-message">Whats your company name? <span>*</span></p>
					<v-row>
						<v-col cols="12">
							<v-text-field
								label="Your company"
								single-line
								height="42"
								outlined
								dense
							></v-text-field>
						</v-col>
					</v-row>
				</div>
				<div class="form-control message-form-control">
					<p class="label-message">Put your email address? <span>*</span></p>
					<v-row>
						<v-col cols="12">
							<v-text-field
								label="Your email"
								single-line
								height="42"
								outlined
								dense
							></v-text-field>
						</v-col>
					</v-row>
				</div>
				<div class="form-control message-form-control">
					<p class="label-message">Add your contact number? <span>*</span></p>
					<v-row>
						<v-col cols="12">
							<v-text-field
								label="Your contact number"
								single-line
								height="42"
								outlined
								dense
							></v-text-field>
						</v-col>
					</v-row>
				</div>

				<div class="form-control message-form-control">
					<p class="label-message">How did you find us? <span>*</span></p>
					<v-row>
						<v-col cols="6">
							<Checkbox label="Search" />
						</v-col>
						<v-col cols="6">
							<Checkbox label="Social Media" />
						</v-col>
					</v-row>
					<v-row>
						<v-col cols="6">
							<Checkbox label="Word of mouth" />
						</v-col>
						<v-col cols="6">
							<Checkbox label="Others" />
						</v-col>
					</v-row>
				</div>
			</div>
			<div class="modal-message__submit">
				<v-btn class="submit-btn is-full-width" color=" tcl-yellow darken-2">
					Submit
				</v-btn>
			</div>
		</div>
	</v-navigation-drawer>
</template>

<script>
	import { ic_close } from "@images";
	import Checkbox from "components/input/checkbox";
	export default {
        name: "ModalMesssage",
        props : {
            showModal : Boolean
        },
		components: {
			Checkbox,
		},
		data: () => ({
			ic_close,
			form_stack_build: [],
            dateFormatted: new Date().toISOString().substr(0, 10),
            date: '',
			menu: false,
        }),
        methods : {
            closeModal () {
                this.$emit('onCloseModal')
            }
        }
	};
</script>

<style lang="scss" scoped>
	@import "~@/assets/style/variable/color";
	.modal-message {
		position: relative;
		padding: 40px 16px 16px 16px;
		font-family: Montserrat;

		&__close {
			width: 60px;
			height: 60px;
			padding-left: 20px;
			padding-top: 20px;
			background-color: $scl_yellow;
			color: $scl_title;
			display: flex;
			justify-content: center;
			align-content: center;
			align-items: flex-start;
			position: absolute;
			border-bottom-left-radius: 80px;
			top: 0;
			right: 0;
			p {
				color: $scl_title;
			}
			img {
				width: 12px;
				height: 12px;
			}
		}
		&__title {
			border-bottom: 1px solid #f1f1f1;
		}
		&__form {
			margin-top: 20px;
		}
		&__submit {
			margin: 16px 0px;
		}
	}

	.message-header {
		&__subtitle {
			font-family: Montserrat;
			font-style: normal;
			font-weight: normal;
			font-size: 14px;
			line-height: 17px;
			align-items: center;
			color: $scl_title;
		}
		&__title {
			font-family: Montserrat;
			font-style: normal;
			font-weight: bold;
			font-size: 18px;
			line-height: 22px;
			display: flex;
			align-items: center;
			color: $scl_title;
		}
		&__description {
			font-family: Poppins;
			font-style: normal;
			font-weight: normal;
			font-size: 12px;
			line-height: 18px;
			letter-spacing: 0.5px;
			color: #121212;
			margin-top: 20px;
		}
		&__note {
			font-family: Poppins;
			font-style: normal;
			font-weight: bold;
			font-size: 12px;
			line-height: 18px;
			letter-spacing: 0.5px;
			color: #121212;
			margin: 20px 0px;
			span {
				line-height: 18px;
				letter-spacing: 0.5px;
				color: #ff3e3e;
			}
		}
	}

	.label-message {
		font-family: Poppins;
		font-style: normal;
		font-weight: 600;
		font-size: 12px;
		line-height: 18px;
		letter-spacing: 0.5px;
		color: #000000;
		span {
			line-height: 18px;
			letter-spacing: 0.5px;
			color: #ff3e3e;
		}
	}
	.message-input {
		> div > div > label {
			font-family: Poppins;
			font-style: normal;
			font-weight: normal;
			font-size: 12px;
			line-height: 18px;
			letter-spacing: 0.5px;
		}
	}
	.submit-btn {
		font-family: Poppins;
		font-style: normal;
		font-weight: 600;
		font-size: 14px;
		line-height: 21px;
		text-align: center;
		letter-spacing: 0.005em;
	}
</style>
