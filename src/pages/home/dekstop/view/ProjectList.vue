<template>
	<div class="project-list">
		<div class="project-list__options">
			<p>
				read more
				<span>
					<v-icon> mdi-arrow-right </v-icon>
				</span>
			</p>
		</div>
		<div class="project-list__list">
			<ProjectItem v-for="i in 6" :key="i" 
				data-aos="fade-left"
				data-aos-offset="1"
				:data-aos-delay="50 + (i * 100)"
				:data-aos-duration="1000 + (i * 20)"
				data-aos-easing="ease-in-out"
            
            />
		
		</div>
	</div>
</template>

<script>
	import ProjectItem from "./ProjectItem";
	export default {
		name: "ProjectList",
		components: {
			ProjectItem,
		},
	};
</script>

<style lang="scss">
	@import "~@/assets/style/variable/color";
	.project-list {
		&__options {
			text-align: left;
			display: flex;
			justify-content: flex-end;
			p {
				display: flex;
				justify-content: center;
				align-items: center;
				span {
					height: 20px;
					width: 20px;
					background-color: $scl_yellow;
					border-radius: 50%;
					display: inline-block;
					font-size: 12px;
					text-align: center;
					margin-left: 10px;
					i {
						margin-top: 1.25px;
						font-size: 14px !important;
					}
				}
			}
		}
		&__list {
			display: flex;
			flex-wrap: wrap;
			justify-content: flex-end;
		}
	}
</style>
