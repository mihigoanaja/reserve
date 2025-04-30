Array.from(document.getElementsByClassName('atinas-results')).forEach((resultsContainer)=>{
	let r = resultsContainer;
	let url = ['https://atinas.alreflections.net/search/api.php?dq=', r.dataset.query, '&type=', r.dataset.search].join("");
	fetch(url)
		.then(response => response.json())
		.then(data => {
			resultsContainer.innerHTML = '';
			let resultCount = 0;
			if (resultsContainer.classList.contains('reverse')) {
				data.reverse();
			}
			data.forEach(result => {
				resultCount++;
				const resultHTML = `
					<div class='result'>
						<img src='${result.image}' style='${(r.dataset.showImage=="yes")||"display:none;"}'/>
						<h2>${result.title}</h2>
						<p class='description'>${result.description}</p>
						<a class='button' href='${result.link}' target='_blank'>Read More</a>
					</div>
				`;
				if ((resultsContainer.dataset.limit == undefined) || (resultsContainer.dataset.limit >= resultCount)) {
					resultsContainer.innerHTML += resultHTML;
				}
			});
		})
		.catch(error => console.error('Error:', error));
});
