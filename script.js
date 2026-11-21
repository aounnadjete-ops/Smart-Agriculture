

const crops = [
    {
        name: "Wheat",
        season: "Autumn",
        duration: "120 days",
        icon: "🌾"
    },
    {
        name: "Tomato",
        season: "Spring",
        duration: "90 days",
        icon: "🍅"
    },
    {
        name: "Potato",
        season: "Spring",
        duration: "100 days",
        icon: "🥔"
    },
    {
        name: "Corn",
        season: "Spring",
        duration: "110 days",
        icon: "🌽"
    }
];

const cropList = document.getElementById("crop-list");

crops.forEach(crop => {
    const card = document.createElement("div");

    card.className = "crop-card";

    card.innerHTML = `
        <h3>${crop.icon} ${crop.name}</h3>
        <p>Planting Season: ${crop.season}</p>
        <p>Growing Duration: ${crop.duration}</p>
    `;

    cropList.appendChild(card);
});

