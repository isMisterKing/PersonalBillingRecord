<template>
	<view class="list-group card">
		<!-- 列表的名称 -->
		<view class="group-head">
			<view class="group-head-label">
				<span>{{ label }}</span>
			</view>
			<view class="group-head-right" @click="$emit('clickHeader')">
				<i class="iconfont icon-youjiantou1"></i>
			</view>
		</view>
		<!-- 列表的内容 -->
		<scroll-view class="group-list" scroll-y="true" scroll-top="100">
			<!-- 列表项 -->
			<slot></slot>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		props: {
			label: String
		}
	}
</script>

<style lang="less">
	.list-group {
		margin: 0 50rpx;
		background-color: #FDFDFD;
		.group-head {
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin-bottom: 30rpx;
			&-label {
				font-weight: 700;
				font-size: 28rpx;
			}
			&-right {
				width: 46rpx;
			}
		}
		.group-list {
			height: 600rpx;
		}
	}
</style>