let title = document.querySelector('.title')
let headings = document.querySelectorAll('.news-block h3')
let descriptions = document.querySelectorAll('.news-block p')
let newsTypeDropdown = document.querySelector('.news-type')
let searchButton = document.querySelector('#search-box #search-button')
let searchBlock = document.querySelector('#search-box #search-placeholder')
let newsType = "latest"

let API_key = "pub_19af9df6eda64ed0bbac7be34d66787e"

if (window.location.pathname.endsWith("news.html")) {
    const title = localStorage.getItem("title")
    const article_id = localStorage.getItem("article_id")
    const link = localStorage.getItem("link")
    const keywords = localStorage.getItem("keywords")
    const creator = localStorage.getItem("creator")
    const video_url = localStorage.getItem("video_url")
    const category = localStorage.getItem("category")
    const publish_date = localStorage.getItem("publish_date")
    const language = localStorage.getItem("language")
    const country = localStorage.getItem("country")
    const content = localStorage.getItem("content")

    document.querySelector(".single-news-block #title").innerText = title
    document.querySelector(".single-news-block p").innerText += ' ' + article_id
    document.querySelector(".single-news-block #link").innerText += ' ' + link
    document.querySelector(".single-news-block #keywords").innerText += ' ' + keywords
    document.querySelector(".single-news-block #creator").innerText += ' ' + creator
    document.querySelector(".single-news-block #video_url").innerText += ' ' + video_url
    document.querySelector(".single-news-block #category").innerText += ' ' + category
    document.querySelector(".single-news-block #publish_date").innerText += ' ' + publish_date
    document.querySelector(".single-news-block #language").innerText += ' ' + language
    document.querySelector(".single-news-block #country").innerText += ' ' + country
    document.querySelector(".single-news-block #content").innerText += ' ' + content
}


async function populateNewsData(url) {
    try {
        const response = await fetch(url)
        let data = response.json()
        data.then((data) => {
            const results = data.results
            const uniqueNews = new Set(results);
            let news = [...uniqueNews];

            if (news === "" || news == undefined) {
                alert("Unable to fetch news")
                return;
            }

            if (window.location.pathname.endsWith("index.html")) {
                for (let i = 0; i < headings.length; i++) {
                    if (news[i] === null || news[i] === undefined) {
                        headings[i].innerText = "N/A"
                        descriptions[i].innerText = "N/A"

                        headings[i].addEventListener('click', () => {
                            localStorage.setItem('title', "N/A")
                            localStorage.setItem('article_id', "N/A")
                            localStorage.setItem('keywords', "N/A")
                            localStorage.setItem('creator', "N/A")
                            localStorage.setItem('video_url', "N/A")
                            localStorage.setItem('category', "N/A")
                            localStorage.setItem('publish_date', "N/A")
                            localStorage.setItem('language', "N/A")
                            localStorage.setItem('country', "N/A")
                            localStorage.setItem('link', "N/A")
                            localStorage.setItem('content', "N/A")
                            window.location.href = "news.html"
                        })

                        continue
                    }

                    headings[i].innerText = news[i].title
                    if (news[i].description !== null) {
                        news[i].description = news[i].description.slice(0, 200)
                    }
                    descriptions[i].innerText = news[i].description

                    headings[i].addEventListener('click', () => {
                        localStorage.setItem('title', news[i].title)
                        localStorage.setItem('article_id', news[i].article_id)
                        localStorage.setItem('keywords', news[i].keywords)
                        localStorage.setItem('creator', news[i].creator)
                        localStorage.setItem('video_url', news[i].video_url)
                        localStorage.setItem('category', news[i].category)
                        localStorage.setItem('publish_date', news[i].pubDate)
                        localStorage.setItem('language', news[i].language)
                        localStorage.setItem('country', news[i].country)
                        localStorage.setItem('link', news[i].link)
                        localStorage.setItem('content', news[i].content)
                        window.location.href = "news.html"
                    })
                }
            }
        })
    }
    catch (e) {
        alert("Unable to fetch news")
    }
}


function handleOptionChange(e) { // Called from HTML
    newsType = e.target.value;
    getNewsData(newsType)
}

function getNewsData() {
    let url = `https://newsdata.io/api/1/${newsType}?apikey=${API_key}`
    populateNewsData(url)
}

if (window.location.pathname.endsWith("index.html")) {
    searchButton.addEventListener('click', () => {
        let searchText = searchBlock.value
        if (searchText === "") {
            return;
        }
        let url = `https://newsdata.io/api/1/${newsType}?apikey=${API_key}&qInTitle=${searchText}`
        populateNewsData(url)
    })
}

getNewsData()