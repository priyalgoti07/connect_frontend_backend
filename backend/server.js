import express from 'express';

const app = express();
app.use(express.static('dist'));
// app.get('/', (req, res) => {
//     res.send('Server is ready');
// });

//get a list of 5 jokes



app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            "id": 1,
            "title": "Why don't scientists trust atoms?",
            "content": "Because they make up everything!"
        },
        {
            "id": 2,
            "title": "Why did the scarecrow win an award?",
            "content": "Because he was outstanding in his field!"
        },
        {
            "id": 3,
            "title": "What do you call fake spaghetti?",
            "content": "An impasta!"
        },
        {
            "id": 4,
            "title": "Why did the bicycle fall over?",
            "content": "Because it was two-tired!"
        },
        {
            "id": 5,
            "title": "What do you get when you cross a snowman and a vampire?",
            "content": "Frostbite!"
        }
    ]
    res.send(jokes)
})
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server at http://localhost:${port}`)
});
