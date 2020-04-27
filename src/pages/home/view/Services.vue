<template>
	<div id="home-services" class="home-services services scl-content ">
		<div
			class="services__title service-title d-flex  justify-center align-center "
		>
			<h1
				class="services-title__title"
				data-aos="fade-down"
				data-aos-offset="1"
				data-aos-delay="50"
				data-aos-duration="1000"
				data-aos-once="true"
			>
				Our Services.
			</h1>
			<div class="services-title__devider">
				<Devider color="yellow" size="small" />
			</div>
		</div>
		<div class="services__list">
			<ServciesCard
				v-for="i in 6"
				:key="i"
				data-aos="fade-left"
				data-aos-offset="1"
				:data-aos-delay="5 + i * 100"
				:data-aos-duration="500 + i * 20"
				data-aos-once="true"
			/>
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
