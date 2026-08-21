(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,8565,e=>{"use strict";let t=(0,e.i(24398).default)("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);e.s(["ArrowLeft",()=>t],8565)},87025,e=>{"use strict";let t=(0,e.i(24398).default)("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);e.s(["Calendar",()=>t],87025)},18986,e=>{"use strict";let t=(0,e.i(24398).default)("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);e.s(["Clock",()=>t],18986)},65273,e=>{"use strict";var t=e.i(68645);function r(e,t){if("function"==typeof e)return e(t);null!=e&&(e.current=t)}var a=e.i(65827),n=t.forwardRef((e,r)=>{let{children:n,...s}=e,l=t.Children.toArray(n),c=l.find(i);if(c){let e=c.props.children,n=l.map(r=>r!==c?r:t.Children.count(e)>1?t.Children.only(null):t.isValidElement(e)?e.props.children:null);return(0,a.jsx)(o,{...s,ref:r,children:t.isValidElement(e)?t.cloneElement(e,void 0,n):null})}return(0,a.jsx)(o,{...s,ref:r,children:n})});n.displayName="Slot";var o=t.forwardRef((e,a)=>{let{children:n,...o}=e;if(t.isValidElement(n)){var s;let e,i,l=(s=n,(i=(e=Object.getOwnPropertyDescriptor(s.props,"ref")?.get)&&"isReactWarning"in e&&e.isReactWarning)?s.ref:(i=(e=Object.getOwnPropertyDescriptor(s,"ref")?.get)&&"isReactWarning"in e&&e.isReactWarning)?s.props.ref:s.props.ref||s.ref);return t.cloneElement(n,{...function(e,t){let r={...t};for(let a in t){let n=e[a],o=t[a];/^on[A-Z]/.test(a)?n&&o?r[a]=(...e)=>{o(...e),n(...e)}:n&&(r[a]=n):"style"===a?r[a]={...n,...o}:"className"===a&&(r[a]=[n,o].filter(Boolean).join(" "))}return{...e,...r}}(o,n.props),ref:a?function(...e){return t=>{let a=!1,n=e.map(e=>{let n=r(e,t);return a||"function"!=typeof n||(a=!0),n});if(a)return()=>{for(let t=0;t<n.length;t++){let a=n[t];"function"==typeof a?a():r(e[t],null)}}}}(a,l):l})}return t.Children.count(n)>1?t.Children.only(null):null});o.displayName="SlotClone";var s=({children:e})=>(0,a.jsx)(a.Fragment,{children:e});function i(e){return t.isValidElement(e)&&e.type===s}e.s(["Slot",()=>n],65273)},67881,e=>{"use strict";let t,r;var a=e.i(65827),n=e.i(65273),o=e.i(7284);let s=e=>"boolean"==typeof e?`${e}`:0===e?"0":e,i=o.clsx;var l=e.i(47163);let c=(t="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",r={variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",outline:"border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2 has-[>svg]:px-3",sm:"h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",lg:"h-10 rounded-md px-6 has-[>svg]:px-4",icon:"size-9","icon-sm":"size-8","icon-lg":"size-10"}},defaultVariants:{variant:"default",size:"default"}},e=>{var a;if((null==r?void 0:r.variants)==null)return i(t,null==e?void 0:e.class,null==e?void 0:e.className);let{variants:n,defaultVariants:o}=r,l=Object.keys(n).map(t=>{let r=null==e?void 0:e[t],a=null==o?void 0:o[t];if(null===r)return null;let i=s(r)||s(a);return n[t][i]}),c=e&&Object.entries(e).reduce((e,t)=>{let[r,a]=t;return void 0===a||(e[r]=a),e},{});return i(t,l,null==r||null==(a=r.compoundVariants)?void 0:a.reduce((e,t)=>{let{class:r,className:a,...n}=t;return Object.entries(n).every(e=>{let[t,r]=e;return Array.isArray(r)?r.includes({...o,...c}[t]):({...o,...c})[t]===r})?[...e,r,a]:e},[]),null==e?void 0:e.class,null==e?void 0:e.className)});function d({className:e,variant:t="default",size:r="default",asChild:o=!1,...s}){let i=o?n.Slot:"button";return(0,a.jsx)(i,{"data-slot":"button","data-variant":t,"data-size":r,className:(0,l.cn)(c({variant:t,size:r,className:e})),...s})}e.s(["Button",()=>d],67881)},63270,77958,e=>{"use strict";var t=e.i(65827),r=e.i(68645),a=globalThis?.document?r.useLayoutEffect:()=>{};e.i(38868);var n=e.i(65273),o=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,a)=>{let o=r.forwardRef((e,r)=>{let{asChild:o,...s}=e,i=o?n.Slot:a;return"undefined"!=typeof window&&(window[Symbol.for("radix-ui")]=!0),(0,t.jsx)(i,{...s,ref:r})});return o.displayName=`Primitive.${a}`,{...e,[a]:o}},{}),s="Avatar",[i,l]=function(e,a=[]){let n=[],o=()=>{let t=n.map(e=>r.createContext(e));return function(a){let n=a?.[e]||t;return r.useMemo(()=>({[`__scope${e}`]:{...a,[e]:n}}),[a,n])}};return o.scopeName=e,[function(a,o){let s=r.createContext(o),i=n.length;n=[...n,o];let l=a=>{let{scope:n,children:o,...l}=a,c=n?.[e]?.[i]||s,d=r.useMemo(()=>l,Object.values(l));return(0,t.jsx)(c.Provider,{value:d,children:o})};return l.displayName=a+"Provider",[l,function(t,n){let l=n?.[e]?.[i]||s,c=r.useContext(l);if(c)return c;if(void 0!==o)return o;throw Error(`\`${t}\` must be used within \`${a}\``)}]},function(...e){let t=e[0];if(1===e.length)return t;let a=()=>{let a=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let n=a.reduce((t,{useScope:r,scopeName:a})=>{let n=r(e)[`__scope${a}`];return{...t,...n}},{});return r.useMemo(()=>({[`__scope${t.scopeName}`]:n}),[n])}};return a.scopeName=t.scopeName,a}(o,...a)]}(s),[c,d]=i(s),p=r.forwardRef((e,a)=>{let{__scopeAvatar:n,...s}=e,[i,l]=r.useState("idle");return(0,t.jsx)(c,{scope:n,imageLoadingStatus:i,onImageLoadingStatusChange:l,children:(0,t.jsx)(o.span,{...s,ref:a})})});p.displayName=s;var u="AvatarImage",m=r.forwardRef((e,n)=>{var s;let i,{__scopeAvatar:l,src:c,onLoadingStatusChange:p=()=>{},...m}=e,g=d(u,l),h=function(e,t){let[n,o]=r.useState("idle");return a(()=>{if(!e)return void o("error");let r=!0,a=new window.Image,n=e=>()=>{r&&o(e)};return o("loading"),a.onload=n("loaded"),a.onerror=n("error"),a.src=e,t&&(a.referrerPolicy=t),()=>{r=!1}},[e,t]),n}(c,m.referrerPolicy),f=(s=e=>{p(e),g.onImageLoadingStatusChange(e)},i=r.useRef(s),r.useEffect(()=>{i.current=s}),r.useMemo(()=>(...e)=>i.current?.(...e),[]));return a(()=>{"idle"!==h&&f(h)},[h,f]),"loaded"===h?(0,t.jsx)(o.img,{...m,ref:n,src:c}):null});m.displayName=u;var g="AvatarFallback",h=r.forwardRef((e,a)=>{let{__scopeAvatar:n,delayMs:s,...i}=e,l=d(g,n),[c,p]=r.useState(void 0===s);return r.useEffect(()=>{if(void 0!==s){let e=window.setTimeout(()=>p(!0),s);return()=>window.clearTimeout(e)}},[s]),c&&"loaded"!==l.imageLoadingStatus?(0,t.jsx)(o.span,{...i,ref:a}):null});h.displayName=g;var f=e.i(47163);function b({className:e,...r}){return(0,t.jsx)(p,{"data-slot":"avatar",className:(0,f.cn)("relative flex size-8 shrink-0 overflow-hidden rounded-full",e),...r})}function y({className:e,...r}){return(0,t.jsx)(m,{"data-slot":"avatar-image",className:(0,f.cn)("aspect-square size-full",e),...r})}function v({className:e,...r}){return(0,t.jsx)(h,{"data-slot":"avatar-fallback",className:(0,f.cn)("bg-muted flex size-full items-center justify-center rounded-full",e),...r})}e.s(["Avatar",()=>b,"AvatarFallback",()=>v,"AvatarImage",()=>y],63270);let x=[{id:2,slug:"mcp-protocol-llm-applications",title:"MCP Protocol in LLM Applications",excerpt:"Implementing Model Context Protocol for seamless AI model interactions with vector databases in RAG applications. Building smarter conversational systems.",content:`
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
    `,date:"Jan 7, 2026",readTime:"18 min read",category:"systems",tags:["lti","education","integration","oauth","jwt"],author:{name:"Ehsan Ghaffar",avatar:"/developer-portrait.png",role:"Software Engineer"},featured:!0,color:"from-indigo-500/20 to-blue-500/20"}];function w(e,t=3){let r=x.find(t=>t.slug===e);return r?x.filter(t=>t.slug!==e).filter(e=>e.category===r.category||e.tags.some(e=>r.tags.includes(e))).slice(0,t):[]}e.s(["blogPosts",0,x,"getRelatedPosts",()=>w],77958)},64517,e=>{"use strict";var t=e.i(65827),r=e.i(68645),a=e.i(2953),n=e.i(47163),o=e.i(8565),s=e.i(87025),i=e.i(18986),l=e.i(24398);let c=(0,l.default)("Bookmark",[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z",key:"1fy3hk"}]]),d=(0,l.default)("Twitter",[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]]);var p=e.i(13798);let u=(0,l.default)("Link2",[["path",{d:"M9 17H7A5 5 0 0 1 7 7h2",key:"8i5ue5"}],["path",{d:"M15 7h2a5 5 0 1 1 0 10h-2",key:"1b9ql8"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}]]),m=(0,l.default)("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);var g=e.i(63270),h=e.i(67881),f=e.i(77958);function b({post:e}){let[l,b]=(0,r.useState)(!1),[y,v]=(0,r.useState)(!1),[x,w]=(0,r.useState)(!1),k=(0,r.useRef)(null),j=(0,f.getRelatedPosts)(e.slug);(0,r.useEffect)(()=>{b(!0);let e=()=>{v(window.scrollY>500)};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[]);let T=()=>{navigator.clipboard.writeText(window.location.href),w(!0),setTimeout(()=>w(!1),2e3)};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("section",{className:"relative px-4 sm:px-6 pt-28 sm:pt-32 pb-12 sm:pb-16 border-b border-border/30",children:[(0,t.jsx)("div",{className:(0,n.cn)("absolute inset-0 bg-gradient-to-br opacity-30 pointer-events-none",e.color)}),(0,t.jsxs)("div",{className:"mx-auto max-w-4xl relative z-10",children:[(0,t.jsxs)(a.default,{href:"/blog",className:(0,n.cn)("inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8 group opacity-0",l&&"animate-fade-in-up"),children:[(0,t.jsx)(o.ArrowLeft,{className:"h-4 w-4 transition-transform group-hover:-translate-x-1"}),(0,t.jsx)("span",{className:"font-mono",children:"back to blog"})]}),(0,t.jsxs)("div",{className:(0,n.cn)("flex flex-wrap items-center gap-3 mb-6 opacity-0",l&&"animate-fade-in-up"),style:{animationDelay:"100ms"},children:[(0,t.jsx)("span",{className:"rounded-lg border border-primary/50 bg-primary/10 px-3 py-1.5 font-mono text-xs text-primary uppercase tracking-wider",children:e.category}),e.featured&&(0,t.jsx)("span",{className:"rounded-lg border border-amber-500/50 bg-amber-500/10 px-3 py-1.5 font-mono text-xs text-amber-400",children:"featured"})]}),(0,t.jsx)("h1",{className:(0,n.cn)("text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6 opacity-0",l&&"animate-fade-in-up"),style:{animationDelay:"150ms"},children:(0,t.jsx)("span",{className:"bg-gradient-to-l from-primary/50 to-accent text-transparent bg-clip-text",children:e.title})}),(0,t.jsx)("p",{className:(0,n.cn)("text-lg sm:text-xl text-muted-foreground leading-relaxed mb-8 opacity-0",l&&"animate-fade-in-up"),style:{animationDelay:"200ms"},children:e.excerpt}),(0,t.jsxs)("div",{className:(0,n.cn)("flex flex-wrap items-center justify-between gap-6 opacity-0",l&&"animate-fade-in-up"),style:{animationDelay:"250ms"},children:[(0,t.jsxs)("div",{className:"flex items-center gap-4",children:[(0,t.jsxs)(g.Avatar,{className:"h-12 w-12 border-2 border-border",children:[(0,t.jsx)(g.AvatarImage,{src:e.author.avatar||"/placeholder.svg",alt:e.author.name}),(0,t.jsx)(g.AvatarFallback,{className:"bg-secondary font-mono",children:e.author.name.split(" ").map(e=>e[0]).join("")})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{className:"font-medium",children:e.author.name}),(0,t.jsx)("p",{className:"text-sm text-muted-foreground",children:e.author.role})]})]}),(0,t.jsxs)("div",{className:"flex items-center gap-6 text-sm text-muted-foreground",children:[(0,t.jsxs)("span",{className:"flex items-center gap-2",children:[(0,t.jsx)(s.Calendar,{className:"h-4 w-4"}),e.date]}),(0,t.jsxs)("span",{className:"flex items-center gap-2",children:[(0,t.jsx)(i.Clock,{className:"h-4 w-4"}),e.readTime]})]})]}),(0,t.jsx)("div",{className:(0,n.cn)("flex flex-wrap gap-2 mt-6 opacity-0",l&&"animate-fade-in-up"),style:{animationDelay:"300ms"},children:e.tags.map(e=>(0,t.jsxs)("span",{className:"rounded-md bg-secondary/60 border border-border/50 px-3 py-1 font-mono text-xs text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors cursor-pointer",children:["#",e]},e))})]})]}),(0,t.jsx)("section",{className:"px-4 sm:px-6 py-12 sm:py-16",children:(0,t.jsxs)("div",{className:"mx-auto max-w-4xl",children:[(0,t.jsxs)("div",{className:"grid gap-8 lg:grid-cols-[1fr_auto]",children:[(0,t.jsx)("article",{ref:k,className:(0,n.cn)("prose prose-invert prose-lg max-w-none opacity-0","prose-headings:font-semibold prose-headings:tracking-tight","prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4 prose-h2:text-gradient","prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3","prose-p:text-muted-foreground prose-p:leading-relaxed","prose-a:text-primary prose-a:no-underline hover:prose-a:underline","prose-strong:text-foreground prose-strong:font-semibold","prose-code:text-primary prose-code:bg-secondary/60 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:font-mono prose-code:text-sm prose-code:before:content-none prose-code:after:content-none","prose-pre:bg-card/80 prose-pre:border prose-pre:border-border/50 prose-pre:rounded-xl prose-pre:p-4 prose-pre:overflow-x-auto","prose-ul:text-muted-foreground prose-ol:text-muted-foreground","prose-li:marker:text-primary","prose-blockquote:border-l-primary prose-blockquote:text-muted-foreground prose-blockquote:italic",l&&"animate-fade-in-up"),style:{animationDelay:"350ms"},dangerouslySetInnerHTML:{__html:e.content.replace(/^### (.*$)/gm,"<h3>$1</h3>").replace(/^## (.*$)/gm,"<h2>$1</h2>").replace(/^# (.*$)/gm,"<h1>$1</h1>").replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>").replace(/\*(.*?)\*/g,"<em>$1</em>").replace(/```(\w+)?\n([\s\S]*?)```/g,'<pre><code class="language-$1">$2</code></pre>').replace(/`([^`]+)`/g,"<code>$1</code>").replace(/^- (.*$)/gm,"<li>$1</li>").replace(/(<li>.*<\/li>)\n(?=<li>)/g,"$1").replace(/(<li>.*<\/li>)(?:\n|$)/g,"<ul>$1</ul>").replace(/^\d+\. (.*$)/gm,"<li>$1</li>").replace(/\n\n(?!<)/g,"</p><p>").replace(/^(?!<)(.+)$/gm,"<p>$1</p>").replace(/<p><\/p>/g,"").replace(/<p>(<h[1-3]>)/g,"$1").replace(/(<\/h[1-3]>)<\/p>/g,"$1").replace(/<p>(<pre>)/g,"$1").replace(/(<\/pre>)<\/p>/g,"$1").replace(/<p>(<ul>)/g,"$1").replace(/(<\/ul>)<\/p>/g,"$1")}}),(0,t.jsx)("aside",{className:(0,n.cn)("hidden lg:block opacity-0",l&&"animate-fade-in-up"),style:{animationDelay:"400ms"},children:(0,t.jsxs)("div",{className:"sticky top-32 flex flex-col gap-3",children:[(0,t.jsx)("span",{className:"font-mono text-xs text-muted-foreground mb-2 text-center",children:"share"}),(0,t.jsxs)(h.Button,{variant:"outline",size:"icon",className:"h-10 w-10 rounded-lg border-border/50 hover:border-primary/50 hover:bg-primary/10 bg-transparent",onClick:()=>window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(e.title)}`,"_blank"),children:[(0,t.jsx)(d,{className:"h-4 w-4"}),(0,t.jsx)("span",{className:"sr-only",children:"Share on Twitter"})]}),(0,t.jsxs)(h.Button,{variant:"outline",size:"icon",className:"h-10 w-10 rounded-lg border-border/50 hover:border-primary/50 hover:bg-primary/10 bg-transparent",onClick:()=>window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`,"_blank"),children:[(0,t.jsx)(p.Linkedin,{className:"h-4 w-4"}),(0,t.jsx)("span",{className:"sr-only",children:"Share on LinkedIn"})]}),(0,t.jsxs)(h.Button,{variant:"outline",size:"icon",className:(0,n.cn)("h-10 w-10 rounded-lg border-border/50 hover:border-primary/50 hover:bg-primary/10",x&&"border-primary/50 bg-primary/10"),onClick:T,children:[(0,t.jsx)(u,{className:"h-4 w-4"}),(0,t.jsx)("span",{className:"sr-only",children:"Copy link"})]}),(0,t.jsxs)(h.Button,{variant:"outline",size:"icon",className:"h-10 w-10 rounded-lg border-border/50 hover:border-primary/50 hover:bg-primary/10 bg-transparent",children:[(0,t.jsx)(c,{className:"h-4 w-4"}),(0,t.jsx)("span",{className:"sr-only",children:"Bookmark"})]})]})})]}),(0,t.jsxs)("div",{className:(0,n.cn)("lg:hidden flex items-center justify-center gap-4 mt-12 pt-8 border-t border-border/30 opacity-0",l&&"animate-fade-in-up"),style:{animationDelay:"450ms"},children:[(0,t.jsx)("span",{className:"font-mono text-xs text-muted-foreground",children:"share:"}),(0,t.jsx)(h.Button,{variant:"outline",size:"icon",className:"h-9 w-9 rounded-lg border-border/50 bg-transparent",onClick:()=>window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(e.title)}`,"_blank"),children:(0,t.jsx)(d,{className:"h-4 w-4"})}),(0,t.jsx)(h.Button,{variant:"outline",size:"icon",className:"h-9 w-9 rounded-lg border-border/50 bg-transparent",onClick:()=>window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`,"_blank"),children:(0,t.jsx)(p.Linkedin,{className:"h-4 w-4"})}),(0,t.jsx)(h.Button,{variant:"outline",size:"icon",className:(0,n.cn)("h-9 w-9 rounded-lg border-border/50",x&&"border-primary/50 bg-primary/10"),onClick:T,children:(0,t.jsx)(u,{className:"h-4 w-4"})}),(0,t.jsx)(h.Button,{variant:"outline",size:"icon",className:"h-9 w-9 rounded-lg border-border/50 bg-transparent",children:(0,t.jsx)(c,{className:"h-4 w-4"})})]})]})}),j.length>0&&(0,t.jsx)("section",{className:"px-4 sm:px-6 py-16 sm:py-20 border-t border-border/30",children:(0,t.jsxs)("div",{className:"mx-auto max-w-4xl",children:[(0,t.jsxs)("div",{className:"mb-8",children:[(0,t.jsx)("span",{className:"inline-block rounded-lg border border-border bg-secondary/50 px-3 py-1.5 font-mono text-xs tracking-wider text-muted-foreground mb-4",children:"[RELATED_POSTS]"}),(0,t.jsxs)("h2",{className:"text-2xl sm:text-3xl font-semibold tracking-tight",children:["Continue ",(0,t.jsx)("span",{className:"bg-gradient-to-l from-primary/50 to-accent text-transparent bg-clip-text",children:"Reading"})]})]}),(0,t.jsx)("div",{className:"grid gap-6 sm:grid-cols-2 lg:grid-cols-3",children:j.map((e,r)=>(0,t.jsxs)(a.default,{href:`/blog/${e.slug}`,className:(0,n.cn)("group relative overflow-hidden rounded-xl border border-border bg-card/40 glass p-5 transition-all duration-300 hover:border-primary/40 hover:bg-card/60 hover-lift opacity-0",l&&"animate-fade-in-up"),style:{animationDelay:`${500+100*r}ms`},children:[(0,t.jsx)("div",{className:(0,n.cn)("absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-500 group-hover:opacity-100",e.color)}),(0,t.jsxs)("div",{className:"relative z-10",children:[(0,t.jsx)("span",{className:"inline-block rounded-md bg-secondary/60 px-2 py-1 font-mono text-[10px] text-muted-foreground mb-3",children:e.category}),(0,t.jsx)("h3",{className:"font-semibold mb-2 line-clamp-2 group-hover:text-gradient transition-colors",children:e.title}),(0,t.jsx)("p",{className:"text-sm text-muted-foreground line-clamp-2 mb-4",children:e.excerpt}),(0,t.jsxs)("div",{className:"flex items-center gap-3 text-xs text-muted-foreground",children:[(0,t.jsx)("span",{children:e.date}),(0,t.jsx)("span",{className:"text-border",children:"•"}),(0,t.jsx)("span",{children:e.readTime})]})]}),(0,t.jsx)("div",{className:"absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-primary to-transparent transition-all duration-500 group-hover:w-full"})]},e.id))})]})}),(0,t.jsx)("button",{onClick:()=>{window.scrollTo({top:0,behavior:"smooth"})},className:(0,n.cn)("fixed bottom-8 right-8 z-50 h-12 w-12 rounded-full border border-border bg-card/90 glass backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:border-primary/50 hover:bg-card",y?"opacity-100 translate-y-0":"opacity-0 translate-y-4 pointer-events-none"),"aria-label":"Scroll to top",children:(0,t.jsx)(m,{className:"h-5 w-5"})})]})}e.s(["BlogPostContent",()=>b],64517)}]);