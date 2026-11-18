
import { useCallback, useEffect, useState } from 'react';

import {
  getMedications,
  createMedication,
  updateMedication,
  deleteMedication,
} from '../services/medicationApi';

export function useMedicationRecords() {
  const [medications, setMedications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  const reload = useCallback(async () => {
    setLoading(true);
    setError('');

    try {
      const records = await getMedications();

      console.log('Medicamentos recebidos da MockAPI:', records);

      setMedications(Array.isArray(records) ? records : []);
    } catch (err) {
      setError(err.message || 'Não foi possível carregar os medicamentos.');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    reload();
  }, [reload]);

  const addRecord = useCallback(async (values) => {
    setSaving(true);
    setError('');

    try {
      await createMedication(values);

      // Busca novamente os registros salvos na MockAPI.
      await reload();

      return true;
    } catch (err) {
      setError(err.message || 'Não foi possível cadastrar o medicamento.');
      throw err;
    } finally {
      setSaving(false);
    }
  }, [reload]);

  const editRecord = useCallback(async (id, values) => {
    setSaving(true);
    setError('');

    try {
      await updateMedication(id, values);
      await reload();
      return true;
    } catch (err) {
      setError(err.message || 'Não foi possível atualizar o medicamento.');
      throw err;
    } finally {
      setSaving(false);
    }
  }, [reload]);

  const removeRecord = useCallback(async (id) => {
    setSaving(true);
    setError('');

    try {
      await deleteMedication(id);
      await reload();
    } catch (err) {
      setError(err.message || 'Não foi possível excluir o medicamento.');
      throw err;
    } finally {
      setSaving(false);
    }
  }, [reload]);

  return {
    medications,
    loading,
    saving,
    error,
    addRecord,
    editRecord,
    removeRecord,
    reload,
  };
}
