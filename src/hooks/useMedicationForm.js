import { useCallback, useState } from 'react';
import { EMPTY_MEDICATION } from '../constants/medication';
import { validateMedication } from '../utils/medicationValidation';

// Gerencia os campos e as mensagens de validação do formulário.
export function useMedicationForm(initialValues = EMPTY_MEDICATION) {
  const [values, setValues] = useState({ ...EMPTY_MEDICATION, ...initialValues });
  const [errors, setErrors] = useState({});

  const handleChange = useCallback((event) => {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: '' }));
  }, []);

  const validate = useCallback(() => {
    const nextErrors = validateMedication(values);
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }, [values]);

  const reset = useCallback((nextValues = EMPTY_MEDICATION) => {
    setValues({ ...EMPTY_MEDICATION, ...nextValues });
    setErrors({});
  }, []);

  return { values, errors, handleChange, validate, reset, setValues };
}