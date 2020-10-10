<template>
    <div class="evelator">
        <router-link to="/header/customized" tag="div" class="first">
            <a href="javascript:void(0)">专属<br>推荐</a>
        </router-link>
        <div>
            <a href="javascript:void(0)" class="" @mouseenter="enter($event)" @mouseleave="leave($event)">
                <span class="iconfont icon-search"></span>
                <div class="introduce" @click="tosearch">点击搜索</div>
            </a>
        </div>
        <div>
            <a href="javascript:void(0)" class="" @mouseenter="enter($event)" @mouseleave="leave($event)">
                <span class="iconfont icon-prompt"></span>
                <div class="introduce" @click="toadvice">留言反馈</div>
            </a>
        </div>
        <div>
            <a href="javascript:void(0)" class="" @mouseenter="enter($event)" @mouseleave="leave($event)">
                <span class="iconfont icon-scanning"></span>
                <div class="introduce last">
                    <p class="oursImg">
                        <img src="../../assets/image/erweima.png" alt="">
                    </p>
                    <p class="ours">我们的微信</p>
                </div>
            </a>
        </div>
        <span class="backTop" @click="turnup" v-show="toback"><img src="../../assets/image/topTop.png" alt=""></span>
    </div>
</template>

<script>
export default {
    name: '',
    data() {
        return {
            isshow:false,
            toback:false
        }
    },
    mounted() {
        window.addEventListener('scroll',this.scrolls)
    },
    methods:{
        turnup(){
            window.scrollTo(0,0)
        },
        enter($event){
            $event.currentTarget.className="hoverdisp"
        },
        leave($event){
            $event.currentTarget.className=""
        },
        tosearch(){
            this.$router.push({
                path: '/header/recoment',
                name: 'recoment', 
                params: {
                    befocus:true
                }
            })
        },
        scrolls(e){
            var top = e.srcElement.scrollingElement.scrollTop;    // 获取页面滚动高度
            if (top > 300) {
                this.toback=true
            }else{
                this.toback=false
            }
        },
        toadvice(){
            this.$router.push('/header/platform/advice')
        }
    }
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
        opacity: 0;
    }
    .hoverdisp .introduce{
        opacity: 1;
        right: 102px;
    }
    /* .introduce.isshoow{
        opacity: 1;
        display: block;
        right: 102px;
    } */
    /* .v-enter {
        right: -320px;
        opacity: 0;
    }
    .v-enter-active {
        transition: all .5s;
    }
    .v-enter-to{
        opacity: 1;
        right: 102px;
    } */
    
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
        line-height: 50px;
    }
    .backTop{
        width: 100px;
        position: absolute;
        text-align: center;
        top: 430px;
        cursor: pointer;
    }
</style>