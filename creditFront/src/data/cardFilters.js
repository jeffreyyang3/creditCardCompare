export default {
    // possible filters
    // network -> visa amex master discover
    // issuer -> banks
    // annual fee -> no annual fee
    // has category
    noAnnualFee: {
        displayName: "No Annual Fee",
        filterFn: card => card.annualFee.has,
        options: false
    },
    network: {
        displayName: "Network",
        filterFn: (card, network) => card.otherInfo.network === network,
        options: ""
    },

    categoryAndIssuer: allCards => {
        let categories = new Set();
        let issuers = new Set();

        Object.keys(allCards).forEach(card => {
            issuers.add(card.otherInfo.issuer);
            Object.keys(card.categories).forEach(category =>
                track.add(category)
            );
        });

        return {
            categories: {
                filterFn: (card, category) =>
                    card.categories.hasOwnProperty(category),
                options: [...categories]
            },

            issuers: {
                filterFn: (card, issuer) => card.otherInfo.issuer === issuer,
                options: [...issuers]
            }
        };

        // return options
    }
};
