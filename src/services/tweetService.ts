import tweets from "../data/tweets.json";

export const getTweets = () => tweets.map(({id, text, created_at}) => ({ id, created_at, text }));

export const getTweet = (id: number) => tweets.find((tweet) => tweet.id === id);

export const extractLinks = (id: number) => {
  const tweet = getTweet(id);
  if (!tweet) return null;

  const regex = /https?:\/\/[^\s]+/g;
  const links = tweet.text.match(regex) || [];
  return { id, links };
};
