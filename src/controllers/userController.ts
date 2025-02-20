import { Request, Response } from "express"
import { getUser } from "../services/userService";

/**
 * 
 * @param req Accepts user screen name
 * @param res Returns User information
 */
export const GetTwitterUser = (req: Request, res: Response) => {
  var screenName = req.params.screen_name;
  console.log(screenName);
  if (!screenName) {
    res.sendStatus(404);
  }

  var user = getUser(screenName);
  console.log(user);
  if (!user) {
    res.sendStatus(404);
  }
  else {
    var returnObj = {location: user.location, description: user.description, followerCount: user.followers_count, screenName: user.screen_name}
    res.json(returnObj);
  }
};