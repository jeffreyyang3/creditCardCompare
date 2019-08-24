import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import cardsDb from "@/data/cards";
import _ from "lodash";

axios.defaults.withCredentials = true;

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        publicToken: null,
        apiToken: null,
        accData: {},
        categorySpend: {
            dining: 300,
            travel: 300,
            groceries: 300,
            other: 300
        },
        usingExData: false,
        selectedCards: [],
        unSelectedCards: false,
        currentDraggedFromLeft: null,
        currentDraggedFromRight: null,
        notInitialized: true,
        cardTotalCB: {},
        cardModifications: {},
        original: cardsDb()
    },
    mutations: {
        setModification(state, payload) {
            if (payload.hasOwnProperty("effectiveAF")) {
                Vue.set(
                    state.cardModifications[payload.cardName],
                    "effectiveAF",
                    payload.effectiveAF
                );
            }
            if (payload.hasOwnProperty("pointValue")) {
                Vue.set(
                    state.cardModifications[payload.cardName],
                    "pointValue",
                    payload.pointValue
                );
            }

            if (payload.hasOwnProperty("flatBonus")) {
                Vue.set(
                    state.cardModifications[payload.cardName],
                    "flatBonus",
                    payload.flatBonus
                );
            }
        },

        setCardCB(state, payload) {
            Vue.set(state.cardTotalCB, payload.name, payload.amount);
        },

        setDragLeft(state, cardName) {
            state.currentDraggedFromLeft = cardName;
        },
        setDragRight(state, cardName) {
            state.currentDraggedFromRight = cardName;
        },

        initCards(state) {
            state.notInitialized = false;
            state.selectedCards = [];
            state.unSelectedCards = cardsDb();
            for (let key in state.unSelectedCards) {
                if (state.unSelectedCards.hasOwnProperty(key)) {
                    state.unSelectedCards[key].name = key;
                }
            }
        },
        addCard(state, cardKey) {
            if (!cardKey || !state.unSelectedCards[cardKey]) {
                console.log(`Card ${cardKey} doesn't exist`);
                return;
            }
            state.selectedCards.push(state.unSelectedCards[cardKey]);
            Vue.delete(state.unSelectedCards, cardKey);
        },
        unSelectCard(state, cardKey) {
            let toAdd;
            for (let i = 0; i < state.selectedCards.length; i++) {
                if (state.selectedCards[i].name === cardKey) {
                    toAdd = state.selectedCards[i];
                    state.selectedCards = state.selectedCards.filter(
                        card => card.name !== cardKey
                    );
                    Vue.delete(state.cardTotalCB, cardKey);
                    Vue.set(state.unSelectedCards, cardKey, toAdd);
                }
            }
        },

        resetCards(state) {
            state.selectedCards = [];
            state.unSelectedCards = cards;
        },
        setCategory(state, category, amount) {
            state.categorySpend[category] = amount;
            console.log(`categoryspend set ${state.categorySpend}`);
        },
        resetCategories(state) {
            state.categorySpend = {
                dining: 0,
                travel: 0,
                groceries: 0,
                other: 0
            };
        },
        setPublicToken(state, token) {
            console.log(`public token set to ${token}`);
            Vue.set(state, "publicToken", token);
        },
        setApiToken(state, token) {
            console.log(`api token set to ${token}`);
            //state.apiToken = token;
            Vue.set(state, "apiToken", token);
        },
        setAccData(state, data) {
            console.log(`accdata set`);
            console.log(data);
            Vue.set(state, "accData", data);
        },
        setEx(state, using) {
            console.log(`using example data: ${using}`);
            Vue.set(state, "usingExData", using);
        },
        setCategorySpend(state, categorySpend) {
            console.log(`category spend set to ${categorySpend}`);
            Vue.set(state, "categorySpend", categorySpend);
        }
    },
    getters: {
        getPublicToken: state => state.publicToken,
        getApiToken: state => state.apiToken,
        getAccData: state => state.accData,
        getCategorySpend: state => state.categorySpend
    },
    actions: {
        handleDropOnRight({ commit, state }) {
            commit("addCard", state.currentDraggedFromLeft);
            state.currentDraggedFromLeft = null;
        },
        handleDropOnLeft({ commit, state }) {
            commit("unSelectCard", state.currentDraggedFromRight);
            state.currentDraggedFromRight = null;
        },
        addRandomCard({ commit, state }) {
            if (!state.unSelectedCards) {
                commit("initCards");
            }
            const randomKey = _.sample(Object.keys(state.unSelectedCards));
            commit("addCard", randomKey);
        },

        async exchangeToken(context, publicToken) {
            try {
                let response = await axios.post("/api/get_access_token", {
                    publicToken
                });
                context.commit("setApiToken", response.data.apiToken);
            } catch (error) {
                console.error(error);
            }
        },
        async fetchAccData({ commit, state }) {
            try {
                const response = await axios.post("/api/transactions", {
                    apiToken: state.apiToken
                });
                console.log(response.data);
                commit("setAccData", response.data);
            } catch (e) {
                console.error(e);
            }
        }
    }
});
