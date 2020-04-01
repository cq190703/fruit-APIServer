module.exports = {
  admin:[
    { resources:'/find',name:"管理员操作", permissions: ['get'] },
    { resources:'/create',name:"管理员操作", permissions: ['get'] },
    { resources:'/del',name:"管理员操作", permissions: ['get'] },

  ],

  root:[
    { resources:'/find',name:"管理员操作", permissions: ['get',"post","put","delete"] },
    { resources:'/create',name:"管理员操作", permissions: ['get',"post","put","delete"] },
    { resources:'/del',name:"管理员操作", permissions: ['get',"post","put","delete"] },
  ]
}