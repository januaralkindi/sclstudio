<template>
	<div class="product-menu">
		<ul class="product-menu__menu product-menu-bar">
			<li
				class="product-menu-bar__item sidebar-item"
				v-for="(item, index) in itemMenuCategories"
				:key="index"
				data-aos="fade-up"
				data-aos-offset="1"
				:data-aos-delay="50 + index * 100"
				:data-aos-duration="1000 + index * 20"
				data-aos-once="true"
			>
				{{ item }}
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
        name: "ProjectSiderBar",
        props : {
            itemMenuCategories : {
                type : Array,
                default : () => ([])
            }
        },
		data() {
			return {
				// itemMenu: [
				// 	"All",
				// 	"Branding",
				// 	"Web Design",
				// 	"Photography",
				// 	"Templates",
				// 	"Apps",
				// 	"Other",
				// ],
			};
		},
	};
</script>

<style lang="scss">
	@import "~@/assets/style/variable/color";

	.product-menu {
		width: 100%;
		margin: 28px 0px 0px 20px;
		ul {
			list-style: none;
			display: flex;
			justify-content: center;
			li {
				margin: 16px 20px 16px 20px;
				font-style: normal;
				font-weight: 500;
				font-size: 14px;
				line-height: 21px;
				letter-spacing: 0.5px;
				text-transform: uppercase;

				color: #121212;
				&:hover {
					border-bottom: 2px solid $scl_yellow;
                    margin-bottom: 14px!important;
				}
			}
		}
	}
</style>
