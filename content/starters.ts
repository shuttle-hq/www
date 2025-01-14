import { GITHUB_EXAMPLES_URL } from "../lib/constants";
import { StarterAttrs } from "../components/elements/Starter";

interface StarterAttrsContent extends StarterAttrs {
  featured?: boolean;
}

// The first three featured starters are on the front page, all of them
// populate the /starters page
export const AllStartersContent: StarterAttrsContent[] = [
  {
    title: "Build a Discord Bot",
    icon: "discord",
    featured: true,
    description:
      "Add custom functionality to your Discord server, using a bot written in Rust.",
    sourceLink: `${GITHUB_EXAMPLES_URL}/tree/main/serenity/hello-world`,
    postLink: "/blog/2022/09/14/serenity-discord-bot",
  },
  {
    title: "URL Shortener",
    icon: "paperclip",
    featured: true,
    description:
      "Get a shuttle relational database and build a URL shortener service.",
    sourceLink: `${GITHUB_EXAMPLES_URL}/tree/main/rocket/url-shortener`,
    postLink: "/blog/2022/03/13/url-shortener",
  },
  {
    title: "Deploy a full-stack app with JS & Rust",
    icon: "react",
    featured: true,
    description:
      "Use WebSockets, React and Rust to release a chat app end-to-end.",
    sourceLink: "https://github.com/joshua-mo-143/react-websocket-chat-rust",
    postLink:
      "https://joshmo.hashnode.dev/building-deploying-a-chat-app-with-react-typescript-rust",
  },
  {
    title: "Calendar",
    icon: "calendar",
    description: "Build a CLI tool for scheduling events.",
    sourceLink: "https://github.com/mre/zerocal",
    postLink: "https://endler.dev/2022/zerocal/",
  },
];

export const FeaturedStartersContent: StarterAttrs[] =
  AllStartersContent.filter(({ featured }) => featured || false);

export default AllStartersContent;
