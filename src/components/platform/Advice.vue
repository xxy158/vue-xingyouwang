<template>
    <div class="messages">
        <p class="about_title">留言反馈</p>
        <div class="advice_details">
            <p class="advice_intro">您的参与将帮助我们改进产品及服务。</p>
            <div class="advice_type">
                <p class="qianzhui"><span>*</span> 选择反馈类型：</p>
                <div class="advice_list">
                    <div v-for="(item,index) in list" :class="checkindex==index?'chooseone':''" @click="check(index)" :key="index">{{item}}</div>
                </div>
            </div>

            <div class="advice_title">
                <p class="qianzhui"><span>*</span> 请详细描述您的建议、意见、问题等：</p>
                <textarea name="" v-model="advice_contence" class="advice_contence" placeholder="请输入您的问题（必填）"></textarea>
            </div>
        </div>
        <div class="advice_tijiao" @click="toadive">提交</div>
    </div>
</template>

<script>
    export default {
        name: '',
        data() {
            return {
                list:['平台体验类','旅游产品类','其他'],
                checkindex:0,
                users:'',
                advice_contence:''
            }
        },
        methods: {
            check(index){
                this.checkindex=index
            },
            toadive(){
                let params={}
                params.uid=this.users.id
                params.type=this.list[this.checkindex];
                params.content=this.advice_contence;
                if(!params.content){
                    this.$layer.msg("请输入您的宝贵意见");
                    return 
                }
                this.$axios.post('/travel/addAdvice',params).then(res=>{
                    if(res){
                        this.$layer.msg(res.data.msg);
                        this.advice_contence=''
                    }
                })
            }
        },
        created() {
            this.users=JSON.parse(localStorage.getItem("users"))[0]
        },
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

    /* 留言反馈 */
    .advice_details {
        padding: 20px;
    }

    .advice_intro {
        color: #333;
        font-weight: bold;
        padding-bottom: 22px;
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

    .advice_contence {
        width: 100%;
        height: 200px;
        box-sizing: border-box;
        padding: 15px;
        border: 1px solid #ddd;
        margin-top: 15px;
        color: #393838;
        font-size: 25px;
        font-family: PingFangSC-Regular, PingFang SC;
    }

    .advice_contence::placeholder {
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
</style>