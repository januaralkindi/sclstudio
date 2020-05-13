<template>
	<div>
		<v-app>
			<NavbarMobile />
			<div class="scl-container">
				<slot> </slot>
			</div>
			<FooterMobile/>
		</v-app>
	</div>
</template>

<script>
	import NavbarMobile from "components/NavigationMobile";
	import FooterMobile from "components/FooterMobile"
	export default {
		name: "DefaultLayoutMobile",
		components: {
			NavbarMobile,
			FooterMobile
		},
	};
</script>

<style lang="scss">
.scl-container{
    // padding-top: 124px;
}
</style>
