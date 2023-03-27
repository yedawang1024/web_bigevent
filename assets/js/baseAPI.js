//注意：每次调用$.get()或者$.ajax()都会先调用这个函数，在这个函数中可以拿到我们给Ajax提供的配置对象
$.ajaxPrefilter(function(options){
    console.log(options.url);
    options.url = 'http://www.liulongbin.top:3007'+options.url
})