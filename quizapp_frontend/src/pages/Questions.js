import React from "react";

function Questions() {
  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 ">
      <form
        action="https://docs.google.com/forms/d/e/1FAIpQLSdij58QzVc0pg3jiVZIJxDwV0tm1OKBxacIA9tb4YtZjY6ojg/formResponse"
        method="POST"
        target="_blank"
        onSubmit={(e) => {
          setTimeout(() => {
            e.target.reset();
          }, 100);
        }}
        className="p-4 shadow-lg rounded-4 bg-light border border-dark border-2 w-100 m-3"
        style={{ maxWidth: "600px" }}
      >
        <h2 className="text-center fw-bold text-primary mb-4">
          Add New Question
        </h2>

        {/* ✅ Category Dropdown (FIXED ENTRY ID) */}
        <div className="mb-3">
          <label className="form-label fw-semibold">Category</label>
          <select
            name="entry.754014313"
            className="form-select"
            defaultValue="Java"
            required
          >
            <option value="Java">Java</option>
            <option value="Python">Python</option>
            <option value="C++">C++</option>
          </select>
        </div>

        {/* Question */}
        <div className="mb-3">
          <label className="form-label fw-semibold">Question</label>
          <textarea
            name="entry.362785412"
            className="form-control"
            placeholder="Enter the question"
            required
          />
        </div>

        {/* Option 1 */}
        <div className="mb-3">
          <label className="form-label">Option 1</label>
          <input
            type="text"
            name="entry.1466842892"
            className="form-control"
            required
          />
        </div>

        {/* Option 2 */}
        <div className="mb-3">
          <label className="form-label">Option 2</label>
          <input
            type="text"
            name="entry.1983159727"
            className="form-control"
            required
          />
        </div>

        {/* Option 3 */}
        <div className="mb-3">
          <label className="form-label">Option 3</label>
          <input
            type="text"
            name="entry.769043864"
            className="form-control"
            required
          />
        </div>

        {/* Option 4 */}
        <div className="mb-3">
          <label className="form-label">Option 4</label>
          <input
            type="text"
            name="entry.1591775335"
            className="form-control"
            required
          />
        </div>

        {/* Correct Answer */}
        <div className="mb-4">
          <label className="form-label fw-semibold">Correct Answer</label>
          <input
            type="text"
            name="entry.1648595558"
            className="form-control"
            placeholder="Enter correct answer"
            required
          />
        </div>

        <button type="submit" className="btn btn-primary w-100 fw-bold fs-5">
          Submit Question
        </button>
      </form>
    </div>
  );
}

export default Questions;
