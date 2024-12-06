<template>
	<div>
		<view class="status_bar">
			<!-- Header -->
		</view>
		<view class="container container18437">
			<view class="flex flex-wrap diygw-col-24 justify-around diygw-bottom flex2-clz">
				<view class="flex flex-wrap diygw-col-0 flex-direction-column items-center flex3-clz" @tap="navigateTo"
					data-type="page" data-url="/pages/home/home">
					<text class="flex icon1 diygw-col-0 icon1-clz diy-icon-home"></text>
					<view class="diygw-col-0"> Home </view>
				</view>
				<view class="flex flex-wrap diygw-col-0 flex-direction-column items-center flex4-clz" @tap="navigateTo"
					data-type="page" data-url="/pages/message/messages">
					<view class="diygw-col-0 text2-clz"> 10 </view>
					<text class="flex icon2 diygw-col-0 icon2-clz diy-icon-community"></text>
					<view class="diygw-col-0"> Consultations </view>
				</view>
				<view class="flex flex-wrap diygw-col-0 flex-direction-column items-center flex6-clz">
					<text class="flex icon diygw-col-0 icon-clz diy-icon-message"></text>
					<view class="diygw-col-0"> Records </view>
				</view>
				<view class="flex flex-wrap diygw-col-0 flex-direction-column items-center flex7-clz" @tap="navigateTo"
					data-type="page" data-url="/pages/me/me">
					<text class="flex icon4 diygw-col-0 icon4-clz diy-icon-people"></text>
					<view class="diygw-col-0"> Me </view>
				</view>
			</view>
			<view class="flex flex-wrap diygw-col-24 flex-direction-column flex-clz">
				<!-- #ifdef H5 -->
				<view class="flex flex-wrap diygw-col-24 flex-direction-column flex1-clz"> </view>
				<!--  #endif -->
				<view class="flex flex-wrap diygw-col-24 flex-direction-column flex12-clz">
					<view v-for="item in list">
						<view class="flex flex-wrap diygw-col-24 flex-direction-column flex5-clz" @tap="navigateTo"
							data-type="page" data-url="/pages/records/registeration">
							<view class="flex diygw-col-24 items-center flex-wrap flex8-clz">
								<view class="diygw-col-0 text5-clz diygw-ellipsis"> {{item.department}} </view>
								<view class="flex diygw-col-5">
									<view class="diygw-tag margin-xs radius diygw-line-blue">
										<text> {{item.status}} </text>
									</view>
								</view>
								<view class="flex flex-wrap diygw-col-24 flex10-clz">
									<view class="diygw-col-13 text1-clz"> Doctor {{item.dname}} </view>
									<view class="diygw-col-11 text4-clz"> {{item.type}} </view>
								</view>
								<view class="flex flex-wrap diygw-col-24 flex11-clz">
									<view class="diygw-col-13 text6-clz"> {{item.time}} </view>
									<view class="diygw-col-11 text7-clz"> No. {{item.rno}} </view>
								</view>
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
			let account = sessionStorage.getItem("account")
			if (account != null) {
				// 将JSON格式的对象解析为js对象，currentAuth为一个js对象
				this.currentAccount = JSON.parse(account);
			}
			this.init();
		},
		methods: {
			async init() {
				fetch(`${server.site_add}/register/getByPno/${this.currentAccount}?authorization=patient`)
					.then(res => res.json())
					.then(res => {
						this.list = res
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

	.flex2-clz {
		padding-top: 2px;
		box-shadow: 0px 1px 4px 2px rgba(31, 31, 31, 0.16);
		overflow: visible;
		left: 0px;
		bottom: 0px;
		padding-left: 2px;
		padding-bottom: 2px;
		padding-right: 2px;
	}

	.flex3-clz {
		flex-shrink: 0;
		width: 70px !important;
	}

	.icon1-clz {
		color: #767272;
	}

	.icon1 {
		font-size: 32px;
	}

	.flex4-clz {
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

	.flex-clz {
		font-size: 14px !important;
	}

	.flex12-clz {
		margin-left: 0px;
		width: 100% !important;
		margin-top: 15px;
		margin-bottom: 0px;
		margin-right: 0px;
	}

	.flex5-clz {
		border: 1px groove #eee;
		padding-top: 10px;
		padding-left: 10px;
		font-size: 14px !important;
		padding-bottom: 10px;
		padding-right: 10px;
	}

	.text5-clz {
		margin-left: 5px;
		flex: 1;
		font-size: 16px !important;
		margin-top: 5px;
		margin-bottom: 5px;
		margin-right: 5px;
	}

	.flex10-clz {
		margin-left: 5px;
		width: calc(100% - 5px - 5px) !important;
		margin-top: 5px;
		margin-bottom: 5px;
		margin-right: 5px;
	}

	.text1-clz {
		color: #767676;
	}

	.text4-clz {
		color: #767676;
	}

	.flex11-clz {
		margin-left: 5px;
		width: calc(100% - 5px - 5px) !important;
		margin-top: 5px;
		margin-bottom: 5px;
		margin-right: 5px;
	}

	.text6-clz {
		color: #767676;
	}

	.text7-clz {
		color: #767676;
	}

	.container18437 {
		padding-left: 0px;
		padding-right: 0px;

		font-size: 14px;
	}

	.container18437 {}
</style>
