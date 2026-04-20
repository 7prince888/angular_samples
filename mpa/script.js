<script>
  (function () {
    var params = new URLSearchParams(window.location.search);
    var enabled = params.get('rum') === 'true';

    try {
      if (enabled) sessionStorage.setItem('splunk_rum_enabled', '1');
      if (sessionStorage.getItem('splunk_rum_enabled') === '1') enabled = true;
    } catch (e) {}

    if (!enabled || window.__splunkRumLoaded) return;
    window.__splunkRumLoaded = true;

    var s = document.createElement('script');
    s.src = '/vendor/splunk-rum/splunk-otel-web.js';   // local path
    s.async = false;
    s.onload = function () {
      window.SplunkRum && window.SplunkRum.init({
        realm: 'us1',
        rumAccessToken: 'YOUR_RUM_ACCESS_TOKEN',
        applicationName: 'my-spa',
        version: '1.0.0',
        deploymentEnvironment: 'production'
      });
    };
    document.head.appendChild(s);
  })();
</script>