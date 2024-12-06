<template>
	<div>
		<view class="status_bar">
			<!-- Header -->
		</view>
		<view class="container container18437">
			<!-- #ifdef H5 -->
			<view class="flex flex-wrap diygw-col-24 flex-direction-column flex17-clz"> </view>
			<!--  #endif -->
			<view class="flex flex-wrap diygw-col-24 flex-direction-column gradual-blue flex-clz">
				<view class="flex flex-wrap diygw-col-24 items-center flex2-clz">
					<image src="/static/icon2_QQ.png" @tap="navigateTo" data-type="page" data-url="/pages/null"
						class="diygw-image diygw-col-0 image1-clz"
						style="height: 50px !important; width: 50px !important" mode="widthFix"></image>
					<view class="flex flex-wrap diygw-col-0 flex-direction-column items-start flex4-clz">
						<view class="flex flex-wrap diygw-col-24 items-baseline flex5-clz">
							<view class="diygw-col-0 text2-clz"> {{userInfo.name}} </view>
							<view class="diygw-col-0 text3-clz"> {{userInfo.phone}} </view>
						</view>
						<view class="flex flex-wrap diygw-col-24 items-baseline flex7-clz">
							<view class="diygw-col-0 text5-clz"> {{userInfo.vip}} </view>
							<view class="diygw-col-0 text7-clz"> {{userInfo.nationality}} </view>
						</view>
					</view>
				</view>
			</view>
			<view class="flex flex-wrap diygw-col-24 flex-direction-column flex1-clz">
				<view class="flex diygw-col-24 items-center flex-nowrap flex3-clz" @tap="navigateTo" data-type="page"
					data-url="/pages/me/mycard/mycard">
					<image src="/static/icon4_fk.png" class="diygw-image diygw-col-0"
						style="height: 30px !important; width: 30px !important" mode="widthFix"></image>
					<view class="diygw-col-0 text-clz"> Personal Information </view>
					<text class="flex icon diygw-col-0 icon-clz diy-icon-right"></text>
				</view>
				<view class="flex diygw-col-24 items-center flex-nowrap flex6-clz" @tap="navigateTo" data-type="page"
					data-url="/pages/me/mycard/mycard">
					<image src="/static/icon1_tz.png" class="diygw-image diygw-col-0"
						style="height: 30px !important; width: 30px !important" mode="widthFix"></image>
					<view class="diygw-col-0 text4-clz"> Official Notice </view>
					<view class="diygw-col-0 text6-clz"> 0 </view>
					<text class="flex icon2 diygw-col-0 icon2-clz diy-icon-right"></text>
				</view>
				<view class="flex diygw-col-24 items-center flex-nowrap flex8-clz" @tap="navigateTo" data-type="page"
					data-url="/pages/me/mycard/mycard">
					<image src="/static/icon1_sz1.png" class="diygw-image diygw-col-0"
						style="height: 30px !important; width: 30px !important" mode="widthFix"></image>
					<view class="diygw-col-0 text8-clz"> My Collections </view>
					<text class="flex icon3 diygw-col-0 icon3-clz diy-icon-right"></text>
				</view>
				<view class="flex diygw-col-24 items-center flex-nowrap flex9-clz" @tap="navigateTo" data-type="page"
					data-url="/pages/me/mycard/mycard">
					<image src="/static/icon1_bj.png" class="diygw-image diygw-col-0"
						style="height: 30px !important; width: 30px !important" mode="widthFix"></image>
					<view class="diygw-col-0 text9-clz"> Site Feedback </view>
					<text class="flex icon4 diygw-col-0 icon4-clz diy-icon-right"></text>
				</view>
				<view class="flex diygw-col-24 items-center flex-nowrap flex10-clz" @tap="navigateTo" data-type="page"
					data-url="/pages/me/mycard/mycard">
					<image src="/static/icon1_kf.png" class="diygw-image diygw-col-0"
						style="height: 30px !important; width: 30px !important" mode="widthFix"></image>
					<view class="diygw-col-0 text11-clz"> Customer Service </view>
					<view class="diygw-col-0 text12-clz"> Available: 9:00-22:00 </view>
					<text class="flex icon5 diygw-col-0 icon5-clz diy-icon-right"></text>
				</view>
				<view class="flex diygw-col-24 items-center flex-nowrap flex11-clz" @tap="navigateTo" data-type="page"
					data-url="/pages/me/setting/setting">
					<image src="/static/icon1_sz11.png" class="diygw-image diygw-col-0"
						style="height: 30px !important; width: 30px !important" mode="widthFix"></image>
					<view class="diygw-col-0 text13-clz">Setting </view>
					<text class="flex icon6 diygw-col-0 icon6-clz diy-icon-right"></text>
				</view>
			</view>
			<view class="flex flex-wrap diygw-col-24 justify-around diygw-bottom flex12-clz">
				<view class="flex flex-wrap diygw-col-0 flex-direction-column items-center flex13-clz" @tap="navigateTo"
					data-type="page" data-url="/pages/home/home">
					<text class="flex icon1 diygw-col-0 icon1-clz diy-icon-home"></text>
					<view class="diygw-col-0"> Home </view>
				</view>
				<view class="flex flex-wrap diygw-col-0 flex-direction-column items-center flex14-clz" @tap="navigateTo"
					data-type="page" data-url="/pages/message/messages">
					<view class="diygw-col-0 text10-clz"> 10 </view>
					<text class="flex icon7 diygw-col-0 icon7-clz diy-icon-community"></text>
					<view class="diygw-col-0"> Consultations </view>
				</view>
				<view class="flex flex-wrap diygw-col-0 flex-direction-column items-center flex15-clz" @tap="navigateTo"
					data-type="page" data-url="/pages/records/records">
					<text class="flex icon8 diygw-col-0 icon8-clz diy-icon-message"></text>
					<view class="diygw-col-0"> Records </view>
				</view>
				<view class="flex flex-wrap diygw-col-0 flex-direction-column items-center flex16-clz">
					<text class="flex icon9 diygw-col-0 icon9-clz diy-icon-people"></text>
					<view class="diygw-col-0"> Me </view>
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
				//用户全局信息
				userInfo: {
					name: '',
					phone: '',
					vip: '',
					nationality: ''
				},
				//页面传参
				globalOption: {},
				//自定义全局变量
				globalData: {}
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
			let account = sessionStorage.getItem('account')
			if (account != null) {
				// 将JSON格式的对象解析为js对象，currentAuth为一个js对象
				this.currentAccount = JSON.parse(account);
			}
			this.init();
		},
		methods: {
			async init() {
				fetch(`${server.site_add}/patient/${this.currentAccount}?authorization=patient`)
					.then(res => res.json())
					.then(res => {
						this.userInfo.name = res.name
						this.userInfo.phone = res.phone
						this.userInfo.nationality = res.nationality
						this.userInfo.vip = (res.vip = 1) ? 'VIP' : 'Common User'
					})
			}
		}
	};
