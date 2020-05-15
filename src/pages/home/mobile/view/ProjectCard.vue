<template>
	<div class="project-card">
		<div class="project-card__detail is-padding d-flex flex-column justify-end">
			<p class="is-text-white is-bold">{{ title }}</p>
			<p class="is-text-white">{{ description }}</p>
		</div>
		<img class="project-card__image" :src="image" />
	</div>
</template>

<script>
	export default {
		name: "ProjectCard",
		props: {
			image: String,
			title: String,
			description: String,
		},
	};
</script>

<style lang="scss" scoped>
	.project-card {
		width: 168px;
		height: 168px;
		position: relative;
		border-radius: 4px;
		&__image {
			width: 100%;
			height: 100%;
		}

		&__detail {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			color: #ffffff;
			background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%);
			border-radius: 4px;
		}
	}
</style>
