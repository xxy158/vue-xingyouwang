<template>
    <div class="messages">
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
</template>

<script>
    export default {
        name: ''
    }
</script>

<style scoped>
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
</style>