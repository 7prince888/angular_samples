Splunk RUM Setup for Angular — Option 1 Documentation
A step-by-step guide to enabling Splunk RUM session recording in an Angular app, gated by the ?rum=true query parameter.

Overview
This setup initializes Splunk RUM before Angular bootstraps, which is the recommended approach because it captures the full page load (including Angular's initial render). RUM only activates when the URL contains ?rum=true, giving you on-demand observability without recording every session.

Prerequisites
Before starting, make sure you have:

An Angular project (v15+ recommended; works with standalone or module-based apps)
A Splunk Observability Cloud account
Your Realm (e.g., us0, us1, eu0) — find it in Splunk Observability → Profile → Account Settings
A RUM Access Token — create one in Splunk Observability → Settings → Access Tokens → New Token → select the "RUM" authorization scope
Node.js 18+ and npm


Step 1: Install the packages
From your Angular project root, run: ( **** Replace with Artifactory ***** ) 
bashnpm install @splunk/otel-web @splunk/otel-web-session-recorder
This installs two packages:

@splunk/otel-web — the core RUM agent (tracks page loads, errors, XHR/fetch, user interactions)
@splunk/otel-web-session-recorder — the optional session replay recorder


Step 2: Locate your main.ts file
In a standard Angular project, main.ts lives at:
src/main.ts
This is the entry point that bootstraps your Angular app. You'll add the RUM initialization here — before the bootstrapApplication(...) or platformBrowserDynamic().bootstrapModule(...) call.

Step 3: Add the RUM initialization code
Open src/main.ts and add the imports and init block at the top.
For standalone-bootstrap projects (Angular 15+ default)