export default {
  // possible filters
  // network -> visa amex master discover
  // issuer -> banks
  // annual fee -> no annual fee
  // has category
  type: {
    displayName: "Type",
    filterFn: (card, type) => card.otherInfo.type === type,
    options: ["Cash Back", "Business", "Travel", "Travel - Branded"]
  },

  noAnnualFee: {
    displayName: "Annual Fee",
    filterFn: (card, _) => !card.annualFee.has,

    options: ["No Annual Fee"]
  },
  network: {
    displayName: "Network",

    filterFn: (card, network) => card.otherInfo.network === network,
    options: ["American Express", "Discover", "MasterCard", "Visa"]
  },

  categoryAndIssuer: allCards => {
    let categories = new Set();
    let issuers = new Set();

    Object.keys(allCards).forEach(card => {
      issuers.add(allCards[card].otherInfo.issuer);
      Object.keys(allCards[card].categories).forEach(category =>
        categories.add(category)
      );
    });

    return {
      categories: {
        filterFn: (card, category) => card.categories.hasOwnProperty(category),
        options: [...categories],
        displayName: "Has Category"
      },

      issuers: {
        filterFn: (card, issuer) => card.otherInfo.issuer === issuer,
        options: [...issuers],
        displayName: "Issuer"
      }
    };

    // return options
  }
};
