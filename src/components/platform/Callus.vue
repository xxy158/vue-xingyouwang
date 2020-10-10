<template>
    <div class="messages">
        <p class="about_title">联系我们</p>
        <div class="methods">
            <div class="phone">
                <p class="callphone"><img src="../../assets/image/phone.png" alt=""><span>电话联系</span></p>
                <p class="phonenumber">15828862942</p>
            </div>
            <div class="qq">
                <p class="callphone"><img src="../../assets/image/QQ.png" alt="" class="lastimg"><span>在线联系</span> </p>
                <p class="phonenumber">1426143500</p>
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
</style>