# 基于 NodeJS 创建部署云应用 Todo App

本文介绍如何基于 NodeJS 技术栈创建并部署一个简单的 Todo App 应用程序。

## 前提条件

* 您拥有支付宝账号
* 您已 [申请](https://open.alipay.com/platform/miniBeta.htm#/?_k=o88xd4) 开通小程序开发者权限
* 您已 [开通云服务](https://docs.alipay.com/mini/cloud-service/bnd2v4#4khlly)
* 已下载安装 [小程序开发者工具](https://docs.alipay.com/mini/ide/download)

## 操作步骤

整个操作流程分为以下 8 步：

1. [创建小程序](https://yuque.antfin-inc.com/tiny-site/cloud-service/wur2yf#2gpmfu)
2. [创建云应用后端服务](https://yuque.antfin-inc.com/tiny-site/cloud-service/wur2yf#7ltgyp)
3. [构建环境](https://yuque.antfin-inc.com/tiny-site/cloud-service/wur2yf#sdauzh)
4. [准备开发环境](https://yuque.antfin-inc.com/tiny-site/cloud-service/wur2yf#a-name4g6zrna%E5%87%86%E5%A4%87%E5%BC%80%E5%8F%91%E7%8E%AF%E5%A2%83)
5. [数据准备](https://yuque.antfin-inc.com/tiny-site/cloud-service/wur2yf#a-nameiv7wkba%E7%BC%96%E5%86%99%E5%BA%94%E7%94%A8%E5%90%8E%E7%AB%AF%E4%BB%A3%E7%A0%81)
6. [开发云应用后端服务](https://yuque.antfin-inc.com/tiny-site/cloud-service/wur2yf#dsccgu)
7. [开发小程序前端界面](https://yuque.antfin-inc.com/tiny-site/cloud-service/wur2yf#qe3bpo)
8. [发布部署应用](https://yuque.antfin-inc.com/tiny-site/cloud-service/wur2yf#a-namephg6wha%E5%8F%91%E5%B8%83%E9%83%A8%E7%BD%B2%E5%BA%94%E7%94%A8)

### 创建小程序

1. 登录 [蚂蚁金服开放平台](https://openhome.alipay.com/platform/home.htm)，选择 __开发者中心__ > __小程序__ > __创建__。
2. 填写 __基本信息__，点击 __创建__ 按钮，创建应用名为 __示例应用__ 小程序。
    > __说明__：一个账号下最多可以创建10个小程序；未提交过审核的小程序可以删除，删除的小程序不在计数范围。

### 创建云应用后端服务

1. 在 __我的小程序 __页面，选择刚创建的小程序，点击 __查看__，进入 __开发管理__ 页面。
2. 点击左侧导航栏的 __云服务（公测）__，在 <span data-type="color" style="color:rgb(0, 0, 0)"><span data-type="background" style="background-color:rgb(255, 255, 255)"><strong>云服务列表</strong></span></span><span data-type="color" style="color:rgb(0, 0, 0)"><span data-type="background" style="background-color:rgb(255, 255, 255)"> </span></span>页面点击 __创建云服务 > 创建云应用__。
3. 在 __创建云应用__ 页面，选择 <span data-type="color" style="color:rgb(38, 38, 38)"><span data-type="background" style="background-color:rgb(255, 255, 255)"><strong>NodeJS</strong></span></span><strong> 技术栈</strong>，填入 __应用名称__ 和 __描述__ (选填)，点击 __创建__。

### 构建环境

1. 返回 __云服务__ 页面，点击刚创建的<span data-type="color" style="color:rgb(38, 38, 38)"><span data-type="background" style="background-color:rgb(255, 255, 255)">云服务</span></span>卡片中的 __构建环境__ 按钮。
2. 在 __购买环境资源__ 页面，选择合适的环境配置方案，此处选择 __小程序云应用入门（Mysql版）__，点击 __同意《产品服务协议》__ > __确认配置__。
    > __说明__：当前测试环境该方案免费提供，但若连续 7 日未部署过代码，环境会被自动回收。
3. 在 __确认订单__ 页面，点击 __确认购买__。购买成功后会自动进入 __构建环境__ 页面。构建过程会耗时几分钟，构建成功后，您可以选择 __查看应用详情__ ，或者 __返回应用列表__ 。

### 准备开发环境

1. 打开小程序开发者工具，点击 __新建项目__。

![image | left](https://cdn.nlark.com/lark/0/2018/png/133432/1545198106232-741e4307-55d6-4356-93a5-169ffaecfa29.png "")

    
2. <span data-type="color" style="color:rgb(38, 38, 38)">在</span><span data-type="background" style="background-color:rgb(255, 255, 255)"><span data-type="color" style="color:rgb(38, 38, 38)">新建项目向导中，选择</span></span><span data-type="color" style="color:rgba(0, 0, 0, 0.65)"><span data-type="background" style="background-color:rgb(255, 255, 255)"> </span></span>__小程序__<span data-type="color" style="color:rgba(0, 0, 0, 0.65)"><span data-type="background" style="background-color:rgb(255, 255, 255)">，</span></span><span data-type="background" style="background-color:rgb(255, 255, 255)"><span data-type="color" style="color:rgb(38, 38, 38)">选择 </span></span><strong><span data-type="color" style="color:rgb(38, 38, 38)">Todo App </span></strong><strong><span data-type="background" style="background-color:rgb(255, 255, 255)"><span data-type="color" style="color:rgb(38, 38, 38)">示例，点击</span></span></strong><span data-type="background" style="background-color:rgb(255, 255, 255)"><span data-type="color" style="color:rgb(38, 38, 38)"> </span></span><strong><span data-type="color" style="color:rgb(38, 38, 38)">下一步</span></strong><span data-type="background" style="background-color:rgb(255, 255, 255)"><span data-type="color" style="color:rgb(38, 38, 38)">。</span></span>

![image | left](https://cdn.nlark.com/lark/0/2018/png/133432/1545198187052-84cf0700-be22-453b-adae-ba90caf89558.png "")

    
3. 输入<span data-type="color" style="color:rgba(0, 0, 0, 0.65)"><span data-type="background" style="background-color:rgb(255, 255, 255)"> </span></span>__项目名称__<span data-type="background" style="background-color:rgb(255, 255, 255)"><span data-type="color" style="color:rgb(38, 38, 38)">，项目路径会自动填充，选择 </span></span>__云应用__<span data-type="color" style="color:rgba(0, 0, 0, 0.65)"><span data-type="background" style="background-color:rgb(255, 255, 255)"> </span></span>为后端服务，点击 __完成__<span data-type="color" style="color:rgba(0, 0, 0, 0.65)"><span data-type="background" style="background-color:rgb(255, 255, 255)">。</span></span>

![image | left](https://cdn.nlark.com/lark/0/2018/png/133432/1545198211677-835b96a9-86b8-47c7-910f-96184a0881c4.png "")

    
4. 项目<span data-type="background" style="background-color:rgb(255, 255, 255)"><span data-type="color" style="color:rgb(38, 38, 38)">创建好后，进入开发界面。点击右上角的 </span></span><strong><span data-type="color" style="color:rgb(38, 38, 38)">登录</span></strong><span data-type="background" style="background-color:rgb(255, 255, 255)"><span data-type="color" style="color:rgb(38, 38, 38)"> </span></span><span data-type="color" style="color:rgb(38, 38, 38)">按钮，用支付宝扫码登录。</span>

![image | left](https://cdn.nlark.com/lark/0/2018/png/133432/1545198231269-f64aca16-e290-4c66-ac82-f67969b9d4c6.png "")

    
5. <span data-type="color" style="color:rgb(38, 38, 38)">关联</span><span data-type="background" style="background-color:rgb(255, 255, 255)"><span data-type="color" style="color:rgb(38, 38, 38)">前面</span></span><span data-type="color" style="color:rgba(0, 0, 0, 0.65)"><span data-type="background" style="background-color:rgb(255, 255, 255)"> </span></span>[创建的小程序](https://yuque.antfin-inc.com/tiny-site/cloud-service/wur2yf#2gpmfu)<span data-type="color" style="color:rgba(0, 0, 0, 0.65)"><span data-type="background" style="background-color:rgb(255, 255, 255)"> </span></span>应用。

![image | left](https://cdn.nlark.com/lark/0/2018/png/133432/1545198256926-ea98e170-4815-4004-9881-382a14b8ab05.png "")

    
6. 关联<span data-type="background" style="background-color:rgb(255, 255, 255)"><span data-type="color" style="color:rgb(38, 38, 38)">前面</span></span><span data-type="color" style="color:rgba(0, 0, 0, 0.65)"><span data-type="background" style="background-color:rgb(255, 255, 255)"> </span></span>[构建的云应用环境](https://yuque.antfin-inc.com/tiny-site/cloud-service/wur2yf#7ltgyp)<span data-type="color" style="color:rgba(0, 0, 0, 0.65)"><span data-type="background" style="background-color:rgb(255, 255, 255)">，</span></span><span data-type="background" style="background-color:rgb(255, 255, 255)"><span data-type="color" style="color:rgb(38, 38, 38)">点击</span></span><span data-type="color" style="color:rgba(0, 0, 0, 0.65)"><span data-type="background" style="background-color:rgb(255, 255, 255)"> </span></span>__确定__<span data-type="color" style="color:rgba(0, 0, 0, 0.65)"><span data-type="background" style="background-color:rgb(255, 255, 255)">。</span></span>

### 数据准备

开发后端代码之前，需要先建立应用运行所需的数据库。

1. 在 __云应用详情__ 页面的 __数据库__ 页签，__点击查看__ __Web 控制台__，登录后进入 __PhpMyAdmin__ 的数据库管理页面。
2. 在 sample 数据库中，新建表 task，数据结构如下。请确保表结构与图中完全一致，否则程序可能无法运行，特别是如下几处：a. 字段名称；b. 字段类型；c. id字段为主键，且自增（A\_I）；d. done字段默认值为0；e. 各字段是否允许空值。

![image | left](https://cdn.nlark.com/lark/0/2018/png/133432/1545190171767-6b5a36cd-c57b-4f84-b161-9319f52ede0e.png "")
您也可以通过执行以下SQL建表。
3. ```sql
    CREATE TABLE `task` (`id` bigint(20) NOT NULL AUTO_INCREMENT,`label` varchar(140) CHARACTER SET utf8 DEFAULT NULL,`done` tinyint(1) NOT NULL DEFAULT '0',`img_url` varchar(256) CHARACTER SET utf8 DEFAULT NULL,`user_id` varchar(50) CHARACTER SET utf8 DEFAULT NULL,PRIMARY KEY (`id`)) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8
    ```
4. 点击 __保存，完成__创建该示例程序所需的数据库表。

### 开发云应用后端服务

1. 后端代码结构如下图，运行后端服务之前需要修改图中标注的几个文件。


![image | left](https://cdn.nlark.com/lark/0/2018/png/133432/1545199219497-2d682e42-eb43-4e74-97fc-2cea06c71619.png "")

* config/config.default.js 文件：其中的 config.mysql 对象中数据库相关的参数需修改为您创建的云应用的对应值。

![image | left](https://cdn.nlark.com/lark/0/2018/png/50956/1545289991521-06fd08f9-300c-4e56-9054-70c0f903fc3f.png "")

具体值可以从 __云应用详情__ 页的 __数据库__ 页签中得到。

![image | left](https://cdn.nlark.com/lark/0/2018/png/50956/1545290070908-73491d66-6c10-4896-8b4f-f8a26e44aefe.png "")

* app/controller/home.js 文件：getUserInfo 方法中初始化 AlipaySdk 对象的代码如下：

![image | left](https://cdn.nlark.com/lark/0/2018/png/133432/1545200235106-ed052d30-0a38-4a2d-9ba6-f48b0ca810e5.png "")
参数 appId、privateKey 和 alipayPublicKey 分别为小程序 ID 和应用的私钥、公钥。其中，私钥和公钥分别存储在了文件 private-key.pem 和 public-key.pem 中。

![image | left](https://cdn.nlark.com/lark/0/2018/png/133432/1545295496020-a1d070b7-fc8b-470d-bd3f-6a3fa4d64894.png "")
小程序的ID可以在小程序页面的左上角获得。小程序应用密钥的获取方法请参看 [文档](https://github.com/alipay/alipay-sdk-nodejs#%E6%94%AF%E4%BB%98%E5%AE%9D%E5%BC%80%E6%94%BE%E5%B9%B3%E5%8F%B0%E9%85%8D%E7%BD%AE)。使用[RSA密钥生成工具](https://docs.open.alipay.com/291/106097/)生成PKCS1格式的私钥、公钥后，将私钥内容存入 private-key.pem 文件中，再将公钥设置到开放平台，最后将生成的支付宝公钥内容存入 public-key.pem 中。

![image | left](https://cdn.nlark.com/lark/0/2018/png/133432/1545224447948-63a03b2c-820e-4ec8-a30c-d2bb0e0c11bc.png "")
此外，home.js 中还有个变量 DEMO\_DOMAIN 需要修改为云应用服务所在的域名或 IP 地址。

1. 在 server 目录下，运行命令 `npm install && npm run dev`可在本地运行程序。

需要注意的是，为了使用小程序服务端SDK获取用户信息，__小程序__ > __开发管理__ > __功能列表__ 中，必须添加 __获取会员信息__ 这一功能。


![image | left](https://cdn.nlark.com/lark/0/2018/png/133432/1545297961075-f6abaa69-f292-46ae-b23d-0a0caa602d09.png "")

#### __后端代码介绍__

__下面对后端代码做简单介绍。__

文件 app/router.js 中定义了 url 路由。
```javascript
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/todos', controller.home.getTodos);
  router.get('/users', controller.home.getUserInfo);
  router.post('/todos/delete', controller.home.deleteTodo);
  router.post('/todos/change', controller.home.changeState);
  router.post('/todos/add', controller.home.addTodo);
  router.post('/upload', controller.home.upload);
};
```

可以看到，后端服务的各接口都路由到了 app/controller/home.js 文件中的各个方法。

其中，方法 getUserInfo 拿到前端传过来的 auth code，通过 AlipaySdk 拿到 access token 后再通过 AlipaySdk 获得用户的信息。
```javascript
async getUserInfo() {
    // 拿到前端传过来的auth code
    const authcode = this.ctx.request.query.authcode;

    // 创建AlipaySdk对象
    const alipaySdk = new AlipaySdk({
      appId: 'fill in your app ID',
      privateKey: fs.readFileSync('./private-key.pem', 'ascii'),
      alipayPublicKey: fs.readFileSync('./public-key.pem', 'ascii'),
    });

    // 调用alipay.system.oauth.token方法，用auth code 换取 access token
    const authMethod = 'alipay.system.oauth.token';
    const authParams = {
      grant_type: 'authorization_code',
      code: authcode,
    };
    try {
      const authResult = await alipaySdk.exec(authMethod, authParams);

      // 调用alipay.user.info.share方法，用access token 拿到用户信息
      const userMethod = 'alipay.user.info.share';
      const userParams = {
        auth_token: authResult.accessToken,
      }
      const result = await alipaySdk.exec(userMethod, userParams);

      // 将用户信息写入返回的消息体中，返回给前端
      this.ctx.body = result;
    } catch (err) {
      console.log('get user info err>>>>>', err);
    }
  }
```

方法 getTodos 从数据库中取得某个用户的所有 todo 项，并返回给前端。MySQL 数据库访问使用了插件 egg-mysql，插件具体用法请参看 [文档](https://eggjs.org/zh-cn/tutorials/mysql.html)。
```javascript
async getTodos() {
    // 从url的query中取得userId
    var userId = this.ctx.query.userId;

    var tasks; 
    if (userId) {
      // 如果前端有传userId，则向数据库请求该userId下的所有task
      tasks = await this.app.mysql.select('task', {
        where: {user_id: userId}
      });  
    } else {
      // 如果前端没有传userId，则返回数据库中所有的task
      tasks = await this.app.mysql.select('task');  
    }
    
    // 将task转换成前端所需的格式
    const todos = tasks.map(item => {return {
      text: item.label,
      completed: (item.done > 0 ? true : false),
      id: item.id,
      iconUrl: item.img_url
    }});

    // 将todo项写入消息体，返回给前端
    this.ctx.body = {
      success: true,
      todoList: todos
    };
  }
```

方法 upload 接收前端上传的文件，并存到默认的静态资源目录中（app/public）。
```javascript
async upload() {
    // 从请求中获取文件流
    const { ctx } = this;
    const stream = await ctx.getFileStream();

    // 生成文件名（ UPLOAD_DIR 为存储上传图片的文件夹，该文件夹必须存在）
    var fileId = uuid.v1() + path.extname(stream.filename);
    const name = UPLOAD_DIR + '/' + fileId;
    
    try {
      // 处理文件
      stream.pipe(fs.createWriteStream(name));
    } catch(err) {
      console.log('pipe error!', err);
      // 将上传的文件流消费掉，不然浏览器响应会卡死
      await sendToWormhole(stream);
      throw err;
    }

    // 返回上传图片的访问地址，DEMO_DOMAIN 为云应用域名
    ctx.body = {
      imgUrl: 'https://' + DEMO_DOMAIN +'/public/' + fileId,
    };
  }
```

### 开发小程序前端界面

关于<span data-type="color" style="color:rgb(38, 38, 38)"> Todo App 前端代码的</span>详细介绍参见 [文档](https://docs.alipay.com/mini/developer/file-type)。前端代码结构如下图。


![image | left](https://cdn.nlark.com/lark/0/2018/png/133432/1545198508924-21270cdf-5d79-4a8e-b0ec-85ec32f02f38.png "")

其中 app.js 文件中的变量 demoDomain 需要修改为您自己的小程序云应用的域名，该域名<span data-type="color" style="color:rgba(0, 0, 0, 0.65)"><span data-type="background" style="background-color:rgb(255, 255, 255)">可以从 </span></span>__云应用详情__<span data-type="color" style="color:rgba(0, 0, 0, 0.65)"><span data-type="background" style="background-color:rgb(255, 255, 255)"> </span></span>页的 __二级域名__<span data-type="color" style="color:rgba(0, 0, 0, 0.65)"><span data-type="background" style="background-color:rgb(255, 255, 255)"> </span></span>页签中复制得到。


![image | left](https://cdn.nlark.com/lark/0/2018/png/133432/1545198656551-4b6fc255-35c3-49f1-8680-1e6be89f2c52.png "")


### 发布部署应用

1. 点开 __云服务__ 右边的菜单，点击 __上传服务端代码__。

![image | left](https://cdn.nlark.com/lark/0/2018/png/133432/1545200647248-3ad791b3-a30c-429c-9b15-21687504d884.png "")
上<span data-type="color" style="color:rgb(38, 38, 38)">传</span><span data-type="background" style="background-color:rgb(255, 255, 255)"><span data-type="color" style="color:rgb(38, 38, 38)">及发布过程中，可以通过</span></span><span data-type="color" style="color:rgba(0, 0, 0, 0.65)"><span data-type="background" style="background-color:rgb(255, 255, 255)"> </span></span>__查看日志__<span data-type="color" style="color:rgba(0, 0, 0, 0.65)"><span data-type="background" style="background-color:rgb(255, 255, 255)"> </span></span>关注部署进度。

![image | left](https://cdn.nlark.com/lark/0/2018/png/133432/1545200664869-d972a8f5-3e5c-4add-a269-00730af6c97e.png "")


![image | left](https://cdn.nlark.com/lark/0/2018/png/133432/1545200684757-612ab58b-6ad4-4bd3-a374-a3b37b99385a.png "")

    
2. 部署完成后，在小程序开发者工具中编译应用，即可查看程序运行效果。

![image | left](https://cdn.nlark.com/lark/0/2018/png/133432/1545200798781-49a1bed8-db3c-4bef-9d91-81838067a5b2.png "")
<span data-type="color" style="color:rgb(38, 38, 38)">测试</span><span data-type="background" style="background-color:rgb(255, 255, 255)"><span data-type="color" style="color:rgb(38, 38, 38)">完成后，点击页面右上角的 </span></span><strong><span data-type="color" style="color:rgb(38, 38, 38)">上传</span></strong><span data-type="background" style="background-color:rgb(255, 255, 255)"><span data-type="color" style="color:rgb(38, 38, 38)"> </span></span><span data-type="color" style="color:rgb(38, 38, 38)">按钮将小程序上传到开放平台，也可以点击 </span><strong><span data-type="color" style="color:rgb(38, 38, 38)">预览</span></strong><span data-type="background" style="background-color:rgb(255, 255, 255)"><span data-type="color" style="color:rgb(38, 38, 38)">，用手机支付宝 APP 扫码预览在手机上的真实效果。若要在手机上向服务器发送请求，您还需要到 </span></span><strong><span data-type="color" style="color:rgb(38, 38, 38)">小程序管理</span></strong><span data-type="background" style="background-color:rgb(255, 255, 255)"><span data-type="color" style="color:rgb(38, 38, 38)"> </span></span><span data-type="color" style="color:rgb(38, 38, 38)">页面 &gt; </span><strong><span data-type="color" style="color:rgb(38, 38, 38)">设置</span></strong><span data-type="background" style="background-color:rgb(255, 255, 255)"><span data-type="color" style="color:rgb(38, 38, 38)"> </span></span><span data-type="color" style="color:rgb(38, 38, 38)">&gt; </span><strong><span data-type="color" style="color:rgb(38, 38, 38)">httpRequest 接口请求域名白名单</span></strong><span data-type="background" style="background-color:rgb(255, 255, 255)"><span data-type="color" style="color:rgb(38, 38, 38)">，把 HTTP 请求的域名录入进去。</span></span>

![image | left](https://cdn.nlark.com/lark/0/2018/png/133432/1545201235871-381db78e-49dd-42cd-b940-4fe9c0d2cb70.png "")

3. <span data-type="color" style="color:rgb(38, 38, 38)">上传</span><span data-type="background" style="background-color:rgb(255, 255, 255)"><span data-type="color" style="color:rgb(38, 38, 38)">完毕后，登录到开放平台提交审核。审核完毕后，小程序即可进行发布操作了。</span></span>

