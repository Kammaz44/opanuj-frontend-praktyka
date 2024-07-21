export const GenderSelect = ({
  gender,
  setGender,
}: {
  gender: string;
  setGender: (gender: string) => void;
}) => {
  const options: { value: string; label: string }[] = [
    { value: '', label: 'Any Gender' },
    { value: 'female', label: 'Female' },
    { value: 'male', label: 'Male' },
    { value: 'genderless', label: 'Genderless' },
    { value: 'unknown', label: 'Unknown' },
  ];

  return (
    <label className="flex flex-col">
      Gender
      <select
        value={gender}
        onChange={(e) => setGender(e.target.value)}
        className="border h-7 mt-1"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
};
