## 2024-05-23 - Mitigation of Reverse Tabnabbing
**Vulnerability:** External links using `target="_blank"` without `rel="noopener noreferrer"` allowed the target page to potentially access the `window.opener` object of the original page.
**Learning:** This vulnerability was present in static HTML templates, dynamically created DOM elements in JavaScript, and even in `window.open` calls.
**Prevention:** Always include `rel="noopener noreferrer"` (or `noopener,noreferrer` in `window.open` features) for any link that opens in a new tab.

## 2026-03-04 - Defense in Depth: Hardening against XSS and Inline Scripts
**Vulnerability:** Potential XSS from external HTML data injected via `innerHTML` and security risks from inline `onclick` handlers.
**Learning:** Using `innerHTML` for data from external APIs (like GitHub) is dangerous. Even if the source is currently trusted, it's a point of failure. Inline `onclick` handlers violate CSP best practices and are less maintainable than semantic `<a>` tags or `addEventListener`.
**Prevention:** Use `DOMParser` to safely extract text content from external HTML strings. Replace inline `onclick` navigation with semantic `<a>` tags and appropriate `rel="noopener noreferrer"` for external links.

## 2025-05-15 - Enforcement of HTTPS for External API Communication
**Vulnerability:** External API communication with the Augur metrics endpoint was using insecure HTTP, potentially exposing data-fetching scripts to Man-in-the-Middle (MITM) attacks.
**Learning:** Legacy scripts and configurations often retain outdated insecure protocols. Standardizing all external communication to HTTPS is a fundamental defense-in-depth practice.
**Prevention:** All API endpoints and external communication (e.g., in Python data-fetching scripts) must use HTTPS to ensure encrypted transmission and prevent MITM attacks.

## 2025-05-15 - Enforcing Secure Transport with CSP and HTTPS
**Vulnerability:** Use of insecure `http://` for API endpoints in build scripts and potential for data-driven links to point to insecure URLs, exposing users to man-in-the-middle (MITM) attacks.
**Learning:** While most hardcoded links may be secure, external data and build scripts are often overlooked and can introduce insecure transport paths. A global `upgrade-insecure-requests` CSP provides an effective safety net.
**Prevention:** Always use `https://` for API endpoints and external links. Implement `upgrade-insecure-requests` Content-Security-Policy to automatically upgrade any remaining insecure requests in the browser.

## 2025-05-16 - Defense in Depth: Hardening Headers and Third-Party Content
**Vulnerability:** Potential for sensitive information leakage via the `Referer` header and exploitation of unrestricted third-party iframes or legacy plugins.
**Learning:** Even if the site is static, browsers can leak navigation details to external sites. Unrestricted iframes can also perform unwanted actions if the embedded content is compromised.
**Prevention:** Implement a `strict-origin-when-cross-origin` Referrer-Policy and enhance CSP with `object-src 'none'` and `base-uri 'self'`. Always use the `sandbox` attribute for third-party iframes to apply the principle of least privilege.
