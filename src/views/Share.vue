<template>
    <div>
        <div class="contence">
            <p class="home"><a href="#/header/main">首页</a>><span>游记分享</span></p>
            <!-- <div class="online_search">
                <div class="selectjob">资讯</div>
                <input type="text" class="search_word" id="keyword" placeholder="请输入您期望资讯的关键词" autocomplete="off">
                <div class="tosee" onclick="searchCourse()">
                    <img src="../assets/image/search_rgba.png" alt="">
                    <div>搜索</div>
                </div> 
            </div> -->
            <div id="travlmess" class="travlmess">
                <div class="rankingmessage">
                    <div class="module_title">游记榜单</div>
                    <div class="rankings" id="rankings">
                        <a href="./shareDetails.html" target="_self">
                            <span class="title">和正确的人在一起（深度好文！）</span>
                        </a>
                        <a href="./shareDetails.html" target="_self">
                            <span class="title">和正确的人在一起（深度好文！）</span>
                        </a>
                        <a href="./shareDetails.html" target="_self">
                            <span class="title">和正确的人在一起（深度好文！）</span>
                        </a>
                        <a href="./shareDetails.html" target="_self">
                            <span class="title">和正确的人在一起（深度好文！）</span>
                        </a>
                    </div>
                </div>
                <div class="messages">
                    <div class="shraetop">
                        <ul class="tablist">
                            <li class="check">热门游记</li>
                            <li>最新发表</li>
                        </ul>
                        <div class="towrite" @click="jumpwriteshare"><span
                                class="iconfont icon-edit"></span>写游记</div>
                    </div>
                    <ul class="messageEach">
                        <li v-for="(item,index) in shares" :key="item.id" @click="jump(item)">
                            <img :src="item.cover" :alt="item.title" onerror="this.src='../assets/image/hot.jpg'">
                            <div class="text_mess">
                                <p class="title_content">{{item.title}}</p>
                                <p class="messscontent">{{item.content}}</p>
                                <p class="createtime">
                                    <span>{{item.ctime}}</span>
                                    <span class="like">
                                        <img src="../assets/image/gray_like.png" alt="">
                                        <span>0</span>
                                    </span>
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
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
                loginbool:false,
                shares:''
            }
        },
        methods:{
            changelb(){
                this.loginbool=!this.loginbool
            },
            share(){
                this.$axios.get('travel/shares').then(res=>{
                    if(res){
                        this.shares=res.data.data
                    }
                })
            },
            jump(){
                this.$router.push('/header/sharedetails')
            },
            jumpwriteshare(){
                this.$router.push('/header/writeshare')
            }
        },
        mounted() {
            this.share()
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

    .online_search {
        position: relative;
        display: flex;
        align-items: center;
        width: 1200px;
        height: 80px;
        line-height: 80px;
        background: rgba(255, 255, 255, 1);
        box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.15);
        border-radius: 4px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        margin: 25px auto 0 auto;
    }

    .selectjob {
        width: 160px;
        height: 60px;
        line-height: 60px;
        text-align: center;
        box-sizing: border-box;
        border: none;
        border-right: 1px solid rgba(206, 206, 206, 1);
        font-size: 20px;
        color: rgba(52, 52, 52, 1);
    }

    .search_word {
        width: 897px;
        font-size: 18px;
        box-sizing: border-box;
        padding-left: 20px;
        color: rgba(52, 52, 52, 1);

    }

    .search_word::placeholder {
        color: rgba(151, 151, 151, 1);
    }

    .tosee {
        position: absolute;
        right: 0;
        top: 0;
        display: flex;
        align-items: center;
        width: 160px;
        height: 80px;
        background: rgba(17, 123, 241, 1);
        box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.15);
        border-radius: 0 4px 4px 0;
        font-size: 20px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
    }

    .tosee img {
        width: 19px;
        height: 20px;
        padding-left: 45px;
        padding-right: 10px;
    }

    .travlmess {
        display: flex;
        justify-content: space-between;
        margin-top: 43px;
    }

    .rankingmessage {
        width: 30%;
        background: #fff;
    }

    .module_title {
        font-size: 45px;
        height:120px;
        line-height:120px;
        text-align: center;
        font-weight: bold;
        background: #0b7cd2;
        color: #ffffff;
    }

    .rankings {
        width: 100%;
        box-sizing: border-box;
        padding: 30px 0 30px 20px;
    }

    .rankings>a {
        padding: 20px;
        width: 100%;
        box-sizing: border-box;
        overflow: hidden;
        vertical-align: top;
        text-align: left;
        border: 1px solid #e7e7e7;
        color: #4c4c4c;
        font-size: 30px;
        margin-top: 30px;
    }

    .rankings>a:hover {
        box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, .2);
    }

    .rankings>a:first-child {
        margin-top: 0;
    }


    .messages {
        position: relative;
        width: 67%;
    }

    .messageEach {
        width: 100%;
        padding: 30px;
        box-sizing: border-box;
        background: #fff;
        margin-top: 10px;

    }

    .messageEach li {
        width: 100%;
        height: 250px;
        box-sizing: border-box;
        padding: 15px 20px;
        border-bottom: 1px dashed rgb(243, 243, 243);
        display: flex;
        align-items: center;
        justify-content: space-between;
        cursor: pointer;
        border: 1px solid #e7e7e7;
        white-space: nowrap;
        margin-top: 40px;
    }

    .messageEach li:hover {
        box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, .2);
    }

    .messageEach li:first-child {
        margin-top: 0;
    }

    .text_mess {
        width: 70%;
        font-size: 22px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: rgba(52, 52, 52, 1);
        letter-spacing: 1px;
        padding-left: 30px;
    }

    p.title_content {
        font-size: 25px;
        font-weight: 600;
        color: rgba(52, 52, 52, 1);
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    p.messscontent {
        padding-top: 10px;
        text-indent: 2em;
        white-space: pre-wrap;
        text-align: justify;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
    }

    .createtime {
        display: flex;
        padding-top: 20px;
        align-items: center;
        justify-content: space-between;
    }

    .title_content:hover {
        color: rgba(17, 123, 241, 1);
    }

    span.like {
        display: flex;
        align-items: center;
    }

    span.like img {
        width: 30px;
        padding-right: 10px;
    }

    .messageEach li>img {
        width: 250px;
        height: 210px;
        border-radius: 4px;
    }

    .towrite {
        position: absolute;
        right: 10px;
        width: 170px;
        height: 60px;
        line-height: 60px;
        background-color: #ff9d00;
        color: #fff;
        text-align: center;
        border-radius: 4px;
        cursor: pointer;
    }

    span.iconfont.icon-edit {
        font-size: 34px;
        line-height: 60px;
    }

    .shraetop {
        padding: 0 30px;
        height: 60px;
        font-size: 26px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-family: PingFangSC-Regular, PingFang SC;
    }

    .tablist {
        display: flex;
    }

    .tablist li {
        margin-left: 40px;
        padding-bottom: 10px;
        cursor: pointer;
    }

    .tablist li.check {
        border-bottom: 3px solid #ff9d00;
        color: #ff9d00;
    }

    .tablist li:first-child {
        margin-left: 0;
    }
</style>