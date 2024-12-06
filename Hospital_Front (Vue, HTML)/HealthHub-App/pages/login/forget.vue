<template>
	<view class="content">
		<view v-if="!changeSuccess">
			<view class="user-icon">
				<image src="../../static/img/logo.png" style="width: 200px; height: 200px;"></image>
			</view>
			<view class="uni-form-item uni-column">
				<input type="tel" class="uni-input" name="" placeholder="Phone number" v-model="phone"/>
			</view>
			<view class="uni-form-item uni-column column-with-btn">
				<input type="number" class="uni-input" name="" placeholder="Verfication code" />
				<button :class="{active : !disableCodeBtn}" :disabled="disableCodeBtn" @tap="sendCode">{{codeBtn.text}}</button>
			</view>
			<view class="uni-form-item uni-column column-with-btn">
				<input type="text" class="uni-input" name="" placeholder="Captcha code" v-model="captchaImg" />
				<image src="../../static/img/captcha.jpg" mode="" class="img-captcha"></image>
			</view>
			<view class="uni-form-item uni-column">
				<input type="password" class="uni-input" name="" placeholder="New password" />
			</view>
			<button type="primary" @tap="changeSuccess = !changeSuccess">Submit</button>
		</view>
		<view v-if="changeSuccess">
			<view class="text-reset">Reset password successfully, please login again</view>
			<button type="primary" @tap="gotoLogin">Login now</button>
		</view>
		<view class="links">Remember password?<view class="link-highlight" @tap="gotoLogin">Click to login</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				captchaImg: '',
				seconds: 10,
				phone:'',
				codeBtn: {
					text: 'Get SMS',
					waitingCode: false,
					count: this.seconds
				},
				changeSuccess: false
			}
		},
		onLoad() {

		},
		methods: {
			sendCode: function () {
				this.codeBtn.waitingCode = true;
				this.codeBtn.count = this.seconds;
				this.codeBtn.text = this.codeBtn.count + 's';
				
				let countdown = setInterval( () => {
					this.codeBtn.count--;
					this.codeBtn.text = this.codeBtn.count + 's';
					if( this.codeBtn.count < 0 ){
						clearInterval(countdown);
						this.codeBtn.text = 'Resend';
						this.codeBtn.waitingCode = false;
					}
				},1000);
			},
			gotoLogin: function () {
				uni.navigateTo({
					url: '/pages/login/login'
				})
			}
		},
		computed: {
			disableCodeBtn: function (){
				return this.codeBtn.waitingCode || this.phone.length < 8;
			} 
		}
	}
</script>

<style lang="scss" scoped>
	$color-primary: #b49950;
	.content{
		padding: 100upx;
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
	.uni-form-item{
		margin-bottom: 40upx;
		padding: 0;
		border-bottom: 1px solid #e3e3e3;
		.uni-input{
			font-size: 30upx;
			padding: 7px 0;
			height: 70rpx;
		}
	}
	.column-with-btn{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		button{
			font-size: 24upx;
			margin: 0;
			width: 180upx;
			text-align: center;
			&:after{
				border: none
			}
			&.active{
				background-color: $color-primary;
				color: $uni-text-color-inverse;
			}
		}
	}
	.img-captcha{
		width: 150upx;
		height: 60upx;
	}
	button[type="primary"]{
		background-color:  #1E90FF;
		border-radius: 0;
		font-size: 34upx;
		margin-top: 80upx;
	}
	.text-reset{
		text-align: center;
		margin-bottom: 100upx;
		font-size: 36upx;
	}
	.links{
		text-align: center;
		margin-top: 40upx;
		font-size: 26upx;
		color: #999;
		view{
			display: inline-block;
			vertical-align: top;
			margin: 0 10upx;
		}
		.link-highlight{
			color: $color-primary
		}
	}
</style>
