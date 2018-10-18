var React = require('react');
var ReactDOM = require('react-dom');
var createReactClass = require('create-react-class');
var Header = require('./Header.react');
var Tweet = require('./Tweet.react');

var StreamTweet = createReactClass({

    getInitialState: function() {
        Console.log("[Snapterest] StreamTweet: 1. Running getInitialState()");

        return {
            numberOfCharactersIsIncreasing: null,
            headerText: null
        }
    },

    componentWillMount: function() {
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

    componentDidMount: function() {
        Console.log("[Snapterest] StreamTweet: 3. Running componentDidMount()");

        var componentDOMRepresentetion = ReactDOM.findDOMNode(this);
        window.snapterest.headerHtml = componentDOMRepresentetion.children[0].outerHTML;
        window.snapterest.tweetHtml = componentDOMRepresentetion.children[1].outerHTML;
    },
    
    componentWillUnmount: function() {
        Console.log("[Snapterest] StreamTweet: 8. Running componentWillUnmount()");

        delete window.snapterest;
    },

    render: function() {
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