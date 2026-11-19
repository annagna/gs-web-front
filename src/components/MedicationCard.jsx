export default function MedicationCard({ medication, onEdit, onDelete, disabled }) {
    return (
        <article className="rounded-2xl border border-violet-100 bg-white p-4 shadow-sm shadow-violet-100/50">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h4 className="font-semibold text-slate-800">{medication.name}</h4>
          <p className="text-sm text-slate-600">{medication.dosage}</p>
        </div>
        <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">{medication.time}</span>
      </div>
      <p className="mt-2 text-sm text-slate-700">Frequência: {medication.frequency}</p>
      {medication.notes && <p className="mt-1 text-sm text-slate-500">{medication.notes}</p>}
      <div className="mt-4 flex gap-2">
        <button type="button" disabled={disabled} onClick={() => onEdit(medication)} className="rounded-full border border-indigo-200 px-3 py-1.5 text-sm text-indigo-700 transition hover:bg-indigo-50">Editar</button>
        <button type="button" disabled={disabled} onClick={() => onDelete(medication)} className="rounded-lg border border-red-200 px-3 py-1.5 text-sm text-red-700 hover:bg-indigo-50">Excluir</button>
      </div>
    </article>
  );
}
