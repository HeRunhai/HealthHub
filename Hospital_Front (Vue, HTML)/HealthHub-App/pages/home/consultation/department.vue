<template>
	<div>
		<view class="container container18437">
			<view class="diygw-col-24">
				<view class="diygw-search">
					<view class="flex1 align-center flex padding-xs solid radius">
						<text style="color: #555 !important" class="diy-icon-apps"></text>
						<input class="flex1" name="search1" type="" v-model="search1"
							placeholder="Input Doctor/Department name for searching" />
					</view>
					<text style="color: #333 !important" class="diy-icon-search margin-left-xs"></text>
				</view>
			</view>
			<view class="flex diygw-col-24">
				<view class="diygw-pzx" style="border-bottom: 1px solid #eee"></view>
			</view>
			<view class="flex flex-wrap diygw-col-24 justify-around diygw-bottom flex-clz">
				<view class="flex flex-wrap diygw-col-0 flex-direction-column items-center flex2-clz" @tap="navigateTo"
					data-type="page" data-url="/pages/home/home">
					<text class="flex icon1 diygw-col-0 icon1-clz diy-icon-home"></text>
					<view class="diygw-col-0"> Home </view>
				</view>
				<view class="flex flex-wrap diygw-col-0 flex-direction-column items-center flex1-clz" @tap="navigateTo"
					data-type="page" data-url="/pages/message/messages">
					<view class="diygw-col-0 text2-clz"> 10 </view>
					<text class="flex icon2 diygw-col-0 icon2-clz diy-icon-community"></text>
					<view class="diygw-col-0"> Consultations </view>
				</view>
				<view class="flex flex-wrap diygw-col-0 flex-direction-column items-center flex6-clz" @tap="navigateTo"
					data-type="page" data-url="/pages/records/records">
					<text class="flex icon diygw-col-0 icon-clz diy-icon-message"></text>
					<view class="diygw-col-0"> Records </view>
				</view>
				<view class="flex flex-wrap diygw-col-0 flex-direction-column items-center flex7-clz" @tap="navigateTo"
					data-type="page" data-url="/pages/me/me">
					<text class="flex icon4 diygw-col-0 icon4-clz diy-icon-people"></text>
					<view class="diygw-col-0"> Me </view>
				</view>
			</view>
			<view class="flex diygw-col-24">
				<view class="diygw-list">

					<view v-for="item in list">
						<view @tap="navigateTo(item.name)" data-type="page" data-url="/pages/home/appointment/doctors_list" data-department="emergency department" style="" class="diygw-item col-100 row arrow solid-bottom diygw-card diygw-shadow">
							<view class="diygw-avatar">
								<image mode="aspectFit" class="diygw-avatar-img" :src=item.avatar></image>
							</view>
							<view class="content">
								<view class="title" style="font-weight: 700; font-size: 15px;"> {{item.name}} </view>
								<view class="text-sm remark" style="font-size: 10px;"> {{item.description}} </view>
							</view>
						</view>
					</view>

				</view>
			</view>
			<view class="clearfix"></view>
		</view>
	</div>
</template>

<script>
	import server from '@/common/Global.js'
	export default {
		data() {
			return {
				list: [],
				//用户全局信息
				userInfo: {},
				//页面传参
				globalOption: {},
				//自定义全局变量
				globalData: {},
				search1: ''
			};
		},
		onShow() {
			this.setCurrentPage(this);
		},
		onLoad(option) {
			this.setCurrentPage(this);
			if (option) {
				this.setData({
					globalOption: this.getOption(option)
				});
			}
			let account = sessionStorage.getItem("account")
			sessionStorage.setItem('type',"Appointment")
			if (account != null) {
				// 将JSON格式的对象解析为js对象，currentAuth为一个js对象
				this.currentAccount = JSON.parse(account);
			}
			this.init();
		},
		methods: {
			async init() {
				fetch(`${server.site_add}/doctor/departments?authorization=patient`)
					.then(res => res.json())
					.then(res => {
						this.list = res
					})
			},
			navigateTo(name){
				let department = sessionStorage.setItem('department',JSON.stringify(name))
				uni.navigateTo({
					url:"/pages/home/consultation/doctors_list"
				})
			}
		}
	};
</script>

<style lang="scss" scoped>
	.text-sm{
		
	}
	.flex-clz {
		padding-top: 2px;
		box-shadow: 0px 1px 4px 2px rgba(31, 31, 31, 0.16);
		overflow: visible;
		left: 0px;
		bottom: 0px;
		padding-left: 2px;
		padding-bottom: 2px;
		padding-right: 2px;
	}

	.flex2-clz {
		flex-shrink: 0;
		width: 70px !important;
	}

	.icon1-clz {
		color: #767272;
	}

	.icon1 {
		font-size: 32px;
	}

	.flex1-clz {
		flex-shrink: 0;
		width: 82px !important;
	}

	.text2-clz {
		padding-top: 2px;
		border-bottom-left-radius: 60px;
		z-index: 1;
		color: #ffffff;
		padding-left: 3px;
		font-size: 10rpx !important;
		padding-bottom: 2px;
		border-top-right-radius: 60px;
		right: -5px;
		background-color: #ff0000;
		overflow: hidden;
		top: -5px;
		border-top-left-radius: 60px;
		border-bottom-right-radius: 60px;
		position: absolute;
		padding-right: 3px;
	}

	.icon2-clz {
		color: #767272;
	}

	.icon2 {
		font-size: 32px;
	}

	.flex6-clz {
		flex-shrink: 0;
		width: 70px !important;
	}

	.icon-clz {
		color: #767272;
	}

	.icon {
		font-size: 32px;
	}

	.flex7-clz {
		flex-shrink: 0;
		width: 70px !important;
	}

	.icon4-clz {
		color: #767272;
	}

	.icon4 {
		font-size: 32px;
	}

	.container18437 {
		padding-left: 0px;
		padding-right: 0px;

		font-size: 14px;
	}

	.container18437 {}
</style>
