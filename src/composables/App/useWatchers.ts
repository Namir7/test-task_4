import { useStore } from "@/store";

export const useWatchers = () => {
  const store = useStore();

  store.watch(
    (state) => state.nodes.nodesList,
    (val, oldVal) => {
      store.dispatch("bin/setBin", { nodesList: oldVal });
    },
    { deep: true }
  );

  store.watch(
    (state) => state.nodes.activeNode,
    (val) => {
      store.commit("edit/CHANGE_VALUE", {
        value: val.label,
      });
    }
  );
};
