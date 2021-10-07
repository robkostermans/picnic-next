import StoryblokClient from "storyblok-js-client";

const Storyblok = new StoryblokClient({
  accessToken: "HIg77rqOwrPm6ONBgwDtLAtt",
  cache: {
    clear: "auto",
    type: "memory",
  },
});

export default Storyblok;
