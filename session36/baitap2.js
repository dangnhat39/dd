// window.onload = function () {
//     updateLikes('bunbohue');
//     updateLikes('pho');
//     updateLikes('comtam');
// };

// function likeDish(dish) {
//     let likes = localStorage.getItem(dish) ? parseInt(localStorage.getItem(dish)) : 0;
//     likes++;
//     localStorage.setItem(dish, likes);
//     updateLikes(dish);
// }

// function updateLikes(dish) {
//     let likes = localStorage.getItem(dish) ? localStorage.getItem(dish) : 0;
//     document.getElementById(`${dish}-likes`).innerText = `❤️ ${likes} lượt thích`;
// } 
// 
window.load=function () {
    updateLikes('bunbohue');
    updateLikes('pho');
    updateLikes('comtam');
};
function likeDish(dish) {
    let likes = localStorage.getItem(dish) ? parseInt(localStorage.getItem(dish)) : 0;
    likes++;
    localStorage.setItem(dish, likes);
    updateLikes(dish);
}
function updateLikes(dish) {
    let likes = localStorage.getItem(dish) ? parseInt(localStorage.getItem(dish)) : 0;
    document.getElementById(`${dish}-likes`).innerText = `❤️ ${likes} lượt thích`;
}
