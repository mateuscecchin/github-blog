import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBuilding, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { Link } from "../../../../components/link";
import { Card } from "../../../../components/card";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

interface Props {
  profile: Profile;
}

interface Profile {
  avatar_url: string;
  html_url: string;
  name: string;
  followers: number;
  login: string;
  company: string;
  bio: string;
}

export function ProfileCard({ profile }: Props) {
  const { avatar_url, name, bio, login, company, followers, html_url } =
    profile;

  return (
    <Card>
      <Card.Image src={avatar_url} />
      <Card.Content>
        <Card.Header>
          <Card.Title>{name}</Card.Title>

          <Link href={html_url} target="_blank">
            <Link.Label>GITHUB</Link.Label>
            <Link.Icon icon={faArrowUpRightFromSquare} />
          </Link>
        </Card.Header>
        <Card.ContentDescription>{bio || "No bio"}</Card.ContentDescription>
        <Card.TagList>
          <Card.TagItem icon={faGithub}>{login ?? "???"}</Card.TagItem>
          <Card.TagItem icon={faBuilding}>
            {company ?? "None company"}
          </Card.TagItem>
          <Card.TagItem icon={faUserGroup}>
            {`${followers} seguidores` ?? "???"}
          </Card.TagItem>
        </Card.TagList>
      </Card.Content>
    </Card>
  );
}
