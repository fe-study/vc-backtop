import Vue from 'vue'
import vcBacktop from '../dist/build.js'

new Vue({
	el: '#app',
	data () {
		return {
            acceleration: .7,
            scrollbarOffset: "100",
            interval: 128,
            style: { "width": "60px","height": "60px","left":"auto", "top":"auto", "bottom": "60px", "right": "40px" },
            styleText: '{ "width": "60px","height": "60px","left":"auto", "top":"auto", "bottom": "60px", "right": "40px" }'
		}
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
