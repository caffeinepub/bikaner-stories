import Map "mo:core/Map";
import Order "mo:core/Order";
import Runtime "mo:core/Runtime";
import Iter "mo:core/Iter";
import Principal "mo:core/Principal";
import Text "mo:core/Text";
import Time "mo:core/Time";
import Nat64 "mo:core/Nat64";
import MixinAuthorization "authorization/MixinAuthorization";
import AccessControl "authorization/access-control";

actor {
  type StoryStatus = {
    #pending;
    #approved;
    #rejected;
  };

  type Story = {
    author : Text;
    title : Text;
    content : Text;
    connection : Text;
    timestamp : Nat64;
    status : StoryStatus;
  };

  module Story {
    public func compareByTimestamp(story1 : Story, story2 : Story) : Order.Order {
      Nat64.compare(story1.timestamp, story2.timestamp);
    };
  };

  type StoryId = Nat;
  var nextStoryId : StoryId = 0;

  let stories = Map.empty<StoryId, Story>();

  // Parametric mixin includes all authentication boilerplate
  let accessControlState = AccessControl.initState();
  include MixinAuthorization(accessControlState);

  public shared ({ caller }) func submitStory(author : Text, title : Text, content : Text, connection : Text) : async StoryId {
    let story = {
      author;
      title;
      content;
      connection;
      timestamp = Nat64.fromIntWrap(Time.now() / 1_000_000);
      status = #pending;
    };
    let storyId = nextStoryId;
    stories.add(storyId, story);
    nextStoryId += 1;
    storyId;
  };

  public shared ({ caller }) func approveStory(storyId : StoryId) : async () {
    if (not (AccessControl.isAdmin(accessControlState, caller))) {
      Runtime.trap("Unauthorized: Only admins can approve stories");
    };
    let story = switch (stories.get(storyId)) {
      case (null) { Runtime.trap("Story not found") };
      case (?story) { story };
    };
    let updatedStory : Story = {
      author = story.author;
      title = story.title;
      content = story.content;
      connection = story.connection;
      timestamp = story.timestamp;
      status = #approved;
    };
    stories.add(storyId, updatedStory);
  };

  public shared ({ caller }) func rejectStory(storyId : StoryId) : async () {
    if (not (AccessControl.isAdmin(accessControlState, caller))) {
      Runtime.trap("Unauthorized: Only admins can reject stories");
    };
    let story = switch (stories.get(storyId)) {
      case (null) { Runtime.trap("Story not found") };
      case (?story) { story };
    };
    let updatedStory : Story = {
      author = story.author;
      title = story.title;
      content = story.content;
      connection = story.connection;
      timestamp = story.timestamp;
      status = #rejected;
    };
    stories.add(storyId, updatedStory);
  };

  public query ({ caller }) func getPublicStories() : async [Story] {
    stories.values().toArray().filter(func(story) { story.status == #approved }).sort(Story.compareByTimestamp);
  };

  public query ({ caller }) func getAllStories() : async [Story] {
    if (not (AccessControl.isAdmin(accessControlState, caller))) {
      Runtime.trap("Unauthorized: Only admins can view all stories");
    };
    stories.values().toArray().sort(Story.compareByTimestamp);
  };

  public query ({ caller }) func getStory(storyId : StoryId) : async ?Story {
    switch (stories.get(storyId)) {
      case (null) { null };
      case (?story) {
        if (AccessControl.isAdmin(accessControlState, caller) or story.status == #approved) {
          ?story;
        } else {
          null;
        };
      };
    };
  };

  public query ({ caller }) func getStoryCount() : async Nat {
    if (AccessControl.isAdmin(accessControlState, caller)) {
      stories.size();
    } else {
      stories.values().toArray().filter(func(story) { story.status == #approved }).size();
    };
  };
};
