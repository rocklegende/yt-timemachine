import React from "react";

import App from "../components/App";
import {render, fireEvent, waitFor, screen} from '@testing-library/react';

jest.mock("../youtubeDataProvider");

test('header displays correct name', async () => {


    render(<App />);
    //
    // fireEvent.click(screen.getByText('Load Greeting'))

    await screen.findByRole('heading');

    expect(screen.getByRole('heading', {name: "title"})).toHaveTextContent('u2ube timemachine')
})
