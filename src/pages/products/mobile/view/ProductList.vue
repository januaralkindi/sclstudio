<template>
	<div class="project">
		<div class="project__title">
			<v-row class="is-padding">
				<v-col cols="6">
					<h1 class="is-title-section ">Our Products.</h1>
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
            <ProductItem
                v-for="(product , index) in dataProduct"
                :key="index"
                :image="product.image"
                :title="product.title"
                :description="product.description"

            />
        </div>
	</div>
</template>

<script>    
	import { PRODUCT_LIST, CATEGORIES } from "@/data/";
    import ProductItem from './ProductItem'
	export default {
		name: "ServicesMobile",
		components: {
            ProductItem
        },
		data() {
			return {
				workCategories: CATEGORIES,
				dataProduct: PRODUCT_LIST,
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
