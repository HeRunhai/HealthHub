<template>
	<view class="content">
		<view class="user-icon">
			<image src="../../static/img/logo.png" style="width: 200px; height: 200px;"></image>
		</view>
		<view class="uni-form-item uni-column">
			<input type="tel" class="uni-input" name="" placeholder="Account" v-model="account" />
		</view>
		<view class="uni-form-item uni-column">
			<input type="tel" class="uni-input" name="" placeholder="Phone number" v-model="phone" />
		</view>
		<view class="uni-form-item uni-column column-with-btn">
			<input type="number" class="uni-input" name="" placeholder="Verfication code" v-model="code" />
			<button :class="{active : !disableCodeBtn}" :disabled="disableCodeBtn"
				@tap="sendCode">{{codeBtn.text}}</button>
		</view>
		<view class="uni-form-item uni-column column-with-btn">
			<input type="text" class="uni-input" name="" placeholder="Captcha code" v-model="captcha" />
			<image src="../../static/img/captcha.jpg" mode="" class="img-captcha"></image>
		</view>
		<view class="uni-form-item uni-column">
			<input type="password" class="uni-input" name="" placeholder="Password" v-model="password" />
		</view>
		<u-toast ref="uToast"></u-toast>
		<button type="primary" @click="register">Register</button>
		<view class="links">Already have account？<view class="link-highlight" @tap="gotoLogin">Click to login</view>
		</view>
	</view>
</template>

<script>
	import server from '@/common/Global.js'
	export default {
		data() {
			return {
				account: '',
				phone: '',
				password: '',
				code: '',
				captcha: '',
				seconds: 10,
				codeBtn: {
					text: 'Get SMS',
					waitingCode: false,
					count: this.seconds
				}
			}
		},
		onLoad() {

		},
		methods: {
			sendCode: function() {
				this.codeBtn.waitingCode = true;
				this.codeBtn.count = this.seconds;
				this.codeBtn.text = this.codeBtn.count + 's';

				let countdown = setInterval(() => {
					this.codeBtn.count--;
					this.codeBtn.text = this.codeBtn.count + 's';
					if (this.codeBtn.count < 0) {
						clearInterval(countdown);
						this.codeBtn.text = 'Resend';
						this.codeBtn.waitingCode = false;
					}
				}, 1000);
			},
			gotoLogin: function() {
				uni.navigateTo({
					url: '/pages/login/login'
				})
				uni.hideLoading();
			},
			register: function() {
				var that = this
				if (!that.account) {
					uni.showToast({
						title: 'Please input your account first',
						icon: 'none'
					});
					return;
				}
				if (!/^\d{3,9}$/.test(that.account)) {
					uni.showToast({
						title: 'The account must be three to nine digits',
						icon: 'none'
					});
					return;
				}
				if (!that.password) {
					uni.showToast({
						title: 'Please input your password',
						icon: 'none'
					});
					return;
				}
				if(!/^([yY][fF][xX]+5)$/.test(that.captcha)){
					uni.showToast({
						title: 'Captcha code is wrong',
						icon: 'none'
					});
					this.captcha = ''
					return;
				}
				
				uni.showLoading({
					title: 'Loading'
				});
				uni.request({
						url: `${server.site_add}/patient/register/${that.account}/${that.password}/${that.phone}?authorization=patient`,
						method: 'PUT',
						success: (res) => {

							if (res.statusCode === 200) {
								if (res.data == "success") {
									setTimeout(() => {
											uni.hideLoading();
											this.$refs.uToast.show({
												title: 'Register successful',
												type: 'success'
											})
										}, 300),
										setTimeout(() => {
											uni.navigateTo({
												url: '/pages/login/login',
												animationType: 'pop-in',
												animationDuration: 300
											})
										}, 1000)
								} else {
									setTimeout(() => {
										uni.hideLoading();
										this.$refs.uToast.show({
											title: res.data,
											type: 'error'
										})
									}, 300)
								}
							}
							
						}
				})
		}
	},
	computed: {
		disableCodeBtn: function() {
			return this.codeBtn.waitingCode || this.phone.length < 8;
		}
	}
	}
</script>

<style lang="scss" scoped>
	$color-primary: #b49950;

	.content {
		padding: 60upx 100upx 100upx;
	}

	.logo {
		text-align: center;

		image {
			height: 200upx;
			width: 200upx;
			margin: 0 0 40upx;
		}
	}

	.uni-form-item {
		margin-bottom: 40upx;
		padding: 0;
		border-bottom: 1px solid #e3e3e3;

		.uni-input {
			font-size: 30upx;
			padding: 7px 0;
			height: 70rpx;
		}
	}

	.user-icon {
		width: 100%;
		display: flex;
		justify-content: center;

		.image {
			width: 150rpx;
			height: 150rpx;
		}
	}

	.column-with-btn {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;

		button {
			font-size: 24upx;
			margin: 0;
			width: 180upx;
			text-align: center;

			&:after {
				border: none
			}

			&.active {
				background-color: $color-primary;
				color: $uni-text-color-inverse;
			}
		}
	}

	.img-captcha {
		width: 150upx;
		height: 60upx;
	}

	button[type="primary"] {
		background-color: #1E90FF;
		border-radius: 0;
		font-size: 34upx;
		margin-top: 60upx;
	}

	.links {
		text-align: center;
		margin-top: 40upx;
		font-size: 26upx;
		color: #999;

		view {
			display: inline-block;
			vertical-align: top;
			margin: 0 10upx;
		}

		.link-highlight {
			color: $color-primary
		}
	}
</style>
