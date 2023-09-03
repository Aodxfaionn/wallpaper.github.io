import "./article.css";
import {
  FacebookShareButton,
  OKShareButton,
  TwitterShareButton,
  VKShareButton,
} from "react-share";

type Props = {
  img: string;
  title: string;
  children: React.ReactElement | React.ReactNode[];
};

const Article = ({ img, title, children }: Props) => {
  return (
    <section className="container oneArticle">
      <img src={img} alt="Article" />
      <h2 className="title">{title}</h2>
      {children}
    </section>
  );
};

export default Article;
