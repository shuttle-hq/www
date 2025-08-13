import userStoriesStyles from "../../../pages/customers/UserStories.module.css";

export const UserQuote = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <blockquote
      className={`w-full mx-auto px-16 py-14 rounded-3xl ${userStoriesStyles["bg-wide"]} ${className}`}
    >
      {children}
    </blockquote>
  );
};
