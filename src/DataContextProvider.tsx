import {FunctionComponent, createContext, useContext} from "react";
import {IDataProvider} from "./interfaces/IDataProvider";
import YoutubeDataProvider from "./youtubeDataProvider";
import PartlyFakeDataProvider from "./partlyFakeDataProvider";

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
            dataProvider: new PartlyFakeDataProvider(2010),
        }}>
            {children}
        </DataContext.Provider>
    )
}
export default DataContextProvider;