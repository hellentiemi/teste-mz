$(function () {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.outerWidth <= 768) {
        location.href = '/teste-mz/mobile'
    } else{
        location.href = '/teste-mz/desktop'
    }
})