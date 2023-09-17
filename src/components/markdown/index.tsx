import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import ReactMarkdown from "react-markdown";
import styles from "./styles.module.css";

export function Markdown({ children }) {
  const MarkdownComponents: any = {
    code({ children, ...props }) {
      return (
        <SyntaxHighlighter style={oneDark} language="javascript" {...props}>
          {children}
        </SyntaxHighlighter>
      );
    },
  };

  return (
    <ReactMarkdown components={MarkdownComponents} className={styles.root}>
      {children}
    </ReactMarkdown>
  );
}
