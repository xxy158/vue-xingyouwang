<template>
    <div>
        <headers></headers>
        <div class="contence">
            <div class="custom">
                <p class="title_custom">我的专属推荐</p>
                <p class="title_introduce">专属推荐行程·来一次身体、心灵都满足的不悔旅行</p>
            </div>
            <div class="needs">
                <div class="neddEach">
                    <label for="">地理环境</label>
                    <textarea name="" id="huanjing" placeholder="请输入您期望的地理环境"></textarea>
                </div>
                <div class="neddEach">
                    <label for="">饮食文化</label>
                    <textarea name="" id="yinshi" placeholder="请输入您期望的饮食文化"></textarea>
                </div>
                <div class="neddEach">
                    <label for="">交通情况</label>
                    <textarea name="" id="jiaotong" placeholder="请输入您期望的交通情况"></textarea>
                </div>
                <div class="neddEach">
                    <label for="">兴趣爱好</label>
                    <textarea name="" id="aihao" placeholder="请输入您期望的兴趣爱好"></textarea>
                </div>
                <div class="neddEach">
                    <label for="">周边设施</label>
                    <textarea name="" id="sheshi" placeholder="请输入您期望的周边设施（酒店，餐饮等）"></textarea>
                </div>
                <div class="neddEach">
                    <label for="">消费水平</label>
                    <textarea name="" id="xiaofei" placeholder="请输入您期望的消费水平"></textarea>
                </div>
                <div class="tijiao">提交</div>
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
        position: relative;
    }

    .custom {
        background: #fff;
        padding: 90px 0 50px 0;
        text-align: center;
    }

    .title_custom {
        font-size: 50px;
        font-family: PingFangSC-Medium, PingFang SC;
        color: #515151;
    }

    .title_introduce {
        font-size: 24px;
        padding-top: 15px;
        color: #989898;
    }

    .needs {
        width: 900px;
        margin: 0 auto;
    }

    .needs>div {
        display: flex;
        /* align-items: center; */
        justify-content: space-between;
        font-family: "open sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
        font-size: 25px;
        color: #676a6c;
        margin-top: 30px;
    }

    .neddEach label {
        padding-top: 20px;
    }

    textarea {
        border: 1px solid #eeecec;
        width: 84%;
        height: 150px;
        padding: 20px 44px 20px 12px;
        box-sizing: border-box;
        font-size: 25px;
        display: block;
        border-radius: 3px;
        color: #3b3b3b;
        font-family: "微软雅黑";
        background: #fff;
    }

    textarea::placeholder {
        color: #8d8d8d;
    }

    .needs>div.tijiao {
        font-size: 30px;
        letter-spacing: 20px;
        width: 700px;
        background: #1E9FFF;
        color: #fff;
        height: 80px;
        line-height: 80px;
        box-sizing: border-box;
        display: block;
        border: 1px solid #8cc227;
        border-radius: 3px;
        text-align: center;
        margin: 50px auto 0 auto;
        cursor: pointer;
    }
</style>