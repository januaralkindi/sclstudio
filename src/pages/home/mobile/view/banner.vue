<template>
	<div class="banner">
		<h1>We Make <span> Design </span></h1>
		<p>
			Between your business objectives and what your customers want.
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
		background-size: cover;
		padding-top: 124px;
		padding-left: 40px;
		padding-right: 40px;

		h1 {
			font-style: normal;
			font-weight: bold;
			font-size: 28px;
			line-height: 34px;
			color: $scl_title;
			span {
				color: $scl_yellow;
			}
		}
		p {
			font-style: normal;
			font-weight: normal;
			font-size: 14px;
			line-height: 21px;
			letter-spacing: 0.5px;
			color: $scl_title;
		}
	}
</style>
