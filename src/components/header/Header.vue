<template>
    <div class="header">
        <div class="content">
            <div class="mainleft">
                <span class="logo">您好，兴游网 欢迎您</span>
                <ul class="navlist">
                    <li><router-link to="/main" tag="a">首页</router-link></li>
                    <li><router-link to="/recoment" tag="a">热门推荐</router-link></li>
                    <li><router-link to="/message" tag="a">旅游资讯</router-link></li>
                    <li><router-link to="/share" tag="a">游记分享</router-link></li>
                    <li onclick="canopen()"><router-link to="/customized" tag="a">专属推荐</router-link></li>
                    <li><router-link to="/aboutUs" tag="a">关于我们</router-link></li>
                </ul>
            </div>
            <div class="login_register">
                <div class="searchdetails">
                    <input type="text" class="search" placeholder="请输入景区关键字" id="cansearch">
                    <img src="../../assets/image/search.png" alt="" id="dosearch">
                </div>
                <div class="allregister">
                    <span class="login">登录</span>
                    <span class="register" onclick="window.open('./register.html')">注册</span>
                </div>
                <div class="has_login">
                    <img src="../../assets/image/header.jpg" alt="" onerror="this.src='../../assets/image/header.jpg'">
                    <!-- 消息下拉 -->
                    <ul class="listxiala">
                        <li><a href="./mine.html">修改个人信息</a></li>
                        <li><a href="./aboutUs.html?which=1">留言反馈</a></li>
                        <li><a href="#" onclick="exitlogin()">退出登录</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>  
</template>

<script>
export default {
    name: ''
}
</script>

<style scoped>
    .evelator {
        width: 100px;
        height: 400px;
        font-size: 20px;
        font-family: PingFang-SC-Medium,PingFang-SC;
        font-weight: 500;
        color: rgba(51,51,51,1);
        position: fixed;
        top: 58%;
        transform: translateY(-50%);
        right: 0;
        z-index: 899;
        background-color: #fff;
        box-shadow: 0px 4px 12px 0px rgba(7, 17, 27, 0.1);
    }
    .evelator>div {
        position: relative;
        text-align: center;
        
    }
    .evelator>div::after {
        content: "";
        display: block;
        left: 25px;
        bottom: 0;
        position: absolute;
        width: 49%;
        height: 1px;
        background: #5b5b5b;
    }
    .evelator a {
        position: relative;
        color: rgb(60, 60, 60);
        line-height: 35px;
        width: 100%;
        height: 100px;
        padding: 20px 25px;
        box-sizing: border-box;
        background: rgb(255, 255, 255);
    }
    .evelator a:hover{
        background: rgb(221, 221, 221);
    }
    .evelator a span.iconfont {
        padding-top: 18px;
        font-size: 35px;
        font-family: PingFang-SC-Medium,PingFang-SC;
        line-height: 35px;
        font-weight: 500;
        color: rgba(51,51,51,1);
    }
    .evelator>div:last-of-type::after{
        display: none;
    }
    .introduce,
    .backTop{
        display: none;
    }
    
    .introduce {
        width: 200px;
        height: 100px;
        background: #b7d637;
        box-shadow: 0 2px 4px 0 rgba(0,0,0,0.1);
        line-height: 100px;
        text-align: center;
        position: absolute;
        color: #fff;
        font-family: PingFangSC-Medium,PingFang SC;
        font-size: 25px;
        right: -320px;
        top: 0;
        transition: all .3s;
        z-index: -1;
    }
    .introduce.show{
        display: block;
    }
    .introduce.last {
        width: 250px;
        height: 270px;
        top: -170px;
    }
    p.oursImg {
        width: 100%;
        height: 220px;
    }
    p.oursImg img {
        width: 100%;
        height: 100%;
    }
    p.ours {
        line-height: 0.5rem;
    }
    .backTop{
        width: 100px;
        position: absolute;
        text-align: center;
        top: 430px;
        cursor: pointer;
    }
    /* 头部 */
    .header{
        position: fixed;
        left: 0px;
        top: 0px;
        width: 100%;
        z-index: 1000;
    }
    .header:hover{
        background: rgba(45,51,54,0.9);
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
    .mainleft{
        display: flex;
        align-items: center;
        color: #fff;
    }
    .logo{
        font-size:20px;
        font-family:PingFangSC-Medium,PingFang SC;
        font-weight:500;
    }
    ul.navlist {
        position: relative;
        display: flex;
        align-items: center;
        font-size: 20px;
        font-family: PingFangSC-Medium,PingFang SC;
        font-weight: 500;
    }
    ul.navlist li {
        cursor: pointer;
        width: 100px;
        text-align: center;
        margin-left: 40px;
    }
    
    ul.navlist li.on::after{
        display:block;
        content: '';
        position: absolute;
        width:100px;
        height:10px;
        background:rgba(17,123,241,1);
        top: 0;
    }
    ul.navlist li a {
        width: 100%;
        color: #fff;
    }
    ul.navlist li.on a{
        font-family:PingFangSC-Semibold,PingFang SC;
        font-weight:600;
        color:rgba(17,123,241,1);
    }
    .login_register{
        display: flex;
        align-items: center;
        font-size: 18px;
        font-family: PingFangSC-Regular,PingFang SC;
        color: rgba(52,52,52,1);
    }
    .searchdetails{
        margin-right: 40px;
        position: relative;
        width:223px;
        height:50px;
        line-height: 50px;
        background:rgba(255,255,255,1);
        border-radius:8px;
        border:2px solid rgba(20,126,249,1);
    }
    .search{
        width: 100%;
        box-sizing: border-box;
        padding-left: 20px;
    }
    .search::placeholder{
        font-size:16px;
        font-family:PingFangSC-Regular,PingFang SC;
        font-weight:400;
        color:rgba(151,151,151,1);
    }
    .searchdetails img{
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 20px;
        width: 15px;
        height: 16px;
        cursor: pointer;
    }
    .allregister{
        display: flex;
        align-items: center;
        width:158px;
        height:50px;
        line-height: 23px;
        box-sizing: border-box;
        padding: 11px 0;
        background:rgba(255,255,255,1);
        border-radius:8px;
        border:2px solid rgba(20,126,249,1);
    }
    .allregister span{
        text-align: center;
        width: 50%;
        font-size:18px;
        font-family:PingFangSC-Regular,PingFang SC;
        font-weight:400;
        color:rgba(52,52,52,1);
        cursor: pointer;
    }
    .allregister span.login{
        border-right: 2px solid rgba(20,126,249,1);
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
    /* 我的头像拉下列表 */
    
    .listxiala{
        display: none;
        cursor: pointer;
        padding: 0 40px 0 40px;
        font-size:20px;
        font-family:PingFangSC-Regular,PingFang SC;
        font-weight:400;
        color:rgba(52,52,52,1);
        letter-spacing:1px;
        text-align: center;
        position: absolute;
        right: 0;
        top: 70px;
        width: 230px;
        box-sizing: border-box;
        background: url(../../assets/image/mine.png) no-repeat;
        background-size: contain;
        z-index: 2000;
    }
    
    .listxiala li{
        padding: 10px 0;
        border-bottom: 1px solid rgba(216,216,216,1);
    }
    .listxiala li:last-child{
        border-bottom: none;
    }
    .listxiala li a{
        color:rgba(52,52,52,1);
    }
</style>