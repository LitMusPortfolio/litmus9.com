import { Effect, Schema } from "effect";

import worksJson from "./works.json";

const WorkCategorySchema = Schema.Literals([
  "music",
  "illustration",
  "movie",
  "direction",
  "other",
]);

const WorkSchema = Schema.Struct({
  title: Schema.NonEmptyString,
  categories: Schema.Array(WorkCategorySchema),
  description: Schema.String,
  requester: Schema.String,
  link: Schema.NonEmptyString,
});

type WorkCategory = typeof WorkCategorySchema.Type;
type Work = typeof WorkSchema.Type;

const loadWorks = (): Promise<readonly Work[]> =>
  Effect.runPromise(Schema.decodeUnknownEffect(Schema.Array(WorkSchema))(worksJson));

export type { Work, WorkCategory };
export { loadWorks };
