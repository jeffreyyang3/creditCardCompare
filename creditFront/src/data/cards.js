export default () => {
    return {
        wfPropel: {
            displayName: "Wells Fargo Propel",
            categories: {
                other: {
                    percent: 0.01,
                    cap: false
                },
                gas: {
                    percent: 0.03,
                    cap: false
                },
                dining: {
                    percent: 0.03,
                    cap: false
                }
            },
            bonus: {
                type: "standard",
                bonuses: [
                    {
                        msr: 3000,
                        rewardAmount: 300,
                        expire: 3
                    },
                    { msr: 15000, rewardAmount: 200, expire: 12 }
                ]
            },
            annualFee: {
                has: false
            },
            rewards: {
                flatBonus: 0,
                pointValue: 1,
                effectiveAF: 0
            },
            otherInfo: {
                type: "cashBack",
                network: "amex"
            }
        },

        cap1Venture: {
            displayName: "Capital One Venture",
            categories: {
                other: {
                    percent: 0.02,
                    cap: false
                }
            },
            bonus: {
                type: "standard",
                bonuses: [{ msr: 3000, rewardAmount: 500, expire: 3 }]
            },
            annualFee: {
                has: true,
                waiveFirst: true,
                amount: 95
            },
            rewards: {
                flatBonus: 0,
                pointValue: 1,
                effectiveAF: 95
            },

            otherInfo: { network: "visa", type: "cashBack" }
        },
        citiDC: {
            displayName: "Citi Double Cash",
            categories: {
                other: {
                    percent: 0.02,
                    cap: false
                }
            },
            rewards: {
                pointValue: 1,
                effectiveAF: 0,
                flatBonus: 0
            },
            bonus: {
                type: "none"
            },
            annualFee: {
                has: false
            },
            otherInfo: {
                type: "cashBack",
                network: "masterCard"
            }
        },

        cfu: {
            displayName: "Chase Freedom Unlimited",
            categories: {
                other: {
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
            },
            otherInfo: {
                type: "cashBack",
                network: "visa"
            },
            rewards: {
                pointValue: 1,
                effectiveAF: 0,
                flatBonus: 0
            }
        },

        cap1QuickSilver: {
            displayName: "Capital One Quicksilver",
            categories: {
                other: {
                    percent: 0.015,
                    cap: false
                }
            },
            bonus: {
                type: "standard",
                bonuses: [{ msr: 1000, rewardAmount: 200, expire: 3 }]
            },
            annualFee: {
                has: false,
                waiveFirst: false,
                amount: 0
            },
            rewards: {
                pointValue: 1,
                effectiveAF: 0,
                flatBonus: 0
            },
            otherInfo: {
                type: "cashBack",
                network: "masterCard"
            }
        },

        amexBCE: {
            displayName: "American Express Blue Cash Everyday",
            categories: {
                other: {
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
                bonuses: [{ msr: 1000, rewardAmount: 200, expire: 3 }]
            },
            rewards: {
                pointValue: 1,
                effectiveAF: 0,
                flatBonus: 0
            },
            annualFee: {
                has: false,
                waiveFirst: false,
                amount: 0
            },

            otherInfo: {
                network: "amex",
                type: "cashBack"
            }
        },

        uber: {
            displayName: "Barclays Uber Visa",
            categories: {
                other: {
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
            rewards: {
                pointValue: 1,
                effectiveAF: 0,
                flatBonus: 0
            },

            bonus: {
                type: "standard",
                bonuses: [{ msr: 500, rewardAmount: 100, expire: 3 }]
            },
            annualFee: {
                has: false,
                waiveFirst: false,
                amount: 0
            },

            otherInfo: {
                network: "visa",
                type: "cashBack"
            }
        }
    };
};
