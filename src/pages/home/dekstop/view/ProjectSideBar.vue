<template>
	<div class="project-sidebar">
		<ul class="project-sidebar__menu sidebar-menu">
			<li
				class="sidebar-menu__item sidebar-item"
				v-for="(item, index) in itemMenu"
				:key="index"
				data-aos="fade-right"
				data-aos-offset="1"
				:data-aos-delay="50 + (index * 100)"
				:data-aos-duration="1000 + (index * 20)"
			>
				{{item}}
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: "ProjectSiderBar",
		data() {
			return {
				itemMenu: [
					"All",
					"Branding",
					"Web Design",
					"Photography",
					"Templates",
					"Apps",
					"Other",
				],
			};
		},
	};
</script>

<style lang="scss">
	@import "~@/assets/style/variable/color";

	.project-sidebar {
		width: 180px;
		margin: 28px 0px 0px 20px;
		ul {
			list-style: none;
			li {
				margin: 16px 0px 16px 0px;
				width: auto;
				float: left;
				clear: left;
				&:hover {
					border-bottom: 2px solid $scl_yellow;
				}
			}
		}
	}
</style>
