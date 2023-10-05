<template>
	<view class="title">
		<tab-change :list="tabList" @change="changeTab"></tab-change>
		<i class="iconfont icon-chahao title-clear"></i>
	</view>
	<view class="calendar card">
		<uni-calendar :lunar="false" @change="clickCalendar" :selected="calendarSelected"></uni-calendar>
	</view>
	<view class="record card">
		<scroll-view class="record-list" scroll-y="true" scroll-top="100">
			<record-item v-for="item in recordList" :option="item"></record-item>
		</scroll-view>
	</view>
</template>

<script>
	import * as OPTION from '../../src/common/option.js'
	import recordItem from '../../src/components/recordItem.vue'
	import tabChange from '../../src/components/tabChange.vue'
	
	export default {
		components: {
			recordItem,
			tabChange
		},
		data() {
			return {
				recordList: OPTION.recordList,
				calendarSelected: [
					{
						date: '2023-10-06',
						info: '0'
					},
					{
						date: '2023-10-07',
						info: '0'
					},
					{
						date: '2023-10-08',
						info: '0'
					},
					{
						date: '2023-10-20',
						info: '0'
					},
				],
				tabList: [
					{
						label: '支出',
						value: '000'
					},
					{
						label: '收入',
						value: '111'
					},
				],
			}
		},
		methods: {
			clickCalendar (val) {
				const obj = {
					date: val.fulldate,
					info: '0'
				}
				this.calendarSelected.push(obj)
				console.log(this.calendarSelected);
			},
			changeTab (val) {
				console.log(val);
			}
		},
		onLoad (option) {
			console.log(option);
		}
	}
</script>

<style lang="less">
	page {
		background-image: unset;
		background-color: var(--background-color);
		height: 100%;
		padding: 0 50rpx;
	}
	.title {
		display: flex;
		justify-content: center;
		position: relative;
		margin-bottom: 30rpx;
		&-clear {
			position: absolute;
			top: 50%;
			left: 0;
			transform: translateY(-50%);
		}
	}
	.calendar {
		height: 800rpx;
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
