<template>
    <div class="loginback">
        <div class="logincontent">
            <img src="../../assets/image/close.png" alt="" class="close" @click="closelogin">
            <p class="login_title"><span>兴游网</span> 登录</p>
            <p class="login_intro">登录兴游网，寻找合适的旅游景区</p>
            <div class="input ">
                <label for="">账号：</label>
                <input type="text" v-model="telphone" class="phone" placeholder="请输入账号/手机号">
            </div>
            <div class="input togglebar">
                <label for="">密码：</label>
                <input type="password" v-model="password" class="code" placeholder="请输入密码" autocomplete="new-password">
                <div class="hide"></div>
            </div>
            <div class="login_other">
                <div class="other_way ">
                    <span>没有账号？<router-link to="/register">立即注册</router-link></span>
                </div>
                <div class="forget"><a href="./forget/forgetPass.html">忘记密码？</a></div>
            </div>
            <div class="tologin" @click="userlogin()">登录</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: '',
        inject:['reload'],
        data() {
            return {
                telphone:'',
                password:''
            }
        },
        methods: {
            closelogin(){
                this.$emit('closelogin')
            },
            userlogin(){
                var loginParam={}
                loginParam.telphone=this.telphone;
                loginParam.password=this.password;
                if(!loginParam.telphone){
                    this.$layer.msg("请输入手机号码")
                    return
                }
                var mobile = /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/;
                if(!mobile.test(loginParam.telphone)){
                    this.$layer.msg("请输入正确的手机号码")
                    return
                }
                if(!loginParam.password){
                    this.$layer.msg("请输入密码")
                    return
                }
                this.$axios.post('/travel/login',loginParam).then(res=>{
                    if(res.data){
                        this.$layer.msg(res.data.msg)
                        localStorage.setItem('users',JSON.stringify(res.data.data))
                        this.closelogin()
                        this.reload()
                    }
                })
            }
        },
    }
</script>

<style scoped>
    .loginback {
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0;
        left: 0;
        background: rgba(0, 0, 0, 0.7);
        z-index: 2000;
    }

    .logincontent {
        position: relative;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 630px;
        /* height:593px; */
        background: rgba(255, 255, 255, 1);
        border-radius: 8px;
        box-sizing: border-box;
        padding: 30px 30px 40px;
        text-align: center;
    }

    .close {
        position: absolute;
        right: 30px;
        top: 30px;
        width: 30px;
        height: 30px;
        cursor: pointer;
    }

    .login_title {
        font-size: 20px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: rgba(52, 52, 52, 1);
        letter-spacing: 1px;
        padding-top: 30px;
    }

    .login_title span {
        font-size: 27px;
        color: rgb(30, 30, 30);
        font-family: PingFangSC-Medium, PingFang SC;
    }

    .login_intro {
        font-size: 14px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: rgba(52, 52, 52, 1);
        letter-spacing: 1px;
        padding-top: 10px;
    }

    .input {
        position: relative;
        margin-top: 30px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: rgba(52, 52, 52, 1);
        letter-spacing: 1px;
    }

    label {
        font-size: 22px;
        letter-spacing: 10px;
    }

    .logincontent input {
        /* margin-top: 30px; */
        font-size: 18px;
        width: 80%;
        height: 60px;
        line-height: 60px;
        background: rgba(244, 244, 244, 1);
        border-radius: 8px;
        padding-left: 20px;
        box-sizing: border-box;
    }

    .logincontent input::placeholder {
        font-size: 18px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: rgba(151, 151, 151, 1);
    }

    .getcode {
        position: absolute;
        top: 0;
        right: 0;
        width: 160px;
        height: 60px;
        line-height: 60px;
        text-align: center;
        background: rgba(17, 123, 241, 1);
        box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.15);
        border-radius: 0 8px 8px 0;
        font-size: 18px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
    }

    .login_other {
        padding-top: 15px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 16px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: rgba(52, 52, 52, 1);
        letter-spacing: 1px;
    }

    .other_way {
        display: flex;
    }

    .other_way a {
        color: rgb(72, 90, 246);
    }

    .other_way span:nth-of-type(1) {
        color: rgb(138, 138, 138);
    }

    .other_way span:nth-of-type(2) {
        padding-left: 20px;
    }

    .tologin {
        margin: 0 auto;
        margin-top: 33px;
        width: 65%;
        height: 50px;
        line-height: 50px;
        text-align: center;
        background: rgba(17, 123, 241, 1);
        border-radius: 4px;
        font-size: 20px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: rgba(255, 255, 255, 1);
        letter-spacing: 1px;
        cursor: pointer;
    }

    /* 密码 */
    .hide {
        width: 21px;
        height: 21px;
        position: absolute;
        top: 50%;
        right: 40px;
        transform: translateY(-50%);
        cursor: pointer;
        background: url(../../assets/image/hide.png) no-repeat;
        background-size: 100% 100%;
    }

    .hide.show {
        background: url(../../assets/image/showpwd.png) no-repeat center;
        background-size: contain;
        width: 30px;
        right: 35px;
    }

    /* 已经登录成功 */
    .has_login {
        display: none;
        width: 70px;
        height: 70px;
        border-radius: 50%;
        cursor: pointer;
        position: relative;
    }

    .has_login>img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        object-fit: cover;
    }
</style>