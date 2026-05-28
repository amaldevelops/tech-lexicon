# Google Search Central SEO

- https://developers.google.com/search/docs

- Experience, Expertise, Authoritativeness, and Trustworthiness, or what Google call E-E-A-T

## 1. SEO Fundamentals: The Bedrock

To rank at all, your site must cover the three fundamental pillars of traditional SEO.

### A. Technical SEO (Crawlability & Indexing)

If search engines can't read your site, nothing else matters.

- **Crawlability:** Maintain an updated **XML Sitemap** and use a **robots.txt** file to guide search engine bots away from low-value pages.
- **Indexability:** Ensure crucial pages return a `200 OK` HTTP status code. Correctly implement `301 redirects` (permanent) and avoid broken loops (`404` errors).
- **Security:** Transition fully to **HTTPS** (SSL certificate) as a non-negotiable trust factor.

### B. On-Page SEO (Content & Relevance)

Helping search engines understand exactly what your page is about.

- **Keyword Research:** Use tools to find terms with high search volume but manageable competition. Focus on **Search Intent** (Informational, Navigational, Commercial, or Transactional).
- **HTML Optimization:**
- **Title Tags:** Place primary keywords near the front (keep under 60 characters).
- **Meta Descriptions:** Write compelling, keyword-rich summaries (under 160 characters) to boost Click-Through Rates (CTR).
- **Headers (H1, H2, H3):** Use a clean hierarchy to organize content logically.

- **URLs:** Keep them short, clean, lowercase, and descriptive (e.g., `/seo-fundamentals` instead of `/p=?123`).

### C. Off-Page SEO (Authority & Trust)

Proving to search engines that the rest of the web vouches for you.

- **Backlinks:** Focus on **quality over quantity**. One link from an authoritative, relevant site (like an industry news outlet) is worth more than dozens from spammy blogs.
- **Local SEO:** Claim and optimize your **Google Business Profile** and ensure consistent NAP data (Name, Address, Phone) across the web.

---

## 2. Advanced SEO Topics: The Competitive Edge

Once the basics are locked down, advanced SEO relies on deep technical control, holistic entity building, and adapting to modern AI search layouts.

### A. Core Web Vitals & Advanced UX

Google prioritizes real-world user experience as part of its page experience signals.

- **LCP (Largest Contentful Paint):** Measures loading performance. Aim for $2.5\text{ seconds}$ or faster.
- **INP (Interaction to Next Paint):** Measures page responsiveness to user inputs. Aim for $200\text{ milliseconds}$ or less.
- **CLS (Cumulative Layout Shift):** Measures visual stability. Prevent unexpected shifts by defining image dimensions.

### B. Semantic Search & Entity-Based SEO

Search engines no longer just look at keywords; they look at concepts and connections.

- **Topic Clusters & Pillar Pages:** Structure your site hierarchically. Build a comprehensive "Pillar" page about a broad topic, and link it heavily to specific "Cluster" sub-pages to build deep topical authority.
- **Structured Data (Schema Markup):** Use JSON-LD code to translate your text into machine-readable data. This earns you rich snippets in search results (stars, recipes, FAQs).
- **E-E-A-T Optimization:** Google evaluates **Experience, Expertise, Authoritativeness, and Trustworthiness**. Optimize this by showcasing robust author bios, linking to trusted sources, and accumulating verified, authentic reviews.

### C. AI Search & Optimization for the Modern SERP

The search landscape has fundamentally evolved beyond a simple list of ten blue links.

- **GEO (Generative Engine Optimization):** Optimizing for AI Overviews and engines like Perplexity. To be cited by AI search layers, ensure your content includes direct, unambiguous answers, well-cited statistics, and unique, authoritative viewpoints.
- **Log File Analysis:** For massive websites (thousands of pages), download server log files to see exactly how often search engine bots crawl your site, pinpointing wasted "crawl budget."
- **International & Multilingual SEO:** Using `hreflang` tags to serve the correct language or regional version of a site to international users without triggering duplicate content penalties.
