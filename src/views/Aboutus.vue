<template>
    <div>
        <headers></headers>
        <div class="contence">
            <p class="home"><a href="./main.html">首页</a>><span class="nowpage">关于我们</span></p>
            <div id="travlmess" class="travlmess">
                <div class="rankingmessage">
                    <div class="module_title">平台管理</div>
                    <ul class="rankings" id="rankings">
                        <li class="title">关于我们 <span class="iconfont icon-next"></span></li>
                        <li class="">留言反馈<span class="iconfont icon-next"></span></li>
                        <li class="">推荐景区<span class="iconfont icon-next"></span></li>
                        <li class="">注册协议<span class="iconfont icon-next"></span></li>
                        <li class="">联系我们<span class="iconfont icon-next"></span></li>
                    </ul>
                </div>
                <div class="messages" id="aboutUs">
                    <p class="about_title">关于我们</p>
                    <p class="about_contence">
                        约伴旅行网筹备于2012年，是北京约伴旅游咨询有限公司旗下的专业从事户外旅行的网站。约伴网致力于为户外旅行爱好者及户外旅行俱乐部打造最专业、最安全、最易用的集旅行、旅游、摄影、装备、出行、交友的约伴平台，为旅行者提供户外出行一站式服务。
                        约伴旅游网本着对旅行的执着与热爱，崇尚自由、个性和品质，为您找到最真实的旅行经验，最志趣相投的伙伴，实现一次完美的梦想之旅。我们相信，约伴旅行网能够为您提供最专业最易用的约伴平台，也能够为您带来不一样的约伴户外。
                        生活即是旅行，旅行更是生活，我们的产品区别于传统的走马观花式的旅行模式，这里既有各行各业的精英人士，也有有着多年旅行经验的旅行家。在这里，你将感受快节奏工作和慢节奏生活的完美融合。
                        约伴旅游网，用心阐述旅行的意义！</p>
                </div>
                <div class="messages" id="advice" style="display: none;">
                    <p class="about_title">留言反馈</p>
                    <div class="advice_details">
                        <p class="advice_intro">您的参与将帮助我们改进产品及服务。</p>
                        <div class="advice_type">
                            <p class="qianzhui"><span>*</span> 选择反馈类型：</p>
                            <div class="advice_list">
                                <div class="chooseone">平台体验类</div>
                                <div>旅游产品类</div>
                                <div>其他</div>
                            </div>
                        </div>

                        <div class="advice_title">
                            <p class="qianzhui"><span>*</span> 请详细描述您的建议、意见、问题等：</p>
                            <textarea name="" id="advice_contence" class="advice_contence"
                                placeholder="请输入您的问题（必填）"></textarea>
                        </div>
                    </div>
                    <div class="advice_tijiao" id="advice_tijiao">提交</div>
                </div>
                <div class="messages" id="advice" style="display: none;">
                    <p class="about_title">推荐景区</p>
                    <div class="advice_details">
                        <p class="advice_intro">您的参与将帮助我们改进产品及服务。</p>
                        <div class="advice_title">
                            <p class="qianzhui"><span>*</span> 请输入推荐景区的地址：</p>
                            <textarea name="" id="recomaddress" class="advice_contence jinquname"
                                placeholder="请输入地址（详细地址）"></textarea>
                        </div>
                        <div class="advice_title">
                            <p class="qianzhui"><span>*</span> 请输入推荐景区的名称：</p>
                            <textarea name="" id="recomname" class="advice_contence jinquname"
                                placeholder="请输入名称（必填）"></textarea>
                        </div>

                        <div class="advice_title">
                            <p class="qianzhui"><span>*</span> 请详细描述您的推荐该景区的缘由：</p>
                            <textarea name="" id="recombecause" class="advice_contence"
                                placeholder="请输入缘由（必填）"></textarea>
                        </div>
                    </div>
                    <div class="advice_tijiao" id="recomtijiao">提交</div>
                </div>
                <div class="messages" id="register_xieyi" style="display: none;">
                    <p class="about_title">注册协议</p>
                    <p class="about_contence">
                        本协议是您与本站网站之间就本站网站服务等相关事宜所订立的契约，请您仔细阅读本注册协议，您点击"同意并继续"按钮后，本协议即构成对双方有约束力的法律文件。</p>
                    <div class="moremess">
                        <p class="number">第1条 本站服务条款的确认和接纳</p>
                        <p class="number_content">1.1
                            本站的各项电子服务的所有权和运作权归本站所有。用户同意所有注册协议条款并完成注册程序，才能成为本站的正式用户。用户确认：本协议条款是处理双方权利义务的契约，始终有效，法律另有强制性规定或双方另有特别约定的，依其规定。<br />
                            1.2 用户点击同意本协议的，即视为用户确认自己具有享受本站服务、下单购物等相应的权利能力和行为能力，能够独立承担法律责任。<br />
                            1.3 如果您在18周岁以下，您只能在父母或监护人的监护参与下才能使用本站。<br />
                            1.4 本站保留在中华人民共和国大陆地区法施行之法律允许的范围内独自决定拒绝服务、关闭用户账户、清除或编辑内容或取消订单的权利。</p>
                    </div>
                </div>
                <div class="messages" id="callUs" style="display: none;">
                    <p class="about_title">联系我们</p>
                    <div class="methods">
                        <div class="phone">
                            <p class="callphone"><img src="../assets/image/phone.png" alt=""><span>电话联系</span></p>
                            <p class="phonenumber">15828862942</p>
                        </div>
                        <div class="qq">
                            <p class="callphone"><img src="../assets/image/QQ.png" alt=""
                                    class="lastimg"><span>在线联系</span> </p>
                            <p class="phonenumber">1426143500</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <footers></footers>
        <evelator></evelator>
    </div>
