<template>
	<div>
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
			<view class="flex flex-wrap diygw-col-24 flex-direction-column flex-clz">
				<view class="flex flex-wrap diygw-col-24 flex-direction-column flex1-clz">
					<view class="diygw-col-24 text1-clz diygw-ellipsis"> Patient Information </view>
					<view class="flex flex-wrap diygw-col-24 flex5-clz">
						<view class="diygw-col-9 text4-clz text-grey"> Patient Name </view>
						<view class="diygw-col-15"> {{patient.name}} </view>
					</view>
					<view class="flex flex-wrap diygw-col-24 flex8-clz">
						<view class="diygw-col-9 text6-clz text-grey"> Passport </view>
						<view class="diygw-col-15"> {{patient.passport}} </view>
					</view>
				</view>
				<view class="flex flex-wrap diygw-col-24 flex-direction-column flex10-clz">
					<view class="diygw-col-24 text10-clz diygw-ellipsis"> Register Information </view>
					<view class="flex flex-wrap diygw-col-24 flex11-clz">
						<view class="diygw-col-9 text11-clz text-grey"> Department </view>
						<view class="diygw-col-15"> {{globalOption.department}} </view>
					</view>
					<view class="flex flex-wrap diygw-col-24 flex12-clz">
						<view class="diygw-col-9 text13-clz text-grey"> Doctor </view>
						<view class="diygw-col-15"> Doctor {{globalOption.doctor}} </view>
					</view>
					<view class="flex flex-wrap diygw-col-24 flex13-clz">
						<view class="diygw-col-9 text15-clz text-grey"> Appointment Time </view>
						<view class="diygw-col-15"> {{globalOption.date}} {{globalOption.time}} </view>
					</view>
					<view class="flex flex-wrap diygw-col-24 flex14-clz">
						<view class="diygw-col-9 text17-clz text-grey"> Register Fee </view>
						<view class="diygw-col-15"> {{globalOption.price}} BYN </view>
					</view>
				</view>
				<view class="flex flex-wrap diygw-col-24 flex-direction-column flex15-clz">
					<view class="diygw-col-24 text19-clz"> Tips: </view>
					<view class="diygw-col-24 text20-clz"> Due to the uncertainty of patients, it is normal that your
						appointment time may be earlier or later than expected, please understand (for time slots)
					</view>
				</view>
			</view>
			<view class="flex flex-wrap diygw-col-24 flex-direction-column items-center flex9-clz">
				<view class="flex diygw-col-15 button-clz">
					<button @tap="AddRegistration()" data-type="page" data-url="/pages/records/records"
						class="diygw-btn blue lg radius-xs flex-sub margin-xs button-button-clz">Confirm
						appointment</button>
				</view>
				<view class="flex diygw-col-15 button1-clz">
					<button @tap="navigateTo" data-type="page" data-url="/pages/home/appointment/doctors_list"
						class="diygw-btn grey lg radius-xs flex-sub margin-xs button1-button-clz">Cancel
						appointment</button>
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
				patient: [],
				//用户全局信息
				userInfo: {},
				//页面传参
				globalOption: {
					doctor: '',
					date: '',
					time: '',
					price: '',
					department: ''
				},
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
			let doctor = sessionStorage.getItem('doctor')
			let date = sessionStorage.getItem('date')
			let time = sessionStorage.getItem('time')
			let price = sessionStorage.getItem('price')
			let department = sessionStorage.getItem('department')
			let type = sessionStorage.getItem('type')
			if (account != null) {
				// 将JSON格式的对象解析为js对象，currentAuth为一个js对象
				this.currentAccount = JSON.parse(account);
			}
			if (doctor != null) {
				this.globalOption.doctor = JSON.parse(doctor);
			}
			if (date != null) {
				this.globalOption.date = JSON.parse(date);
			}
			if (time != null) {
				this.globalOption.time = JSON.parse(time);
			}
			if (price != null) {
				this.globalOption.price = JSON.parse(price);
			}
			if (department != null) {
				this.globalOption.department = JSON.parse(department);
			}
			if (type != null) {
				this.globalOption.type = JSON.parse(type);
			}
			this.init();
		},
		methods: {
			async init() {
				fetch(`${server.site_add}/patient/${this.currentAccount}?authorization=patient`)
					.then(res => res.json())
					.then(res => {
						this.patient = res
					})
			},
			AddRegistration() {
				let doctor = this.globalOption.doctor;
				let department = this.globalOption.department;
				let type = this.globalOption.type;
				let date = this.globalOption.date;
				let time = this.globalOption.time;
				let time_param = date + " " + time
				let price = this.globalOption.price;
				let status = "Waiting"
				
				let url = `${server.site_add}/register/addRegistration
				/${this.currentAccount}/${doctor}/${department}
				/${type}/${time_param}/${price}/${status}
				?authorization=${this.currentAuth}`
				
				fetch(url, {
						method: 'PUT', 
						headers: {
						    'Content-Type': 'application/json'
						  },
						}).then(res => res.json())
					.then(res => {
						uni.navigateTo({
							url:"/pages/records/records"
						})
					})
			}
		}
	};
