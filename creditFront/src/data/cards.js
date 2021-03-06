const pointsMessage = `The points this card earns vary in value based on 
the way you redeem the points. This card also comes with significant perks and credits 
that may or may not have value to you. These can be modified based on personal 
value in the modify cards tab, using the point value, effective annual fee, and 
flat bonus categories. `;
const chaseURMessage = `Owning a Sapphire Preferred will let you redeem the points this card earns at 1.25 cents per point,
and 1.5 cents per point with the Sapphire Reserve.`;
const specialCatMessage = `To get an accurate result, you need to also set 
this card's special category spend in the Modify Selected Tab.`

export default () => {
    return {
        brexStartup: {
            displayName: "Brex for Startups",
            categories: {
                rideshare: {
                    percent: 0.07,
                    cap: false
                },
                travel: {
                    percent: 0.04,
                    cap: false
                },
                dining: {
                    percent: 0.03,
                    cap: false
                },
                other: {
                    percent: 0.01,
                    cap: false
                },
                "Recurring Software": {
                    percent: 0.02,
                    cap: false
                }
            },
            bonus: {
                type: "standard",
                bonuses: [{ msr: 0, rewardAmount: 0, expire: 3 }]
            },
            annualFee: {
                has: false,
                waiveFirst: false,
                amount: 0
            },
            rewards: {
                flatBonus: 0,
                pointValue: 1,
                effectiveAF: 0
            },
            otherInfo: {
                type: "Business",
                network: "MasterCard",
                issuer: "Brex",
                notices: [
                    "This card has an insane amount of perks/credits, ".concat(
                        "if you can use them edit the flat bonus/ effective AF categories to reflect"
                    )
                ]
            }
        },
        inkBizPreferred: {
            displayName: "Ink Business Preferred",
            categories: {
                other: {
                    percent: 0.01,
                    cap: false
                },
                travel: {
                    percent: 0.03,
                    cap: false
                }
            },
            bonus: {
                type: "standard",
                bonuses: [{ msr: 5000, rewardAmount: 800, expire: 3 }]
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
                type: "Business",
                network: "Visa",
                issuer: "Chase"
            }
        },
        cf: {
            displayName: "Chase Freedom",
            categories: {
                other: {
                    percent: 0.01,
                    cap: false
                },
                "Special Category": {
                    displayName: "Rotating 5%",
                    percent: 0.05,
                    cap: 1500,
                    capTime: 3
                }
            },
            bonus: {
                type: "standard",
                bonuses: [{ msr: 500, rewardAmount: 200, expire: 3 }]
            },
            annualFee: {
                has: false,
                waiveFirst: false,
                amount: 0
            },
            rewards: {
                flatBonus: 0,
                pointValue: 1,
                effectiveAF: 0,
                specialCatSpend: 350
            },
            otherInfo: {
                type: "Cash Back",
                network: "Visa",
                issuer: "Chase",
                notices: [specialCatMessage]
            }
        },
 hiltonHonors2: {
            displayName: "Hilton Honors Aspire",
            categories: {
                other: {
                    percent: 0.03,
                    cap: false
                },
                "Special Category": {
                    displayName: "Hilton",
                    percent: 0.12,
                    cap: false
                },
                travel: {
                    percent: 0.07,
                    cap: false
                },
                dining: {
                    percent: 0.07,
                    cap: false
                },

                
            },
            bonus: {
                type: "standard",
                bonuses: [{ msr: 4000, rewardAmount: 1500, expire: 3 }]
            },
            annualFee: {
                has: true,
                waiveFirst: false,
                amount: 450
            },
            rewards: {
                flatBonus: 0,
                pointValue: 0.5,
                effectiveAF: 200,
                specialCatSpend: 350
            },
            otherInfo: {
                type: "Travel - Branded",
                network: "American Express",
                issuer: "American Express",

                notices: [specialCatMessage]
            }
        },
        hiltonHonors1: {
            displayName: "Hilton Honors Surpass",
            categories: {
                other: {
                    percent: 0.03,
                    cap: false
                },
                "Special Category": {
                    displayName: "Hilton",
                    percent: 0.12,
                    cap: false
                },
                dining: {
                    percent: 0.06,
                    cap: false
                },
                groceries: {
                    percent: 0.06,
                    cap: false
                },
                gas: {
                    percent: 0.06,
                    cap: false
                }
            },
            bonus: {
                type: "standard",
                bonuses: [{ msr: 3000, rewardAmount: 1500, expire: 3 }]
            },
            annualFee: {
                has: true,
                waiveFirst: false,
                amount: 95
            },
            rewards: {
                flatBonus: 0,
                pointValue: 0.5,
                effectiveAF: 95,
                specialCatSpend: 350
            },
            otherInfo: {
                type: "Travel - Branded",
                network: "American Express",
                issuer: "American Express",

                notices: [specialCatMessage]
            }
        },
        hiltonHonors: {
            displayName: "Hilton Honors",
            categories: {
                other: {
                    percent: 0.03,
                    cap: false
                },
                "Special Category": {
                    displayName: "Hilton",
                    percent: 0.07,
                    cap: false
                },
                dining: {
                    percent: 0.05,
                    cap: false
                },
                groceries: {
                    percent: 0.05,
                    cap: false
                },
                gas: {
                    percent: 0.05,
                    cap: false
                }
            },
            bonus: {
                type: "standard",
                bonuses: [{ msr: 1000, rewardAmount: 950, expire: 3 }]
            },
            annualFee: {
                has: false,
                waiveFirst: false,
                amount: 0
            },
            rewards: {
                flatBonus: 0,
                pointValue: 0.5,
                effectiveAF: 0,
                specialCatSpend: 350
            },
            otherInfo: {
                type: "Travel - Branded",
                network: "American Express",
                issuer: "American Express",
                notices: [specialCatMessage]
            }
        },
 
        skyMilesGold: {
            displayName: "Gold Delta SkyMiles",
            categories: {
                other: {
                    percent: 0.01,
                    cap: false
                },
                "Special Category": {
                    displayName: "Delta",
                    percent: 0.02,
                    cap: false
                    // capTime: 3
                }
            },
            bonus: {
                type: "standard",
                bonuses: [
                    {msr: 1000, rewardAmount: 300, expire: 3},
                  
                ]
            },
            annualFee: {
                has: true,
                waiveFirst: true,
                amount: 95
            },
            rewards: {
                flatBonus: 0,
                pointValue: 1.7,
                effectiveAF: 95,
                specialCatSpend: 350
            },
            otherInfo: {
                type: "Travel - Branded",
                network: "American Express",
                issuer: "American Express",

                notices: [specialCatMessage]
            }
        },
        skyMilesReserve: {
            displayName: "Delta Reserve",
            categories: {
                other: {
                    percent: 0.01,
                    cap: false
                },
                "Special Category": {
                    displayName: "Delta",
                    percent: 0.02,
                    cap: false
                    // capTime: 3
                }
            },
            bonus: {
                type: "standard",
                bonuses: [
                    {msr: 3000, rewardAmount: 400, expire: 3},
                    { msr: 30000, rewardAmount: 150, expire: 12 },
                    {
                        msr: 60000,
                        rewardAmount: 150,
                        expire: 12
                    }
                ]
            },
            annualFee: {
                has: true,
                waiveFirst: false,
                amount: 450
            },
            rewards: {
                flatBonus: 0,
                pointValue: 1.7,
                effectiveAF: 450,
                specialCatSpend: 350
            },
            otherInfo: {
                type: "Travel - Branded",
                network: "American Express",
                issuer: "American Express",

                notices: [specialCatMessage]
            }
        },

        bonvoyBrilliant: {
            displayName: "Mariott Bonvoy Brilliant",
            categories: {
                other: {
                    percent: 0.02,
                    cap: false
                },
                "Special Category": {
                    displayName: "Mariott",
                    percent: 0.06,
                    cap: false
                    // capTime: 3
                },
                travel: {
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
                    { msr: 3000, rewardAmount: 750, expire: 3 },

                ]
            },
            annualFee: {
                has: true,
                waiveFirst: false,
                amount: 450
            },
            rewards: {
                flatBonus: 0,
                pointValue: 0.8,
                effectiveAF: 150,
                specialCatSpend: 350
            },
            otherInfo: {
                type: "Travel - Branded",
                network: "American Express",
                issuer: "American Express",

                notices: [specialCatMessage]
            }
        },
       
        swPriority: {
            displayName: "Southwest Priority",
            categories: {
                other: {
                    percent: 0.01,
                    cap: false
                },
                "Special Category": {
                    displayName: "Southwest",
                    percent: 0.02,
                    cap: false
                    // capTime: 3
                }
            },
            bonus: {
                type: "standard",
                bonuses: [
                    { msr: 1000, rewardAmount: 400, expire: 3 },
                    {
                        msr: 12000,
                        rewardAmount: 200,
                        expire: 12
                    }
                ]
            },
            annualFee: {
                has: true,
                waiveFirst: false,
                amount: 149
            },
            rewards: {
                flatBonus: 0,
                pointValue: 1.5,
                effectiveAF: 74,
                specialCatSpend: 350
            },
            otherInfo: {
                type: "Travel - Branded",
                network: "Visa",
                issuer: "Chase",

                notices: [specialCatMessage]
            }
        },

        inkBizUnlimited: {
            displayName: "Ink Business Unlimited",
            categories: {
                other: {
                    percent: 0.015,
                    cap: false
                }
            },
            bonus: {
                type: "standard",
                bonuses: [{ msr: 3000, rewardAmount: 500, expire: 3 }]
            },
            annualFee: {
                has: false,
                waiveFirst: false,
                amount: 0
            },
            rewards: {
                flatBonus: 0,
                pointValue: 1,
                effectiveAF: 0
            },
            otherInfo: {
                type: "Business",
                network: "Visa",
                issuer: "Chase"
            }
        },

        sparkCashSelect: {
            displayName: "Capital One Spark Cash Select",
            categories: {
                other: {
                    percent: 0.015,
                    cap: false
                }
            },
            bonus: {
                type: "standard",
                bonuses: [{ msr: 3000, rewardAmount: 200, expire: 3 }]
            },
            annualFee: {
                has: false,
                waiveFirst: false,
                amount: 0
            },
            rewards: {
                flatBonus: 0,
                pointValue: 1,
                effectiveAF: 0
            },
            otherInfo: {
                type: "Business",
                network: "Visa",
                issuer: "Capital One"
            }
        },
        sparkCash: {
            displayName: "Capital One Spark",
            categories: {
                other: {
                    percent: 0.02,
                    cap: false
                }
            },
            bonus: {
                type: "standard",
                bonuses: [{ msr: 4500, rewardAmount: 500, expire: 3 }]
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
                type: "Business",
                network: "Visa",
                issuer: "Capital One"
            }
        },
        usBankFPGold: {
            displayName: "US Bank FlexPerks Gold",
            categories: {
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
                },
                other: {
                    percent: 0.01,
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
                type: "Travel",
                network: "American Express",
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
                type: "Travel",
                network: "Visa",
                issuer: "Chase",
                notices: [pointsMessage]
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
                type: "Travel",
                network: "Visa",
                issuer: "Chase",
                notices: [pointsMessage]
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
                    cap: 25000,
                    capTime: 12
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
                type: "Travel",
                network: "American Express",
                issuer: "American Express",
                notices: [pointsMessage]
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
                type: "Travel",
                network: "American Express",
                issuer: "American Express",
                notices: [pointsMessage]
            }
        },

        amexBCP: {
            //  capData[category] = {
            //             hit: false,
            //             capAmount: card.categories[category].capAmount,
            //             capTime: card.categories[category].capTime,
            //             currentSpend: 0
            //           };
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
                    cap: 6000,
                    capTime: 12
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
                type: "Cash Back",
                network: "American Express",
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
                },
                transit: {
                    percent: 0.03,
                    cap: false
                },
                travel: {
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
                type: "Cash Back",
                network: "American Express",
                issuer: "Wells Fargo"
            }
        },
        barclaysAP: {
            displayName: "Barclays Arrival Plus",
            categories: {
                other: {
                    percent: 0.02,
                    cap: false
                }
            },
            bonus: {
                type: "standard",
                bonuses: [{ msr: 5000, rewardAmount: 700, expire: 3 }]
            },
            annualFee: {
                has: true,
                waiveFirst: true,
                amount: 89
            },
            rewards: {
                flatBonus: 0,
                pointValue: 1,
                effectiveAF: 89
            },

            otherInfo: {
                network: "MasterCard",
                issuer: "Barclays",
                type: "Travel",
                notices: ["You can't apply for this card anymore"]
            }
        },

        sdfcu: {
            displayName: "SDFCU Premium Cash Back",
            categories: {
                other: {
                    percent: 0.02,
                    cap: false
                }
            },
            bonus: {
                type: "standard",
                bonuses: [{ msr: 3000, rewardAmount: 200, expire: 3 }]
            },
            annualFee: {
                has: false,
                waiveFirst: false,
                amount: 0
            },
            rewards: {
                flatBonus: 0,
                pointValue: 1,
                effectiveAF: 0
            },

            otherInfo: {
                network: "Visa",
                issuer: "State Department FCU",
                type: "Cash Back"
            }
        },

        capOneVenture: {
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
                network: "Visa",
                issuer: "Capital One",
                type: "Travel"
            }
        },

        capOneVentureOne: {
            displayName: "Capital One VentureOne",
            categories: {
                other: {
                    percent: 0.0125,
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
                flatBonus: 0,
                pointValue: 1,
                effectiveAF: 0
            },

            otherInfo: {
                network: "Visa",
                issuer: "Capital One",
                type: "Travel"
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
                type: "Cash Back",
                network: "MasterCard",
                issuer: "Citi",
                notices: [
                    "It's technically 1 percent when you buy"
                        .concat(
                            " and 1 percent when you pay but you should always be paying, so "
                        )
                        .concat("I set the cash back at 2%")
                ]
            }
        },
        discoverIt: {
            displayName: "Discover It",
            categories: {
                other: {
                    percent: 0.01,
                    cap: false
                },
                "Special Category": {
                    displayName: "Rotating 5%",
                    percent: 0.05,
                    cap: 1500,
                    capTime: 3
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
                type: "Cash Back",
                issuer: "Discover",
                network: "Discover"
            },
            rewards: {
                pointValue: 1,
                effectiveAF: 0,
                flatBonus: 0,
                specialCatSpend: 350,

                notices: [specialCatMessage]
            }
        },

        discoverItMiles: {
            displayName: "Discover It Miles",
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
                type: "Travel",
                issuer: "Discover",
                network: "Discover"
            },
            rewards: {
                pointValue: 1,
                effectiveAF: 0,
                flatBonus: 0
            }
        },
        alliantSignature: {
            displayName: "Alliant Visa Signature",
            categories: {
                other: {
                    percent: 0.025,
                    cap: false
                }
            },
            bonus: {
                type: "percentTime",
                multiplier: 1.2,
                length: 12
            },
            annualFee: {
                has: true,
                waiveFirst: true,
                amount: 99
            },
            otherInfo: {
                type: "Cash Back",
                issuer: "Alliant",
                network: "Visa"
            },
            rewards: {
                pointValue: 1,
                effectiveAF: 99,
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
                type: "Cash Back",
                network: "MasterCard",
                issuer: "Citi"
            }
        },
        bofaPremiumRewards: {
            displayName: "Bank of America Premium Rewards",
            categories: {
                other: {
                    percent: 0.015,
                    cap: false
                },
                travel: {
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
                waiveFirst: false,
                amount: 95
            },
            rewards: {
                pointValue: 1,
                effectiveAF: 95,
                flatBonus: 0
            },
            otherInfo: {
                type: "Travel",
                network: "Visa",
                issuer: "Bank of America",
                notices: [
                    "Preferred Rewards members can get 25-75% more point value. ".concat(
                        "Adjust point value if this applies to you"
                    )
                ]
            }
        },
        bofaTravelRewards: {
            displayName: "Bank of America Travel Rewards",
            categories: {
                other: {
                    percent: 0.015,
                    cap: false
                }
            },
            bonus: {
                type: "standard",
                bonuses: [{ msr: 1000, rewardAmount: 250, expire: 3 }]
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
                type: "Travel",
                network: "Visa",
                issuer: "Bank of America",
                notices: [
                    "Preferred Rewards members can get 25-75% more point value. ".concat(
                        "Adjust point value if this applies to you"
                    )
                ]
            }
        },

        capOneQuickSilver: {
            displayName: "Capital One Quicksilver",
            categories: {
                other: {
                    percent: 0.015,
                    cap: false
                }
            },
            bonus: {
                type: "standard",
                bonuses: [{ msr: 500, rewardAmount: 150, expire: 3 }]
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
                type: "Cash Back",
                network: "MasterCard",
                issuer: "Capital One"
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
                type: "standard",
                bonuses: [{ msr: 500, rewardAmount: 200, expire: 3 }]
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
                type: "Cash Back",
                network: "Visa",
                issuer: "Chase",
                notices: [chaseURMessage]
            }
        },
        ducksUnlimited: {
            displayName: "Ducks Unlimited Visa",
            categories: {
                other: {
                    percent: 0.01,
                    cap: false
                },
                gas: {
                    percent: 0.05,
                    cap: false
                },
                "Sporting Goods": {
                    percent: 0.05,
                    cap: false
                }
            },
            bonus: {
                type: "standard",
                bonuses: [{ msr: 12341234, rewardAmount: 0, expire: 3 }]
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
                network: "Visa",
                type: "Cash Back",
                issuer: "First Bankcard"
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
                    cap: 6000,
                    capTime: 12
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
                network: "American Express",
                type: "Cash Back",
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
                network: "Visa",
                type: "Cash Back",
                issuer: "Barclays"
            }
        }
    };
};
