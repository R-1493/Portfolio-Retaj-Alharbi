import {
  Img1,
  Img2,
  Img3,
  Img4,
  R2T1,
  R2T2,
  R2T3,
  R2T4,
  R2T,
  space,
  space1,
  space2,
  space3,
  Tanznaite,
} from "../utils";

const projects = [
  {
    id: 1,
    mediaList: [
      {
        type: "video",
        src: Tanznaite,
      },
      {
        type: "image",
        src: Img1,
      },
      {
        type: "image",
        src: Img2,
      },
      {
        type: "image",
        src: Img2,
      },
      {
        type: "image",
        src: Img4,
      },
    ],
    title: "Tanznaite Project",
    desc: "C#, ASP.NET, React (Vite), Tailwind CSS, PostgreSQL",
    frontend: "https://github.com/R-1493/Tanznite-Frontend",
    backend: "https://github.com/R-1493/Tanznite-Backend-",
  },
  {
    id: 2,
    mediaList: [
      {
        type: "video",
        src: R2T,
      },
      {
        type: "image",
        src: R2T3,
      },
      {
        type: "image",
        src: R2T1,
      },
      {
        type: "image",
        src: R2T4,
      },
      {
        type: "image",
        src: R2T2,
      },
    ],
    title: "R2T ",
    desc: "Python, Dart, Django, Flutter, SQLite",
    frontend: "https://github.com/R-1493/R2T-communication-app",
    backend: "https://github.com/R-1493/R2T-Website",
  },
  {
    id: 3,
    mediaList: [
      {
        type: "video",
        src: space,
      },
      {
        type: "image",
        src: space1,
      },
      {
        type: "image",
        src: space2,
      },
      {
        type: "image",
        src: space3,
      },
    ],
    title: "space ",
    desc: "Html, JavaScript, CSS",
    frontend: "https://github.com/R-1493/Space-website",
  },
];

export default projects;
