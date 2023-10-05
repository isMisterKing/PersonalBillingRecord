<template>
	<div id="echarts" ref="echarts" style="width: 100%; height: 100%;"></div>
</template>

<script>
	import * as echarts from 'echarts'
	export default {
		props: {
			option: Object
		},
		mounted () {
			this.initCharts()
		},
		methods: {
			initCharts () {
				const dom = this.$refs.echarts
				const myChart = echarts.init(dom)
				myChart.setOption(this.option)
			},
		}
	}
</script>

<style>
</style>