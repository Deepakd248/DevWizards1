export const userController = {
    login(request, response){
        const userInfo = request.body;
        //console.log('Request Body is ', body);
        if(userInfo.userid == userInfo.password){
            response.json({message:' Welcome '+userInfo.userid});
        }
        else{
            response.json({message:'Invalid Userid or Password'});
        }
        
    },
    register(request, response){
        response.json({message:'Register'});
    },
    profile(request, response){
        const userName = request.params.username;
        console.log('All Params ', userName);
        response.json({message:userName + ' Profile'});
    },
    changePassword(request, response){
        response.json({message:'Change Password'});
    }
}