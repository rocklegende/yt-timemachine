import {FunctionComponent, createContext, useContext} from "react";
import {IDataProvider} from "../interfaces/IDataProvider";
import YoutubeDataProvider from "../providers/youtubeDataProvider";
import PartlyFakeDataProvider from "../providers/partlyFakeDataProvider";

interface IDataContext {
    dataProvider: IDataProvider;
}

const defaultDataProvider = new YoutubeDataProvider(2010);
const DataContext = createContext<IDataContext>({
    dataProvider: defaultDataProvider,
})

export const useData = () => {
    return useContext(DataContext);
}

const DataContextProvider: FunctionComponent = ({children}) => {
    return (
        <DataContext.Provider value={{
            dataProvider: process.env.REACT_APP_USE_FAKE_YOUTUBE_PROVIDER === "true"
                ? new PartlyFakeDataProvider(2010)
                : new YoutubeDataProvider(2010),
        }}>
            {children}
        </DataContext.Provider>
    )
}
export default DataContextProvider;