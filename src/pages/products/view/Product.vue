<template>
	<div class="product">
		<TitleSection title="Our Product." />
		<ProductMenu />
		<div class="product__list ">
			<v-row class="d-flex product-item">
				<v-col
					cols="12"
					md="6"
					class=" product-item__img d-flex"
					data-aos="fade-right"
					data-aos-offset="200"
					data-aos-delay="25"
					data-aos-duration="1000"
					data-aos-easing="ease-in-out"
					data-aos-once="true"
				>
					<img :src="product_1" />
				</v-col>
				<v-col
					cols="12"
					md="6"
					class="product-item__detail  product-detail d-flex justify-center"
					data-aos="fade-left"
					data-aos-offset="200"
					data-aos-delay="25"
					data-aos-duration="1000"
					data-aos-easing="ease-in-out"
					data-aos-once="true"
				>
					<h1 class="product-detail__title">SANMARU</h1>
					<p class="product-detail__description">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat. Duis aute irure dolor in
						reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
						pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
						culpa qui officia deserunt mollit anim id est laborum.
					</p>
					<v-btn class="product-detail__button" color=" tcl-yellow darken-2">
						find out more &nbsp;
						<v-icon color="black" right>mdi-arrow-right</v-icon>
					</v-btn>
				</v-col>
			</v-row>
			<v-row class="d-flex product-item">
				<v-col
					cols="12"
					md="6"
					class="product-item__detail  product-detail d-flex justify-center"
					data-aos="fade-right"
					data-aos-offset="200"
					data-aos-delay="25"
					data-aos-duration="1000"
					data-aos-easing="ease-in-out"
					data-aos-once="true"
				>
					<h1 class="product-detail__title">INFO MANGGUNG</h1>
					<p class="product-detail__description">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat. Duis aute irure dolor in
						reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
						pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
						culpa qui officia deserunt mollit anim id est laborum.
					</p>
					<v-btn class="product-detail__button" color=" tcl-yellow darken-2">
						find out more &nbsp;
						<v-icon color="black" right>mdi-arrow-right</v-icon>
					</v-btn>
				</v-col>
				<v-col
					cols="12"
					md="6"
					class=" product-item__img d-flex "
					data-aos="fade-left"
					data-aos-offset="200"
					data-aos-delay="25"
					data-aos-duration="1000"
					data-aos-easing="ease-in-out"
					data-aos-once="true"
				>
					<img :src="product_2" />
				</v-col>
			</v-row>
			<v-row class="d-flex product-item">
				<v-col
					cols="12"
					md="6"
					class=" product-item__img d-flex "
					data-aos="fade-right"
					data-aos-offset="200"
					data-aos-delay="25"
					data-aos-duration="1000"
					data-aos-easing="ease-in-out"
					data-aos-once="true"
				>
					<img :src="product_3" />
				</v-col>
				<v-col
					cols="12"
					md="6"
					class="product-item__detail  product-detail d-flex justify-center"
					data-aos="fade-left"
					data-aos-offset="200"
					data-aos-delay="25"
					data-aos-duration="1000"
					data-aos-easing="ease-in-out"
					data-aos-once="true"
				>
					<h1 class="product-detail__title">GIBOL</h1>
					<p class="product-detail__description">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat. Duis aute irure dolor in
						reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
						pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
						culpa qui officia deserunt mollit anim id est laborum.
					</p>
					<v-btn class="product-detail__button" color=" tcl-yellow darken-2">
						find out more &nbsp;
						<v-icon color="black" right>mdi-arrow-right</v-icon>
					</v-btn>
				</v-col>
			</v-row>
			<v-row class="d-flex product-item">
				<v-col
					cols="12"
					md="6"
					class="product-item__detail  product-detail d-flex justify-center"
					data-aos="fade-right"
					data-aos-offset="200"
					data-aos-delay="25"
					data-aos-duration="1000"
					data-aos-easing="ease-in-out"
					data-aos-once="true"
				>
					<h1 class="product-detail__title">MAMPIR.ID</h1>
					<p class="product-detail__description">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat. Duis aute irure dolor in
						reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
						pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
						culpa qui officia deserunt mollit anim id est laborum.
					</p>
					<v-btn class="product-detail__button" color=" tcl-yellow darken-2">
						find out more &nbsp;
						<v-icon color="black" right>mdi-arrow-right</v-icon>
					</v-btn>
				</v-col>
				<v-col
					cols="12"
					md="6"
					class=" product-item__img d-flex "
					data-aos="fade-left"
					data-aos-offset="200"
					data-aos-delay="25"
					data-aos-duration="1000"
					data-aos-easing="ease-in-out"
					data-aos-once="true"
				>
					<img :src="product_4" />
				</v-col>
			</v-row>
		</div>
	</div>
</template>

<script>
	import TitleSection from "components/TitleSection";
	import {
		product_1,
		product_2,
		product_3,
		product_4,
	} from "assets/image/image";
	import ProductMenu from "./ProductMenu";
	export default {
		name: "product",
		components: {
			TitleSection,
			ProductMenu,
		},
		data: () => ({
			product_1,
			product_2,
			product_3,
			product_4,
		}),
	};
</script>

<style lang="scss">
	.product {
		&__list {
			margin-top: 52px;
		}
	}
	.product-item {
		&__img {
			padding: 0px;
			img {
				width: 100%;
			}
		}
	}
	.product-detail {
		flex-direction: column;
		padding: 72px;

		&__title {
			font-style: normal;
			font-weight: bold;
			font-size: 24px;
			line-height: 29px;
			letter-spacing: 0.5px;
			color: #121212;
		}

		&__description {
			margin: 16px 0;
			font-style: normal;
			font-weight: normal;
			font-size: 14px;
			line-height: 24px;
			letter-spacing: 0.5px;
			color: #989898;
		}
		&__button {
			width: 165px;
			font-style: normal;
			font-weight: 600;
			font-size: 14px;
			line-height: 21px;
			/* identical to box height */

			letter-spacing: 0.005em;

			color: #000000;
			span {
				justify-content: space-between;
			}
		}
	}
</style>
