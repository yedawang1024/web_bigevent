$(function () {
    var form = layui.form
    var layer = layui.layer

    form.verify({
        // 自定义了一个pwd的校验规则
        pwd: [/^[\S]{6,12}$/, '密码必须6到12位,且不能出现空格'],
        // 校验两次密码是否一致的规则
        samePwd: function (value) {
            var pwd = $('[name=oldPwd]').val()
            if (pwd === value) {
                return '新旧密码不能相同！'
            }
        },
        // 校验两次密码是否一致的规则
        rePwd: function (value) {
            var pwd = $('[name=newPwd]').val()
            if (pwd !== value) {
                return '两次密码不一致！'
            }
        }
    })

    $('.layui-form').submit(function (e) {
        e.preventDefault();
        $.ajax({
            method: 'POST',
            url: '/my/updatepwd',
            data: $(this).serialize(),
            success: function (res) {
                if (res.status !== 0) {
                    return '更新密码失败！'
                }
                layer.msg('更新密码成功')

            }
        })
    })
})