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

## 2026-03-09 - Hardening Site-Wide Headers and Third-Party Embeds
**Vulnerability:** Lack of restricted sandboxing for third-party iframes and missing/ineffective Referrer Policy, potentially exposing user privacy or allowing unauthorized iframe actions.
**Learning:** Standardizing security headers in the global layout ensures defense-in-depth across all pages. Specifically, the Referrer Policy meta tag must use the exact name `referrer` to be recognized by browsers. Sandboxing iframes with specific flags allows content to function while preventing it from escaping the sandbox or performing unintended top-level navigations.
**Prevention:** Implement `object-src 'none'` and `base-uri 'self'` in CSP globally. Always use `<meta name="referrer" ...>` for Referrer Policy. Harden all third-party embeds with `sandbox` attributes using the minimum required permissions.

## 2025-05-16 - Strengthening Defense in Depth with CSP and XSS Prevention
**Vulnerability:** Potential for XSS due to unescaped Liquid variables in the main layout and an overly permissive image policy.
**Learning:** Even static sites can be vulnerable to injection if page-level metadata (like titles and descriptions) is not properly escaped when rendered into HTML. Furthermore, a loose CSP for images can be a vector for data exfiltration or UI redressing.
**Prevention:** Always use the `| escape` filter for Liquid variables in layouts. Harden the Content Security Policy by adding `img-src 'self' data: https:;` to restrict image sources and ensure secure transport. Ensure HTML attributes like `href` are always quoted to prevent parsing inconsistencies.

## 2025-05-17 - Site-Wide Defense-in-Depth and HTML Integrity
**Vulnerability:** Loose global security policy and inconsistent HTML integrity (unquoted attributes and malformed tags) which could lead to unpredictable DOM parsing and increased attack surface for injection.
**Learning:** Static sites often accumulate technical debt in HTML structure (e.g., `<p>` tags used as separators rather than containers) and lack modern browser protections. A restrictive `default-src 'self'` CSP provides a robust safety net against third-party script injection, while fixing HTML syntax ensures consistent application of security attributes like `rel="noopener noreferrer"`.
**Prevention:** Implement a restrictive `default-src 'self'` CSP and whitelist only necessary third-party domains. Maintain HTML integrity by quoting all attributes and ensuring correct tag nesting to prevent browser "quirks mode" or parsing exploits.

## 2024-05-24 - Strengthening CSP with Domain Whitelisting and HTML Refactoring
**Vulnerability:** Overly permissive `img-src https:` in CSP allowed images from any secure origin, and malformed HTML (e.g., `<div>` nested in `<p>`) led to unpredictable DOM parsing.
**Learning:** Broad CSP directives like `https:` for images increase the attack surface for UI redressing or data exfiltration via image-based side channels. Furthermore, invalid HTML structures can cause browsers to "fix" the DOM in ways that might bypass security assumptions or break layout consistency.
**Prevention:** Tighten CSP `img-src` to a specific whitelist of trusted third-party domains. Ensure strict HTML validity by using proper container elements (like `<div>` for block-level content) and replacing deprecated tags and attributes with semantic CSS.
## 2026-03-10 - Refactoring Malformed HTML and Deprecated Tags for Defense-in-Depth
**Vulnerability:** Malformed HTML (e.g., `<div>` nested in `<p>`, `<p>` nested in `<h3>`) and the use of deprecated tags/attributes (e.g., `<center>`, `align="center"`) created unpredictable DOM parsing and increased the technical debt of security-critical templates.
**Learning:** Inconsistent HTML structure can lead to "quirks mode" or unexpected browser parsing behaviors that may bypass security attributes or lead to injection vulnerabilities. Refactoring to modern, semantic HTML ensures that security-related attributes (like `sandbox` on iframes and `rel="noopener noreferrer"` on links) are consistently applied and parsed.
**Prevention:** Maintain strict HTML integrity by avoiding invalid nesting and replacing deprecated tags and attributes with semantic elements and centralized CSS classes.

## 2026-03-11 - Hardening Third-Party Scripts and HTML Integrity
**Vulnerability:** Third-party scripts (Twitter widgets) missing `crossorigin` attribute and malformed HTML (nested empty `<p>` tags) which could lead to credential leaking and unpredictable DOM parsing.
**Learning:** Even well-known third-party scripts should be fetched securely using `crossorigin="anonymous"` to protect user privacy. Furthermore, inconsistent HTML patterns like `<p><p>` increase the risk of parsing-related vulnerabilities and should be refactored into semantic structures.
**Prevention:** Always include `crossorigin="anonymous"` for third-party script tags. Maintain strict HTML validity by using proper paragraph blocks and avoiding invalid tag sequences to ensure a robust defense-in-depth posture.
