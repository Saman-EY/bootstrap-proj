let likebtn = document.querySelectorAll("#LikeBtn");

likebtn.forEach((item) => {
    item.addEventListener("click", () => {
        item.innerHTML = '<i class="bi bi-check-lg"></i> Liked';
    })
})