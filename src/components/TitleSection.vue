<template>
<div class="title-section  d-flex  justify-center align-center">
    <h1
		class="title-section__title"
		data-aos="fade-down"
		data-aos-offset="1"
		data-aos-delay="50"
		data-aos-duration="1000"
		data-aos-once="true"
		>
		{{title}}
	</h1>
	<div class="title-section__devider">
		<Devider color="yellow" size="small" />
	</div>
</div>
  
</template>

<script>
import Devider from './Devider'
export default {
    name : 'TitleSection',
    props : {
        title : String,
    },
    components : {
        Devider
    }

}
</script>

<style lang="scss">
    .title-section{
        width: auto;
        flex-direction: column;
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