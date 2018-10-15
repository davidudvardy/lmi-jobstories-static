const express = require("express");
const path = require("path");
const app = express();

// Serve static files from the client app
app.use(express.static(path.join(__dirname, 'client/build')));

// Serve job stories from API
// TODO: serve from db
app.get("/api/jobstories", (req, res) => {
    var data = JSON.parse(`{"jobs":[{"context":"When my problem was not resolved and I was asked for detailed feedback on the interaction","motivation":"I want to easily continue the chat and keep browsing at the same time","outcome":"So that I don't have to memorize instructions, and switch back and forth between instructions and the website.","userTypes":["enduser"],"products":["bold360"]},{"context":"When I get wordy instructions within a conversation and the topic is quite complex and largely unknown to me","motivation":"I want to be quickly directed to the corresponding pages I need to act upon","outcome":"So that I can act upon instructions quickly and get back to what I was doing.","userTypes":["enduser"],"products":["bold360"]},{"context":"When I act upon chatbot instructions","motivation":"I want to follow instructions one step at a time","outcome":"So I can focus on solving my problem first.","userTypes":["enduser","analyst"],"products":["bold360"]},{"context":"When I get irrelevant/inaccurate responses through a chatbot","motivation":"I want to get a relevant and personalized response as soon as possible","outcome":"So I don't spend too much time searching for specific pages.","userTypes":["analyst"],"products":["bold360"]},{"context":"When I open a chat window","motivation":"I don't want to give any feedback","outcome":"So that I can feel confident about the response and act upon it.","userTypes":["content-editor"],"products":["prompt"]}]}`);
    res.json(data);
    console.log(`Sent ${data.jobs.length} job stories.`);
});

// Serve categories from API
// TODO: serve from db
app.get("/api/categories", (req, res) => {
    var data = JSON.parse(`{"products":[{"key":"bold360","title":"Bold360","usertypes":[{"key":"enduser","title":"End User"},{"key":"analyst","title":"Analyst"}]},{"key":"prompt","title":"Prompt AI","usertypes":[{"key":"content-editor","title":"Content Editor"}]}]}`);
    res.json(data);
    console.log(`Sent ${data.products.length} product categories.`);
});

// For any other requests, serve static site
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`Listening on ${port}`);