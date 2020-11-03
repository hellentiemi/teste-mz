$(function () {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.outerWidth <= 768) {
        location.href = '/mobile'
    } else{
        location.href = '/desktop'
    }
})