Array.from(document.getElementsByClassName('atinas-results')).forEach(async (resultsContainer)=>{
	let r = resultsContainer;
    let renderer=await fetch("https://reserve.alreflections.net/json/atinas-apis.json");
    let apijson=await renderer.json();
    let apiurl=apijson[parseInt(Math.random()*(apijson.length))];
	let url = [apiurl,'?dq=', r.dataset.query, '&type=', r.dataset.search].join("");
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
				var resultDiv=document.createElement("div");
				resultDiv.classList.add("result");
				resultDiv.innerHTML= `
					<img src='${result.image}' style='${(r.dataset.showImage=="yes")||"display:none;"}'/>
					<h2>${result.title}</h2>
					<p class='description'>${result.description}</p>
					<a class='button' href='${result.link}' target='_blank'>Read More</a>
				`;
				if ((resultsContainer.dataset.limit == undefined) || (resultsContainer.dataset.limit >= resultCount)) {
					resultsContainer.appendChild(resultDiv);
				}
			});
            if (resultsContainer.innerHTML!='') {
				var pbaBtn=document.createElement("a");
				pbaBtn.href="https://atinas.alreflections.net";
				pbaBtn.classList.add("pba-btn");
				pbaBtn.innerHTML='<i><b>Powered By Atinas</b> - Alreflections&#39; Search Engine</i>';
				resultsContainer.appendChild(pbaBtn);
            }
		})
		.catch(error => console.error('Error:', error));
});
