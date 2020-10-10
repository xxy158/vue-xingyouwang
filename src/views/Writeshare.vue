<template>
    <div>
        <div class="contence">
            <p class="home"><a href="./main.html">首页</a>><a href="./message.html">游记分享</a>> <span>发表</span></p>
            <div id="travlmess" class="travlmess">
                <div class="imgicon">
                    <img :src="fileimg" alt="" class="bakcimg">
                    <div class="chooseimg">
                        <!-- <div class="choose/img_back"></div> -->
                        <img src="../assets/image/upload.png" alt="" @click="uploadIcon()">
                        <span class="choosetitle">设置游记头图</span>
                        <form style="display: none;" action="" id="uploadForm" autocomplete="off"
                            enctype="multipart/form-data">
                            <input style="height: 0;width: 0;" type="file" name="file" ref="upfile" @change="getfile"
                                accept="image/jpeg，image/jpg，image/png,image/jp2，image/jpe" />
                        </form>
                    </div>
                    <div class="writeinput">
                        <input type="text" v-model="share_title" placeholder="填写游记标题">
                    </div>
                </div>
                <div class="writeshare_content">
                    <textarea name="" v-model="content" placeholder="从这里开始游记正文..."></textarea>
                    <!-- <div class="addimg">添加图片</div> -->
                </div>
                <div class="fabiao" @click="fabiao">发表</div>
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
        inject:['reload'],
        props:['users'],
        data() {
            return {
                loginbool: false,
                fileimg:'',
                share_title:'',
                content:''
            }
        },
        methods: {
            changelb() {
                this.loginbool = !this.loginbool
            },
            uploadIcon(){
                this.$refs.upfile.click()
            },
            getfile(e){
                this.fileimg='http://127.0.0.1:3555/image/'+e.target.files[0].name;
            },
            fabiao(){
                let params={}
                params.uid=this.users.id
                params.cover=this.fileimg
                params.title=this.share_title
                params.content=this.content
                let date=new Date();
                let year=date.getFullYear();
                let month=date.getMonth()+1;
                let day=date.getDate();
                let hour=date.getHours();
                let minute=date.getMinutes();
                params.ctime=year+"-"+month+"-"+day+" "+hour+":"+minute
                if(!params.cover){
                    this.$layer.msg("请选择封面")
                    return 
                }
                if(!params.title){
                    this.$layer.msg("请输入标题")
                    return 
                }
                if(!params.content){
                    this.$layer.msg("请输入内容")
                    return 
                }
               this.$axios.post('/travel/sharesAdd',params).then(res=>{
                    if(res){
                        this.$layer.msg(res.data.msg)
                        this.fileimg=''
                        this.share_title=''
                        this.content=''
                        this.$router.go(-1)
                        this.reload()
                    }
               })
            }
        }
    }
</script>

<style scoped>
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
        position: relative;
    }

    .imgicon>img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .chooseimg {
        position: absolute;
        top: 150px;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        align-items: center;
        /* width: 350px; */
        height: 130px;
        font-size: 36px;
        color: #333;
        font-weight: normal;
        justify-content: space-between;
    }

    .chooseimg img {
        width: 80px;
        height: 70px;
        cursor: pointer;
    }

    span.choosetitle {
        padding-left: 40px;
    }

    .writeinput {
        position: absolute;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        font-size: 30px;
        width: 76%;
        background: #fff;
        border: 1px solid #fff;
        box-shadow: 0 2px 2px rgba(110, 98, 85, .5);
    }
    .writeinput>input{
        width: 100%;
    }
    input#writeshare_title {
        width: 100%;
        height: 100px;
        box-sizing: border-box;
        padding: 20px;
    }

    input#writeshare_title::placeholder {
        color: #666;
    }

    .writeshare_content {
        height: 600px;
        padding: 50px 20px;
        position: relative;
    }

    .writeshare_content textarea {
        font-size: 36px;
        width: 100%;
        height: 100%;
    }

    .addimg {
        position: absolute;
        right: 20px;
        top: 100px;
        width: 140px;
        height: 80px;
        background: rgba(0, 67, 255, 0.8);
        border-radius: 14px;
        line-height: 80px;
        text-align: center;
        font-size: 28px;
        color: #f6f6f6;
        font-family: PingFangSC-Medium, PingFang SC;
        cursor: pointer;
    }

    .fabiao {
        margin-left: 25px;
        padding: 0 55px;
        width: 300px;
        height: 60px;
        background: -webkit-linear-gradient(-30deg, transparent 0, rgba(255, 138, 0, .3) 30%, rgba(255, 138, 0, 1) 90%);
        background-color: #ff9d00;
        border-radius: 30px;
        color: #fff;
        font-size: 36px;
        line-height: 60px;
        text-align: center;
        box-shadow: 0 0 7px rgba(0, 0, 0, 0.15);
        vertical-align: middle;
        margin: 0 auto;
    }
</style>