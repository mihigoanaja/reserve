(() => {
	formContainers = document.querySelectorAll('.relative-form');

	formContainers.forEach(container => {
		form=document.createElement("form");
		form.classList.add("form-element")
		container.appendChild(form);
		formData = JSON.parse(container.getAttribute('data-json'));
		formTitle=document.createElement("h2");
		formTitle.innerText = formData.title;
		form.appendChild(formTitle);

		sectionsContainer = document.createElement("div");
		form.appendChild(sectionsContainer);
		form.action=formData.action||"";
		formData.sections.forEach(section => {
			sectionDiv = document.createElement("div");
			var sectionTitle = document.createElement("h3");
			sectionTitle.innerText = section.title;
			sectionDiv.appendChild(sectionTitle);
			sectionDiv.classList.add("form-section")

			section.fields.forEach(field => {
				const fieldDiv = document.createElement("div");
				fieldDiv.innerHTML = `
					<label for="${field.label.replaceAll(' ','_')}" class="label">${field.label}</label>
					<input id="${field.label.replaceAll(' ','_')}" name="${field.label.replaceAll(' ','_')}" class="input" ${field.required ? 'required' : ''}>
				`;
				sectionDiv.appendChild(fieldDiv);
			});

			sectionsContainer.appendChild(sectionDiv);
		});
		var submitContainer = document.createElement("div");
		submitContainer.classList.add("submit-container");
		form.appendChild(submitContainer);
		submitContainer.innerHTML=`<input type="submit" value="${formData.submit||'Proceed Now'}" class="submit-button">`;
	});
})();
