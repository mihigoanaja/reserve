(function() {
    // Define the resources in a JSON-like structure
    const resources = [
        { type: 'js', url: 'https://cdn.jsdelivr.net/npm/marked/marked.min.js' },
        { type: 'js', url: 'https://reserve.alreflections.net/treateBloggerMarkdown-V2.js' },
        { type: 'css', url: 'https://reserve.alreflections.net/pullAtinasResults-V3.css' },
        { type: 'js', url: 'https://reserve.alreflections.net/pullAtinasResults-V4.js' },
        { type: 'css', url: 'https://showcaseitchio.pages.dev/showcaseItchio.css' },
        { type: 'js', url: 'https://showcaseitchio.pages.dev/showcaseItchio-V2.js' },
        { type: 'js', url: 'https://onetag.alreflections.net/xpopup-V2.js' },
        { type: 'js', url: 'https://onetag.alreflections.net/alreflections-poa-buttons-V3.js' },
        { type: 'css', url: 'https://reserve.alreflections.net/css/styleYepperAdverts-V2.css' },
        { type: 'js', url: 'https://onetag.alreflections.net/xAnchor.js' },
        { type: 'js', url: 'https://onetag.alreflections.net/xBrendIn.js' },
        // { type: 'js', url: 'https://onetag.alreflections.net/xBlockInbound.js' },
        { type: 'css', url: 'https://reserve.alreflections.net/css/styleSubstackPosts-V1.css' },
        { type: 'js', url: 'https://onetag.alreflections.net/atinas-analytics.js' },
        { type: 'css', url: 'https://reserve.alreflections.net/css/responsiveYouTubeiFrame-V1.css' },
        { type: 'js', url: 'https://onetag.alreflections.net/adsterra.js' }
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
