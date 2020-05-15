<template>
	<div
		class="service-card d-flex justify-center flex-column "
		v-bind:class="{ 'service-card--half': widthHalf }"
	>
		<div
			class="service-card__icon is-yellow-transparant d-flex justify-center align-center"
		>
			<img :src="icon" />
		</div>
		<p class="service-card__title is-bold is-title">{{ title }}</p>
		<p>{{ description }}</p>
	</div>
</template>

<script>
	export default {
		name: "ServicesCardMobile",
		props: {
			title: String,
			description: String,
			icon: String,
			widthHalf: Boolean,
		},
	};
</script>

<style lang="scss" scoped>
	.service-card {
		width: 228px;
		height: 128px;
		background: #f9f9f9;
		border-radius: 8px;
		padding: 16px;
		margin-bottom:12px ;
		box-sizing: border-box;
		&__icon {
			width: 34px;
			height: 34px;
			border-radius: 4px;
		}
		&__title {
			margin-top: 8px;
			margin-bottom: 8px;
		}
		&--half {
			width: 168px;
			height: 130px;

		}
	}
</style>
