import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type { Story } from "../backend.d";
import { useActor } from "./useActor";

export function useGetPublicStories() {
  const { actor, isFetching } = useActor();
  return useQuery<Story[]>({
    queryKey: ["publicStories"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getPublicStories();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useGetAllStories() {
  const { actor, isFetching } = useActor();
  return useQuery<Story[]>({
    queryKey: ["allStories"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllStories();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useIsAdmin() {
  const { actor, isFetching } = useActor();
  return useQuery<boolean>({
    queryKey: ["isAdmin"],
    queryFn: async () => {
      if (!actor) return false;
      return actor.isCallerAdmin();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useSubmitStory() {
  const { actor } = useActor();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: {
      author: string;
      title: string;
      content: string;
      connection: string;
    }) => {
      if (!actor) throw new Error("Not connected");
      return actor.submitStory(
        data.author,
        data.title,
        data.content,
        data.connection,
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["publicStories"] });
      queryClient.invalidateQueries({ queryKey: ["allStories"] });
    },
  });
}

export function useApproveStory() {
  const { actor } = useActor();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (storyId: bigint) => {
      if (!actor) throw new Error("Not connected");
      return actor.approveStory(storyId);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["allStories"] });
      queryClient.invalidateQueries({ queryKey: ["publicStories"] });
    },
  });
}

export function useRejectStory() {
  const { actor } = useActor();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (storyId: bigint) => {
      if (!actor) throw new Error("Not connected");
      return actor.rejectStory(storyId);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["allStories"] });
    },
  });
}
