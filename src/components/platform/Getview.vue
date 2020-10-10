<template>
    <div class="messages">
        <p class="about_title">推荐景区</p>
        <div class="advice_details">
            <p class="advice_intro">您的参与将帮助我们改进产品及服务。</p>
            <div class="advice_title">
                <p class="qianzhui"><span>*</span> 请输入推荐景区的地址：</p>
                <textarea name="" v-model="recomaddress" class="advice_contence jinquname"
                    placeholder="请输入地址（详细地址）"></textarea>
            </div>
            <div class="advice_title">
                <p class="qianzhui"><span>*</span> 请输入推荐景区的名称：</p>
                <textarea name="" v-model="recomname" class="advice_contence jinquname" placeholder="请输入名称（必填）"></textarea>
            </div>

            <div class="advice_title">
                <p class="qianzhui"><span>*</span> 请详细描述您的推荐该景区的缘由：</p>
                <textarea name="" v-model="recombecause" class="advice_contence" placeholder="请输入缘由（必填）"></textarea>
            </div>
        </div>
        <div class="advice_tijiao" @click="toview">提交</div>
    </div>
</template>

<script>
    export default {
        name: '',
        data() {
            return {
                users:'',
                recomaddress:'',
                recomname:'',
                recombecause:''
            }
        },
        methods: {
            toview(){
                let params={}
                params.uid=this.users.id
                params.recomaddress=this.recomaddress;
                params.recomname=this.recomname;
                params.recombecause=this.recombecause;
                if(!params.recomaddress){
                    this.$layer.msg("请输入推荐景区地址")
                    return 
                }
                if(!params.recomname){
                    this.$layer.msg("请输入推荐景区名称")
                    return 
                }
                if(!params.recombecause){
                    this.$layer.msg("请输入推荐景区缘由")
                    return 
                }
                this.$axios.post('/travel/recomjingqu',params).then(res=>{
                    if(res){
                        this.$layer.msg(res.data.msg)
                        this.recomaddress=''
                        this.recomname=''
                        this.recombecause=''
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

    p.advice_intro {
        color: #333;
        font-weight: bold;
        height: 30px;
        padding-bottom: 2px;
        font-family: PingFangSC-Medium, PingFang SC;
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
    .advice_contence.jinquname {
        height: 100px;
    }
</style>