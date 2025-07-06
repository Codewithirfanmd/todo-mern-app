function TodoItem({ id, todoName, todoDate, onDeleteClick }) {
  // Format the date to 'Month Day Year' (e.g., June 29 2025)
  let formattedDate = '';
  if (todoDate) {
    const dateObj = new Date(todoDate);
    formattedDate = dateObj.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  }
  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{formattedDate}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger kg-button"
            onClick={() => onDeleteClick(id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
