<template>
	<view class="chart-tab">
		<tab-change :list="tabList" @change="changeTab"></tab-change>
	</view>
	<view class="chart-date">
		<uni-calendar></uni-calendar>
	</view>
	<view class="chart-content card">
		<view class="content-head">
			<span
				:class="{ select: select === index }"
				v-for="(item, index) in ['支出', '收入']"
				@click="select = index"
			>
				{{ item }}
			</span>
		</view>
		<view class="content-charts">
			<e-charts :option="chartOpt"></e-charts>
		</view>
		<view class="content-record"></view>
	</view>
</template>

<script>
	import tabChange from '../../src/components/tabChange.vue'
	import eCharts from '../../src/components/ECharts/index.vue'
	import * as OPTION from '../../src/common/option.js'
	
	export default {
		components: {
			tabChange,
			eCharts
		},
		data() {
			return {
				tabList: [
					{
						label: '周',
						value: 'week'
					},
					{
						label: '月',
						value: 'month'
					},
					{
						label: '年',
						value: 'year'
					},
				],
				select: 0,
				chartOpt: OPTION.chartOpt
			}
		},
		methods: {
			
		},
		onLoad () {
			
		}
	}
</script>

<style lang="less">
	page {
		background-image: none;
		background-color: #fafafa;
	}
	.chart-tab {
		display: flex;
		justify-content: center;
	}
	.chart-content {
		height: 600rpx;
		background-color: #fff;
		display: flex;
		flex-direction: column;
		.content-head {
			font-size: 28rpx;
			color: var(--font-assist-color);
			display: flex;
			justify-content: space-around;
			margin-bottom: 50rpx;
			.select {
				font-weight: 700;
				position: relative;
				color: var(--font-title-color);
				&::after {
					content: '';
					display: block;
					width: 50%;
					height: 4rpx;
					background-color: red;
					position: absolute;
					bottom: -8rpx;
					left: 25%;
				}
			}
		}
		.content-charts {
			flex-grow: 1;
		}
	}
	
</style>
