import { User } from "../models/user.model.js"; //User

export const authCallback = async (req, res, next) => {
    try{
        const { id, firstName, lastName, imageUrl} = req.body;

        //check if user already exist method
        const user = await User.findOne({clerkId: id});

        if(!user){
            //signup
            await User.create({
                clerkId: id,
                fullName: `${firstName} ${lastName}` , 
                imageUrl
            })
        }

        res.status(200).json({sucess:true})
    } catch (error) {
        console.log("Error in auth callback", error);
        next(error)
}
};