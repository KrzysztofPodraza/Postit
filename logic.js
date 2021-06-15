const addPostSwitch = document.querySelector(".addPost");
const popUpAddPost = document.querySelector(".addPostPop");
const blinder = document.querySelector(".blinder");
const postsContainer = document.querySelector(".posts-container");
const addPostForm = document.querySelector(".addPostForm");

addPostSwitch.addEventListener("click", () => {
  popUpAddPost.classList.toggle("display-none");
  blinder.classList.toggle("display-none");
});
blinder.addEventListener("click", () => {
  blinder.classList.add("display-none");
  popUpAddPost.classList.add("display-none");
});

const addPostHandler = (event) => {
  event.preventDefault();
  const title = document.getElementById("title");
  const description = document.getElementById("description");
  const imgUrl = document.getElementById("imgUrl");
  const t = title.value;
  const d = description.value;
  const i = imgUrl.value;
  const newPost = document.createElement("div");
  newPost.classList.add("post");
  newPost.innerHTML = `    <div class="post_top_box">
  <image class="post_avatar" src="./assets/avatar.png"></image>
  <p class="post_name">Hannah</p>
</div>
<image class="post_picture" src="${i}"></image>
<div class="post_bottom_box">
  <p class="post_title">${t}</p>
  <p class="post_text">${d}</p>
  <p class="post_date">posted 24 minutes ago</p>
</div>`;
  console.log(newPost);
  postsContainer.appendChild(newPost);
  title.value = "";
  description.value = "";
  imgUrl.value = "";
  popUpAddPost.classList.toggle("display-none");
  blinder.classList.toggle("display-none");
};
addPostForm.addEventListener("submit", addPostHandler);
