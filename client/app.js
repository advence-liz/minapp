App({
  todos: [
    { text: 'Learning Javascript', completed: true },
    { text: 'Learning ES2016', completed: true },
    { text: 'Learning 支付宝小程序x', completed: false },
  ],

  userInfo: null,
  
  // demoDomain变量记录了后端服务的请求地址，请填入自己的小程序云应用域名
  //
  // 云应用调试
  // demoDomain: 'https://xxxxxx.mapp-test.xyz',
  // 本地调试
  demoDomain: 'http://127.0.0.1:7001',
  // demoDomain: 'app2129363270test.mapp-test.xyz',

  getUserInfo() {
    var theDemoDomain = this.demoDomain;
    return new Promise((resolve, reject) => {
      if (this.userInfo) resolve(this.userInfo);

      console.log("get user info...");
      my.getAuthCode({
        scopes: 'auth_user',
        success: res => {
          console.info('authCode>>>>>>>>>', res.authCode);

          my.httpRequest({
            url: theDemoDomain +'/users?authcode=' + res.authCode,
            method: 'GET',
            success: function(res) {
              console.log('user info>>>>>>>>>>>', res);
              resolve(res.data);
            },
            fail: function(res) {
              console.log('query user info fail>>>>>>>', res);
              my.alert({content: 'fail: ' + res});
            },
            complete: function(res) {
              console.log('query user info complete>>>>>>', res);
            }
          });
        },
        fail: () => {
          console.log('get authcode fail');
          reject({});
        },
      });
    });
  },
});
