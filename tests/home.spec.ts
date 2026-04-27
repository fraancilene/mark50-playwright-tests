import { test, expect } from "@playwright/test";
import { TasksPage } from "./support/pages/tasks";

let tasksPage: TasksPage;
test.beforeEach(({ page }) => {
  tasksPage = new TasksPage(page);
});

test("webapp deve estar online", async ({ page }) => {
  await tasksPage.go();
  await expect(page).toHaveTitle("Gerencie suas tarefas com Mark L");
});
