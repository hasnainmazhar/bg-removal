import jwt from "jsonwebtoken";

// Middleware function to decode jwt token to get clerkID

const authUser = (req, res, next) => {
  try {
    const { token } = req.headers;

    if (!token) {
      res.json({ success: false, message: "Not authorized, Login again" });
    }

    const token_decode = jwt.decode(token);
    req.body.clerkId = token_decode.clerkId;
    next();
  } catch (error) {
    console.log(error.message);
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export default authUser;
