<template>
	<div id="home-services" class="home-services services scl-content ">
		<div
			class="services__title service-title d-flex  justify-center align-center "
		>
			<h1 class="services-title__title">Our Services.</h1>
			<div class="services-title__devider">
				<Devider color="yellow" size="small" />
			</div>
		</div>
		<div class="services__list">
			<ServciesCard />
			<ServciesCard />
			<ServciesCard />
			<ServciesCard />
			<ServciesCard />
			<ServciesCard />
			<ServciesCard />
			<ServciesCard />
			<ServciesCard />
		</div>
	</div>
</template>

<script>
	import Devider from "components/Devider";
	import ServciesCard from "./ServicesCard";
	export default {
		name: "Servcies",
		components: {
			Devider,
			ServciesCard,
		},
	};
</script>

<style lang="scss">
	.home-services {
		background: url("~@/assets/image/background-services.png");
		background-size: 100% 80%;
		background-repeat-y: no-repeat;
		background-repeat-x: no-repeat;
		padding-bottom: 200px !important;
		background-position-x: center;
		background-position-y: 180px;
	}

	.services {
		&__title {
			width: auto;
			flex-direction: column;
		}

		&__list {
			margin: 40px 0px;
			display: flex;
			flex-wrap: wrap;
		}
	}
	.services-title {
		width: auto;
		&__title {
			font-style: normal;
			font-weight: bold;
			font-size: 36px;
			line-height: 44px;
			color: #121212;
			margin-bottom: 20px;
		}
		&__devider {
			width: 75px;
		}
	}
</style>
