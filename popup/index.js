(function(w){

    var popupMask, confirm, title = null;
    var popType = {
        warn: 'warn',
        error: 'error',
        default: 'defalut',
        confirm: 'confirm'
    }
    var ani = null;

    // Dom类
    var Dom = (function () {
        // 构造Dom类
        function Dom (config) {
            /**
             * config.element config.classList config.size.width config.size.height config.innerHtml
             * */ 
            this.element = document.createElement(config.element);
            if (config.classList instanceof Array) {
                for(var len = 0; len > config.classList.length; len++) {
                    this.element.classList.add(config.classList[len]);
                }
            } else if(typeof config.classList == 'string'){
                this.element.classList.add(config.classList);
            }
            if (config.size) {
                this.element.style.width = config.size.width + 'px';
                this.element.style.height = config.size.height + 'px';
            }
            if (config.innerHtml) {
                this.element.innerHTML = config.innerHtml;
            }
            if (config.id) {
                this.element.id = config.id;
            }
            
        }
        return Dom;
    }());

    // 开始创造dom模块

    // 遮罩层dom
    popupMask = new Dom({element: 'div', classList: 'popupMask',size: {width: window.innerWidth, height: this.window.innerHeight}});
    // 确认窗口
    confirm = new Dom({element: 'div', classList: 'popup', id: 'popup'});
    // 标题内容
    tips = new Dom({element: 'div', classList: 'popupTitleText'});
    // 标题关闭图标
    closeIcon = new Dom({element: 'div', classList: 'popupClose'});
    closeIcon.element.innerHTML = '\&times';

    // 组装窗口标题
    title = new Dom({element: 'div', classList: 'popupTitle'});
    title.element.appendChild(tips.element);
    title.element.appendChild(closeIcon.element);
    // 内容dom
    content = new Dom({element: 'div', classList: 'popupContent', innerHtml: '这里是提示内容'});
    // 确认按钮
    okBtn = new Dom({element: 'button', classList: 'popupConfirm', innerHtml: '确定'});
    // 取消按钮
    cancelBtn = new Dom({element: 'button', classList: 'popupCancel', innerHtml: '取消'});
    cancelBtn.element.onclick = function () {
        var popupMask = document.getElementsByClassName('popupMask')[0];
        document.body.removeChild(popupMask);
    }
    // 确认窗口按钮组
    confirmBtns = new Dom({element: 'div', classList: 'popupBtns'});
    confirmBtns.element.appendChild(okBtn.element);
    confirmBtns.element.appendChild(cancelBtn.element);

    // 弹窗方法
    var popup = function (config, cb) {
        if (config.type = popType.confirm) {
            tips.element.innerHTML = '提示';
            confirm.element.appendChild(title.element);
            confirm.element.appendChild(content.element);
            confirm.element.appendChild(confirmBtns.element);
            confirm.element.style.transform = 'scale(0, 0)';
        }
        popupMask.element.appendChild(confirm.element);
        document.body.appendChild(popupMask.element);
        ani = setTimeout(function () {
            document.getElementById('popup').style.transform = 'scale(1, 1)';
        }, 100);
    }

    w.popup = popup;
})(window);