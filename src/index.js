// write your code here

fetch("http://localhost:3000/images")
  .then(function (response) {
    return response.json();
  })
  .then(function (images) {
    createCards(images);
  })
  .catch(console.error);

/*
<!-- <article class="image-card">
        <h2 class="title">Title of image goes here</h2>
        <img src="./assets/image-placeholder.jpg" class="image" />
        <div class="likes-section">
          <span class="likes">0 likes</span>
          <button class="like-button">♥</button>
        </div>
        <ul class="comments">
          <li>Get rid of these comments</li>
          <li>And replace them with the real ones</li>
          <li>From the server</li>
        </ul>
        <form class="comment-form">
          <input
            class="comment-input"
            type="text"
            name="comment"
            placeholdet="Add a comment..."
          />
          <button class="comment-button" type="submit">Post</button>
        </form>
      </article> -->

*/

function createTitle(parentEl, img) {
  const titleEl = document.createElement("h2");
  titleEl.setAttribute("class", "title");
  titleEl.innerText = img.title;
  parentEl.appendChild(titleEl);
}

function createImg(parentEl, img) {
  const imgEl = document.createElement("img");
  imgEl.setAttribute("class", "image");
  imgEl.src = img.image;
  parentEl.appendChild(imgEl);
}

function createLikesSection(parentEl, img) {
  //span class="likes"
  const spanLikesEl = document.createElement("span");
  spanLikesEl.setAttribute("class", "likes");
  spanLikesEl.innerText = img.likes;

  //button class="like-button"
  const buttonLikesEl = document.createElement("button");
  buttonLikesEl.setAttribute("class", "like-button");
  buttonLikesEl.innerText = "♥";

  parentEl.append(spanLikesEl, buttonLikesEl);
}

function createComments(parentEl, img) {
  const ulEl = document.createElement("ul");
  ulEl.setAttribute("class", "comments");
  parentEl.append(ulEl);

  for (const comment of img.comments) {
    const commentEl = document.createElement("li");
    commentEl.innerText = comment.content;
    ulEl.append(commentEl);
  }
}

function createCommentForm(parentEl) {
  const commentFormEl = document.createElement("form");
  commentFormEl.setAttribute("class", "comment-form");
  parentEl.append(commentFormEl);

  const inputEl = document.createElement("input");
  inputEl.setAttribute("class", "comment-input");
  inputEl.setAttribute("type", "text");
  inputEl.setAttribute("name", "comment");
  inputEl.setAttribute("placeholder", "Add a comment...");

  const formButtonEl = document.createElement("button");
  formButtonEl.setAttribute("class", "comment-button");
  formButtonEl.setAttribute("type", "submit");
  formButtonEl.innerText = "Post";

  commentFormEl.append(inputEl, formButtonEl);
}

function createCards(images) {
  const imageContainerEl = document.querySelector(".image-container");

  for (const img of images) {
    const articleImgCardEl = document.createElement("article");
    articleImgCardEl.setAttribute("class", "image-card");
    imageContainerEl.append(articleImgCardEl);

    createTitle(articleImgCardEl, img);
    createImg(articleImgCardEl, img);

    //create div class="likes-section"
    const likesSectionEl = document.createElement("div");
    likesSectionEl.setAttribute("class", "likes-section");
    articleImgCardEl.append(likesSectionEl);

    createLikesSection(likesSectionEl, img);
    createComments(articleImgCardEl, img);

    createCommentForm(articleImgCardEl);
  }
}
