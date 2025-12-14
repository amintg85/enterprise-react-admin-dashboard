
const users = [
  { id: 1, name: 'Alice', role: 'Admin' },
  { id: 2, name: 'Bob', role: 'User' }
]
export default function UsersTable() {
  return (
    <table className="min-w-full bg-white dark:bg-gray-800 shadow rounded">
      <thead>
        <tr><th className="p-2">Name</th><th className="p-2">Role</th></tr>
      </thead>
      <tbody>
        {users.map(u => (
          <tr key={u.id}>
            <td className="p-2">{u.name}</td>
            <td className="p-2">{u.role}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
