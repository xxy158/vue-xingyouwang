<template>
    <div>
        <div class="header">
            <div class="content">
                <div class="mainleft">
                    <span class="logo">您好，兴游网 欢迎您</span>
                    <ul class="navlist">
                        <li>
                            <router-link to="/header/main">首页</router-link>
                        </li>
                        <li>
                            <router-link to="/header/recoment">热门推荐</router-link>
                        </li>
                        <li>
                            <router-link to="/header/message">旅游资讯</router-link>
                        </li>
                        <li>
                            <router-link to="/header/share">游记分享</router-link>
                        </li>
                        <li>
                            <router-link to="/header/customized">专属推荐</router-link>
                        </li>
                        <li>
                            <router-link to="/header/aboutUs">关于我们</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="forgetpass_back">
            <div class="forget">
                <div class="inpupass">
                    <div class="register_who">
                        <p class="login_title"><span>兴游网</span> 登录</p>
                        <p class="iconintro">登录兴游网，寻找合适的旅游景区</p>
                    </div>
                    <form action="" class="subform">
                        <div class="tel">
                            <input type="text" v-model="telphone" placeholder="请输入手机号码">
                        </div>
                        <div class="inpunewpass passwordNum">
                            <input type="password" v-model="password" placeholder="请输入密码（6位及以上数字或字母组合）">
                            <div class="hide"></div>
                        </div>
                        <div class="selectjob">
                            <div @click="xiala()">
                                <input type="text" placeholder="请选择性别" v-model="sex" class="selectsub" disabled
                                    style="cursor: pointer;">
                                <img src="../assets/image/xiala.png" alt="">
                            </div>
                            <div class="canchoose" v-show="sexshow">
                                <div value="1" @click="closesex('男')">男</div>
                                <div value="2" @click="closesex('女')">女</div>
                            </div>
                        </div>
                        <div class="getcodes">
                            <input type="text" v-model="writecode" class="writecode" autocomplete="off" placeholder="请输入验证码">
                            <div class="authcode">
                                <input type="button" class="codenum" v-model="code" @click="createCode()" readonly>
                            </div>
                            <div class="alert yanzhengma"  @click="createCode()">
                                <a href="javascript:void(0)" class="js-re-authcode d-b" id="change">点击换一张</a>
                            </div>
                        </div>
                        <p class="tip">
                            <input type="checkbox" class="check" checked v-model="checks" @click="changes">
                            <span class="js-switch-deal cursor-p">我已阅读并同意相关服务条款</span>
                            <span>|</span>
                            <a href="http://web.7k7k.com/html/user/20101217-3677.html" class="c-b"
                                target="_blank">《兴游网注册协议》</a>
                        </p>
                    </form>
                    <div class="besure" @click="register">提交申请</div>
                    <p class="hasnum">已有账号，<span class="login" @click="seelogin()">立即登录</span></p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: '',
        data() {
            return {
                telphone:'',
                password:'',
                sex:'',
                code:'',
                writecode:'',
                checks:true,
                sexshow:false
            }
        },
        mounted() {
            this.createCode()
        },
        methods: {
            xiala(){
                this.sexshow=!this.sexshow
            },
            closesex(sex){
                this.xiala()
                this.sex=sex
            },
            createCode(){
                let str='0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
                let maxlen=4;
                let code='';
                for(let i=0;i<maxlen;i++){
                   code+=str.charAt(Math.floor(Math.random()*str.length));
                }
                this.code=code
            },
            changes(){
                this.checks=!this.checks
            },
            seelogin(){
                this.$router.push({
                    name:'main',
                    path:'/header/main',
                    params:{
                        showlogin:true
                    }
                })
            },
            register(){
                if(!this.checks){
                    this.$layer.msg("请阅读并同意相关服务条款")
                    return
                }
                let params={}
                params.telphone=this.telphone
                params.password=this.password
                params.sex=this.sex
                if(!params.telphone){
                    this.$layer.msg("请输入手机号码")
                    return
                }
                let mobile = /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/;
                if(!mobile.test(params.telphone)){
                    this.$layer.msg("请输入正确的手机号码")
                    return
                }
                if(!params.password){
                    this.$layer.msg("请输入密码")
                    return
                }
                let pass = /^[0-9a-zA-Z]{6,}$/;
                if(!pass.test(params.password)){
                    this.$layer.msg("请输入正确格式的密码")
                    return
                }
                if(this.writecode==''||this.writecode==null){
                    this.$layer.msg("请填写验证码")
                    return
                }
                if(this.writecode.toLowerCase()!=this.code.toLowerCase()){
                    this.$layer.msg("验证码不正确")
                    return
                }
                this.$axios.post('/travel/register',params).then(res=>{
                    console.log(res)
                    if(res.data.success){
                        this.$layer.msg(res.data.msg)
                        this.$router.push({
                            name:'main',
                            path:'/header/main',
                            params:{
                                showlogin:true
                            }
                        })
                    }else{
                        this.$layer.msg(res.data.msg)
                    }
                })
            }
        },
    }
