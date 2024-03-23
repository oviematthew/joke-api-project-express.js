//Import the express library
const { response } = require("express");
let express = require("express");
let bodyParser = require('body-parser')

//Import https library
const https = require('https');

//create the express app instance
let app = express()
console.log('Welcome to my app')


app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json())

//start listening to a port Number
let portNumber = 4000
app.listen(portNumber, () => {
    console.log('Server is running on port', portNumber)
});




//array of jokes
let jokes = [
    { id: 1, joke: "Why was Cinderella so bad at soccer? She kept running away from the ball!."},
    { id: 2, joke: "What did one toilet say to another? You look flushed." }
];

// Define a GET API endpoint to get all jokes
app.get('/allJokes', (request, response, next) => {
    console.log('User has reached endpoint /allJokes');
    response.send(jokes);
});

// Define a GET API endpoint to get a joke by id
app.get('/joke', (request, response, next) => {
    console.log('User has reached endpoint /joke');

    const id = parseInt(request.query.id);
    const jokeIsFound = jokes.find((joke) => joke.id === id);

    if (jokeIsFound) {
        response.send(jokeIsFound);
    } else {
        response.status(404).send({
            message: "Joke not found with the provided id."
        });
    }
});

//define an API end point to add a joke
app.post('/addJoke', (request, response, next) => {
    console.log('User hit the endpoint \\addJoke')

    let data = request.body
    console.log(data)

    if (!data || !data.joke) {
        response.status(404).send({
            message: "There is no data to add."
        });
    } else if (data && data.joke) {
        const newJoke = {
            id: jokes.length + 1,
            joke: data.joke,
        };

        jokes.push(newJoke);
        response.send(newJoke);
    }
})

// Define a new endpoint to get list of programming jokes
app.get('/listProgrammingJokes', (request, response, next) => {
    console.log('User has reached endpoint /listProgrammingJokes');

    //either using the query to get amount needed, if no query, default to 4
    const jokeAmount = parseInt(request.query.jokeAmount) || 4;

    // Make a network call to the 3rd party API using the https module
    const apiURL = `https://v2.jokeapi.dev/joke/Programming?amount=${jokeAmount}&type=twopart`;

    https.get(apiURL, (apiResponse) => {
        let dataBuffer = [];

        //listen to chunks of data coming in.
        apiResponse.on('data', (chunk) => {
            console.log('received chunk')
            
            //add chunk of data received into data.
            dataBuffer.push(chunk);
        });

        // response has been received.
        apiResponse.on('end', () => {
            console.log('response done')
            try {
                const jsonData = JSON.parse(Buffer.concat(dataBuffer).toString());

                // create custom response to display to client
                const jokesReceived = jsonData.jokes.map((joke, index) => ({
                    id: index + 1,
                    setup: joke.setup,
                    delivery: joke.delivery
                }));

                // Return the custom response back to the client in json format
                response.send(jokesReceived);
            } catch (error) {
                console.error('Error parsing JSON:', error);
                response.status(500).send({
                    message: 'Error parsing JSON.'
                });
            }
        });
    }).on('error', (error) => {
        console.error('Error fetching jokes:', error);
        response.status(500).send({
            message: 'Error fetching jokes.'
        });
    });
});
