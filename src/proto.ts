export const proto = `
syntax = "proto3";

package mixi;

enum AuthenticationLanguageCode {
  AUTHENTICATION_LANGUAGE_CODE_JP = 0;
  AUTHENTICATION_LANGUAGE_CODE_EN = 1;
}

enum AuthenticationPlatform {
  AUTHENTICATION_PLATFORM_UNKNOWN = 0;
  AUTHENTICATION_PLATFORM_IOS = 1;
  AUTHENTICATION_PLATFORM_ANDROID = 2;
  AUTHENTICATION_PLATFORM_WEB = 3;
}

enum AuthenticationType {
  AUTHENTICATION_TYPE_UNKNOWN = 0;
  AUTHENTICATION_TYPE_REGISTER = 1;
  AUTHENTICATION_TYPE_LOGIN = 2;
}

enum Category {
  CATEGORY_UNKNOWN = 0;
  CATEGORY_AVATAR = 1;
  CATEGORY_POST_IMAGE = 2;
  CATEGORY_POST_VIDEO = 3;
  CATEGORY_COMMUNITY_COVER_IMAGE = 4;
  CATEGORY_COMMUNITY_STAMP = 5;
}

enum ChatRoomMessageType {
  CHAT_ROOM_MESSAGE_TYPE_MESSAGE = 0;
  CHAT_ROOM_MESSAGE_TYPE_SYSTEM_MESSAGE_INVITE = 1;
  CHAT_ROOM_MESSAGE_TYPE_SYSTEM_MESSAGE_JOIN = 2;
  CHAT_ROOM_MESSAGE_TYPE_SYSTEM_MESSAGE_LEAVE = 3;
  CHAT_ROOM_MESSAGE_TYPE_SYSTEM_MESSAGE_CHANGE_TITLE = 4;
  CHAT_ROOM_MESSAGE_TYPE_SYSTEM_MESSAGE_CHANGE_ICON = 5;
}

enum ChatRoomStatus {
  CHAT_ROOM_STATUS_UNKNOWN = 0;
  CHAT_ROOM_STATUS_ACCEPTED = 1;
  CHAT_ROOM_STATUS_REQUESTED = 2;
  CHAT_ROOM_STATUS_REQUESTING = 3;
}

enum CommunityAccessLevel {
  COMMUNITY_ACCESS_LEVEL_PUBLIC = 0;
  COMMUNITY_ACCESS_LEVEL_APPROVAL_REQUIRED = 1;
}

enum CommunityApproveStatus {
  COMMUNITY_APPROVE_STATUS_REQUEST = 0;
  COMMUNITY_APPROVE_STATUS_APPROVE = 1;
  COMMUNITY_APPROVE_STATUS_REJECT = 2;
  COMMUNITY_APPROVE_STATUS_CANCEL = 3;
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

enum FollowingRequestStatus {
  FOLLOWING_REQUEST_STATUS_REQUESTING = 0;
  FOLLOWING_REQUEST_STATUS_APPROVED = 1;
  FOLLOWING_REQUEST_STATUS_REJECTED = 2;
  FOLLOWING_REQUEST_STATUS_CANCELED = 3;
}

enum FollowingStatus {
  FOLLOWING_STATUS_NONE = 0;
  FOLLOWING_STATUS_FOLLOWING = 1;
  FOLLOWING_STATUS_REQUESTING = 2;
}

enum GiftCampaignKey {
  GIFT_CAMPAIGN_KEY_UNSPECIFIED = 0;
  GIFT_CAMPAIGN_KEY_2025_SPRING_INVITATION_STAMP_CAMPAIGN = 1;
}

enum GlobalCounterKey {
  GLOBAL_COUNTER_KEY_UNSPECIFIED = 0;
  GLOBAL_COUNTER_KEY_2025_WEB_COMMING_SOON = 1;
}

enum InvitationKind {
  INVITATION_KIND_PERSONA = 0;
  INVITATION_KIND_COMMUNITY = 1;
}

enum ItemType {
  ITEM_TYPE_PERSONA = 0;
}

enum LanguageCode {
  LANGUAGE_CODE_UNKNOWN = 0;
  LANGUAGE_CODE_JP = 1;
  LANGUAGE_CODE_EN = 2;
}

enum LinkCardStatus {
  STATUS_PROCESSING = 0;
  STATUS_RESOLVED = 1;
  STATUS_FAILED = 2;
}

enum MediaStatus {
  STATUS_UNKNOWN = 0;
  STATUS_WAIT_FOR_UPLOADING = 1;
  STATUS_IN_PROGRESS = 2;
  STATUS_SUCCESS = 3;
  STATUS_FAILURE = 4;
}

enum NotificationActivityType {
  NOTIFICATION_ACTIVITY_TYPE_UNKNOWN = 0;
  NOTIFICATION_ACTIVITY_TYPE_FOLLOW = 100;
  NOTIFICATION_ACTIVITY_TYPE_FOLLOWING_REQUEST_RECEIVED = 101;
  NOTIFICATION_ACTIVITY_TYPE_FOLLOWING_REQUEST_APPROVED = 102;
  NOTIFICATION_ACTIVITY_TYPE_INVITATION_FOLLOW = 103;
  NOTIFICATION_ACTIVITY_TYPE_LIKE = 200;
  NOTIFICATION_ACTIVITY_TYPE_REPOST = 201;
  NOTIFICATION_ACTIVITY_TYPE_QUOTE = 202;
  NOTIFICATION_ACTIVITY_TYPE_REPLY = 204;
  NOTIFICATION_ACTIVITY_TYPE_MENTION = 205;
  NOTIFICATION_ACTIVITY_TYPE_REACTION = 206;
  NOTIFICATION_ACTIVITY_TYPE_COMMUNITY_JOIN_REQUEST = 300;
  NOTIFICATION_ACTIVITY_TYPE_COMMUNITY_JOIN_ACCEPT = 301;
  NOTIFICATION_ACTIVITY_TYPE_COMMUNITY_INVITATION = 310;
  NOTIFICATION_ACTIVITY_TYPE_COMMUNITY_GRANT_ADMIN_PRIVILEGES = 311;
  NOTIFICATION_ACTIVITY_TYPE_COMMUNITY_JOIN = 312;
  NOTIFICATION_ACTIVITY_TYPE_EVENT_JOIN = 400;
  NOTIFICATION_ACTIVITY_TYPE_EVENT_REMINDER = 401;
}

enum Operation {
  OPERATION_FOLLOWING_PERSONA = 0;
  OPERATION_COMMUNITY = 1;
  OPERATION_ROOKIE_PERSONA = 2;
  OPERATION_NEW_COMMUNITY = 3;
  OPERATION_PICKUP_COMMUNITY = 4;
  OPERATION_VERIFIED_PERSONA = 5;
}

enum PersonaInAppEventStatus {
  PERSONA_IN_APP_EVENT_STATUS_UNSPECIFIED = 0;
  PERSONA_IN_APP_EVENT_STATUS_UNKNOWN = 1;
  PERSONA_IN_APP_EVENT_STATUS_ACTIVE = 2;
  PERSONA_IN_APP_EVENT_STATUS_INACTIVE = 3;
  PERSONA_IN_APP_EVENT_STATUS_DONE = 4;
}

enum PersonaInAppEventType {
  PERSONA_IN_APP_EVENT_TYPE_UNSPECIFIED = 0;
  PERSONA_IN_APP_EVENT_TYPE_VIEW_STORE_REVIEW_POPUP = 1;
  PERSONA_IN_APP_EVENT_TYPE_INVITATION_DIALOG_AFTER_NEW_REGISTRATION = 2;
  PERSONA_IN_APP_EVENT_TYPE_INVITATION_FROM_HOME = 3;
  PERSONA_IN_APP_EVENT_TYPE_VERIFIED_BADGE_AWARDED_POPUP = 4;
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

enum PickupCommunityCategory {
  PICKUP_COMMUNITY_CATEGORY_UNSPECIFIED = 0;
  PICKUP_COMMUNITY_CATEGORY_SPORT = 1;
  PICKUP_COMMUNITY_CATEGORY_TECHNOLOGY = 2;
  PICKUP_COMMUNITY_CATEGORY_ART_AND_CREATIVE = 3;
  PICKUP_COMMUNITY_CATEGORY_GAME = 4;
  PICKUP_COMMUNITY_CATEGORY_BUSINESS_AND_CAREER = 5;
  PICKUP_COMMUNITY_CATEGORY_ENTERTAINMENT = 6;
  PICKUP_COMMUNITY_CATEGORY_AREA_AND_TRAVEL = 7;
  PICKUP_COMMUNITY_CATEGORY_LIFE = 8;
  PICKUP_COMMUNITY_CATEGORY_FOOD_AND_COOKING = 9;
  PICKUP_COMMUNITY_CATEGORY_FASHION = 10;
  PICKUP_COMMUNITY_CATEGORY_ANIMAL = 11;
  PICKUP_COMMUNITY_CATEGORY_HOBBY = 12;
  PICKUP_COMMUNITY_CATEGORY_PHOTOGRAPH = 13;
  PICKUP_COMMUNITY_CATEGORY_COMICS_AND_ANIMATION = 14;
  PICKUP_COMMUNITY_CATEGORY_MUSIC_AND_CINEMA = 15;
}

enum PlatformType {
  PLATFORM_TYPE_UNKNOWN = 0;
  PLATFORM_TYPE_IOS = 1;
  PLATFORM_TYPE_ANDROID = 2;
  PLATFORM_TYPE_WEB = 3;
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

enum PostReactionType {
  POST_REACTION_TYPE_UNKNOWN = 0;
  POST_REACTION_TYPE_REPLY = 100;
  POST_REACTION_TYPE_REPOST = 101;
  POST_REACTION_TYPE_QUOTE = 102;
  POST_REACTION_TYPE_LIKE = 200;
  POST_REACTION_TYPE_BOOKMARK = 201;
}

enum PostVisibility {
  POST_VISIBILITY_PUBLIC = 0;
  POST_VISIBILITY_PRIVATE = 1;
  POST_VISIBILITY_SEALED = 2;
}

enum ProfileSocialMediaType {
  PROFILE_SOCIAL_MEDIA_TYPE_UNSPECIFIED = 0;
  PROFILE_SOCIAL_MEDIA_TYPE_TWITTER = 1;
  PROFILE_SOCIAL_MEDIA_TYPE_INSTAGRAM = 2;
  PROFILE_SOCIAL_MEDIA_TYPE_TIKTOK = 3;
  PROFILE_SOCIAL_MEDIA_TYPE_YOUTUBE = 4;
}

enum ReportReasonType {
  REPORT_REASON_TYPE_UNSPECIFIED = 0;
  REPORT_REASON_TYPE_SPAM = 1;
  REPORT_REASON_TYPE_DISTURBING_OR_OFFENSIVE_BEHAVIOR = 2;
  REPORT_REASON_TYPE_SEXUAL_HARASSMENT_ENCOUNTER = 3;
  REPORT_REASON_TYPE_COPYRIGHT_INFRINGEMENT = 4;
  REPORT_REASON_TYPE_INVASION_OF_PRIVACY = 5;
  REPORT_REASON_TYPE_OTHER = 6;
  REPORT_REASON_TYPE_RIGHT_INFRINGEMENT = 7;
}

enum ReportRightInfringementTarget {
  REPORT_RIGHT_INFRINGEMENT_TARGET_UNSPECIFIED = 0;
  REPORT_RIGHT_INFRINGEMENT_TARGET_SELF = 1;
  REPORT_RIGHT_INFRINGEMENT_TARGET_OTHERS = 2;
}

enum RewardType {
  REWARD_TYPE_UNSPECIFIED = 0;
  REWARD_TYPE_STAMP = 1;
}

enum SearchType {
  SEARCH_TYPE_PERSONAS = 0;
  SEARCH_TYPE_POSTS = 1;
  SEARCH_TYPE_COMMUNITIES = 2;
  SEARCH_TYPE_TOPIC = 3;
  SEARCH_TYPE_EVENT = 4;
}

enum StampSetType {
  STAMP_SET_TYPE_UNSPECIFIED = 0;
  STAMP_SET_TYPE_DEFAULT = 1;
  STAMP_SET_TYPE_SECRET = 2;
  STAMP_SET_TYPE_SEASONAL = 3;
  STAMP_SET_TYPE_CAMPAIGN = 4;
}

enum StatusIconType {
  STATUS_ICON_TYPE_NONE = 0;
  STATUS_ICON_TYPE_EMOJI = 1;
}

enum TokenProvider {
  TOKEN_PROVIDER_MIXIM = 0;
}

enum VerificationType {
  VERIFICATION_TYPE_UNVERIFIED = 0;
  VERIFICATION_TYPE_SERVICE = 1;
  VERIFICATION_TYPE_BUSINESS = 2;
  VERIFICATION_TYPE_PUBLIC_FIGURE = 3;
}



message AcceptChatRoomRequest {
  string room_id = 1;
}

message AcceptChatRoomResponse {
  ChatRoom room = 1;
}

message AddMembersToChatRoomRequest {
  string room_id = 1;
  repeated string member_ids = 2;
}

message AddMembersToChatRoomResponse {
  ChatRoom room = 1;
}

message AddStampToPostRequest {
  string post_id = 1;
  string stamp_id = 2;
}

message AddStampToPostResponse {
  Post post = 1;
}

message Announcement {
  string announcement_id = 1;
  string caption = 2;
  Timestamp expires_at = 3;
  optional string post_id = 4;
  Timestamp created_at = 5;
}

message ApplyForVerificationRequest {
  repeated ProfileSocialMediaType social_media_types = 1;
}

message ApplyForVerificationResponse {
}

message ApproveFollowingRequestRequest {
  string request_id = 1;
}

message ApproveFollowingRequestResponse {
}

message ApproveJoinCommunityRequest {
  string community_id = 1;
  string persona_id = 2;
}

message ApproveJoinCommunityResponse {
  Community community = 1;
}

message ArchiveCommunityRequest {
  string community_id = 1;
}

message ArchiveCommunityResponse {
  Community community = 1;
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

message BookmarkCommunityRequest {
  string community_id = 1;
}

message BookmarkCommunityResponse {
  Community community = 1;
}

message CancelFollowingRequestRequest {
  string persona_id = 1;
}

message CancelFollowingRequestResponse {
  Persona persona = 1;
}

message CancelJoinCommunityRequestRequest {
  string community_id = 1;
}

message CancelJoinCommunityRequestResponse {
  Community community = 1;
}

message ChangeCommunityAdminsRequest {
  string community_id = 1;
  repeated string added_persona_ids = 2;
  repeated string removed_persona_ids = 3;
}

message ChangeCommunityAdminsResponse {
  repeated CommunityMember admins = 1;
}

message ChangeCommunityPostSubscriptionTypeRequest {
  string community_id = 1;
  CommunityPostSubscriptionType post_subscription_type = 2;
}

message ChangeCommunityPostSubscriptionTypeResponse {
  Community community = 1;
}

message ChangeMyPersonaVisibilityRequest {
  PersonaVisibility visibility = 1;
}

message ChangeMyPersonaVisibilityResponse {
  Persona persona = 1;
}

message ChatRoom {
  string room_id = 1;
  bool is_group = 2;
  optional string title = 3;
  repeated ChatRoomMember members = 4;
  Timestamp created_at = 5;
  optional ChatRoomMessage message = 6;
  ChatRoomStatus status = 7;
  bool is_mute = 8;
  bool is_invisible = 9;
}

message ChatRoomMember {
  string persona_id = 1;
  optional string read_message_id = 2;
}

message ChatRoomMessage {
  string room_id = 1;
  string message_id = 2;
  string persona_id = 3;
  ChatRoomMessageType message_type = 4;
  optional string message_target_id = 5;
  optional string text = 6;
  Timestamp created_at = 8;
  repeated Media media = 9;
  optional Post post = 10;
}

message CheckPendingPostRequest {
  string post_id = 1;
}

message CheckPendingPostResponse {
  Post post = 1;
  bool is_pending = 2;
}

message CloseEventCommunityRequest {
  string event_community_id = 1;
}

message CloseEventCommunityResponse {
  Community community = 1;
}

message CommunitiesResult {
  repeated Community communities = 1;
  optional string next_cursor = 2;
}

message Community {
  string community_id = 1;
  string name = 2;
  string purpose = 3;
  CommunityAccessLevel access_level = 4;
  repeated CommunityMember admins = 5;
  repeated CommunityRule rules = 6;
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

message CommunityJoinRequest {
  string community_id = 1;
  string request_id = 2;
  string time_series_id = 3;
  string approver_persona_id = 4;
  string requestor_persona_id = 5;
  CommunityApproveStatus status = 6;
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

message CommunityResponse {
  repeated Community communities = 1;
  repeated RecommendedCommunity recommended_communities = 2;
}

message CommunityRule {
  string community_id = 1;
  string rule_id = 2;
  Timestamp created_at = 3;
  string text = 4;
}

message CommunityStamp {
  string stamp_id = 1;
  string url = 2;
  repeated string search_tags = 3;
}

message CommunityStampDetail {
  string stamp_id = 1;
  string url = 2;
  repeated string search_tags = 3;
  Timestamp created_at = 4;
}

message CommunityStampSet {
  string community_id = 1;
  repeated CommunityStamp stamps = 2;
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

message CreateBookmarkRequest {
  string post_id = 1;
}

message CreateBookmarkResponse {
  Post post = 1;
}

message CreateChatRoomRequest {
  bool is_group = 1;
  repeated string member_ids = 2;
}

message CreateChatRoomResponse {
  ChatRoom room = 1;
}

message CreateCommunityRequest {
  string name = 1;
  string purpose = 2;
  CommunityAccessLevel access_level = 3;
}

message CreateCommunityResponse {
  Community community = 1;
}

message CreateEventCommunityRequest {
  string event_name = 1;
  string event_purpose = 2;
  CommunityAccessLevel access_level = 3;
  Timestamp start_at = 4;
  optional Timestamp end_at = 5;
  optional uint32 default_cover_image_index = 6;
  optional string community_id = 7;
  optional CommunityPostConstraint post_constraint = 8;
  optional CommunityEventLocationType location_type = 9;
}

message CreateEventCommunityResponse {
  Community community = 1;
}

message CreateFollowingRequest {
  string following_id = 1;
}

message CreateFollowingResponse {
  Following following = 1;
}

message CreateLikeRequest {
  string post_id = 1;
}

message CreateLikeResponse {
  Post post = 1;
}

message CreatePersonaFromSessionRequest {
  string name = 1;
  string display_name = 2;
}

message CreatePersonaRequest {
  string refresh_token = 1;
  string name = 2;
  string display_name = 3;
}

message CreatePostAndEventCommunityRequest {
  string post_text = 1;
  optional string community_id = 2;
  string event_name = 3;
  string event_purpose = 4;
  CommunityAccessLevel access_level = 5;
  Timestamp start_at = 6;
  optional Timestamp end_at = 7;
  optional uint32 default_cover_image_index = 8;
  repeated uint32 decorations = 9;
  optional CommunityEventLocationType event_location_type = 10;
  optional PostPublishingType publishing_type = 11;
}

message CreatePostAndEventCommunityResponse {
  Post post = 1;
}

message CreatePostRequest {
  string text = 1;
  optional string in_reply_to_post_id = 2;
  optional string quote_post_id = 3;
  repeated string media_ids = 4;
  optional string repost_id = 5;
  bool is_sensitive = 6;
  optional string community_id = 7;
  optional string attached_community_id = 8;
  repeated uint32 decorations = 9;
  optional PostMaskType mask_type = 10;
  optional string mask_caption = 11;
  optional PostPublishingType publishing_type = 12;
}

message CreatePostResponse {
  Post post = 1;
  bool is_pending = 2;
}

message CreateTopicCommunityRequest {
  string name = 1;
  string purpose = 2;
  CommunityAccessLevel access_level = 3;
  optional uint32 default_cover_image_index = 4;
  optional CommunityPostConstraint post_constraint = 5;
  optional bool searchable = 6;
}

message CreateTopicCommunityResponse {
  Community community = 1;
}

message DeleteAccountRequest {
  string refresh_token = 1;
}

message DeleteAccountResponse {
}

message DeleteBookmarkRequest {
  string post_id = 1;
}

message DeleteBookmarkResponse {
  Post post = 1;
}

message DeleteCommunityStampRequest {
  string community_id = 1;
  string stamp_id = 2;
}

message DeleteCommunityStampResponse {
}

message DeleteExcludedCommunityMemberRequest {
  string community_id = 1;
  string persona_id = 2;
}

message DeleteExcludedCommunityMemberResponse {
}

message DeleteExcludedCommunityMembersRequest {
  string community_id = 1;
  repeated string persona_ids = 2;
}

message DeleteExcludedCommunityMembersResponse {
}

message DeleteFCMTokenRequest {
  string fcm_token = 1;
}

message DeleteFCMTokenResponse {
}

message DeleteFollowingRequest {
  string following_id = 1;
}

message DeleteFollowingResponse {
  Following following = 1;
}

message DeleteLikeRequest {
  string post_id = 1;
}

message DeleteLikeResponse {
  Post post = 1;
}

message DeletePostRequest {
  string post_id = 1;
}

message DeletePostResponse {
  bool deleted = 1;
}

message DeleteRepostRequest {
  string reference_post_id = 1;
}

message DeleteRepostResponse {
  string deleted_post_id = 1;
  Post reference_post = 2;
}

message DeleteSessionRequest {
  optional string fcm_token = 1;
}

message DeleteSessionResponse {
}

message DenyJoinCommunityRequest {
  string community_id = 1;
  string persona_id = 2;
}

message DenyJoinCommunityResponse {
}

message EventSchedule {
  Timestamp start_at = 1;
  optional Timestamp end_at = 2;
  CommunityEventStatus status = 3;
  optional Timestamp closed_at = 4;
  optional CommunityEventLocationType event_location_type = 5;
}

message ExcludeCommunityMemberRequest {
  string community_id = 1;
  string persona_id = 2;
}

message ExcludeCommunityMemberResponse {
  CommunityMember member = 1;
  Community community = 2;
}

message ExcludeCommunityMembersRequest {
  string community_id = 1;
  repeated string persona_ids = 2;
}

message ExcludeCommunityMembersResponse {
  repeated CommunityMember members = 1;
  Community community = 2;
}

message ExitChatRoomRequest {
  string room_id = 1;
}

message ExitChatRoomResponse {
}

message Feed {
  FeedType feed_type = 1;
  string time_series_id = 2;
  Post post = 3;
  CommunityAggregationPost community_aggregation_post = 4;
}

message Follower {
  string persona_id = 1;
  Timestamp created_at = 2;
  Persona persona = 3;
  PersonaConnectivity connectivity = 4;
}

message Following {
  string persona_id = 1;
  Timestamp created_at = 2;
  Persona persona = 3;
  PersonaConnectivity connectivity = 4;
}

message FollowingCount {
  uint64 following_count = 2;
  uint64 followed_count = 3;
}

message FollowingPersonaResponse {
  repeated PersonaWithConnectivity personas = 1;
  repeated RecommendedPersona recommended_personas = 2;
}

message FollowingRequest {
  string request_id = 1;
  string sender_id = 2;
  string receiver_id = 3;
  Timestamp created_at = 4;
  FollowingRequestStatus status = 5;
}

message GetAnnouncementsRequest {
}

message GetAnnouncementsResponse {
  repeated Announcement announcements = 1;
}

message GetBadgeCountRequest {
}

message GetBadgeCountResponse {
  uint64 account_unread_count = 1;
  uint64 persona_unread_notification_count = 2;
  uint64 persona_unread_active_room_count = 3;
  uint64 persona_unread_requested_room_count = 4;
  uint64 persona_unread_muted_room_count = 5;
  repeated bool unread_list = 6;
}

message GetBlockingMembersInCommunityRequest {
  string community_id = 1;
}

message GetBlockingMembersInCommunityResponse {
  uint32 blocking_members_count = 1;
}

message GetBlockPersonasRequest {
}

message GetBlockPersonasResponse {
  repeated string persona_ids = 1;
}

message GetChatRoomMessagesRequest {
  string room_id = 1;
  optional uint32 limit = 2;
  optional string until_message_id = 3;
  optional string since_message_id = 4;
}

message GetChatRoomMessagesResponse {
  repeated ChatRoomMessage messages = 1;
  bool has_next = 2;
}

message GetChatRoomRequest {
  string room_id = 1;
}

message GetChatRoomResponse {
  ChatRoom room = 1;
}

message GetChatRoomsRequest {
  optional uint32 limit = 1;
  optional string until_message_id = 2;
  optional string since_message_id = 3;
}

message GetChatRoomsResponse {
  repeated ChatRoom rooms = 1;
  bool has_next = 2;
}

message GetCommunitiesPostNotificationsRequest {
  CommunityType type = 1;
}

message GetCommunitiesPostNotificationsResponse {
  repeated string community_ids = 1;
}

message GetCommunitiesRequest {
  repeated string community_ids = 1;
}

message GetCommunitiesResponse {
  repeated Community communities = 1;
}

message GetCommunityBookmarksRequest {
  string persona_id = 1;
}

message GetCommunityBookmarksResponse {
  repeated Community communities = 1;
}

message GetCommunityInvitablePersonasRequest {
  string community_id = 1;
  optional string cursor = 2;
}

message GetCommunityInvitablePersonasResponse {
  repeated InvitablePersona invitable_personas = 1;
  optional string next_cursor = 2;
}

message GetCommunityInvitationCodeRequest {
  string community_id = 1;
}

message GetCommunityInvitationCodeResponse {
  string invitation_code = 1;
}

message GetCommunityInvitationRequest {
  string invitation_code = 1;
}

message GetCommunityInvitationResponse {
  Timestamp expires_at = 1;
  Community community = 2;
  Persona inviter = 3;
}

message GetCommunityJoinRequestsRequest {
  repeated string request_ids = 1;
}

message GetCommunityJoinRequestsResponse {
  repeated CommunityJoinRequest join_requests = 1;
}

message GetCommunityPostPinRequest {
  string post_id = 1;
}

message GetCommunityPostPinResponse {
  optional CommunityPostPin post_pin = 1;
}

message GetCommunityRequest {
  string community_id = 1;
}

message GetCommunityResponse {
  Community community = 1;
}

message GetCommunityStampsRequest {
  string community_id = 1;
}

message GetCommunityStampsResponse {
  repeated CommunityStampDetail stamps = 1;
}

message GetCommunityTimelineRequest {
  string community_id = 1;
  optional string until_cursor_id = 2;
  optional string since_cursor_id = 3;
  optional uint32 limit = 4;
  optional string end_cursor_id = 5;
  optional bool media_only = 6;
}

message GetCompletedOrClosedEventCommunitiesRequest {
  optional string cursor = 1;
  optional uint32 limit = 2;
  optional bool is_admin_only = 3;
  optional string persona_id = 4;
}

message GetCompletedOrClosedEventCommunitiesResponse {
  repeated Community communities = 1;
  optional string next_cursor = 2;
}

message GetEventCommunitiesWithinCommunityRequest {
  string parent_community_id = 1;
  optional uint32 limit = 2;
  optional string cursor = 3;
}

message GetEventCommunitiesWithinCommunityResponse {
  repeated Community communities = 1;
  optional string next_cursor = 2;
}

message GetExclusiveCommunityMembersRequest {
  string community_id = 1;
  CommunityMemberStatus status = 2;
  optional uint32 limit = 3;
  optional string cursor = 4;
}

message GetExclusiveCommunityMembersResponse {
  repeated CommunityMember members = 1;
  optional string cursor = 2;
}

message GetFeatureFlagsRequest {
}

message GetFeatureFlagsResponse {
  bool feature_flags = 1;
}

message GetFollowersRequest {
  optional string cursor_id = 1;
  optional uint32 limit = 2;
  optional string persona_id = 3;
}

message GetFollowersResponse {
  repeated Follower followers = 1;
  string cursor_id = 2;
}

message GetFollowingCountRequest {
  string persona_id = 1;
}

message GetFollowingCountResponse {
  FollowingCount following_count = 1;
}

message GetFollowingRequestsRequest {
  repeated string request_ids = 1;
}

message GetFollowingRequestsResponse {
  repeated FollowingRequest following_requests = 1;
}

message GetFollowingsRequest {
  optional string cursor_id = 1;
  optional uint32 limit = 2;
  optional string persona_id = 3;
}

message GetFollowingsResponse {
  repeated Following followings = 1;
  string cursor_id = 2;
}

message GetFollowingsTimelineRequest {
  optional string until_cursor_id = 1;
  optional string since_cursor_id = 2;
  optional uint32 limit = 3;
  optional string end_cursor_id = 4;
}

message GetGlobalCountRequest {
  GlobalCounterKey key = 1;
}

message GetGlobalCountResponse {
  uint64 count = 1;
}

message GetHashtagTimelineRequest {
  string hashtag = 1;
  optional bool media_only = 2;
  optional string until_cursor_id = 3;
  optional string since_cursor_id = 4;
  optional uint32 limit = 5;
  optional string end_cursor_id = 6;
}

message GetInAppEventStatusAllRequest {
}

message GetInAppEventStatusAllResponse {
  InAppEventStatusAll event_status_all = 1;
}

message GetInAppEventStatusRequest {
  PersonaInAppEventType event_type = 1;
}

message GetInAppEventStatusResponse {
  PersonaInAppEventStatus event_status = 1;
}

message GetInvitationCodeRequest {
  optional bool disable_campaign = 1;
}

message GetInvitationCodeResponse {
  string invitation_code = 1;
  optional InvitationCampaign campaign = 2;
}

message GetInvitationRequest {
  string invitation_code = 1;
}

message GetInvitationResponse {
  Timestamp expires_at = 1;
  Profile profile = 2;
  optional InvitationCampaign campaign = 3;
}

message GetLatestRenameLogRequest {
}

message GetLatestRenameLogResponse {
  optional RenameLog rename_log = 1;
  bool is_renamable = 2;
}

message GetLikingPersonasRequest {
  string post_id = 1;
  optional uint32 limit = 2;
  optional string cursor = 3;
}

message GetLikingPersonasResponse {
  repeated Persona personas = 1;
  string next_cursor = 2;
  bool has_next = 3;
}

message GetLimitedTimeCampaignRequest {
}

message GetLimitedTimeCampaignResponse {
  repeated GiftCampaignInfo gift_campaign_info = 1;
}

message GetMediaRequest {
  string media_id = 1;
}

message GetMediaResponse {
  Media media = 1;
}

message GetMuteChatRoomsRequest {
  optional uint32 limit = 1;
  optional string until_message_id = 2;
  optional string since_message_id = 3;
}

message GetMuteChatRoomsResponse {
  repeated ChatRoom rooms = 1;
  bool has_next = 2;
}

message GetMutePersonasRequest {
}

message GetMutePersonasResponse {
  repeated string persona_ids = 1;
}

message GetNotificationsRequest {
  optional NotificationActivityType activity_type = 1;
  optional uint32 limit = 2;
  optional string until_time_series_id = 3;
  optional string end_time_series_id = 4;
  repeated NotificationActivityType activity_types = 5;
}

message GetNotificationsResponse {
  repeated Notification notifications = 1;
  bool has_next = 2;
}

message GetOngoingEventCommunitiesRequest {
  optional string cursor = 1;
  optional uint32 limit = 2;
  optional bool is_admin_only = 3;
  optional string persona_id = 4;
}

message GetOngoingEventCommunitiesResponse {
  repeated Community communities = 1;
  optional string next_cursor = 2;
}

message GetOngoingOrUpcomingEventCommunitiesRequest {
  optional string cursor = 1;
  optional uint32 limit = 2;
  optional bool is_admin_only = 3;
  optional string persona_id = 4;
}

message GetOngoingOrUpcomingEventCommunitiesResponse {
  repeated Community communities = 1;
  optional string next_cursor = 2;
}

message GetParticipatingCommunitiesRequest {
  optional string persona_id = 1;
  optional CommunityType type = 2;
  optional uint32 limit = 3;
  optional string cursor = 4;
  optional bool is_admin_only = 5;
  optional bool reject_archived = 6;
}

message GetParticipatingCommunitiesResponse {
  repeated Community communities = 1;
  optional string next_cursor = 2;
}

message GetParticipatingCommunityMembersRequest {
  string community_id = 1;
  optional uint32 limit = 2;
  optional string cursor = 3;
}

message GetParticipatingCommunityMembersResponse {
  repeated CommunityMember members = 1;
  optional string cursor = 2;
}

message GetPastOrClosedEventCommunitiesRequest {
  optional string cursor = 1;
  optional uint32 limit = 2;
  optional bool is_admin_only = 3;
}

message GetPastOrClosedEventCommunitiesResponse {
  repeated Community communities = 1;
  optional string next_cursor = 2;
}

message GetPendingFollowingRequestsRequest {
  optional string cursor = 1;
}

message GetPendingFollowingRequestsResponse {
  repeated FollowingRequest following_requests = 1;
  optional string next_cursor = 2;
}

message GetPendingVerificationSocialMediaRequest {
}

message GetPendingVerificationSocialMediaResponse {
  repeated ProfileSocialMediaType social_media_types = 1;
}

message GetPersonaByNameRequest {
  string name = 1;
}

message GetPersonalCommunityPostsRequest {
  optional string until_cursor_id = 1;
  optional string since_cursor_id = 2;
  optional uint32 limit = 3;
  optional string end_cursor_id = 4;
}

message GetPersonalInformationRequest {
}

message GetPersonalInformationResponse {
  string email = 1;
}

message GetPersonalTimelineRequest {
  string persona_id = 1;
  optional string until_cursor_id = 2;
  optional string since_cursor_id = 3;
  optional uint32 limit = 4;
  optional string end_cursor_id = 5;
  optional bool media_only = 6;
}

message GetPersonaResponse {
  Persona persona = 1;
}

message GetPersonasPostNotificationsRequest {
}

message GetPersonasPostNotificationsResponse {
  repeated string persona_ids = 1;
}

message GetPersonasRequest {
  repeated string persona_ids = 1;
}

message GetPersonasResponse {
  repeated Persona personas = 1;
}

message GetPostableCommunitiesRequest {
  optional uint32 limit = 1;
  optional string cursor = 2;
}

message GetPostableCommunitiesResponse {
  repeated CommunitySummary communities = 1;
  optional string next_cursor = 2;
}

message GetPostRequest {
  string post_id = 1;
}

message GetPostResponse {
  Post post = 1;
}

message GetPostsRequest {
  repeated string post_ids = 1;
}

message GetPostsResponse {
  repeated Post posts = 1;
}

message GetPostStampReactionsRequest {
  string post_id = 1;
  optional string cursor = 2;
  optional uint32 limit = 3;
}

message GetPostStampReactionsResponse {
  repeated PostStamp stamps = 1;
  repeated StampReaction stamp_reactions = 2;
  optional string next_cursor = 3;
}

message GetProfileByNameRequest {
  string name = 1;
}

message GetProfilePostPinRequest {
  string post_id = 1;
}

message GetProfilePostPinResponse {
  optional ProfilePostPin post_pin = 1;
}

message GetProfileRequest {
  string persona_id = 1;
}

message GetProfileResponse {
  Profile profile = 1;
}

message GetQuotePostsRequest {
  string post_id = 1;
  optional uint32 limit = 2;
  optional string cursor = 3;
}

message GetQuotePostsResponse {
  repeated Post posts = 1;
  string next_cursor = 2;
  bool has_next = 3;
}

message GetReactionPostsRequest {
  PostReactionType reaction_type = 1;
  optional uint32 limit = 2;
  optional string cursor = 3;
}

message GetReactionPostsResponse {
  repeated Post posts = 1;
  string next_cursor = 2;
  bool has_next = 3;
}

message GetRecommendationsRequest {
  repeated Operation operations = 1;
  optional uint32 limit = 2;
}

message GetRecommendationsResponse {
  optional FollowingPersonaResponse following_persona = 1;
  optional CommunityResponse community = 2;
  optional RookiePersonaResponse rookie_persona = 3;
  optional NewCommunityResponse new_community = 4;
  optional PickupCommunityResponse pickup_community = 5;
  optional VerifiedPersonaResponse verified_persona = 6;
}

message GetRecommendedCommunitiesRequest {
  optional uint32 limit = 1;
}

message GetRecommendedCommunitiesResponse {
  repeated Community communities = 1;
}

message GetRecommendedTimelineRequest {
  optional string until_cursor_id = 1;
  optional string since_cursor_id = 2;
  optional uint32 limit = 3;
  optional string end_cursor_id = 4;
}

message GetRemoteConfigRequest {
}

message GetRemoteConfigResponse {
  bool invitation_disabled = 1;
}

message GetRemotePushSettingsRequest {
}

message GetRemotePushSettingsResponse {
  bool like = 1;
  bool reply = 2;
  bool repost = 3;
  bool quote = 4;
  bool mention = 5;
  bool follow = 6;
  bool chat = 7;
  bool community_approval = 8;
  bool event = 9;
  bool community_invitation = 10;
  bool recommended_post = 11;
  bool reaction = 12;
  bool community_grant_admin_privileges = 13;
  bool community_join = 14;
  bool following_request = 15;
  bool persona_post_like = 16;
  bool persona_post_reaction = 17;
  bool persona_post_reply = 18;
  bool persona_post_repost = 19;
  bool persona_post_quote = 20;
  bool persona_post_mention = 21;
  bool community_post_like = 22;
  bool community_post_reaction = 23;
  bool community_post_reply = 24;
  bool community_post_repost = 25;
  bool community_post_quote = 26;
  bool community_post_mention = 27;
  bool service_announcement = 28;
}

message GetRepliesRequest {
  string post_id = 1;
  optional uint32 limit = 2;
  optional string cursor = 3;
}

message GetRepliesResponse {
  repeated Post posts = 1;
  string next_cursor = 2;
  bool has_next = 3;
  repeated Post replies_from_original_sender = 4;
}

message GetReplyAncestorsRequest {
  string post_id = 1;
  optional uint32 limit = 2;
}

message GetReplyAncestorsResponse {
  repeated Post posts = 1;
  Post base_post = 2;
}

message GetRepostingPersonasRequest {
  string post_id = 1;
  optional uint32 limit = 2;
  optional string cursor = 3;
}

message GetRepostingPersonasResponse {
  repeated Persona personas = 1;
  string next_cursor = 2;
  bool has_next = 3;
}

message GetRequestedChatRoomsRequest {
  optional uint32 limit = 1;
  optional string until_message_id = 2;
  optional string since_message_id = 3;
}

message GetRequestedChatRoomsResponse {
  repeated ChatRoom rooms = 1;
  bool has_next = 2;
}

message GetSessionRequest {
}

message GetStampsRequest {
  optional LanguageCode official_stamp_language = 1;
  repeated string community_ids = 2;
}

message GetStampsResponse {
  repeated OfficialStampSet official_stamp_sets = 1;
  repeated CommunityStampSet community_stamp_sets = 2;
  repeated PersonaObtainedStampSet persona_obtained_stamp_sets = 3;
}

message GetStorageRateLimitRequest {
}

message GetStorageRateLimitResponse {
  uint64 usage = 1;
  uint64 limit = 2;
  Timestamp start_time = 3;
  Timestamp end_time = 4;
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

message GetThreadPostsRequest {
  string thread_post_id = 1;
  optional string until_cursor_id = 2;
  optional string since_cursor_id = 3;
  optional uint32 limit = 4;
  optional string end_cursor_id = 5;
}

message GetTimelineResponse {
  repeated Post posts = 1;
}

message GetTimelineSettingRequest {
}

message GetTimelineSettingResponse {
  bool personal_post_reply_subscribing_disabled = 1;
  bool community_post_reply_subscribing_disabled = 2;
  bool topic_post_reply_subscribing_disabled = 3;
  bool event_post_reply_subscribing_disabled = 4;
}

message GetUnreadChatRoomCountRequest {
}

message GetUnreadChatRoomCountResponse {
  uint64 active_room_count = 1;
  uint64 requested_room_count = 2;
  uint64 muted_room_count = 3;
}

message GetUpcomingEventCommunitiesRequest {
  optional string cursor = 1;
  optional uint32 limit = 2;
  optional bool is_admin_only = 3;
  optional string persona_id = 4;
}

message GetUpcomingEventCommunitiesResponse {
  repeated Community communities = 1;
  optional string next_cursor = 2;
}

message GetWaitingCommunitiesRequest {
  optional CommunityType type = 1;
  optional uint32 limit = 2;
  optional string cursor = 3;
}

message GetWaitingCommunitiesResponse {
  repeated Community communities = 1;
  optional string next_cursor = 2;
}

message GiftCampaignInfo {
  string campaign_id = 1;
  GiftCampaignKey campaign_key = 2;
  Timestamp start_at = 3;
  Timestamp end_at = 4;
  repeated GiftCampaignReward campaign_rewards = 5;
}

message GiftCampaignReward {
  string campaign_id = 1;
  RewardType reward_type = 2;
  string reward_item_id = 3;
  optional string reward_sub_item_id = 4;
  int32 reward_order = 5;
}

message Header {
  string key = 1;
  string value = 2;
}

message InAppEventStatusAll {
  int32 statuses = 1;
}

message IncrementGlobalCountRequest {
  GlobalCounterKey key = 1;
}

message IncrementGlobalCountResponse {
  uint64 count = 1;
}

message InvitablePersona {
  string persona_id = 1;
  bool is_sent = 2;
}

message InvitationCampaign {
  string campaign_id = 1;
  optional string ogp_background_url = 2;
  optional string ogp_title_url = 3;
  optional string ticket_background_top_url = 4;
  optional string ticket_background_middle_url = 5;
  optional string ticket_background_bottom_url = 6;
  optional string ticket_title_url = 7;
  optional string background_url = 8;
  optional string background_color = 9;
  optional string ticket_button_color = 10;
  optional string instagram_card_start_color = 11;
  optional string instagram_card_end_color = 12;
  optional string instagram_card_title_url = 13;
  optional string ticket_step1_url = 14;
  optional string ticket_step2_url = 15;
}

message JoinCommunityRequest {
  string community_id = 1;
  bool skip_blocking_member_check = 2;
}

message JoinCommunityResponse {
  Community community = 1;
}

message LeaveCommunityRequest {
  string community_id = 1;
}

message LeaveCommunityResponse {
  repeated string left_child_community_ids = 1;
}

message LinkCard {
  string card_id = 1;
  string url = 2;
  LinkCardStatus status = 3;
  ContentType content_type = 4;
  string title = 5;
  string description = 6;
  string image_url = 7;
  string favicon_url = 8;
}

message MakeChatRoomInvisibleRequest {
  string room_id = 1;
}

message MakeChatRoomInvisibleResponse {
  ChatRoom room = 1;
}

message MakeChatRoomMuteRequest {
  string room_id = 1;
}

message MakeChatRoomMuteResponse {
  ChatRoom room = 1;
}

message MakeChatRoomUnmuteRequest {
  string room_id = 1;
}

message MakeChatRoomUnmuteResponse {
  ChatRoom room = 1;
}

message MakeCommunityPostNotificationDisabledRequest {
  string community_id = 1;
}

message MakeCommunityPostNotificationDisabledResponse {
  Community community = 1;
}

message MakeCommunityPostNotificationEnabledRequest {
  string community_id = 1;
}

message MakeCommunityPostNotificationEnabledResponse {
  Community community = 1;
}

message MakeCommunitySubscriptionDisabledRequest {
  string community_id = 1;
}

message MakeCommunitySubscriptionDisabledResponse {
  Community community = 1;
}

message MakeCommunitySubscriptionEnabledRequest {
  string community_id = 1;
}

message MakeCommunitySubscriptionEnabledResponse {
  Community community = 1;
}

message MakePersonaBlockRequest {
  string persona_id = 1;
}

message MakePersonaBlockResponse {
  Profile profile = 1;
}

message MakePersonaMuteRequest {
  string persona_id = 1;
}

message MakePersonaMuteResponse {
  Persona persona = 1;
}

message MakePersonaPostNotificationDisabledRequest {
  string persona_id = 1;
}

message MakePersonaPostNotificationDisabledResponse {
  Profile profile = 1;
}

message MakePersonaPostNotificationEnabledRequest {
  string persona_id = 1;
}

message MakePersonaPostNotificationEnabledResponse {
  Profile profile = 1;
}

message MakePersonaUnblockRequest {
  string persona_id = 1;
}

message MakePersonaUnblockResponse {
  Profile profile = 1;
}

message MakePersonaUnmuteRequest {
  string persona_id = 1;
}

message MakePersonaUnmuteResponse {
  Persona persona = 1;
}

message ManagedPersona {
  Profile profile = 1;
  string access_token = 2;
  bool is_shared_persona = 3;
  InAppEventStatusAll event_status_all = 4;
}

message MarkAnnouncementAsReadRequest {
  string announcement_id = 1;
}

message MarkAnnouncementAsReadResponse {
}

message MarkNotificationAsReadRequest {
  string time_series_id = 1;
}

message MarkNotificationAsReadResponse {
}

message MarkNotificationsAsReadBeforeTimeRequest {
  string latest_time_series_id = 1;
}

message MarkNotificationsAsReadResponse {
}

message Media {
  string media_id = 1;
  Category category = 3;
  MediaStatus status = 4;
  optional Avatar avatar = 5;
  optional PostImage post_image = 6;
  optional PostVideo post_video = 7;
  optional MediaStamp stamp = 8;
  optional string description = 9;
}

message MediaStamp {
  string url = 1;
  string mime_type = 2;
  uint32 height = 3;
  uint32 width = 4;
}

message NewCommunityResponse {
  repeated Community communities = 1;
  repeated RecommendedCommunity recommended_communities = 2;
}

message NewTokenResponse {
  string refresh_token = 1;
  Timestamp expires_at = 2;
  repeated ManagedPersona managed_personas = 3;
  bool is_account_frozen = 4;
  repeated PersonaWarning warnings = 5;
}

message Notification {
  NotificationActivityType activity_type = 1;
  Timestamp created_at = 2;
  string time_series_id = 3;
  string issuer_id = 4;
  optional string post_id = 5;
  optional string community_request_id = 6;
  optional string community_id = 7;
  optional NotificationReaction reaction = 8;
  optional string following_request_id = 9;
}

message NotificationReaction {
  string stamp_id = 1;
  string image_url = 2;
}

message OfficialStamp {
  string stamp_id = 1;
  uint32 index = 2;
  repeated string search_tags = 3;
  string url = 4;
}

message OfficialStampSet {
  string name = 1;
  string sprite_url = 2;
  repeated OfficialStamp stamps = 3;
  string stamp_set_id = 4;
  optional Timestamp start_at = 5;
  optional Timestamp end_at = 6;
  StampSetType stamp_set_type = 7;
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

message PersonaConnectivity {
  bool following = 1;
  uint64 count_of_following_among_my_followings = 2;
  repeated Persona following_personas_among_my_followings = 3;
  bool followed = 4;
  FollowingStatus following_status = 5;
}

message PersonaName {
  string persona_id = 1;
  string name = 2;
}

message PersonaObtainedStampSet {
  string name = 1;
  string sprite_url = 2;
  repeated OfficialStamp stamps = 3;
  repeated OfficialStamp obtained_stamps = 4;
  string stamp_set_id = 5;
  optional Timestamp start_at = 6;
  optional Timestamp end_at = 7;
}

message PersonasResult {
  repeated PersonaWithConnectivity persona_with_connectivities = 1;
  string next_cursor = 2;
}

message PersonaWarning {
  string warning_id = 1;
  string persona_id = 2;
  string title_jp = 3;
  string body_jp = 4;
  string title_en = 5;
  string body_en = 6;
}

message PersonaWithConnectivity {
  Persona persona = 1;
  PersonaConnectivity connectivity = 2;
}

message PickupCommunityResponse {
  repeated RecommendedCommunity recommended_communities = 1;
}

message PinCommunityPostRequest {
  string community_id = 1;
  string post_id = 2;
}

message PinCommunityPostResponse {
  Community community = 1;
}

message PinProfilePostRequest {
  string post_id = 1;
}

message PinProfilePostResponse {
  Profile profile = 1;
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

message PostsResult {
  repeated Post posts = 1;
  string next_cursor = 2;
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

message PrepareMediaUploadingRequest {
  string mime_type = 1;
  uint64 data_size = 2;
  Category category = 3;
  optional string community_id = 4;
  optional string description = 5;
}

message PrepareMediaUploadingResponse {
  string media_id = 1;
  Request request = 2;
}

message Profile {
  Persona persona = 1;
  uint64 following_count = 2;
  uint64 followed_count = 3;
  string text = 4;
  string profile_image_url = 5;
  string link = 6;
  PersonaConnectivity persona_connectivity = 7;
  bool is_muted = 8;
  repeated ProfilePostPin post_pins = 9;
  bool is_blocking = 10;
  bool is_blocked = 11;
  bool is_post_notification_target = 12;
  repeated ProfileSocialMedia social_media = 13;
}

message ProfilePostPin {
  string post_pin_id = 1;
  string post_id = 2;
}

message ProfileSocialMedia {
  ProfileSocialMediaType social_media_type = 1;
  string username = 2;
  bool verified = 3;
}

message ReadPersonaWarningRequest {
  string warning_id = 1;
}

message ReadPersonaWarningResponse {
}

message RecommendedCommunity {
  Community community = 1;
  bool is_new = 2;
  PickupCommunityCategory pickup_community_category = 3;
}

message RecommendedPersona {
  PersonaWithConnectivity persona = 1;
  bool is_new = 2;
}

message RefreshTokenRequest {
  string refresh_token = 1;
}

message RegisterFCMTokenRequest {
  string fcm_token = 1;
  PlatformType platform = 2;
}

message RegisterFCMTokenResponse {
}

message RejectFollowingRequestRequest {
  string request_id = 1;
}

message RejectFollowingRequestResponse {
}

message RemoveCommunityBookmarkRequest {
  string community_id = 1;
}

message RemoveCommunityBookmarkResponse {
  Community community = 1;
}

message RemoveCommunityPostPinRequest {
  string community_post_pin_id = 1;
}

message RemoveCommunityPostPinResponse {
  Community community = 1;
}

message RemoveProfilePostPinRequest {
  string post_pin_id = 1;
}

message RemoveProfilePostPinResponse {
  Profile profile = 1;
}

message RemoveStampFromOwnPostRequest {
  string post_id = 1;
  string persona_id = 2;
  string stamp_id = 3;
}

message RemoveStampFromOwnPostResponse {
  Post post = 1;
}

message RemoveStampFromPostRequest {
  string post_id = 1;
  string stamp_id = 2;
}

message RemoveStampFromPostResponse {
  Post post = 1;
}

message RenameLog {
  string old_name = 1;
  string new_name = 2;
  Timestamp created_at = 3;
}

message ReportChatRoomMessageRequest {
  string room_id = 1;
  string message_id = 2;
  ReportReasonType reason_type = 3;
  string reason_content = 4;
}

message ReportChatRoomMessageResponse {
  ChatRoomMessage message = 1;
}

message ReportCommunityRequest {
  string community_id = 1;
  ReportReasonType reason_type = 2;
  string reason_content = 3;
}

message ReportCommunityResponse {
  Community community = 1;
}

message ReportPersonaRequest {
  string persona_id = 1;
  ReportReasonType reason_type = 2;
  string reason_content = 3;
  optional ReportRightInfringementTarget right_infringement_target = 4;
}

message ReportPersonaResponse {
  Persona persona = 1;
}

message ReportPostRequest {
  string post_id = 1;
  ReportReasonType reason_type = 2;
  string reason_content = 3;
  optional ReportRightInfringementTarget right_infringement_target = 4;
}

message ReportPostResponse {
  Post post = 1;
}

message Request {
  string url = 1;
  string method = 2;
  repeated Header headers = 3;
}

message RequestJoinCommunityRequest {
  string community_id = 1;
  bool skip_blocking_member_check = 2;
}

message RequestJoinCommunityResponse {
  Community community = 1;
}

message ResendEmailPassCodeRequest {
  string verification_id = 1;
}

message ResendEmailPassCodeResponse {
}

message ResendSMSPassCodeRequest {
  string verification_id = 1;
}

message ResendSMSPassCodeResponse {
}

message RestrictCommunityPostRequest {
  string post_id = 1;
}

message RestrictCommunityPostResponse {
  Post post = 1;
}

message RookiePersonaResponse {
  repeated PersonaWithConnectivity personas = 1;
  repeated RecommendedPersona recommended_personas = 2;
}

message SearchChatRoomsRequest {
  bool is_group = 1;
  repeated string member_ids = 2;
}

message SearchChatRoomsResponse {
  repeated ChatRoom rooms = 1;
}

message SearchEventOption {
  optional Timestamp start_time_after = 1;
  optional Timestamp end_time_after = 2;
}

message SearchOperation {
  SearchType type = 1;
  uint32 operation_id = 2;
  optional string until_cursor = 3;
  optional string since_cursor = 4;
  optional uint32 limit = 5;
  optional string end_cursor = 6;
  optional bool media_attached_only = 7;
  optional Timestamp start_time_after = 8;
  optional Timestamp end_time_after = 9;
  optional SearchPersonaOption persona_option = 10;
  optional SearchPostOption post_option = 11;
  optional SearchEventOption event_option = 12;
}

message SearchPersonaOption {
  bool bot_only = 1;
}

message SearchPostOption {
  bool media_attached_only = 1;
  optional string persona_id = 2;
}

message SearchRequest {
  string query = 1;
  repeated SearchOperation operations = 2;
}

message SearchResponse {
  repeated SearchResult results = 1;
}

message SearchResult {
  uint32 operation_id = 1;
  optional PersonasResult personas_result = 2;
  optional PostsResult posts_result = 3;
  optional CommunitiesResult communities_result = 4;
}

message SearchTypeaheadItem {
  ItemType item_type = 1;
  optional Persona persona = 2;
}

message SearchTypeaheadRequest {
  string query = 1;
}

message SearchTypeaheadResponse {
  repeated SearchTypeaheadItem items = 1;
}

message SendCommunityInvitationRequest {
  string community_id = 1;
  repeated string persona_ids = 2;
}

message SendCommunityInvitationResponse {
}

message SendDirectMessageRequest {
  string receiver_id = 1;
  optional string text = 2;
  repeated string media_ids = 3;
  optional string post_id = 4;
}

message SendDirectMessageResponse {
  ChatRoomMessage message = 1;
}

message SendFollowingRequestRequest {
  string persona_id = 1;
}

message SendFollowingRequestResponse {
  Persona persona = 1;
}

message SendGroupMessageRequest {
  repeated string receiver_ids = 1;
  optional string text = 2;
  repeated string media_ids = 3;
}

message SendGroupMessageResponse {
  ChatRoomMessage message = 1;
}

message SendMessageToRoomRequest {
  string room_id = 1;
  optional string text = 2;
  repeated string media_ids = 3;
}

message SendMessageToRoomResponse {
  ChatRoomMessage message = 1;
}

message SessionManagedPersona {
  Profile profile = 1;
  bool is_shared_persona = 2;
  InAppEventStatusAll event_status_all = 3;
}

message SessionResponse {
  repeated SessionManagedPersona session_managed_personas = 1;
  optional string active_persona_id = 2;
  bool is_account_frozen = 3;
}

message SetCommunityTagsRequest {
  string community_id = 1;
  repeated string tags = 2;
}

message SetCommunityTagsResponse {
  Community community = 1;
}

message SigninRequest {
  TokenProvider token_provider = 1;
  string id_token = 2;
}

message SignOutRequest {
  string refresh_token = 1;
  optional string fcm_token = 2;
}

message SignOutResponse {
}

message SignupRequest {
  TokenProvider token_provider = 1;
  string id_token = 2;
  optional string invitation_code = 3;
  optional InvitationKind invitation_kind = 4;
}

message Stamp {
  string stamp_id = 1;
  string url = 2;
}

message StampReaction {
  string stamp_id = 1;
  Persona persona = 2;
}

message StartEmailAuthenticationRequest {
  string email = 1;
  AuthenticationLanguageCode language_code = 2;
  AuthenticationType type = 3;
  AuthenticationPlatform platform = 4;
  optional string invitation_code = 5;
  optional InvitationKind invitation_kind = 6;
}

message StartEmailAuthenticationResponse {
  string verification_id = 1;
}

message StartSMSAuthenticationRequest {
  string country_code = 1;
  string phone_number = 2;
  AuthenticationLanguageCode language_code = 3;
  AuthenticationType type = 4;
  AuthenticationPlatform platform = 5;
  optional string invitation_code = 6;
  optional InvitationKind invitation_kind = 7;
}

message StartSMSAuthenticationResponse {
  string verification_id = 1;
}

message StatusIcon {
  StatusIconType status_icon_type = 3;
  string status_icon = 4;
}

message SwitchPersonaRequest {
  string persona_id = 1;
}

message SwitchPersonaResponse {
}

message Timestamp {
  int64 seconds = 1;
  int32 nanos = 2;
}

message UpdateChatRoomTitleRequest {
  string room_id = 1;
  string title = 2;
}

message UpdateChatRoomTitleResponse {
  ChatRoom room = 1;
}

message UpdateCommunityLastAccessTimeRequest {
  string community_id = 1;
}

message UpdateCommunityLastAccessTimeResponse {
}

message UpdateCommunityRequest {
  string community_id = 1;
  optional string name = 2;
  optional string purpose = 3;
  optional string cover_image_media_id = 4;
  optional CommunityAccessLevel access_level = 5;
}

message UpdateCommunityResponse {
  Community community = 1;
}

message UpdateDisplayNameRequest {
  string display_name = 1;
}

message UpdateDisplayNameResponse {
  Persona persona = 1;
}

message UpdateEventCommunityRequest {
  string community_id = 1;
  optional string name = 2;
  optional string purpose = 3;
  optional string cover_image_media_id = 4;
  optional CommunityAccessLevel access_level = 5;
  optional Timestamp start_at = 6;
  optional Timestamp end_at = 7;
  optional CommunityEventLocationType location_type = 8;
}

message UpdateEventCommunityResponse {
  Community community = 1;
}

message UpdateInAppEventDoneRequest {
  PersonaInAppEventType event_type = 1;
}

message UpdateInAppEventDoneResponse {
}

message UpdateNameRequest {
  string name = 1;
}

message UpdateNameResponse {
  Profile profile = 1;
}

message UpdateProfileRequest {
  optional string display_name = 1;
  optional string profile_text = 2;
  optional StatusIcon status_icon = 3;
  optional string status_text = 4;
  optional string link = 5;
}

message UpdateProfileResponse {
  Profile profile = 1;
}

message UpdateProfileSocialMediaRequest {
  ProfileSocialMediaType social_media_type = 1;
  string username = 2;
  bool force_verified_update = 3;
}

message UpdateProfileSocialMediaResponse {
  Profile profile = 1;
}

message UpdateRemotePushSettingsRequest {
  optional bool like = 1;
  optional bool reply = 2;
  optional bool repost = 3;
  optional bool quote = 4;
  optional bool mention = 5;
  optional bool follow = 6;
  optional bool chat = 7;
  optional bool community_approval = 8;
  optional bool event = 9;
  optional bool community_invitation = 10;
  optional bool recommended_post = 11;
  optional bool reaction = 12;
  optional bool community_grant_admin_privileges = 13;
  optional bool community_join = 14;
  optional bool following_request = 15;
  optional bool persona_post_like = 16;
  optional bool persona_post_reaction = 17;
  optional bool persona_post_reply = 18;
  optional bool persona_post_repost = 19;
  optional bool persona_post_quote = 20;
  optional bool persona_post_mention = 21;
  optional bool community_post_like = 22;
  optional bool community_post_reaction = 23;
  optional bool community_post_reply = 24;
  optional bool community_post_repost = 25;
  optional bool community_post_quote = 26;
  optional bool community_post_mention = 27;
  optional bool service_announcement = 28;
}

message UpdateRemotePushSettingsResponse {
}

message UpdateTimelineSettingRequest {
  optional bool personal_post_reply_subscribing_disabled = 1;
  optional bool community_post_reply_subscribing_disabled = 2;
  optional bool topic_post_reply_subscribing_disabled = 3;
  optional bool event_post_reply_subscribing_disabled = 4;
}

message UpdateTimelineSettingResponse {
}

message UpdateTopicCommunityRequest {
  string community_id = 1;
  optional string name = 2;
  optional string purpose = 3;
  optional string cover_image_media_id = 4;
  optional CommunityAccessLevel access_level = 5;
  optional bool searchable = 6;
}

message UpdateTopicCommunityResponse {
  Community community = 1;
}

message VerifiedPersonaResponse {
  repeated RecommendedPersona recommended_personas = 1;
}

message VerifyEmailAuthenticationRequest {
  string verification_id = 1;
  int32 pass_code = 2;
}

message VerifyEmailSessionAuthenticationRequest {
  string verification_id = 1;
  int32 pass_code = 2;
}

message VerifyEmailSessionAuthenticationResponse {
  SessionResponse session_response = 1;
}

message VerifySMSAuthenticationRequest {
  string verification_id = 1;
  int32 pass_code = 2;
}



service MercuryService {
  rpc AcceptChatRoom(AcceptChatRoomRequest) returns (AcceptChatRoomResponse);
  rpc AddMembersToChatRoom(AddMembersToChatRoomRequest) returns (AddMembersToChatRoomResponse);
  rpc AddStampToPost(AddStampToPostRequest) returns (AddStampToPostResponse);
  rpc ApplyForVerification(ApplyForVerificationRequest) returns (ApplyForVerificationResponse);
  rpc ApproveFollowingRequest(ApproveFollowingRequestRequest) returns (ApproveFollowingRequestResponse);
  rpc ApproveJoinCommunity(ApproveJoinCommunityRequest) returns (ApproveJoinCommunityResponse);
  rpc ArchiveCommunity(ArchiveCommunityRequest) returns (ArchiveCommunityResponse);
  rpc BookmarkCommunity(BookmarkCommunityRequest) returns (BookmarkCommunityResponse);
  rpc CancelFollowingRequest(CancelFollowingRequestRequest) returns (CancelFollowingRequestResponse);
  rpc CancelJoinCommunityRequest(CancelJoinCommunityRequestRequest) returns (CancelJoinCommunityRequestResponse);
  rpc ChangeCommunityAdmins(ChangeCommunityAdminsRequest) returns (ChangeCommunityAdminsResponse);
  rpc ChangeCommunityPostSubscriptionType(ChangeCommunityPostSubscriptionTypeRequest) returns (ChangeCommunityPostSubscriptionTypeResponse);
  rpc ChangeMyPersonaVisibility(ChangeMyPersonaVisibilityRequest) returns (ChangeMyPersonaVisibilityResponse);
  rpc CheckPendingPost(CheckPendingPostRequest) returns (CheckPendingPostResponse);
  rpc CloseEventCommunity(CloseEventCommunityRequest) returns (CloseEventCommunityResponse);
  rpc CreateBookmark(CreateBookmarkRequest) returns (CreateBookmarkResponse);
  rpc CreateChatRoom(CreateChatRoomRequest) returns (CreateChatRoomResponse);
  rpc CreateCommunity(CreateCommunityRequest) returns (CreateCommunityResponse);
  rpc CreateEventCommunity(CreateEventCommunityRequest) returns (CreateEventCommunityResponse);
  rpc CreateFollowing(CreateFollowingRequest) returns (CreateFollowingResponse);
  rpc CreateLike(CreateLikeRequest) returns (CreateLikeResponse);
  rpc CreatePersona(CreatePersonaRequest) returns (NewTokenResponse);
  rpc CreatePersonaFromSession(CreatePersonaFromSessionRequest) returns (SessionResponse);
  rpc CreatePost(CreatePostRequest) returns (CreatePostResponse);
  rpc CreatePostAndEventCommunity(CreatePostAndEventCommunityRequest) returns (CreatePostAndEventCommunityResponse);
  rpc CreateTopicCommunity(CreateTopicCommunityRequest) returns (CreateTopicCommunityResponse);
  rpc DeleteAccount(DeleteAccountRequest) returns (DeleteAccountResponse);
  rpc DeleteBookmark(DeleteBookmarkRequest) returns (DeleteBookmarkResponse);
  rpc DeleteCommunityStamp(DeleteCommunityStampRequest) returns (DeleteCommunityStampResponse);
  rpc DeleteExcludedCommunityMember(DeleteExcludedCommunityMemberRequest) returns (DeleteExcludedCommunityMemberResponse);
  rpc DeleteExcludedCommunityMembers(DeleteExcludedCommunityMembersRequest) returns (DeleteExcludedCommunityMembersResponse);
  rpc DeleteFCMToken(DeleteFCMTokenRequest) returns (DeleteFCMTokenResponse);
  rpc DeleteFollowing(DeleteFollowingRequest) returns (DeleteFollowingResponse);
  rpc DeleteLike(DeleteLikeRequest) returns (DeleteLikeResponse);
  rpc DeletePost(DeletePostRequest) returns (DeletePostResponse);
  rpc DeleteRepost(DeleteRepostRequest) returns (DeleteRepostResponse);
  rpc DeleteSession(DeleteSessionRequest) returns (DeleteSessionResponse);
  rpc DenyJoinCommunity(DenyJoinCommunityRequest) returns (DenyJoinCommunityResponse);
  rpc ExcludeCommunityMember(ExcludeCommunityMemberRequest) returns (ExcludeCommunityMemberResponse);
  rpc ExcludeCommunityMembers(ExcludeCommunityMembersRequest) returns (ExcludeCommunityMembersResponse);
  rpc ExitChatRoom(ExitChatRoomRequest) returns (ExitChatRoomResponse);
  rpc GetAnnouncements(GetAnnouncementsRequest) returns (GetAnnouncementsResponse);
  rpc GetBadgeCount(GetBadgeCountRequest) returns (GetBadgeCountResponse);
  rpc GetBlockingMembersInCommunity(GetBlockingMembersInCommunityRequest) returns (GetBlockingMembersInCommunityResponse);
  rpc GetBlockPersonas(GetBlockPersonasRequest) returns (GetBlockPersonasResponse);
  rpc GetChatRoom(GetChatRoomRequest) returns (GetChatRoomResponse);
  rpc GetChatRoomMessages(GetChatRoomMessagesRequest) returns (GetChatRoomMessagesResponse);
  rpc GetChatRooms(GetChatRoomsRequest) returns (GetChatRoomsResponse);
  rpc GetCommunities(GetCommunitiesRequest) returns (GetCommunitiesResponse);
  rpc GetCommunitiesPostNotifications(GetCommunitiesPostNotificationsRequest) returns (GetCommunitiesPostNotificationsResponse);
  rpc GetCommunity(GetCommunityRequest) returns (GetCommunityResponse);
  rpc GetCommunityBookmarks(GetCommunityBookmarksRequest) returns (GetCommunityBookmarksResponse);
  rpc GetCommunityInvitablePersonas(GetCommunityInvitablePersonasRequest) returns (GetCommunityInvitablePersonasResponse);
  rpc GetCommunityInvitation(GetCommunityInvitationRequest) returns (GetCommunityInvitationResponse);
  rpc GetCommunityInvitationCode(GetCommunityInvitationCodeRequest) returns (GetCommunityInvitationCodeResponse);
  rpc GetCommunityJoinRequests(GetCommunityJoinRequestsRequest) returns (GetCommunityJoinRequestsResponse);
  rpc GetCommunityPostPin(GetCommunityPostPinRequest) returns (GetCommunityPostPinResponse);
  rpc GetCommunityStamps(GetCommunityStampsRequest) returns (GetCommunityStampsResponse);
  rpc GetCommunityTimeline(GetCommunityTimelineRequest) returns (GetTimelineResponse);
  rpc GetCompletedOrClosedEventCommunities(GetCompletedOrClosedEventCommunitiesRequest) returns (GetCompletedOrClosedEventCommunitiesResponse);
  rpc GetEventCommunitiesWithinCommunity(GetEventCommunitiesWithinCommunityRequest) returns (GetEventCommunitiesWithinCommunityResponse);
  rpc GetExclusiveCommunityMembers(GetExclusiveCommunityMembersRequest) returns (GetExclusiveCommunityMembersResponse);
  rpc GetFeatureFlags(GetFeatureFlagsRequest) returns (GetFeatureFlagsResponse);
  rpc GetFollowers(GetFollowersRequest) returns (GetFollowersResponse);
  rpc GetFollowingCount(GetFollowingCountRequest) returns (GetFollowingCountResponse);
  rpc GetFollowingRequests(GetFollowingRequestsRequest) returns (GetFollowingRequestsResponse);
  rpc GetFollowings(GetFollowingsRequest) returns (GetFollowingsResponse);
  rpc GetFollowingsTimeline(GetFollowingsTimelineRequest) returns (GetTimelineResponse);
  rpc GetGlobalCount(GetGlobalCountRequest) returns (GetGlobalCountResponse);
  rpc GetHashtagTimeline(GetHashtagTimelineRequest) returns (GetTimelineResponse);
  rpc GetInAppEventStatus(GetInAppEventStatusRequest) returns (GetInAppEventStatusResponse);
  rpc GetInAppEventStatusAll(GetInAppEventStatusAllRequest) returns (GetInAppEventStatusAllResponse);
  rpc GetInvitation(GetInvitationRequest) returns (GetInvitationResponse);
  rpc GetInvitationCode(GetInvitationCodeRequest) returns (GetInvitationCodeResponse);
  rpc GetLatestRenameLog(GetLatestRenameLogRequest) returns (GetLatestRenameLogResponse);
  rpc GetLikingPersonas(GetLikingPersonasRequest) returns (GetLikingPersonasResponse);
  rpc GetLimitedTimeCampaign(GetLimitedTimeCampaignRequest) returns (GetLimitedTimeCampaignResponse);
  rpc GetMedia(GetMediaRequest) returns (GetMediaResponse);
  rpc GetMuteChatRooms(GetMuteChatRoomsRequest) returns (GetMuteChatRoomsResponse);
  rpc GetMutePersonas(GetMutePersonasRequest) returns (GetMutePersonasResponse);
  rpc GetNotifications(GetNotificationsRequest) returns (GetNotificationsResponse);
  rpc GetOngoingEventCommunities(GetOngoingEventCommunitiesRequest) returns (GetOngoingEventCommunitiesResponse);
  rpc GetOngoingOrUpcomingEventCommunities(GetOngoingOrUpcomingEventCommunitiesRequest) returns (GetOngoingOrUpcomingEventCommunitiesResponse);
  rpc GetParticipatingCommunities(GetParticipatingCommunitiesRequest) returns (GetParticipatingCommunitiesResponse);
  rpc GetParticipatingCommunityMembers(GetParticipatingCommunityMembersRequest) returns (GetParticipatingCommunityMembersResponse);
  rpc GetPastOrClosedEventCommunities(GetPastOrClosedEventCommunitiesRequest) returns (GetPastOrClosedEventCommunitiesResponse);
  rpc GetPendingFollowingRequests(GetPendingFollowingRequestsRequest) returns (GetPendingFollowingRequestsResponse);
  rpc GetPendingVerificationSocialMedia(GetPendingVerificationSocialMediaRequest) returns (GetPendingVerificationSocialMediaResponse);
  rpc GetPersonaByName(GetPersonaByNameRequest) returns (GetPersonaResponse);
  rpc GetPersonalCommunityPosts(GetPersonalCommunityPostsRequest) returns (GetTimelineResponse);
  rpc GetPersonalInformation(GetPersonalInformationRequest) returns (GetPersonalInformationResponse);
  rpc GetPersonalTimeline(GetPersonalTimelineRequest) returns (GetTimelineResponse);
  rpc GetPersonas(GetPersonasRequest) returns (GetPersonasResponse);
  rpc GetPersonasPostNotifications(GetPersonasPostNotificationsRequest) returns (GetPersonasPostNotificationsResponse);
  rpc GetPost(GetPostRequest) returns (GetPostResponse);
  rpc GetPostableCommunities(GetPostableCommunitiesRequest) returns (GetPostableCommunitiesResponse);
  rpc GetPosts(GetPostsRequest) returns (GetPostsResponse);
  rpc GetPostStampReactions(GetPostStampReactionsRequest) returns (GetPostStampReactionsResponse);
  rpc GetProfile(GetProfileRequest) returns (GetProfileResponse);
  rpc GetProfileByName(GetProfileByNameRequest) returns (GetProfileResponse);
  rpc GetProfilePostPin(GetProfilePostPinRequest) returns (GetProfilePostPinResponse);
  rpc GetQuotePosts(GetQuotePostsRequest) returns (GetQuotePostsResponse);
  rpc GetReactionPosts(GetReactionPostsRequest) returns (GetReactionPostsResponse);
  rpc GetRecommendations(GetRecommendationsRequest) returns (GetRecommendationsResponse);
  rpc GetRecommendedCommunities(GetRecommendedCommunitiesRequest) returns (GetRecommendedCommunitiesResponse);
  rpc GetRecommendedTimeline(GetRecommendedTimelineRequest) returns (GetTimelineResponse);
  rpc GetRemoteConfig(GetRemoteConfigRequest) returns (GetRemoteConfigResponse);
  rpc GetRemotePushSettings(GetRemotePushSettingsRequest) returns (GetRemotePushSettingsResponse);
  rpc GetReplies(GetRepliesRequest) returns (GetRepliesResponse);
  rpc GetReplyAncestors(GetReplyAncestorsRequest) returns (GetReplyAncestorsResponse);
  rpc GetRepostingPersonas(GetRepostingPersonasRequest) returns (GetRepostingPersonasResponse);
  rpc GetRequestedChatRooms(GetRequestedChatRoomsRequest) returns (GetRequestedChatRoomsResponse);
  rpc GetSession(GetSessionRequest) returns (SessionResponse);
  rpc GetStamps(GetStampsRequest) returns (GetStampsResponse);
  rpc GetStorageRateLimit(GetStorageRateLimitRequest) returns (GetStorageRateLimitResponse);
  rpc GetSubscribingFeeds(GetSubscribingFeedsRequest) returns (GetSubscribingFeedsResponse);
  rpc GetThreadPosts(GetThreadPostsRequest) returns (GetTimelineResponse);
  rpc GetTimelineSetting(GetTimelineSettingRequest) returns (GetTimelineSettingResponse);
  rpc GetUnreadChatRoomCount(GetUnreadChatRoomCountRequest) returns (GetUnreadChatRoomCountResponse);
  rpc GetUpcomingEventCommunities(GetUpcomingEventCommunitiesRequest) returns (GetUpcomingEventCommunitiesResponse);
  rpc GetWaitingCommunities(GetWaitingCommunitiesRequest) returns (GetWaitingCommunitiesResponse);
  rpc IncrementGlobalCount(IncrementGlobalCountRequest) returns (IncrementGlobalCountResponse);
  rpc JoinCommunity(JoinCommunityRequest) returns (JoinCommunityResponse);
  rpc LeaveCommunity(LeaveCommunityRequest) returns (LeaveCommunityResponse);
  rpc MakeChatRoomInvisible(MakeChatRoomInvisibleRequest) returns (MakeChatRoomInvisibleResponse);
  rpc MakeChatRoomMute(MakeChatRoomMuteRequest) returns (MakeChatRoomMuteResponse);
  rpc MakeChatRoomUnmute(MakeChatRoomUnmuteRequest) returns (MakeChatRoomUnmuteResponse);
  rpc MakeCommunityPostNotificationDisabled(MakeCommunityPostNotificationDisabledRequest) returns (MakeCommunityPostNotificationDisabledResponse);
  rpc MakeCommunityPostNotificationEnabled(MakeCommunityPostNotificationEnabledRequest) returns (MakeCommunityPostNotificationEnabledResponse);
  rpc MakeCommunitySubscriptionDisabled(MakeCommunitySubscriptionDisabledRequest) returns (MakeCommunitySubscriptionDisabledResponse);
  rpc MakeCommunitySubscriptionEnabled(MakeCommunitySubscriptionEnabledRequest) returns (MakeCommunitySubscriptionEnabledResponse);
  rpc MakePersonaBlock(MakePersonaBlockRequest) returns (MakePersonaBlockResponse);
  rpc MakePersonaMute(MakePersonaMuteRequest) returns (MakePersonaMuteResponse);
  rpc MakePersonaPostNotificationDisabled(MakePersonaPostNotificationDisabledRequest) returns (MakePersonaPostNotificationDisabledResponse);
  rpc MakePersonaPostNotificationEnabled(MakePersonaPostNotificationEnabledRequest) returns (MakePersonaPostNotificationEnabledResponse);
  rpc MakePersonaUnblock(MakePersonaUnblockRequest) returns (MakePersonaUnblockResponse);
  rpc MakePersonaUnmute(MakePersonaUnmuteRequest) returns (MakePersonaUnmuteResponse);
  rpc MarkAnnouncementAsRead(MarkAnnouncementAsReadRequest) returns (MarkAnnouncementAsReadResponse);
  rpc MarkNotificationAsRead(MarkNotificationAsReadRequest) returns (MarkNotificationAsReadResponse);
  rpc MarkNotificationsAsReadBeforeTime(MarkNotificationsAsReadBeforeTimeRequest) returns (MarkNotificationsAsReadResponse);
  rpc PinCommunityPost(PinCommunityPostRequest) returns (PinCommunityPostResponse);
  rpc PinProfilePost(PinProfilePostRequest) returns (PinProfilePostResponse);
  rpc PrepareMediaUploading(PrepareMediaUploadingRequest) returns (PrepareMediaUploadingResponse);
  rpc ReadPersonaWarning(ReadPersonaWarningRequest) returns (ReadPersonaWarningResponse);
  rpc RefreshToken(RefreshTokenRequest) returns (NewTokenResponse);
  rpc RegisterFCMToken(RegisterFCMTokenRequest) returns (RegisterFCMTokenResponse);
  rpc RejectFollowingRequest(RejectFollowingRequestRequest) returns (RejectFollowingRequestResponse);
  rpc RemoveCommunityBookmark(RemoveCommunityBookmarkRequest) returns (RemoveCommunityBookmarkResponse);
  rpc RemoveCommunityPostPin(RemoveCommunityPostPinRequest) returns (RemoveCommunityPostPinResponse);
  rpc RemoveProfilePostPin(RemoveProfilePostPinRequest) returns (RemoveProfilePostPinResponse);
  rpc RemoveStampFromOwnPost(RemoveStampFromOwnPostRequest) returns (RemoveStampFromOwnPostResponse);
  rpc RemoveStampFromPost(RemoveStampFromPostRequest) returns (RemoveStampFromPostResponse);
  rpc ReportChatRoomMessage(ReportChatRoomMessageRequest) returns (ReportChatRoomMessageResponse);
  rpc ReportCommunity(ReportCommunityRequest) returns (ReportCommunityResponse);
  rpc ReportPersona(ReportPersonaRequest) returns (ReportPersonaResponse);
  rpc ReportPost(ReportPostRequest) returns (ReportPostResponse);
  rpc RequestJoinCommunity(RequestJoinCommunityRequest) returns (RequestJoinCommunityResponse);
  rpc ResendEmailPassCode(ResendEmailPassCodeRequest) returns (ResendEmailPassCodeResponse);
  rpc ResendSMSPassCode(ResendSMSPassCodeRequest) returns (ResendSMSPassCodeResponse);
  rpc RestrictCommunityPost(RestrictCommunityPostRequest) returns (RestrictCommunityPostResponse);
  rpc Search(SearchRequest) returns (SearchResponse);
  rpc SearchChatRooms(SearchChatRoomsRequest) returns (SearchChatRoomsResponse);
  rpc SearchTypeahead(SearchTypeaheadRequest) returns (SearchTypeaheadResponse);
  rpc SendCommunityInvitation(SendCommunityInvitationRequest) returns (SendCommunityInvitationResponse);
  rpc SendDirectMessage(SendDirectMessageRequest) returns (SendDirectMessageResponse);
  rpc SendFollowingRequest(SendFollowingRequestRequest) returns (SendFollowingRequestResponse);
  rpc SendGroupMessage(SendGroupMessageRequest) returns (SendGroupMessageResponse);
  rpc SendMessageToRoom(SendMessageToRoomRequest) returns (SendMessageToRoomResponse);
  rpc SetCommunityTags(SetCommunityTagsRequest) returns (SetCommunityTagsResponse);
  rpc Signin(SigninRequest) returns (NewTokenResponse);
  rpc SignOut(SignOutRequest) returns (SignOutResponse);
  rpc Signup(SignupRequest) returns (NewTokenResponse);
  rpc StartEmailAuthentication(StartEmailAuthenticationRequest) returns (StartEmailAuthenticationResponse);
  rpc StartSMSAuthentication(StartSMSAuthenticationRequest) returns (StartSMSAuthenticationResponse);
  rpc SwitchPersona(SwitchPersonaRequest) returns (SwitchPersonaResponse);
  rpc UpdateChatRoomTitle(UpdateChatRoomTitleRequest) returns (UpdateChatRoomTitleResponse);
  rpc UpdateCommunity(UpdateCommunityRequest) returns (UpdateCommunityResponse);
  rpc UpdateCommunityLastAccessTime(UpdateCommunityLastAccessTimeRequest) returns (UpdateCommunityLastAccessTimeResponse);
  rpc UpdateDisplayName(UpdateDisplayNameRequest) returns (UpdateDisplayNameResponse);
  rpc UpdateEventCommunity(UpdateEventCommunityRequest) returns (UpdateEventCommunityResponse);
  rpc UpdateInAppEventDone(UpdateInAppEventDoneRequest) returns (UpdateInAppEventDoneResponse);
  rpc UpdateName(UpdateNameRequest) returns (UpdateNameResponse);
  rpc UpdateProfile(UpdateProfileRequest) returns (UpdateProfileResponse);
  rpc UpdateProfileSocialMedia(UpdateProfileSocialMediaRequest) returns (UpdateProfileSocialMediaResponse);
  rpc UpdateRemotePushSettings(UpdateRemotePushSettingsRequest) returns (UpdateRemotePushSettingsResponse);
  rpc UpdateTimelineSetting(UpdateTimelineSettingRequest) returns (UpdateTimelineSettingResponse);
  rpc UpdateTopicCommunity(UpdateTopicCommunityRequest) returns (UpdateTopicCommunityResponse);
  rpc VerifyEmailAuthentication(VerifyEmailAuthenticationRequest) returns (NewTokenResponse);
  rpc VerifyEmailSessionAuthentication(VerifyEmailSessionAuthenticationRequest) returns (VerifyEmailSessionAuthenticationResponse);
  rpc VerifySMSAuthentication(VerifySMSAuthenticationRequest) returns (NewTokenResponse);
}
`
