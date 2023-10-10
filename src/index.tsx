import { html } from "@elysiajs/html";
import staticPlugin from "@elysiajs/static";
import { Elysia } from "elysia";
import Layout from "./components/Layout";
import { notePlugin } from "./plugins/notePlugin";
import FormNote from "./components/FormNote";
import db from "./lib/mongodb";
import { ObjectId } from "mongodb";
import { NoteSchema } from "./schemas/NoteSchema";

new Elysia()
  .use(staticPlugin())
  .group("/api", (app) => app.use(notePlugin))
  .use(html())
  .get("/", () => {
    return (
      <Layout>
        <ul
          hx-get="/api/notes"
          hx-trigger="load"
          class="grid md:grid-cols-2 place-items-center gap-4"
        ></ul>
      </Layout>
    );
  })
  .get("/create", () => {
    return (
      <Layout>
        <div class="card w-full max-w-sm mx-auto mt-16">
          <form hx-post="/api/notes" class="card-body bg-base-200 rounded-box">
            <FormNote />
          </form>
        </div>
      </Layout>
    );
  })
  .get("/edit/:id", async ({ params: { id }, set }) => {
    const note = (await db!
      .collection("notes")
      .findOne({ _id: new ObjectId(id) })) as typeof NoteSchema | null;

    if (!note) {
      set.status = 404;

      return <div class="text-center">Note not found</div>;
    }

    return (
      <Layout>
        <div class="card w-full max-w-sm mx-auto mt-16">
          <form
            hx-put={`/api/notes/${id}`}
            class="card-body bg-base-200 rounded-box"
          >
            <FormNote note={{ ...note, _id: note._id.toString() }} />
          </form>
        </div>
      </Layout>
    );
  })

  .listen(3000, ({ hostname, port }) =>
    console.log(`🦊 Elysia is running at ${hostname}:${port}`)
  );
