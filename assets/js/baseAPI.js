//注意：每次调用$.get()或者$.ajax()都会先调用这个函数，在这个函数中可以拿到我们给Ajax提供的配置对象
$.ajaxPrefilter(function (options) {
    // 在发起Ajax请求之前，同意拼接请求的根路径
    options.url = 'http://www.liulongbin.top:3007' + options.url
    // 统一为有权限的接口，设置headers请求头
    if (options.url.indexOf('/my/') !== -1) {
        options.headers = {
            Authorization: localStorage.getItem('token') || ''
        }
    }
    //全局统一挂载complete回调函数
    options.complete = function (res) {
        if (res.responseJSON.status === 1 && res.responseJSON.message === '身份认证失败！') {   // 清空本地token
            localStorage.removeItem('token')
            // 重新跳转到登录页面
            location.href = '/login.html'
        }
    }
})