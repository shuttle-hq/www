export interface Author {
  readonly author_id: string;
  readonly author: string;
  readonly position: string;
  readonly author_url: string;
  readonly author_image_url: string;
}

export function getAuthors(ids: readonly string[]): readonly Author[] {
  return ids.flatMap((id) => {
    const author = authors.find((author) => author.author_id === id);

    if (author == null) return [];

    return [author];
  });
}

const authors: readonly Author[] = [
  {
    author_id: "christoshadjiaslanis",
    author: "Christos Hadjiaslanis",
    position: "Founder",
    author_url: "https://github.com/christos-h",
    author_image_url: "/images/authors/christos.jpeg",
  },
  {
    author_id: "brokad",
    author: "Damien B.",
    position: "Founder",
    author_url: "https://github.com/brokad",
    author_image_url: "/images/authors/brokad.jpeg",
  },
  {
    author_id: "nodar",
    author: "Nodar Daneliya",
    position: "Founder",
    author_url: "https://github.com/NodarD",
    author_image_url: "https://github.com/nodard.png",
  },
  {
    author_id: "terrencewaters",
    author: "Terrence Waters",
    position: "Software Engineer",
    author_url: "",
    author_image_url: "",
  },
  {
    author_id: "ben",
    author: "Ben",
    position: "",
    author_url: "https://github.com/kaleidawave",
    author_image_url: "https://github.com/kaleidawave.png",
  },
  {
    author_id: "josh",
    author: "Joshua Mo",
    position: "",
    author_url: "https://twitter.com/joshmo_dev",
    author_image_url: "/images/authors/josh.jpg",
  },
  {
    author_id: "oddgrd",
    author: "Oddbjørn Grødem",
    position: "",
    author_url: "https://github.com/oddgrd",
    author_image_url: "https://github.com/oddgrd.png",
  },
  {
    author_id: "matthias",
    author: "Matthias Endler",
    position: "Consultant at Corrode.dev",
    author_url: "https://corrode.dev/",
    author_image_url: "https://endler.dev/about/matthias-endler.jpg",
  },
  {
    author_id: "stefan",
    author: "Stefan Baumgartner",
    position: "Owner at Oida.dev",
    author_url: "https://twitter.com/ddprrt",
    author_image_url: "/images/authors/stefan.jpeg",
  },
  {
    author_id: "ian",
    author: "Ian Rumac",
    position: "",
    author_url: "https://twitter.com/IanIsSoAwesome",
    author_image_url: "/images/authors/ian.jpg",
  },
  {
    author_id: "nathan",
    author: "Nathan Clark",
    position: "",
    author_url: "https://twitter.com/nathanjclark",
    author_image_url: "",
  },
  {
    author_id: "roberto",
    author: "Roberto Huertas",
    position: "Software Engineer @ Datadog",
    author_url: "https://twitter.com/robertohuertasm",
    author_image_url: "",
  },
  {
    author_id: "sourabpramanik",
    author: "Sourab Pramanik",
    position: "",
    author_url: "https://twitter.com/_sourabpramanik",
    author_image_url: "https://github.com/sourabpramanik.png",
  },
  {
    author_id: "ivan",
    author: "Ivan Cernja",
    position: "",
    author_url: "https://twitter.com/cernjai",
    author_image_url: "",
  },
  {
    author_id: "jeff",
    author: "Jeff Mitchell",
    position: "",
    author_url: "https://jeff-mitchell.dev/",
    author_image_url: "",
  },
  {
    author_id: "mark",
    author: "Mark S.",
    position: "Software Engineer @ Shuttle",
    author_url: "",
    author_image_url: "/images/authors/mark.png",
  },
  {
    author_id: "jubril",
    author: "Jubril Oyetunji",
    position: "",
    author_url: "",
    author_image_url: "",
  },
  {
    author_id: "antithesis",
    author: "Antithesis",
    position: "",
    author_url: "",
    author_image_url: "",
  },
  {
    author_id: "dcodes",
    author: "dcodes",
    position: "DevRel @ Shuttle",
    author_url: "https://github.com/dcodesdev",
    author_image_url: "/images/authors/dcodes.png",
  },
  {
    author_id: "shaaz",
    author: "Shaaz Ahmed",
    position: "Head of Engineering @ Shuttle",
    author_url: "https://github.com/shaaza",
    author_image_url: "/images/authors/shaaz.png",
  },
  {
    author_id: "archie",
    author: "Archie Croft",
    position: "Product Manager - Console @ Shuttle",
    author_url: "https://github.com/archiecroft",
    author_image_url: "/images/authors/archie.png",
  },
];

export default authors;
