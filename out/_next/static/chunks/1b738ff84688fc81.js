(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,78945,23750,e=>{"use strict";let t=(0,e.i(24398).default)("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);e.s(["Search",()=>t],78945);var r=e.i(65827),a=e.i(47163);function n({className:e,type:t,...n}){return(0,r.jsx)("input",{type:t,"data-slot":"input",className:(0,a.cn)("file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm","focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]","aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",e),...n})}e.s(["Input",()=>n],23750)},87025,e=>{"use strict";let t=(0,e.i(24398).default)("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);e.s(["Calendar",()=>t],87025)},37300,e=>{"use strict";let t=(0,e.i(24398).default)("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);e.s(["ArrowRight",()=>t],37300)},13566,e=>{"use strict";let t=(0,e.i(24398).default)("Tag",[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]]);e.s(["Tag",()=>t],13566)},18986,e=>{"use strict";let t=(0,e.i(24398).default)("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);e.s(["Clock",()=>t],18986)},65273,e=>{"use strict";var t=e.i(68645);function r(e,t){if("function"==typeof e)return e(t);null!=e&&(e.current=t)}var a=e.i(65827),n=t.forwardRef((e,r)=>{let{children:n,...i}=e,l=t.Children.toArray(n),c=l.find(o);if(c){let e=c.props.children,n=l.map(r=>r!==c?r:t.Children.count(e)>1?t.Children.only(null):t.isValidElement(e)?e.props.children:null);return(0,a.jsx)(s,{...i,ref:r,children:t.isValidElement(e)?t.cloneElement(e,void 0,n):null})}return(0,a.jsx)(s,{...i,ref:r,children:n})});n.displayName="Slot";var s=t.forwardRef((e,a)=>{let{children:n,...s}=e;if(t.isValidElement(n)){var i;let e,o,l=(i=n,(o=(e=Object.getOwnPropertyDescriptor(i.props,"ref")?.get)&&"isReactWarning"in e&&e.isReactWarning)?i.ref:(o=(e=Object.getOwnPropertyDescriptor(i,"ref")?.get)&&"isReactWarning"in e&&e.isReactWarning)?i.props.ref:i.props.ref||i.ref);return t.cloneElement(n,{...function(e,t){let r={...t};for(let a in t){let n=e[a],s=t[a];/^on[A-Z]/.test(a)?n&&s?r[a]=(...e)=>{s(...e),n(...e)}:n&&(r[a]=n):"style"===a?r[a]={...n,...s}:"className"===a&&(r[a]=[n,s].filter(Boolean).join(" "))}return{...e,...r}}(s,n.props),ref:a?function(...e){return t=>{let a=!1,n=e.map(e=>{let n=r(e,t);return a||"function"!=typeof n||(a=!0),n});if(a)return()=>{for(let t=0;t<n.length;t++){let a=n[t];"function"==typeof a?a():r(e[t],null)}}}}(a,l):l})}return t.Children.count(n)>1?t.Children.only(null):null});s.displayName="SlotClone";var i=({children:e})=>(0,a.jsx)(a.Fragment,{children:e});function o(e){return t.isValidElement(e)&&e.type===i}e.s(["Slot",()=>n],65273)},63270,77958,e=>{"use strict";var t=e.i(65827),r=e.i(68645),a=globalThis?.document?r.useLayoutEffect:()=>{};e.i(38868);var n=e.i(65273),s=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,a)=>{let s=r.forwardRef((e,r)=>{let{asChild:s,...i}=e,o=s?n.Slot:a;return"undefined"!=typeof window&&(window[Symbol.for("radix-ui")]=!0),(0,t.jsx)(o,{...i,ref:r})});return s.displayName=`Primitive.${a}`,{...e,[a]:s}},{}),i="Avatar",[o,l]=function(e,a=[]){let n=[],s=()=>{let t=n.map(e=>r.createContext(e));return function(a){let n=a?.[e]||t;return r.useMemo(()=>({[`__scope${e}`]:{...a,[e]:n}}),[a,n])}};return s.scopeName=e,[function(a,s){let i=r.createContext(s),o=n.length;n=[...n,s];let l=a=>{let{scope:n,children:s,...l}=a,c=n?.[e]?.[o]||i,d=r.useMemo(()=>l,Object.values(l));return(0,t.jsx)(c.Provider,{value:d,children:s})};return l.displayName=a+"Provider",[l,function(t,n){let l=n?.[e]?.[o]||i,c=r.useContext(l);if(c)return c;if(void 0!==s)return s;throw Error(`\`${t}\` must be used within \`${a}\``)}]},function(...e){let t=e[0];if(1===e.length)return t;let a=()=>{let a=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let n=a.reduce((t,{useScope:r,scopeName:a})=>{let n=r(e)[`__scope${a}`];return{...t,...n}},{});return r.useMemo(()=>({[`__scope${t.scopeName}`]:n}),[n])}};return a.scopeName=t.scopeName,a}(s,...a)]}(i),[c,d]=o(i),u=r.forwardRef((e,a)=>{let{__scopeAvatar:n,...i}=e,[o,l]=r.useState("idle");return(0,t.jsx)(c,{scope:n,imageLoadingStatus:o,onImageLoadingStatusChange:l,children:(0,t.jsx)(s.span,{...i,ref:a})})});u.displayName=i;var m="AvatarImage",p=r.forwardRef((e,n)=>{var i;let o,{__scopeAvatar:l,src:c,onLoadingStatusChange:u=()=>{},...p}=e,g=d(m,l),f=function(e,t){let[n,s]=r.useState("idle");return a(()=>{if(!e)return void s("error");let r=!0,a=new window.Image,n=e=>()=>{r&&s(e)};return s("loading"),a.onload=n("loaded"),a.onerror=n("error"),a.src=e,t&&(a.referrerPolicy=t),()=>{r=!1}},[e,t]),n}(c,p.referrerPolicy),h=(i=e=>{u(e),g.onImageLoadingStatusChange(e)},o=r.useRef(i),r.useEffect(()=>{o.current=i}),r.useMemo(()=>(...e)=>o.current?.(...e),[]));return a(()=>{"idle"!==f&&h(f)},[f,h]),"loaded"===f?(0,t.jsx)(s.img,{...p,ref:n,src:c}):null});p.displayName=m;var g="AvatarFallback",f=r.forwardRef((e,a)=>{let{__scopeAvatar:n,delayMs:i,...o}=e,l=d(g,n),[c,u]=r.useState(void 0===i);return r.useEffect(()=>{if(void 0!==i){let e=window.setTimeout(()=>u(!0),i);return()=>window.clearTimeout(e)}},[i]),c&&"loaded"!==l.imageLoadingStatus?(0,t.jsx)(s.span,{...o,ref:a}):null});f.displayName=g;var h=e.i(47163);function y({className:e,...r}){return(0,t.jsx)(u,{"data-slot":"avatar",className:(0,h.cn)("relative flex size-8 shrink-0 overflow-hidden rounded-full",e),...r})}function v({className:e,...r}){return(0,t.jsx)(p,{"data-slot":"avatar-image",className:(0,h.cn)("aspect-square size-full",e),...r})}function b({className:e,...r}){return(0,t.jsx)(f,{"data-slot":"avatar-fallback",className:(0,h.cn)("bg-muted flex size-full items-center justify-center rounded-full",e),...r})}e.s(["Avatar",()=>y,"AvatarFallback",()=>b,"AvatarImage",()=>v],63270);let x=[{id:2,slug:"mcp-protocol-llm-applications",title:"MCP Protocol in LLM Applications",excerpt:"Implementing Model Context Protocol for seamless AI model interactions with vector databases in RAG applications. Building smarter conversational systems.",content:`
## What is MCP?

The Model Context Protocol (MCP) is an emerging standard for managing context in Large Language Model applications. It provides a structured way to handle conversation history, external knowledge, and tool interactions.

## Why MCP Matters for RAG

Retrieval-Augmented Generation (RAG) applications face a fundamental challenge: how do you efficiently combine retrieved documents with conversation context while staying within token limits?

MCP solves this with:
- **Context Windows**: Structured management of what the model "sees"
- **Priority Queues**: Important context stays, less relevant context is pruned
- **Streaming Updates**: Real-time context modification during generation

## Implementation with Vector Databases

Here's how to integrate MCP with a vector database like Pinecone:

\`\`\`typescript
import { MCPClient } from '@mcp/core';
import { PineconeClient } from '@pinecone-database/pinecone';

const mcp = new MCPClient({
  maxTokens: 8192,
  strategy: 'sliding-window'
});

async function queryWithContext(query: string) {
  const embeddings = await generateEmbedding(query);
  const results = await pinecone.query({
    vector: embeddings,
    topK: 5
  });

  mcp.addContext({
    type: 'retrieved',
    priority: 'high',
    content: results.matches.map(m => m.metadata.text)
  });

  return mcp.generate(query);
}
\`\`\`

## Best Practices

1. **Prioritize Recent Context**: User's last few messages should have highest priority
2. **Chunk Retrieved Documents**: Don't dump entire documents; use relevant sections
3. **Monitor Token Usage**: Always leave headroom for the model's response
4. **Cache Embeddings**: Recompute only when necessary

## Conclusion

MCP provides the structure needed to build production-grade RAG applications. As LLMs become more capable, efficient context management becomes the differentiator between good and great AI products.
    `,date:"Apr 28, 2025",readTime:"8 min read",category:"ai",tags:["llm","rag","mcp"],author:{name:"Ehsan Ghaffar",avatar:"/developer-portrait.png",role:"Software Engineer"},featured:!1,color:"from-purple-500/20 to-pink-500/20"},{id:3,slug:"nextjs-16-tailwind-v4-migration",title:"Next.js 16 + Tailwind CSS v4 Migration Guide",excerpt:"Exploring the new features in Next.js 16 and migrating to Tailwind CSS v4's new configuration system. A practical guide to modern frontend tooling.",content:`
## What's New in Next.js 16

Next.js 16 brings significant changes that improve both developer experience and application performance:

### Turbopack as Default

Turbopack is now the default bundler, offering near-instant hot module replacement:

\`\`\`bash
# No configuration needed - it's automatic!
npm run dev
\`\`\`

### Cache Components with "use cache"

The new directive makes caching explicit and flexible:

\`\`\`tsx
'use cache'

export default async function ProductPage({ id }) {
  const product = await fetchProduct(id);
  return <ProductDisplay product={product} />;
}
\`\`\`

## Migrating to Tailwind CSS v4

Tailwind v4 introduces a CSS-first configuration approach:

### Before (tailwind.config.js)

\`\`\`javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        brand: '#3b82f6'
      }
    }
  }
}
\`\`\`

### After (globals.css)

\`\`\`css
@import 'tailwindcss';

@theme inline {
  --color-brand: #3b82f6;
  --font-sans: 'Inter', sans-serif;
}
\`\`\`

## Step-by-Step Migration

1. **Update dependencies**:
\`\`\`bash
npm install next@16 tailwindcss@4
\`\`\`

2. **Remove tailwind.config.js** and move configuration to CSS

3. **Update font imports** in layout.tsx

4. **Test thoroughly** - some utility classes may have changed

## Common Gotchas

- \`@apply\` works differently in v4
- Custom plugins need updates
- Some deprecated utilities are removed

## Conclusion

The migration takes effort but the improved DX and performance are worth it. Start with a fresh branch and migrate incrementally.
    `,date:"Dec 10, 2024",readTime:"10 min read",category:"frontend",tags:["nextjs","tailwind","react"],author:{name:"Ehsan Ghaffar",avatar:"/developer-portrait.png",role:"Software Engineer"},featured:!0,color:"from-primary/20 to-emerald-500/20"},{id:4,slug:"self-hosting-llms-fastapi",title:"Self-Hosting LLMs with FastAPI",excerpt:"Running Llama2 locally and building a personal chatbot API for natural language tasks. Complete guide from model setup to production deployment.",content:`
## Why Self-Host?

Self-hosting LLMs gives you complete control over your AI infrastructure:
- **Privacy**: Data never leaves your servers
- **Cost**: No per-token charges after initial setup
- **Customization**: Fine-tune for your specific use case

## Hardware Requirements

For Llama2-7B:
- 16GB+ RAM
- NVIDIA GPU with 8GB+ VRAM (or CPU with patience)
- 50GB disk space

## Setting Up the Environment

\`\`\`bash
python -m venv llm-env
source llm-env/bin/activate
pip install torch transformers fastapi uvicorn
\`\`\`

## Loading the Model

\`\`\`python
from transformers import AutoTokenizer, AutoModelForCausalLM
import torch

model_id = "meta-llama/Llama-2-7b-chat-hf"
tokenizer = AutoTokenizer.from_pretrained(model_id)
model = AutoModelForCausalLM.from_pretrained(
    model_id,
    torch_dtype=torch.float16,
    device_map="auto"
)
\`\`\`

## Building the FastAPI Server

\`\`\`python
from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class ChatRequest(BaseModel):
    message: str
    max_tokens: int = 256

@app.post("/chat")
async def chat(request: ChatRequest):
    inputs = tokenizer(request.message, return_tensors="pt")
    outputs = model.generate(**inputs, max_new_tokens=request.max_tokens)
    response = tokenizer.decode(outputs[0], skip_special_tokens=True)
    return {"response": response}
\`\`\`

## Production Deployment

Use Gunicorn with Uvicorn workers:

\`\`\`bash
gunicorn main:app -w 2 -k uvicorn.workers.UvicornWorker
\`\`\`

## Conclusion

You now have a private, scalable LLM API. Consider adding rate limiting, authentication, and monitoring for production use.
    `,date:"Oct 5, 2024",readTime:"15 min read",category:"ai",tags:["llm","python","fastapi"],author:{name:"Ehsan Ghaffar",avatar:"/developer-portrait.png",role:"Software Engineer"},featured:!1,color:"from-orange-500/20 to-amber-500/20"},{id:5,slug:"rust-wasm-performance",title:"Rust + WebAssembly Performance Deep Dive",excerpt:"Benchmarking Rust compiled to WebAssembly vs native JavaScript. When does WASM shine and when to stick with JS?",content:`
## The Performance Question

WebAssembly promises near-native performance in the browser. But is it always faster than JavaScript? Let's find out with real benchmarks.

## Test Setup

We'll compare three scenarios:
1. Pure JavaScript
2. Rust compiled to WASM
3. Rust WASM with JS interop

## Benchmark 1: Fibonacci (CPU-bound)

\`\`\`rust
// Rust
#[wasm_bindgen]
pub fn fibonacci(n: u32) -> u32 {
    match n {
        0 => 0,
        1 => 1,
        _ => fibonacci(n - 1) + fibonacci(n - 2)
    }
}
\`\`\`

\`\`\`javascript
// JavaScript
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}
\`\`\`

**Results (fib(40), 100 iterations)**:
- JavaScript: 1,245ms
- Rust WASM: 892ms
- **WASM wins by 28%**

## Benchmark 2: Array Processing

Processing 1M elements with map/reduce operations.

**Results**:
- JavaScript: 45ms
- Rust WASM: 52ms (with copy overhead)
- Rust WASM SharedArrayBuffer: 23ms
- **WASM wins only with shared memory**

## When to Use WASM

**Use WASM for**:
- Heavy computation (image processing, cryptography)
- Games and simulations
- Porting existing C/C++/Rust codebases

**Stick with JS for**:
- DOM manipulation
- Light data processing
- When bundle size matters

## Conclusion

WASM isn't a silver bullet. The overhead of crossing the JS-WASM boundary can negate performance gains for small operations. Profile first, optimize second.
    `,date:"Sep 18, 2024",readTime:"11 min read",category:"systems",tags:["rust","wasm","performance"],author:{name:"Ehsan Ghaffar",avatar:"/developer-portrait.png",role:"Software Engineer"},featured:!1,color:"from-red-500/20 to-orange-500/20"},{id:6,slug:"design-tokens-system",title:"Building a Design Token System",excerpt:"Creating a scalable design token architecture that works across platforms. From CSS variables to Figma tokens and everything in between.",content:`
## What Are Design Tokens?

Design tokens are the atomic values of your design system—colors, spacing, typography, shadows. They're platform-agnostic and enable consistency across web, mobile, and design tools.

## Token Hierarchy

A well-structured token system has three layers:

### 1. Primitive Tokens (Raw Values)

\`\`\`json
{
  "blue-500": "#3b82f6",
  "space-4": "16px",
  "font-size-lg": "18px"
}
\`\`\`

### 2. Semantic Tokens (Purpose)

\`\`\`json
{
  "color-primary": "{blue-500}",
  "spacing-component": "{space-4}",
  "text-body": "{font-size-lg}"
}
\`\`\`

### 3. Component Tokens (Specific Use)

\`\`\`json
{
  "button-background": "{color-primary}",
  "button-padding": "{spacing-component}",
  "button-font-size": "{text-body}"
}
\`\`\`

## Implementation in CSS

\`\`\`css
:root {
  /* Primitives */
  --blue-500: #3b82f6;

  /* Semantic */
  --color-primary: var(--blue-500);

  /* Component */
  --button-bg: var(--color-primary);
}

.button {
  background: var(--button-bg);
}
\`\`\`

## Syncing with Figma

Use the Tokens Studio plugin to export tokens:

1. Define tokens in Figma using Tokens Studio
2. Export as JSON
3. Transform with Style Dictionary
4. Generate platform-specific outputs

## Conclusion

Design tokens bridge the gap between design and development. Invest in the foundation, and your design system scales effortlessly.
    `,date:"Aug 22, 2024",readTime:"9 min read",category:"frontend",tags:["design-systems","css","tokens"],author:{name:"Ehsan Ghaffar",avatar:"/developer-portrait.png",role:"Software Engineer"},featured:!1,color:"from-teal-500/20 to-cyan-500/20"},{id:7,slug:"lti-learning-platforms-integration",title:"Understanding LTI: Integrating Learning Tools with Educational Platforms",excerpt:"A comprehensive guide to Learning Tools Interoperability (LTI) 1.3 - the standard protocol that enables seamless integration between learning management systems and external educational tools.",content:`
## Introduction

Learning Tools Interoperability (LTI) is the global standard for integrating learning applications with platforms like Canvas, Moodle, Blackboard, and other Learning Management Systems (LMS). If you're building educational technology, understanding LTI is essential for creating tools that educators can easily adopt.

## What is LTI?

LTI is a standard developed by IMS Global Learning Consortium that defines how learning tools communicate with platforms. Think of it as OAuth for education - it handles authentication, user data transfer, and grade passback in a secure, standardized way.

### Key Benefits

- **Single Sign-On**: Students and teachers access tools without additional logins
- **Automatic Rostering**: User information flows seamlessly from LMS to tool
- **Grade Passback**: Tools can send grades directly to the LMS gradebook
- **Privacy & Security**: Built on OAuth 2.0 and OpenID Connect standards

## LTI 1.3 Architecture

LTI 1.3 represents a major upgrade from earlier versions, replacing custom security schemes with industry-standard protocols.

### The Launch Flow

1. **User Initiates Launch**: Student clicks on an LTI link in the LMS
2. **Platform Creates JWT**: LMS generates a signed JSON Web Token containing user/context data
3. **Tool Validates Token**: External tool verifies the JWT signature and processes claims
4. **Tool Renders Content**: Application displays personalized content for the user

## Understanding the Launch Request

Here's what a typical LTI 1.3 launch request looks like:

\`\`\`http
POST https://example.tool.com/lti/launch
Content-Type: application/x-www-form-urlencoded

id_token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9...
\`\`\`

The JWT payload contains rich contextual information:

\`\`\`json
{
  "iss": "https://platform.example.edu",
  "sub": "a6d5c443-1f51-4783-ba1a-7686ffe3b54a",
  "aud": ["962fa4d8-bcbf-49a0-94b2-2de05ad274af"],
  "https://purl.imsglobal.org/spec/lti/claim/message_type": "LtiResourceLinkRequest",
  "https://purl.imsglobal.org/spec/lti/claim/version": "1.3.0",
  "https://purl.imsglobal.org/spec/lti/claim/roles": [
    "http://purl.imsglobal.org/vocab/lis/v2/membership#Learner"
  ],
  "https://purl.imsglobal.org/spec/lti/claim/context": {
    "id": "c1d887f0-a1a3-4bca-ae25-c375edcc131a",
    "label": "ECON 1010",
    "title": "Economics as a Social Science"
  }
}
\`\`\`

### Key Claims Explained

- **iss** (issuer): The platform URL
- **sub** (subject): Unique user identifier
- **aud** (audience): Your tool's client ID
- **roles**: User's role in the course (student, instructor, admin)
- **context**: Course information
- **resource_link**: The specific link being launched

## Security Model

LTI 1.3 security is built on three pillars:

### 1. Platform Registration

Tools must register with platforms, receiving:
- **Client ID**: Identifies your tool
- **Deployment ID**: Identifies specific tool installations
- **Public Key URL**: Where the platform publishes keys for JWT validation

### 2. OIDC Login Flow

Before the actual launch, a lightweight OIDC flow establishes the session:

\`\`\`
1. Platform → Tool: Login initiation request
2. Tool → Platform: Authentication request
3. Platform → Tool: Launch request with signed JWT
\`\`\`

### 3. JWT Validation

Your tool MUST validate:
- Signature using platform's public key
- Issuer matches registered platform
- Audience contains your client ID
- Token hasn't expired (exp claim)
- Nonce hasn't been used before

## Implementing LTI in Your Application

### Backend Implementation (Node.js Example)

\`\`\`typescript
import { JWK, JWT } from 'jose';

async function validateLaunchToken(idToken: string) {
  // 1. Decode without verification first
  const decoded = JWT.decode(idToken, { complete: true });
  
  // 2. Fetch platform's public key
  const platformKeys = await fetchPlatformKeys(decoded.payload.iss);
  
  // 3. Verify signature
  const verified = await JWT.verify(idToken, platformKeys, {
    issuer: decoded.payload.iss,
    audience: process.env.LTI_CLIENT_ID
  });
  
  // 4. Validate required claims
  if (!verified['https://purl.imsglobal.org/spec/lti/claim/message_type']) {
    throw new Error('Invalid LTI message type');
  }
  
  return verified;
}
\`\`\`

### Grade Passback with Assignment and Grade Services

One of LTI's most powerful features is sending grades back to the LMS:

\`\`\`typescript
async function sendGrade(userId: string, score: number) {
  const lineItemUrl = launch.claims[
    'https://purl.imsglobal.org/spec/lti-ags/claim/endpoint'
  ].lineitem;
  
  // Get OAuth2 access token
  const accessToken = await getAccessToken();
  
  // Submit score
  await fetch(\`\${lineItemUrl}/scores\`, {
    method: 'POST',
    headers: {
      'Authorization': \`Bearer \${accessToken}\`,
      'Content-Type': 'application/vnd.ims.lis.v1.score+json'
    },
    body: JSON.stringify({
      userId: userId,
      scoreGiven: score,
      scoreMaximum: 100,
      activityProgress: 'Completed',
      gradingProgress: 'FullyGraded'
    })
  });
}
\`\`\`

## Deep Link: Dynamic Content Selection

Deep Linking allows instructors to select specific content from your tool to add to their course:

\`\`\`typescript
// Respond to deep link request
function createDeepLinkResponse(contentItems: ContentItem[]) {
  const jwt = JWT.sign({
    iss: clientId,
    aud: platformUrl,
    exp: Math.floor(Date.now() / 1000) + 600,
    iat: Math.floor(Date.now() / 1000),
    nonce: generateNonce(),
    'https://purl.imsglobal.org/spec/lti/claim/message_type': 
      'LtiDeepLinkingResponse',
    'https://purl.imsglobal.org/spec/lti-dl/claim/content_items': 
      contentItems
  }, privateKey, { algorithm: 'RS256' });
  
  return jwt;
}
\`\`\`

## Best Practices

### Security

- **Always validate JWT signatures** - Never trust unverified tokens
- **Check nonce uniqueness** - Store used nonces to prevent replay attacks
- **Use HTTPS everywhere** - LTI requires secure communication
- **Rotate keys regularly** - Update your public/private key pairs periodically

### User Experience

- **Handle missing claims gracefully** - Not all platforms send optional claims
- **Implement loading states** - LTI launches can take a few seconds
- **Provide fallback authentication** - For development and testing
- **Cache platform keys** - Don't fetch public keys on every request

### Testing

- **Use LTI Advantage Test Suite** - IMS provides certification tools
- **Test with multiple platforms** - Canvas, Moodle, Blackboard all have quirks
- **Mock launch requests** - Create test JWTs for development

## Common Pitfalls

1. **Clock Skew**: JWT exp/iat validation fails if server clocks aren't synchronized
2. **Nonce Storage**: Forgetting to store nonces opens replay attack vulnerabilities  
3. **Role Mapping**: Different platforms use different role vocabularies
4. **Deep Link State**: Not preserving state during multi-step content selection flows

## Real-World Use Cases

- **Interactive Assessments**: Quiz tools that automatically grade and send scores
- **Video Platforms**: Embedding educational videos with progress tracking
- **Collaboration Tools**: Discussion boards that sync with course rosters
- **Content Libraries**: Allowing instructors to select and embed resources
- **Adaptive Learning**: Personalized learning paths that integrate with course structure

## Tools and Libraries

- **ltijs** (Node.js): Full-featured LTI 1.3 library
- **pylti1p3** (Python): LTI 1.3 implementation for Python/Django
- **lti-1-3-php-library** (PHP): PHP implementation of LTI 1.3
- **IMS Reference Implementation**: Official Java-based reference

## Conclusion

LTI 1.3 is a robust, secure standard that solves the complex problem of integrating third-party tools into learning platforms. While the initial setup requires understanding OAuth 2.0 and JWT, the payoff is enormous: your educational tool becomes instantly compatible with hundreds of institutions worldwide.

The education technology landscape is rapidly evolving, and LTI provides the interoperability foundation that allows innovation to flourish. Whether you're building assessment tools, content libraries, or collaborative platforms, implementing LTI opens doors to millions of students and educators.

Start with a simple launch implementation, add grade passback when needed, and explore advanced features like Deep Linking and Names and Role Provisioning Service as your integration matures. The investment in understanding LTI pays dividends in market reach and user adoption.
    `,date:"Jan 7, 2026",readTime:"18 min read",category:"systems",tags:["lti","education","integration","oauth","jwt"],author:{name:"Ehsan Ghaffar",avatar:"/developer-portrait.png",role:"Software Engineer"},featured:!0,color:"from-indigo-500/20 to-blue-500/20"}];function w(e,t=3){let r=x.find(t=>t.slug===e);return r?x.filter(t=>t.slug!==e).filter(e=>e.category===r.category||e.tags.some(e=>r.tags.includes(e))).slice(0,t):[]}e.s(["blogPosts",0,x,"getRelatedPosts",()=>w],77958)},67881,e=>{"use strict";let t,r;var a=e.i(65827),n=e.i(65273),s=e.i(7284);let i=e=>"boolean"==typeof e?`${e}`:0===e?"0":e,o=s.clsx;var l=e.i(47163);let c=(t="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",r={variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",outline:"border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2 has-[>svg]:px-3",sm:"h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",lg:"h-10 rounded-md px-6 has-[>svg]:px-4",icon:"size-9","icon-sm":"size-8","icon-lg":"size-10"}},defaultVariants:{variant:"default",size:"default"}},e=>{var a;if((null==r?void 0:r.variants)==null)return o(t,null==e?void 0:e.class,null==e?void 0:e.className);let{variants:n,defaultVariants:s}=r,l=Object.keys(n).map(t=>{let r=null==e?void 0:e[t],a=null==s?void 0:s[t];if(null===r)return null;let o=i(r)||i(a);return n[t][o]}),c=e&&Object.entries(e).reduce((e,t)=>{let[r,a]=t;return void 0===a||(e[r]=a),e},{});return o(t,l,null==r||null==(a=r.compoundVariants)?void 0:a.reduce((e,t)=>{let{class:r,className:a,...n}=t;return Object.entries(n).every(e=>{let[t,r]=e;return Array.isArray(r)?r.includes({...s,...c}[t]):({...s,...c})[t]===r})?[...e,r,a]:e},[]),null==e?void 0:e.class,null==e?void 0:e.className)});function d({className:e,variant:t="default",size:r="default",asChild:s=!1,...i}){let o=s?n.Slot:"button";return(0,a.jsx)(o,{"data-slot":"button","data-variant":t,"data-size":r,className:(0,l.cn)(c({variant:t,size:r,className:e})),...i})}e.s(["Button",()=>d],67881)},48668,e=>{"use strict";var t=e.i(65827),r=e.i(68645),a=e.i(47163),n=e.i(37300),s=e.i(18986),i=e.i(87025),o=e.i(63270),l=e.i(2953),c=e.i(77958);function d(){let[e,d]=(0,r.useState)(!1),u=(0,r.useRef)(null);return(0,r.useEffect)(()=>{let e=new IntersectionObserver(([e])=>{e.isIntersecting&&d(!0)},{threshold:.1});return u.current&&e.observe(u.current),()=>e.disconnect()},[]),(0,t.jsx)("div",{ref:u,className:"space-y-6",children:c.blogPosts.map((r,c)=>(0,t.jsxs)("article",{className:(0,a.cn)("group relative cursor-pointer overflow-hidden rounded-xl border border-border bg-card/40 glass p-6 sm:p-7 transition-all duration-400 hover:border-primary/40 hover:bg-card/60 active:scale-[0.995] hover-lift opacity-0",e&&"animate-fade-in-up",r.featured&&"ring-1 ring-primary/20"),style:{animationDelay:`${80*c+100}ms`},children:[(0,t.jsx)(l.default,{href:`/blog/${r.slug}`,className:"absolute inset-0 z-10",children:(0,t.jsxs)("span",{className:"sr-only",children:["Read ",r.title]})}),(0,t.jsx)("div",{className:(0,a.cn)("absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-500 group-hover:opacity-100",r.color)}),(0,t.jsxs)("div",{className:"relative z-0",children:[(0,t.jsxs)("div",{className:"mb-4 flex flex-wrap items-center gap-3",children:[(0,t.jsx)("span",{className:"rounded-lg border border-border/80 bg-secondary/60 px-3 py-1.5 font-mono text-xs text-muted-foreground transition-colors group-hover:border-primary/50 group-hover:text-foreground",children:r.category}),r.featured&&(0,t.jsx)("span",{className:"rounded-lg border border-primary/50 bg-primary/10 px-3 py-1.5 font-mono text-xs text-primary",children:"featured"}),(0,t.jsxs)("div",{className:"ml-auto flex items-center gap-4 text-xs text-muted-foreground",children:[(0,t.jsxs)("span",{className:"flex items-center gap-1.5",children:[(0,t.jsx)(i.Calendar,{className:"h-3.5 w-3.5"}),r.date]}),(0,t.jsxs)("span",{className:"flex items-center gap-1.5",children:[(0,t.jsx)(s.Clock,{className:"h-3.5 w-3.5"}),r.readTime]})]})]}),(0,t.jsx)("h2",{className:"mb-3 text-xl sm:text-2xl font-semibold tracking-tight transition-colors duration-300 group-hover:text-gradient",children:r.title}),(0,t.jsx)("p",{className:"mb-5 text-sm sm:text-base leading-relaxed text-muted-foreground line-clamp-2",children:r.excerpt}),(0,t.jsxs)("div",{className:"flex items-center justify-between gap-4",children:[(0,t.jsxs)("div",{className:"flex items-center gap-3",children:[(0,t.jsxs)(o.Avatar,{className:"h-9 w-9 border border-border",children:[(0,t.jsx)(o.AvatarImage,{src:r.author.avatar||"/placeholder.svg",alt:r.author.name}),(0,t.jsx)(o.AvatarFallback,{className:"bg-secondary text-xs font-mono",children:r.author.name.split(" ").map(e=>e[0]).join("")})]}),(0,t.jsxs)("div",{className:"flex flex-col",children:[(0,t.jsx)("span",{className:"text-sm font-medium",children:r.author.name}),(0,t.jsx)("span",{className:"text-xs text-muted-foreground",children:r.author.role})]})]}),(0,t.jsxs)("div",{className:"flex items-center gap-2 font-mono text-xs text-primary transition-all duration-300 sm:opacity-0 sm:translate-x-[-8px] group-hover:opacity-100 group-hover:translate-x-0",children:[(0,t.jsx)("span",{children:"read article"}),(0,t.jsx)(n.ArrowRight,{className:"h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"})]})]}),(0,t.jsx)("div",{className:"mt-4 flex flex-wrap gap-2",children:r.tags.map(e=>(0,t.jsxs)("span",{className:"rounded-md bg-secondary/40 px-2 py-1 font-mono text-[10px] text-muted-foreground transition-colors group-hover:bg-secondary/60",children:["#",e]},e))})]}),(0,t.jsx)("div",{className:"absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-primary to-transparent transition-all duration-500 group-hover:w-full"})]},r.id))})}e.s(["BlogList",()=>d])},83024,e=>{"use strict";var t=e.i(65827),r=e.i(68645),a=e.i(47163),n=e.i(79673),s=e.i(24398);let i=(0,s.default)("Rss",[["path",{d:"M4 11a9 9 0 0 1 9 9",key:"pv89mb"}],["path",{d:"M4 4a16 16 0 0 1 16 16",key:"k0647b"}],["circle",{cx:"5",cy:"19",r:"1",key:"bfqh0e"}]]);var o=e.i(78945),l=e.i(13566);let c=(0,s.default)("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);var d=e.i(23750),u=e.i(67881);let m=[{name:"All Posts",count:12,slug:"all"},{name:"AI & Machine Learning",count:4,slug:"ai"},{name:"Frontend",count:3,slug:"frontend"},{name:"Systems & DevOps",count:3,slug:"systems"},{name:"Design",count:2,slug:"design"}],p=["nextjs","react","typescript","llm","rust","linux","python","tailwind","wasm","rag"];function g(){let[e,s]=(0,r.useState)(!1),[g,f]=(0,r.useState)("all"),[h,y]=(0,r.useState)(""),v=(0,r.useRef)(null);return(0,r.useEffect)(()=>{let e=new IntersectionObserver(([e])=>{e.isIntersecting&&s(!0)},{threshold:.1});return v.current&&e.observe(v.current),()=>e.disconnect()},[]),(0,t.jsxs)("aside",{ref:v,className:"space-y-8 lg:sticky lg:top-28 lg:self-start",children:[(0,t.jsx)("div",{className:(0,a.cn)("opacity-0",e&&"animate-fade-in-up"),children:(0,t.jsxs)("div",{className:"relative",children:[(0,t.jsx)(o.Search,{className:"absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"}),(0,t.jsx)(d.Input,{type:"search",placeholder:"Search articles...",className:"pl-10 bg-card/40 border-border/50 focus:border-primary/50"})]})}),(0,t.jsxs)("div",{className:(0,a.cn)("opacity-0",e&&"animate-fade-in-up stagger-1"),children:[(0,t.jsxs)("div",{className:"flex items-center gap-2 mb-4",children:[(0,t.jsx)(c,{className:"h-4 w-4 text-primary"}),(0,t.jsx)("h3",{className:"font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground",children:"Categories"})]}),(0,t.jsx)("div",{className:"space-y-1",children:m.map(e=>(0,t.jsxs)("button",{onClick:()=>f(e.slug),className:(0,a.cn)("flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-sm transition-all duration-300",g===e.slug?"bg-primary/10 text-primary border border-primary/30":"text-muted-foreground hover:bg-secondary/50 hover:text-foreground border border-transparent"),children:[(0,t.jsx)("span",{children:e.name}),(0,t.jsx)("span",{className:"rounded-md bg-secondary/60 px-2 py-0.5 font-mono text-xs",children:e.count})]},e.slug))})]}),(0,t.jsxs)("div",{className:(0,a.cn)("opacity-0",e&&"animate-fade-in-up stagger-2"),children:[(0,t.jsxs)("div",{className:"flex items-center gap-2 mb-4",children:[(0,t.jsx)(l.Tag,{className:"h-4 w-4 text-primary"}),(0,t.jsx)("h3",{className:"font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground",children:"Popular Tags"})]}),(0,t.jsx)("div",{className:"flex flex-wrap gap-2",children:p.map(e=>(0,t.jsxs)("button",{className:"rounded-lg border border-border/50 bg-card/40 px-3 py-1.5 font-mono text-xs text-muted-foreground transition-all duration-300 hover:border-primary/50 hover:bg-primary/10 hover:text-primary",children:["#",e]},e))})]}),(0,t.jsxs)("div",{className:(0,a.cn)("rounded-xl border border-border/50 bg-card/40 glass p-6 opacity-0",e&&"animate-fade-in-up stagger-3"),children:[(0,t.jsxs)("div",{className:"flex items-center gap-2 mb-3",children:[(0,t.jsx)(n.Mail,{className:"h-4 w-4 text-primary"}),(0,t.jsx)("h3",{className:"font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground",children:"Newsletter"})]}),(0,t.jsx)("p",{className:"text-sm text-muted-foreground mb-4",children:"Get notified about new articles and experiments. No spam, unsubscribe anytime."}),(0,t.jsxs)("form",{onSubmit:e=>{e.preventDefault(),y("")},className:"space-y-3",children:[(0,t.jsx)(d.Input,{type:"email",placeholder:"your@email.com",value:h,onChange:e=>y(e.target.value),className:"bg-background/50 border-border/50 focus:border-primary/50"}),(0,t.jsx)(u.Button,{type:"submit",className:"w-full font-mono text-xs uppercase tracking-wider",children:"Subscribe"})]})]}),(0,t.jsx)("div",{className:(0,a.cn)("opacity-0",e&&"animate-fade-in-up stagger-4"),children:(0,t.jsxs)("a",{href:"/rss.xml",className:"flex items-center justify-center gap-2 rounded-lg border border-border/50 bg-card/40 px-4 py-3 font-mono text-xs text-muted-foreground transition-all duration-300 hover:border-primary/50 hover:bg-primary/10 hover:text-primary",children:[(0,t.jsx)(i,{className:"h-4 w-4"}),(0,t.jsx)("span",{children:"Subscribe via RSS"})]})})]})}e.s(["BlogSidebar",()=>g],83024)}]);