import { create } from "zustand";
import { ZingMp3 } from "zingmp3-api-full";

import { ZingAlbum, ZingSong } from "../types";

interface State {
  discovers: ZingAlbum[];
  trendings: ZingSong[];
  news: ZingSong[];
  recommands: ZingSong[];
  isLoading: boolean;
  error: any;
}

interface Actions {
  fetchData: () => Promise<void>;
}

const INITIAL_STATE: State = {
  discovers: [],
  trendings: [],
  news: [],
  recommands: [],
  isLoading: false,
  error: null,
};

export const useSongsStore = create<State & Actions>((set) => ({
  discovers: INITIAL_STATE.discovers,
  trendings: INITIAL_STATE.trendings,
  news: INITIAL_STATE.news,
  recommands: INITIAL_STATE.recommands,
  isLoading: INITIAL_STATE.isLoading,
  error: INITIAL_STATE.error,
  fetchData: async () => {
    try {
      set({ isLoading: true, error: null });
      const { origin } = window.location;
      const zingResponse = await fetch(origin + "/api/songs", {
        method: "GET",
      });
      const { data, err, msg } = await zingResponse.json();
      // console.log(data);
      if (err !== 0) {
        set({ isLoading: false, error: msg });
      } else {
        set({
          discovers: data.RTChart.promotes.map(
            (item: ZingSong) => item.album
          ),
          trendings: data.RTChart.promotes,
          news: data.newRelease,
          recommands: data.weekChart.vn.items,
          isLoading: false,
        });
      }
    } catch (error) {
      set({ error, isLoading: false });
    }
  },
}));
