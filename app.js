const likeBtn = document.querySelector("#like-btn");
const dislikeBtn = document.querySelector("#dislike-btn");
const para = document.querySelector("#like-msg");
const para2 = document.querySelector("#dislike-msg");

let likeCount = 0;
let dislikeCount = 0;

likeBtn.addEventListener("click", () => {
    likeCount++;

    if (likeCount === 1) {
        para.innerHTML = `<p>Like by ${likeCount} people</p>`
    }
    else {
        para.innerHTML = `<p>Like by ${likeCount} person</p>`
    }
});

dislikeBtn.addEventListener("click", () => {
    dislikeCount++;

    if (dislikeCount === 1) {
        para2.innerHTML = `<p>Dislike by ${dislikeCount} people</p>`
    }
    else {
        para2.innerHTML = `<p>Dislike by ${dislikeCount} person</p>`
    }
});
