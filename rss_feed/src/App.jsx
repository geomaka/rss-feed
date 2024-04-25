import { useState,useEffect } from 'react'
import Feed from './feed';

function App() {
  const [articles, setArticles] = useState([])
  console.log(articles);

const getArticles = async () =>{
  try{
    let response = await fetch("http://localhost:4000/")
     const posts =await response.json();
     setArticles(posts)
  }
  catch(error){
    console.log(error)
  }
}

useEffect(() =>{
  getArticles()
},[])

  return (
    <>
      <h1 className="text-xl font-semibold text-center mt-5">RSS feed</h1>
      <h2 className="text-center">Good morning, George</h2>
      <div className="w-3/4 max-w-lg border mx-auto p-5 rounded-xl">
        <div className="bg-black flex flex-col items-center rounded-lg py-3 px-6 mb-5">
          <img src='https://cdn-images-1.medium.com/max/303/1*rOPLUJ3W6FUA3rO1U1IeuA@2x.png
' alt='the netflix tech blog'/>
        </div>
        {articles.map((item,i) =>
        <Feed key = {i}
        title = {item.item.title}
        link = {item.item.link}
        date = {item.item.pubDate}
        />
      )}
      </div>
    </>
  )
}

export default App
