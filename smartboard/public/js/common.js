var virtualDB = {};
var core = {
	getDate (timestamp = "0"){
		let t = new Date(parseInt(timestamp, 10)*1000);
		return `${t.getFullYear()}. ${(t.getMonth()+1).toString().padStart(2, "0")}. 
			${t.getDate().toString().padStart(2, "0")} 						
			${t.getHours().toString().padStart(2, "0")}:
			${t.getMinutes().toString().padStart(2, "0")}:
			${t.getSeconds().toString().padStart(2, "0")}`;
	},
	userVerification() {
		$("header .login a#logIn").fadeIn();
		if (localStorage.user){
			let userObj = JSON.parse(localStorage.user);
			let key = Object.keys(userObj)[0]; 
			if (!virtualDB.users[key]) return;
			if (JSON.stringify(virtualDB.users[key]) !== JSON.stringify(userObj[key])) return;
			
			$("header .login a#logIn").hide();
			$("header .login a#logOut").fadeIn();
		}
	},
	logout() {
		localStorage.removeItem("user");
		location.reload(); 
	},
	systemInit( ){
		localStorage.DB ? (core.loadDatabase(JSON.parse(localStorage.DB)),core.userVerification()) : $.getJSON("./database/db.json", result => {core.loadDatabase(result);core.userVerification()})
	}
};

$(document).ready( () => {
	core.systemInit();
});			