<template>
	<div class="product-item d-flex flex-column justify-space-between">
		<img :src="image" />
		<p class="is-bold is-title">{{ title }}</p>
		<p>{{ description }}</p>
		<v-btn class="product-item__button" color=" tcl-yellow darken-2" small>
			find out more &nbsp;
			<v-icon color="black" right>mdi-arrow-right</v-icon>
		</v-btn>
	</div>
</template>

<script>
	export default {
		name: "ProductItem",
		props: {
			image: String,
			title: String,
			description: String,
		},
	};
</script>

<style lang="scss" scoped>
	.product-item {
		width: 168px;
		height: 283px;
		padding: 16px;
		background: #f9f9f9;
		border-radius: 4px;
		margin-bottom: 12px;
		&__button {
			font-family: Poppins;
			font-style: normal;
			font-weight: 600;
			width: 134px;
			height: 34px;
			font-size: 12px;
			display: flex;
			padding: 6px;
			justify-content: space-between;
			letter-spacing: 0.005em;
		}
	}
</style>
