<template>
	<view class="record-list-item">
		<view class="item-left">
			<view class="item-icon">
				<i class="iconfont" :class="option.icon"></i>
			</view>
			<view class="item-title">
				<span class="item-title-label">{{ option.label }}</span>
				<span class="item-title-date">{{ option.date }}</span>
			</view>
		</view>
		<view class="item-right">
			<span class="item-right-money">￥{{ option.money }}</span>
			<span class="item-right-type">{{ option.type }}</span>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			 option: Object
		}
	}
</script>

<style lang="less">
	.record-list-item {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-top: 30rpx;
		.item-left {
			display: flex;
			align-items: center;
			.item-icon {
				width: 80rpx;
				height: 80rpx;
				background-color: var(--default-background-color);
				margin-right: 20rpx;
				border-radius: 10rpx;
				text-align: center;
				line-height: 80rpx;
				i {
					font-size: 50rpx;
					font-weight: 700;
				}
			}
			.item-title {
				display: flex;
				flex-direction: column;
				&-label {
					font-size: 28rpx;
					font-weight: 700;
				}
				&-date {
					font-size: 18rpx;
					color: #A7A7A7;
				}
			}
		}
		.item-right {
			display: flex;
			flex-direction: column;
			align-items: flex-end;
			&-money {
				font-size: 28rpx;
				font-weight: 700;
			}
			&-type {
				font-size: 18rpx;
				color: #A7A7A7;
			}
		}
	}
</style>