</template>

<script>
    export default {
        name: ''
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

    body,
    html {
        background: rgb(243, 243, 243);
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
        border-bottom: 1px dotted #e3e3e3;
        cursor: pointer;
    }

    .rankings li:first-child {
        margin-top: 0;
    }

    .rankings li.title {
        border-bottom: 1px solid rgba(17, 123, 241, 1);
    }

    span.iconfont.icon-next {
        display: none;
        font-size: 25px;
        color: black;
    }

    .rankings li.title span {
        padding-left: 50px;
        display: inline-block;
    }

    .messages {
        width: 67%;
        min-height: 830px;
        box-sizing: border-box;
        background: #fff;
        padding: 30px;
    }

    .about_title {
        font-size: 50px;
        font-family: "SimHei";
        text-align: center;
        border-bottom: 1px solid #ccc;
        padding: 0 0 15px 0;
    }

    .about_contence {
        padding-top: 30px;
        font-size: 24px;
        font-family: PingFangSC-Regular, PingFang SC;
        line-height: 2;
        text-indent: 2em;
    }

    #register_xieyi .about_contence {
        font-size: 21px;
        line-height: 1.5;
    }

    /* 注册协议 */
    .number {
        padding-top: 10px;
        font-size: 30px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 600;
    }

    .number_content {
        padding-top: 12px;
        font-size: 24px;
        color: #3c3939;
        font-family: PingFangSC-Regular, PingFang SC;
        line-height: 1.8;
    }

    /* 联系我们 */
    .methods {
        padding: 40px 160px 0 0;
        display: flex;
        justify-content: space-between;
        font-family: PingFangSC-Regular, PingFang SC;
        font-size: 30px;
    }

    .callphone {
        display: flex;
        align-items: center;
    }

    .callphone img {
        width: 30px;
        height: 30px;
        padding-right: 10px;
    }

    .callphone img.lastimg {
        width: 40px;
        height: 40px;
    }

    p.phonenumber {
        padding-top: 10px;
    }

    /* 留言反馈 */
    .advice_details {
        padding: 20px;
    }

    p.advice_intro {
        color: #333;
        font-weight: bold;
        height: 30px;
        padding-bottom: 2px;
        font-family: PingFangSC-Medium, PingFang SC;
    }

    .advice_type {
        font-size: 25px;
        color: #666;
        font-family: "microsoft yahei";
    }

    p.qianzhui {
        font-size: 25px;
        color: #666;
        font-family: "microsoft yahei";
    }

    p.qianzhui span {
        color: #f23030;
        margin-right: 3px;
    }

    .advice_list {
        display: flex;
        align-items: center;
        margin-top: 15px;
    }

    .advice_list>div {
        position: relative;
        margin-right: 30px;
        border: 1px solid #ddd;
        padding: 0 15px;
        line-height: 50px;
        height: 50px;
        overflow: visible;
        cursor: pointer;
    }

    .advice_list>div.chooseone {
        color: rgba(17, 123, 241, 1);
        border-color: #0b7cd2;
    }

    .advice_title {
        margin-top: 15px;
    }

    textarea.advice_contence {
        width: 800px;
        height: 200px;
        padding: 15px;
        border: 1px solid #ddd;
        margin-top: 15px;
        color: #393838;
        font-size: 25px;
        font-family: PingFangSC-Regular, PingFang SC;
    }

    textarea.advice_contence::placeholder {
        color: #666;
    }

    .advice_tijiao {
        margin: 20px auto 0 auto;
        margin-left: 100px;
        width: 300px;
        height: 50px;
        line-height: 50px;
        text-align: center;
        font-size: 27px;
        border-radius: 2px;
        background: #0b7cd2;
        color: #fff;
        cursor: pointer;
    }

    /* 景区推荐 */
    textarea.advice_contence.jinquname {
        height: 100px;
    }
</style>