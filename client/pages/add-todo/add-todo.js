const app = getApp();

Page({
  data: {
    inputValue: '',
    iconUrl:''
  },

  onBlur(e) {
    this.setData({
      inputValue: e.detail.value,
    });
    console.log('userInfo>>>>>>', app.userInfo);
  },
  
  add() {
    var userId = '10001';
    if (app.userInfo) {
      userId = app.userInfo.userId;
    }
    console.log('Add todo to user>>>>>>>', userId);
    this.addTodo({
      text: this.data.inputValue,
      completed: false,
      iconUrl: this.data.iconUrl,
      userId: userId
    }).then(res=>{
      if(res.success){
        my.navigateBack();
      }else{
        my.showToast({
          content:'请求失败，请重试'
        })
      }
    })    
  },

  // 选择图片并上传
  uploadImg() {
    var theDemoDomain = app.demoDomain;
    my.chooseImage({
      chooseImage: 1,
      success: res => {
        console.log("Uploading img>>>>>>>>", res);
        const path = res.apFilePaths[0];
        const options = {
          url: theDemoDomain + '/upload',
          filePath: path,
          fileType: 'image',
          fileName: 'file',
          headers: {
            contentDisposition: 'attachment',
          },
          success: (res) => {
            console.log('upload img>>>>>>>>>', res);
            const resData = JSON.parse(res.data);
            console.log('upload img data>>>>>>>>>', resData);
            this.setData({
              iconUrl: resData.imgUrl,
            });
          }
        };
        my.uploadFile(options);
      },
    });
  },

  // 写入数据库obj，当前用户增加一条todo
  addTodo(obj) {
    var theDemoDomain = app.demoDomain;
    return new Promise(function (resolve, reject) {
      my.httpRequest({
        url: theDemoDomain+'/todos/add', 
        method: 'POST',
        data: obj,
        dataType: 'json',
        headers: {
          'Content-Type': 'application/json'
        },
        success: (res) => {
          resolve(res.data);
        },
        fail: function(res) {
          console.log('Add todo fail>>>>>>>>', res)
          reject();
        }
      });
    });
  }
});
