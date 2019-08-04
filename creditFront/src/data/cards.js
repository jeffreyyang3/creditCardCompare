export default {
    cfu: {
        displayName: "Chase Freedom Unlimited",
        categories: {
            all: {
                percent: 0.015,
                cap: false
            }
        },
        bonus: {
            type: "percentTime",
            multiplier: 2,
            length: 12
        },
        annualFee: {
            has: false,
            waiveFirst: false,
            amount: 0
        }
    },

    cap1Venture: {
        displayName: "Capital One Venture",
        categories: {
            all: {
                percent: 0.02,
                cap: false
            }
        },
        bonus: {
            type: "standard",
            bonuses: [{ msr: 3000, rewardAmount: 500 }],
            expire: 3
        },
        annualFee: {
            has: true,
            waiveFirst: true,
            amount: 95
        }
    },
    amexBCE: {
        displayName: "Amex Blue Cash Everyday",
        categories: {
            all: {
                percent: 0.01,
                cap: false
            },
            gas: {
                percent: 0.02,
                cap: false
            },
            groceries: {
                percent: 0.03,
                cap: false
            }
        },
        bonus: {
            type: "standard",
            bonuses: [{ msr: 1000, rewardAmount: 200 }],
            expire: 3
        },
        annualFee: {
            has: false,
            waiveFirst: false,
            amount: 0
        },

        otherInfo: {
            type: "American Express"
        }
    },

    uber: {
        displayName: "Barclays Uber Visa",
        categories: {
            all: {
                percent: 0.01,
                cap: false
            },
            dining: {
                percent: 0.04,
                cap: false
            },
            travel: {
                percent: 0.03
            },
            online: {
                percent: 0.02,
                cap: false
            }
        },

        bonus: {
            type: "standard",
            bonuses: [{ msr: 500, rewardAmount: 100 }],
            expire: 3
        },
        annualFee: {
            has: false,
            waiveFirst: false,
            amount: 0
        },

        otherInfo: {
            type: "Visa"
        }
    }
};
