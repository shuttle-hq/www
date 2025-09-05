import type { Issue } from "lib/launchpad/issues";
import Link from "components/elements/Link";
import { FC } from "react";

interface IssueProps {
  issues: Issue[];
}

const LaunchpadIssues: FC<IssueProps> = ({ issues }) => {
  return (
    <div className="mt-16 flex w-full flex-col lg:mx-auto lg:mt-20  lg:max-w-7xl lg:px-10">
      <h1 className="mb-16 text-[56px] font-bold text-head">
        Shuttle Launchpad
      </h1>

      <p className="my-6 text-body">
        Dive into previous Launchpad issues that empower you with in-depth
        knowledge of Rust concepts while building real-world web applications.
      </p>
      <div className="mt-5 px-5">
        {issues.map((issue, idx) => (
          <Issue key={issue.slug} idx={idx} issue={issue} />
        ))}
      </div>
    </div>
  );
};

export function Issue({ issue, idx }: { idx: number; issue: Issue }) {
  return (
    <div
      className={`flex justify-between gap-4 border-b border-[#1A1A1A] py-5 ${idx === 0 && "border-t"}`}
    >
      <div className="flex gap-4">
        <Link
          href={`/launchpad/issues/${issue.url}`}
          eventName={`launchpad_issue_${issue.title}`}
        >
          <h2 className="text-xl text-head">{issue.title}</h2>
        </Link>
      </div>

      <p className="text-body">{issue.date}</p>
    </div>
  );
}

export default LaunchpadIssues;
