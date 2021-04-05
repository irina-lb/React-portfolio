import travel from "./img/person.png";
import adventure from "./img/animal.png";
import sport from "./img/object.png";
import travel2 from "./img/person1.png";
import adventure2 from "./img/animal1.png";
import sport2 from "./img/object1.png";

import {
  faPaintBrush,
  faGrinHearts,
  faPalette,
  faUserFriends,
} from "@fortawesome/free-solid-svg-icons";

export const WorkState = () => {
  return [
    {
      title: "People and places",
      mainImg: travel,
      secondaryImg: travel2,
      url: "/work/travel",
      awards: [
        {
          title: "Truly A masterpiece",
          description: "“I really love how it's looking”",
        },
        {
          title: "Fresh look on a brutal sport.",
          description: "“May I have one of this?”",
        },
        {
          title: "It’s great!!",
          description: "“This art is perfect!”",
        },
      ],
    },
    {
      title: "Your pets",
      mainImg: adventure,
      url: "/work/adventure",
      secondaryImg: adventure2,
      awards: [
        {
          title: "Truly A masterpiece",
          description: "“I really love how it's looking”",
        },
        {
          title: "Fresh look on a brutal sport.",
          description: "“May I have one of this?”",
        },
        {
          title: "It’s great!!",
          description: "“This art is perfect!”",
        },
      ],
    },
    {
      title: "Romantic style",
      mainImg: sport,
      url: "/work/sport",
      secondaryImg: sport2,
      awards: [
        {
          title: "Truly A masterpiece",
          description: "“I really love how it's looking”",
        },
        {
          title: "Fresh look.",
          description: "“May I have one of this?”",
        },
        {
          title: "It’s great!!",
          description: "“This art is perfect!”",
        },
      ],
    },
  ];
};

export const cards = [
  { icon: faPalette, title: "Originality", text: "Choose your stile!" },
  { icon: faUserFriends, title: "Quality", text: "I hear my clients!" },
  { icon: faPaintBrush, title: "Variety", text: "I love trying new! " },
  { icon: faGrinHearts, title: "Friendly", text: "Treat me like a friend!" },
];

export const questions = [
  {
    question: "How do I start?",
    firstParagraph: "My hobby = My work",
    secondParagraph: "For the best result you should to do what you like.",
  },
  {
    question: "Daily Schedule",
    firstParagraph: "Creating every day",
    secondParagraph: "Daily improving of the skills.",
  },
  {
    question: "Different Payment",
    firstParagraph: "Cash or Cards",
    secondParagraph: "Choose what is most comfortable for you.",
  },
  {
    question: "What products we offer?",
    firstParagraph: "Illustration,photos ",
    secondParagraph: "We can check any your creative idea.",
  },
];
