const app = getApp();

Page({
  data: {
    todos: []
  },

  onLoad() {
    app.getUserInfo().then(
      user => {
        this.setData({
          user,
        });
        app.userInfo = user;

        this.getTodoList().then(res => {
          console.log("getTodoList result>>>>", res)
          this.setData({ todos: res.todoList });
        })
      },
      () => {
        // 获取用户信息失败
        console.log("获取用户信息失败");
      }
    );
  },

  onShow() {
    this.getTodoList().then(res => {
      console.log("getTodoList result>>>>", res)
      const { todoList = [] } = res
      this.setData({ todos: res.todoList });
    })
  },

  onTodoChanged(e) {
    var id = e.target.dataset.id;

    this.changeComplete(id).then(res => {
      if (res.success) {
        var newTodos = this.data.todos.map(todo => ({
          ...todo,
          completed: (todo.id == id) ? !todo.completed : todo.completed,
        }));
        this.setData({ todos: newTodos });
      }
    })
  },

  deleteIcon(e) {
    var id = e.target.dataset.id;
    this.deleteById(id).then(res => {
      console.log("delete req result>>>>>>>", res);
      if (res.success) {
        var newTodos = this.data.todos.filter(todo => {
          return todo.id !== id;
        });
        this.setData({ todos: newTodos });
      }
    })
  },

  addTodo() {
    my.navigateTo({ url: '../add-todo/add-todo' });
  },

  //获得当前用户todo列表（数据库中获取）
  getTodoList() {
    console.log('请求列表');
    var userId = '10001';
    if (this.data.user) {
      userId = this.data.user.userId;
    }
    var theDemoDomain = app.demoDomain;
    return new Promise(function (resolve, reject) {
      my.httpRequest({
        url: theDemoDomain + '/todos?userId=' + userId,
        dataType: 'json',
        success: (res) => {
          resolve(res.data);
          //小程序自定义埋点用法，详见 https://docs.alipay.com/mini/api/report
          my.reportAnalytics('miniDemo', {
            demoName: 'todo-node',
            res: res,
          });
        },
        fail: function (res) {
          reject();
        }
      });
    });
  },

  //删除当前的列表,入参todo id
  deleteById(id) {
    console.log(">>>>>>>enter delete by id");
    return new Promise(function (resolve, reject) {
      var theDemoDomain = app.demoDomain;
      // 确认和删除图片
      my.confirm({
        title: '删除 todo',
        content: '是否确认删除?',
        confirmButtonText: '删除',
        cancelButtonText: '取消',
        success: (result) => {
          if (result.confirm) {
            my.httpRequest({
              url: theDemoDomain + '/todos/delete',
              method: 'POST',
              data: {
                id: id
              },
              dataType: 'json',
              headers: {
                'Content-Type': 'application/json'
              },
              success: (res) => {
                resolve(res.data);
              },
              fail: function (res) {
                reject();
              }
            });
          }
        },
      });

    });
  },

  //根据id改变当前todo状态
  changeComplete(id) {
    var theDemoDomain = app.demoDomain;
    return new Promise(function (resolve, reject) {
      my.httpRequest({
        url: theDemoDomain + '/todos/change',
        method: 'POST',
        data: {
          id: id
        },
        headers: {
          'Content-Type': 'application/json'
        },
        dataType: 'json',
        success: (res) => {
          resolve(res.data);
        },
        fail: function (res) {
          reject();
        }
      });
    });
  }
});
