import { Request, Response } from "express"
import { extractLinks, getTweet, getTweets } from "../services/tweetService";

/**
 * 
 * @param req N/A
 * @param res Returns the id, created_at, and text field of all tweets in JSON data.
 */
export const GetAllTweets = (req: Request, res: Response) => {
  const tweets = getTweets();

  if (!tweets) {
    res.sendStatus(404);
  }

  res.json(tweets);
};

/**
 * 
 * @param req Accepts ID of Tweet
 * @param res Returns the tweet content of the ID if found. 404 Error if not found.
 */
export const GetTweetById = (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const tweet = getTweet(id);
  console.log(id);
  if (!tweet) {
    res.sendStatus(404);
  } else {
    var tweetDetails = {id: tweet.id, create_at: tweet.created_at, text: tweet.text, user_screen_name: tweet.user.screen_name }
    res.json(tweetDetails);
  }
};

/**
 * 
 * @param req Accepts an Id, or nothing
 * @param res Returns list of links in all tweets, or the links of a specific tweet if the ID was passed in.
 */
export const GetAllLinksInTweets = (req: Request, res: Response) => {
  console.log(req.params.id);
  if (req.params.id) {
    var id = parseInt(req.params.id);
    var linksInTweet = extractLinks(id);

    if (!linksInTweet) {
      res.sendStatus(404);
    }
    res.json(linksInTweet);
  }
  else {
    const linksInTweets: Array<Object> = [];
    const tweets = getTweets();

    tweets.forEach(tweet => {
      var linksInTweet = extractLinks(tweet.id);
      console.log(linksInTweet);
      if (!linksInTweet) return;
      linksInTweets.push(linksInTweet);
    });

    if (!linksInTweets) res.sendStatus(404);

    res.json(linksInTweets);
  }
};