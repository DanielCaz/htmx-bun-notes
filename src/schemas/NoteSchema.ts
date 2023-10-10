import { t } from "elysia";

export const NoteSchema = t.Object({
  id: t.String({ pattern: "^[0-9a-f]{24}$" }),
  title: t.String(),
  content: t.String(),
});
