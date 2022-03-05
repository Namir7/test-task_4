import { useStore } from "@/store";

export const subscribeToNodesListChages = () => {
  const store = useStore();

  store.subscribe((mutation, state) => {
    console.log("subscriptions: ");

    const listOfInterestedMutations = [];

    console.log(mutation);
    console.log(state);
  });
};
