import Base64Article from "./articles/base64";
import BcryptArticle from "./articles/bcrypt";
import GUIDArticle from "./articles/guid";
import HashArticle from "./articles/hash";

const data = [
  {
    title: "What is a hash?",
    text: <HashArticle/>,
  },
  {
    title: "What is a GUID?",
    text: <GUIDArticle/>,
  },
  {
    title: "What is Base64?",
    text: <Base64Article/>,
  },
  {
    title: "What is Bcrypt?",
    text: <BcryptArticle/>,
  },
];

export default data;
