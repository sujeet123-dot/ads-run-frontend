import {
  Eye, Layers, Target, TrendingUp,
  Users, Heart, Share2, BarChart2,
  Search, MousePointer, ShoppingBag, DollarSign,
  UserCheck, Filter, PhoneCall, Zap,
  Cpu, Globe, Shield, Activity,
  PieChart, LineChart, Bell,
  Megaphone, Sparkles, MessageCircle,
} from 'lucide-react';

export const SERVICES_DATA = [
  {
    slug: 'branding-campaigns',
    icon: Sparkles,
    title: 'Branding Campaigns',
    tagline: 'Build the brand people choose before they search.',
    description:
      'In a crowded market, visibility isn\'t enough — you need resonance. Our branding campaigns are engineered to plant your brand in the minds of your target audience across every touchpoint: display, video, OTT, and beyond. We handle creative strategy, media placement, and brand-lift measurement so you can track equity, not just clicks.',
    image: '/zm2.jpg',
    imageAlt: 'Branding campaign creative work',
    accent: {
      color: 'text-amber-400',
      bg: 'bg-amber-500/10',
      border: 'border-amber-500/30',
      glow: 'bg-amber-500/20',
      btnBg: 'bg-amber-500 hover:bg-amber-600',
      shadow: 'shadow-amber-900/30',
    },
    stats: [
      { value: '3×', label: 'Brand Recall Lift' },
      { value: '500M+', label: 'Monthly Impressions' },
      { value: '92%', label: 'Avg Viewability' },
    ],
    benefits: [
      {
        icon: Eye,
        title: 'Multi-Channel Reach',
        desc: 'We run your brand across display, video, OTT/CTV, and programmatic — every screen where your audience spends time.',
      },
      {
        icon: Layers,
        title: 'CPM, CPC & CPV Models',
        desc: 'Flexible pricing models based on your goals — pay for impressions, clicks, or completed video views with full budget control.',
      },
      {
        icon: TrendingUp,
        title: 'Brand Lift Measurement',
        desc: 'We run brand-lift studies to measure unaided recall, ad awareness, and purchase intent — real numbers, not vanity metrics.',
      },
      {
        icon: Target,
        title: 'Audience-First Creative',
        desc: 'Our team crafts messaging and visuals that speak to your precise audience segments — not generic banners, real creative.',
      },
    ],
    process: [
      { num: '01', title: 'Brand Audit', desc: 'We map your current brand perception, competitive landscape, and audience gaps before spending a rupee.' },
      { num: '02', title: 'Creative Strategy', desc: 'Messaging framework, visual identity guidelines, and ad creative tailored to each channel and audience.' },
      { num: '03', title: 'Campaign Launch', desc: 'Multi-channel deployment with precise targeting across display, video, and programmatic inventory.' },
      { num: '04', title: 'Lift Reporting', desc: 'Monthly brand-lift reports showing awareness, recall, and consideration shifts with clear ROI attribution.' },
    ],
    faqs: [
      {
        q: 'How is branding different from performance advertising?',
        a: 'Performance advertising optimises for immediate conversions (clicks, leads, sales). Branding campaigns optimise for awareness, recall, and long-term purchase intent — they build the pipeline that makes performance ads more effective over time.',
      },
      {
        q: 'What is the minimum budget for a branding campaign?',
        a: 'We typically recommend a minimum of ₹1.5L/month to achieve statistically meaningful reach and frequency. Smaller budgets tend to spread too thin to move brand metrics.',
      },
      {
        q: 'How long does it take to see brand-lift results?',
        a: 'Meaningful brand-lift data typically emerges after 6–8 weeks of consistent exposure. We run monthly read-outs but recommend evaluating brand metrics on a 90-day cycle.',
      },
      {
        q: 'Can you create the ad creative too?',
        a: 'Yes — creative strategy and production are included for all managed branding campaigns. We handle copywriting, design, and video scripting in-house.',
      },
    ],
  },

  {
    slug: 'social-media-marketing',
    icon: BarChart2,
    title: 'Social Media Marketing',
    tagline: 'Grow your audience. Own your category.',
    description:
      'Social is the biggest stage in the world — and most brands are performing to an empty house. Our social media marketing service builds real, engaged audiences through strategic content, paid growth, and platform-native campaigns. From YouTube subscriber growth to Twitter/X influence and Instagram community building, we handle every channel with channel-specific expertise.',
    image: '/zm3.jpg',
    imageAlt: 'Social media marketing campaigns',
    accent: {
      color: 'text-blue-400',
      bg: 'bg-blue-500/10',
      border: 'border-blue-500/30',
      glow: 'bg-blue-500/20',
      btnBg: 'bg-blue-500 hover:bg-blue-600',
      shadow: 'shadow-blue-900/30',
    },
    stats: [
      { value: '10M+', label: 'Monthly Reach' },
      { value: '4.8%', label: 'Avg Engagement Rate' },
      { value: '150+', label: 'Accounts Managed' },
    ],
    benefits: [
      {
        icon: Users,
        title: 'YouTube & Twitter/X Growth',
        desc: 'Subscriber and follower acquisition campaigns using paid promotion, influencer seeding, and algorithmic content strategies.',
      },
      {
        icon: Heart,
        title: 'Organic-Like Growth Plans',
        desc: 'We blend paid and organic tactics to grow audiences that look and behave like natural fans — not inflated bot counts.',
      },
      {
        icon: Share2,
        title: 'Political & Public Figure Services',
        desc: 'Specialised digital presence management for politicians, public figures, and candidates — reputation, reach, and influence at scale.',
      },
      {
        icon: BarChart2,
        title: 'Performance Analytics',
        desc: 'Weekly reporting on follower growth, engagement rate, reach, impressions, and content performance by format and topic.',
      },
    ],
    process: [
      { num: '01', title: 'Channel Audit', desc: 'We audit your existing profiles, benchmark against competitors, and identify the highest-leverage growth opportunities.' },
      { num: '02', title: 'Content & Growth Plan', desc: 'A 30-day content calendar paired with a paid promotion strategy — every post has a purpose.' },
      { num: '03', title: 'Execution & Publishing', desc: 'Our team creates, schedules, and posts across all channels — you approve, we execute.' },
      { num: '04', title: 'Optimise & Report', desc: 'Weekly performance reviews, monthly growth reports, and continuous strategy refinement based on what the data shows.' },
    ],
    faqs: [
      {
        q: 'Which platforms do you manage?',
        a: 'We manage YouTube, Twitter/X, Instagram, Facebook, and LinkedIn. Our core strength is YouTube and Twitter/X, where we have the deepest platform expertise.',
      },
      {
        q: 'Are the followers real?',
        a: 'Yes, always. We never use bots or fake engagement. All growth comes from paid promotion to real users or organic content distribution — violating platform terms is never an option.',
      },
      {
        q: 'How quickly will I see follower growth?',
        a: 'With paid promotion, you\'ll see measurable growth within the first week. Organic-only growth is slower — typically 4–8 weeks to see a clear trend — but more durable.',
      },
    ],
  },

  {
    slug: 'google-search-ads',
    icon: Search,
    title: 'Google & Search Ads',
    tagline: 'Be there when your customers are already searching.',
    description:
      'Google Search is the highest-intent advertising channel in the world — people who are searching are already in buying mode. Our Google Ads team manages Search, Display, Shopping, and YouTube campaigns with obsessive attention to Quality Score, bid strategy, and conversion tracking. We don\'t just spend your budget — we make every rupee accountable.',
    image: '/zm4.jpg',
    imageAlt: 'Google search advertising dashboard',
    accent: {
      color: 'text-emerald-400',
      bg: 'bg-emerald-500/10',
      border: 'border-emerald-500/30',
      glow: 'bg-emerald-500/20',
      btnBg: 'bg-emerald-500 hover:bg-emerald-600',
      shadow: 'shadow-emerald-900/30',
    },
    stats: [
      { value: '6.2×', label: 'Avg ROAS' },
      { value: '₹50Cr+', label: 'Ad Spend Managed' },
      { value: '9/10', label: 'Avg Quality Score' },
    ],
    benefits: [
      {
        icon: Search,
        title: 'Search Campaign Management',
        desc: 'Keyword research, match-type strategy, negative keyword sculpting, and ad copy testing to dominate search results at the lowest CPC.',
      },
      {
        icon: MousePointer,
        title: 'Display & Remarketing',
        desc: 'Custom intent and remarketing audiences across the Google Display Network — re-engage visitors and prospect lookalikes at scale.',
      },
      {
        icon: ShoppingBag,
        title: 'Shopping & Performance Max',
        desc: 'Product feed optimisation and PMax campaigns for e-commerce brands that need to maximise ROAS across Google\'s full inventory.',
      },
      {
        icon: DollarSign,
        title: 'Conversion Tracking & Attribution',
        desc: 'Full Google Tag Manager setup, GA4 integration, and enhanced conversion tracking — so every click traces back to revenue.',
      },
    ],
    process: [
      { num: '01', title: 'Account Audit', desc: 'Thorough review of existing campaigns, wasted spend, Quality Scores, and missed keyword opportunities.' },
      { num: '02', title: 'Strategy & Structure', desc: 'Campaign architecture, keyword clustering, bidding strategy, and landing page recommendations.' },
      { num: '03', title: 'Launch & Track', desc: 'Campaign launch with full conversion tracking in place — no data gaps, no guesswork from day one.' },
      { num: '04', title: 'Optimise Weekly', desc: 'Bid adjustments, search term mining, ad copy rotation, and Quality Score improvements every week.' },
    ],
    faqs: [
      {
        q: 'What is the minimum ad spend you manage?',
        a: 'We work with ad budgets from ₹50K/month upwards. Below that threshold it\'s difficult to gather enough data for meaningful optimisation.',
      },
      {
        q: 'Do you charge a percentage of ad spend?',
        a: 'Our management fee is a flat monthly retainer, not a percentage of spend — so we never have an incentive to inflate your budget.',
      },
      {
        q: 'How long before I see results?',
        a: 'Search campaigns typically show clear performance trends within 2–4 weeks. Display and YouTube campaigns need 4–6 weeks to exit the learning phase.',
      },
      {
        q: 'Can you take over an existing Google Ads account?',
        a: 'Yes, account takeovers are common. We audit the existing structure, identify waste, and rebuild strategically — often finding immediate savings.',
      },
    ],
  },

  {
    slug: 'lead-generation',
    icon: Megaphone,
    title: 'Lead Generation',
    tagline: 'Sales-ready leads, not just form fills.',
    description:
      'Most lead generation agencies hand you a spreadsheet and call it done. We build the entire funnel — targeting, creative, landing page, and qualification — then deliver leads that are actually ready to buy. Our multi-channel approach (Meta, Google, LinkedIn, programmatic) finds your buyers wherever they are and moves them down the funnel with intent.',
    image: '/zm5.jpg',
    imageAlt: 'Lead generation funnel and pipeline',
    accent: {
      color: 'text-orange-400',
      bg: 'bg-orange-500/10',
      border: 'border-orange-500/30',
      glow: 'bg-orange-500/20',
      btnBg: 'bg-orange-500 hover:bg-orange-600',
      shadow: 'shadow-orange-900/30',
    },
    stats: [
      { value: '50K+', label: 'Leads Delivered' },
      { value: '32%', label: 'Avg Lead-to-Meeting Rate' },
      { value: '100+', label: 'Active Lead Campaigns' },
    ],
    benefits: [
      {
        icon: UserCheck,
        title: 'Qualified Lead Delivery',
        desc: 'We don\'t just generate contacts — we qualify leads against your ICP (ideal customer profile) before delivering them to your sales team.',
      },
      {
        icon: Filter,
        title: 'Multi-Channel Funnels',
        desc: 'Meta, Google, LinkedIn, and programmatic all working together — each channel optimised for its role in the funnel, not treated the same.',
      },
      {
        icon: PhoneCall,
        title: 'Daily / Weekly / Monthly Plans',
        desc: 'Flexible lead volume plans based on your sales team capacity — from 10 leads/day to enterprise-scale pipeline generation.',
      },
      {
        icon: Zap,
        title: 'CRM Integration & Alerts',
        desc: 'Leads flow directly into your CRM (HubSpot, Salesforce, Zoho, or custom) with instant notifications so your team never misses a hot prospect.',
      },
    ],
    process: [
      { num: '01', title: 'ICP Definition', desc: 'We define your ideal customer profile — industry, role, company size, behaviour signals — before building a single ad.' },
      { num: '02', title: 'Funnel Build', desc: 'Landing pages, ad creative, lead forms, and automated follow-up sequences — the full stack, not just ad placement.' },
      { num: '03', title: 'Multi-Channel Launch', desc: 'Simultaneous deployment across Meta, Google, and LinkedIn with channel-specific creative and bidding.' },
      { num: '04', title: 'Qualify & Deliver', desc: 'Real-time lead qualification against your ICP and direct CRM delivery with daily performance reporting.' },
    ],
    faqs: [
      {
        q: 'What industries do you generate leads for?',
        a: 'We have active campaigns in real estate, B2B SaaS, financial services, healthcare, education, and manufacturing. Our approach adapts to any B2B or considered-purchase B2C vertical.',
      },
      {
        q: 'What counts as a "qualified" lead?',
        a: 'We define qualification criteria with you upfront — typically: valid contact info, matching job title/industry/geography, and explicit interest expressed via a form or call. Any lead that doesn\'t meet criteria is replaced.',
      },
      {
        q: 'Can I set a cost-per-lead target?',
        a: 'Yes. We work to a target CPL agreed upfront. If we consistently miss it, you don\'t pay the overage — our incentives are aligned with yours.',
      },
    ],
  },

  {
    slug: 'programmatic-advertising',
    icon: Cpu,
    title: 'Programmatic Advertising',
    tagline: 'The right impression, to the right person, at the right price.',
    description:
      'Programmatic advertising uses real-time bidding to buy ad inventory at scale — across millions of publishers, in milliseconds. Our programmatic desk operates across multiple DSPs, with direct publisher deals and private marketplace access that most small agencies can\'t offer. We bring institutional-grade programmatic buying to growth-stage brands.',
    image: '/zm6.jpg',
    imageAlt: 'Programmatic advertising technology',
    accent: {
      color: 'text-violet-400',
      bg: 'bg-violet-500/10',
      border: 'border-violet-500/30',
      glow: 'bg-violet-500/20',
      btnBg: 'bg-violet-500 hover:bg-violet-600',
      shadow: 'shadow-violet-900/30',
    },
    stats: [
      { value: '95%', label: 'Avg Fill Rate' },
      { value: '2B+', label: 'Weekly Impressions Available' },
      { value: '40+', label: 'DSP & Exchange Partners' },
    ],
    benefits: [
      {
        icon: Cpu,
        title: 'Real-Time Bidding (RTB)',
        desc: 'Access open exchange inventory and bid on individual impressions in real time — ensuring you never overpay for reach.',
      },
      {
        icon: Globe,
        title: 'Private Marketplace & PMP',
        desc: 'Preferred access to premium publisher inventory through private marketplace deals — better placements, higher viewability, lower fraud.',
      },
      {
        icon: Shield,
        title: 'Brand Safety Controls',
        desc: 'IAS and DoubleVerify integration, keyword blocking, and content-category exclusions to keep your brand away from objectionable environments.',
      },
      {
        icon: Activity,
        title: 'Advanced Audience Targeting',
        desc: 'First-party data onboarding, lookalike modelling, contextual targeting, and geo-fencing — audience precision at true programmatic scale.',
      },
    ],
    process: [
      { num: '01', title: 'Audience Mapping', desc: 'First-party data analysis, third-party audience augmentation, and lookalike modelling to define who we\'re bidding for.' },
      { num: '02', title: 'Inventory Strategy', desc: 'Open exchange vs. PMP vs. direct deal recommendations based on your CPM targets, brand safety needs, and geo.' },
      { num: '03', title: 'Campaign Trafficking', desc: 'Creative trafficking, pixel placement, frequency caps, and bid strategy configuration across all active DSPs.' },
      { num: '04', title: 'Optimise & Report', desc: 'Daily bid optimisation, weekly viewability and brand-safety reports, monthly campaign post-mortems.' },
    ],
    faqs: [
      {
        q: 'What DSPs do you work with?',
        a: 'We operate on DV360, The Trade Desk, MediaMath, and several regional DSPs. The right platform depends on your inventory needs, geo, and budget — we recommend based on your specific goals.',
      },
      {
        q: 'How is programmatic different from Google Display Ads?',
        a: 'Google Display is a walled garden — you can only buy Google-network inventory. Programmatic buys across the open web, giving access to inventory Google doesn\'t sell, often at more competitive CPMs.',
      },
      {
        q: 'How do you prevent ad fraud?',
        a: 'We use IAS or DoubleVerify for pre-bid filtering, traffic quality scoring, and post-campaign invalid traffic (IVT) reporting — fraud rates on our campaigns average under 1%.',
      },
    ],
  },

  {
    slug: 'analytics-reporting',
    icon: PieChart,
    title: 'Analytics & Reporting',
    tagline: 'Stop guessing. Start knowing.',
    description:
      'Most marketing teams drown in data but starve for insights. Our analytics service cuts through the noise — setting up clean tracking, building dashboards that actually get used, and translating numbers into decisions that improve marketing performance. From GA4 implementation to cross-channel attribution modelling, we make your data work for you.',
    image: '/zm1.jpg',
    imageAlt: 'Analytics dashboard and data reporting',
    accent: {
      color: 'text-cyan-400',
      bg: 'bg-cyan-500/10',
      border: 'border-cyan-500/30',
      glow: 'bg-cyan-500/20',
      btnBg: 'bg-cyan-500 hover:bg-cyan-600',
      shadow: 'shadow-cyan-900/30',
    },
    stats: [
      { value: 'Live', label: 'Real-Time Data' },
      { value: '50+', label: 'Tracked Metrics' },
      { value: '100%', label: 'Custom to Your Business' },
    ],
    benefits: [
      {
        icon: BarChart2,
        title: 'Real-Time Dashboards',
        desc: 'Custom Looker Studio or Tableau dashboards connected to all your ad platforms — one source of truth, always up to date.',
      },
      {
        icon: PieChart,
        title: 'Cross-Channel Attribution',
        desc: 'We model how each touchpoint contributes to conversions — moving beyond last-click to give every channel the credit it deserves.',
      },
      {
        icon: LineChart,
        title: 'GA4 & Tag Implementation',
        desc: 'Full GA4 setup, Google Tag Manager configuration, event tracking, and e-commerce data layer implementation done right the first time.',
      },
      {
        icon: Bell,
        title: 'Automated Alerts & Reports',
        desc: 'Scheduled email reports and anomaly alerts that notify your team the moment performance deviates from your targets.',
      },
    ],
    process: [
      { num: '01', title: 'Tracking Audit', desc: 'We audit your current analytics setup — finding gaps, duplicate tags, and misattributed conversions before building anything new.' },
      { num: '02', title: 'Data Architecture', desc: 'Define your KPI hierarchy, event taxonomy, and attribution model before touching a single tag.' },
      { num: '03', title: 'Implementation', desc: 'GA4, GTM, ad platform pixels, and CRM integrations — all configured, tested, and validated end-to-end.' },
      { num: '04', title: 'Dashboard & Reporting', desc: 'Custom dashboards, automated weekly reports, and monthly insight calls that turn data into clear business decisions.' },
    ],
    faqs: [
      {
        q: 'Do you only work with Google Analytics?',
        a: 'No — we work with GA4, Adobe Analytics, Mixpanel, Amplitude, and custom BI tools. For most clients we recommend GA4 as the foundation, with additional tools layered for depth.',
      },
      {
        q: 'Can you fix our existing broken tracking?',
        a: 'Yes, tracking audits and remediation are one of our most common engagements. We systematically find and fix duplicate events, missing conversions, and attribution gaps.',
      },
      {
        q: 'What does a custom dashboard look like?',
        a: 'Typically a Looker Studio report with 3–5 pages covering: overall business performance, channel-level performance, audience insights, and conversion funnel analysis. Built for your team, not a generic template.',
      },
    ],
  },
];

export const getServiceBySlug = (slug) => SERVICES_DATA.find((s) => s.slug === slug);
