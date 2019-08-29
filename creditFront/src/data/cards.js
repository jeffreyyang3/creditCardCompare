export default () => {
    return {
        usBankFPGold: {
            displayName: "US Bank FlexPerks Gold",
            categories: {
                other: {
                    percent: 0.01,
                    cap: false
                },
                travel: {
                    percent: 0.02,
                    cap: false
                },
                dining: {
                    percent: 0.03,
                    cap: false
                },
                gas: {
                    percent: 0.03,
                    cap: false
                }
            },
            bonus: {
                type: "standard",
                bonuses: [{ msr: 2000, rewardAmount: 300, expire: 4 }]
            },
            annualFee: {
                has: true,
                waiveFirst: false,
                amount: 85
            },
            rewards: {
                flatBonus: 0,
                pointValue: 1.5,
                effectiveAF: 85
            },
            otherInfo: {
                type: "travel",
                network: "amex",
                issuer: "US Bank"
            }
        },
        csp: {
            displayName: "Chase Sapphire Preferred",
            categories: {
                other: {
                    percent: 0.01,
                    cap: false
                },
                travel: {
                    percent: 0.02,
                    cap: false
                },
                dining: {
                    percent: 0.02,
                    cap: false
                }
            },
            bonus: {
                type: "standard",
                bonuses: [{ msr: 4000, rewardAmount: 600, expire: 3 }]
            },
            annualFee: {
                has: true,
                waiveFirst: false,
                amount: 95
            },
            rewards: {
                flatBonus: 0,
                pointValue: 1.25,
                effectiveAF: 95
            },
            otherInfo: {
                type: "travel",
                network: "visa",
                issuer: "Chase"
            }
        },

        csr: {
            displayName: "Chase Sapphire Reserve",
            categories: {
                other: {
                    percent: 0.01,
                    cap: false
                },
                travel: {
                    percent: 0.03,
                    cap: false
                },
                dining: {
                    percent: 0.04,
                    cap: false
                }
            },
            bonus: {
                type: "standard",
                bonuses: [{ msr: 4000, rewardAmount: 500, expire: 3 }]
            },
            annualFee: {
                has: true,
                waiveFirst: false,
                amount: 450
            },
            rewards: {
                flatBonus: 0,
                pointValue: 1.5,
                effectiveAF: 150
            },
            otherInfo: {
                type: "travel",
                network: "visa",
                issuer: "Chase"
            }
        },
        amexGold: {
            displayName: "American Express Gold",
            categories: {
                other: {
                    percent: 0.01,
                    cap: false
                },
                travel: {
                    percent: 0.04,
                    cap: false
                },
                groceries: {
                    percent: 0.04,
                    cap: 25000
                },
                dining: {
                    percent: 0.04,
                    cap: false
                }
            },
            bonus: {
                type: "standard",
                bonuses: [{ msr: 2000, rewardAmount: 500, expire: 3 }]
            },
            annualFee: {
                has: true,
                waiveFirst: false,
                amount: 250
            },
            rewards: {
                flatBonus: 0,
                pointValue: 1,
                effectiveAF: 250
            },
            otherInfo: {
                type: "travel",
                network: "amex",
                issuer: "American Express"
            }
        },
        amexPlatinum: {
            displayName: "American Express Platinum",
            categories: {
                other: {
                    percent: 0.01,
                    cap: false
                },
                travel: {
                    percent: 0.05,
                    cap: false
                }
            },

            bonus: {
                type: "standard",
                bonuses: [
                    {
                        msr: 5000,
                        rewardAmount: 750,
                        expire: 3
                    }
                ]
            },
            annualFee: {
                has: true,
                waiveFirst: false,
                amount: 550
            },

            rewards: {
                flatBonus: 0,
                pointValue: 1,
                effectiveAF: 550
            },
            otherInfo: {
                type: "travel",
                network: "amex",
                issuer: "American Express"
            }
        },

        amexBCP: {
            displayName: "American Express Blue Cash Preferred",
            categories: {
                other: {
                    percent: 0.01,
                    cap: false
                },
                transit: {
                    percent: 0.03,
                    cap: false
                },
                gas: {
                    percent: 0.03,
                    cap: false
                },

                streaming: {
                    percent: 0.06,
                    cap: false
                },

                groceries: {
                    percent: 0.06,
                    cap: 6000
                }
            },
            bonus: {
                type: "standard",
                bonuses: [{ msr: 1000, expire: 3, rewardAmount: 300 }]
            },
            annualFee: {
                has: true,
                waiveFirst: false,
                amount: 95
            },

            rewards: {
                flatBonus: 0,
                pointValue: 1,
                effectiveAF: 95
            },
            otherInfo: {
                type: "cashBack",
                network: "amex",
                issuer: "American Express"
            }
        },
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
                network: "amex",
                issuer: "Wells Fargo"
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

            otherInfo: {
                network: "visa",
                issuer: "Capital One",
                type: "cashBack"
            }
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
                network: "masterCard",
                issuer: "Citi"
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
                issuer: "Chase",
                network: "visa"
            },
            rewards: {
                pointValue: 1,
                effectiveAF: 0,
                flatBonus: 0
            }
        },

        citiPrestige: {
            displayName: "Citi Prestige",
            categories: {
                other: {
                    percent: 0.01,
                    cap: false
                },
                travel: {
                    percent: 0.04,
                    cap: false
                },
                dining: {
                    percent: 0.05,
                    cap: false
                }
            },
            bonus: {
                type: "standard",
                bonuses: [{ msr: 4000, rewardAmount: 500, expire: 3 }]
            },
            annualFee: {
                has: true,
                waiveFirst: false,
                amount: 495
            },
            rewards: {
                pointValue: 1,
                effectiveAF: 245,
                flatBonus: 0
            },
            otherInfo: {
                type: "cashBack",
                network: "masterCard",
                issuer: "Citi"
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
                network: "masterCard",
                issuer: "Capital One"
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
                type: "cashBack",
                issuer: "American Express"
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
                type: "cashBack",
                issuer: "Barclays"
            }
        }
    };
};
