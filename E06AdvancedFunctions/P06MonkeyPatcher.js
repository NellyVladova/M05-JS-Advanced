function solution(input){
    if(input === 'upvote'){
        return this.upvotes++;
    }else if (input === 'downvote'){
        return this.downvotes++;
    }
    let upvotesCount = this.upvotes;
    let downvotesCount = this.downvotes;

    let totalVotes = upvotesCount + downvotesCount;
    let balance = upvotesCount - downvotesCount;

    function rating(){
        if(totalVotes < 10){
            return 'new';
        }
        if(upvotesCount > totalVotes * 0.66){
            return 'hot';
        }
        if(balance >= 0 && totalVotes > 100){
            return 'controversial';
        }
        if(balance < 0){
            return 'unpopular';
        }
        return 'new';
    }

    if(totalVotes > 50){
        let extraVotes = Math.ceil(Math.max(upvotesCount, downvotesCount) * 0.25);
        return [upvotesCount + extraVotes, downvotesCount + extraVotes, balance, rating()];
    }

    return [upvotesCount, downvotesCount, balance, rating.call(this)];
}


let post = {
    id: '3',
    author: 'emil',
    content: 'wazaaaaa',
    upvotes: 100,
    downvotes: 100
};
solution.call(post, 'upvote');
solution.call(post, 'downvote');
let score = solution.call(post, 'score'); // [127, 127, 0, 'controversial']
solution.call(post, 'downvote');         // (executed 50 times)
score = solution.call(post, 'score');     // [139, 189, -50, 'unpopular']
