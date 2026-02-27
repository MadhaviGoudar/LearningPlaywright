let ststusCode=5000;
if(ststusCode==200){
    console.log("loged in successfully");
}
    else if(ststusCode== 400){
        console.log("bad request");
    } else if(ststusCode== 401){
        console.log("unauthorized");
    } else if(ststusCode== 403){
        console.log("forbidden");
    } else if(ststusCode== 404){
        console.log("not found");  
    } else {
        console.log("not logged in");
    }                 