</script>

<style scoped>
    .header {
        width: 100%;
        z-index: 1000;
        background: rgba(45, 51, 54, 0.9);
    }

    .content {
        width: 1520px;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 90px;
        line-height: 90px;
    }

    .mainleft {
        display: flex;
        align-items: center;
        color: #fff;
    }

    .logo {
        font-size: 20px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
    }

    ul.navlist {
        position: relative;
        display: flex;
        align-items: center;
        font-size: 20px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
    }

    ul.navlist li {
        cursor: pointer;
        width: 100px;
        text-align: center;
        margin-left: 40px;
    }

    ul.navlist li.on {
        font-family: PingFangSC-Semibold, PingFang SC;
        font-weight: 600;
        color: rgba(17, 123, 241, 1);
    }

    ul.navlist li.on::after {
        display: block;
        content: '';
        position: absolute;
        width: 100px;
        height: 10px;
        background: rgba(17, 123, 241, 1);
        top: 0;
    }

    ul.navlist li a {
        width: 100%;
        color: #fff;
    }

    ul.navlist li.on a {
        font-family: PingFangSC-Semibold, PingFang SC;
        font-weight: 600;
        color: rgba(17, 123, 241, 1);
    }

    .login_register {
        display: flex;
        align-items: center;
        font-size: 18px;
        font-family: PingFangSC-Regular, PingFang SC;
        color: rgba(52, 52, 52, 1);
    }

    .searchdetails {
        margin-right: 40px;
        position: relative;
        width: 223px;
        height: 50px;
        line-height: 50px;
        background: rgba(255, 255, 255, 1);
        border-radius: 8px;
        border: 2px solid rgba(20, 126, 249, 1);
    }

    .search {
        width: 100%;
        box-sizing: border-box;
        padding-left: 20px;
    }

    .search::placeholder {
        font-size: 16px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: rgba(151, 151, 151, 1);
    }

    .searchdetails img {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 20px;
        width: 15px;
        height: 16px;
        cursor: pointer;
    }

    .allregister {
        display: flex;
        align-items: center;
        width: 158px;
        height: 50px;
        line-height: 23px;
        box-sizing: border-box;
        padding: 11px 0;
        background: rgba(255, 255, 255, 1);
        border-radius: 8px;
        border: 2px solid rgba(20, 126, 249, 1);
    }

    .allregister span {
        text-align: center;
        width: 50%;
        font-size: 18px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: rgba(52, 52, 52, 1);
        cursor: pointer;
    }

    .allregister span.login {
        border-right: 2px solid rgba(20, 126, 249, 1);
    }


    .forgetpass_back {
        background: url('') no-repeat;
    }

    .forgetpass_back .forget {
        width: 1200px;
        height: 835px;
        background: rgba(255, 255, 255, 1);
        border-radius: 8px;
        margin: 50px auto 0 auto;
    }

    .subform input {
        width: 570px;
        height: 60px;
        line-height: 60px;
        background: rgba(244, 244, 244, 1);
        border-radius: 8px;
        box-sizing: border-box;
        padding-left: 40px;
        font-size: 18px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: rgba(52, 52, 52, 1);
    }

    .telphone::placeholder {
        font-size: 18px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: rgba(151, 151, 151, 1);
    }

    .getcodeNum {
        margin-top: 5px;
        position: relative;
        font-size: 18px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
    }

    .getcode {
        width: 570px;
        height: 60px;
        background: rgba(244, 244, 244, 1);
        border-radius: 8px;
        line-height: 60px;
        /*padding-left: 40px;*/
        box-sizing: border-box;
        color: rgba(52, 52, 52, 1);

    }

    .getname {
        width: 160px;
        height: 60px;
        line-height: 60px;
        text-align: center;
        background: rgba(17, 123, 241, 1);
        box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.15);
        border-radius: 0 8px 8px 0;
        color: rgba(255, 255, 255, 1);
        position: absolute;
        right: 0;
        top: 0;
    }

    .codewrong {
        opacity: 0;
        padding-top: 20px;
        font-size: 16px;
        color: rgba(241, 17, 64, 1);
    }

    .besure {
        margin-top: 38px;
        width: 570px;
        height: 60px;
        line-height: 60px;
        text-align: center;
        background: rgba(17, 123, 241, 1);
        border-radius: 8px;
        font-size: 18px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        cursor: pointer;
    }

    .besure.nochecked {
        color: #f7fafc;
        background-color: #dddddd;
    }

    .inpupass {
        width: 570px;
        margin: 100px auto;
    }

    .inpupass .passwordNum {
        position: relative;
    }

    .inpupass .passwordNum input {
        width: 570px;
        height: 60px;
        line-height: 60px;
        padding-left: 40px;
        box-sizing: border-box;
        background: rgba(244, 244, 244, 1);
        border-radius: 8px;
        font-size: 18px;
        font-family: PingFangSC-Regular, PingFang SC;
    }

    /* .inpupass .passwordNum .hide {
            width: 21px;
            height: 21px;
            position: absolute;
            top: 50%;
            right: 40px;
            transform: translateY(-50%);
            cursor: pointer;
            background: url(../assets/image/hide.png) no-repeat;
            background-size: 100% 100%;
        }
        .inpupass .passwordNum .hide.show{
            background: url(../assets/image/showpwd.png) no-repeat center;
            background-size: contain;
            width: 30px;
            right: 35px;
        } */
    .passwordNum {
        margin-top: 30px;
    }


    .register_who {
        padding-top: 90px;
        text-align: center;
        font-size: 16px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: rgba(52, 52, 52, 1);
    }

    .icon img {
        width: 257px;
        height: 70px;
    }

    .iconintro {
        font-size: 14px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: rgba(52, 52, 52, 1);
        letter-spacing: 1px;
        padding-top: 10px;
    }

    .subform {
        margin-top: 10px;
    }

    .subform>div {
        display: flex;
        ;
        margin-top: 20px;
        position: relative;
    }

    .selectjob {
        position: relative;
        cursor: pointer;
    }

    .selectsub {
        width: 100%;
        height: 60px;
        line-height: 60px;
        padding-left: 40px;
        box-sizing: border-box;
        border: none;
        background: rgba(244, 244, 244, 1);
        border-radius: 8px;
        font-size: 18px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: rgba(151, 151, 151, 1);
        -webkit-appearance: none;
        /*去掉右侧下拉三角默认样式*/
        appearance: none;
    }

    .selectsub.change {
        color: rgba(52, 52, 52, 1);
    }

    .selectjob img {
        width: 21px;
        height: 21px;
        position: absolute;
        top: 50%;
        right: 40px;
        transform: translateY(-50%);
    }

    .hasnum {
        padding-top: 15px;
        font-size: 16px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: rgba(151, 151, 151, 1);
    }

    .hasnum span {
        cursor: pointer;
        color: rgba(17, 123, 241, 1);
    }

    .disabled {
        pointer-events: none;
        background-color: rgba(220, 220, 220);
        cursor: not-allowed;
    }

    .subform .writecode {
        width: 250px;
    }

    .authcode {
        cursor: pointer;
        width: 350px;
        height: 60px;
        line-height: 60px;
        margin-left: 18px;
    }

    .subform .codenum {
        width: 100%;
        padding-left: 0;
        font-family: Arial;
        font-style: italic;
        font-weight: 100;
        font-size: 35px;
        border: 0;
        letter-spacing: 7px;
        color: blue;
        background: #d4d4d4;
        cursor: pointer;
    }

    .alert.yanzhengma {
        height: 60px;
        width: 300px;
        line-height: 60px;
        font-size: 12px;
        color: #888;
    }

    a#change {
        padding-left: 20px;
        color: #52b4fc;
    }

    p.tip {
        width: 75%;
        margin: 0 auto;
        display: flex;
        padding-top: 20px;
        align-items: center;
        font-size: 16px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
    }

    p.tip .check {
        width: 20px;
        height: 20px;
    }

    span.js-switch-deal.cursor-p {
        padding: 0 4px;
    }

    a.c-b {
        font-size: 16px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
    }

    p.login_title {
        font-size: 20px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: rgba(52, 52, 52, 1);
        letter-spacing: 1px;
        padding-top: 30px;
    }

    p.login_title span {
        font-size: 27px;
        color: rgb(30, 30, 30);
        font-family: PingFangSC-Medium, PingFang SC;
    }

    .canchoose {
        /* display: none; */
        width: 100%;
        position: absolute;
        top: 61px;
        left: 0;
        z-index: 1000;
    }

    .canchoose>div {
        height: 60px;
        line-height: 60px;
        background: rgba(244, 244, 244, 1);
        box-sizing: border-box;
        padding-left: 40px;
        font-size: 18px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: rgba(52, 52, 52, 1);
        border-bottom: 1px solid #fff;

    }
</style>