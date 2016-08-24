<template>
    <div class="vc-backtop-component">
        <a href="javascript:" v-el:btn class="iconfont icon-top" :style="style" @click="backTop" v-show="show">
            <i :style="{width: iconWidth, height: iconHeight}"></i>
        </a>
    </div>
</template>

<style>
    .icon-top {
        position: fixed;
        z-index: 9999;
        background-color: #676262;
        border-radius: 50%;
        opacity: .7;
    }
    .icon-top:hover {
        opacity: .95;
    }
    .icon-top:hover i {
        top: 17px;
    }
    .icon-top > i {
        display: inline-block;
        color: #fff;
        margin: 0;
        position: absolute;
        top: 45%;
        left: 50%;
        -webkit-transform: translate(-50%, -50%);
        -moz-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        -webkit-transition: all 0.3s ease;
        -moz-transition: all 0.3s ease;
        transition: all 0.3s ease;
        background-image: url('data:image/png;base64,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');
        background-position: center center;
        background-size: 100%;
        background-repeat: no-repeat;
    }
</style>

<script>
    /**
     * 工具方法
     */
     /*
     * 频率控制 返回函数连续调用时，fn 执行频率限定为每多少时间执行一次
     * @param fn {function}  需要调用的函数
     * @param delay  {number}    延迟时间，单位毫秒
     * @param immediate  {bool} 给 immediate参数传递false 绑定的函数先执行，而不是delay后后执行。
     * @return {function}实际调用函数
     */
    var throttle = function (fn, delay, immediate, debounce) {
        var curr = +new Date(),//当前事件
            last_call = 0,
            last_exec = 0,
            timer = null,
            diff, //时间差
            context,//上下文
            args,
            exec = function () {
                last_exec = curr
                fn.apply(context, args)
            }
        return function () {
            curr = +new Date()
            context = this,
            args = arguments,
            diff = curr - (debounce ? last_call : last_exec) - delay
            clearTimeout(timer)
            if (debounce) {
                if (immediate) {
                    timer = setTimeout(exec, delay)
                } else if (diff >= 0) {
                    exec()
                }
            } else {
                if (diff >= 0) {
                    exec()
                } else if (immediate) {
                    timer = setTimeout(exec, -diff)
                }
            }
            last_call = curr
        }
    }

    /*
    * 空闲控制 返回函数连续调用时，空闲时间必须大于或等于 delay，fn 才会执行
    * @param fn {function}  要调用的函数
    * @param delay   {number}    空闲时间
    * @param immediate  {bool} 给 immediate参数传递false 绑定的函数先执行，而不是delay后后执行。
    * @return {function}实际调用函数
    */

    var debounce = function (fn, delay, immediate) {
        return throttle(fn, delay, immediate, true)
    }
    function getScrollTop() {   //取得滚动条的竖直距离  
        return document.documentElement.scrollTop || document.body.scrollTop
    }  

    function setScrollTop (value) {  //设置滚动条的竖直距离,实现效果的关键就是在很短的间隔时间内不断地修改滚动条的竖直距离,以实现滚动效果  
        document.documentElement.scrollTop = value  
        document.body.scrollTop = value  
    }  

    const DEFAULT_SIZE = 50

    export default {
        props: {
            style: {
                type: Object,
                default () {
                    return {
                        width: DEFAULT_SIZE + 'px',
                        height: DEFAULT_SIZE + 'px',
                        top: 'auto',
                        left: 'auto',
                        right: '30px',
                        bottom: '40px'
                    }
                }
            },
            interval: {
                type: [Number, String],
                default: 128
            },
            scrollbarOffset: {
                type: [Number, String],
                default: 100
            },
            acceleration: {
                type: [Number, String],
                default: .5
            },
            time: {
                type: [Number, String],
                default: 10
            },
            mode: { // 动画模式
                type: String,
                default: 'raf'
            }
        },
        data () {
            return {
                btn: null,
                show: false
            }
        },
        ready () {
            this.btn = this.$els.btn
            setTimeout(() => {
                this.bindEvent()
            })
        },
        methods: {
            bindEvent () {
                var btn = this.btn
                window.addEventListener('scroll', this.scrollHandler, false)
            },
            scrollSpy () {
                var scrollTop = getScrollTop()
                if (scrollTop > this.scrollbarOffset) { // 判断滚动条距离窗口顶部多远时显示出来，这里是100px
                    this.show = true
                } else {  
                    this.show = false
                }  
            },
            backTop (acceleration, time) {     //修改参数可调整返回顶部的速度  
                var speed = 1 + this.acceleration  
                if (this.mode !== 'raf') {
                    var timer = setInterval(() => {  
                        setScrollTop(Math.floor(getScrollTop() / speed)) //这行代码是关键，取得滚动条竖直距离，除以speed后再给滚动条设置竖直距离  
                        if (getScrollTop() == 0) 
                            clearInterval(timer)
                    }, this.time)
                } else {
                    requestAnimationFrame(function step () {
                        setScrollTop(Math.floor(getScrollTop() / speed))

                        if (getScrollTop() > 0) {
                            requestAnimationFrame(step)
                        }
                    })
                }
            } 
        },
        computed: {
            scrollHandler () {
                return throttle(this.scrollSpy, +this.interval)
            },
            iconWidth () {
                return (parseFloat(this.style.width) / 2) + 'px'
            },
            iconHeight () {
                return (parseFloat(this.style.height) / 2) + 'px'
            }
        },
        beforeDestory () {
            window.removeEventListener('scroll', this.scrollHandler, false)
        }
    }
</script>
