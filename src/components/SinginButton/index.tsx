import React from "react";
import { FaGithub } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import styles from "./style.module.scss";

export function SingInButton() {
  const isUserLoggedIn = true;

  return isUserLoggedIn ? (
    <>
      <button type="button" className={styles.signInButton}>
        <FaGithub color="#04d361" />
        Caio silva
        <FiX color="#737380" className={styles.closeIcon} />
      </button>
    </>
  ) : (
    <>
      <button type="button" className={styles.signInButton}>
        <FaGithub color="#eba417" />
        Sign in With GitHub
      </button>
    </>
  );
}
