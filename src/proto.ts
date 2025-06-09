export const proto = `
syntax = "proto3";

package mixi;

enum Category {
  CATEGORY_UNKNOWN = 0;
  CATEGORY_AVATAR = 1;
  CATEGORY_POST_IMAGE = 2;
  CATEGORY_POST_VIDEO = 3;
  CATEGORY_COMMUNITY_COVER_IMAGE = 4;
  CATEGORY_COMMUNITY_STAMP = 5;
}

enum CommunityAccessLevel {
  COMMUNITY_ACCESS_LEVEL_PUBLIC = 0;
  COMMUNITY_ACCESS_LEVEL_APPROVAL_REQUIRED = 1;
}

enum CommunityEventLocationType {
  COMMUNITY_EVENT_LOCATION_TYPE_UNSPECIFIED = 0;
  COMMUNITY_EVENT_LOCATION_TYPE_ONLINE = 1;
  COMMUNITY_EVENT_LOCATION_TYPE_OFFLINE = 2;
}

enum CommunityEventStatus {
  COMMUNITY_EVENT_STATUS_OPENED = 0;
  COMMUNITY_EVENT_STATUS_CLOSED = 1;
}

enum CommunityMemberStatus {
  COMMUNITY_MEMBER_STATUS_PARTICIPATING = 0;
  COMMUNITY_MEMBER_STATUS_WAITING_FOR_APPROVAL = 1;
  COMMUNITY_MEMBER_STATUS_EXCLUDED = 3;
}

enum CommunityPostConstraint {
  COMMUNITY_POST_CONSTRAINT_MEMBER_ONLY = 0;
  COMMUNITY_POST_CONSTRAINT_ADMIN_ONLY = 1;
}

enum CommunityPostSubscriptionType {
  COMMUNITY_POST_SUBSCRIPTION_TYPE_ALL = 0;
  COMMUNITY_POST_SUBSCRIPTION_TYPE_AGGREGATION = 1;
  COMMUNITY_POST_SUBSCRIPTION_TYPE_STOP = 2;
}

enum CommunityType {
  COMMUNITY_TYPE_TOPIC = 0;
  COMMUNITY_TYPE_EVENT = 1;
}

enum CommunityVisibility {
  COMMUNITY_VISIBILITY_UNSPECIFIED = 0;
  COMMUNITY_VISIBILITY_VISIBLE = 1;
  COMMUNITY_VISIBILITY_INVISIBLE = 2;
}

enum ContentType {
  CONTENT_TYPE_UNKNOWN = 0;
  CONTENT_TYPE_VIDEO = 1;
  CONTENT_TYPE_MUSIC = 2;
  CONTENT_TYPE_WEBSITE = 3;
  CONTENT_TYPE_ARTICLE = 4;
  CONTENT_TYPE_BOOK = 5;
  CONTENT_TYPE_PROFILE = 6;
}

enum FeedSourceType {
  FEED_SOURCE_TYPE_UNSPECIFIED = 0;
  FEED_SOURCE_TYPE_FOLLOWING = 1;
  FEED_SOURCE_TYPE_COMMUNITY = 2;
}

enum FeedType {
  FEED_TYPE_UNSPECIFIED = 0;
  FEED_TYPE_POST = 1;
  FEED_TYPE_COMMUNITY_AGGREGATION_POST = 2;
}

enum FollowingStatus {
  FOLLOWING_STATUS_NONE = 0;
  FOLLOWING_STATUS_FOLLOWING = 1;
  FOLLOWING_STATUS_REQUESTING = 2;
}

enum PersonaType {
  PERSONA_TYPE_UNSPECIFIED = 0;
  PERSONA_TYPE_ACCOUNT = 1;
  PERSONA_TYPE_BOT = 2;
}

enum PersonaVisibility {
  PERSONA_VISIBILITY_PUBLIC = 0;
  PERSONA_VISIBILITY_APPROVAL_REQUIRED = 1;
}

enum PostMaskType {
  POST_MASK_TYPE_NONE = 0;
  POST_MASK_TYPE_SENSITIVE = 1;
  POST_MASK_TYPE_SPOILER = 2;
}

enum PostPublishingType {
  POST_PUBLISHING_TYPE_UNSPECIFIED = 0;
  POST_PUBLISHING_TYPE_FOLLOW_AND_COMMUNITY = 1;
}

enum PostVisibility {
  POST_VISIBILITY_PUBLIC = 0;
  POST_VISIBILITY_PRIVATE = 1;
  POST_VISIBILITY_SEALED = 2;
}

enum Status {
  STATUS_UNKNOWN = 0;
  STATUS_WAIT_FOR_UPLOADING = 1;
  STATUS_IN_PROGRESS = 2;
  STATUS_SUCCESS = 3;
  STATUS_FAILURE = 4;
}

enum StatusIconType {
  STATUS_ICON_TYPE_NONE = 0;
  STATUS_ICON_TYPE_EMOJI = 1;
}

enum VerificationType {
  VERIFICATION_TYPE_UNVERIFIED = 0;
  VERIFICATION_TYPE_SERVICE = 1;
  VERIFICATION_TYPE_BUSINESS = 2;
  VERIFICATION_TYPE_PUBLIC_FIGURE = 3;
}

message Avatar {
  string icon_url = 1;
  string icon_mime_type = 2;
  uint32 icon_height = 3;
  uint32 icon_width = 4;
  string profile_image_url = 5;
  string profile_image_mime_type = 6;
  uint32 profile_image_height = 7;
  uint32 profile_image_width = 8;
  string blurhash = 9;
}

message Community {
  string community_id = 1;
  string name = 2;
  string purpose = 3;
  CommunityAccessLevel access_level = 4;
  repeated CommunityMember admins = 5;
  CommunityRule rules = 6;
  optional CommunityMember myself = 7;
  uint64 count_of_members = 8;
  Timestamp created_at = 9;
  bool is_archived = 10;
  Media cover_image = 11;
  repeated CommunityMember members = 12;
  CommunityType type = 13;
  optional CommunitySummary parent = 14;
  repeated CommunitySummary children = 15;
  optional EventSchedule event_schedule = 16;
  repeated CommunityPostPin post_pins = 17;
  optional Persona last_purpose_editor = 18;
  optional string last_purpose_editor_id = 19;
  repeated string tags = 20;
  CommunityVisibility visibility = 21;
  optional string creator_id = 22;
  optional Persona creator = 23;
  CommunityPostConstraint post_constraint = 24;
  bool is_post_notification_target = 25;
  bool is_subscription_disabled = 26;
  bool is_searchable = 27;
  bool has_aggregation_feed = 28;
  CommunityPostSubscriptionType post_subscription_type = 29;
}

message CommunityAggregationPost {
  string community_id = 1;
  Post post = 2;
  uint64 aggregation_count = 3;
  bool has_more = 4;
  CommunitySummary community = 5;
  string until_cursor = 6;
  string end_cursor = 7;
}

message CommunityMember {
  string community_id = 1;
  Persona persona = 2;
  CommunityMemberStatus status = 3;
  bool is_admin = 4;
  bool is_creator = 5;
  Timestamp created_at = 6;
  string persona_id = 7;
}

message CommunityPostPin {
  string community_post_pin_id = 1;
  string post_id = 2;
  string operator_persona_id = 3;
}

message CommunityRule {
  string community_id = 1;
  string rule_id = 2;
  Timestamp created_at = 3;
  string text = 4;
}

message CommunitySummary {
  string community_id = 1;
  string name = 2;
  CommunityAccessLevel access_level = 3;
  bool is_archived = 4;
  optional CommunityMember myself = 5;
  Media cover_image = 6;
  CommunityType type = 7;
  optional EventSchedule event_schedule = 8;
  optional CommunitySummary parent = 9;
  CommunityPostConstraint post_constraint = 10;
  optional string creator_id = 11;
}

message EventSchedule {
  Timestamp start_at = 1;
  optional Timestamp end_at = 2;
  CommunityEventStatus status = 3;
  optional Timestamp closed_at = 4;
  optional CommunityEventLocationType event_location_type = 5;
}

message Feed {
  FeedType feed_type = 1;
  string time_series_id = 2;
  Post post = 3;
  CommunityAggregationPost community_aggregation_post = 4;
}

message GetSubscribingFeedsRequest {
  optional string until_cursor = 1;
  optional uint32 limit = 2;
  optional string since_cursor = 3;
  optional string end_cursor = 4;
  optional FeedSourceType feed_source_type = 5;
}

message GetSubscribingFeedsResponse {
  repeated Feed feeds = 1;
  optional string next_cursor = 2;
}

message LinkCard {
  string card_id = 1;
  string url = 2;
  Status status = 3;
  ContentType content_type = 4;
  string title = 5;
  string description = 6;
  string image_url = 7;
  string favicon_url = 8;
}

message Media {
  string media_id = 1;
  Category category = 3;
  Status status = 4;
  optional Avatar avatar = 5;
  optional PostImage post_image = 6;
  optional PostVideo post_video = 7;
  optional Stamp stamp = 8;
  optional string description = 9;
}

message Persona {
  string persona_id = 1;
  string name = 2;
  string display_name = 3;
  string avatar_url = 4;
  bool is_deleted = 5;
  bool following = 6;
  bool followed = 7;
  string profile_text = 8;
  string profile_image_url = 9;
  optional StatusIcon status_icon = 10;
  optional string status_text = 11;
  bool is_persona_frozen = 12;
  VerificationType verification_type = 13;
  bool is_blocking = 14;
  PersonaVisibility visibility = 15;
  FollowingStatus following_status = 16;
  Timestamp created_at = 17;
  PersonaType persona_type = 18;
}

message PersonaName {
  string persona_id = 1;
  string name = 2;
}

message Post {
  string post_id = 1;
  string time_series_id = 2;
  Timestamp created_at = 3;
  string persona_id = 4;
  PostVisibility visibility = 5;
  bool is_deleted = 6;
  repeated Media medias = 7;
  uint64 repost_count = 8;
  uint64 likes_count = 9;
  uint64 replies_count = 10;
  uint64 quoted_count = 11;
  optional string text = 12;
  optional string in_reply_to_post_id = 13;
  optional string repost_id = 14;
  optional string quote_post_id = 15;
  bool liked = 16;
  bool reposted = 17;
  bool bookmarked = 18;
  optional Post reference_post = 19;
  bool quoted = 20;
  bool replied = 21;
  repeated LinkCard link_cards = 22;
  bool is_muted = 23;
  bool is_sensitive = 24;
  optional CommunitySummary community = 25;
  optional Community attached_community = 26;
  repeated PersonaName mentions = 27;
  repeated uint32 decorations = 28;
  repeated PostStamp stamps = 29;
  optional string reader_stamp_id = 30;
  bool is_restricted = 31;
  PostMaskType mask_type = 32;
  optional string mask_caption = 33;
  PostPublishingType publishing_type = 34;
}

message PostImage {
  string large_image_url = 1;
  string large_image_mime_type = 2;
  uint32 large_image_height = 3;
  uint32 large_image_width = 4;
  string small_image_url = 5;
  string small_image_mime_type = 6;
  uint32 small_image_height = 7;
  uint32 small_image_width = 8;
  string blurhash = 9;
}

message PostStamp {
  Stamp stamp = 1;
  uint64 count = 2;
}

message PostVideo {
  string url = 1;
  string mime_type = 2;
  uint32 height = 3;
  uint32 width = 4;
  string preview_image_url = 5;
  string preview_image_mime_type = 6;
  uint32 preview_image_height = 7;
  uint32 preview_image_width = 8;
  string blurhash = 9;
  float duration = 10;
}

message Stamp {
  string url = 1;
  string mime_type = 2;
  uint32 height = 3;
  uint32 width = 4;
}

message StatusIcon {
  StatusIconType status_icon_type = 3;
  string status_icon = 4;
}

message Timestamp {
  int64 seconds = 1;
  int32 nanos = 2;
}

message GetPersonaByNameRequest {
  string name = 1;
}

message GetPersonaByNameResponse {
  Persona persona = 1;
}

service MercuryService {
  rpc GetSubscribingFeeds(GetSubscribingFeedsRequest) returns (GetSubscribingFeedsResponse);
  rpc GetPersonaByName(GetPersonaByNameRequest) returns (GetPersonaByNameResponse);
}
`
