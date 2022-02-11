window.addEventListener('load',function() {
    var mask = document.querySelector('.mask');
    var big = document.querySelector('.big');
    var preview = document.querySelector('.preview');
    //鼠标移入preview中，显示遮罩层mask和大图big
    preview.addEventListener('mouseover',function() {
        mask.style.display = 'block';
        big.style.display = 'block';
    })
    //鼠标移出preview，隐藏遮罩层mask和大图big
    preview.addEventListener('mouseout',function() {
        mask.style.display = 'none';
        big.style.display = 'none';
    })
    //鼠标移入preview中，遮罩层随鼠标移动而移动，右边显示大图效果
    preview.addEventListener('mousemove',function(e) {
        //鼠标在preview盒子中的坐标
        var x = e.pageX - this.offsetLeft;
        var y = e.pageY - this.offsetTop;
        //使鼠标在mask的中心
        var maskX = x - mask.offsetWidth / 2;
        var maskY = y - mask.offsetHeight / 2;
        //mask在preview中最大移动距离
        var maskMax = this.offsetWidth - mask.offsetWidth;
        //不让mask超出preview的范围
        maskX = maskX >= 0 ? maskX : 0;
        maskX = maskX < maskMax ? maskX : maskMax;
        maskY = maskY >= 0 ? maskY : 0;
        maskY = maskY < maskMax ? maskY : maskMax;
        //将鼠标在preview盒子中的坐标赋值给mask在preview中的坐标
        mask.style.left = maskX + 'px';
        mask.style.top = maskY + 'px';
        var bigImg = document.querySelector('.bigImg');
        //bigImg在big中最大移动距离
        var bigImgMax = bigImg.offsetWidth - big.offsetWidth;
        //大图bigImg在big中移动距离 = 遮罩层移动距离 * 大图最大移动距离 / 遮罩层最大移动距离
        bigImgX = maskX * bigImgMax / maskMax;
        bigImgY = maskY * bigImgMax / maskMax;
        //大图移动方向与遮罩层相反
        bigImg.style.left = -bigImgX +'px';
        bigImg.style.top = -bigImgY +'px';
    })
})