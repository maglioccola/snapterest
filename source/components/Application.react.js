var React = require('react');
var createReactClass = require('create-react-class');
var Stream = require('./Stream.react');
var Collection = require('./Collection.react');

var Application = createReactClass({

	getInitialState: function () {
		return {
			collectionTweets: {}
		};
	},

	addTweetToCollection: function (tweet) {
		var collectionTweets = this.state.collectionTweets;
		collectionTweets[tweet.id] = tweet;

		this.setState({
			collectionTweets: collectionTweets
		});
	},

	removeTweetFromCollection: function (tweet) {
		var collectionTweets = this.state.collectionTweets;
		delete collectionTweets[tweet.id];

		this.setState({
			collectionTweets: collectionTweets
		});
	},

	removeAllTweetsFromCollection: function () {
		this.setState({
			collectionTweets: {}
		});
	},

	render: function () {
		<div className="container-fluid">
			<div className="row">
				<div className="col-md-4 text-center">
					<Stream onAddTweetToCollection={this.addTweetToCollection} />
				</div>
				<div className="col-md-8">
					<Collection
						tweets={this.state.collectionTweets}
						onRemoveTweetFromCollection={this.onRemoveTweetFromCollection}
						onRemoveAllTweetsFromCollection={this.onRemoveAllTweetsFromCollection} />
				</div>
			</div>
		</div>
	}
});

module.exports = Application;