/** @type {import('next').NextConfig} */

// If you deploy to https://<username>.github.io/<repo-name>/ (a project page),
// set this to your repo name so all links/assets resolve correctly.
// If you deploy to https://<username>.github.io/ (a user/org page), leave it as "".
const repoName = "my-portfolio" // <-- change this to your GitHub repo name
const isGithubPages = process.env.GITHUB_PAGES === "true"

const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  output: "export",
  basePath: isGithubPages ? `/${repoName}` : "",
  assetPrefix: isGithubPages ? `/${repoName}/` : "",
}

export default nextConfig
