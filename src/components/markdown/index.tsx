import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";
import ReactMarkdown from "react-markdown";

export function Markdown({ children }) {
  const MarkdownComponents: any = {
    code({ node, inline, className, ...props }) {
      return (
        <SyntaxHighlighter style={dracula} language="javascript" {...props} />
      );
    },
  };

  return (
    <ReactMarkdown components={MarkdownComponents}>{children}</ReactMarkdown>
  );
}
