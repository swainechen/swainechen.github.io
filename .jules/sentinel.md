## 2024-05-23 - Mitigation of Reverse Tabnabbing
**Vulnerability:** External links using `target="_blank"` without `rel="noopener noreferrer"` allowed the target page to potentially access the `window.opener` object of the original page.
**Learning:** This vulnerability was present in static HTML templates, dynamically created DOM elements in JavaScript, and even in `window.open` calls.
**Prevention:** Always include `rel="noopener noreferrer"` (or `noopener,noreferrer` in `window.open` features) for any link that opens in a new tab.
