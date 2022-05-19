import './App.css';
import useConfigAsync from "./hooks/useConfig";
import { ConfigKeyType } from './configuration/types/config-types';
import { useEffect, useState } from 'react';

interface IConfigResult {
  ConfigValue: string;
  IsConfigLoading: boolean;
}

function App() {

  let configResultAsync = useConfigAsync(ConfigKeyType.ENV);
  const [configResult, setConfigResult] = useState({ ConfigValue: "", IsConfigLoading: true } as IConfigResult);

  useEffect(() => {
    configResultAsync.then((result) => {
      setConfigResult({
        ConfigValue: result[0],
        IsConfigLoading: result[1]
      } as IConfigResult);
    });
  }, [configResultAsync])

  return (
    <div className="App">
      <header className="App-header">
          {configResult.IsConfigLoading === false ? "Selected Configuration: " + configResult.ConfigValue : "Config value is loading..."}
      </header>
    </div>
  );
}

export default App;
