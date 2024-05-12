const express = require('express');
const loveApp = express();
const app = express();
const port = 3002;
const lovePort = 3001;

loveApp.get('/', (req, res) => {
  res.send('❤️常莹!')
})

loveApp.listen(lovePort, () => {
  console.log(`app listening on lovePort ${lovePort}`)
});

app.use((req,res,next) => {
    res.header("Access-Control-Allow-Origin", "*");
    next();
})
app.get('/test', (req, res) => {
    res.json({a: 'test data'});
    res.end()
  })

app.listen(port, () => {
    console.log(`app listening on lovePort ${lovePort}`)
  })