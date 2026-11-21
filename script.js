
const crops = [
    {
        name: "Wheat",
        season: "Autumn",
        duration: "120 days"
    },
    {
        name: "Tomato",
        season: "Spring",
        duration: "90 days"
    },
    {
        name: "Potato",
        season: "Spring",
        duration: "100 days"
    }
];

console.log("Smart Agriculture System");

crops.forEach(crop => {
    console.log(
        crop.name + " - " +
        crop.season + " - " +
        crop.duration
    );
});
