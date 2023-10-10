import { NoteSchema } from "../schemas/NoteSchema";

const NoteItem = ({ note }: { note: typeof NoteSchema }) => {
  return (
    <li
      id={`note_${note._id}`}
      class="card w-96 bg-base-200 shadow-xl max-w-[80vw] mx-auto"
    >
      <div class="card-body">
        <h2 class="card-title">{note.title}</h2>
        <p>{note.content}</p>
        <div class="card-actions justify-end">
          <a href={`/edit/${note._id}`}></a>
          <a
            hx-delete={`/api/notes/${note._id}`}
            class="btn btn-error"
            hx-target={`#note_${note._id}`}
            hx-swap="outerHTML"
          >
            Delete
          </a>
        </div>
      </div>
    </li>
  );
};

export default NoteItem;
