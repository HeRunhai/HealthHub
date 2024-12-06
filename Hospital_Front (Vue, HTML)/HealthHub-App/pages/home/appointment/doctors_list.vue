<template>
	<view class="container container18437">
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

		<view class="flex flex-wrap diygw-col-24 flex-direction-column flex3-clz">
			<view class="flex flex-wrap diygw-col-24 flex-direction-column flex43-clz">
				<view class="flex diygw-dropdown diygw-col-24">
					<u-dropdown class="flex-sub" direction="down" close-on-click-overlay="false" ref="refDropdowns1">
						<u-dropdown-item @change="changeDropdowns10" v-model="dropdowns10"
							:title=globalOption.chosen_department :options="dropdowns1Datas0"></u-dropdown-item>
						<u-dropdown-item @change="changeDropdowns11" v-model="dropdowns11" title="all doctors"
							:options="dropdowns1Datas1"></u-dropdown-item>
					</u-dropdown>
				</view>
				<u-form-item class="diygw-col-24" label="Date" prop="date">
					<u-input @click="showDate = true" class="" placeholder="Please choose expected date" v-model="date"
						type="select"></u-input>
				</u-form-item>
				<u-calendar maxDate="2050-12-31" v-model="showDate" mode="date" @change="changeDate"></u-calendar>

				<view v-for="item in list">
					<view class="flex flex-wrap diygw-col-24 flex-direction-column flex11-clz">
						<view class="flex flex-wrap diygw-col-24 flex-direction-column flex12-clz">
							<scroll-view @scrolltoupper="scrolltoupperFlex8" @scrolltolower="scrolltolowerFlex8"
								scroll-x scroll-with-animation
								class="flex scroll-view flex-wrap diygw-col-24 justify-between flex8-clz">
								<view class="flex justify-between flex-nowrap">
									<view class="flex flex-wrap diygw-col-15 flex4-clz">
										<view class="flex diygw-col-6 avatar-clz">
											<view class="diygw-avatar radius bg-none">
												<image mode="aspectFit" class="diygw-avatar-img radius" :src=item.avatar></image>
											</view>
										</view>
										<view class="flex diygw-col-13 justify-start items-stretch flex-wrap flex9-clz">
											<view class="diygw-col-23 text-clz"> Doctor {{item.name}} </view>
											<scroll-view @scrolltoupper="scrolltoupperFlex10"
												@scrolltolower="scrolltolowerFlex10" scroll-x scroll-with-animation
												class="flex scroll-view flex-wrap diygw-col-24 justify-start flex10-clz">
												<view class="flex justify-start flex-nowrap">
													<view class="flex diygw-col-11 flex-nowrap">
														<view class="diygw-tag margin-xs xs radius diygw-line-green">
															<text> {{item.tab}} </text>
														</view>
													</view>
												</view>
											</scroll-view>
										</view>
									</view>
									<view class="flex flex-wrap diygw-col-8 justify-end items-stretch flex13-clz">
										<view class="flex diygw-col-11 list-clz">
											<view class="diygw-list scroll-view not-remark diygw-card diygw-shadow">
												<view @tap="navigateToDoctor(item.name)" data-type="page"
													data-url="/pages/home/appointment/doctor_page" style=""
													class="diygw-item solid-bottom">
													<view class="content">
														<view class="title"> Schedule</view>
													</view>
												</view>
											</view>
										</view>
									</view>
								</view>
							</scroll-view>

							<!-- <view v-for="item2 in list"> -->
								<view class="flex flex-wrap diygw-col-24 justify-between items-start flex5-clz">
									<view class="flex flex-wrap diygw-col-12 flex-direction-column flex14-clz">
										<view class="flex flex-wrap diygw-col-24 flex16-clz">
											<view class="diygw-col-11"> {{item.date}} </view>
											<view class="diygw-col-13"> {{item.time}} </view>
										</view>
										<view class="flex flex-wrap diygw-col-24 flex17-clz">
											<view class="diygw-col-20 text5-clz"> Quantity available for booking:
											</view>
											<view class="diygw-col-2 text4-clz"> {{item.available}} </view>
										</view>
									</view>
									<view class="flex flex-wrap diygw-col-10 flex-direction-column flex15-clz">
										<view class="flex flex-wrap diygw-col-24 flex-direction-column flex18-clz">
											<view class="flex diygw-col-24 button-clz">
												<button @tap="navigateToFinish(item)" data-type="page"
													data-url="/pages/home/appointment/finish"
													class="diygw-btn blue xs radius-xl flex-sub button-button-clz">register</button>
											</view>
											<view class="diygw-col-24 text6-clz diygw-ellipsis diygw-text-sm">
												Cost:{{item.price}} BYN
											</view>
										</view>
									</view>
								</view>
							<!-- </view> -->

						</view>
					</view>
				</view>

			</view>
		</view>
		<view class="clearfix"></view>
	</view>
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
				globalOption: {
					chosen_department: ''
				},
				//自定义全局变量
				globalData: {
					type:''
				},
				dropdowns10: '',
				dropdowns11: '',
				dropdowns1Datas0: [{
						text: 'emergency department',
						value: 0
					},
					{
						text: 'gynecology department',
						value: 1
					},
					{
						text: 'stomatology department',
						value: 2
					},
					{
						text: 'ear, nose and throat',
						value: 3
					},
					{
						text: 'ophthalmology department',
						value: 4
					},
					{
						text: 'padiatrics department',
						value: 5
					}
				],
				dropdowns1Datas1: [{
						text: 'all doctors',
						value: 0
					},
					{
						text: 'common doctors',
						value: 1
					},
					{
						text: 'specialists',
						value: 2
					}
				],
				showDate: false,
				date: ''
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
			this.globalOption.chosen_department = sessionStorage.getItem("department")
			this.globalData.type = sessionStorage.getItem("type")
			if (account != null) {
				// 将JSON格式的对象解析为js对象，currentAuth为一个js对象
				this.currentAccount = JSON.parse(account);
			}
			this.init();
		},
		methods: {
			async init() {
				let department = this.globalOption.chosen_department.substring(1, this.globalOption.chosen_department.length - 1);
				fetch(`${server.site_add}/doctor/getdoctors/${department}/${this.globalData.type}?authorization=patient`)
					.then(res => res.json())
					.then(res => {
						this.list = res
					})
			},
			navigateToFinish(item){
				sessionStorage.setItem('doctor',JSON.stringify(item.name))
				sessionStorage.setItem('date',JSON.stringify(item.date))
				sessionStorage.setItem('time',JSON.stringify(item.time))
				sessionStorage.setItem('price',JSON.stringify(item.price))
				sessionStorage.setItem('type',JSON.stringify(item.type))
				uni.navigateTo({
					url:"/pages/home/appointment/finish"
				})
			},
			navigateToDoctor(name){
				sessionStorage.setItem('doctor',JSON.stringify(item.name))
				uni.navigateTo({
					url:"/pages/home/appointment/doctor_page"
				})
			},
			closeDropdowns1() {
				this.$refs.refDropdowns1.close();
			},
			changeDropdowns10(evt) {
				let item = this.dropdowns1Datas0.find((item) => {
					return item.value == evt;
				});
				item && item.action && this.navigateTo(item.action);
			},
			changeDropdowns11(evt) {
				let item = this.dropdowns1Datas1.find((item) => {
					return item.value == evt;
				});
				item && item.action && this.navigateTo(item.action);
			},
			changeDate(evt) {
				this.date = evt.result;
			},
			scrolltoupperFlex8(evt) {},
			scrolltolowerFlex8(evt) {},
			scrolltoupperFlex10(evt) {},
			scrolltolowerFlex10(evt) {},
			scrolltoupperFlex28(evt) {},
			scrolltolowerFlex28(evt) {},
			scrolltoupperFlex31(evt) {},
			scrolltolowerFlex31(evt) {}
		}
	};
