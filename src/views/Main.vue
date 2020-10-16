<template>
    <div class="main">
        <!-- 轮播图 -->
        <div class="swiper-container lunbo">
            <div class="swiper-wrapper" id="bannerList">
                <div class="swiper-slide"><img
                        src="https://b1-q.mafengwo.net/s16/M00/19/EF/CoUBUl6DJMGAWFe4ACR13B4-bt8760.png?imageMogr2%2Finterlace%2F1"
                        alt=""></div>
                <div class="swiper-slide"><img
                        src="http://b1-q.mafengwo.net/s15/M00/55/42/CoUBGV31OMKAJYRyAA7X007gsCE55.jpeg?imageMogr2%2Fstrip"
                        alt=""></div>
                <div class="swiper-slide"><img
                        src="http://n1-q.mafengwo.net/s15/M00/83/CE/CoUBGV4PYT2AenxpABJu17BCfsw23.jpeg?imageMogr2%2Fstrip"
                        alt=""></div>
            </div>
            <div class="swiper-pagination"></div>
            <div class="swiper-button-prev colorsprev"></div>
            <!--左箭头。如果放置在swiper-container外面，需要自定义样式。-->
            <div class="swiper-button-next colorsprev"></div>
            <!--右箭头。如果放置在swiper-container外面，需要自定义样式。-->
        </div>
        <div class="allcourses">
            <div class="recomment">
                <div class="recomcourse">
                    <span class="coursetitle"> 热门推荐</span>
                    <div class="more">
                        <router-link to="/header/recoment">
                            <span>更多</span>
                            <img src="../assets/image/more.png" alt="">
                        </router-link>
                    </div>
                </div>
                <ul class="recomeEach" id="recomeEach">
                    <li v-for="(item,index) in jingqus" :class="{'on':item.showscal}" :key="item.id" @mouseenter='enter(item)' @mouseleave='leave(item)' @click="jump(item)">
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
            <div class="recomment twicerecomment">
                <div class="messages">
                    <div class="recomcourse">
                        <span class="coursetitle">旅游资讯</span>
                        <div class="more">
                            <router-link to="/header/message">
                                <span>更多</span>
                                <img src="../assets/image/more.png" alt="">
                            </router-link>
                        </div>
                    </div>
                    <ul class="messageEach">
                        <li onclick="window.open('./messageDetails.html')">
                            <div class="text_mess">
                                <p class="title_content">“伪旅行”，正在掏空当代中国人！</p>
                                <p class="createtime">2019-06-11</p>
                            </div>
                            <img src="../assets/image/hot.jpg" alt="“伪旅行”，正在掏空当代中国人！">
                        </li>
                        <li>
                            <div class="text_mess">
                                <p class="title_content">“伪旅行”，正在掏空当代中国人！</p>
                                <p class="createtime">2019-06-11</p>
                            </div>
                            <img src="../assets/image/hot.jpg" alt="“伪旅行”，正在掏空当代中国人！">
                        </li>
                        <li>
                            <div class="text_mess">
                                <p class="title_content">“伪旅行”，正在掏空当代中国人！</p>
                                <p class="createtime">2019-06-11</p>
                            </div>
                            <img src="../assets/image/hot.jpg" alt="“伪旅行”，正在掏空当代中国人！">
                        </li>
                    </ul>
                </div>
                <div class="share">
                    <div class="recomcourse">
                        <span class="coursetitle">游记分享</span>
                        <div class="more">
                            <router-link to="/header/share">
                                <span>更多</span>
                                <img src="../assets/image/more.png" alt="">
                            </router-link>
                        </div>
                    </div>
                    <ul class="messageEach" id="shareeach">
                        <li v-for="(item,index) in shares" :key="item.id" @click="jumpshare(item)">
                            <div class="text_mess">
                                <p class="title_content">{{item.title}}</p>
                                <p class="createtime">{{item.ctime}}</p>
                            </div>
                            <img :src="item.cover" :alt="item.title" onerror="this.src='../assets/image/hot.jpg'">
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
    import Swiper from '../assets/script/swiper.min.js'

    export default {
        name: '',
        inject:['reload'],
        data() {
            return {
                loginbool:false,
                jingqus:[],
                shares:[]
            }
        },
        methods:{
            changelb(){
                this.loginbool=!this.loginbool
            },
            jingqu(){
                this.$axios.get('travel/getjingqus').then(res=>{
                    if(res){
                        res.data.data.forEach(item=>{
                            this.$set(item,'showscal',false)
                        })
                        this.jingqus=res.data.data
                    }
                })
            },
            // 移入移出图片放大
            enter(item){
                this.$set(item,'showscal',true)
            },
            leave(item){
                this.$set(item,'showscal',false)
            },
            share(){
                this.$axios.get('travel/shares').then(res=>{
                    if(res){
                        this.shares=res.data.data
                    }
                })
            },
            jump(item){
                localStorage.setItem('viewdetails',JSON.stringify(item))
                this.$router.push('/header/recomdetails')
            },
            jumpshare(item){
                this.$router.push('/header/sharedetails')
            }
        },
        mounted() {
            this.jingqu()
            this.share()
            var mySwiper = new Swiper('.swiper-container', {
                loop: true,
                speed: 300,
                autoplay: {
                    delay: 3000
                },
                // 分页器（圆点）
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true, //点击圆点切换
                },
                // 前进后退按钮
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            })
        },
        watch: {
            'showlogin':function(newVal,oldVal){
                if(newVal){
                    this.changelb()
                }
            }
        },
        computed: {
            showlogin(){
                return this.$route.params.showlogin
            }
        },
    }
