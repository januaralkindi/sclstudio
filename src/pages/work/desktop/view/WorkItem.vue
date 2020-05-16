<template>
	<div class="work-item">
		<img :src="image" class="work-item__img" />
		<div class="work-item__detail work-detail">
			<div class="work-detail__button">
				<v-btn class="detail-button" color=" tcl-yellow darken-2">
					{{title}}
				</v-btn>
			</div>
			<div class="work-detail__actions work-actions">
				<div class="work-actions__search">
					<v-icon medium>fas fa-search</v-icon>
				</div>
				<div class="work-actions__detail">
					<v-icon medium>far fa-edit</v-icon>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
        name: "WorkItem",
        props : {
            title : {
                type :String 
            },
            image : {
                type : String
            }
        },
	};
</script>

<style lang="scss" scoped>
	.work-item {
		width: 100%;
		// display: relative;
        min-height: 500px;
		position: relative;

		&__img {
			width: 100%;
			height: 100%;
		}

		&__detail {
			position: absolute;
			width: 100%;
			height: 100%;
			top: 0;
			left: 0;
			background: rgba(0, 0, 0, 0.5);
			display: flex;
		}
	}

	.work-detail {
		display: flex;
		padding: 30px;
		justify-content: space-between;
		align-items: flex-end;

		&__button {
			.detail-button {
				cursor: pointer;
				font-style: normal;
				font-weight: 600;
				font-size: 20px;
				line-height: 30px;
				letter-spacing: 0.005em;
				padding: 0 28px !important;
			}
		}

		&__actions {
			display: flex;
			div {
				cursor: pointer;
				width: 48px;
				height: 48px;
				background: #ffffff;
				margin-left: 16px;
				display: flex;
				justify-content: center;
				align-items: center;
			}
		}
	}
</style>
