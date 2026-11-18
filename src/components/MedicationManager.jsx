import { useState } from 'react';
import { EMPTY_MEDICATION } from '../constants/medication';
import { useMedicationForm } from '../hooks/useMedicationForm';
import { useMedicationRecords } from '../hooks/useMedicationRecords';
import MedicationForm from './MedicationForm';
import MedicationList from './MedicationList';

// Área funcional independente: pode ser exibida em uma rota ou seção da landing page.
export default function MedicationManager() {
  const { medications, loading, saving, error, addRecord, editRecord, removeRecord, reload } = useMedicationRecords();
  const { values, errors, handleChange, validate, reset } = useMedicationForm();
  const [editingId, setEditingId] = useState(null);
  const [feedback, setFeedback] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();
    setFeedback('');
    if (!validate()) return;
    try {
      if (editingId !== null) {
        await editRecord(editingId, values);
        setFeedback('Medicamento atualizado com sucesso.');
      } else {
        await addRecord(values);
        setFeedback('Medicamento cadastrado com sucesso.');
      }
      reset();
      setEditingId(null);
    } catch {
      // O hook mantém e exibe a mensagem de erro da API.
    }
  }

  function startEditing(medication) {
    setEditingId(medication.id);
    reset(medication);
    setFeedback('');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  async function handleDelete(medication) {
    const confirmed = window.confirm(`Deseja excluir ${medication.name}?`);
    if (!confirmed) return;
    try {
      await removeRecord(medication.id);
      setFeedback('Medicamento excluído com sucesso.');
      if (String(editingId) === String(medication.id)) {
        reset(EMPTY_MEDICATION);
        setEditingId(null);
      }
    } catch {
      // O hook mantém e exibe a mensagem de erro da API.
    }
  }

  function cancelEditing() {
    reset();
    setEditingId(null);
  }

  return (
    <section className="mx-auto grid w-full max-w-5xl gap-6 px-4 py-10" aria-labelledby="medication-title">
      <header>
        <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">Demonstração funcional</p>
        <h2 id="medication-title" className="mt-1 text-2xl font-bold text-stone-900">Meus medicamentos</h2>
        <p className="mt-2 text-sm text-stone-600">Cadastre e organize os medicamentos e seus horários.</p>
      </header>

      <MedicationForm values={values} errors={errors} onChange={handleChange} onSubmit={handleSubmit} onCancel={cancelEditing} editing={editingId !== null} saving={saving} />

      {feedback && <p role="status" className="rounded-lg bg-emerald-50 p-3 text-sm text-emerald-800">{feedback}</p>}
      {error && <div role="alert" className="rounded-lg bg-red-50 p-3 text-sm text-red-700"><p>{error}</p><button onClick={reload} className="mt-2 font-semibold underline" type="button">Tentar novamente</button></div>}

      <div className="flex items-center justify-between gap-3">
        <h3 className="text-lg font-semibold text-stone-800">Medicamentos cadastrados</h3>
        <span className="text-sm text-stone-500">{medications.length} registro(s)</span>
      </div>
      {loading ? <p className="text-sm text-stone-500">Carregando medicamentos...</p> : <MedicationList medications={medications} onEdit={startEditing} onDelete={handleDelete} disabled={saving} />}
    </section>
  );
}