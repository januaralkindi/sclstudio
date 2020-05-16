<template>
	<div class="work-item">
		<img class="work-item__image" :src="image" />
		<div
			class="work-item__detail work-detail d-flex align-center justify-space-between flex-column "
		>
			<img class="work-detail__img" :src="ic_detail" />
			<p class="is-text-white">View Detail</p>
			<div class="work-detail__title">
				<p class="is-title is-bold">{{ title }}</p>
			</div>
		</div>
	</div>
</template>

<script>
	import { ic_detail } from "@images";
	export default {
		name: "WorkItem",
		props: {
			title: String,
			image: String,
		},
		data: () => ({
			ic_detail,
		}),
	};
</script>

<style lang="scss" scoped>
	.work-item {
		width: 168px;
		height: 168px;
		border-radius: 4px;
        position: relative;
        margin-bottom: 32px;
		&__image {
			width: 100%;
			height: 100%;
		}
		&__detail {
			width: 100%;
			height: 100%;
			background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
			border-radius: 4px;
			position: absolute;
			top: 0;
		}
	}
	.work-detail {
		&__img {
			width: 14px;
			height: 14px;
			align-self: flex-end;
			margin: 10px;
			margin: 14px 14px 0px 14px;
		}
		&__title {
			width: 142px;
			min-height: 36px;
			background: #f2c94c;
			display: flex;
			justify-content: center;
			align-items: center;
			margin-bottom: -8%;
			text-align: center;
            p{
                font-size: 12px;
            }
		}
		// min-width: 142px;
		// min-height: 36px;
		// background: #f2c94c;
	}
</style>
