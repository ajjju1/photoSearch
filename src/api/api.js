const baseURL = "https://api.unsplash.com/"
const API_KEY = process.env.API_KEY;
console.log(API_KEY);
export const getTrendingImages = async() =>{
    try{
    const res = await fetch(`${baseURL}/photos?per_page=300`, {
        headers : {
            Authorization: `Client-ID ${API_KEY}`
        }
    });
    if (!res.ok){
        console.error(res.status);
        return;
    }
    const json = await res.json();
    // console.log(json);
    return json;
    }catch(e){
        console.error("Eroor is present ",e);
    }
}

//search 
export const getSearchImages = async(query) =>{
    const url = new URL(`${baseURL}/search/photos`);
    url.search = new URLSearchParams({
        per_page : 30,
        query: query,
    })
    try{
    const res = await fetch(url, {
        headers : {
            Authorization: `Client-ID ${API_KEY}`
        }
    });
    if (!res.ok){
        console.error(res.status);
        return;
    }
    const json = await res.json();
    // console.log(json);
    return json.results;
    }catch(e){
        console.error("Eroor is present ",e);
    }
}