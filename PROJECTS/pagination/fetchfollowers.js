const url = 'https://api.github.com/users/john-smilga/followers?per_page=100'

const fetchFollowers = async ()=>{
    const responce = await fetch(url)
    const data =await responce.json()
    return data
}

export default fetchFollowers