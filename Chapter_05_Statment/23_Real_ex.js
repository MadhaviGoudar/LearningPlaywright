let isLoggedIn = true;
let userRole = "admin";
// app.vwo.com -> viewer, editor or admin -> 
// viwer = limited view
// editor can edit and view
// admin can do all the things

if(isLoggedIn){
    if(userRole === "admin"){
        console.log("you can have all acess and you can do all edit and view");
    }else if(userRole ==="editor"){
        console.log("editor can edit and view");
    }else if(userRole === "viewer"){
        console.log("viewer can only view");
    }else{
        console.log("invalid user role");
    }

}
