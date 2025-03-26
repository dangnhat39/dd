document.addEventListener("DOMContentLoaded", () => {
    const addBookmarkBtn = document.getElementById("addBookmarkBtn");
    const bookmarkModal = document.getElementById("bookmarkModal");
    const closeModalBtn = document.getElementById("closeModalBtn");
    const saveBookmarkBtn = document.getElementById("saveBookmarkBtn");
    const websiteNameInput = document.getElementById("websiteName");
    const websiteURLInput = document.getElementById("websiteURL");
    const bookmarkList = document.getElementById("bookmarkList");

   
    loadBookmarks();

    addBookmarkBtn.addEventListener("click", () => {
        bookmarkModal.style.display = "block";
    });

    closeModalBtn.addEventListener("click", () => {
        bookmarkModal.style.display = "none";
    });

    saveBookmarkBtn.addEventListener("click", () => {
        const websiteName = websiteNameInput.value;
        const websiteURL = websiteURLInput.value;

        if (websiteName && websiteURL) {
            const bookmark = {
                name: websiteName,
                url: websiteURL,
            };
            addBookmark(bookmark);
            websiteNameInput.value = "";
            websiteURLInput.value = "";
            bookmarkModal.style.display = "none";
        } else {
            alert("Please fill out the fields.");
        }
    });

    function loadBookmarks() {
        const bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
        bookmarks.forEach(bookmark => {
            displayBookmark(bookmark);
        });
    }

    function addBookmark(bookmark) {
        const bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
        bookmarks.push(bookmark);
        localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
        displayBookmark(bookmark);
    }

    function displayBookmark(bookmark) {
        const bookmarkItem = document.createElement("div");
        bookmarkItem.innerHTML = `  
            <a href="${bookmark.url}" target="_blank">${bookmark.name}</a>  
            <button onclick="deleteBookmark('${bookmark.name}')">Delete</button>  
        `;
        bookmarkList.appendChild(bookmarkItem);
    }

    window.deleteBookmark = function (name) {
        const bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
        const updatedBookmarks = bookmarks.filter(bookmark => bookmark.name !== name);
        localStorage.setItem("bookmarks", JSON.stringify(updatedBookmarks));
        bookmarkList.innerHTML = "";
        loadBookmarks();
    }
});  