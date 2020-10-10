<template>
    <div>
        <div class="contence">
            <p class="home"><a href="#/header/main">首页</a>><span>景区</span></p>
            <div class="online_search">
                <div class="selectjob">景区</div>
                <input type="text" class="search_word" ref="seakey" v-model="keyword" placeholder="请输入您期望景区的关键词" autocomplete="off" @keypress="keysearch">
                <div class="tosee" @click="searchCourse()">
                    <img src="../assets/image/search_rgba.png" alt="">
                    <div>搜索</div>
                </div> 
            </div>
            <div class="history_search">
                <div class="history_title">历史搜索：</div>
                <ul class="search_his">
                    <li>UI设计师</li>
                </ul>
            </div>
            <div class="allcourses">
                <div class="recomment">
                    <ul class="recomeEach" id="recomeEach">
                        <li v-for="(item,index) in jingqus" :class="{'on':item.showscal}" :key="item.id" @click="jump(item)">
                            <div class="coursecover">
                                <img :src="item.cover" alt="" onerror="this.src='../assets/image/hot.jpg'">
                            </div>
                            <p class="course_title">{{item.introduce}}</p>
                            <div class="price_time">
                                <p class="price">￥{{item.price}}.00<span>起</span></p>
                                <p class="time">{{item.days}}天</p>
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
                jingqus:[],
                keyword:''
            }
        },
        methods:{
            changelb(){
                console.log(this)
                this.loginbool=!this.loginbool
            },
            jingqu(){
                this.$axios.get('/travel/getjingqus').then(res=>{
                    if(res){
                        this.jingqus=res.data.data
                    }
                })
            },
            searchCourse(key){
                let keyparam={}
                if(key){
                    keyparam.keyword=key
                }else{
                    keyparam.keyword=this.keyword
                }
                if(keyparam.keyword){
                    this.$axios.get('/travel/getjingqus',{params:keyparam}).then(res=>{
                        if(res){
                            this.jingqus=res.data.data
                        }
                    })
                }else{
                    layer.msg("请输入您想要搜索的内容")
                }
            },
            keysearch(e){
                var keycode = e.keyCode;
                if(keycode=='13') {
                    e.preventDefault();
                    this.searchCourse()
                }
            },
            jump(item){
                localStorage.setItem('viewdetails',JSON.stringify(item))
                this.$router.push('/header/recomdetails')
            }
        },
        mounted() {
            this.jingqu()
            if(this.$route.params.befocus){
                this.$refs.seakey.focus()
            }
            if(this.$route.params.gosearch){
                this.keyword=this.$route.params.gosearch
                this.searchCourse(this.$route.params.gosearch)
            }
            // this.$route.params.gosearch
        },
}
</script>

