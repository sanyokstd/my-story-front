"use client";
import Image from "next/image";
import { Stack, Container, Button } from "@mui/material";
import s from "./style.module.scss";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const isAuth = false;

  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e: any) => {
    setSearchTerm(e.target.value);
  };

  return (
    <header className={s.header}>
      <Container maxWidth="lg">
        <Stack
          spacing={2}
          justifyContent="space-between"
          direction="row"
          alignItems="center"
        >
          <div className={s.logo}>
            <Link href="/" className={s.logo__wrap}>
              <Image
                src="/assets/img/logo.svg"
                width={40}
                height={40}
                alt="Logo"
                priority
              />
            </Link>
            <div className={s.logo__name}>Моя історія</div>
          </div>
          <Stack spacing={2}>
            <Link href="/auth">
              <Button variant="contained" size="large">
                Стати автором
              </Button>
            </Link>
          </Stack>
        </Stack>
      </Container>
    </header>
  );
};

export default Header;
