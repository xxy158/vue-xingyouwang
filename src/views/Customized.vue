<template>
    <div>
        <div class="contence">
            <div class="custom">
                <p class="title_custom">我的专属推荐</p>
                <p class="title_introduce">专属推荐行程·来一次身体、心灵都满足的不悔旅行</p>
            </div>
            <div class="needs">
                <div class="neddEach">
                    <label for="">地理环境</label>
                    <textarea name="" v-model="huanjing" placeholder="请输入您期望的地理环境"></textarea>
                </div>
                <div class="neddEach">
                    <label for="">饮食文化</label>
                    <textarea name="" v-model="yinshi" placeholder="请输入您期望的饮食文化"></textarea>
                </div>
                <div class="neddEach">
                    <label for="">交通情况</label>
                    <textarea name="" v-model="jiaotong" placeholder="请输入您期望的交通情况"></textarea>
                </div>
                <div class="neddEach">
                    <label for="">兴趣爱好</label>
                    <textarea name="" v-model="aihao" placeholder="请输入您期望的兴趣爱好"></textarea>
                </div>
                <div class="neddEach">
                    <label for="">周边设施</label>
                    <textarea name="" v-model="sheshi" placeholder="请输入您期望的周边设施（酒店，餐饮等）"></textarea>
                </div>
                <div class="neddEach">
                    <label for="">消费水平</label>
                    <textarea name="" v-model="xiaofei" placeholder="请输入您期望的消费水平"></textarea>
                </div>
                <div class="tijiao" @click="tijiao">提交</div>
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
                huanjing:'',
                yinshi:'',
                jiaotong:'',
                aihao:'',
                sheshi:'',
                xiaofei:''
            }
        },
        methods:{
            changelb(){
                this.loginbool=!this.loginbool
            },
            tijiao(){
                let params={}
                params.huanjing=this.huanjing
                params.yinshi=this.yinshi
                params.jiaotong=this.jiaotong
                params.aihao=this.aihao
                params.sheshi=this.sheshi
                params.xiaofei=this.xiaofei
                if(!this.huanjing&&!this.yinshi&&!this.jiaotong&&!this.aihao&&!this.sheshi&&!this.xiaofei){
                    layer.msg("请输入至少一项您期望的景区要求");
                    return;
                }
                this.$axios.get('/travel/jingquCustomized',{params:params}).then(res=>{
                    if(res){
                        this.$layer.msg(res.data.msg+"，即将跳转结果页")
                        this.$router.push({
                            name:'customdetail',
                            // path:'/header/customdetail',
                            params:{
                                customviews:JSON.stringify(res.data.data)
                            }
                        })
                    }
                })
            }
        },
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