import { Link } from "react-router-dom";

export function Navigation() {
  return (
    <div className="flex justify-between py-3">
      <Link to="/tasks">
        <h1 className="font-bold text-3x1 mb-4">Task App</h1>
      </Link>
      <Link to="/tasks-create">
        <h1 className="font-bold text-3x1 mb-4">Create task</h1>
      </Link>
    </div>
  );
}
