class ArtGallery {
    constructor(creator) {
        this.creator = creator;
        this.possibleArticles = { picture: 200, photo: 50, item: 250 };
        this.listOfArticles = [];
        this.guests = [];
    }

    addArticle(articleModel, articleName, quantity) {
        articleModel = articleModel.toLowerCase();
        const wantedArticle = this.possibleArticles[articleModel];

        if (!wantedArticle) {
            throw new Error('This article model is not included in this gallery!');
        }

        const article = this.listOfArticles.find(el => el.articleName == articleName);
        if (!article) {
            let newArticle = {
                model: articleModel,
                articleName,
                quantity
            }
            this.listOfArticles.push(newArticle);
        } else {
            article.quantity += quantity;
        }

        return `Successfully added article ${articleName} with a new quantity- ${quantity}.`;
    }

    inviteGuest(guestName, personality) {
        const guest = this.guests.find(el => el.guestName == guestName);

        if (guest) {
            throw new Error(`${guestName} has already been invited.`);
        }
        const newGuest = {
            guestName,
            points: 0,
            purchaseArticle: 0,
        };
        if (personality == 'Vip') {
            newGuest.points = 500;
        } else if (personality == 'Middle') {
            newGuest.points = 250;
        } else {
            newGuest.points = 50;
        }
        this.guests.push(newGuest);

        return `You have successfully invited ${guestName}!`;
    }

    buyArticle(articleModel, articleName, guestName) {
        const article = this.listOfArticles.find(el => el.articleName == articleName);
        if (!article || article.model != articleModel) {
            throw new Error('This article is not found.');
        }

        if (article.quantity == 0) {
            return `The ${articleName} is not available.`;
        }

        const guest = this.guests.find(el => el.guestName == guestName);
        if (!guest) {
            return 'This guest is not invited.';
        }
        const articlePoint = this.possibleArticles[articleModel];
        if (guest.points >= articlePoint) {
            guest.points -= articlePoint;
            article.quantity--;
            guest.purchaseArticle++;
        } else {
            return 'You need to more points to purchase the article.';
        }

        return `${guestName} successfully purchased the article worth ${articlePoint} points.`;
    }

    showGalleryInfo(criteria) {
        let result = [];
        if (criteria == 'article') {
            result.push('Articles information:');
            this.listOfArticles.forEach(el => result.push(`${el.model} - ${el.articleName} - ${el.quantity}`));
        } else if (criteria == 'guest') {
            result.push('Guests information:');
            this.guests.forEach(el => result.push(`${el.guestName} - ${el.purchaseArticle}`));
        }

        return result.join('\n');
    }
}

const artGallery = new ArtGallery('Curtis Mayfield');
artGallery.addArticle('picture', 'Mona Liza', 3);
artGallery.addArticle('Item', 'Ancient vase', 2);
artGallery.addArticle('picture', 'Mona Liza', 1);
artGallery.inviteGuest('John', 'Vip');
artGallery.inviteGuest('Peter', 'Middle');
artGallery.buyArticle('picture', 'Mona Liza', 'John');
artGallery.buyArticle('item', 'Ancient vase', 'Peter');
console.log(artGallery.showGalleryInfo('article'));
console.log(artGallery.showGalleryInfo('guest'));
