function printDeckOfCards(cards) {
    let result = [];

    for (let card of cards) {
        const face = card.slice(0, -1);
        const suit = card.slice(-1);
        let newCard;
        try {
            newCard = createCard(face, suit);
            result.push(newCard);
        } catch (err) {
            result = [`Invalid card: ${card}`];
        }
    }

    console.log(result.join(' '));

    function createCard(face, suit) {
        const cardFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

        if (cardFaces.indexOf(face) == -1) {
            throw new Error('Error');
        }

        const cardSuits = {
            'S': '\u2660',
            'H': '\u2665',
            'D': '\u2666',
            'C': '\u2663'
        };

        if (cardSuits[suit] == undefined) {
            throw new Error('Error');
        }

        const result = {
            face,
            suit: cardSuits[suit],
            toString() {
                return this.face + this.suit;
            }
        };

        return result;
    }
}

printDeckOfCards(['AS', '10D', 'KH', '2C']);
printDeckOfCards(['5S', '3D', 'QD', '1C']);
