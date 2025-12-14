
export default function KPICards() {
  const data = [
    { label: 'Revenue', value: '$120k' },
    { label: 'Users', value: '1,240' },
    { label: 'Orders', value: '320' }
  ]
  return (
    <div className="grid grid-cols-3 gap-4">
      {data.map(k => (
        <div key={k.label} className="p-4 bg-white dark:bg-gray-800 shadow rounded">
          <p className="text-gray-500">{k.label}</p>
          <p className="text-xl font-bold">{k.value}</p>
        </div>
      ))}
    </div>
  )
}
