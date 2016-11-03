import Vue from 'vue'
import vcBacktop from '../src'

new Vue({
	el: '#app',
	data () {
		return {
            acceleration: .7,
            scrollbarOffset: "100",
            interval: 128,
            scrollingHide: false,
            style: { "width": "60px","height": "60px","left":"auto", "top":"auto", "bottom": "60px", "right": "40px" },
            styleText: '{ "width": "60px","height": "60px","left":"auto", "top":"auto", "bottom": "60px", "right": "40px" }'
		}
	},
    created () {
        let scrollingHide = location.href.split('hide=')[1]
        this.scrollingHide = scrollingHide === 'true' ? true : false
    },
    ready () {
    },
    methods: {
        setStyle () {
            this.style = JSON.parse(this.styleText)
        }
    },
	components: {
        vcBacktop
	}
})
