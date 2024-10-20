import { Webhook } from "svix";
import userModel from "../models/userModel.js";

// API Controller function to manage Clerk user with database
// http://localhost:8000/api/user/webhooks

export const clerkWebHooks = async (req,res) => {
  try {
    const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);
    console.log(whook);
    

    await whook.verify(JSON.stringify(req.body),{
      "svix-id":req.headers["svix-id"],
      "svix-timestamp":req.headers["svix-timestamp"],
      "svix-signature":req.headers["svix-signature"],
    });

    console.log(whook);
    

    const {data, type} = req.body;
    console.log(data);
    

    switch (type) {
      case "user.created": {
        const userData = {
          clerkId: data.id,
          email: data.email_addresses[0].email_address,
          firstName: data.first_name,
          lastName: data.last_name,
          photo: data.profile_image_url,
        };

        console.log(userData);
        await userModel.create(userData);
        
        res.json({});
        break;
      }
      case "user.updated": {
        const userData = {
          firstName: data.first_name,
          lastName: data.last_name,
          email: data.email_addresses[0].email_address,
          photo: data.profile_image_url,
        };

        await userModel.findOneAndUpdate({ clerkId: data.id }, userData);
        res.json({});
        break;
      }
      case "user.deleted": {
        await userModel.findOneAndDelete({ clerkId: data.id }, userData);
        res.json({});
        break;
      }
    }
  } catch (err) {
    console.log(err.message);
    res.send({
      success: false,
      message: err.message,
    });
  }
};
