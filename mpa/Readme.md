How to get the local file:

npm: npm i @splunk/otel-web then copy node_modules/@splunk/otel-web/dist/browser/splunk-otel-web.js (and …-session-recorder.js if you use it) into your public/static folder at build time.
Or download the file once from https://cdn.signalfx.com/o11y-gdi-rum/latest/splunk-otel-web.js and commit it under public/vendor/splunk-rum/.

Note:  removed crossOrigin="anonymous" since it's same-origin now. If version the file (e.g. splunk-otel-web.v0.20.0.js), update the src path accordingly and add a long-cache header.