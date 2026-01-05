document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const monthId = urlParams.get('id');

    if (!monthId) {
        // Redirect to home if no ID provided
        window.location.href = 'index.html';
        return;
    }

    const monthData = yearWheelData.find(m => m.id === monthId);

    if (!monthData) {
        document.querySelector('.month-container').innerHTML = '<h2>Månaden hittades inte</h2><a href="index.html">Tillbaka</a>';
        return;
    }

    renderMonthData(monthData);

    // Update active nav link
    document.querySelectorAll('.main-nav a').forEach(link => {
        link.classList.remove('active');
        if (link.textContent === 'Modul') link.classList.add('active');
    });
});

function renderMonthData(data) {
    // 1. Hero Section
    document.getElementById('monthName').textContent = data.month;
    document.getElementById('monthName').style.borderColor = data.color;
    document.getElementById('monthTopic').textContent = data.topic;
    document.getElementById('monthResponsible').textContent = `Ansvarig: ${data.responsible}`;

    // Set theme color variable for dynamic styling
    document.documentElement.style.setProperty('--current-theme-color', data.color);

    // 2. Intro Description
    const descriptionEl = document.getElementById('monthDescription');
    descriptionEl.textContent = data.description || "Beskrivning saknas för denna månad.";

    // 3. Resources (Material)
    const resourceList = document.getElementById('resourceList');
    resourceList.innerHTML = '';

    if (data.material) {
        // Videos
        if (data.material.videos && data.material.videos.length > 0) {
            renderMaterialCategory(resourceList, 'Filmer', '🎥', data.material.videos);
        }

        // Podcasts
        if (data.material.podcasts && data.material.podcasts.length > 0) {
            renderMaterialCategory(resourceList, 'Poddar', '🎧', data.material.podcasts);
        } else {
            // Optional: Show empty state for Podcasts if desired, or skip
            renderMaterialCategory(resourceList, 'Poddar', '🎧', [], "Inga poddar inlagda än.");
        }

        // Documents
        if (data.material.documents && data.material.documents.length > 0) {
            renderMaterialCategory(resourceList, 'Dokument', '📄', data.material.documents);
        }
    } else if (data.resources && data.resources.length > 0) {
        // Fallback for flat array if needed (though we updated data structure)
        data.resources.forEach(res => {
            // ... legacy render code or simple migration ...
            // Simplified for now assuming data structure update
        });
    } else {
        resourceList.innerHTML = '<p class="placeholder-text">Inga resurser tillgängliga ännu.</p>';
    }

    // 4. Guidelines
    const guidelinesContainer = document.getElementById('guidelinesContainer');
    guidelinesContainer.innerHTML = '';

    if (data.guidelines && data.guidelines.length > 0) {
        data.guidelines.forEach(group => {
            // Group Container
            const groupDiv = document.createElement('div');
            groupDiv.className = 'accordion-group';

            // Group Header
            const groupHeader = document.createElement('div');
            groupHeader.className = 'guideline-category-title accordion-header';
            groupHeader.innerHTML = `
                <span>${group.category}</span>
                <span class="accordion-icon">▼</span>
            `;

            // Group Content
            const groupContent = document.createElement('div');
            groupContent.className = 'accordion-content';

            // Group Items
            if (group.items && group.items.length > 0) {
                group.items.forEach(guide => {
                    const item = document.createElement('a');
                    item.href = guide.url;
                    item.className = 'guideline-item';
                    item.target = '_blank'; // Open in new tab

                    item.innerHTML = `
                        <span class="guide-icon">📋</span>
                        <div class="guide-content">
                            <span class="guide-title">${guide.title}</span>
                        </div>
                    `;
                    groupContent.appendChild(item);
                });
            }

            // Click Handler
            groupHeader.addEventListener('click', () => {
                const isOpen = groupContent.classList.contains('open');
                // Optional: Close others? Keeping it simple (independent toggles)
                groupContent.classList.toggle('open');
                groupHeader.classList.toggle('active');
            });

            // Default: Open
            groupContent.classList.add('open');
            groupHeader.classList.add('active');

            groupDiv.appendChild(groupHeader);
            groupDiv.appendChild(groupContent);
            guidelinesContainer.appendChild(groupDiv);
        });
    } else {
        guidelinesContainer.innerHTML = '<p class="placeholder-text">Inga specifika riktlinjer inlagda.</p>';
    }

    // 5. Contact
    document.getElementById('contactName').textContent = data.responsible;
}

function renderMaterialCategory(container, title, icon, items, emptyMsg = null) {
    const groupDiv = document.createElement('div');
    groupDiv.className = 'accordion-group';

    const header = document.createElement('div');
    header.className = 'material-category-title accordion-header';
    header.innerHTML = `
        <div style="display:flex; align-items:center; gap:0.5rem">
            <span class="cat-icon">${icon}</span> ${title}
        </div>
        <span class="accordion-icon">▼</span>
    `;

    const content = document.createElement('div');
    content.className = 'accordion-content';

    if (items.length > 0) {
        items.forEach(item => {
            const el = document.createElement('a');
            el.href = item.url;
            el.className = 'resource-item';
            el.target = '_blank';

            el.innerHTML = `
                <div class="res-content">
                    <span class="res-title">${item.title}</span>
                    ${item.description ? `<span class="res-desc">${item.description}</span>` : ''}
                </div>
            `;
            content.appendChild(el);
        });
    } else if (emptyMsg) {
        const msg = document.createElement('p');
        msg.className = 'placeholder-text small-placeholder';
        msg.textContent = emptyMsg;
        content.appendChild(msg);
    }

    // Toggle logic
    header.addEventListener('click', () => {
        content.classList.toggle('open');
        header.classList.toggle('active');
    });

    // Default: Open
    content.classList.add('open');
    header.classList.add('active');

    groupDiv.appendChild(header);
    groupDiv.appendChild(content);
    container.appendChild(groupDiv);
}
