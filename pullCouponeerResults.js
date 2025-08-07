(function loadCouponeerAds() {
    Array.from(document.getElementsByClassName('couponeer-results')).forEach(resultsContainer => {
      const r = resultsContainer;
      if (r.innerHTML!="") return;

      const query = encodeURIComponent(r.dataset.query || 'discounts');
      const coupon = encodeURIComponent(r.dataset.coupon || '');
      const url = `https://couponeer.alreflections.net/api.php?client=app&q=${query}&coupon=${coupon}`;

      fetch(url)
        .then(response => response.json())
        .then(data => {
          resultsContainer.innerHTML = '';
          let resultCount = 0;
          let products = data.products || [];

          if (r.classList.contains('reverse')) {
            products = products.reverse();
          }

          products.forEach(product => {
            resultCount++;
            const showImage = r.dataset.showImage === 'yes' ? '' : 'display:none;';
            const productHTML = `
              <div class='result'>
                <img src='${product.image}' style='${showImage}' />
                <h2>${product.title}</h2>
                <p class='description'>${product.description}</p>
                <a class='button' href='${product.link}' target='_blank'>Buy Now</a>
              </div>
            `;

            if (!r.dataset.limit || resultCount <= parseInt(r.dataset.limit, 10)) {
              resultsContainer.innerHTML += productHTML;
            }
          });
        })
        .catch(error => {
          console.error('Error fetching Couponeer data:', error);
          resultsContainer.innerHTML = '<p>Error loading content.</p>';
        });
    });
  })();
