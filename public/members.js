const members = [
  {
    image: "https://cdn.discordapp.com/avatars/77393884925132800/922f89fb829351fd332780bc1c302271.webp?size=2048",
    name: "doot",
    description:
      "Bungertown Owner and Static Raid Manager. Develops applications for work and hobby, like this website. Listens to Spotify 24/7. Never quits RuneScape, just takes extended breaks.",
    likes: [
      {
        text: "Spotify",
        is: "success",
      },
      {
        text: "Raiding",
        is: "danger",
      },
      {
        text: "Ramen",
        is: "warning",
      },
      {
        text: "RuneScape",
        is: "info",
      },
    ],
  },
];

const $members = document.getElementById("members");
for (const member of members) {
  const $column = document.createElement("div");
  $column.classList.add("column");

  let $likes = "";
  for (const tag of member.likes) {
    $likes += `<span class="tag is-${tag.is}">${tag.text}</span>\n`;
  }

  $column.innerHTML = `
    <div class="card">
      <div class="card-image">
        <figure class="image">
          <img src="${member.image}"/>
        </figure>
      </div>
      <div class="card-content">
        <div class="content">
          <h1>${member.name}</h1>
          <p>${member.description}</p>
          <h3>Likes</h3>
          <div class="tags">
            ${$likes}
          </div>
        </div>
      </div>
    </div>
  `;

  $members.appendChild($column);
}
