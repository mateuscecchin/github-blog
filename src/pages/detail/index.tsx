import { useParams } from "react-router-dom";
import { Screen } from "../../components/screen";
import { useIssueById } from "../../hooks/github";
import { Markdown } from "../../components/markdown";
import { PubCard } from "./components/pub-card";
import styles from "./style.module.css";
import { Loading } from "../../components/loading";

export function Detail() {
  const { idIssue } = useParams();

  const { data: issueData, isLoading } = useIssueById(Number(idIssue));
  const issue = issueData?.data;

  if (isLoading) return <Loading />;

  return (
    <Screen>
      <PubCard
        title={issue?.title}
        login={issue?.user?.login}
        comments={issue?.comments}
        createdAt={issue?.created_at}
        html_url={issue?.html_url}
      />
      <div className={styles.content}>
        <Markdown>{issue?.body}</Markdown>
      </div>
    </Screen>
  );
}
