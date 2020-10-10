<template>
    <div>
        <div class="contence">
            <p class="home"><a href="./main.html">首页</a>><a href="./message.html">游记分享</a>> <span>详情</span></p>
            <div id="travlmess" class="travlmess">
                <div class="imgicon"><img src="../assets/image/imgicon.jpg" alt=""></div>
                <div class="userhead">
                    <div class="iconhead">
                        <img src="../assets/image/usericon.png" alt="">
                    </div>
                    <div class="hedes">
                        <p class="username">sil在路上</p>
                        <p class="ctime">
                            <span>2012-02-13</span>
                            <span>200人阅读</span>
                        </p>
                    </div>
                    <div class="cando">
                        <div>
                            <div class="backgr zan"></div><span>82赞</span>
                        </div>
                        <div>
                            <div class="backgr shoucang"></div><span>122收藏</span>
                        </div>
                        <div>
                            <div class="backgr huifu"></div><span>3回复</span>
                        </div>
                        <div>
                            <div class="backgr fenxiang"></div><span>分享</span>
                        </div>
                    </div>
                </div>
                <div class="userhead contentcomm">
                    <div class="iconhead">
                        <img src="../assets/image/usericon.png" alt="">
                    </div>
                    <div class="hedes">
                        <p class="username">sil在路上</p>
                        <p class="ctime">
                            <span>发表于 2012-02-13 09：03</span>
                        </p>
                    </div>
                    <div class="cando">1楼</div>
                </div>
                <div class="sharecontence">
                    <h2>【序言】</h2>
                    <p>2020年春节，在母上大人的强烈要求下，带她去海岛度假。考虑到1月之后，科莫多岛上的国家公园可能关闭。所以决定在这个新年伊始，走巴厘岛+科莫多岛的连线。满足母上大人和我自己的小心愿。
                        19年其实尝试3次动笔写游记，但都半途停下了，这次决定从行程途中就写起来，希望能交出作业。这次基本以逛吃&泡酒店为主，所以没怎么走景点，就主要分享些餐食和选酒店上的心得吧~</p>
                    <h2>【前期事项】</h2>
                    <p>这次出行因为要上海出发走巴厘岛+科莫多岛的连线，从航线上来考虑的话，要么上海往返巴厘岛+巴厘岛往返科莫多岛，要么上海-巴厘岛+科莫多-上海。而上海直飞巴厘岛只有GA印尼航空和MU东方航空各一班，考虑航班时间问题&巴厘岛往返科莫多后实际并没有少飞。最后我选择了上海-雅加达-巴厘岛，巴厘岛-科莫多岛，科莫多岛-雅加达-上海的航班。全程5段印尼航空的航线。价格是5000/人，以开口航班&春节出行来说，还算可以接受，但确实不便宜。大家可以对比下自己的行程再决定。
                    </p>
                    <!-- <img src="../assets/image/shareimg.webp" alt=""> -->
                    <div class="bottomconece">
                        <span>最后编辑于： 2020-01-29 20:13</span>
                        <span class="reply"><img src="../assets/image/mineorderdpj.png" alt=""> <span>回复</span></span>
                    </div>
                </div>
                <div class="userhead contentcomm">
                    <div class="iconhead">
                        <img src="../assets/image/usericon.png" alt="">
                    </div>
                    <div class="hedes">
                        <p class="username">层析小寒</p>
                        <p class="ctime">
                            <span>发表于 2012-02-13 12：23</span>
                        </p>
                    </div>
                    <div class="cando">2楼</div>
                </div>
                <div class="sharecontence">
                    <p>2020年春节，在母上大人的强烈要求下，带她去海岛度假。考虑到1月之后，科莫多岛上的国家公园可能关闭。所以决定在这个新年伊始，走巴厘岛+科莫多岛的连线。满足母上大人和我自己的小心愿。
                        19年其实尝试3次动笔写游记，但都半途停下了，这次决定从行程途中就写起来，希望能交出作业。这次基本以逛吃&泡酒店为主，所以没怎么走景点，就主要分享些餐食和选酒店上的心得吧~</p>
                    <div class="bottomconece">
                        <span></span>
                        <span class="reply"><img src="../assets/image/mineorderdpj.png" alt=""> <span>回复</span></span>
                    </div>
                </div>
            </div>
            <div class="replaythos">
                <div class="iconhead">
                    <img src="../assets/image/usericon.png" alt="">
                </div>
                <textarea name="" id="" class="replycontnce" placeholder="回复当前游记分享"></textarea>
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
                loginbool: false,

            }
        },
        methods: {
            changelb() {
                this.loginbool = !this.loginbool
            },
        },
    }
