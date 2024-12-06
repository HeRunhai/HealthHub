<template>
<div>
	<view class="status_bar">
	<!-- Header -->
	</view>
	<view class="container container18437">
		<!-- #ifdef H5 -->
		<view class="flex flex-wrap diygw-col-24 flex-direction-column flex9-clz"> </view>
		<!--  #endif -->
		<view class="flex diygw-col-24">
			<swiper class="swiper" indicator-color="rgba(51, 51, 51, 0.39)" indicator-active-color="#fff" autoplay interval="3000" circular="true" style="height: 170px">
				<swiper-item class="diygw-swiper-item">
					<view class="diygw-swiper-item-wrap">
						<image src="/static/img/EMR.png" class="diygw-swiper-image"></image>
					</view>
				</swiper-item>
				<swiper-item class="diygw-swiper-item">
					<view class="diygw-swiper-item-wrap">
						<image src="/static/img/Service.png" class="diygw-swiper-image"></image>
					</view>
				</swiper-item>
				<swiper-item class="diygw-swiper-item">
					<view class="diygw-swiper-item-wrap">
						<image src="/static/img/Convenient.png" class="diygw-swiper-image"></image>
					</view>
				</swiper-item>
				<swiper-item class="diygw-swiper-item">
					<view class="diygw-swiper-item-wrap">
						<image src="/static/img/Technology.png" class="diygw-swiper-image"></image>
					</view>
				</swiper-item>
			</swiper>
		</view>
		<scroll-view @scrolltoupper="scrolltoupperFlex8" @scrolltolower="scrolltolowerFlex8" scroll-x scroll-with-animation class="flex scroll-view flex-wrap diygw-col-24 flex-direction-column flex8-clz">
			<view class="flex flex-nowrap">
				<scroll-view @scrolltoupper="scrolltoupperFlex3" @scrolltolower="scrolltolowerFlex3" scroll-y scroll-with-animation class="flex scroll-view flex-wrap diygw-col-12 flex3-clz" @tap="navigateTo" data-type="page" data-url="/pages/home/appointment/department">
					<view class="flex scroll-y flex-nowrap">
						<view class="flex diygw-col-24 avatar-clz">
							<view class="diygw-avatar bg-none">
								<image mode="aspectFit" class="diygw-avatar-img" src="/static/icon8_qd.png"></image>
							</view>
						</view>
						<view class="diygw-col-24 text4-clz diygw-ellipsis"> Appointment </view>
						<view class="diygw-col-24 text5-clz"> Register and make an appointment for outpatient service </view>
					</view>
				</scroll-view>
				<scroll-view @scrolltoupper="scrolltoupperFlex4" @scrolltolower="scrolltolowerFlex4" scroll-y scroll-with-animation class="flex scroll-view flex-wrap diygw-col-12 flex4-clz" @tap="navigateTo" data-type="page" data-url="/pages/home/consultation/department">
					<view class="flex scroll-y flex-nowrap">
						<view class="flex diygw-col-24 avatar1-clz">
							<view class="diygw-avatar bg-none">
								<image mode="aspectFit" class="diygw-avatar-img" src="/static/icon8_dpj.png"></image>
							</view>
						</view>
						<view class="diygw-col-24 text6-clz diygw-ellipsis"> Consultation </view>
						<view class="diygw-col-24 text7-clz"> Online doctor consultation (Chargeable service) </view>
					</view>
				</scroll-view>
			</view>
		</scroll-view>
		<view class="flex flex-wrap diygw-col-24 justify-around diygw-bottom flex-clz">
			<view class="flex flex-wrap diygw-col-0 flex-direction-column items-center flex2-clz">
				<text class="flex icon1 diygw-col-0 icon1-clz diy-icon-home"></text>
				<view class="diygw-col-0"> Home </view>
			</view>
			<view class="flex flex-wrap diygw-col-0 flex-direction-column items-center flex1-clz" @tap="navigateTo" data-type="page" data-url="/pages/message/messages">
				<view class="diygw-col-0 text2-clz"> 10 </view>
				<text class="flex icon2 diygw-col-0 icon2-clz diy-icon-community"></text>
				<view class="diygw-col-0"> Consultations </view>
			</view>
			<view class="flex flex-wrap diygw-col-0 flex-direction-column items-center flex6-clz" @tap="navigateTo" data-type="page" data-url="/pages/records/records">
				<text class="flex icon diygw-col-0 icon-clz diy-icon-message"></text>
				<view class="diygw-col-0"> Records </view>
			</view>
			<view class="flex flex-wrap diygw-col-0 flex-direction-column items-center flex7-clz" @tap="navigateTo" data-type="page" data-url="/pages/me/me">
				<text class="flex icon4 diygw-col-0 icon4-clz diy-icon-people"></text>
				<view class="diygw-col-0"> Me </view>
			</view>
		</view>
		<view class="flex flex-wrap diygw-col-24 flex-direction-column flex5-clz">
			<view class="flex diygw-col-24 flex-direction-column">
				<scroll-view scroll-x :show-scrollbar="false" enhanced :scroll-into-view="'scroll-' + tabsIndex" :scroll-left="tabsLeft" scroll-with-animation class="diygw-tabs text-center solid-bottom scale-title small-border tabs-title">
					<view :id="'scroll-' + index" class="diygw-tab-item tabs-item-title flex-sub" :class="index == tabsIndex ? ' cur text-green ' : ''" v-for="(item, index) in tabsDatas" :key="index" @click="changeTabs" :data-index="index"> <text v-if="item.icon" :class="item.icon"></text> {{ item.text }} </view>
				</scroll-view>
				<view class="">
					<view v-if="tabsIndex == 0" class="flex-sub">
						<view class="flex diygw-col-24">
							<view class="diygw-grid col-4">
								<view @tap="navigateTo" data-type="page" data-url="/pages/records/records" class="diygw-grid-item">
									<view class="diygw-grid-inner">
										<view class="diygw-grid-icon diygw-avatar">
											<image mode="aspectFit" class="diygw-avatar-img" src="/static/icon8_dfk.png"></image>
										</view>
										<view class="diygw-grid-title"> payment records </view>
									</view>
								</view>
								<view @tap="navigateTo" data-type="page" data-url="/pages/records/records" class="diygw-grid-item">
									<view class="diygw-grid-inner">
										<view class="diygw-grid-icon diygw-avatar">
											<image mode="aspectFit" class="diygw-avatar-img" src="/static/icon11_cy.png"></image>
										</view>
										<view class="diygw-grid-title"> family member </view>
									</view>
								</view>
								<view @tap="navigateTo" data-type="page" data-url="/pages/records/records" class="diygw-grid-item">
									<view class="diygw-grid-inner">
										<view class="diygw-grid-icon diygw-avatar">
											<image mode="aspectFit" class="diygw-avatar-img" src="/static/icon11_rz.png"></image>
										</view>
										<view class="diygw-grid-title"> medical records </view>
									</view>
								</view>
								<view @tap="navigateTo" data-type="page" data-url="/pages/records/records" class="diygw-grid-item">
									<view class="diygw-grid-inner">
										<view class="diygw-grid-icon diygw-avatar">
											<image mode="aspectFit" class="diygw-avatar-img" src="/static/icon9_fwdt.png"></image>
										</view>
										<view class="diygw-grid-title"> appointment guider </view>
									</view>
								</view>
							</view>
						</view>
					</view>
					<view v-if="tabsIndex == 1" class="flex-sub">
						<view class="flex diygw-col-24">
							<view class="diygw-grid col-2">
								<view @tap="navigateTo" data-type="page" data-url="/pages/records/records" class="diygw-grid-item">
									<view class="diygw-grid-inner">
										<view class="diygw-grid-icon diygw-avatar">
											<image mode="aspectFit" class="diygw-avatar-img" src="/static/icon9_xsqk.png"></image>
										</view>
										<view class="diygw-grid-title"> hospitalization records </view>
									</view>
								</view>
								<view @tap="navigateTo" data-type="page" data-url="/pages/records/records" class="diygw-grid-item">
									<view class="diygw-grid-inner">
										<view class="diygw-grid-icon diygw-avatar">
											<image mode="aspectFit" class="diygw-avatar-img" src="/static/icon10_q.png"></image>
										</view>
										<view class="diygw-grid-title"> hospitalization payment </view>
									</view>
								</view>
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
	export default {
		data() {
			return {
				//用户全局信息
				userInfo: {},
				//页面传参
				globalOption: {},
				//自定义全局变量
				globalData: {},
				tabsDatas: [
					{ text: `Outpatient service`, icon: `` },
					{ text: `Hospitalization`, icon: `` }
				],
				tabsTimer: null,
				tabsMainIndex: 0,
				tabsLeft: 0,
				tabsWidth: 0,
				tabsItemWidth: 0,
				tabsIndex: 0
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
			async init() {},
			scrolltoupperFlex8(evt) {},
			scrolltolowerFlex8(evt) {},
			scrolltoupperFlex3(evt) {},
			scrolltolowerFlex3(evt) {},
			scrolltoupperFlex4(evt) {},
			scrolltolowerFlex4(evt) {},
			// 获取一个目标元素的高度
			getElTabsRect(elClass, dataVal) {
				new Promise((resolve, reject) => {
					const query = uni.createSelectorQuery().in(this);
					query
						.select('.' + elClass)
						.fields(
							{
								size: true
							},
							(res) => {
								// 如果节点尚未生成，res值为null，循环调用执行
								if (!res) {
									setTimeout(() => {
										this.getElTabsRect(elClass);
									}, 10);
									return;
								}
								this[dataVal] = res.width;
								resolve();
							}
						)
						.exec();
				});
			},
			// 设置左边菜单的滚动状态
			async setTabsStatus(index) {
				this.current = index;
				// 如果为0，意味着尚未初始化
				if (this.tabsWidth == 0 || this.tabsItemWidth == 0) {
					await this.getElTabsRect('tabs-title', 'tabsWidth');
					await this.getElTabsRect('tabs-item-title', 'tabsItemWidth');
				}
				// 将菜单活动item垂直居中
				this.tabsLeft = index * this.tabsItemWidth + this.tabsItemWidth / 2 - this.tabsWidth / 2;
			},
			changeTabs(evt) {
				let { index } = evt.currentTarget.dataset;
				if (index == this.tabsIndex) return;
				this.setData({
					tabsIndex: index
				});
				this.setTabsStatus(index);
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
	.flex8-clz {
		flex-shrink: 0;
		height: 250px !important;
	}
	.flex3-clz {
		border: 3px outset #eee;
		border-bottom-left-radius: 20px;
		border-top-right-radius: 20px;
		margin-right: 5px;
		margin-left: 5px;
		flex-shrink: 0;
		overflow: hidden;
		width: calc(50% - 5px - 5px) !important;
		border-top-left-radius: 20px;
		margin-top: 20px;
		border-bottom-right-radius: 20px;
		background-image: linear-gradient(135deg, #abdcff 10%, #0396ff 100%);
		margin-bottom: 5px;
		height: 200px !important;
	}
	.avatar-clz {
		padding-top: 5px;
		border-bottom-left-radius: 6px;
		padding-left: 60px;
		padding-bottom: 5px;
		border-top-right-radius: 6px;
		margin-right: 5px;
		margin-left: 5px;
		overflow: hidden;
		width: calc(100% - 5px - 5px) !important;
		border-top-left-radius: 6px;
		margin-top: 5px;
		border-bottom-right-radius: 6px;
		margin-bottom: 5px;
		padding-right: 5px;
	}
	.text4-clz {
		margin-left: 5px;
		font-weight: bold;
		width: calc(100% - 5px - 5px) !important;
		font-size: 16px !important;
		margin-top: 5px;
		margin-bottom: 5px;
		text-align: center;
		margin-right: 5px;
	}
	.text5-clz {
		margin-left: 5px;
		flex-shrink: 0;
		width: calc(100% - 5px - 5px) !important;
		margin-top: 5px;
		margin-bottom: 5px;
		height: 50px !important;
		text-align: center;
		margin-right: 5px;
	}
	.flex4-clz {
		border: 3px outset #eee;
		border-bottom-left-radius: 20px;
		border-top-right-radius: 20px;
		margin-right: 5px;
		margin-left: 5px;
		flex-shrink: 0;
		overflow: hidden;
		width: calc(50% - 5px - 5px) !important;
		border-top-left-radius: 20px;
		margin-top: 20px;
		border-bottom-right-radius: 20px;
		background-image: linear-gradient(135deg, #abdcff 10%, #0396ff 100%);
		margin-bottom: 5px;
		height: 200px !important;
	}
	.avatar1-clz {
		padding-top: 5px;
		border-bottom-left-radius: 6px;
		padding-left: 60px;
		padding-bottom: 5px;
		border-top-right-radius: 6px;
		margin-right: 5px;
		margin-left: 5px;
		overflow: hidden;
		width: calc(100% - 5px - 5px) !important;
		border-top-left-radius: 6px;
		margin-top: 5px;
		border-bottom-right-radius: 6px;
		margin-bottom: 5px;
		padding-right: 5px;
	}
	.text6-clz {
		margin-left: 5px;
		font-weight: bold;
		width: calc(100% - 5px - 5px) !important;
		font-size: 16px !important;
		margin-top: 5px;
		margin-bottom: 5px;
		text-align: center;
		margin-right: 5px;
	}
	.text7-clz {
		margin-left: 5px;
		flex-shrink: 0;
		padding-top: 5px;
		padding-left: 5px;
		width: calc(100% - 5px - 5px) !important;
		padding-bottom: 5px;
		margin-top: 5px;
		margin-bottom: 5px;
		height: 50px !important;
		text-align: center;
		margin-right: 5px;
		padding-right: 5px;
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
	.flex5-clz {
		margin-left: 5px;
		width: calc(100% - 5px - 5px) !important;
		margin-top: 20px;
		margin-bottom: 5px;
		margin-right: 5px;
	}
	.tabs-title {
		font-size: 10px !important;
	}
	.tabs-title-cur {
		font-size: calc(4px + 10px) !important;
	}
	.container18437 {
		padding-left: 0px;
		padding-right: 0px;

		background-size: 100% 100%;

		font-size: 14px;
	}
	.container18437 {
	}
</style>