</script>

<style scoped lange="less">
    @import '../assets/cssC/swiper.min.css';
    
    /* 轮播 */
    .lunbo {
        width: 100%;
        height: 570px;
        cursor: pointer;
    }

    .lunbo img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    /* 身体 */

    .allcourses {
        width: 1520px;
        margin: 0 auto;
    }

    .recomment {
        margin-top: 46px;
    }

    .recomcourse {
        padding: 14px 0 14px 20px;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 4px solid rgba(17, 123, 241, 1);
    }

    .coursetitle {
        font-size: 24px;
        font-family: PingFangSC-Semibold, PingFang SC;
        font-weight: 600;
        color: rgba(17, 123, 241, 1);
        letter-spacing: 1px;
    }

    .more_name {
        display: flex;
        align-items: center;
        font-size: 14px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: rgba(52, 52, 52, 1);
        line-height: 20px;
        letter-spacing: 1px;
        cursor: pointer;
    }

    .more img {
        margin-left: 16px;
        width: 16px;
        height: 16px;
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
        padding: 0 0 15px 0;
        background: #fff;
    }

    .recomeEach li.on {
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

    .recomeEach li.on .coursecover img {
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
        color: rgba(52, 52, 52, 1);
        line-height: 28px;
        letter-spacing: 1px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }

    .course_title:hover {
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

    /* 热门资讯 */
    .twicerecomment {
        display: flex;
        justify-content: space-between;
    }

    .twicerecomment>div {
        width: 48%;
    }

    .messageEach {
        width: 100%;
        padding: 10px 20px;
        box-sizing: border-box;
        margin-top: 40px;
        background: #fff;
    }

    .messageEach li {
        width: 100%;
        height: 135px;
        box-sizing: border-box;
        padding: 15px 10px;
        border-bottom: 1px dashed rgb(243, 243, 243);
        display: flex;
        align-items: center;
        justify-content: space-between;
        cursor: pointer;
    }

    .messageEach li:hover {
        box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, .2);
    }

    .text_mess {
        font-size: 22px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: rgba(52, 52, 52, 1);
        letter-spacing: 1px;
    }

    .createtime {
        padding-top: 20px;
    }

    .messageEach li>img {
        width: 100px;
        height: 100x;
        border-radius: 4px;
    }

    .share ul>li:hover {
        background: #f3f3f3;
    }

    .title_content:hover {
        color: rgba(17, 123, 241, 1);
    }
</style>