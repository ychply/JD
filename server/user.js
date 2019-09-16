let counter = 0;
let user = {
	inster:"insert into xz_user(uname,upwd) VALUES(?,?)",
	getUser:"select * from xz_user where uname = ?",
	query:"select * from xz_user where uname = ?",
	queryPwd:"select * from xz_user where upwd = ?"
};
module.exports = user;
