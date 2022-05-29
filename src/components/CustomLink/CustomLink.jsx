import styles from "./CustomLink.module.scss";
import { Link, useMatch } from "react-router-dom";
import * as cx from "classnames";

export default function CustomLink(props) {
  const match = useMatch(props.to);
  const classLink = cx(styles.Link, {
    [styles.Link_active]: match,
  });
  return (
    <Link className={classLink} to={props.to}>
      {props.children}
    </Link>
  );
}
