<template>
    <div>
        <div class="contence">
            <p class="home"><a href="#/header/main">首页</a>><span>专属推荐--结果</span></p>
            <div class="allcourses">
                <div class="recomment">
                    <ul class="recomeEach" id="recomeEach">
                        <li v-for="(item,index) in jingqus" :class="{'on':item.showscal}" :key="item.id">
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
                    <p class="hasno" v-show="hasnoresult">暂无匹配结果</p>
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
                hasnoresult:false,
                jingqus:''
            }
        },
        methods:{
            changelb(){
                this.loginbool=!this.loginbool
            },
        },
        mounted() {
            this.jingqus=JSON.parse(this.$route.params.customviews)
            if(this.jingqus.length==0){
                this.hasnoresult=true
            }else{
                this.hasnoresult=false
            }
            console.log(this.jingqus)
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
    .hasno {
        text-align: center;
        font-size: 36px;
        color: #2b2b2b;
        padding-top: 70px;
    }
</style>