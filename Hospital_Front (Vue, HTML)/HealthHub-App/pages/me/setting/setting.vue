<template>
	<div>
		<view class="changepwd">
			<view class="user-icon">
				<image :src="logo" style="width: 200px; height: 200px;"></image>
			</view>
			<u-form labelPosition="left" labelWidth="80" :model="model1" :rules="rules" ref="form1">
				<u-form-item label="Old password" :labelWidth="200" prop="userInfo.oldpwd" borderBottom ref="item1">
					<u-input class="inputx" type="password" placeholder="Please input old password" inputAlign="right"
						v-model="model1.userInfo.oldpwd"></u-input>
				</u-form-item>
				<u-form-item label="New password" :labelWidth="240" prop="userInfo.newpwd" borderBottom ref="item1">
					<u-input class="inputx" type="password" placeholder="Please input new passward" inputAlign="right"
						v-model="model1.userInfo.newpwd"></u-input>
				</u-form-item>
				<u-form-item label="Confirm passward" :labelWidth="260" prop="userInfo.newpwdr" borderBottom
					ref="item1">
					<u-input class="inputx" type="password" placeholder="Input passward again" inputAlign="right"
						v-model="model1.userInfo.newpwdr"></u-input>
				</u-form-item>
			</u-form>
			<u-button class="mt50" @click="submit" type="primary">Change</u-button>
		</view>
		<view class="links">
			<text class="link-highlight" @click="forget">Forget password?</text>
		</view>
		<image :src="exit_logo" @click="exit" style="height: 100rpx; width: 100rpx; margin-top: 150rpx; margin-left: 600rpx;"></image>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				model1: {
					userInfo: {
						oldpwd: '',
						newpwd: '',
						newpwdr: '',
					},
				},
				logo: '../../../static/img/logo.png',
				exit_logo: '../../../static/img/exit.png',
				rules: {
					'userInfo.oldpwd': {
						type: 'string',
						required: true,
						message: 'Please input old password',
						trigger: ['blur', 'change']
					},
					'userInfo.newpwd': {
						type: 'string',
						required: true,
						message: 'Please input new password again',
						trigger: ['blur', 'change']
					},
					'userInfo.newpwdr': {
						type: 'string',
						required: true,
						message: 'Please input new password again',
						trigger: ['blur', 'change']
					},
				},
			};
		},
		methods: {
			submit() {

			},
			exit() {
				uni.navigateTo({
					url: '/pages/login/login',
					animationType: 'pop-in',
					animationDuration: 300
				})
			},
			forget() {
				uni.navigateTo({
					url: '/pages/login/forget',
					animationType: 'pop-in',
					animationDuration: 300
				})
			}
		},
	};
</script>

<style lang="scss" scoped>
	.user-icon {
		width: 100%;
		display: flex;
		justify-content: center;

		>image {
			width: 150rpx;
			height: 150rpx;
		}
	}

	.changepwd {
		width: 100%;
		margin: 0 auto;
	}

	.inputx {
		width: 100%;
		text-align: right;
	}

	.mt50 {
		margin-top: 50rpx;
		background-color: #2796f2;
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
</style>
