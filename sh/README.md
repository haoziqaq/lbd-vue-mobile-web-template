```
step:1 nginx转发socket服务
location /sockjs-node {
      proxy_set_header X-Real-IP  $remote_addr;
      proxy_set_header X-Forwarded-For $remote_addr;
      proxy_set_header Host $host;
      proxy_pass http://127.0.0.1:9810;
      proxy_redirect off;
      proxy_http_version 1.1;
      proxy_set_header Upgrade $http_upgrade;
      proxy_set_header Connection "upgrade"; 
    }
```

```
step:2 修改createSocketUrl.js
var config = {
  protocol: 'https',
  hostname: 'tools.goosdk.com',
  port: 443,
  pathname: '/sockjs-node'
}
```

```
step3: 修改Server.js
const SOCK_PATH = '/sockjs-node'
```

```
step4: 传到nginx服务器安装node_modules依赖之后执行so.sh脚本进行热更新源码修改
```