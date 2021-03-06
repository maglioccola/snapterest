var React = require('react');
var ReactDOM = require('react-dom');
var createReactClass = require('create-react-class');
var Header = require('./Header.react');
var Tweet = require('./Tweet.react');

var StreamTweet = createReactClass({

    getInitialState: function () {
        Console.log("[Snapterest] StreamTweet: 1. Running getInitialState()");

        return {
            numberOfCharactersIsIncreasing: null,
            headerText: null
        }
    },

    componentWillMount: function () {
        Console.log("[Snapterest] StreamTweet: 2. Running componentWillMount()");

        this.setState({
            numberOfCharactersIsIncreasing: true,
            headerText: "Latest public photos from Twitter"
        });

        window.snapterest = {
            numberOfReceivedTweets: 1,
            numberOfDisplayedTweets: 1
        };
    },

    componentDidMount: function () {
        Console.log("[Snapterest] StreamTweet: 3. Running componentDidMount()");

        var componentDOMRepresentetion = ReactDOM.findDOMNode(this);
        window.snapterest.headerHtml = componentDOMRepresentetion.children[0].outerHTML;
        window.snapterest.tweetHtml = componentDOMRepresentetion.children[1].outerHTML;
    },

    componentWillReceiveProps: function (nextProps) {
        Console.log("[Snapterest] StreamTweet: 4. Running componentWillReceiveProps()");

        var currentTweetLength = this.props.tweet.text.length;
        var nextTweetLength = nextProps.tweet.text.length;
        var isNumberOfCharactersIsIncreasing = nextTweetLength > currentTweetLength;
        var headerText;

        this.setState({
            numberOfCharactersIsIncreasing: isNumberOfCharactersIsIncreasing
        });

        if (numberOfCharactersIsIncreasing) {
            headerText = "Number of characters is increasing";
        } else {
            headerText = "Latest public photo from Twitter";
        }

        this.setState({
            headerText: headerText
        });

        window.snapterest.numberOfReceivedTweets++;
    },

    shouldComponentUpdate: function (nextProps, nexState) {
        Console.log("[Snapterest] StreamTweet: 5. Running shouldComponentUpdate()");

        return nextProps.tweet.text.length > 1;
    },

    componentWillUpdate: function (nextProps, nexState) {
        Console.log("[Snapterest] StreamTweet: 6. Running componentWillUpdate()");
    },

    componentDidUpdate: function (nextProps, nexState) {
        Console.log("[Snapterest] StreamTweet: 7. Running componentDidUpdate()");

        window.snapterest.numberOfDisplayedTweets++;
    },

    componentWillUnmount: function () {
        Console.log("[Snapterest] StreamTweet: 8. Running componentWillUnmount()");

        delete window.snapterest;
    },

    render: function () {
        Console.log("[Snapterest] StreamTweet: running render()");

        return (
            <section>
                <Header text={this.state.headerText} />
                <Tweet
                    tweet={this.props.tweet}
                    onImageClick={this.props.onAddTweetToCollection} />
            </section>
        );
    }
});

module.exports = StreamTweet;