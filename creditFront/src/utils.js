// const baseCard = () => {
//     return {
//         displayName: "Custom Card",
//         categories: {
//             other: {
//                 percent: 0.01,
//                 cap: false
//             }
//         },
//         bonus: {
//             type: "standard",
//             bonuses: [{ msr: 500, rewardAmount: 100, expire: 3 }]
//         },
//         annualFee: {
//             has: true,
//             waiveFirst: true,
//             amount: 1
//         },
//         rewards: {
//             flatBonus: 0,
//             pointValue: 1,
//             effectiveAF: 1
//         },
//         otherInfo: {
//             network: "Visa",
//             issuer: "Custom",
//             type: "Cash Back"
//         }
//     };
// };
// const fields = [
//     {
//         displayName: "Card Name",
//         inputs: [{ displayName, type: "string" }],
//         modFn: value => {
//             this.currentCard.displayName = value;
//         }
//     },
//     {
//         displayName: "Add Category",
//         inputs: [{displayName: "Category Title"}]
//     }
// ];

export default {
    isSideOverflowing: element => {
        return element.offsetWidth < element.scrollWidth;
    },
    isVerticalOverflowing: element => {
        return element.offsetHeight < element.scrollHeight;
    }
};
