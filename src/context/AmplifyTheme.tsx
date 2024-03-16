import AmplifyContext from "./AmplifyContext";
import { ThemeProvider } from "./ThemeContext";

export default function AmplifyTheme({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AmplifyContext>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange={false}
      >
        {children}
      </ThemeProvider>
    </AmplifyContext>
  );
}
