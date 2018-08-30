'use strict'

import Vue from 'vue'
import axios from 'axios'
import common from 'common'

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
    common.goRoom(config.rid);
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
    }
*/
