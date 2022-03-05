import { useStore } from "@/store";

export const useWatchers = () => {
  const store = useStore();

  store.watch(
    (state) => state.nodes.nodesList,
    (val, oldVal) => {
      console.log("watcher");

      store.dispatch("bin/setBin", { nodesList: oldVal });
    },
    { deep: true }
  );
};
