//response code 200 , 400 401 403 404

let responseCode=200;
switch(responseCode){
    case 200:
        console.log("Loged in successfully");
        break;
    case 400:
        console.log("Bad request"); 
        break;
        default:
        console.log("Not logged in");
}