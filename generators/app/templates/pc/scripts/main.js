'use strict'

import Vue from 'vue'
import axios from 'axios'
import user from 'user'
// import layer from 'layer'; // desc: 弹出层插件

import '<%= stylePath %>'

new Vue({
    el: '#app',
    data: {},
    mounted: function () {
    },
    methods: {
    }
})

/* 以下均为示例代码 - 需要则可以参考 */
/*
    // mobile 主播房间跳转
    window.open('/' + config.mid, '_blank');
*/
/*
    // 翻页加载
    initScroll() {
        var ele = this.$refs.list;
        var bh = 150;
        var _self = this;
        ele.addEventListener('scroll', function() {
            var toBottomH = ele.scrollHeight - ele.scrollTop - ele.clientHeight;
            if (toBottomH < bh) {
                _self.getListData();
            }
        }, false);

        $('.scrollbar').niceScroll({
            cursorwidth: 8,
            cursorcolor: "rgba(65, 67, 100, .6)",//设置滚动条滑块的颜色
            cursorborder: "none", // CSS方式定义滚动条边框颜色
            autohidemode: false,
            cursorfixedheight: 40,
            horizrailenabled: false,
            hwacceleration: true,
            railpadding: { top: 0, right: 2, left: 0, bottom: 4 },
        });
    }
*/
