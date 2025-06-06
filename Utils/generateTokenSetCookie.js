import jwt from "jsonwebtoken"; 

export const generateTokenSetCookie = async (res, userId) => {
    const token = jwt.sign({userId}, process.env.JWT_SECRET, {
        expiresIn: '7d',
    })

    // console.log("Token set"); 

    res.cookie("hackofclansauth", token, {
        httpOnly: true,  
        sameSite: "none",
        secure: true,   
        maxAge: 7*24*60*60*1000, 
    })

    // console.log("cookie is : " , token);

    return token ;
}