import { useQuery } from "@tanstack/react-query";
import { api } from "../libs/axios";

export function useUser() {
  const query = useQuery(
    ["user"],
    async () => await api.get("/users/mateuscecchin")
  );
  return query;
}

export function useIssues(filter) {
  const query = useQuery(
    ["issues", { filter }],
    async () =>
      await api.get(`search/issues?q=${filter} repo:mateuscecchin/github-blog`)
  );
  return query;
}

export function useIssueById(id: number) {
  const query = useQuery(
    ["issues-by-id", { id }],
    async () => await api.get(`repos/mateuscecchin/github-blog/issues/${id}`)
  );
  return query;
}
