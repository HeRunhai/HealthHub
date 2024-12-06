<template>
	<view class="status_bar">
	<!-- Header -->
	</view>
	<view class="container container18437">
		<!-- #ifdef H5 -->
		<view class="flex flex-wrap diygw-col-24 flex-direction-column flex18-clz"> </view>
		<!--  #endif -->
		<view class="diygw-col-24 search-clz">
			<view class="diygw-search">
				<view class="flex1 align-center flex padding-xs solid radius">
					<text style="color: #555 !important" class="diy-icon-search"></text>
					<input class="flex1" name="search" type="" v-model="search" placeholder="Keywords" />
				</view>
				<image src="/static/icon8_ss.png" class="right-icon margin-left-xs radius"></image>
			</view>
		</view>
		<view class="flex flex-wrap diygw-col-24 flex-direction-column flex12-clz">
			<view class="flex diygw-col-24 items-stretch flex-nowrap flex-clz" @tap="navigateTo" data-type="page" data-url="/pages/message/messages">
				<view class="flex diygw-col-0">
					<view class="diygw-avatar radius-sm bg-none">
						<image mode="aspectFit" class="diygw-avatar-img radius-sm" src="/static/img/Alex.png"></image>
						<view class="diygw-tag badge avatar-badge-0 red"> 1 </view>
					</view>
				</view>
				<view class="flex flex-wrap diygw-col-24 flex-direction-column justify-between items-start flex1-clz">
					<view class="flex diygw-col-24 justify-between items-center flex-nowrap flex2-clz">
						<view class="diygw-col-0 text-clz diygw-ellipsis"> Doctor Alex </view>
						<view class="diygw-col-0"> 12:30 </view>
					</view>
					<view class="flex diygw-col-24 justify-between items-center flex-nowrap flex4-clz">
						<view class="diygw-col-0 text2-clz diygw-ellipsis"> Please check your dignose result </view>
					</view>
				</view>
			</view>
			<view class="flex diygw-col-24 items-stretch flex-nowrap flex8-clz">
				<view class="flex diygw-col-0">
					<view class="diygw-avatar radius-sm bg-none">
						<image mode="aspectFit" class="diygw-avatar-img radius-sm" src="/static/img/Helen.png"></image>
						<view class="diygw-tag badge avatar2-badge-0 red"> 1 </view>
					</view>
				</view>
				<view class="flex flex-wrap diygw-col-24 flex-direction-column justify-between items-start flex9-clz">
					<view class="flex diygw-col-24 justify-between items-center flex-nowrap flex10-clz">
						<view class="diygw-col-0 text6-clz diygw-ellipsis">Doctor Helen </view>
						<view class="diygw-col-0"> 15:30 </view>
					</view>
					<view class="flex diygw-col-24 justify-between items-center flex-nowrap flex11-clz">
						<view class="diygw-col-0 text8-clz diygw-ellipsis"> Hope you have a nice day </view>
					</view>
				</view>
			</view>
			<view class="flex diygw-col-24 items-stretch flex-nowrap flex3-clz">
				<view class="flex diygw-col-0">
					<view class="diygw-avatar radius-sm bg-none">
						<image mode="aspectFit" class="diygw-avatar-img radius-sm" src="/static/img/Alan.png"></image>
						<view class="diygw-tag badge avatar1-badge-0 red"> 1 </view>
					</view>
				</view>
				<view class="flex flex-wrap diygw-col-24 flex-direction-column justify-between items-start flex5-clz">
					<view class="flex diygw-col-24 justify-between items-center flex-nowrap flex6-clz">
						<view class="diygw-col-0 text3-clz diygw-ellipsis">Doctor Alan </view>
						<view class="diygw-col-0"> 9:30 </view>
					</view>
					<view class="flex diygw-col-24 justify-between items-center flex-nowrap flex7-clz">
						<view class="diygw-col-0 text5-clz diygw-ellipsis"> You need more relax </view>
					</view>
				</view>
			</view>
		</view>
		<view class="flex flex-wrap diygw-col-24 justify-around diygw-bottom flex13-clz">
			<view class="flex flex-wrap diygw-col-0 flex-direction-column items-center flex14-clz" @tap="navigateTo" data-type="page" data-url="/pages/home/home">
				<text class="flex icon1 diygw-col-0 icon1-clz diy-icon-home"></text>
				<view class="diygw-col-0"> Home </view>
			</view>
			<view class="flex flex-wrap diygw-col-0 flex-direction-column items-center flex15-clz">
				<view class="diygw-col-0 text10-clz"> 10 </view>
				<text class="flex icon2 diygw-col-0 icon2-clz diy-icon-community"></text>
				<view class="diygw-col-0"> Consultations </view>
			</view>
			<view class="flex flex-wrap diygw-col-0 flex-direction-column items-center flex16-clz" @tap="navigateTo" data-type="page" data-url="/pages/records/records">
				<text class="flex icon diygw-col-0 icon-clz diy-icon-message"></text>
				<view class="diygw-col-0"> Records </view>
			</view>
			<view class="flex flex-wrap diygw-col-0 flex-direction-column items-center flex17-clz" @tap="navigateTo" data-type="page" data-url="/pages/me/me">
				<text class="flex icon4 diygw-col-0 icon4-clz diy-icon-people"></text>
				<view class="diygw-col-0"> Me </view>
			</view>
		</view>
		<view class="clearfix"></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				//用户全局信息
				userInfo: {},
				//页面传参
				globalOption: {},
				//自定义全局变量
				globalData: {},
				search: ''
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

			this.init();
		},
		methods: {
			async init() {}
		}
	};
