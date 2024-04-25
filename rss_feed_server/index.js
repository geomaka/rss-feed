import cors from "cors";
import express from "express";
import RssParser from "rss-parser"


const feedUrl = "https://netflixtechblog.com/feed"

const parser = new RssParser()
let articles = []

let data = async (url) =>{
    let feed = await parser.parseURL(url)
    console.log(feed.title)

    feed.items.forEach(item =>{
        articles.push({item})
    });
};

data(feedUrl)

let app = express();
let port = "4000"

app.use(cors());

app.get('/',(req,res) =>{
    res.send(JSON.stringify(articles))
})

const server = app.listen(port,()=>{
    console.log(`App is listening at http://localhost:${port}`)
})
