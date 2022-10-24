import React from "react";
import styles from "./PageLink.style";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

function PageLink({ to, name }: { to: string; name: string }) {
  const classes = styles();

  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <Link
      to={to}
      className={`${classes.header__link} ${
        match && classes.header__link_selected
      }`}
    >
      {name}
    </Link>
  );
}

export default PageLink;
