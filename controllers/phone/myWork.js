import {sequelize} from '../../model/index'
export default async (ctx, next) => {
    var responseData={
        code:1,
        msg:"查询我的所有作品失败"
    };

    await sequelize.query("SELECT * FROM art_work WHERE deletedAt is null ORDER BY createdAt DESC").then(result=>{
        if(result[0].length>0){
            responseData={
                code:0,
                msg:"查询我的所有作品成功",
                data:result[0]
            };
        }
    })

    ctx.body = responseData;

}

