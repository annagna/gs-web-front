import { MEDICATION_FIELDS } from '../constants/medication';

export default function MedicationForm({ values, errors, onChange, onSubmit, onCancel, editing, saving }) {
  return (
    <form onSubmit={onSubmit} className="grid gap-4 rounded-2xl border border-violet-100 bg-white p-5 shadow-md shadow-violet-100/60">
      <h3 className="text-lg font-semibold text-slate-800">{editing ? 'Editar medicamento' : 'Cadastrar medicamento'}</h3>
      {MEDICATION_FIELDS.map((field) => (
        <label key={field.name} className="grid gap-1 text-sm font-medium text-slate-700">
          {field.label}
          <input
            name={field.name}
            value={values[field.name]}
            onChange={onChange}
            placeholder={field.placeholder}
            required={field.required}
            type={field.name === 'time' ? 'time' : 'text'}
            className="rounded-lg border border-slate-200 bg-[#fffdf8] px-3 py-2 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
          />
          {errors[field.name] && <span className="text-xs text-red-600">{errors[field.name]}</span>}
        </label>
      ))}
      <label className="grid gap-1 text-sm font-medium text-slate-700">
        Observações (opcional)
        <textarea name="notes" value={values.notes} onChange={onChange} rows={3} placeholder="Informações adicionais" className="rounded-lg border border-slate-200 bg-[#fffdf8] px-3 py-2 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100" />
      </label>
      <div className="flex flex-wrap gap-2">
        <button disabled={saving} className="rounded-full bg-indigo-600 px-5 py-2.5 font-semibold text-white transition hover:bg-indigo-700 disabled:opacity-50" type="submit">
          {saving ? 'Salvando...' : editing ? 'Salvar alterações' : 'Cadastrar'}
        </button>
        {editing && <button type="button" onClick={onCancel} className="rounded-full border border-slate-200 px-5 py-2.5 text-slate-700 transition hover:border-indigo-300">Cancelar</button>}
      </div>
    </form>
  );
}
