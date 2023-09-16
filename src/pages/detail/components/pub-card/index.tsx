import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faArrowUpRightFromSquare,
  faChevronLeft,
  faCalendarDay,
  faComment,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "../../../../components/link";
import { Card } from "../../../../components/card";
import { getTimeAgoAndHumanDate } from "../../../../utils/date-utils";
import { useNavigate } from "react-router-dom";

interface Props {
  title: string;
  comments: number;
  login: string;
  html_url: string;
  createdAt: string;
}

export function PubCard({
  login,
  title,
  comments,
  html_url,
  createdAt,
}: Props) {
  const navigate = useNavigate();
  const createdAtParsed = new Date(createdAt);
  const { timeAgo, humanDate } = getTimeAgoAndHumanDate(createdAtParsed);

  return (
    <Card>
      <Card.Content>
        <Card.Header>
          <Link>
            <Link.Icon icon={faChevronLeft} />
            <Link.Label onClick={() => navigate(-1)}>VOLTAR</Link.Label>
          </Link>
          <Link href={html_url} target="_blank">
            <Link.Label>VER NO GITHUB</Link.Label>
            <Link.Icon icon={faArrowUpRightFromSquare} />
          </Link>
        </Card.Header>
        <Card.Title>{title}</Card.Title>
        <Card.TagList>
          <Card.TagItem icon={faGithub}>{login ?? "???"}</Card.TagItem>
          <Card.TagItem icon={faCalendarDay}>
            <time title={humanDate} dateTime={createdAt}>
              {timeAgo}
            </time>
          </Card.TagItem>
          <Card.TagItem icon={faComment}>
            {parseComments(comments) ?? "???"}
          </Card.TagItem>
        </Card.TagList>
      </Card.Content>
    </Card>
  );
}

function parseComments(comments) {
  if (comments == 1) {
    return `${comments} comentário`;
  }

  return `${comments} comentários`;
}
