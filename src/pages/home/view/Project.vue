<template>
	<div id="home-project" class="home-project project scl-content ">
		<div
			class="project__title service-title d-flex  justify-center align-center "
		>
			<h1 class="project-title__title">Our Project.</h1>
			<div class="project-title__devider">
				<Devider color="yellow" size="small" />
			</div>
		</div>
		<div class="project__content project-content">
			<ProjectSidebar />
			<ProjectList />
		</div>
	</div>
</template>

<script>
	import Devider from "components/Devider";
	import ProjectSidebar from "./ProjectSideBar";
	import ProjectList from "./ProjectList";
	export default {
		name: "Servcies",
		components: {
			Devider,
			ProjectSidebar,
			ProjectList,
		},
	};
</script>

<style lang="scss">
	.project {
		&__title {
			width: auto;
			flex-direction: column;
		}

		&__content {
			margin: 48px 0px;
			display: flex;
		}
	}
	.project-title {
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
