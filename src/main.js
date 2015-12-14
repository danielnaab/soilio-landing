"use strict";

var document = require('global/document'),
    elementClass = require('element-class'),
    jsonp = require('jsonp'),
    serialize = require('form-serialize'),
    window = require('global/window')


window.register = function (form) {
    jsonp(form.getAttribute('action') + '&' + serialize(form), {
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
            elementClass(node).remove('error')
            node.innerHTML = response.msg
        }
        elementClass(node).remove('hidden')
    })
    return false
}
