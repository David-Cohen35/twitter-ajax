const FollowToggle = require('./follow_toggle');
// const InfiniteTweets = require('./infinite_tweets');
// const TweetCompose = require('./tweet_compose');
const UsersSearch = require('./users_search');


$(function () {
  $('.users-search').each((i, search) => new UsersSearch(search));
  $('button.follow-toggle').each((i, btn) => new FollowToggle(btn, {}));

});

