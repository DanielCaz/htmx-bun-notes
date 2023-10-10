import { NoteSchema } from "../schemas/NoteSchema";

const FormNote = ({ note }: { note?: typeof NoteSchema }) => {
  return (
    <div class="card w-full max-w-sm mx-auto mt-16">
      <form class="card-body bg-base-200 rounded-box">
        <h2 class="card-title">Create a new note</h2>
        <div class="form-control w-full">
          <label class="label" for="inputNoteTitle">
            <span class="label-text">Title</span>
          </label>
          <input
            id="inputNoteTitle"
            type="text"
            class="input input-bordered w-full"
            name="title"
            required="true"
            value={note?.title}
          />
        </div>
        <div class="form-control w-full">
          <label class="label" for="inputNoteContent">
            <span class="label-text">Content</span>
          </label>
          <textarea
            id="inputNoteContent"
            class="textarea textarea-bordered w-full"
            name="content"
            required="true"
          >
            {note?.content}
          </textarea>
        </div>
        <button type="submit" class="btn btn-accent">
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormNote;
