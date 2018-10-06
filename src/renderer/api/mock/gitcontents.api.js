export default {
  validateUser: config => {
    console.log('Mock: ' + config.url)
    return {
      'status': 'success',
      'code': '0',
      'message': '',
      'data': {
        'groups': [
          {
            'id': 1,
            'name': 'admin',
            'status': true
          },
          {
            'id': 2,
            'name': 'friends',
            'status': true
          }
        ],
        'users': [
          {
            'id': 1,
            'account': 2015302590039,
            'groupId': 1,
            'status': true
          },
          {
            'id': 1,
            'account': 2017302590175,
            'groupId': 1,
            'status': true
          }
        ]
      }
    }
  },
  announce: config => {
    console.log('Mock: ' + config.url)
    return `### 公告
- 本软件的最新版本是 v1.3.2，点击菜单: \`关于 > 更新日志\`可以查看最新版本

- 短时间内向图书馆后台发送大量请求会被图书馆暂时性封号(30min)，请节制使用本软件

- 如果有任何疑问可以联系我📧: whucstao@qq.com

- 发现 bug 请点击: \`关于 > 问题反馈\`

- 设置页面的软件使用数据可以帮助我改善软件，希望您可以把软件使用数据提交给我😋

- 移动端还要好几个月才会发布，敬请期待🤕

#### 如果您有多的钱，让我们支付宝见！

<p align="center"><img alt="支付宝二维码.jpg" src="https://home.cs-tao.cc/blog/img/alipayimg.jpg" width="70%" height="70%"></p>

#### 或者微信见！

<p align="center"><img alt="微信二维码.jpg" src="https://home.cs-tao.cc/blog/img/wechatimg.jpg" width="70%" height="70%"></p>

#### 祝您使用愉快，学习进步😉~
`
  }
}