</script>

<style lang="scss" scoped>
	.status_bar {
		height: var(--status-bar-height);
		width: 100%;
		background-color: #87CEFA;
	}

	.flex-clz {
		color: #ffffff;
	}

	.flex2-clz {
		margin-left: 15px;
		width: calc(100% - 15px - 15px) !important;
		margin-top: 30px;
		margin-bottom: 30px;
		margin-right: 15px;
	}

	.image1-clz {
		margin-left: 15px;
		border: 3px solid #f0ba01;
		border-bottom-left-radius: 60px;
		overflow: hidden;
		border-top-left-radius: 60px;
		margin-top: 0px;
		border-top-right-radius: 60px;
		border-bottom-right-radius: 60px;
		margin-bottom: 0px;
		margin-right: 15px;
	}

	.flex4-clz {
		flex: 1;
	}

	.text2-clz {
		font-weight: bold;
		font-size: 14px !important;
	}

	.text3-clz {
		margin-left: 10px;
		font-weight: bold;
		font-size: 14px !important;
		margin-top: 0px;
		margin-bottom: 0px;
		margin-right: 0px;
	}

	.flex7-clz {
		margin-left: 0px;
		width: 100% !important;
		margin-top: 5px;
		margin-bottom: 5px;
		margin-right: 0px;
	}

	.text5-clz {
		background-color: #f0ba01;
		padding-top: 3px;
		border-bottom-left-radius: 0px;
		overflow: hidden;
		padding-left: 10px;
		padding-bottom: 3px;
		border-top-left-radius: 12px;
		border-top-right-radius: 0px;
		border-bottom-right-radius: 0px;
		padding-right: 10px;
	}

	.text7-clz {
		background-color: #5e3b0a;
		padding-top: 3px;
		border-bottom-left-radius: 0px;
		overflow: hidden;
		padding-left: 10px;
		padding-bottom: 3px;
		border-top-left-radius: 0px;
		border-top-right-radius: 0px;
		border-bottom-right-radius: 12px;
		padding-right: 10px;
	}

	.flex3-clz {
		padding-top: 10px;
		padding-left: 10px;
		padding-bottom: 10px;
		border-bottom: 1px solid #e2e2e2;
		padding-right: 10px;
	}

	.text-clz {
		padding-top: 0px;
		flex: 1;
		padding-left: 5px;
		font-size: 16px !important;
		padding-bottom: 0px;
		padding-right: 0px;
	}

	.icon-clz {
		color: #939393;
	}

	.icon {
		font-size: 14px;
	}

	.flex6-clz {
		padding-top: 10px;
		padding-left: 10px;
		padding-bottom: 10px;
		border-bottom: 1px solid #e2e2e2;
		padding-right: 10px;
	}

	.text4-clz {
		padding-top: 0px;
		flex: 1;
		padding-left: 5px;
		font-size: 16px !important;
		padding-bottom: 0px;
		padding-right: 0px;
	}

	.text6-clz {
		color: #fd6b03;
		font-size: 16px !important;
	}

	.icon2-clz {
		color: #939393;
	}

	.icon2 {
		font-size: 14px;
	}

	.flex8-clz {
		padding-top: 10px;
		padding-left: 10px;
		padding-bottom: 10px;
		border-bottom: 1px solid #e2e2e2;
		padding-right: 10px;
	}

	.text8-clz {
		padding-top: 0px;
		flex: 1;
		padding-left: 5px;
		font-size: 16px !important;
		padding-bottom: 0px;
		padding-right: 0px;
	}

	.icon3-clz {
		color: #939393;
	}

	.icon3 {
		font-size: 14px;
	}

	.flex9-clz {
		padding-top: 10px;
		padding-left: 10px;
		padding-bottom: 10px;
		border-bottom: 1px solid #e2e2e2;
		padding-right: 10px;
	}

	.text9-clz {
		padding-top: 0px;
		flex: 1;
		padding-left: 5px;
		font-size: 16px !important;
		padding-bottom: 0px;
		padding-right: 0px;
	}

	.icon4-clz {
		color: #939393;
	}

	.icon4 {
		font-size: 14px;
	}

	.flex10-clz {
		padding-top: 10px;
		padding-left: 10px;
		padding-bottom: 10px;
		border-bottom: 1px solid #e2e2e2;
		padding-right: 10px;
	}

	.text11-clz {
		padding-top: 0px;
		padding-left: 5px;
		font-size: 16px !important;
		padding-bottom: 0px;
		padding-right: 0px;
	}

	.text12-clz {
		padding-top: 0px;
		color: #939393;
		flex: 1;
		padding-left: 5px;
		padding-bottom: 0px;
		text-align: right;
		padding-right: 5px;
	}

	.icon5-clz {
		color: #939393;
	}

	.icon5 {
		font-size: 14px;
	}

	.flex11-clz {
		padding-top: 10px;
		padding-left: 10px;
		padding-bottom: 10px;
		border-bottom: 1px solid #e2e2e2;
		padding-right: 10px;
	}

	.text13-clz {
		padding-top: 0px;
		flex: 1;
		padding-left: 5px;
		font-size: 16px !important;
		padding-bottom: 0px;
		padding-right: 0px;
	}

	.icon6-clz {
		color: #939393;
	}

	.icon6 {
		font-size: 14px;
	}

	.flex12-clz {
		padding-top: 2px;
		box-shadow: 0px 1px 4px 2px rgba(31, 31, 31, 0.16);
		overflow: visible;
		left: 0px;
		bottom: 0px;
		padding-left: 2px;
		padding-bottom: 2px;
		padding-right: 2px;
	}

	.flex13-clz {
		flex-shrink: 0;
		width: 70px !important;
	}

	.icon1-clz {
		color: #767272;
	}

	.icon1 {
		font-size: 32px;
	}

	.flex14-clz {
		flex-shrink: 0;
		width: 82px !important;
	}

	.text10-clz {
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

	.icon7-clz {
		color: #767272;
	}

	.icon7 {
		font-size: 32px;
	}

	.flex15-clz {
		flex-shrink: 0;
		width: 70px !important;
	}

	.icon8-clz {
		color: #767272;
	}

	.icon8 {
		font-size: 32px;
	}

	.flex16-clz {
		flex-shrink: 0;
		width: 70px !important;
	}

	.icon9-clz {
		color: #767272;
	}

	.icon9 {
		font-size: 32px;
	}

	.container18437 {
		padding-left: 0px;
		padding-right: 0px;

		font-size: 14px;
	}

	.container18437 {}
</style>
