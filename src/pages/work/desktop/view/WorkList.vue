<template>
	<div class="work-list">
		<TitleSection title="Our Work." />
		<MenuCategories :itemMenuCategories="itemMenuCategories" />
		<div class="work-list__list ">
			<v-row class="d-flex">
				<v-col
					v-for="(work, index) in dataWorkItem"
					:key="index"
					cols="12"
					md="6"
					class=" work-item d-flex"
					data-aos="fade-up"
					data-aos-offset="-100"
					data-aos-delay="50"
					data-aos-duration="1000"
					data-aos-easing="ease-in-out"
					data-aos-mirror="true"
					data-aos-once="true"
					data-aos-anchor-placement="top-center"
				>
					<WorkItem :image="work.image" :title="work.name" />
				</v-col>
			</v-row>
		</div>
	</div>
</template>

<script>
	import TitleSection from "components/TitleSection";
	import MenuCategories from "components/MenuCategories";
	import WorkItem from "./WorkItem";
	import {
		work_1,
		work_2,
		work_3,
		work_4,
		work_5,
		work_6,
	} from "assets/image/image";
	export default {
		name: "product",
		components: {
			TitleSection,
			MenuCategories,
			WorkItem,
		},
		data: () => ({
			itemMenuCategories: [
				"All",
				"Branding",
				"Web Design",
				"Photography",
				"Templates",
				"Apps",
				"Other",
			],
			dataWorkItem: [
				{
					name: "The Bakrie Brothers",
					image: work_1,
				},
				{
					name: "Mc Donald",
					image: work_2,
				},
				{
					name: "Sanmaru",
					image: work_3,
				},
				{
					name: "Anandamaya",
					image: work_4,
				},
				{
					name: "360 Dome Eco Green Park",
					image: work_5,
				},
				{
					name: "infomanggung",
					image: work_6,
				},
			],
		}),
	};
</script>

<style lang="scss">
	.work-list {
		&__list {
			margin-top: 52px;
		}
	}
	.work-item {
		&__img {
		}
	}
</style>
