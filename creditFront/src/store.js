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
            dining: 400,
            travel: 400,
            groceries: 400,
            all: 400
        },
        usingExData: false,
        selectedCards: [],
        unSelectedCards: {}
    },
    mutations: {
        initCards(state) {
            console.log("initialized");
            state.selectedCards = [];
            state.unSelectedCards = cardsDb();
        },
        addCard(state, cardKey) {
            state.selectedCards.push(state.unSelectedCards[cardKey]);
            Vue.delete(state.unSelectedCards, cardKey);
            console.log(this.selectedCards, this.unSelectedCards);
        },
        removeOne(state) {
            state.selectedCards.pop();
        },
        addRandomCard(state) {
            const randomKey = _.sample(Object.keys(state.unSelectedCards));
            this.commit("addCard", randomKey);
        },
        resetCards(state) {
            state.selectedCards = [];
            state.unSelectedCards = cards;
        },
        setCategory(state, category, amount) {
            state.categorySpend[category] = amountj;
            console.log(`categoryspend set ${state.categorySpend}`);
        },
        resetCategories(state) {
            state.categorySpend = {
                dining: 0,
                travel: 0,
                groceries: 0,
                all: 0
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
        async exchangeToken(context, publicToken) {
            try {
                let response = await axios.post("/api/get_access_token", {
                    publicToken
                });
                context.commit("setApiToken", response.data.apiToken);
                console.log(response.data.apiToken);
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
