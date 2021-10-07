// 1. Require the Storyblok client
const StoryblokClient = require("storyblok-js-client");
const spaceId = process.env.STORYBLOCK_SPACEID;

// 2. Initialize the client with the oauth token
// from the my account area at https://app.storyblok.com
let Storyblok = new StoryblokClient({
  oauthToken: process.env.STORYBLOCK_OAUTHTOKEN,
});

Storyblok.post(`spaces/${spaceId}/stories`, {
  story: {
    name: "Bananen Pannekoek",
    slug: "bananen-pannenkoek",
    content: { component: "recipe", title: "Bananen Pannekoek" },
  },
  publish: 1,
})
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
// Storyblok.put(`spaces/${spaceId}/stories/1`, {
//   story: { name: "xy", slug: "xy" },
// });
//Storyblok.delete(`spaces/${spaceId}/stories/1`, null);
