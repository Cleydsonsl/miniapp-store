import { Platform } from 'react-native';
import { ScriptManager, Script, Federated } from '@callstack/repack/client';
import miniapps from '../miniapp-host/src/miniapps.json';

const resolveURL = Federated.createURLResolver({
  containers: miniapps.reduce((obj, current) => ({
    ...obj,
    [current.id]: `http://localhost:${current.port}/[name][ext]`
  }), {})
});

const script = () => process.env.STANDALONE ? (
  ScriptManager.shared.addResolver(async (scriptId, caller) => {
  let url;
  if (caller === 'main') {
    url = Script.getDevServerURL(scriptId);
  } else {
    url = resolveURL(scriptId, caller);
  }

  if (!url) {
    return undefined;
  }

  return {
    url,
    cache: false, // For development
    query: {
      platform: Platform.OS,
    },
  };
})) : null;

export default script