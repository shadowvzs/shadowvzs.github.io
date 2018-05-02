// if you want clear the local database 
//localStorage.removeItem("DB");
var virtualDB = {};
var users, db, core = {
	getDate (timestamp = "0"){
		let t = new Date(parseInt(timestamp, 10)*1000);
		return `${t.getFullYear()}. ${(t.getMonth()+1).toString().padStart(2, "0")}. 
			${t.getDate().toString().padStart(2, "0")}   						
			${t.getHours().toString().padStart(2, "0")} : 
			${t.getMinutes().toString().padStart(2, "0")} : 
			${t.getSeconds().toString().padStart(2, "0")}`;
	},	
	loadDatabase(Database) {
		virtualDB = Database;
		users = virtualDB.users;
	}, 
	userAuth(id, obj, username, password){
		if ((obj.username != username)||(obj.password != password)) return;
		localStorage.user = `{"${id}":${JSON.stringify(users[id])}}`;
		location.href = "./index.html";
	},
	login(){
		let inputs = [$("#userName"),$("#userPass")], username = inputs[0].val().trim(), password = inputs[1].val().trim();
		Object.entries(users).forEach(
			([key, value]) => core.userAuth(key, value, username, password)
		);	
		if (!localStorage.user) core.errorMsg("Wrong username or password...")
		return false;
	},
	lengthCheck(str="", min=0, max=1){
		if ((str.length < min) || (str.length > max)) return false;
		return true;
	},
	emailCheck(email=""){
		let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, ret = true;
		ret = re.test(email)
		if (!ret) alert("Wrong email address")
		return ret;				
	},
	usernameCheck(username = ""){
		if (username.trim() != username) {core.errorMsg("Do not use space for username"); return false;}
		if (!core.lengthCheck(username, 3, 20)) {core.errorMsg("Username must be between 3 and 20 character"); return false;}
		return true;
	},
	passwordCheck(password1 = " ", password2 = " "){
		if (password1.trim() != password1) {core.errorMsg("Do not use space for password"); return false;}
		if (!core.lengthCheck(password1, 3, 20)) {core.errorMsg("Password must be between 3 and 20 character"); return false;}
		if (password1 != password2) {core.errorMsg("The two password must be same"); return false;}
		return true;
	},
	errorMsg(msg){
		windowManager.newDialog(2, msg, [["Close", "close", false, false]]);
	},
	userExist(username="", email=""){
		let ret = false
		Object.entries(users).forEach(
			([key, value]) => {
				if ((value.username.toLowerCase() == username.toLowerCase()) || (value.email.toLowerCase() == email.toLowerCase())){
					ret = true;
					core.errorMsg("Username or email already exist in database");
				}
			}
		);			
		return ret;
	},
	reg(){
		//i skipped the input string verification
		let inputs = [$("#userName"), $("#userEmail"),$("#userPass1"),$("#userPass2"),$("#trueName")], username = inputs[0].val().trim(), email = inputs[1].val().trim(), password1 = inputs[2].val().trim(), password2 = inputs[3].val().trim(), name = inputs[4].val().trim(), time = +new Date(), timestamp = ~~(time/1000), messages=virtualDB.base.welcomeMessage||[];
		if (name == "") name="New User"
		if (!(core.usernameCheck(username) && core.emailCheck(email) && core.passwordCheck(password1, password2)))  return false;
		let newUser = {	username, password : password1, email, name, messages, time : timestamp , rank:1}
		let userID = `id_${time}`
		virtualDB.users[userID]=newUser;
		localStorage.DB = JSON.stringify(virtualDB)
		localStorage.user = `{"${userID}":${JSON.stringify(newUser)}}`
		location.href = "./index.html";
	}
}	


$(document).ready( () => {
	//alert(windowManager.newDialog(2, "This is a test for<br>dialog window", [["Close", "close", false, false]]))
	win = new windowBuilder;

	if (localStorage.user){
		location.href = "./index.html";
	}else{
		localStorage.DB ? core.loadDatabase(JSON.parse(localStorage.DB)) : $.getJSON("./database/db.json", result => {core.loadDatabase(result)})
	}
});	