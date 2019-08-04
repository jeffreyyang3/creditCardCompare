const util = require("util");
const ip = require("ip");

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const moment = require("moment");
const plaid = require("plaid");
const app = require("express")();
const cors = require("cors");
const routes = require("./routes");
const keys = require("./secret");
const fs = require("fs");
let APP_PORT = 8081;

let env = "sandbox";

let plaidProducts = "transactions";
let publicToken = null;
let itemID = null;

let client = new plaid.Client(
    keys.plaid.clientID,
    keys.plaid.secret,
    keys.plaid.publicKey,
    plaid.environments[env],
    { version: "2018-05-22" }
);

app.use("/", routes);

//app.use(cors({ origin: `http://${ip.address()}:8080`, credentials: true }));

app.use(bodyParser.json());
app.use(cookieParser());
app.get("/api/pay", (req, res) => {
    res.json({
        worked: "yea"
    });
});

app.post("/api/get_access_token", (req, res) => {
    console.log(req.body);
    client.exchangePublicToken(req.body.publicToken, function(
        error,
        tokenResponse
    ) {
        if (error != null) {
            prettyPrintResponse(error);

            return res.json({
                error: error
            });
        }
        let accessToken = tokenResponse.access_token;
        console.log(`access token is ${accessToken}`);

        res.setHeader("Access-Control-Allow-Origin", `${ip.address()}:8080`);
        res.cookie("accessToken", accessToken, {
            domain: "localhost:8080",
            httpOnly: false,
            maxAge: 1000 * 60 * 60 * 24 * 30,
            secure: false
        });
        res.append("Set-Cookie", "accessToken=" + accessToken + ";");
        res.json({
            apiToken: tokenResponse.access_token
        });
    });
});

app.post("/api/transactions", (req, res) => {
    let apiToken = req.body.apiToken;
    console.log(`xxxxxxx ${req.body.apiToken}`);
    let startDate = moment()
        .subtract(30, "days")
        .format("YYYY-MM-DD");
    let endDate = moment().format("YYYY-MM-DD");
    client.getTransactions(
        apiToken,
        startDate,
        endDate,
        {
            count: 250,
            offset: 0
        },
        function(error, transactionsResponse) {
            if (error != null) {
                prettyPrintResponse(error);

                return res.json({
                    error: error
                });
            } else {
                prettyPrintResponse(transactionsResponse);
                let jsonString = JSON.stringify(transactionsResponse);

                res.json({
                    error: null,
                    transactions: transactionsResponse.transactions
                });
            }
        }
    );
});

app.get("/api/ex", (req, res) => {
    fs.readFile("apiResponse.json", (err, data) => {
        if (err) throw err;
        res.json({
            exampleData: JSON.parse(data)
        });
    });
});

app.listen(APP_PORT, () => {
    console.log(`ip is ${ip.address()}`);
    console.log(`listening on ${APP_PORT}`);
});

let prettyPrintResponse = response => {
    console.log(util.inspect(response, { colors: true, depth: 4 }));
};
