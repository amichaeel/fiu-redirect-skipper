const observer = new MutationObserver(() => {
    const metaTag = document.querySelector('meta[http-equiv="refresh"]');
    if (metaTag) {
        const content = metaTag.getAttribute("content");
        const match = content.match(/url=(.+)/i);
        if (match && match[1]) {
            observer.disconnect();
            window.location.replace(match[1]);
        }
    }
});

observer.observe(document.documentElement, {
    childList: true,
    subtree: true
});
