// 云函数入口文件
const cloud = require('wx-server-sdk')
 
cloud.init()
 
const db = cloud.database()
const _ = db.command
 
// 云函数入口函数
exports.main = async (event, context) => {
  console.log(event.id1)
  try {
    return await db.collection('todos').doc(event.id1).update({
      // data 传入需要局部更新的数据
      data: {
        status: true
      }
    })
  } catch (e) {
    console.error(e)
  }
}