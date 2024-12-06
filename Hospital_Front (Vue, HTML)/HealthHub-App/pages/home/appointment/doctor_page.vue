<template>
	<view class="container container18437">
		<view class="flex diygw-col-24">
			<view class="diygw-pzx" style="border-bottom: 1px solid #00a220"></view>
		</view>
		<view class="flex flex-wrap diygw-col-24 flex-clz">
			<view class="flex diygw-col-4 avatar-clz">
				<view class="diygw-avatar radius bg-none">
					<image mode="aspectFit" class="diygw-avatar-img radius" src="/static/icon2_xm.png"></image>
				</view>
			</view>
			<view class="flex flex-wrap diygw-col-9 flex-direction-column flex1-clz">
				<view class="diygw-col-24 text1-clz"> Doctor Lisa </view>
				<scroll-view @scrolltoupper="scrolltoupperFlex8" @scrolltolower="scrolltolowerFlex8" scroll-x scroll-with-animation class="flex scroll-view flex-wrap diygw-col-24 flex-direction-column flex8-clz">
					<view class="flex flex-nowrap">
						<view class="flex diygw-col-9">
							<view class="diygw-tag margin-xs xs radius diygw-line-green">
								<text> Head </text>
							</view>
						</view>
						<view class="flex diygw-col-13 flex-nowrap">
							<view class="diygw-tag margin-xs xs radius diygw-line-green">
								<text> Specialist </text>
							</view>
						</view>
					</view>
				</scroll-view>
			</view>
			<scroll-view @scrolltoupper="scrolltoupperFlex5" @scrolltolower="scrolltolowerFlex5" scroll-y scroll-with-animation class="flex scroll-view flex-wrap diygw-col-11 flex-direction-column flex5-clz">
				<view class="flex scroll-y flex-nowrap">
					<view class="diygw-col-24 text4-clz"> Gynaecologist </view>
					<view class="diygw-col-24 text5-clz"> Head of Department Gynaecology and obstetrics </view>
				</view>
			</scroll-view>
		</view>
		<u-form :model="form" :rules="formRules" :errorType="['message', 'toast']" ref="formRef" class="flex diygw-form diygw-col-24">
			<view class="flex diygw-col-24 flex-direction-column tabs-clz">
				<scroll-view scroll-x :show-scrollbar="false" enhanced :scroll-into-view="'scroll-' + tabsIndex" :scroll-left="tabsLeft" scroll-with-animation class="diygw-tabs text-center solid-bottom justify-center scale-title small-border tabs-title">
					<view class="diygw-tab-item tabs-item-title" :class="index == tabsIndex ? ' tabs-title-cur  cur text-green ' : ''" v-for="(item, index) in tabsDatas" :key="index" @click="changeTabs" :data-index="index"> <text v-if="item.icon" :class="item.icon"></text> {{ item.text }} </view>
				</scroll-view>
				<scroll-view scroll-y scroll-with-animation :scroll-into-view="'tabs-content-' + tabsMainIndex" @scroll="rightScrollTabs" class="tabs-content">
					<view id="tabs-content-0" class="tabs-content-inner flex-sub tabs-content-0">
						<view class="clearfix"></view>
					</view>
					<view id="tabs-content-1" class="tabs-content-inner flex-sub tabs-content-1">
						<u-form-item class="diygw-col-24" label="Date" prop="date1">
							<u-input @click="formData.showDate1 = true" class="" placeholder="" v-model="form.date1" type="select"></u-input>
						</u-form-item>
						<u-calendar maxDate="2050-12-31" v-model="formData.showDate1" mode="date" @change="changeFormDate1"></u-calendar>
						<view class="flex diygw-col-24 button1-clz">
							<button @tap="navigateTo" data-type="page" data-url="/pages/home/appointment/finish" class="diygw-btn blue lg radius-xs flex-sub margin-xs button1-button-clz">Reserve now</button>
						</view>
						<view class="clearfix"></view>
					</view>
				</scroll-view>
			</view>
			<u-form-item class="diygw-col-24 textarea1-clz" label="Education" prop="textarea1">
				<u-input :autoHeight="false" maxlength="200" height="60px" class="" placeholder="请输入提示信息" v-model="form.textarea1" type="textarea"></u-input>
			</u-form-item>
			<u-form-item class="diygw-col-24 textarea2-clz" label="Career" prop="textarea2">
				<u-input :autoHeight="false" maxlength="200" height="60px" class="" placeholder="请输入提示信息" v-model="form.textarea2" type="textarea"></u-input>
			</u-form-item>
		</u-form>
		<view class="flex flex-wrap diygw-col-24 justify-around diygw-bottom flex2-clz">
			<view class="flex flex-wrap diygw-col-0 flex-direction-column items-center flex3-clz" @tap="navigateTo" data-type="page" data-url="/pages/home/home">
				<text class="flex icon1 diygw-col-0 icon1-clz diy-icon-home"></text>
				<view class="diygw-col-0"> Home </view>
			</view>
			<view class="flex flex-wrap diygw-col-0 flex-direction-column items-center flex4-clz" @tap="navigateTo" data-type="page" data-url="/pages/message/messages">
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
				tabsDatas: [
					{ text: `Outpatient appointment`, icon: `diy-icon-calendar` },
					{ text: `Consultation Reservation`, icon: `diy-icon-community` }
				],
				tabsTimer: null,
				tabsMainIndex: 0,
				tabsLeft: 0,
				tabsWidth: 0,
				tabsItemWidth: 0,

				tabsLoad: true,
				tabsIndex: 0,
				form: {
					date1: '',
					textarea1: '',
					textarea2: ''
				},
				formRules: {},
				formData: {
					showDate1: false
				}
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
		onReady() {
			this.$refs.formRef?.setRules(this.formRules);
		},
		methods: {
			async init() {},
			scrolltoupperFlex8(evt) {},
			scrolltolowerFlex8(evt) {},
			scrolltoupperFlex5(evt) {},
			scrolltolowerFlex5(evt) {},
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
					tabsIndex: index,
					tabsMainIndex: index
				});
				this.setTabsStatus(index);
			},

			rightScrollTabs(evt) {
				let tabsLoad = this.tabsLoad;
				let that = this;
				let cates = this.tabsDatas;
				let tabHeight = 0;
				if (this.tabsTimer) return;
				if (tabsLoad) {
					for (let i = 0; i < cates.length; i++) {
						let view = wx.createSelectorQuery().select('#tabs-content-' + i);
						view.fields(
							{
								size: true
							},
							(data) => {
								cates[i].top = tabHeight;
								tabHeight = tabHeight + data.height;
								cates[i].bottom = tabHeight;
							}
						).exec();
					}
					that.setData({
						tabsLoad: false,
						tabsDatas: cates
					});
				}
				// 节流
				setTimeout(() => {
					this.tabsTimer = null;
					let scrollTop = evt.detail.scrollTop + 20;
					for (let i = 0; i < cates.length; i++) {
						if (scrollTop > cates[i].top && scrollTop < cates[i].bottom) {
							that.setData({
								tabsIndex: i
							});
							this.setTabsStatus(i);
							return false;
						}
					}
				}, 20);
			},
			changeFormDate1(evt) {
				this.form.date1 = evt.result;
			},
			async submitForm(e) {
				let valid = await this.$refs.formRef.validate();

				if (valid) {
					//保存数据
					let param = this.form;
					let header = {};
					let url = '';
					if (!url) {
						this.showToast('请先配置表单提交地址', 'none');
						return false;
					}

					let res = await this.$http.post(url, param, header, 'json');

					if (res.code == 200) {
						this.showToast(res.msg, 'success');
					} else {
						this.showModal(res.msg, '提示', false);
					}
				} else {
					console.log('验证失败');
				}
			}
		}
	};