</script>

<style lang="scss" scoped>
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

	.flex11-clz {
		margin-left: 0px;
		border: 1px dotted #eee;
		width: 100% !important;
		margin-top: 5px;
		margin-bottom: 0px;
		margin-right: 0px;
	}

	.flex12-clz {
		border: 1px groove #eee;
	}

	.avatar-clz {
		margin-left: 5px;
		width: calc(25% - 5px - 5px) !important;
		margin-top: 5px;
		margin-bottom: 25px;
		margin-right: 5px;
	}

	.text-clz {
		margin-left: 5px;
		font-weight: bold;
		width: calc(95.8333333333% - 5px - 5px) !important;
		margin-top: 5px;
		margin-bottom: 5px;
		text-align: left;
		margin-right: 5px;
	}

	.list-clz {
		flex-shrink: 0;
		padding-top: 5px;
		padding-left: 5px;
		width: 120px !important;
		font-size: 10px !important;
		padding-bottom: 5px;
		height: 50px !important;
		padding-right: 5px;
	}

	.list-item-clz {}

	.list-item-clz .remark {
		font-size: 10px;
	}

	.flex5-clz {
		margin-left: 2px;
		border: 1px none #eee;
		width: calc(100% - 2px - 0px) !important;
		margin-top: 4px;
		margin-bottom: 0px;
		margin-right: 0px;
	}

	.text5-clz {
		margin-left: 0px;
		color: #888888;
		width: calc(83.3333333333% - 0px - 0px) !important;
		font-size: 11px !important;
		margin-top: 5px;
		margin-bottom: 5px;
		margin-right: 0px;
	}

	.text4-clz {
		margin-left: 0px;
		color: #888888;
		width: calc(8.3333333333% - 0px - 0px) !important;
		font-size: 11px !important;
		margin-top: 5px;
		margin-bottom: 5px;
		margin-right: 0px;
	}

	.flex15-clz {
		margin-left: 40px;
		width: calc(41.6666666667% - 40px - 0px) !important;
		margin-top: 0px;
		margin-bottom: 0px;
		text-align: center;
		margin-right: 0px;
	}

	.button-clz {
		text-align: center;
	}

	.button-button-clz {
		font-size: 14px !important;
		margin: 0px !important;
	}

	.text6-clz {
		color: #ff000d;
		text-align: center;
	}

	.flex19-clz {
		margin-left: 2px;
		border: 1px none #eee;
		width: calc(100% - 2px - 0px) !important;
		margin-top: 4px;
		margin-bottom: 0px;
		margin-right: 0px;
	}

	.text13-clz {
		margin-left: 0px;
		color: #888888;
		width: calc(83.3333333333% - 0px - 0px) !important;
		font-size: 11px !important;
		margin-top: 5px;
		margin-bottom: 5px;
		margin-right: 0px;
	}

	.text14-clz {
		margin-left: 0px;
		color: #888888;
		width: calc(8.3333333333% - 0px - 0px) !important;
		font-size: 11px !important;
		margin-top: 5px;
		margin-bottom: 5px;
		margin-right: 0px;
	}

	.flex23-clz {
		margin-left: 40px;
		width: calc(41.6666666667% - 40px - 0px) !important;
		margin-top: 0px;
		margin-bottom: 0px;
		text-align: center;
		margin-right: 0px;
	}

	.button1-clz {
		text-align: center;
	}

	.button1-button-clz {
		font-size: 14px !important;
		margin: 0px !important;
	}

	.text15-clz {
		color: #ff000d;
		text-align: center;
	}

	.flex26-clz {
		margin-left: 0px;
		border: 1px dotted #eee;
		width: 100% !important;
		margin-top: 5px;
		margin-bottom: 0px;
		margin-right: 0px;
	}

	.flex27-clz {
		border: 1px groove #eee;
	}

	.avatar1-clz {
		margin-left: 5px;
		width: calc(25% - 5px - 5px) !important;
		margin-top: 5px;
		margin-bottom: 25px;
		margin-right: 5px;
	}

	.text16-clz {
		margin-left: 5px;
		font-weight: bold;
		width: calc(95.8333333333% - 5px - 5px) !important;
		margin-top: 5px;
		margin-bottom: 5px;
		text-align: left;
		margin-right: 5px;
	}

	.list1-clz {
		flex-shrink: 0;
		padding-top: 5px;
		padding-left: 5px;
		width: 120px !important;
		font-size: 10px !important;
		padding-bottom: 5px;
		height: 50px !important;
		padding-right: 5px;
	}

	.list1-item-clz {}

	.list1-item-clz .remark {
		font-size: 10px;
	}

	.flex33-clz {
		margin-left: 2px;
		border: 1px none #eee;
		width: calc(100% - 2px - 0px) !important;
		margin-top: 4px;
		margin-bottom: 0px;
		margin-right: 0px;
	}

	.text19-clz {
		margin-left: 0px;
		color: #888888;
		width: calc(83.3333333333% - 0px - 0px) !important;
		font-size: 11px !important;
		margin-top: 5px;
		margin-bottom: 5px;
		margin-right: 0px;
	}

	.text20-clz {
		margin-left: 0px;
		color: #888888;
		width: calc(8.3333333333% - 0px - 0px) !important;
		font-size: 11px !important;
		margin-top: 5px;
		margin-bottom: 5px;
		margin-right: 0px;
	}

	.flex37-clz {
		margin-left: 40px;
		width: calc(41.6666666667% - 40px - 0px) !important;
		margin-top: 0px;
		margin-bottom: 0px;
		text-align: center;
		margin-right: 0px;
	}

	.button2-clz {
		text-align: center;
	}

	.button2-button-clz {
		font-size: 14px !important;
		margin: 0px !important;
	}

	.text21-clz {
		color: #ff000d;
		text-align: center;
	}

	.flex39-clz {
		margin-left: 2px;
		border: 1px none #eee;
		width: calc(100% - 2px - 0px) !important;
		margin-top: 4px;
		margin-bottom: 0px;
		margin-right: 0px;
	}

	.text24-clz {
		margin-left: 0px;
		color: #888888;
		width: calc(83.3333333333% - 0px - 0px) !important;
		font-size: 11px !important;
		margin-top: 5px;
		margin-bottom: 5px;
		margin-right: 0px;
	}

	.text25-clz {
		margin-left: 0px;
		color: #888888;
		width: calc(8.3333333333% - 0px - 0px) !important;
		font-size: 11px !important;
		margin-top: 5px;
		margin-bottom: 5px;
		margin-right: 0px;
	}

	.flex44-clz {
		margin-left: 40px;
		width: calc(41.6666666667% - 40px - 0px) !important;
		margin-top: 0px;
		margin-bottom: 0px;
		text-align: center;
		margin-right: 0px;
	}

	.button3-clz {
		text-align: center;
	}

	.button3-button-clz {
		font-size: 14px !important;
		margin: 0px !important;
	}

	.text26-clz {
		color: #ff000d;
		text-align: center;
	}

	.container18437 {
		padding-left: 0px;
		padding-right: 0px;

		font-size: 14px;
	}

	.container18437 {}
</style>
