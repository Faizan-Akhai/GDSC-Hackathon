/* eslint-disable react/prop-types */
const Hospital = ({ name, specialties }) => (
  <li>
    {name} - Specialties: {specialties.join(", ")}
  </li>
);

const Food = ({ name }) => <li>{name}</li>;

const RecommendationApp = ({ age, weight, disease }) => {
  const recommendHospital = (age, weight, disease) => {
    // In a real-world scenario, you would have a database of hospitals with their specialties.
    const hospitals = [
      { name: "Apollo Hospital", specialties: ["Chest Pneumonia"] },
      { name: "Jaslok Hospital", specialties: ["Glioma Tumor"] },
      { name: "S. L. Raheja Hospital", specialties: ["Pituitary Tumor"] },
      // Add more hospitals with their specialties
    ];

    // In this example, the recommendation is based on the presence of specific specialties.
    const recommendedHospitals = hospitals.filter((hospital) =>
      hospital.specialties.some((spec) => disease.includes(spec))
    );

    return recommendedHospitals;
  };

  const recommendFood = (age, weight, disease) => {
    // In a real-world scenario, you would have a database of exercises with their suitability criteria.
    const foods = [
      {
        name: "Nuts,Beans,White Meat,Cold Water Fish",
        suitableConditions: ["Chest Pneumonia"],
      },
      {
        name: "Broccoli,Dark Chocolate,Tea,Beans",
        suitableConditions: ["Glioma Tumor", "Pituitary Tumor"],
      },
      // Add more exercises with their suitability criteria
    ];

    // In this example, the recommendation is based on the presence of suitable conditions.
    const recommendedFood = foods.filter((exercise) =>
      exercise.suitableConditions.some((cond) => disease.includes(cond))
    );

    return recommendedFood;
  };

  const recommendedHospitals = recommendHospital(age, weight, disease);
  const recommendedFoods = recommendFood(age, weight, disease);

  return (
    <div className="text-3xl text-center space-y-6">
      <h1 className="text-5xl font-bold text-center">Recommendations</h1>
      <br />
      <div>
        <h2>Recommended Hospitals:</h2>
        <ul>
          {recommendedHospitals.map((hospital, index) => (
            <Hospital key={index} {...hospital} />
          ))}
        </ul>
      </div>
      <div>
        <h2>Recommended Foods:</h2>
        <ul>
          {recommendedFoods.map((foods, index) => (
            <Food key={index} {...foods} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RecommendationApp;
