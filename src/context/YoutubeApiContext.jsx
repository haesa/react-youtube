import { createContext, useContext } from 'react';
import Youtube from '../api/Youtube';
import YoutubeClient from '../api/YoutubeClient';

export const YoutubeApiContext = createContext();

const apiClient = new YoutubeClient();
const youtube = new Youtube(apiClient);

export function YoutubeApiProvider({ children }) {
  return (
    <YoutubeApiContext.Provider value={{ youtube }}>
      {children}
    </YoutubeApiContext.Provider>
  );
}

export function useYoutubeApi() {
  return useContext(YoutubeApiContext);
}
