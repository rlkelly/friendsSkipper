var observer = new WebKitMutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
        if (mutation.target.className === 'skip-credits-container-node') {
            document.getElementsByClassName('nf-icon-button nf-flat-button no-icon')[0].click()
        }
    });
});

observer.observe(document, { subtree: true, childList: true });