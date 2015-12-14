"use strict";

var document = require('global/document'),
    elementClass = require('element-class'),
    jsonp = require('jsonp'),
    serialize = require('form-serialize'),
    window = require('global/window')


window.register = function (form) {
    jsonp('//crushingpennies.us12.list-manage.com/subscribe/post-json?u=1ad2313c80a66d742a9a602c0&id=ca39584e05&' + serialize(form), {
        param: 'c'
    }, function (err, response) {
        var node = document.getElementById('form-msg')
        if (err || response.result === 'error') {
            node.innerHTML = (
                response && response.msg ?
                            response.msg :
                            'There was an error registering your email address.'
                )
            elementClass(node).add('error')
        }
        else {
            node.innerHTML = response.msg
            elementClass(node).remove('error')
            var emailNode = document.getElementById('mce-EMAIL')
            emailNode.blur()
            emailNode.value = ''
        }
        elementClass(node).remove('hidden')
    })
    return false
}
