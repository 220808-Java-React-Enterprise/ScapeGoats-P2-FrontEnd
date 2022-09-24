import ReadingHistory from "../ReadingHistory";
import { getByText, render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter, Route, Router, Routes } from "react-router-dom";

//The tests.
test('Test Reading table is visable', () => {
    render(
        <MemoryRouter>
            <Routes>
                <Route path="/ReadingHistory" element={<ReadingHistory/>}></Route>
            </Routes>
        </MemoryRouter>
    );
    const readingTable = screen.getByRole('test');
    expect(readingTable).toBeVisible();

});

