/**
 * Calcula a idade em anos entre uma data específica e a data atual
 * @param birthDate - Data de nascimento no formato Date
 * @returns Idade em anos completos
 */
export const calculateAge = (birthDate: Date): number => {
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  
  // Se ainda não passou o aniversário neste ano, subtraímos 1
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  
  return age;
};

/**
 * Calcula a idade específica para a data 02/03/2001
 * @returns Idade em anos completos desde 02/03/2001
 */
export const getAgeFrom20010302 = (): number => {
  const birthDate = new Date(2001, 2, 2); // Mês 2 = março (0-indexado)
  return calculateAge(birthDate);
};
