import { Elysia, t } from "elysia";
import db from "../lib/mongodb";
import NoteItem from "../components/NoteItem";
import { ObjectId } from "mongodb";
import { NoteSchema } from "../schemas/NoteSchema";

export const notePlugin = new Elysia({ prefix: "/notes" })
  .guard({ response: t.String() })
  .get("/", async () => {
    const notes = (await db!.collection("notes").find().toArray()) as
      | (typeof NoteSchema)[]
      | [];

    return (
      <>
        {notes.map((note) => (
          <NoteItem note={{ ...note, _id: note._id.toString() }} />
        ))}
      </>
    );
  })
  .post(
    "/",
    async ({ body, set }) => {
      await db!.collection("notes").insertOne(body);

      set.headers = { "HX-Redirect": "/" };

      return "";
    },
    { body: t.Omit(NoteSchema, ["id"]) }
  )
  .put(
    "/:id",
    async ({ params: { id }, body, set }) => {
      await db!
        .collection("notes")
        .findOneAndReplace({ _id: new ObjectId(id) }, body);

      set.headers = { "HX-Redirect": "/" };

      return "";
    },
    {
      params: t.Object({ id: t.String({ pattern: "^[0-9a-f]{24}$" }) }),
      body: t.Partial(t.Omit(NoteSchema, ["id"])),
    }
  )
  .delete(
    "/:id",
    async ({ params: { id } }) => {
      await db!.collection("notes").deleteOne({ _id: new ObjectId(id) });

      return "";
    },
    { params: t.Object({ id: t.String({ pattern: "^[0-9a-f]{24}$" }) }) }
  );
