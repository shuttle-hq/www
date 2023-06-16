import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { generateReadingTime } from '../helpers'
import { MDXRemoteSerializeResult } from 'next-mdx-remote'

const ISSUE_DIRECTORY = path.join(process.cwd(), '_launchpad')

export interface Issue {
  readonly slug?: string
  readonly title: string
  readonly date: string
  readonly cover?: string
  readonly caption?: string
  readonly coverAspectRatio?: string
  readonly author?: string
  readonly author_url?: string
  readonly excerpt?: string
  readonly ogImage?: {
    readonly url: string
  }
  readonly content?: MDXRemoteSerializeResult<Record<string, unknown>>
  readonly toc?: MDXRemoteSerializeResult<Record<string, unknown>>
  readonly thumb: string
  readonly image?: string
  readonly readingTime?: string
  readonly description: string
  readonly url: string
  readonly tags?: string[]
  readonly logo?: string
  readonly hideAuthor?: boolean
}

export function getSortedIssues(limit?: number, tags?: readonly string[]): Issue[] {
  //Reads all the files in the issue directory
  const fileNames = fs.readdirSync(ISSUE_DIRECTORY)

  // categories stored in this array

  let allIssueData: Issue[] = fileNames.map((filename) => {
    const slug = filename.replace('.mdx', '')

    const fullPath = path.join(ISSUE_DIRECTORY, filename)

    //Extracts contents of the MDX file
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)
    const options: Intl.DateTimeFormatOptions = {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    }
    const formattedDate = new Date(data.date).toLocaleDateString('en-IN', options)

    const readingTime = generateReadingTime(content)

    return {
      ...data,
      date: formattedDate,
      readingTime,
      url: slug,
      slug,
    } as Issue
  })

  allIssueData = allIssueData.sort((a, b) => {
    if (new Date(a.date) < new Date(b.date)) {
      return 1
    } else {
      return -1
    }
  })

  if (tags) {
    allIssueData = allIssueData.filter((issue) => {
      const found = tags.some((tag) => (issue?.tags || []).includes(tag))
      return found
    })
  }

  if (limit) allIssueData = allIssueData.slice(0, limit)

  return allIssueData
}

// Get Slugs
export const getAllIssueSlugs = () => {
  const fileNames = fs.readdirSync(ISSUE_DIRECTORY)

  const files = fileNames.map((filename) => {
    return {
      params: {
        slug: filename.replace('.mdx', ''),
      },
    }
  })

  return files
}

// Get Issue based on Slug
export const getIssueData = async (slug: string) => {
  const fullPath = path.join(ISSUE_DIRECTORY, `${slug}.mdx`)

  const issueContent = fs.readFileSync(fullPath, 'utf8')

  return issueContent
}

export function getAllTags(): string[] {
  const issues = getSortedIssues()

  const tags = issues.reduce(
    (acc: string[], issue) => {
      ; (issue?.tags || []).map((tag: string) => {
        if (!acc.includes(tag)) return acc.push(tag)
      })
      return acc
    },
    ['all']
  )

  return tags
}
