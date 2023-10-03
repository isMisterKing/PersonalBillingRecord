<template>
	<!-- 头部 -->
	<view class="home-head">
		<view class="head-left">logo</view>
		<view class="head-title">个人记账</view>
		<view class="head-right">
			<view class="iconfont" :class="currentTimeStyle" @click="openCalendar"></view>
			<view class="iconfont icon-sousuo"></view>
		</view>
	</view>
	<!-- 卡片 -->
	<swiper class="home-swiper">
		<swiper-item v-for="item in cardList" :key="item.index">
			<view class="swiper-card">
				<view class="card-title">{{ item.title }}</view>
				<view class="card-content">
					<view class="content-label">总支出</view>
					<view class="content-money" v-if="isShowDetail">￥{{ item.totalExpenditure }}</view>
					<view class="content-money" v-else>￥*****</view>
				</view>
				<view class="card-detail">
					<view class="detail-item" v-for="(i, index) in item.detailList" :key="index">
						<span>{{ i.label }}：</span>
						<span v-if="isShowDetail">{{ i.value }}</span>
						<span v-else>*****</span>
					</view>
				</view>
				<view class="card-icon" @click="changeDetail">
					<view class="iconfont" :class="isShowDetail ? 'icon-yanjing' : 'icon-yanjing1'"></view>
				</view>
			</view>
		</swiper-item>
	</swiper>
	<!-- 菜单 -->
	<view class="home-nav">
		<view class="nav-item" v-for="(item, index) in nvaList" :key="index">
			<img :src="`../../static/icon/${item.iconPath}`">
			<span>{{ item.label }}</span>
		</view>
	</view>
	<!-- 提示 -->
	<view class="home-tips" ref="homeTips">
		<view class="tips-left">
			<view class="tips-text">
				<span>本月预算剩余：60%</span>
				<span>每日可消费：￥320.30</span>
			</view>
			<view class="tips-line">
				<view class="line-select"></view>
			</view>
		</view>
		<view class="tips-right">
			<i class="iconfont icon-youjiantou1"></i>
		</view>
	</view>
	<!-- 记录 -->
	<view class="home-record card">
		<view class="record-head">
			<view class="record-head-label">
				<span>收支记录</span>
			</view>
			<view class="record-head-right">
				<i class="iconfont icon-youjiantou1"></i>
			</view>
		</view>
		<scroll-view class="record-list" scroll-y="true" scroll-top="100">
			<record-item v-for="item in recordList" :option="item"></record-item>
		</scroll-view>
	</view>
</template>

<script>
	import * as OPTION from '../../src/common/option.js'
	import recordItem from '../../src/components/recordItem.vue'
	
	export default {
		components: {
			recordItem
		},
		data() {
			return {
				isShowDetail: true,
				recordList: OPTION.recordList,
				nvaList: OPTION.nvaList,
				cardList: OPTION.cardList,
			}
		},
		computed: {
			currentTimeStyle () {
				const timer = new Date().getDate()
				console.log(timer);
				return `icon-rili${timer}`
			}
		},
		onLoad() {
			this.$nextTick(() => {
				const dom = document.querySelector('.home-tips')
				dom.style.setProperty('--home-tip-line', '60%')
			})
		},
		onShow () {
			
		},
		methods: {
			changeDetail () {
				this.isShowDetail = !this.isShowDetail
			},
			openCalendar () {
				uni.navigateTo({
					url: '/pages/calendar/calendar?name=wangkai&age=18'
				})
			}
		}
	}
</script>

<style lang="less">
	.home-head {
		height: 100rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		.head-left {
			margin-left: 20rpx;
		}
		.head-right {
			margin-right: 20rpx;
			display: flex;
			align-items: center;
			.icon-sousuo {
				margin-left: 10rpx;
			}
		}
	}
	.home-swiper {
		height: 360rpx;
	}
	.swiper-card {
		height: 100%;
		border-radius: 30rpx;
		background-color: var(--default-color);
		box-sizing: border-box;
		padding: 28rpx;
		position: relative;
		.card-title,
		.content-label,
		.card-detail {
			font-size: 14rpx;
		}
		.card-title {
			margin-bottom: 56rpx;
		}
		.card-content {
			margin-bottom: 30rpx;
			.content-money {
				font-size: 60rpx;
			}
		}
		.card-icon {
			position: absolute;
			top: 26rpx;
			right: 26rpx;
		}
	}
	.home-nav {
		display: flex;
		margin: 30rpx 0;
		justify-content: space-around;
		font-size: 14rpx;
		.nav-item {
			display: flex;
			flex-direction: column;
			align-items: center;
			img {
				width: 60rpx;
			}
		}
	}
	.home-tips {
		height: 140rpx;
		border-radius: 30rpx;
		background-color: var(--default-background-color);
		box-sizing: border-box;
		margin-bottom: 30rpx;
		padding: 28rpx;
		font-size: 12rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		.tips-left {
			flex-grow: 1;
			margin-right: 40rpx;
			.tips-text {
				margin-bottom: 16rpx;
			}
			.tips-line {
				height: 10rpx;
				background-color: #FFF;
				position: relative;
				border-radius: 100rpx;
				.line-select {
					width: var(--home-tip-line);
					height: 100%;
					background-color: var(--default-color);
					position: absolute;
					border-radius: 100rpx;
				}
			}
		}
		.tips-right {
			width: 46rpx;
		}
	}
	.home-record {
		background-color: #FDFDFD;
		.record-head {
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
		.record-list {
			height: 600rpx;
		}
	}
</style>
