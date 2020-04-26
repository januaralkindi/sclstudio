<template>
		<div class="devider d-flex align-center ">
			<div :class="['devider-circle', { 'devider-circle--yellow': color === 'yellow'},`devider-circle--${size}`]"></div>
			<div
				:class="['devider-line', { 'devider-line--yellow': color === 'yellow' }]"
			></div>
		</div>
</template>

<script>
	export default {
		name: "Devider",
		props: {
			color: {
				type: String,
				default: "",
			},
			size : {
				type : String,
				default : ""
			}
		},
	};
</script>

<style lang="scss" scoped>
    @import "~@/assets/style/variable/color";
    .devider {
        width: 100%;        
    }
	.devider-circle {
		height: 14px;
		width: 14px;
		background-color: #121212;
		border-radius: 50%;
		display: inline-block;
		&--yellow {
			background-color: $scl_yellow;
		}
		&--small {
			height: 11px;
			width: 11px;
		}
	}
	.devider-line {
		width: 100%;
		height: 2px;
		background-color: #121212;

		&--yellow {
			background-color: $scl_yellow;
		}
	}
</style>
