<template>
    <div class="footer">
        <div class="footer_bottom">
            <div class="yubu">
                <p class="yubu_title">
                    <span class="yubuhead">兴游网-旅游推荐系统</span>
                </p>
                <p class="yubu_intro">兴游网-旅游推荐系统是一款以用户提交个人各方面要求（交通环境、饮食文化、兴趣爱好等）而得到适宜的旅游推荐为主旨的旅游推荐系统。该系统不仅是系统可以向用户推荐意向景点，用户也可以向系统推荐系统中没有的旅游景点</p>
                <div class="wrokingdetails">
                    <p class="yubu_phone">
                        <span class="iconfont icon-Incoming_call imgs"></span>
                        <span class="phone_detail">联系方式：15828862942</span>
                    </p>
                    <p class="yubu_address">
                        <span class="iconfont icon-icon-test imgs"></span>
                        <span class="phone_detail">邮箱地址：xxy1426143500@163.com</span>
                    </p>
                    <p class="yubu_worktime">
                        <span class="iconfont icon-shijian imgs"></span>
                        <span class="phone_detail">办公时间：工作日 09:30-17:00 休息日 14:00-17:00</span>
                    </p>
                </div>
            </div>
            <div class="lineurl">
                <p class="friendurl">友情链接</p>
                <ul class="urleach clearfix">
                    <li><a href="https://www.yunos.com/">YunOS</a></li>
                    <li><a href="http://www.zongheng.com/">小说网</a></li>
                    <li><a href="https://www.ly.com/">同城旅游</a></li>
                    <li><a href="https://www.baidu.com/">百度一下</a></li>
                    <li><a href="https://www.sogou.com/">搜狗搜索</a></li>
                    <li><a href="https://cn.bing.com/">微软Bing</a></li>
                    <li><a href="http://www.yue365.com/">365音乐网</a></li>
                    <li><a href="https://www.mapbar.com/">图吧</a></li>
                    <li><a href="http://www.google.cn/">谷歌搜索</a></li>
                    <li><a href="http://www.lvye.cn/">绿野户外</a></li>
                    <li><a href="https://qpay.qq.com/">QQ钱包</a></li>
                    <li><a href="https://www.tripadvisor.cn/">TripAdvisor</a></li>
                    <li><a href="http://www.8264.com/">户外运动</a></li>
                    <li><a href="https://www.mapbar.com/">地图查找</a></li>
                    <li><a href="http://lvyou.baidu.com/">百度旅游</a></li>
                    <li><a href="https://www.cncn.com/">欣欣旅游网</a></li>
                </ul>     
                <div class="erweima">
                    <img src="../../assets/image/erweima.png" alt="">
                    <p class="erwei_down">联系我们</p>
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
    .footer {
        width: 100%;
        margin-top: 60px;
        height: 350px;
        box-sizing: border-box;
        padding: 30px 0;
        background: rgb(50, 50, 51);
        display: flex;
        justify-content: space-between;
        font-size: 16px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        letter-spacing: 1px;
        overflow: hidden;
    }
    .footer_bottom {
        display: flex;
        justify-content: space-between;
        width: 1520px;
        margin: 0 auto;
        overflow: hidden;
    }

    .yubu {
        width: 700px;
        text-align: left;
    }

    .yubuhead {
        font-size: 20px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
    }

    .yubuurl {
        padding-left: 15px;
        font-size: 12px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: rgba(219, 219, 219, 1);
    }

    .yubu_intro {
        width: 100%;
        margin-top: 20px;
        box-sizing: border-box;
        height: 120px;
        overflow: hidden;
    }

    .wrokingdetails p {
        display: flex;
        padding-top: 15px;
        align-items: center;
    }

    .imgs {
        width: 20px;
        height: 20px;
        font-size: 22px;
    }

    .phone_detail {
        padding-left: 15px;
    }

    .lineurl {
        width: 700px;
    }

    .urleach {
        padding-top: 15px;
        font-size: 14px;
    }

    .urleach li {
        width: 60px;
        float: left;
        margin-left: 150px;
        white-space: nowrap;
    }

    .urleach li:nth-of-type(4n+1) {
        margin-left: 0;
    }
    .urleach li a{
        font-size: 16px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
    }
    .erweima {
        margin-top: 30px;
        width: 154px;
        margin-left: 8px;
        text-align: center;
    }

    .erweima img {
        width: 100px;
        height: 100px;
    }

    .erwei_down {
        white-space: nowrap;
        padding-top: 10px;
    }
</style>