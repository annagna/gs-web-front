import MedicationCard from './MedicationCard';

export default function MedicationList({
  medications,
  onEdit,
  onDelete,
  disabled
}) {
  if (!medications.length) {
    return (
      <div className="border border-dashed border-stone-300 p-8 text-center text-stone-500">
        Nenhum medicamento cadastrado ainda
      </div>
    );
  }

  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {medications.map((medication) => (
        <MedicationCard
          key={medication.id}
          medication={medication}
          onEdit={onEdit}
          onDelete={onDelete}
          disabled={disabled}
        />
      ))}
    </div>
  );
}
