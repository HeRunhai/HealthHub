<script>
	export default {
		globalData: {
			userInfo: null,
			tabBar: [],
			homePage: '/pages/home/home',
			pages: ['/pages/login/login','/pages/home/home', '/pages/home/appointment/department', '/pages/home/consultation/department','/pages/home/appointment/doctors_list', '/pages/home/appointment/doctor_page', '/pages/home/appointment/finish', '/pages/home/consultation/doctors_list', '/pages/message/messages', '/pages/records/records', '/pages/me/me', '/pages/me/mycard/mycard'],
			userData: {}
		}
	};
</script>
<style lang="scss">
	@import 'common/diygw-ui/iconfont.scss';
	@import 'common/diygw-ui/animate.css';
	@import 'common/diygw-ui/index.scss';
	@import './uni_modules/diy-uview-ui/index.scss';
	@import 'common/diygw-ui/uview.scss';
</style>
