const drinkOptions = ['Drink', 'Tea', 'Coffee'];
const teaOptions = ['Tea', 'Green Tea', 'White Tea'];

function MyComponent() {
  const [selectedDrink, setSelectedDrink] = useState('');
  const [selectedTea, setSelectedTea] = useState('');

  const handleDrinkChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedDrink(event.target.value);
    setSelectedTea('');
  };

  const handleTeaChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedTea(event.target.value);
  };

  return (
    <div>
      <select value={selectedDrink} onChange={handleDrinkChange}>
        {drinkOptions.map((option) => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>

      {selectedDrink === 'Tea' && (
        <select value={selectedTea} onChange={handleTeaChange}>
          {teaOptions.map((option) => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      )}
    </div>
  );
}
