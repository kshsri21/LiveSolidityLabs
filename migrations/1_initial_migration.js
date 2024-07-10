const demo = artifacts.require("TweetContract");

module.exports = function (deployer,accounts) {
  deployer.deploy(demo,accounts);
};
