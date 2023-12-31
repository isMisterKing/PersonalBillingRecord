export const recordList = [
	{
		icon: 'icon-canyin',
		label: '餐饮',
		date: '09/26',
		type: '微信钱包',
		money: '310.00'
	},
	{
		icon: 'icon-airplane',
		label: '旅游',
		date: '09/26',
		type: '微信钱包',
		money: '666.00'
	},
	{
		icon: 'icon-clothes',
		label: '服装',
		date: '09/26',
		type: '微信钱包',
		money: '210.00'
	},
	{
		icon: 'icon-shuiguo',
		label: '水果',
		date: '09/26',
		type: '微信钱包',
		money: '310.00'
	},
	{
		icon: 'icon-paperroll',
		label: '日用品',
		date: '09/26',
		type: '微信钱包',
		money: '310.00'
	},
	{
		icon: 'icon-hzp',
		label: '化妆品',
		date: '09/26',
		type: '微信钱包',
		money: '310.00'
	},
	{
		icon: 'icon-canyin',
		label: '餐饮',
		date: '09/26',
		type: '微信钱包',
		money: '310.00'
	},
	{
		icon: 'icon-canyin',
		label: '餐饮',
		date: '09/26',
		type: '微信钱包',
		money: '310.00'
	},
	{
		icon: 'icon-canyin',
		label: '餐饮',
		date: '09/26',
		type: '微信钱包',
		money: '310.00'
	},
	{
		icon: 'icon-canyin',
		label: '餐饮',
		date: '09/26',
		type: '微信钱包',
		money: '310.00'
	},
	{
		icon: 'icon-canyin',
		label: '餐饮',
		date: '09/26',
		type: '微信钱包',
		money: '310.00'
	},
]

export const nvaList = [
	{
		label: '账单',
		iconPath: 'ic_sk_course_bought_icon_pressed.png'
	},
	{
		label: '资产',
		iconPath: 'ic_sk_course_home_icon_pressed.png'
	},
	{
		label: '返现',
		iconPath: 'ic_sk_course_mine_icon_pressed.png'
	},
	{
		label: '更多',
		iconPath: 'ic_sk_course_bought_icon_pressed.png'
	},
]

export const cardList = [
	{
		index: '01',
		title: '本月收支统计',
		totalExpenditure: '1260.00',
		detailList: [
			{
				label: '收入',
				value: '2000.00'
			},
			{
				label: '结余',
				value: '2500.00'
			},
		]
	},
	{
		index: '02',
		title: '本月收支统计',
		totalExpenditure: '1260.00',
		detailList: [
			{
				label: '收入',
				value: '2000.00'
			},
			{
				label: '结余',
				value: '2500.00'
			},
		]
	}
]

export const chartOpt = {
	tooltip: {
		trigger: 'item'
	},
	series: [
		{
			name: 'Access From',
			type: 'pie',
			radius: ['40%', '70%'],
			avoidLabelOverlap: false,
			itemStyle: {
				borderRadius: 10,
				borderColor: '#fff',
				borderWidth: 2
			},
			label: {
				show: true,
				position: 'center'
			},
			emphasis: {
				label: {
				  show: true,
				  fontSize: 40,
				  fontWeight: 'bold'
				}
			},
			labelLine: {
				show: false
			},
			data: [
				{ value: 1048, name: 'Search Engine' },
				{ value: 735, name: 'Direct' },
				{ value: 580, name: 'Email' },
				{ value: 484, name: 'Union Ads' },
				{ value: 300, name: 'Video Ads' }
			]
		}
	]
}