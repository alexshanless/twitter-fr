var user1 = {
  userName: "@elonmusk",
  displayName: "Elon Musk",
  joinedDate: "June 2009",
  followingCount: 103,
  followerCount: 47900000,
  avatarURL: "assets/elonmusk.jpg",
  coverPhotoURL: "assets/elonmusk-cover.jpeg",
  tweets: [
    {
      text: "I admit to judging books by their cover",
      timestamp: "2/10/2021 00:01:20",
    },
    {
      text: "Starship to the moon",
      timestamp: "2/09/2021 18:37:12",
    },
    {
      text: "Out on launch pad, engine swap underway",
      timestamp: "2/09/2021 12:11:51",
    },
  ],
};

var user2 = {
  userName: "@BillGates",
  displayName: "Bill Gates",
  joinedDate: "June 2009",
  followingCount: 274,
  followerCount: 53800000,
  avatarURL: "assets/billgates.jpg",
  coverPhotoURL: "assets/billgates-cover.jpeg",
  tweets: [
    {
      text: "Everybody asks, how is the next Windows coming along? But nobody asks how is Bill? :/",
      timestamp: "2/10/2021 00:01:20",
    },
    {
      text: "Should I start tweeting memes? Let me know in a comment.",
      timestamp: "2/09/2021 18:37:12",
    },
    {
      text: "In 2020, I read a book every hour.",
      timestamp: "2/09/2021 12:11:51",
    },
  ],
};

var urlParams = new URLSearchParams(window.location.search);
var headerContainer = document.getElementById("header-container");
var tweetContainer = document.getElementById("tweet-container");
var users = [user1, user2];
var userIndex = 0;

function userElon() {
  var urlParams = new URLSearchParams();
  urlParams.set("user", "user1");
  window.location.href =
    "https://alexshanless.github.io/twitter-fr/?" + urlParams.toString();
}

function userBill() {
  var urlParams = new URLSearchParams();
  urlParams.set("user", "user2");
  window.location.href =
    "https://alexshanless.github.io/twitter-fr/?" + urlParams.toString();
}

if (urlParams.toLocaleString() == "user=user1") {
  userIndex = 0;
} else {
  userIndex = 1;
}

for (var i = 0; i < user1.tweets.length; i++) {
  var tweet = user1.tweets[i];
  var tweetValues = Object.values(tweet);
  console.log(tweetValues);

  var tweetDiv = document.createElement("div");
  tweetDiv.classList.add("tweet-div");
  tweetDiv.innerHTML = `
      <div class="tweet-avatar"><img src="${users[userIndex].avatarURL}"/></div>
      <div class="tweet-inner-container">
          <div class="tweet-details">
              <div class="tweet-display-name">
                  <p>${users[userIndex].displayName}
                      
                  </p>
              </div>
              <div class="user-name">${users[userIndex].userName}</div>
              <div class="tweet-created">Posted on ${tweetValues[1]}</div>
          </div>
          <div class="tweet-body">
              <p>${tweetValues[0]}</p>
          </div>
    <div class="tweet-icons">
      <i class="far fa-comment"></i>
      <p>5.2k</p>
      <i class="fas fa-retweet"></i>
      <p>7.7k</p>
      <i class="far fa-heart"></i>
      <p>65.2k</p>
      <i class="far fa-share-square"></i>
    </div>
  </div>
</div>`;
  tweetContainer.appendChild(tweetDiv);
}

headerContainer.innerHTML = ` <div class="header-container">
<div class="left-arrow">
  <img src="./assets/arrow-left.png" alt="left" />
</div>
<div class="top-name">
  <div class="display-name">${users[userIndex].displayName}</div>
  <p id="num-of-tweets">${users[userIndex].tweets.length} tweets</p>
</div>
</div>
<div class="cover-photo-container">
<div class="cover-img">
  <img src=${users[userIndex].coverPhotoURL} alt="cover" />
</div>
</div>
<div class="profile-details">
<div class="profile-wrapper">
  <div class="avatar-img">
    <img src=${users[userIndex].avatarURL} alt="" />
  </div>
  <div class="follow-button">
    <button>Follow</button>
  </div>
</div>
<div class="profile-info">
  <p class="display-name">${users[userIndex].displayName}</p>
</div>
<div class="user-name">
  <p>${users[userIndex].userName}</p>
</div>
<div class="date-joined">
  <p>Joined ${users[userIndex].joinedDate}</p>
</div>
<div class="followers-ctr">
  <div class="following">
    <p><a href="#">${users[userIndex].followingCount}</a>Following</p>
  </div>
  <div class="followers">
    <p><a href="#">${users[userIndex].followerCount}</a>Followers</p>
  </div>
</div>
</div>

<div class="tweets">
<div class="link-ctr">
  <div class="tab active"><a href="#">Tweets</a></div>
  <div class="tab"><a href="#">Tweets & replies</a></div>
  <div class="tab"><a href="#">Media</a></div>
  <div class="tab"><a href="#">Likes</a></div>
</div>
</div>
</div>`;

var tabs = document.getElementsByClassName("tab");

for (var i = 0; i < tabs.length; i++) {
  tabs[i].addEventListener("click", function () {
    var active = document.getElementsByClassName("active");
    active[0].className = active[0].className.replace(" active", "");
    this.className += " active";
  });
}
