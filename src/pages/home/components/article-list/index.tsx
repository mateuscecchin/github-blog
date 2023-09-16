import { PropsWithChildren } from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import {
  differenceInDays,
  differenceInHours,
  formatHumanDate,
  getTimeAgoAndHumanDate,
} from "../../../../utils/date-utils";
import { Markdown } from "../../../../components/markdown";

interface ItemProps {
  data: { title: string; created_at: string; body: string; number: number };
}

function Root({ children }: PropsWithChildren) {
  return <ul className={styles.root}>{children}</ul>;
}

function Item({ data }: ItemProps) {
  const { title, created_at, body, number } = data;

  const createdAtParsed = new Date(created_at);
  const { timeAgo, humanDate } = getTimeAgoAndHumanDate(createdAtParsed);

  const description = removeCodeHighlight(body);

  return (
    <li>
      <Link to={`/${number}`} className={styles.link}>
        <article className={styles.item}>
          <header>
            <h1>{title}</h1>
            <time title={humanDate} dateTime={created_at}>
              {timeAgo}
            </time>
          </header>
          <Markdown>{description}</Markdown>
        </article>
      </Link>
    </li>
  );
}

function removeCodeHighlight(data: string) {
  return data.replace(/```([\s\S]*?)```/g, "");
}

export const ArticleList = Object.assign(Root, { Root, Item });
