// ┬  ┬┌─┐┌┬┐┌─┐
// │  │└─┐ │ └─┐
// ┴─┘┴└─┘ ┴ └─┘
// Functions for printing both lists

const generateFirstListsContainer = () => {
	for (const list of CONFIG.firstlistsContainer) {
    // Start des HTML-Templates
    let item = `
      <div class="card list list__${list.id}" id="list_${list.id}">
        <i class="listIcon" icon-name="${list.icon}"></i>
    `;
    
    // Link 0 immer anzeigen
    item += `
      <a
        target="${CONFIG.openInNewTab ? '_blank' : ''}"
        href="${list.links[0].link}"
        class="listItem"
      >${list.links[0].name}</a>
    `;
    
    // Link 1 immer anzeigen
    item += `
      <a
        target="${CONFIG.openInNewTab ? '_blank' : ''}"
        href="${list.links[1].link}"
        class="listItem"
      >${list.links[1].name}</a>
    `;
    
    // Link 2 nur anzeigen, wenn ein Name gesetzt ist
    if (list.links[2].name) {
      item += `
        <a
          target="${CONFIG.openInNewTab ? '_blank' : ''}"
          href="${list.links[2].link}"
          class="listItem"
        >${list.links[2].name}</a>
      `;
    }

    // Link 3 nur anzeigen, wenn ein Name gesetzt ist
    if (list.links[3].name) {
      item += `
        <a
          target="${CONFIG.openInNewTab ? '_blank' : ''}"
          href="${list.links[3].link}"
          class="listItem"
        >${list.links[3].name}</a>
      `;
    }

    // Schließen des div-Containers
    item += `
      </div>
    `;

    // Füge das HTML in den DOM ein
    const position = 'beforeend';
    lists_1.insertAdjacentHTML(position, item);
	}
  };

const generateSecondListsContainer = () => {
  for (const list of CONFIG.secondListsContainer) {
    // Start des HTML-Templates
    let item = `
      <div class="card list list__${list.id}" id="list_${list.id}">
        <i class="listIcon" icon-name="${list.icon}"></i>
    `;
    
    // Link 0 immer anzeigen
    item += `
      <a
        target="${CONFIG.openInNewTab ? '_blank' : ''}"
        href="${list.links[0].link}"
        class="listItem"
      >${list.links[0].name}</a>
    `;
    
    // Link 1 immer anzeigen
    item += `
      <a
        target="${CONFIG.openInNewTab ? '_blank' : ''}"
        href="${list.links[1].link}"
        class="listItem"
      >${list.links[1].name}</a>
    `;
    
    // Link 2 nur anzeigen, wenn ein Name gesetzt ist
    if (list.links[2].name) {
      item += `
        <a
          target="${CONFIG.openInNewTab ? '_blank' : ''}"
          href="${list.links[2].link}"
          class="listItem"
        >${list.links[2].name}</a>
      `;
    }

    // Link 3 nur anzeigen, wenn ein Name gesetzt ist
    if (list.links[3].name) {
      item += `
        <a
          target="${CONFIG.openInNewTab ? '_blank' : ''}"
          href="${list.links[3].link}"
          class="listItem"
        >${list.links[3].name}</a>
      `;
    }

    // Schließen des div-Containers
    item += `
      </div>
    `;

    // Füge das HTML in den DOM ein
    const position = 'beforeend';
    lists_2.insertAdjacentHTML(position, item);
  }
};



const generateLists = () => {
	switch (CONFIG.bentoLayout) {
		case 'bento':
			generateFirstListsContainer();
			break;
		case 'lists':
			generateFirstListsContainer();
			generateSecondListsContainer();
			break;
		default:
			break;
	}
};

generateLists();
