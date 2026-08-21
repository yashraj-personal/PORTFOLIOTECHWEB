const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ""

export function assetPath(path: string) {
  return `${basePath}${path.startsWith("/") ? path : `/${path}`}`
}

export const portfolioImages = {
  logo: assetPath("/images/logo-orb.jpg"),
  portrait: assetPath("/images/yash-raj.jpg"),
  stats: assetPath("/images/butcher-pfp.png"),
} as const

export default assetPath
