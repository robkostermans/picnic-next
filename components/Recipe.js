//import DynamicComponent from "./DynamicComponent";
import SbEditable from "storyblok-react";

const Recipe = ({ content }) => (
  <SbEditable content={content}>
    <main className="px-6">
      <h1 key={content._uid}>{content.title}</h1>
    </main>
  </SbEditable>
);

export default Recipe;
