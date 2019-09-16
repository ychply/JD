let counter = 0;
let user = {
	inster:"insert into user(user_name,login_password) VALUES(?,?)",
	getUser:"select * from user where user_name = ?",
	query:"select * from user where user_name = ?",
	queryPwd:"select * from user where login_password = ?"
};
module.exports = user;
