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
			<!--积分信息-->
			<view class="jifen_info">
				<view class="top">我的积分<text class="val">2233</text></view>
				<view class="bottom">
					进入积分商城兑换奈雪卷和周边礼品
					<view class="iconfont iconarrow-right"></view>
				</view>
				<view class="qrcode_box">
					<image src="/static/images/index/qrcode.png"></image>
					<text class="dec">会员码</text>
				</view>
			</view>
			<!--卡券商城入口-->
			<view class="navigators">
				<view class="left">
					<view class="grid flex-column just-content-center">
						<view class="d-flex align-items-center">
							<image src="/static/images/index/csc.png" class="mark-img"></image>
							<view class="font-size-sm text-color-base">奈雪的茶商城</view>
						</view>
						<view class="text-color-assist" style="margin-left: 40rpx; font-size: 20rpx;">优质茶礼盒，网红零食</view>
					</view>
					<view class="grid justify-content-end align-items-end">
						<image src="/static/images/index/yzclh.png" class="yzclh-img" mode="heightFix"></image>
					</view>
				</view>
				<view class="right">
					<view class="tea-activity">
						<image src="/static/images/index/mcsb.png" class="mark-img"></image>
						<view>买茶送包</view>
						<view class="right-img">
							<image src="/static/images/index/mcsb_bg.png" mode="widthFix"></image>
						</view>
					</view>
					<view class="member-gifts">
						<image src="/static/images/index/hyjb.png" class="mark-img"></image>
						<view>会员劵包</view>
						<view class="right-img">
							<image src="/static/images/index/hyjb_bg.png" mode="widthFix"></image>
						</view>
					</view>
				</view>
			</view>
			
			<view class="member-news">
				<view class="header">
					<view class="title">会员新鲜事</view>
					<view class="iconfont iconRightbutton"></view>
				</view>
				<view class="list">
					<view class="item">
						<image src="https://img-shop.qmimg.cn/s23107/2020/04/27/0039bf41c9ebd50a2c.jpg"></image>
						<view class="title">"梅"你不行 | 霸气杨梅清爽回归</view>
					</view>
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
		&>.header{
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
				font-size: $font-size-lg;
				margin-bottom: 10rpx;
			}
			.dec{
				font-size: $font-size-sm;
			}
			
		}
	}
	
	.content{
		padding: 0 30rpx;
		position: relative;
		top: -80rpx;
	}
	.toolbar{
		border-radius: 10rpx;
		background-color: #ffffff;
		box-shadow: $box-shadow;
		padding: 30rpx 0;
		display: flex;
		align-items: center;
		justify-content: center;
		
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
	.jifen_info{
		border-radius: 10rpx;
		background-color: #ffffff;
		box-shadow: $box-shadow;
		padding: 30rpx;
		margin: 30rpx 0;
		position: relative;
		.top{
			color: $text-color-base;
			font-size: $font-size-base;
			display: flex;
			align-items: center;
			margin-bottom: 10rpx;
			.val{
				font-size: 44rpx;
				font-weight: bold;
				margin-left: 10rpx;
			}
		}
		.bottom {
			font-size: $font-size-sm;
			color: $text-color-assist;
			display: flex;
			align-items: center;
		}
		.qrcode_box{
			position: absolute;
			top: 0;
			right: 30rpx;
			height: 100%;
			color: $color-primary;
			font-size: $font-size-sm;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			image {
				width: 40rpx;
				height: 40rpx;
				margin-bottom: 10rpx;
			}
		}
	}
	.navigators {
		width: 100%;
		margin-bottom: 20rpx;	
		border-radius: 10rpx;
		background-color: #ffffff;
		box-shadow: $box-shadow;
		padding: 20rpx;
		display: flex;
		align-items: stretch;
		
		.left {
			width: 340rpx;
			margin-right: 20rpx;
			display: flex;
			padding: 0 20rpx;
			flex-direction: column;
			font-size: $font-size-sm;
			color: $text-color-base;
			background-color: #F2F2E6;
			
			.grid {
				height: 50%;
				display: flex;
			}
		}
		
		.right {
			width: 290rpx;
			display: flex;
			flex-direction: column;
			
			.tea-activity, .member-gifts {
				width: 100%;
				display: flex;
				padding: 20rpx;
				font-size: $font-size-sm;
				color: $text-color-base;
				align-items: center;
				position: relative;
			}
			
			.tea-activity {
				background-color: #FDF3F2;
				margin-bottom: 20rpx;
			}
			
			.member-gifts {
				background-color: #FCF6D4;
			}
			
			.right-img {
				flex: 1;
				position: relative;
				margin-left: 20rpx;
				margin-right: -20rpx;
				margin-bottom: -20rpx;
				display: flex;
				align-items: flex-end;
				
				image {
					width: 100%;
				}
			}
		}
		
		.mark-img {
			width: 30rpx;
			height: 30rpx;
			margin-right: 10rpx;
		}
		
		.yzclh-img {
			height: 122.96rpx;
			width: 214.86rpx;
		}
	}
	.member-news {
		width: 100%;
		margin-bottom: 30rpx;
		.header {
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding: 20rpx 0;
			
			.title {
				font-size: $font-size-lg;
				font-weight: bold;
			}
			
			.iconfont {
				font-size: 52rpx;
				color: $text-color-assist;
			}
		}
		
		.list {
			width: 100%;
			display: flex;
			flex-direction: column;
			
			.item {
				width: 100%;
				height: 240rpx;
				position: relative;
				
				image {
					width: 100%;
					height: 100%;
					border-radius: 8rpx;
				}
				
				.title {
					position: relative;
					font-size: 32rpx;
					font-weight: 500;
					width: 100%;
					top: -70rpx;
					left: 16rpx;
					color: #ffffff;
				}
			}
		}
	}
</style>
