import "./task.css";

export function TaskCard({ ready }) {
  return (
    <div className="card">
      <h1 style={{ fontFamily: "Poppins" }}>Mi primera tarea</h1>
      {/* style={ready ? { background: "green" } : { background: "red" }} */}
      <span className={ready ? "bg-green" : "bg-red"}>
        {ready ? "Tarea realizada" : "Tarea pendiente"}
      </span>
    </div>
  );
}
