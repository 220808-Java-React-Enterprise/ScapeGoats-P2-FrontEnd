import { render, screen } from "@testing-library/react";
import Signup from "../Signup";
import { MemoryRouter, Route, Routes } from "react-router-dom";

//The tests.
test('Test Siginyo', () => {
    render(
        <MemoryRouter>
            <Routes>
                <Route path="/Signup" element={<Signup/>}></Route>
            </Routes>
        </MemoryRouter>
    );
    const readingTable = document.querySelector('div');
    expect(readingTable).toBeInTheDocument();

});

