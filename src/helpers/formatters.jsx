export const formatCurrencyCLP = (value) => {

  //Si es un string, lo convierte. Si es null/undefined o NaN, usa 0.
  const numberValue = Number(value) || 0;

  //Usar toLocaleString con las opciones correctas.
  return numberValue.toLocaleString('es-CL', {
    style: 'currency',
    currency: 'CLP',
  });
};