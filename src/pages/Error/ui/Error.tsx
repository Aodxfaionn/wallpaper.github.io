import "./error.css";
import { LinkIn } from "shared/ui/Link/LinkIn";

const Error = () => {
  return (
    <div className="container error">
      <h1 className="error__title">404</h1>
      <p className="error__text">Страница не найдена</p>
      <LinkIn link="" text="Вернуться на главную" />
    </div>
  );
};

export default Error;
