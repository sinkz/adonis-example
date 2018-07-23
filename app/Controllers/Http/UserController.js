'use strict'

const User = use("App/Models/User")

class UserController {

    async create ({ request }) {
        const data = request.only(["username", "email", "password"])
        try{
        const user = await User.create(data)
        return user
        }catch(err){
            return err.sqlMessage;
            console.log(err.sqlMessage);
        }
    
        
    }

}

module.exports = UserController
