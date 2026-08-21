/** @type {import('next').NextConfig} */

const isGithubPages = process.env.GITHUB_PAGES === "true"

// Auto-detect the repo name from the GitHub Actions environment.
// GITHUB_REPOSITORY is "owner/repo" during CI, so we grab the "repo" part.
// This means links/assets resolve correctly no matter what your repo is named.
// If your repo IS a user/org page (named "<username>.github.io"), it is served
// from the root, so we leave the basePath empty in that case.
const ghRepo = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? ""
const isUserPage = ghRepo.endsWith(".github.io")
const repoName = isUserPage ? "" : ghRepo

const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  output: "export",
  basePath: isGithubPages && repoName ? `/${repoName}` : "",
  assetPrefix: isGithubPages && repoName ? `/${repoName}/` : "",
  env: {
    NEXT_PUBLIC_BASE_PATH: isGithubPages && repoName ? `/${repoName}` : "",
  },
}

export default nextConfig
