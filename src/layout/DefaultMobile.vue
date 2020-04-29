<template>
	<div>
		<v-app>
			<NavbarMobile />
			<div class="scl-container">
				<slot> </slot>
			</div>
		</v-app>
	</div>
</template>

<script>
	import NavbarMobile from "components/NavigationMobile";
	export default {
		name: "DefaultLayoutMobile",
		components: {
			NavbarMobile,
		},
	};
</script>

<style lang="scss">
.scl-container{
    // padding-top: 124px;
}
</style>