</script>

<style lang="scss" scoped>
	.avatar-clz {
		margin-left: 5px;
		width: calc(16.6666666667% - 5px - 5px) !important;
		margin-top: 5px;
		margin-bottom: 25px;
		margin-right: 5px;
	}
	.flex1-clz {
		margin-left: 20px;
		width: calc(37.5% - 20px - 5px) !important;
		margin-top: 5px;
		margin-bottom: 5px;
		margin-right: 5px;
	}
	.text1-clz {
		padding-top: 8px;
		font-weight: bold;
		padding-left: 5px;
		font-size: 15px !important;
		padding-bottom: 5px;
		margin-right: 5px;
		margin-left: 5px;
		flex-shrink: 0;
		width: calc(100% - 5px - 5px) !important;
		margin-top: 5px;
		margin-bottom: 0px;
		height: 35px !important;
		text-align: center;
		padding-right: 5px;
	}
	.flex5-clz {
		margin-left: 5px;
		width: calc(45.8333333333% - 5px - 5px) !important;
		font-size: 11px !important;
		margin-top: 5px;
		margin-bottom: 5px;
		margin-right: 5px;
	}
	.text4-clz {
		margin-left: 5px;
		width: calc(100% - 5px - 5px) !important;
		font-size: 11px !important;
		margin-top: 5px;
		font-style: italic;
		margin-bottom: 5px;
		text-align: right;
		margin-right: 5px;
	}
	.text5-clz {
		margin-left: 5px;
		width: calc(100% - 5px - 5px) !important;
		font-size: 11px !important;
		margin-top: 5px;
		font-style: italic;
		margin-bottom: 5px;
		text-align: right;
		margin-right: 5px;
	}
	.tabs-clz {
		margin-left: 0px;
		width: 100% !important;
		margin-top: 5px;
		margin-bottom: 5px;
		margin-right: 0px;
	}
	.tabs-content {
		height: 80px;
	}
	.tabs-title {
		font-size: 12px !important;
	}
	.tabs-title-cur {
		color: rgba(0, 145, 255, 0.68) !important;
		font-size: calc(4px + 12px) !important;
	}
	.button1-clz {
		border-bottom-left-radius: 6px;
		border-top-right-radius: 6px;
		margin-right: 70px;
		margin-left: 70px;
		flex-shrink: 0;
		overflow: hidden;
		width: calc(100% - 70px - 70px) !important;
		border-top-left-radius: 6px;
		margin-top: 5px;
		border-bottom-right-radius: 6px;
		margin-bottom: 5px;
		height: 45px !important;
		text-align: center;
	}
	.button1-button-clz {
		font-size: 15px !important;
		margin: 3px !important;
	}
	.textarea1-clz {
		margin-left: 5px;
		border: 1px groove #eee;
		width: calc(100% - 5px - 5px) !important;
		margin-top: 11px;
		margin-bottom: 5px;
		margin-right: 5px;
	}
	.textarea2-clz {
		margin-left: 5px;
		border: 1px groove #eee;
		width: calc(100% - 5px - 5px) !important;
		margin-top: 11px;
		margin-bottom: 5px;
		margin-right: 5px;
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
	.container18437 {
		padding-left: 0px;
		padding-right: 0px;

		font-size: 14px;
	}
	.container18437 {
	}
</style>
