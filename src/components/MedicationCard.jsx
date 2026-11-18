export default function MedicationCard({ medication, onEdit, onDelete, disabled }) {
    return (
        <article className="rounded-xl border border-stone-200 bg-white p-4">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h4 className="font-semibold text-stone-800">{medication.name}</h4>
          <p className="text-sm text-stone-600">{medication.dosage}</p>
        </div>
        <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-800">{medication.time}</span>
      </div>
      <p className="mt-2 text-sm text-stone-700">Frequência: {medication.frequency}</p>
      {medication.notes && <p className="mt-1 text-sm text-stone-500">{medication.notes}</p>}
      <div className="mt-4 flex gap-2">
        <button type="button" disabled={disabled} onClick={() => onEdit(medication)} className="rounded-lg border border-stone-300 px-3 py-1.5 text-sm">Editar</button>
        <button type="button" disabled={disabled} onClick={() => onDelete(medication)} className="rounded-lg border border-red-200 px-3 py-1.5 text-sm text-red-700">Excluir</button>
      </div>
    </article>
  );
}