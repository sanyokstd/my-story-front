"use client";

import MainIcon from "assets/img/main-pen.svg";
import ReactTypingEffect from "react-typing-effect";
import { Container, Button } from "@mui/material";
import s from "./style.module.scss";
import Link from "next/link";

const Main = () => (
  <main className={s.main}>
    <div className={s.first}>
      <Container maxWidth="lg">
        <h1>
          <ReactTypingEffect
            speed={200}
            eraseSpeed={100}
            cursorClassName={s.cursor}
            cursorRenderer={(cursor) => <MainIcon width={40} height={40} />}
            text={["Моя історія"]}
          />
        </h1>
        <div className={s.text}>
          Ласкаво просимо на наш веб-сайт для письменників!
        </div>
        <div className={s.text}>
          Ми тут, щоб надихнути вас на розкриття ваших талантів і подарувати вам
          платформу для самовираження. Ви можете опублікувати свої розповіді,
          виразити свої думки та ідеї у власних словах.
        </div>
        <div className={s.text}>
          Приєднуйтеся до нашої спільноти, де кожен письменник - незалежно від
          досвіду - отримає можливість знайти свій голос, надихнутися та
          вдосконалити своє мистецтво слова.
        </div>
        <Link href="/auth" className={s.link}>
          <Button variant="contained" size="large">
            Стати автором
          </Button>
        </Link>
      </Container>
    </div>
  </main>
);

export default Main;
