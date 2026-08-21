import type { BlogPost } from './blog-data'

export function generateBlogPostStructuredData(post: BlogPost, url: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: `${url}/og-images/${post.slug}.png`,
    datePublished: new Date(post.date).toISOString(),
    dateModified: new Date(post.date).toISOString(),
    author: {
      '@type': 'Person',
      name: post.author.name,
      url: 'https://github.com/yashraj-personal',
    },
    publisher: {
      '@type': 'Person',
      name: 'Yash Raj',
      url: 'https://yashraj.dev',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${url}/blog/${post.slug}`,
    },
    articleSection: post.category,
    keywords: post.tags.join(', '),
    timeRequired: post.readTime,
  }
}

export function generateWebsiteStructuredData(url: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Yash Raj',
    description: "Breaking systems to understand them, building defenses to protect them. Portfolio of Yash Raj — cybersecurity enthusiast and AI/ML explorer.",
    url: url,
    author: {
      '@type': 'Person',
      name: 'Yash Raj',
      url: 'https://github.com/yashraj-personal',
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${url}/blog?search={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  }
}

export function generatePersonStructuredData() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Yash Raj',
    url: 'https://yashraj.dev',
    image: '/images/yash-raj.jpg',
    sameAs: [
      'https://github.com/yashraj-personal',
      'https://www.linkedin.com/in/yash-raj-2368b13a1',
      'https://www.instagram.com/yash.raj_3189',
    ],
    jobTitle: 'Cybersecurity Enthusiast',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Gaya',
      addressRegion: 'Bihar',
      addressCountry: 'IN',
    },
  }
}

export function generateBreadcrumbStructuredData(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}
