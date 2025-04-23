(function() {
    // Define the resources in a JSON-like structure
    const resources = [
        { type: 'js', url: 'https://cdn.jsdelivr.net/npm/marked/marked.min.js' },
        { type: 'js', url: 'https://reserve-cc2.pages.dev/treateBloggerMarkdown.js' },
        { type: 'css', url: 'https://reserve-cc2.pages.dev/pullAtinasResults.css' },
        { type: 'js', url: 'https://reserve-cc2.pages.dev/pullAtinasResults-V2.js' },
        { type: 'css', url: 'https://showcaseitchio.pages.dev/showcaseItchio.css' },
        { type: 'js', url: 'https://showcaseitchio.pages.dev/showcaseItchio.js' }
    ];

    // Loop through the resources and add them to the document
    resources.forEach(resource => {
        if (resource.type === 'js') {
            // Create and append script tags for JavaScript files
            var script = document.createElement('script');
            script.src = resource.url;
            script.type = 'text/javascript';
            script.async = true;
            document.head.appendChild(script);
        } else if (resource.type === 'css') {
            // Create and append link tags for CSS files
            var link = document.createElement('link');
            link.href = resource.url;
            link.rel = 'stylesheet';
            document.head.appendChild(link);
        }
    });
})();
