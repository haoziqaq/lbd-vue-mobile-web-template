```
nginx转发socket服务
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
修改createSocketUrl.js
var config = {
  protocol: 'https',
  hostname: 'tools.goosdk.com',
  port: 443,
  pathname: '/sockjs-node'
}
```

```
修改Server.js
const SOCK_PATH = '/sockjs-node'
```