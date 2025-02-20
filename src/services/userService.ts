import tweets from "../data/tweets.json";
import { getTweet } from "./tweetService";

export const getUsers = () => tweets.map(({user}) => user);

export const getUser = (screenName: string) => {
  if (!screenName) {
    return null;
  }
  else {
    const users = getUsers();
    return users.find((user) => user.screen_name.trim().toLowerCase() === screenName.trim().toLowerCase());
  }
}