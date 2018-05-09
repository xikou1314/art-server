import {sequelize} from '../../model/index'
import moment from 'moment'
export default async (ctx, next) => {
    var responseData={
        code:1,
        msg:"查询画展列表失败"
    };
    var {current,size} = ctx.request.query;
    //做分页
    current-=0;
    size-=0;
    var count = 0;
    //查询总数
    var today = new Date();
    var list = [];
    await sequelize.query("SELECT count(*) as count FROM exhibition WHERE deletedAt is null").then(result=>{
        count = result[0][0].count
    })


    await sequelize.query('SELECT id,name,start,end,poster,introduction FROM exhibition WHERE deletedAt is null limit ?,?',{
        replacements:[(current-1)*size,size]
    }).then(result=>{
        //moment(end).format('YYYY-MM-DD')

        if (result[0].length > 0) {
            for(var i=0;i < result[0].length; i++) {
                if(moment(result[0][i].end)<today) {
                    result[0][i].past = true;
                } else {
                    result[0][i].past = false;
                }
                list.push(result[0][i]);
            }
                responseData={
                    code:0,
                    msg:"查询画展列表成功",
                    count,
                    current,
                    size,
                    list:result[0]
                };
        }
    })


    ctx.body = responseData;

}

