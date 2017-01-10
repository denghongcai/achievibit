var _ = require('lodash');

var doubleReview = {
	name: 'use github bot',
	check: function(pullRequest, shall) {
		if (pullRequest.commits &&
			pullRequest.commits.length > 0 &&
			_.find(pullRequest.commits, { committer: {
				username: 'web-flow'
			}})) {

			var achieve = {
				avatar : 'data:image/jpeg;base64,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',
				name : 'Why not bots?',
				short : 'Hey sexy mama, wanna kill all humans?',
				description : 'used github to create a pull request, using the web-flow bot',
				relatedPullRequest: pullRequest.id
			};

			shall.grant(pullRequest.creator.username, achieve);
		}
	}
};

module.exports = doubleReview;