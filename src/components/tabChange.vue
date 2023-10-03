<template>
	<view class="tab">
		<span
			v-for="(item, index) in list"
			:class="{ active: isActive === index }"
			@click="change(item, index)"
		>
			{{ item.label }}
		</span>
	</view>
</template>

<script>
	export default {
		props: {
			list: Array,
		},
		data () {
			return {
				isActive: 0
			}
		},
		methods: {
			change (item, index) {
				this.isActive = index
				let value = item.value
				if (!value) {
					value = index
				}
				this.$emit('change', value)
			}
		}
	}
</script>

<style lang="less">
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
</style>