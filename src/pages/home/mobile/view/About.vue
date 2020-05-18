<template>
	<div class="about">
		<div
			class="about__item about-item d-flex "
			data-aos="fade-left"
			data-aos-offset="50"
			data-aos-delay="12"
			data-aos-duration="800"
			data-aos-easing="ease-in-out"
		>
			<div class="about-item__icon">
				<div class="circle is-yellow-transparant is-full-width is-full-height ">
					<img :src="ic_news" />
				</div>
			</div>
			<div class="about-item__text">
				<p class="is-bold is-title">We are a creative digital media.</p>
				<p>When you've collected enough</p>
			</div>
			<div class="about-item__icon-left">
				<v-icon>
					fas fa-chevron-right
				</v-icon>
			</div>
		</div>
		<div
			class="about__item about-item d-flex"
			data-aos="fade-left"
			data-aos-offset="50"
			data-aos-delay="12"
			data-aos-duration="1000"
			data-aos-easing="ease-in-out"
		>
			<div class="about-item__icon">
				<div class="circle is-yellow-transparant is-full-width is-full-height ">
					<img :src="ic_paper" />
				</div>
			</div>
			<div class="about-item__text">
				<p class="is-bold is-title">Design & Development</p>
				<p>This is just one of the many</p>
			</div>
			<div class="about-item__icon-left">
				<v-icon>
					fas fa-chevron-right
				</v-icon>
			</div>
		</div>
		<div
			class="about__item about-item d-flex"
			data-aos="fade-left"
			data-aos-offset="50"
			data-aos-delay="12"
			data-aos-duration="1200"
			data-aos-easing="ease-in-out"
		>
			<div class="about-item__icon">
				<div class="circle is-yellow-transparant is-full-width is-full-height ">
					<img :src="ic_lamp" />
				</div>
			</div>
			<div class="about-item__text">
				<p class="is-bold is-title">Being small we can go into details</p>
				<p>make your selection from a range</p>
			</div>
			<div class="about-item__icon-left">
				<v-icon>
					fas fa-chevron-right
				</v-icon>
			</div>
		</div>
	</div>
</template>

<script>
	import { ic_paper, ic_news, ic_lamp } from "@images";
	export default {
		name: "HomeAboutMobile",
		data: () => ({
			ic_paper,
			ic_news,
			ic_lamp,
		}),
	};
</script>

<style lang="scss" scoped>
	.about {
		background: #ffffff;
		box-shadow: 0px 4px 10px rgba(98, 98, 98, 0.1);
		border-radius: 8px;
		width: 92%;
		margin: 16px;
		box-sizing: border-box;
		margin-top: -80px;
	}
	.about-item {
		padding: 16px;
		align-items: center;
		border-bottom: 1px solid #f9f9f9;
		&__icon {
			width: 40px;
			height: 40px;
			margin-right: 20px;
			.circle {
				display: flex;
				justify-content: center;
				align-items: center;
			}
		}
		&__icon-left {
			margin-left: auto;
			order: 2;
			i {
				font-size: 12px;
			}
		}
	}
</style>
