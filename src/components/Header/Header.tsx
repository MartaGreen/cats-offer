import React from "react";
import styles from "./Header.style";

import { useSelector } from "react-redux";
import StoreType from "../../types/store.type";

import PageLink from "./PageLink/PageLink";

function Header({ title }: { title: string }) {
  const classes = styles();
  const cartStorage = useSelector((storage: StoreType) => storage.cart);

  type PageType = {
    path: string;
    name: string;
  };
  const pages: PageType[] = [
    {
      path: "/",
      name: "Catalog",
    },
    {
      path: "/cart",
      name: `Cart (${cartStorage.length})`,
    },
    {
      path: "/admin",
      name: "Admin access",
    },
  ];

  return (
    <header className={classes.header}>
      <h1 className={classes.header__title}>{title}</h1>
      <nav className={classes.header__nav}>
        {pages.map((page) => (
          <PageLink to={page.path} name={page.name} />
        ))}
      </nav>
    </header>
  );
}

export default Header;
