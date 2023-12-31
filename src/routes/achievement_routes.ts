import { server } from "../server";
import { AchievementController } from "../controllers/achievement_controller";
import Joi from "joi";
import {
  achievementIdSchema,
  achievementCreateSchema,
} from "../const/validation/schemas";

export function achievement_init() {
  server.route({
    method: "GET",
    path: "/v1/achievements",
    handler: AchievementController.getAllAchievements,

    options: { auth: false, tags: ["api"] },
  });

  server.route({
    method: "GET",
    path: "/v1/achievements/{id}",
    options: {
      auth: false,
      tags: ["api"],
      validate: { params: achievementIdSchema },
    },
    handler: AchievementController.getAchievementById,
  });
  server.route({
    method: "POST",
    path: "/v1/achievements/add/{name}/{description}/{goal}/{type}/{image}",
    options: {
      auth: false,
      tags: ["api"],
      validate: {
        params: achievementCreateSchema,
      },
    },
    handler: AchievementController.save,
  });
}
