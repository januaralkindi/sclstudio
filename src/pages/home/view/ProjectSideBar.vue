<template>
	<div class="project-sidebar">
		<ul class="project-sidebar__menu sidebar-menu">
			<li class="sidebar-menu__item sidebar-item--selected">
					All
			</li>
			<li class="sidebar-menu__item">
					Branding
			</li>
			<li class="sidebar-menu__item">
					Web Design
			</li>
			<li class="sidebar-menu__item">
									Photography
			</li>
			<li class="sidebar-menu__item">
					Templates
			</li>
			<li class="sidebar-menu__item">
					Apps
			</li>
			<li class="sidebar-menu__item">
					Other
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: "ProjectSiderBar",
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
                &:hover{
                    border-bottom:2px solid $scl_yellow;
                }
        
			}
		}
	}
</style>
