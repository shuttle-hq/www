import { Description, Form, Waitlist } from 'components/sections/Launchpad'
import LaunchpadIssues, { Issue } from 'components/sections/Launchpad/LaunchpadIssues'
import { getAllTags, getSortedIssues } from 'lib/launchpad/issues'
import { GetStaticPropsResult } from 'next'
import Link from 'next/link'

export async function getStaticProps(): Promise<GetStaticPropsResult<Props>> {
  const issues = getSortedIssues(0)
  console.log('issues:', issues)

  return {
    props: {
      issues,
    },
  }
}

interface Props {
  readonly issues: ReturnType<typeof getSortedIssues>
}

export default function Launchpad(props: Props) {
  const { issues = [] } = props

  console.log('issues:', issues)

  return (
    <>
      <Form />
      <Description />
      <section className='relative mx-auto max-w-[600px] px-5 pb-28 pt-28 sm:px-10'>
        <h1 className='mb-4 text-[32px] font-bold text-[#C2C2C2]'>Past issues</h1>
        <p className='mb-[40px]'>
          For our upcoming issues, we have some exciting project ideas lined up for you, such as an
          e-commerce application that performs safe transactions with a payment provider and an Activity
          Pub Client. Each project takes you from basics to advanced concepts.
        </p>

        {issues.slice(0, 5).map((issue, idx) => (
          <Issue key={issue.slug} idx={idx} issue={issue} />
        ))}

        <Link href='/launchpad/issues'>
          <p className='mt-4 text-right text-[#7A7A7A]'>
            See More <span className='ml-4'>→</span>
          </p>
        </Link>
      </section>
      <Waitlist
        cta='Start your journey now'
        description='The Shuttle Launchpad newsletter is meant to run for multiple issues with no defined end, ensuring you always have new material to keep learning, staying up to date with the ever-changing Rust ecosystem.'
        subDescription='Join hundreds of developers on their journey'
      />
    </>
  )
}
