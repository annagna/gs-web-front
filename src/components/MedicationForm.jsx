import { MEDICATION_FIELDS } from '../constants/medication';

export default function MedicationForm({ values, errors, onChange, onSubmit, onCancel, editing, saving }) {
  return (
    <form onSubmit={onSubmit} className="grid gap-4 rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
      <h3 className="text-lg font-semibold text-stone-800">{editing ? 'Editar medicamento' : 'Cadastrar medicamento'}</h3>
      {MEDICATION_FIELDS.map((field) => (
        <label key={field.name} className="grid gap-1 text-sm font-medium text-stone-700">
          {field.label}
          <input
            name={field.name}
            value={values[field.name]}
            onChange={onChange}
            placeholder={field.placeholder}
            required={field.required}
            type={field.name === 'time' ? 'time' : 'text'}
            className="rounded-lg border border-stone-300 px-3 py-2 outline-none focus:border-emerald-600"
          />
          {errors[field.name] && <span className="text-xs text-red-600">{errors[field.name]}</span>}
        </label>
      ))}
      <label className="grid gap-1 text-sm font-medium text-stone-700">
        Observações (opcional)
        <textarea name="notes" value={values.notes} onChange={onChange} rows={3} placeholder="Informações adicionais" className="rounded-lg border border-stone-300 px-3 py-2 outline-none focus:border-emerald-600" />
      </label>
      <div className="flex flex-wrap gap-2">
        <button disabled={saving} className="rounded-lg bg-emerald-700 px-4 py-2 font-semibold text-white disabled:opacity-50" type="submit">
          {saving ? 'Salvando...' : editing ? 'Salvar alterações' : 'Cadastrar'}
        </button>
        {editing && <button type="button" onClick={onCancel} className="rounded-lg border border-stone-300 px-4 py-2">Cancelar</button>}
      </div>
    </form>
  );
}