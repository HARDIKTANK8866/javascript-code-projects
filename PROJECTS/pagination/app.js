import fetchFollowers from "./fetchfollowers.js";
import display from "./displayFollowers.js";
import paginate from "./paginate.js";


const title = document.querySelector('.section-title h1')

const init = async ()=> {
   const followers = await fetchFollowers()
   display(paginate(followers)[0])
    title.textContent = 'pagination'
    const pages = paginate(followers)

}
window.addEventListener('load',init)