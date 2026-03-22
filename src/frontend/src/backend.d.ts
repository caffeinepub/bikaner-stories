import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export type StoryId = bigint;
export interface Story {
    status: StoryStatus;
    title: string;
    content: string;
    author: string;
    timestamp: bigint;
    connection: string;
}
export enum StoryStatus {
    pending = "pending",
    approved = "approved",
    rejected = "rejected"
}
export enum UserRole {
    admin = "admin",
    user = "user",
    guest = "guest"
}
export interface backendInterface {
    approveStory(storyId: StoryId): Promise<void>;
    assignCallerUserRole(user: Principal, role: UserRole): Promise<void>;
    getAllStories(): Promise<Array<Story>>;
    getCallerUserRole(): Promise<UserRole>;
    getPublicStories(): Promise<Array<Story>>;
    getStory(storyId: StoryId): Promise<Story | null>;
    getStoryCount(): Promise<bigint>;
    isCallerAdmin(): Promise<boolean>;
    rejectStory(storyId: StoryId): Promise<void>;
    submitStory(author: string, title: string, content: string, connection: string): Promise<StoryId>;
}
