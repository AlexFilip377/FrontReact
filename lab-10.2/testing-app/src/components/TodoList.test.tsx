import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { TodoList } from "./TodoList";

describe("TodoList Component", () => {
    test("renders empty todo list", () => {
        render(<TodoList />);
        expect(screen.getByText("Todo List")).toBeInTheDocument();
        expect(screen.getByText("0 todos (0 завершено)")).toBeInTheDocument();
    });

    test("adds a new todo item", async () => {
        const user = userEvent.setup();
        render(<TodoList />);

        const input = screen.getByTestId("todo-input");
        const button = screen.getByTestId("add-button");

        await user.type(input, "Вынести мусор");
        await user.click(button);

        expect(screen.getByText("Вынести мусор")).toBeInTheDocument();
        expect(screen.getByTestId("todo-count")).toHaveTextContent("1 todos (0 завершено)");
    });

    test("toggles todo completion", async () => {
        const user = userEvent.setup();
        const initial = [{ id: 1, text: 'Работа', completed: false }];
        render(<TodoList initialTodos={initial} />);

        const checkbox = screen.getByTestId("todo-checkbox");
        await user.click(checkbox);

        expect(screen.getByTestId("todo-item")).toHaveClass("completed");
        expect(screen.getByText("1 todos (1 завершено)")).toBeInTheDocument();
    });

    test("deletes a todo item", async () => {
        const user = userEvent.setup();
        const initial = [{ id: 1, text: 'удалить это', completed: false}];
        render(<TodoList initialTodos={initial} />);

        const deleteBtn = screen.getByTestId("delete-button");
        await user.click(deleteBtn);

        expect(screen.queryByText("удалить это")).not.toBeInTheDocument();
        expect(screen.getByText("0 todos (0 завершено)")).toBeInTheDocument();
    });
});