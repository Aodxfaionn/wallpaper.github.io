export const useValidate = () => {
  const handleNameChange = (value: string) => {
    if (value.length < 1) return "Поле, обязательное для заполнения";
    else if (value.length < 3) return "Поле не должно содержать меньше 3-х символов";
  };

  const handlePhoneChange = (value: string) => {
    const phoneRegex = /^\d{11}$/;
    if (!value) return "Поле, обязательное для заполнения";
    else if (!phoneRegex.test(value)) return "Поле должно содержать 11 цифр";
  };

  const handleNumberChange = (value: string) => {
    const numberRegex = /^\d+$/;
    if (!value) return "Поле, обязательное для заполнения";
    else if (!numberRegex.test(value)) return "Поле должно содержать только цифры";
  }

  return {
    handleNameChange,
    handlePhoneChange,
    handleNumberChange
  };
};
