<template>
	<div class="project">
		<div class="project__title">
			<v-row class="is-padding">
				<v-col cols="6">
					<h1 class="is-title-section ">Our Projects.</h1>
				</v-col>
			</v-row>
			<v-row class="project__select is-padding ">
				<v-col class="d-flex" cols="12">
					<v-select
						:items="workCategories"
						label="Categories"
						outlined
					></v-select>
				</v-col>
			</v-row>
		</div>
		<div
			class="project__list d-flex is-padding flex-wrap justify-space-between"
		>
			<ProjectCard
				v-for="(value, index) in dataWorker"
				:key="index"
				:image="value.image"
				:title="value.title"
				:description="value.description"
				data-aos="fade-up"
				data-aos-offset="50"
				data-aos-delay="12"
				:data-aos-duration="800 + index * 1 * 200"
			/>
		</div>
		<v-row class="is-padding  d-flex  justify-center">
			<v-btn color="#F4C924" class="button" large> See More</v-btn>
		</v-row>
	</div>
</template>

<script>
	import "swiper/css/swiper.css";
	import {
		project_1,
		project_2,
		project_3,
		project_4,
		project_5,
	} from "@images";
	import ProjectCard from "./ProjectCard";
	import { CATEGORIES } from "@/data/";

	export default {
		name: "ServicesMobile",
		components: {
			ProjectCard,
		},
		data() {
			return {
				workCategories: CATEGORIES,
				dataWorker: [
					{
						image: project_1,
						title: "Web Design",
						description: "Infomanggung.com",
					},
					{
						image: project_2,
						title: "Web Design",
						description: "anandamaya.com",
					},
					{
						image: project_3,
						title: "Apps",
						description: "Quora",
					},
					{
						image: project_4,
						title: "Apps",
						description: "mcdonald",
					},
					{
						image: project_5,
						title: "Web Apps",
						description: "Kumparan.com",
					},
					{
						image: project_4,
						title: "Web Apps",
						description: "acaraapa.com",
					},
				],
			};
		},
	};
</script>

<style lang="scss" scoped>
	@import "~@/assets/style/variable/color";
	.project {
		&__select {
			padding-top: 0px;
		}
		&__client {
			height: auto;
		}
		&__content {
			width: 100%;
			margin-bottom: 80px;
			// height: 200px;
		}
		&__list {
			margin-top: -28px;
		}
		&__swiper {
			width: auto;
		}
	}
	.swipper-client {
		height: 142px;
	}
</style>
