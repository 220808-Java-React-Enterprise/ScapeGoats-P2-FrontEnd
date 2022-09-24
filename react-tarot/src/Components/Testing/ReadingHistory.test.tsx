import ReadingHistory from "../ReadingHistory";
import { getByText, render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from "react-router-dom";

//The tests.
test('Test Reading table is visable', () => {
    render(
        <MemoryRouter>
            <Routes>
                <Route path="/ReadingHistory" element={<ReadingHistory/>}></Route>
            </Routes>
        </MemoryRouter>
    );
    const readingTable = document.querySelector('table');//screen.findByRole('table', {name:'testertable'});
    expect(readingTable).toBeInTheDocument();

});

