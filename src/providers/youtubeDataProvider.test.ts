import YoutubeDataProvider from "./youtubeDataProvider";


test("Setting initial year", () => {
    const dataProvider = new YoutubeDataProvider(2010);
    expect(dataProvider.year).toBe(2010);
})

test("Change year", () => {
    const dataProvider = new YoutubeDataProvider(2010);
    dataProvider.changeYear(2012);
    expect(dataProvider.year).toBe(2012);
})

test("adding listener", () => {
    const dataProvider = new YoutubeDataProvider(2010);
    const listener = dataProvider.addChangeListener(newYear => {});
    expect(dataProvider.changeListeners[0]).toBe(listener);
    expect(dataProvider.changeListeners).toHaveLength(1);
})

test("removing listener", () => {
    const dataProvider = new YoutubeDataProvider(2010);
    const listener = dataProvider.addChangeListener(newYear => {});
    dataProvider.removeChangeListener(listener);
    expect(dataProvider.changeListeners).toHaveLength(0);
})

test("notifying listener", () => {
    const dataProvider = new YoutubeDataProvider(2010);
    let randomData = 1;
    dataProvider.addChangeListener(newYear => {randomData = newYear});
    dataProvider.changeYear(2012);
    expect(randomData).toBe(2012);
})