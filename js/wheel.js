function createYearWheel() {
    const svg = document.getElementById('yearWheel');
    if (!svg) return;

    const centerX = 50;
    const centerY = 50;
    const radius = 45;
    const innerRadius = 15;
    const numSegments = 12;
    const angleStep = 360 / numSegments;

    yearWheelData.forEach((data, i) => {
        const startAngle = i * angleStep - 90; // Start at top
        const endAngle = (i + 1) * angleStep - 90;

        // Path calculation
        const x1 = centerX + radius * Math.cos(Math.PI * startAngle / 180);
        const y1 = centerY + radius * Math.sin(Math.PI * startAngle / 180);
        const x2 = centerX + radius * Math.cos(Math.PI * endAngle / 180);
        const y2 = centerY + radius * Math.sin(Math.PI * endAngle / 180);

        const ix1 = centerX + innerRadius * Math.cos(Math.PI * startAngle / 180);
        const iy1 = centerY + innerRadius * Math.sin(Math.PI * startAngle / 180);
        const ix2 = centerX + innerRadius * Math.cos(Math.PI * endAngle / 180);
        const iy2 = centerY + innerRadius * Math.sin(Math.PI * endAngle / 180);

        const largeArcFlag = angleStep > 180 ? 1 : 0;

        const d = `
            M ${ix1} ${iy1}
            L ${x1} ${y1}
            A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2}
            L ${ix2} ${iy2}
            A ${innerRadius} ${innerRadius} 0 ${largeArcFlag} 0 ${ix1} ${iy1}
            Z
        `;

        const segment = document.createElementNS("http://www.w3.org/2000/svg", "path");
        segment.setAttribute("d", d);
        segment.setAttribute("class", "wheel-segment");
        segment.setAttribute("id", `segment-${data.id}`);
        segment.style.setProperty('--segment-color', data.color);

        segment.addEventListener('click', () => selectMonth(data));
        segment.addEventListener('mouseenter', () => highlightMonth(data));

        svg.appendChild(segment);

        // Add text along arc (simplified for now)
        const textAngle = startAngle + angleStep / 2;
        const textRadius = (radius + innerRadius) / 2;
        const tx = centerX + textRadius * Math.cos(Math.PI * textAngle / 180);
        const ty = centerY + textRadius * Math.sin(Math.PI * textAngle / 180);

        const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text.setAttribute("x", tx);
        text.setAttribute("y", ty);
        text.setAttribute("class", "segment-text");
        text.setAttribute("text-anchor", "middle");
        text.setAttribute("dominant-baseline", "central");

        // Rotate text to follow radius
        text.setAttribute("transform", `rotate(${textAngle + 90}, ${tx}, ${ty})`);
        text.textContent = data.month.substring(0, 3);

        svg.appendChild(text);
    });
}

function selectMonth(data) {
    // Update UI components
    document.querySelectorAll('.wheel-segment').forEach(s => s.classList.remove('active'));
    document.getElementById(`segment-${data.id}`).classList.add('active');

    showMonthInfo(data);
}

function highlightMonth(data) {
    // Optional: Subtle feedback on hover
}

function showMonthInfo(data) {
    const infoBox = document.getElementById('monthInfo');
    const title = document.getElementById('monthTitle');
    const topic = document.getElementById('monthTopic');
    const responsible = document.getElementById('monthResponsible');
    const link = document.getElementById('monthLink');

    title.textContent = data.month;
    topic.textContent = data.topic;
    responsible.textContent = `Ansvarig: ${data.responsible}`;

    if (data.topic !== "Uppehåll") {
        link.classList.remove('hidden');
        link.href = `month.html?id=${data.id}`;
    } else {
        link.classList.add('hidden');
    }
}
