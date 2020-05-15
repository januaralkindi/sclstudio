<template>
	<div class="services-list">
		<h1 class=" services-list__title is-padding is-title-section ">Our Services.</h1>
		<div
			class="services-list__content d-flex is-padding flex-wrap justify-space-between"
		>
			<ServicesCard
				v-for="(service, index) in dataServices"
				:key="index"
				:icon="service.icon"
				:title="service.title"
				:description="service.description"
				widthHalf
			/>
		</div>
	</div>
</template>

<script>
	import ServicesCard from "pages/home/mobile/view/SercviceCard";
	import { SERVICES_LIST } from "@/data";

	export default {
		name: "ServiceList",
		components: {
			ServicesCard,
		},
		data: () => ({
			dataServices: SERVICES_LIST,
		}),
	};
</script>

<style lang="scss" scoped>
.services-list{
    margin-top: 28px;
    &__title {
        margin-bottom: -20px;
    }
}
</style>
