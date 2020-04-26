<template>
	<div class="project-item">
		<img :src="project_item_1" class="project-item__img" />
		<div class="project-item__detail item-detail">
			<h3>Web Design</h3>
			<p>infomanggung.com</p>
		</div>
	</div>
</template>

<script>
	import { project_item_1 } from "assets/image/image";

	export default {
		name: "ProjectItem",
		data() {
			return {
				project_item_1,
			};
		},
	};
</script>

<style lang="scss" scoped>
	.project-item {
		border-radius: 5px;
		width: 285px;
		height: 242px;
		position: relative;
		cursor: pointer;
		img {
			height: 100%;
			width: 100%;
			object-fit: cover;
		}
		margin: 0px 0px 32px 32px;
		&__detail {
			width: 100%;
			height: 100%;
			position: absolute;
			display: flex;
			visibility: hidden;
			opacity: 0;
			justify-content: flex-end;
			padding: 30px;
			top: 0;
			flex-direction: column;
			background: rgba(18, 18, 18, 0.5);
			color: #ffff;
			border-radius: 5px;
			transition: visibility 0s, opacity 0.2s linear;
		}

		&:hover {
			.project-item__detail {
				display: flex;
				opacity: 1;
				visibility: visible;
				transition: visibility 0s, opacity 0.2s linear;
			}
		}
	}
</style>
