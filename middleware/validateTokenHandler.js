const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");

const validateToken = asyncHandler(async (req, res, next) => {
  const authHeader = req.headers.Authorization ||req.headers.authorization; 

  if (authHeader && authHeader.startsWith("Bearer ")) {
    const token = authHeader.split(" ")[1];
    try {
      const decoded = jwt.verify(token, process.env.ACCESSTOKEN);
      console.log(decoded);
    //   req.user = decoded.user; 
      next(); 
    } catch (err) {
      res.status(401);
      throw new Error("User is not authorized!");
    }
  } else {
    res.status(401);
    throw new Error("No token provided");
  }
});

module.exports = validateToken;
