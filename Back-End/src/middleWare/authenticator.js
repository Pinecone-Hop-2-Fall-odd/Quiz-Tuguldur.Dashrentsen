import jwt from "jsonwebtoken"

const config = process.env
export const verifyToken = (req, res, next ) => {
    const token = 
    req.body.token || req.query.token || req.headers["token"]

    if(!token) {
        return res.status(403).json({success: false, message: "User Token Required"})
    }
    try {
        const decoded = jwt.verify(token, "MySuperDuperPrivateKey")
        req.user = decoded
    } catch (err) {
        return res.status(401).json({success:false, message:"User Token Wrong or Unactive"})
    }
    return next()
}