</script>

<style lang="scss" scoped>
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

	.flex1-clz {
		margin-left: 5px;
		border: 1px ridge #eee;
		width: calc(100% - 5px - 5px) !important;
		font-size: 15px !important;
		margin-top: 5px;
		margin-bottom: 5px;
		margin-right: 5px;
	}

	.text1-clz {
		margin-left: 5px;
		font-weight: bold;
		width: calc(100% - 5px - 5px) !important;
		margin-top: 5px;
		margin-bottom: 5px;
		margin-right: 5px;
	}

	.flex5-clz {
		margin-left: 5px;
		width: calc(100% - 5px - 5px) !important;
		margin-top: 5px;
		margin-bottom: 5px;
		margin-right: 5px;
	}

	.text4-clz {
		margin-left: 5px;
		width: calc(37.5% - 5px - 5px) !important;
		margin-top: 0px;
		margin-bottom: 0px;
		margin-right: 5px;
	}

	.flex8-clz {
		margin-left: 5px;
		width: calc(100% - 5px - 5px) !important;
		margin-top: 5px;
		margin-bottom: 5px;
		margin-right: 5px;
	}

	.text6-clz {
		margin-left: 5px;
		width: calc(37.5% - 5px - 5px) !important;
		margin-top: 0px;
		margin-bottom: 0px;
		margin-right: 5px;
	}

	.flex10-clz {
		margin-left: 5px;
		border: 1px ridge #eee;
		width: calc(100% - 5px - 5px) !important;
		font-size: 15px !important;
		margin-top: 5px;
		margin-bottom: 5px;
		margin-right: 5px;
	}

	.text10-clz {
		margin-left: 5px;
		font-weight: bold;
		width: calc(100% - 5px - 5px) !important;
		margin-top: 5px;
		margin-bottom: 5px;
		margin-right: 5px;
	}

	.flex11-clz {
		margin-left: 5px;
		width: calc(100% - 5px - 5px) !important;
		margin-top: 5px;
		margin-bottom: 5px;
		margin-right: 5px;
	}

	.text11-clz {
		margin-left: 5px;
		width: calc(37.5% - 5px - 5px) !important;
		margin-top: 0px;
		margin-bottom: 0px;
		margin-right: 5px;
	}

	.flex12-clz {
		margin-left: 5px;
		width: calc(100% - 5px - 5px) !important;
		margin-top: 5px;
		margin-bottom: 5px;
		margin-right: 5px;
	}

	.text13-clz {
		margin-left: 5px;
		width: calc(37.5% - 5px - 5px) !important;
		margin-top: 0px;
		margin-bottom: 0px;
		margin-right: 5px;
	}

	.flex13-clz {
		margin-left: 5px;
		width: calc(100% - 5px - 5px) !important;
		margin-top: 5px;
		margin-bottom: 5px;
		margin-right: 5px;
	}

	.text15-clz {
		margin-left: 5px;
		width: calc(37.5% - 5px - 5px) !important;
		margin-top: 0px;
		margin-bottom: 0px;
		margin-right: 5px;
	}

	.flex14-clz {
		margin-left: 5px;
		width: calc(100% - 5px - 5px) !important;
		margin-top: 5px;
		margin-bottom: 5px;
		margin-right: 5px;
	}

	.text17-clz {
		margin-left: 5px;
		width: calc(37.5% - 5px - 5px) !important;
		margin-top: 0px;
		margin-bottom: 0px;
		margin-right: 5px;
	}

	.flex15-clz {
		margin-left: 5px;
		border: 1px groove #eee;
		width: calc(100% - 5px - 5px) !important;
		margin-top: 5px;
		margin-bottom: 5px;
		margin-right: 5px;
	}

	.text19-clz {
		margin-left: 5px;
		color: #ff6f00;
		width: calc(100% - 5px - 5px) !important;
		font-size: 14px !important;
		margin-top: 20px;
		margin-bottom: 5px;
		margin-right: 5px;
	}

	.text20-clz {
		margin-left: 20px;
		color: #ff6f00;
		width: calc(100% - 20px - 5px) !important;
		font-size: 14px !important;
		margin-top: 0px;
		margin-bottom: 5px;
		margin-right: 5px;
	}

	.button-clz {
		margin-left: 5px;
		width: calc(62.5% - 5px - 5px) !important;
		margin-top: 15px;
		margin-bottom: 5px;
		margin-right: 5px;
	}

	.button-button-clz {
		font-size: 16px !important;
		margin: 3px !important;
	}

	.button1-clz {
		margin-left: 5px;
		width: calc(62.5% - 5px - 5px) !important;
		margin-top: 0px;
		margin-bottom: 5px;
		margin-right: 5px;
	}

	.button1-button-clz {
		font-size: 16px !important;
		margin: 3px !important;
	}

	.container18437 {
		padding-left: 0px;
		padding-right: 0px;

		font-size: 14px;
	}

	.container18437 {}
</style>
