<template>
	<div class="content-sanmaru">
		<h1>Sanmaru Apps</h1>
		<p>
			Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
			tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
			veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
			commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
			velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
			cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
			est laborum.
		</p>
		<p>
			It is a long established fact that a reader will be distracted by the
			readable content of a page when looking at its layout. The point of using
			Lorem Ipsum is that it has a more-or-less normal distribution of letters,
			as opposed to using 'Content here, content here', making it look like
			readable English. Many desktop publishing packages and web page editors
			now use Lorem Ipsum as their default model text, and a search for 'lorem
			ipsum' will uncover many web sites still in their infancy. Various
			versions have evolved over the years, sometimes by accident, sometimes on
			purpose.
		</p>
		<img :src="content_sanmaru" />
		<p>
			There are many variations of passages of Lorem Ipsum available, but the
			majority have suffered alteration in some form, by injected humour, or
			randomised words which don't look even slightly believable. If you are
			going to use a passage of Lorem Ipsum, you need to be sure there isn't
			anything embarrassing hidden in the middle of text.
		</p>
		<p>
			All the Lorem Ipsum generators on the Internet tend to repeat predefined
			chunks as necessary, making this the first true generator on the Internet.
			It uses a dictionary of over 200 Latin words, combined with a handful of
			model sentence structures, to generate Lorem Ipsum which looks reasonable.
			The generated Lorem Ipsum is therefore always free from repetition,
			injected humour, or non-characteristic words etc.
		</p>
		<div class="content-sanmaru__store">
			<div>
				<img :src="appstore" />
				<img :src="playstore" />
			</div>
		</div>
	</div>
</template>

<script>
	import { appstore, playstore, content_sanmaru } from "@/assets/image/image";

	export default {
		name: "BannerOurs",
		props: {
			title: {
				type: String,
				default: "",
			},
			subTitle: {
				type: String,
				default: "",
			},
			image: String,
		},
		data: () => {
			return {
				appstore,
				playstore,
				content_sanmaru,
			};
		},
	};
</script>

<style lang="scss" scope>
	.content-sanmaru {
		margin-top: 128px;
		padding: 0 15%;
		h1 {
			font-style: normal;
			font-weight: bold;
			font-size: 32px;
			line-height: 39px;
			letter-spacing: 0.5px;
			color: #000000;
			margin-bottom: 24px;
		}
		p {
			font-style: normal;
			font-weight: normal;
			font-size: 14px;
			line-height: 24px;
			/* or 171% */

			letter-spacing: 0.5px;

			color: #989898;
		}
		img {
			margin: 24px 0px;
			width: 100%;
		}
		&__store {
			display: flex;
			justify-content: center;
			align-items: center;
			div {
				display: flex;
				justify-content: center;
				align-items: center;
				width: 16%;
			}
		}
	}
</style>
