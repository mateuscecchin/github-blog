import { ArticleList } from "./components/article-list";
import { ProfileCard } from "./components/profile-card";
import { Screen } from "../../components/screen";
import { TextInput } from "../../components/text-input";
import { useIssues, useUser } from "../../hooks/github";
import styles from "./styles.module.css";
import { useState } from "react";

export function Home() {
  const [filter, setFilter] = useState("");

  const { data: userData } = useUser();
  const { data: issuesData } = useIssues(filter);

  const user = userData?.data || {};
  const issues = issuesData?.data || [];

  const totalIssues = issues.total_count;
  const pubs = parsePubs(totalIssues);

  return (
    <Screen>
      <ProfileCard profile={user} />
      <div className={styles.search}>
        <div className={styles.search_header}>
          <h3>Publicações</h3>
          <span>{pubs ?? 0}</span>
        </div>
        <TextInput
          name="publish"
          placeholder="Buscar conteúdo"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      </div>
      <ArticleList>
        {issues?.items?.map?.((item, index) => (
          <ArticleList.Item data={item} key={index} />
        ))}
      </ArticleList>
    </Screen>
  );
}

function parsePubs(totalIssues: number) {
  const pubs =
    totalIssues == 1
      ? `${totalIssues ?? 0} publicação`
      : `${totalIssues ?? 0} publicações`;

  return pubs;
}
