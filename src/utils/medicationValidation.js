export function validateMedication(values) {
  const errors = {};
  if (!values.name?.trim()) errors.name = 'Informe o nome do medicamento.';
  if (!values.dosage?.trim()) errors.dosage = 'Informe a dosagem.';
  if (!values.frequency?.trim()) errors.frequency = 'Informe a frequência.';
  if (!values.time?.trim()) errors.time = 'Informe o horário.';
  return errors;
}