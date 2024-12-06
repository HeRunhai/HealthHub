<template>
	<div>
		<view class="container container18437">
			<u-form-item class="diygw-col-20 input-clz" label="Name" prop="input">
				<u-input :focus="inputFocus" class="" placeholder="Please input" type="text" v-model="userInfo.name">
				</u-input>
			</u-form-item>
			<view class="flex diygw-col-4 justify-around avatar-clz">
				<view class="diygw-avatar avatar-avatar olive radius">
					<image mode="aspectFit" class="diygw-avatar-img radius" src="/static/icon9_xs.png"></image>
				</view>
			</view>
			<u-form-item class="diygw-col-24 checkbox-clz" label="Gender" :required="true" prop="checkbox">
				<u-checkbox-group class="flex flex-wrap diygw-col-24 justify-start" wrapClass=" justify-start"
					activeColor="#8dc63f" v-model="checkbox" @change="changeCheckbox">
					<u-checkbox v-model="checkboxitem.checked" v-for="(checkboxitem, checkboxindex) in checkboxDatas"
						:key="checkboxindex" :name="checkboxitem.value">
						{{ checkboxitem.label }}
					</u-checkbox>
				</u-checkbox-group>
			</u-form-item>
			<u-form-item class="diygw-col-24 date-clz" label="Birthday" :required="true" prop="date">
				<u-input @click="showDate = true" class="" placeholder="Please choose" v-model="userInfo.birth"
					type="select"></u-input>
			</u-form-item>
			<u-calendar maxDate="2050-12-31" v-model="showDate" mode="date" @change="changeDate"></u-calendar>
			<u-form-item class="diygw-col-24 input3-clz" label="Passport" prop="input3">
				<u-input :focus="input3Focus" class="" placeholder="Please input" v-model="userInfo.passport"
					type="text"></u-input>
			</u-form-item>
			<u-form-item class="diygw-col-24 input1-clz" label="Phone" prop="input1">
				<u-input :focus="input1Focus" class="" placeholder="Please input" v-model="userInfo.phone" type="text">
				</u-input>
			</u-form-item>
			<u-form-item class="diygw-col-24 input2-clz" label="Address" prop="input2">
				<u-input :focus="input2Focus" class="" placeholder="Please input" v-model="userInfo.address"
					type="text"></u-input>
			</u-form-item>
			<u-form-item class="diygw-col-24 input2-clz" label="Nationality" prop="input2">
				<u-input :focus="input2Focus" class="" placeholder="Please input" v-model="userInfo.nationality"
					type="text"></u-input>
			</u-form-item>
			<view class="flex diygw-col-24 button-clz">
				<button class="diygw-btn blue md radius-xs flex-sub margin-xs button-button-clz">Confirm</button>
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
					avatar: '',
					gender: '',
					birth: '',
					passport: '',
					phone: '',
					address: '',
					nationality: ''
				},
				//页面传参
				globalOption: {},
				//自定义全局变量
				globalData: {},
				inputFocus: false,
				checkboxDatas: [{
						value: '1',
						label: 'Male',
						checked: true
					},
					{
						value: '2',
						label: 'Female',
						checked: false
					}
				],
				showDate: false,
				checkbox: [''],
				date: '',
				input3Focus: false,
				input1Focus: false,
				input2Focus: false,
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
				fetch(`${server.site_add}/patient/${this.currentAccount}?authorization=patient`)
					.then(res => res.json())
					.then(res => {
						this.userInfo.name = res.name
						this.userInfo.avatar = res.avatar
						this.userInfo.gender = res.gender
						this.checkbox = (res.gender = "Male") ? ['1'] : ['2']
						this.userInfo.birth = res.birth
						this.userInfo.passport = res.passport
						this.userInfo.phone = res.phone
						this.userInfo.address = res.address
						this.userInfo.nationality = res.nationality
					})
			},
			changeCheckbox(evt) {},
			changeDate(evt) {
				this.date = evt.result;
			}
		}
	};
</script>

<style lang="scss" scoped>
	.input-clz {
		flex-shrink: 0;
		height: 60px !important;
	}

	.avatar-clz {
		flex-shrink: 0;
		height: 60px !important;
		text-align: left;
	}

	.avatar-avatar {
		width: 55px;
		height: 55px;
	}

	.checkbox-clz {
		flex-shrink: 0;
		height: 60px !important;
		text-align: center;
	}

	.date-clz {
		flex-shrink: 0;
		height: 60px !important;
	}

	.input3-clz {
		flex-shrink: 0;
		height: 60px !important;
	}

	.input1-clz {
		flex-shrink: 0;
		height: 60px !important;
	}

	.input2-clz {
		flex-shrink: 0;
		height: 60px !important;
	}

	.button-clz {
		margin-left: 5px;
		width: calc(100% - 5px - 5px) !important;
		margin-top: 30px;
		margin-bottom: 5px;
		margin-right: 5px;
	}

	.button-button-clz {
		font-size: 18px !important;
		margin: 3px !important;
	}

	.container18437 {
		padding-left: 0px;
		padding-right: 0px;

		font-size: 14px;
	}

	.container18437 {}
</style>
