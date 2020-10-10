<template>
    <div>
        <div class="contence">
            <p class="home"><a href="#/header/main">首页</a>><span class="nowpage">关于我们</span></p>
            <div id="travlmess" class="travlmess">
                <div class="rankingmessage">
                    <div class="module_title">平台管理</div>
                    <ul class="rankings" id="rankings">
                        <li>
                            <router-link to="/header/platform/aboutus">关于我们 <span class="iconfont icon-arrow-right"></span></router-link>
                        </li>
                        <li>
                            <router-link to="/header/platform/advice">留言反馈 <span class="iconfont icon-arrow-right"></span></router-link>
                        </li>
                        <li>
                            <router-link to="/header/platform/getview">推荐景区 <span class="iconfont icon-arrow-right"></span></router-link>
                        </li>
                        <li>
                            <router-link to="/header/platform/registerbasic">注册协议 <span class="iconfont icon-arrow-right"></span></router-link>
                        </li>
                        <li>
                            <router-link to="/header/platform/callus">联系我们 <span class="iconfont icon-arrow-right"></span></router-link>
                        </li>
                    </ul>
                </div>
                <router-view></router-view>
            </div>
        </div>
        <footers></footers>
        <evelator></evelator>
        <login v-show="loginbool" @closelogin="changelb"></login>
    </div>
</template>

<script>
    export default {
        name: '',
        data() {
            return {
                loginbool:false
            }
        },
        methods:{
            changelb(){
                this.loginbool=!this.loginbool
            },
            
        },
    }
</script>

<style scoped>
    .header {
        position: static !important;
        background: rgba(45, 51, 54, 0.9);
    }

    .contence {
        width: 1520px;
        margin: 0 auto;
        position: relative;
    }

    .home {
        padding-top: 25px;
        padding-bottom: 20px;
        font-size: 25px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: rgba(52, 52, 52, 1);
        border-bottom: 3px solid rgba(17, 123, 241, 1);
    }

    .home a {
        color: rgba(52, 52, 52, 1);
    }

    .home a:hover {
        color: rgba(17, 123, 241, 1);
    }

    .home span {
        color: rgba(17, 123, 241, 1);
    }

    /* 资讯 */
    .travlmess {
        display: flex;
        justify-content: space-between;
        margin-top: 43px;
    }

    .rankingmessage {
        width: 30%;
        height: 830px;
        background: #fff;
    }

    .module_title {
        font-size: 45px;
        height: 120px;
        line-height: 120px;
        text-align: center;
        font-weight: bold;
        background: #0b7cd2;
        color: #ffffff;
    }

    .rankings {
        width: 100%;
        box-sizing: border-box;
        padding: 0 0 30px 0;
        text-align: center;
        font-size: 30px;
        color: #2e2e2e;
        font-family: PingFangSC-Regular, PingFang SC;
    }

    .rankings li {
        margin-top: 40px;
        height: 100px;
        line-height: 100px;
        cursor: pointer;
    }

    .rankings li:first-child {
        margin-top: 0;
    }

    .rankings li a {
        display: inline-block;
        width: 100%;
        height: 100%;
        border-bottom: 1px dotted #e3e3e3;
    }
    .rankings li .router-link-active{
        border-bottom: 1px solid rgba(17, 123, 241, 1);
    }
    .iconfont.icon-arrow-right {
        display: none;
        font-size: 25px;
        color: black;
    }
    .router-link-active .icon-arrow-right{
        padding-left: 50px;
        display: inline-block;
    }
</style>