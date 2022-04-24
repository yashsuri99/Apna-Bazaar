import Signin from "./SignUp";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

describe("Login credentials form on submit", () => {
    const signUp = {
        firstName: "clark",
        lastName: "doe",
        email: "group@sapient.com",
        password: "Password123!",
        confirmPassword: "Password123!",
    };

    let firstNameInput,
        lastNameInput,
        emailInput,
        passwordInput,
        confirmPasswordInput,
        submitButton;

    beforeEach(() => {
        // eslint-disable-next-line testing-library/no-render-in-setup
        render(
            <BrowserRouter>
                <Signin />
            </BrowserRouter>
        );

        firstNameInput = screen.getByLabelText(/First Name/i);
        lastNameInput = screen.getByLabelText(/Last Name/i);
        emailInput = screen.getByLabelText(/Email/i);
        // passwordInput = screen.getAllByLabelText(/Password/i);
        // confirmPasswordInput = screen.getAllByLabelText(/Confirm Password/i);
        submitButton = screen.getByRole("button", { name: /SignUp/i });

        userEvent.clear(firstNameInput);
        userEvent.clear(lastNameInput);
        userEvent.clear(emailInput);
        // userEvent.clear(passwordInput);
        // userEvent.clear(confirmPasswordInput);
    });
    const fillAndSubmit = (credentials) => {
        userEvent.type(firstNameInput, credentials.firstName);
        userEvent.type(lastNameInput, credentials.lastName);
        userEvent.type(emailInput, credentials.email);
        // userEvent.type(passwordInput, credentials.password);
        // userEvent.type(confirmPasswordInput, credentials.confirmPassword);
        userEvent.click(submitButton);
    };

    test("should display error when first name is not filled", async () => {
        fillAndSubmit({
            ...signUp,
            firstName: "",
        });
        const errorMessageEl = await screen.findByText(/First Name required/);
        expect(errorMessageEl).toBeInTheDocument();
        expect(errorMessageEl).toMatchSnapshot();
    });

    test("should display error when last name is not filled", async () => {
        fillAndSubmit({
            ...signUp,
            lastName: "",
        });
        const errorMessageEl = await screen.findByText(/Last Name required/);
        expect(errorMessageEl).toBeInTheDocument();
        expect(errorMessageEl).toMatchSnapshot();
    });

    test("should display error when email is not filled", async () => {
        fillAndSubmit({
            ...signUp,
            email: "",
        });
        const errorMessageEl = await screen.findByText(/Email required/i);
        expect(errorMessageEl).toBeInTheDocument();
        expect(errorMessageEl).toMatchSnapshot();
    });

    // test("should display error when password is not filled", async () => {
    //     fillAndSubmit({
    //         ...signUp,
    //         password: "",
    //     });
    //     const errorMessageEl = await screen.findAllByText(/Password required/i);
    //     expect(errorMessageEl).toBeInTheDocument();
    // });

    // test("should display error when confirm password is not filled", async () => {
    //     fillAndSubmit({
    //         ...signUp,
    //         confirmPassword: "",
    //     });
    //     const errorMessageEl = await screen.findByText(/Confirm Password/i);
    //     expect(errorMessageEl).toBeInTheDocument();
    // });
});
