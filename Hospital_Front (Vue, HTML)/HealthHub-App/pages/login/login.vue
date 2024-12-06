<template>
	<view>
		<view class="img-a">
			<view class="user-icon">
				<image :src="logo" style="width: 200px; height: 200px;"></image>
			</view>
		</view>
		<view class="login-view" style="">
			<view class="t-login">
				<form class="cl">
					<view class="t-a">
						<text class="txt">Account</text>
						<input type="number" name="account" placeholder="Please input account" maxlength="11"
							v-model="account" />
					</view>
					<u-toast ref="uToast"></u-toast>
					<view class="t-a">
						<text class="txt">Password</text>
						<input type="password" name="code" maxlength="18" placeholder="Please input password"
							v-model="pwd" />
					</view>
					<button @tap="login()">Login</button>
					<view class="reg" @tap="reg()">Register</view>
					<view class="links">
						<text class="link-highlight" @click="forget">Forget password?</text>
					</view>
				</form>

				<view class="t-f"><text>—————— Other options ——————</text></view>
				<view class="t-e cl">
					<view class="t-g" @tap="wxLogin()">
						<image src="@/static/img/wx.png"></image>
					</view>
					<view class="t-g" @tap="zfbLogin()">
						<image src="@/static/img/qq.png"></image>
					</view>
				</view>
			</view>
		</view>
		<view class="copy-right">CopyRight 2023.04.10, BSUIR, He Runhai</view>
	</view>
</template>
<script>
	import server from '@/common/Global.js'
	export default {
		data() {
			return {
				auth: 'patient',
				account: '', //手机号码
				pwd: '', //密码
				logo: '../../static/img/logo.png',
			};
		},
		onLoad() {},
		methods: {
			//当前登录按钮操作
			login() {
				var that = this;
				if (!that.account) {
					uni.showToast({
						title: 'Please input your account first',
						icon: 'none'
					});
					return;
				}
				if (!/^\d{3,9}$/.test(that.account)) {
					uni.showToast({
						title: 'Please input correct account',
						icon: 'none'
					});
					return;
				}
				if (!that.pwd) {
					uni.showToast({
						title: 'Please input your password',
						icon: 'none'
					});
					return;
				}

				uni.showLoading({
					title: 'Loading'
				});

				uni.request({
					url: `${server.site_add}/patient/login/${that.account}/${that.pwd}?authorization=${that.auth}`,
					method: 'GET',
					success: (res) => {
						if (res.statusCode === 200) {

							if (res.data == true) {
								sessionStorage.setItem('account', JSON.stringify(that.account))
								setTimeout(() => {
										uni.hideLoading();
										this.$refs.uToast.show({
											title: 'Success login',
											type: 'success'
										})
									}, 300),
									setTimeout(() => {
										uni.reLaunch({
											url: '/pages/home/home',
											animationType: 'pop-in',
											animationDuration: 300
										})
									}, 1000)
							} else {
								setTimeout(() => {
									uni.hideLoading();
									this.$refs.uToast.show({
										title: 'Account / Password incorrect',
										type: 'error'
									})
								}, 300)
							}

						}
					}
				});
			},
			//注册按钮点击
			reg() {
				uni.navigateTo({
					url: '/pages/login/register',
					animationType: 'pop-in',
					animationDuration: 300
				})
			},
			forget(){
				uni.navigateTo({
					url: '/pages/login/forget',
					animationType: 'pop-in',
					animationDuration: 300
				})
			},
			//等三方微信登录
			wxLogin() {
				uni.showToast({
					title: 'Wechat Login',
					icon: 'none'
				});
			},
			//第三方支付宝登录
			zfbLogin() {
				uni.showToast({
					title: 'Alipay Login',
					icon: 'none'
				});
			}

		}
	}
</script>
<style lang="scss">
	.user-icon {
		width: 100%;
		display: flex;
		justify-content: center;

		>image {
			width: 150rpx;
			height: 150rpx;
		}
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
			color: #b49950;
		}
	}

	.txt {
		font-size: 32rpx;
		font-weight: bold;
		color: #333333;
	}

	.img-a {
		width: 100%;
		height: 450rpx;
		background-image: url(../../static/img/head.png);
		background-size: 100%;
	}

	.reg {
		font-size: 28rpx;
		color: #fff;
		height: 90rpx;
		line-height: 90rpx;
		border-radius: 50rpx;
		font-weight: bold;
		background: #f5f6fa;
		color: #000000;
		text-align: center;
		margin-top: 30rpx;
	}

	.login-view {
		width: 100%;
		position: relative;
		margin-top: -120rpx;
		background-color: #ffffff;
		border-radius: 8% 8% 0% 0;
	}

	.t-login {
		width: 600rpx;
		margin: 0 auto;
		font-size: 28rpx;
		padding-top: 80rpx;
	}

	.t-login button {
		font-size: 28rpx;
		background: #2796f2;
		color: #fff;
		height: 90rpx;
		line-height: 90rpx;
		border-radius: 50rpx;
		font-weight: bold;
	}

	.t-login input {
		height: 90rpx;
		line-height: 90rpx;
		margin-bottom: 50rpx;
		border-bottom: 1px solid #e9e9e9;
		font-size: 28rpx;
	}

	.t-login .t-a {
		position: relative;
	}

	.t-b {
		text-align: left;
		font-size: 42rpx;
		color: #ffffff;
		padding: 130rpx 0 0 70rpx;
		font-weight: bold;
		line-height: 70rpx;
	}

	.t-login .t-c {
		position: absolute;
		right: 22rpx;
		top: 22rpx;
		background: #5677fc;
		color: #fff;
		font-size: 24rpx;
		border-radius: 50rpx;
		height: 50rpx;
		line-height: 50rpx;
		padding: 0 25rpx;
	}

	.t-login .t-d {
		text-align: center;
		color: #999;
		margin: 80rpx 0;
	}

	.t-login .t-e {
		text-align: center;
		width: 250rpx;
		margin: 80rpx auto 0;
	}

	.t-login .t-g {
		float: left;
		width: 50%;
	}

	.t-login .t-e image {
		width: 50rpx;
		height: 50rpx;
	}

	.t-login .t-f {
		text-align: center;
		margin: 150rpx 0 0 0;
		width: 100%;
		color: #666;
	}

	.t-login .t-f text {
		margin-left: 20rpx;
		color: #aaaaaa;
		font-size: 27rpx;
	}

	.t-login .uni-input-placeholder {
		color: #aeaeae;
	}

	.cl {
		zoom: 1;
	}

	.cl:after {
		clear: both;
		display: block;
		visibility: hidden;
		height: 0;
		content: '\20';
	}

	.copy-right {
		// bottom: 100rpx;
		margin: 150rpx auto 0;
		bottom: 0;
		width: 100%;
		color: $uni-text-color-grey;
		text-align: center;
		font-size: 24rpx;
	}
</style>
