<template>
	<view class="container">
		<view class="header">
			<image src="https://img-shop.qmimg.cn/s23107/2020/04/26/3eb7808bf105262604.jpg" mode="" class="bg"></image>
			<view class="title">您好，游客</view>
			<view class="dec">一杯奶茶，一口软欧包，在奈雪遇见两种美好</view>
		</view>
		<view class="content">
			<view class="toolbar">
				<view class="item">
					<image src="/static/images/index/zq.png" class="icon"></image>
					<view class="dec">自取</view>
				</view>
				<view class="item">
					<image src="/static/images/index/wm.png" class="icon"></image>
					<view class="dec">外卖</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello22'
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	.container{
		.header{
			position: relative;
			width: 100%;
			height: 600rpx;
			padding-top: calc(50rpx + var(--status-bar-height));
			padding-left: 40rpx;
			color: #FFFFFF;
			.bg{
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 600rpx;
				z-index: -1;
			}
			.title{
				font-size: $uni-font-size-lg;
				margin-bottom: 10rpx;
			}
			.dec{
				font-size: $uni-font-size-sm;
			}
			
		}
	}
	
	.content{
		padding: 0 30rpx;
	}
	.toolbar{
		border-radius: 10rpx;
		background-color: #ffffff;
		box-shadow: $box-shadow;
		padding: 30rpx 0;
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;
		top: -80rpx;
		.item{
			flex: 1;
			display: flex;
			flex-direction: column;
			align-items: center;
			.icon{
				width: 84rpx;
				height: 84rpx;
				margin: 20rpx 0;
			}
			.dec{
				font-size: 30rpx;
				color: $text-color-base;
				font-weight: 600;
			}
		}
	}
</style>
