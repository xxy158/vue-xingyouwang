<template>
    <div>
        <div class="edit">
            <ul class="editmess">
                <li>
                    <span>添加/更换头像</span>
                    <input type="text" class="eaditeach" v-model="editimg" placeholder="上传图片" readonly>
                    <span @click="uploadIcon()">点击上传</span>
                    <form style="display: none;" action="" id="uploadForm">
                        <input style="width: 0;height: 0;" type="file" name="file" @change="changefile($event)"
                            accept="image/jpeg，image/jpg，image/png,image/jp2，image/jpe" ref="uploadclick"/>
                    </form>
                    <img :src="editimg" alt="" class="genhuan" v-show="choose">
                </li>
                <li>
                    <span>添加/修改昵称</span>
                    <input type="text" class="eaditeach" v-model="editname" placeholder="请输入您的昵称">
                    <span style="opacity: 0;"></span>

                </li>
            </ul>
            <div class="update" @click="finishedit()">提交</div>
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
                loginbool:false,
                choose:false,
                editimg:'',
                editname:''
            }
        },
        methods: {
            changelb(){
                this.loginbool=!this.loginbool
            },
            getusers(){
                this.$axios.post('/travel/getusers',{id:this.users.id}).then(res=>{
                    if(res){
                        localStorage.setItem('users',JSON.stringify(res.data.data))
                        this.reload()
                    }
                })
            },
            uploadIcon(){
                this.$refs.uploadclick.click()
            },
            changefile(event){
                console.log(event.target.files)
                this.editimg='http://127.0.0.1:3555/image/'+event.target.files[0].name;
                this.choose=true
            },
            finishedit(){
                var params={}
                params.icon=this.editimg;
                params.name=this.editname;
                params.uid=this.users.id;
                if(!this.editimg){
                    this.$layer.msg("请上传头像");
                    return
                }
                if(!this.editname){
                    this.$layer.msg("请输入您的昵称");
                    return
                }
                console.log(params)
                this.$axios.post('/travel/editusers',params).then(res=>{
                    if(res){
                        this.$layer.msg(res.data.msg)
                        this.getusers()
                        this.$router.go(-1)
                    }
                })
            }
        },
        mounted() {
            console.log(this.users)
            if(this.users&&this.users.icon){
                this.editimg=this.users.icon
                this.editname=this.users.name
                this.choose=true
            }
        },
    }
</script>

<style scoped>
    .header {
        width: 100%;
        z-index: 1000;
        background: rgba(45, 51, 54, 0.9);
    }

    /* 编辑资料 */

    .edit {
        width: 1520px;
        margin: 100px auto;
        font-family: PingFangSC-Semibold, PingFang SC;
        background: #fff;
        box-sizing: border-box;
        padding: 100px;
    }

    .editmess {
        width: 100%;
        box-sizing: border-box;
        padding: 0 100px 100px 100px;
    }

    .editmess>li {
        position: relative;
        width: 100%;
        height: 140px;
        box-sizing: border-box;
        padding: 30px 50px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .editmess>li>span {
        font-size: 30px;
    }

    .editmess>li>input {
        width: 570px;
        height: 60px;
        box-sizing: border-box;
        color: rgb(61, 61, 61);
        background: rgba(244, 244, 244, 1);
        border-radius: 8x;
        font-size: 25px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        padding-left: 20px;
    }

    .editmess>li>input::placeholder {
        color: rgba(151, 151, 151, 1);

    }

    .editmess>li>span:last-of-type {
        width: 150px;
        height: 60px;
        line-height: 60px;
        text-align: center;
        color: #fff;
        font-size: 23px;
        border-radius: 10px;
        background: rgba(17, 123, 241, 1);
        cursor: pointer;
    }

    .update {
        width: 570px;
        height: 70px;
        text-align: center;
        line-height: 70px;
        background: rgba(17, 123, 241, 1);
        border-radius: 8x;
        margin: 0 auto;
        font-size: 25px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
    }

    img.genhuan {
        position: absolute;
        width: 80px;
        height: 60px;
        border-radius: 10px;
        bottom: -28px;
        left: 300px;
    }
</style>