</script>

<style scoped>
    body,
    html {
        background: rgb(255, 255, 255)!important;
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

    div#travlmess {
        width: 100%;
        margin-top: 30px;
        font-family: PingFangSC-Medium, PingFang SC;
    }

    .imgicon {
        width: 100%;
        height: 420px;
    }

    .imgicon>img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .userhead {
        background: #f1f1f1;
        height: 130px;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: space-between;
        box-sizing: border-box;
        padding: 0 100px 0 280px;
    }

    .iconhead {
        position: absolute;
        top: -78%;
        left: 40px;
        width: 180px;
        height: 180px;
        border: 10px solid #f0f0f0;
        border-radius: 50%;
    }

    .iconhead>img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
    }

    p.username {
        font-size: 34px;
    }

    p.ctime {
        font-size: 25px;
        color: #636363;
        padding-top: 20px;
        padding-left: 30px;
    }

    .ctime>span:last-child {
        padding-left: 30px;
    }

    .cando {
        cursor: pointer;
        display: flex;
    }

    .cando>div {
        width: 150px;
        height: 100px;
        text-align: center;
        color: #636363;
        border-right: 1px solid #e9e9e9;
    }

    .backgr {
        width: 40px;
        height: 40px;
        margin: 0 auto;
    }

    .zan {
        background: url(../assets/image/nosupport.png) no-repeat;
        background-size: 100% 100%;
    }

    .shoucang {
        background: url(../assets/image/nocollect.png) no-repeat;
        background-size: 100% 100%;
    }

    .huifu {
        background: url(../assets/image/mineorderdpj.png) no-repeat;
        background-size: 100% 100%;
    }

    .fenxiang {
        background: url(../assets/image/share.png) no-repeat;
        background-size: 100% 100%;
    }

    .cando>div>span {
        font-size: 25px;
        padding-top: 17px;
    }

    .userhead.contentcomm {
        margin-top: 50px;
        height: 80px;
        border-radius: 10px;
        padding: 0 60px 0 180px;
        background: #f1f1f1;
    }

    .userhead.contentcomm .iconhead {
        width: 90px;
        height: 90px;
        top: -50%;
        border-color: #fff;
    }

    .contentcomm .username {
        font-size: 27px;
    }

    .contentcomm .ctime {
        font-size: 20px;
        padding-top: 8px;
        padding-left: 10px;
    }

    .contentcomm .cando {
        font-size: 30px;
        color: #424242;
    }

    .sharecontence {
        padding: 0 0 100px 0;
    }

    .sharecontence h2 {
        margin-top: 30px;
        padding-left: 10px;
    }

    .sharecontence p {
        font-size: 30px;
        padding-top: 40px;
        line-height: 50px;
    }

    .sharecontence img {
        width: 80%;
        height: 800px;
        display: block;
        margin: 40px auto 20px auto;
    }

    .bottomconece {
        margin-top: 100px;
        height: 50px;
        font-size: 20px;
        color: #959595;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .bottomconece img {
        width: 30px;
        height: 30px;
        padding-right: 20px;
        margin: 0;
    }

    .reply {
        display: flex;
        align-items: center;
        font-size: 25px;
        color: #2cdbb0;
    }

    .replaythos {
        position: relative;
        display: flex;
    }

    .replaythos .iconhead {
        width: 90px;
        height: 90px;
        top: -50%;
        border-color: #fff;
        position: static;
    }

    textarea.replycontnce {
        margin-left: 30px;
        width: 91%;
        height: 200px;
        border: 1px solid #d7d7d7;
        border-radius: 4px;
        padding: 15px;
        box-sizing: border-box;
    }

    .replycontnce::placeholder {
        color: silver;

    }
</style>