</script>

<style lang="scss" scoped>
	.status_bar {
	        height: var(--status-bar-height);
	        width: 100%;
			background-color: #87CEFA;
	}
	.search-clz {
		margin-left: 5px;
		width: calc(100% - 5px - 5px) !important;
		font-size: 14px !important;
		margin-top: 10px;
		margin-bottom: 5px;
		margin-right: 5px;
	}
	.flex12-clz {
		margin-left: 5px;
		width: calc(100% - 5px - 5px) !important;
		font-size: 14px !important;
		margin-top: 5px;
		margin-bottom: 5px;
		margin-right: 5px;
	}
	.flex-clz {
		background-color: #ffffff;
		padding-top: 8px;
		padding-left: 8px;
		padding-bottom: 8px;
		padding-right: 8px;
	}
	.avatar-badge-0 {
		padding-left: 0px;
		padding-right: 0px;
		right: -5px;
		top: -8px;
	}
	.flex1-clz {
		padding-top: 0px;
		overflow: hidden;
		padding-left: 5px;
		padding-bottom: 0px;
		padding-right: 0px;
	}
	.text-clz {
		color: #5d5d5d;
		font-size: 14px !important;
	}
	.text2-clz {
		color: #5d5d5d;
		flex: 1;
	}
	.flex8-clz {
		background-color: #ffffff;
		padding-top: 8px;
		padding-left: 8px;
		padding-bottom: 8px;
		padding-right: 8px;
	}
	.avatar2-badge-0 {
		padding-left: 0px;
		padding-right: 0px;
		right: -2px;
		top: -8px;
	}
	.flex9-clz {
		padding-top: 0px;
		overflow: hidden;
		padding-left: 5px;
		padding-bottom: 0px;
		padding-right: 0px;
	}
	.text6-clz {
		color: #5d5d5d;
		font-size: 14px !important;
	}
	.text8-clz {
		color: #5d5d5d;
		flex: 1;
	}
	.flex3-clz {
		background-color: #ffffff;
		padding-top: 8px;
		padding-left: 8px;
		padding-bottom: 8px;
		padding-right: 8px;
	}
	.avatar1-badge-0 {
		padding-left: 0px;
		padding-right: 0px;
		right: -5px;
		top: -8px;
	}
	.flex5-clz {
		padding-top: 0px;
		overflow: hidden;
		padding-left: 5px;
		padding-bottom: 0px;
		padding-right: 0px;
	}
	.text3-clz {
		color: #5d5d5d;
		font-size: 14px !important;
	}
	.text5-clz {
		color: #5d5d5d;
		flex: 1;
	}
	.flex13-clz {
		padding-top: 2px;
		box-shadow: 0px 1px 4px 2px rgba(31, 31, 31, 0.16);
		overflow: visible;
		left: 0px;
		bottom: 0px;
		padding-left: 2px;
		padding-bottom: 2px;
		padding-right: 2px;
	}
	.flex14-clz {
		flex-shrink: 0;
		width: 70px !important;
	}
	.icon1-clz {
		color: #767272;
	}
	.icon1 {
		font-size: 32px;
	}
	.flex15-clz {
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
	.icon2-clz {
		color: #767272;
	}
	.icon2 {
		font-size: 32px;
	}
	.flex16-clz {
		flex-shrink: 0;
		width: 70px !important;
	}
	.icon-clz {
		color: #767272;
	}
	.icon {
		font-size: 32px;
	}
	.flex17-clz {
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
	.container18437 {
	}
</style>
