<template>
	<div>
		<v-app>
			<Navbar />
			<div class="scl-container">
				<slot> </slot>
			</div>

			<Footer />
		</v-app>
	</div>
</template>

<script>
	import Navbar from "components/Naviagtion";
	import Footer from "components/Footer";

	export default {
		name: "defaultLayout",
		components: {
			Navbar,
			Footer,
		},
	};
</script>

<style lang="scss">
.scl-container{
    // padding-top: 124px;
}
</style>
