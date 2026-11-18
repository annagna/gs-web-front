// PARA USAR A api CRIADA NO MOCKapi 
export const EMPTY_MEDICATION = {
  name: '',
  dosage: '',
  frequency: '',
  time: '',
  notes: '',
};

export const MEDICATION_FIELDS = [
  { name: 'name', label: 'Nome do medicamento', placeholder: 'Ex.: Vitamina D', required: true },
  { name: 'dosage', label: 'Dosagem', placeholder: 'Ex.: 1 comprimido / 500 mg', required: true },
  { name: 'frequency', label: 'Frequência', placeholder: 'Ex.: 1 vez ao dia', required: true },
  { name: 'time', label: 'Horário', placeholder: 'Ex.: 08:00', required: true },
];