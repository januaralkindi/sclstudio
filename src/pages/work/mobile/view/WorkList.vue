<template>
	<div class="work-list">
		<div class="work-list__title">
			<v-row class="is-padding">
				<v-col cols="6">
					<h1 class="is-title-section ">Our Work.</h1>
				</v-col>
			</v-row>
			<v-row class="work-list__select is-padding ">
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
			class="work-list__list d-flex is-padding flex-wrap justify-space-around"
		>
        <WorkItem
            v-for="(work,index) in workList"
            :key="index"
            :image="work.image"
            :title="work.title"
        />
        </div>
	</div>
</template>

<script>    
    import { WORK_LIST} from "@/data/";
    import WorkItem from './WorkItem'
	export default {
		name: "ServicesMobile",
		components: {
            WorkItem
        },
		data() {
			return {
				workList: WORK_LIST,
			};
		},
	};
</script>

<style lang="scss" scoped>
	@import "~@/assets/style/variable/color";
	.work-list {
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
