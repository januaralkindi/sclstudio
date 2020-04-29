<template>
	<div>
		<v-toolbar class="navbar" flat dense height="64">
			<div class="navbar-content">
				<div class="navbar-logo">
					<img :src="logo" />
				</div>
				<v-spacer></v-spacer>
				<div class="navbar-appIcon">
					<img :src="app_bar_icon" @click.stop="drawer = !drawer" />
				</div>
				<!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->
			</div>
		</v-toolbar>
		<v-navigation-drawer v-model="drawer" absolute temporary>
			<v-list-item>
				<div class="navbar-logo">
					<img :src="logo" />
				</div>

				<v-list-item-content>
					<!-- <v-list-item-title>John Leider</v-list-item-title> -->
				</v-list-item-content>
			</v-list-item>


			<v-list dense>
				<v-list-item v-for="(item, index) in items" :key="index" link>
					<v-list-item-content>
						<v-list-item-title>{{ item }}</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
			</v-list>
		</v-navigation-drawer>
	</div>
</template>

<script>
	import { scl_logo_white, app_bar_icon } from "../assets/image/image";
	export default {
		name: "NavigationBarMobile",
		data() {
			return {
				logo: scl_logo_white,
				app_bar_icon,
				drawer: null,
				items: ["Home", "Services", "Products", "Our Works", "Contact Us"],
			};
		},
	};
</script>

<style lang="scss">
	@import "~@/assets/style/variable/color";

	.navbar {
		width: 100%;
		display: flex;
		padding: 0 0;
		align-items: flex-end;
		position: fixed;
		z-index: 2;
		&-menu {
			flex-grow: 1;
			flex-shrink: 0;
			margin-bottom: 20px;
		}
		&-end {
			justify-content: flex-end;
			margin-left: auto;
			display: flex;
			a {
				display: flex;
				padding: 0 12px;
				font-weight: 600;
				font-size: 16px;
				line-height: 24px;
				color: #121212 !important;
				letter-spacing: 0.5px;
			}

			a:hover {
				color: $scl_orange !important;
			}
		}

		&-item {
			display: flex;
			padding: 0 12px;
			font-weight: 600;
			font-size: 16px;
			line-height: 24px;
			color: #121212;
			letter-spacing: 0.5px;
		}

		&-content {
			display: flex;
			width: 100%;
			align-items: center;
		}
		&-logo {
			width: 69px;
			height: 62px;
			text-align: center;
			display: flex;
			justify-content: center;
			align-items: center;
			padding: 8px;

			background-color: $scl_yellow;
			border-radius: 0px 0px 20px 0px;
			img {
				width: 100%;
			}
		}

		&-appIcon {
			background: #ffffff;
			box-shadow: 0px 4px 10px rgba(98, 98, 98, 0.1);
			border-radius: 4px;
			width: 35px;
			height: 35px;
			display: flex;
			justify-content: center;
			align-items: center;
		}
	}

	.v-toolbar__content {
		width: 100%;
	}
</style>
