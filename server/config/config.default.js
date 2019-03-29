'use strict';

module.exports = appInfo => {
  const config = (exports = {});

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1536052518826_1224';

  // add your config here
  config.middleware = [];

  config.security = {
    csrf: {
      enable: false,
    },
  };

  // !!!!!!MySQL参数host（数据库服务IP地址）和password（admin用户的登录密码）需修改为小程序云应用服务中的MySQL的对应值!!!!!!
  config.mysql = {
    client: {
      host: '47.100.249.167',
      port: '3306',
      user: 'admin',
      password: 'Aa123456',
      database: 'sample',
    },
    app: true,
    agent: false,
  };

  return config;
};
