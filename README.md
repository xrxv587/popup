# popup.js
为了更熟练的使用原生js操作DOM而写的一个弹窗
###### [去看看low到爆的示例 ](https://xrxv587.github.io/popup/)
### 文件结构
    -popup
     -popup.js
     -popup.css
### Apis:
    引入 js 后源码内部自动初始化一个popup全局对象
    
    弹窗类型(<font face="#4682B4">type</font>)：
        default
        warn
        error
        confirm
    
    show方法调用方式：
        popup.show(obj);
        
    obj.type：弹窗类型
    
    obj.callback：确认事件按钮回调
    
    
```
示例
    popup.show({
        type: 'confirm',
        callback: function () {
            console.log('confirm button was clicked');
        }
    })
```
so easy , right?
    
    
    