<style scoped>
    .header {
        position: static !important;
        background: rgba(45,51,54,0.9);
    }
    .contence{
        width: 1520px;
        margin: 0 auto;
        position: relative;
    }
    .home{
        padding-top: 25px;
        padding-bottom: 25px;
        font-size: 20px;
        font-family: PingFangSC-Medium,PingFang SC;
        font-weight: 500;
        color: rgba(52,52,52,1);
        border-bottom: 3px solid rgba(17, 123, 241, 1);
    }
    .home a{
        color:rgba(52,52,52,1);
    }
    .home a:hover{
        color: rgba(17,123,241,1);
    }
    .home span{
        color: rgba(17,123,241,1);
    }
    .online_search{
        position: relative;
        display: flex;
        align-items: center;
        width:1200px;
        height:80px;
        line-height: 80px;
        background:rgba(255,255,255,1);
        box-shadow:0 0 4px 0 rgba(0,0,0,0.15);
        border-radius:4px;
        font-family:PingFangSC-Regular,PingFang SC;
        font-weight:400;
        margin: 25px auto 0 auto;
    }
    .selectjob{
        width: 160px;
        height: 60px;
        line-height: 60px;
        text-align: center;
        box-sizing: border-box;
        border: none;
        border-right: 1px solid rgba(206,206,206,1);
        font-size:20px;
        color:rgba(52,52,52,1);
    }
    .search_word{
        width: 897px;
        font-size:18px;
        box-sizing: border-box;
        padding-left: 20px;
        color:rgba(52,52,52,1);
        
    }
    .search_word::placeholder{
        color:rgba(151,151,151,1);
    }
    .tosee{
        position: absolute;
        right: 0;
        top: 0;
        display: flex;
        align-items: center;
        cursor: pointer;
        width:160px;
        height:80px;
        background:rgba(17,123,241,1);
        box-shadow:0 0 10px 0 rgba(0,0,0,0.15);
        border-radius:0 4px 4px 0;
        font-size:20px;
        font-family:PingFangSC-Regular,PingFang SC;
        font-weight:400;
        color:rgba(255,255,255,1);
    }
    .tosee img{
        width: 19px;
        height: 20px;
        padding-left: 45px;
        padding-right: 10px;
    }
    .history_search{
        padding-top: 20px;
        font-size:14px;
        display: flex;
        align-items: center;
    }
    .history_title{
        font-family:PingFangSC-Medium,PingFang SC;
        font-weight:500;
        color:rgba(151,151,151,1);
    }
    .search_his{
        display: flex;
        flex-wrap: nowrap;
    }
    .search_his li{
        padding-left: 20px;
        font-family:PingFangSC-Regular,PingFang SC;
        font-weight:400;
        color:rgba(17,123,241,1);
        cursor: pointer;
    }
    .classify{
        transition: all .3s;
        padding: 30px 0 15px 0;
        font-size:16px;
        display: flex;
        align-items: center;
        border-bottom: 1px solid rgba(216,216,216,1);;
    }
    .kindsclass{
        font-family:PingFangSC-Medium,PingFang SC;
        font-weight:500;
        color:rgba(52,52,52,1);
    }
    .kindsclass span{
        font-family:PingFangSC-Regular,PingFang SC;
        font-weight:400;
        color:rgba(17,123,241,1);
    }
    .kindsof{
        display: flex;
        align-items: center;
    }
    .kindsof li{
        margin-left: 30px;
        font-family:PingFangSC-Regular,PingFang SC;
        font-weight:400;
        color:rgba(52,52,52,1);
        cursor: pointer;
    }
    .kindsof li:hover{
        color: rgb(28, 128, 243);
    }
    .kindsof li:first-child{
        margin-left: 0;
    }
    .kindsof li.blue{
        color: rgb(28, 128, 243);
    }
    .blue{
        color: rgba(17,123,241,1);
    }

    /* 所有课程 */
    .allcourses {
        width: 1520px;
        margin: 0 auto;
    }

    .recomeEach {
        display: flex;
        flex-wrap: wrap;
    }

    .recomeEach li {
        width: 350px;
        margin-top: 40px;
        margin-left: 30px;
        cursor: pointer;
        border: 1px solid #ededed;
        /* box-sizing: border-box; */
        padding: 0 0 15px 0;
    }
    .recomeEach li:hover{
        border-color: #f40;
    }

    .recomeEach li:nth-child(4n+1) {
        margin-left: 0;
    }

    .coursecover {
        position: relative;
        width: 350px;
        height: 240px;
        box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
        overflow: hidden;
    }

    .coursecover img {
        width: 100%;
        height: 100%;
        transition: all .3s;
    }
    .coursecover img:hover{
        transform: scale(1.2);
    }
    .courseback {
        position: absolute;
        width: 285px;
        height: 50px;
        line-height: 50px;
        text-align: right;
        background: linear-gradient(90deg, rgba(0, 0, 0, 0.05) 0%, rgba(0, 0, 0, 0.6) 100%);
        bottom: 0;
        left: 0;
    }

    .intro {
        font-size: 24px;
        font-family: PingFangSC-Semibold, PingFang SC;
        font-weight: 600;
        color: rgba(255, 255, 255, 1);
        letter-spacing: 1px;
        padding-right: 40px;
    }

    .course_title {
        padding: 15px 0 0 10px;
        font-size: 20px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color:rgba(52,52,52,1);
        line-height: 28px;
        letter-spacing: 1px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }
    .course_title:hover{
        color: rgba(17, 123, 241, 1);

    }
    .price_time {
        height: 40px;
        padding: 0 10px 0 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 6px;
    }

    .price {
        padding: 2px 0 0 10px;
        font-size: 24px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: rgba(241, 17, 64, 1);
        letter-spacing: 1px;
    }
    .price span {
        color: #999;
    }
    .time {
        padding-top: 7px;
        color: #999;
    }
</style>