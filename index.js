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

var container = document.getElementById("container");

// container.innerHTML = `<div class="center">
// <div class="header">
//   <div class="cover-pic">
//     <div class="name">
//       <h1>${user1.displayName}</h1>
//       <p>${user1.tweets.length} tweets</p>
//     </div>
//     <img src=${user1.coverPhotoURL} alt="cover" />
//   </div>
//   <div class="profile-picture"><img src=${user1.avatarURL} alt="profile" /></div>
//   <div class="info">
//     <div class="details">
//       <h2>${user1.displayName}</h2>
//       <p>${user1.userName}</p>
//       <p>Joined ${user1.joinedDate}</p>
//       <div class="followers-ctr">
//         <p><strong>${user1.followingCount} &nbsp;</strong>Following</p>
//         <p><strong>${user1.followerCount} &nbsp;</strong>Followers</p>
//       </div>
//     </div>

//   </div>
// </div>
// <div class="tweets">
// <div class="link-ctr">
// <div class="tab"> <a href="#">Tweets</a></div>
// <div class="tab"> <a href="#">Tweets & replies</div>
// <div class="tab"> <a href="#">Media</div>
// <div class="tab"> <a href="#">Likes</div>
// </div>
// </div>
// </div>`;
