import request from '@/utils/request'

export default {

    // 登录
    login(user){
        return request({
            url: `/ucenter/member/login`,
            method: 'post',
            data: user
        })
    },

    // 获取登录信息
    getLoginInfo(){
        return request({
            url: `/ucenter/member/auth/getLoginInfo`,
            method: 'get'
        })
    }
}