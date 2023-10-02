<template>
	<view class="title">
		<view class="tab">
			<span
				v-for="(item, index) in ['支出', '收入']"
				:class="{ active: isActive == index }"
				@click="isActive = index"
			>
				{{ item }}
			</span>
		</view>
		<i class="iconfont icon-chahao"></i>
	</view>
	<view class="calendar card">
		<uni-calendar lunar="" @change=""></uni-calendar>
	</view>
	<view class="record card">
		<scroll-view class="record-list" scroll-y="true" scroll-top="100">
			<record-item v-for="item in recordList" :option="item"></record-item>
		</scroll-view>
	</view>
</template>

<script>
	import * as OPTION from '../../global/option.js'
	import recordItem from '../../components/recordItem.vue'
	
	export default {
		components: {
			recordItem
		},
		data() {
			return {
				isActive: 0,
				recordList: OPTION.recordList,
			}
		},
		methods: {
			
		},
		onLoad (option) {
			console.log(option);
		}
	}
</script>

<style lang="less">
	page {
		background-color: #f8f8f8;
		height: 100%;
	}
	.title {
		display: flex;
		justify-content: center;
		position: relative;
		margin-bottom: 30rpx;
		.tab {
			background-color: #f4f4f4;
			display: flex;
			justify-content: space-around;
			align-items: center;
			padding: 10rpx;
			font-size: 30rpx;
			border-radius: 10rpx;
			span {
				padding: 10rpx 30rpx;
				border-radius: 10rpx;
				color: var(--font-assist-color);
			}
			.active {
				background-color: #FFF;
				font-weight: 700;
				color: var(--font-title-color);
			}
		}
		i {
			position: absolute;
			top: 50%;
			left: 0;
			transform: translateY(-50%);
		}
	}
	.calendar {
		height: 600rpx;
		background-color: #FFF;
	}
	.record {
		margin-top: 30rpx;
		height: 600rpx;
		background-color: #FFF;
		&-list {
			height: 100%;
		}
	}
</style>
