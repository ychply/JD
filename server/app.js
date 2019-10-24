const pool=require("./pool");
const user=require("./user");
const http=require("http");
const express=require("express");
let app=express();
let server=http.createServer(app);
server.listen("3100",()=>{
	console.log("正在监听3100端口");
});


//解决打包后路由	mode: 'history',点击刷新后404   引入connect-history-api-fallback解决
const history = require('connect-history-api-fallback');
//app.use(history({
//rewrites: [
//{ from: /^\/wap\/.*$/, to: '/index.html' }//这个是正确方式
//]
//}));

app.use(history({
    // index:"index.html",->index属性默认值为指向index.html
    htmlAcceptHeaders: ['text/html', 'application/xhtml+xml']
}));



//登录
app.use(express.static("./dist"));
app.get("/login",(req,res)=>{
	  //参数:uname upwd
	var param = req.query || req.params;
    let uname = param.userName;
    let upwd  = param.userPwd;
//  let sql = " SELECT uid from xz_user where uname= ? and upwd= ?";
   
//  pool.query(sql,[uname,upwd],(err,result)=>{
//       if(err)throw err;
//       
//       let obj = {}
//       if(result.length>0){
//       	let uid=result[0].uid;
//          obj = {code:1,msg:"登录成功",uid};
//       }else{
//          obj = {code:-1,msg:"用户名或密码有误"};
//       }
//       res.json(obj);//head/json
//  });
    pool.query(user.query,uname,(err,result)=>{
    	if(err) throw err;
    	else{
    		if(result.length == 0){
    			res.send({
    				status: 1,
    				msg:'该手机号尚未注册'
    			});
    			res.end();
    		}else{
    			let response = result[0];
//  			console.log(response);
    			if(response.user_name == uname && response.login_password == upwd){
    				let userInfo = {
    					'id'  : response.user_id,
    					'name': response.user_name,
    					'img' : response.user_photo
    				}
    				userInfo = JSON.stringify(userInfo);
    				console.log(userInfo);
    				res.send({
    					status:0,
    					msg:'恭喜，登录成功',
    					userInfo:userInfo
    				});
    				res.end();
    			}else{
    				res.send({
    					status:2,
    					msg:"密码有误"
    				});
    				res.end();
    			}
    		}
    	}
    })

})
//注册
app.get("/reg",(req,res)=>{
	  //参数:uname upwd
	var param = req.query || req.params;
	console.log(param);
    let uname = param.userName;
    let upwd  = param.userPwd;
    let upwd1  = param.userPwd1;
   pool.query(user.getUser,uname,(err,result)=>{
    	if(err) throw err;
    	else{
    		if(result.length !=0){
    			res.send({
    				status: 5,
    				msg:'该用户已经被注册'
    			});
    			res.end();
    		}else if(result.length ==0 ){
    		var sql = user.inster;
	       		pool.query(sql,[uname,upwd],(err,result)=>{
         			if(err)throw err
         			else{
         				res.send({
         					param,
         					status: 0,
         					msg:'恭喜，注册成功',
         					result
         				});
         				res.end();
         			}
         		})
    		}
    	}
    })
})

app.get("/banner",(req,res)=>{
	
	
})
//首页的商品数据
app.get('/list',(req,res)=>{
	let sql=`SELECT product_id,product_name,product_price,product_img_url,product_uprice FROM product` ;
	pool.query(sql,(err,result)=>{
		if(err)throw err;
		 //console.log(result);
			res.json(result);
	})
	
})

//分类页左边数据
app.get('/category',(req,res)=>{
	let sql=`SELECT * FROM category ORDER BY category_id desc`;
	pool.query(sql,(err,result)=>{
		if(err)throw err;
		res.json(result);
		//console.log(result);
		
	})
	
})
//分类页右边数据
app.get("/categorygoods",(req,res)=>{
	let mId=req.query.mId;
	//console.log(mId);
	const sql = `select * from product,category where product.category_id=category.category_id and category.category_id='${mId}'`;
	pool.query(sql,(err,result)=>{
		if(err)throw err;
		res.json(result);
	})
})
//详情页数据
app.get('/detail',(req,res)=>{
	let produId=req.query.pId;
	//console.log(pid);
	//res.json(pid);
	let proData=[];
	const imagesStr = `select image_url from product_image where product_id='${produId}'`;
    const productStr = `select * from product where product_id='${produId}'`;
    pool.query(imagesStr,(err,imgData)=>{
    	if(err){
    		console.error(err);
             res.status(500).send('database err').end();
    	}else{
    		proData.push(imgData);
    		pool.query(productStr,(err,data)=>{
    			if(err){
    				console.error(err);
                    res.status(500).send('database err').end();
    			}else{
    				proData.push(data);
    				res.json(proData);
    			}
    		})
    	}
    })
	
})
