<template>
	<div class="banner">
		<p class="banner__subtitle is-title">Our Product</p>
		<h1 class="banner__title is-title">Fresh & Clean</h1>
		<p class="banner__description">
			We pride ourselves on our commitment to exellence, as well as our ability
			to deliver for our partners. Learn more about how our talent team of
			passionate designers, developers, and product experts can build value for
			you.
		</p>
		<p class="banner__description">
			We believe that individual talent can only take you so far in our
			industry. While personal excellence is highly valued at SCL, so is a deep
			commitment to collaboration both internally and externally with your team.
		</p>
	</div>
</template>

<script>
	export default {};
</script>

<style lang="scss" scoped>
	@import "~@/assets/style/variable/color";
	.banner {
		background: url("~@/assets/image/home/mobile/banner.png");
		width: 100%;
		min-height: 336px;
		padding-top: 124px;
		padding-left: 36px;
		padding-right: 36px;
		padding-bottom: 20px;
		&__subtitle {
			font-family: Montserrat;
			font-style: normal;
			font-weight: normal;
			font-size: 20px;
			line-height: 24px;
			margin-bottom: 10px;
		}
		&__title {
			font-family: Montserrat;
			font-style: normal;
			font-weight: bold;
			font-size: 28px;
			line-height: 34px;
			margin-bottom: 20px;
		}

		&__description {
			margin-bottom: 20px !important;
		}
	}
</style>
