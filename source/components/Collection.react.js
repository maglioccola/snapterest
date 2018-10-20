var React = require('react');
var ReactDOMServer = require('react-dom/server');
var createReactClass = require('create-react-class');
var CollectionControls = require('./Collection.Controls.react');
var TweetList = require('./TweetList.react');
var Header = require('./Header.react');

var Collection = createReactClass({

    createHtmlMarkupStringOfTweetList: function () {
        var htmlString = ReactDOMServer.renderToStaticMarkup(
            <TweetList tweets={this.props.tweets} />
        );

        var htmlMarkup = {
            html: htmlString
        };

        return JSON.stringify(htmlMarkup);
    },

    getListOfTweetIds: function () {
        return Object.keys(this.props.tweets);
    },

    getNumberOfTweetsInCollection: function () {
        return this.getListOfTweetIds().length;
    },

    render: function () {
        var numberOfTweetsInCollection = this.getNumberOfTweetsInCollection();

        if (numberOfTweetsInCollection > 0) {
            var tweets = this.props.tweets;
            var htmlMarkup = this.createHtmlMarkupStringOfTweetList();
            var removeAllTweetsFromCollection = this.props.onRemoveAllTweetsFromCollection;
            var handleRemoveTweetFromCollection = this.props.onRemoveTweetFromCollection;

            return (
                <div>
                    <CollectionControls
                        numberOfTweetsInCollection={numberOfTweetsInCollection}
                        htmlMarkup={htmlMarkup}
                        onRemoveAllTweetsFromCollection={onRemoveAllTweetsFromCollection} />
                    <TweetList
                        tweets={tweets}
                        onRemoveTweetFromCollection={handleRemoveTweetFromCollection} />
                </div>
            );
        }

        return <Header text="Your collection is empty" />;
    }
});

module.exports = Collection;