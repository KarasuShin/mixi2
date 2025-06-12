export enum AuthenticationLanguageCode {
  AUTHENTICATION_LANGUAGE_CODE_JP = 0,
  AUTHENTICATION_LANGUAGE_CODE_EN = 1,
}

export enum AuthenticationPlatform {
  AUTHENTICATION_PLATFORM_UNKNOWN = 0,
  AUTHENTICATION_PLATFORM_IOS = 1,
  AUTHENTICATION_PLATFORM_ANDROID = 2,
  AUTHENTICATION_PLATFORM_WEB = 3,
}

export enum AuthenticationType {
  AUTHENTICATION_TYPE_UNKNOWN = 0,
  AUTHENTICATION_TYPE_REGISTER = 1,
  AUTHENTICATION_TYPE_LOGIN = 2,
}

export enum Category {
  CATEGORY_UNKNOWN = 0,
  CATEGORY_AVATAR = 1,
  CATEGORY_POST_IMAGE = 2,
  CATEGORY_POST_VIDEO = 3,
  CATEGORY_COMMUNITY_COVER_IMAGE = 4,
  CATEGORY_COMMUNITY_STAMP = 5,
}

export enum ChatRoomMessageType {
  CHAT_ROOM_MESSAGE_TYPE_MESSAGE = 0,
  CHAT_ROOM_MESSAGE_TYPE_SYSTEM_MESSAGE_INVITE = 1,
  CHAT_ROOM_MESSAGE_TYPE_SYSTEM_MESSAGE_JOIN = 2,
  CHAT_ROOM_MESSAGE_TYPE_SYSTEM_MESSAGE_LEAVE = 3,
  CHAT_ROOM_MESSAGE_TYPE_SYSTEM_MESSAGE_CHANGE_TITLE = 4,
  CHAT_ROOM_MESSAGE_TYPE_SYSTEM_MESSAGE_CHANGE_ICON = 5,
}

export enum ChatRoomStatus {
  CHAT_ROOM_STATUS_UNKNOWN = 0,
  CHAT_ROOM_STATUS_ACCEPTED = 1,
  CHAT_ROOM_STATUS_REQUESTED = 2,
  CHAT_ROOM_STATUS_REQUESTING = 3,
}

export enum CommunityAccessLevel {
  COMMUNITY_ACCESS_LEVEL_PUBLIC = 0,
  COMMUNITY_ACCESS_LEVEL_APPROVAL_REQUIRED = 1,
}

export enum CommunityApproveStatus {
  COMMUNITY_APPROVE_STATUS_REQUEST = 0,
  COMMUNITY_APPROVE_STATUS_APPROVE = 1,
  COMMUNITY_APPROVE_STATUS_REJECT = 2,
  COMMUNITY_APPROVE_STATUS_CANCEL = 3,
}

export enum CommunityEventLocationType {
  COMMUNITY_EVENT_LOCATION_TYPE_UNSPECIFIED = 0,
  COMMUNITY_EVENT_LOCATION_TYPE_ONLINE = 1,
  COMMUNITY_EVENT_LOCATION_TYPE_OFFLINE = 2,
}

export enum CommunityEventStatus {
  COMMUNITY_EVENT_STATUS_OPENED = 0,
  COMMUNITY_EVENT_STATUS_CLOSED = 1,
}

export enum CommunityMemberStatus {
  COMMUNITY_MEMBER_STATUS_PARTICIPATING = 0,
  COMMUNITY_MEMBER_STATUS_WAITING_FOR_APPROVAL = 1,
  COMMUNITY_MEMBER_STATUS_EXCLUDED = 3,
}

export enum CommunityPostConstraint {
  COMMUNITY_POST_CONSTRAINT_MEMBER_ONLY = 0,
  COMMUNITY_POST_CONSTRAINT_ADMIN_ONLY = 1,
}

export enum CommunityPostSubscriptionType {
  COMMUNITY_POST_SUBSCRIPTION_TYPE_ALL = 0,
  COMMUNITY_POST_SUBSCRIPTION_TYPE_AGGREGATION = 1,
  COMMUNITY_POST_SUBSCRIPTION_TYPE_STOP = 2,
}

export enum CommunityType {
  COMMUNITY_TYPE_TOPIC = 0,
  COMMUNITY_TYPE_EVENT = 1,
}

export enum CommunityVisibility {
  COMMUNITY_VISIBILITY_UNSPECIFIED = 0,
  COMMUNITY_VISIBILITY_VISIBLE = 1,
  COMMUNITY_VISIBILITY_INVISIBLE = 2,
}

export enum ContentType {
  CONTENT_TYPE_UNKNOWN = 0,
  CONTENT_TYPE_VIDEO = 1,
  CONTENT_TYPE_MUSIC = 2,
  CONTENT_TYPE_WEBSITE = 3,
  CONTENT_TYPE_ARTICLE = 4,
  CONTENT_TYPE_BOOK = 5,
  CONTENT_TYPE_PROFILE = 6,
}

export enum FeedSourceType {
  FEED_SOURCE_TYPE_UNSPECIFIED = 0,
  FEED_SOURCE_TYPE_FOLLOWING = 1,
  FEED_SOURCE_TYPE_COMMUNITY = 2,
}

export enum FeedType {
  FEED_TYPE_UNSPECIFIED = 0,
  FEED_TYPE_POST = 1,
  FEED_TYPE_COMMUNITY_AGGREGATION_POST = 2,
}

export enum FollowingRequestStatus {
  FOLLOWING_REQUEST_STATUS_REQUESTING = 0,
  FOLLOWING_REQUEST_STATUS_APPROVED = 1,
  FOLLOWING_REQUEST_STATUS_REJECTED = 2,
  FOLLOWING_REQUEST_STATUS_CANCELED = 3,
}

export enum FollowingStatus {
  FOLLOWING_STATUS_NONE = 0,
  FOLLOWING_STATUS_FOLLOWING = 1,
  FOLLOWING_STATUS_REQUESTING = 2,
}

export enum GiftCampaignKey {
  GIFT_CAMPAIGN_KEY_UNSPECIFIED = 0,
  GIFT_CAMPAIGN_KEY_2025_SPRING_INVITATION_STAMP_CAMPAIGN = 1,
}

export enum GlobalCounterKey {
  GLOBAL_COUNTER_KEY_UNSPECIFIED = 0,
  GLOBAL_COUNTER_KEY_2025_WEB_COMMING_SOON = 1,
}

export enum InvitationKind {
  INVITATION_KIND_PERSONA = 0,
  INVITATION_KIND_COMMUNITY = 1,
}

export enum ItemType {
  ITEM_TYPE_PERSONA = 0,
}

export enum LanguageCode {
  LANGUAGE_CODE_UNKNOWN = 0,
  LANGUAGE_CODE_JP = 1,
  LANGUAGE_CODE_EN = 2,
}

export enum LinkCardStatus {
  STATUS_PROCESSING = 0,
  STATUS_RESOLVED = 1,
  STATUS_FAILED = 2,
}

export enum MediaStatus {
  STATUS_UNKNOWN = 0,
  STATUS_WAIT_FOR_UPLOADING = 1,
  STATUS_IN_PROGRESS = 2,
  STATUS_SUCCESS = 3,
  STATUS_FAILURE = 4,
}

export enum NotificationActivityType {
  NOTIFICATION_ACTIVITY_TYPE_UNKNOWN = 0,
  NOTIFICATION_ACTIVITY_TYPE_FOLLOW = 100,
  NOTIFICATION_ACTIVITY_TYPE_FOLLOWING_REQUEST_RECEIVED = 101,
  NOTIFICATION_ACTIVITY_TYPE_FOLLOWING_REQUEST_APPROVED = 102,
  NOTIFICATION_ACTIVITY_TYPE_INVITATION_FOLLOW = 103,
  NOTIFICATION_ACTIVITY_TYPE_LIKE = 200,
  NOTIFICATION_ACTIVITY_TYPE_REPOST = 201,
  NOTIFICATION_ACTIVITY_TYPE_QUOTE = 202,
  NOTIFICATION_ACTIVITY_TYPE_REPLY = 204,
  NOTIFICATION_ACTIVITY_TYPE_MENTION = 205,
  NOTIFICATION_ACTIVITY_TYPE_REACTION = 206,
  NOTIFICATION_ACTIVITY_TYPE_COMMUNITY_JOIN_REQUEST = 300,
  NOTIFICATION_ACTIVITY_TYPE_COMMUNITY_JOIN_ACCEPT = 301,
  NOTIFICATION_ACTIVITY_TYPE_COMMUNITY_INVITATION = 310,
  NOTIFICATION_ACTIVITY_TYPE_COMMUNITY_GRANT_ADMIN_PRIVILEGES = 311,
  NOTIFICATION_ACTIVITY_TYPE_COMMUNITY_JOIN = 312,
  NOTIFICATION_ACTIVITY_TYPE_EVENT_JOIN = 400,
  NOTIFICATION_ACTIVITY_TYPE_EVENT_REMINDER = 401,
}

export enum Operation {
  OPERATION_FOLLOWING_PERSONA = 0,
  OPERATION_COMMUNITY = 1,
  OPERATION_ROOKIE_PERSONA = 2,
  OPERATION_NEW_COMMUNITY = 3,
  OPERATION_PICKUP_COMMUNITY = 4,
  OPERATION_VERIFIED_PERSONA = 5,
}

export enum PersonaInAppEventStatus {
  PERSONA_IN_APP_EVENT_STATUS_UNSPECIFIED = 0,
  PERSONA_IN_APP_EVENT_STATUS_UNKNOWN = 1,
  PERSONA_IN_APP_EVENT_STATUS_ACTIVE = 2,
  PERSONA_IN_APP_EVENT_STATUS_INACTIVE = 3,
  PERSONA_IN_APP_EVENT_STATUS_DONE = 4,
}

export enum PersonaInAppEventType {
  PERSONA_IN_APP_EVENT_TYPE_UNSPECIFIED = 0,
  PERSONA_IN_APP_EVENT_TYPE_VIEW_STORE_REVIEW_POPUP = 1,
  PERSONA_IN_APP_EVENT_TYPE_INVITATION_DIALOG_AFTER_NEW_REGISTRATION = 2,
  PERSONA_IN_APP_EVENT_TYPE_INVITATION_FROM_HOME = 3,
  PERSONA_IN_APP_EVENT_TYPE_VERIFIED_BADGE_AWARDED_POPUP = 4,
}

export enum PersonaType {
  PERSONA_TYPE_UNSPECIFIED = 0,
  PERSONA_TYPE_ACCOUNT = 1,
  PERSONA_TYPE_BOT = 2,
}

export enum PersonaVisibility {
  PERSONA_VISIBILITY_PUBLIC = 0,
  PERSONA_VISIBILITY_APPROVAL_REQUIRED = 1,
}

export enum PickupCommunityCategory {
  PICKUP_COMMUNITY_CATEGORY_UNSPECIFIED = 0,
  PICKUP_COMMUNITY_CATEGORY_SPORT = 1,
  PICKUP_COMMUNITY_CATEGORY_TECHNOLOGY = 2,
  PICKUP_COMMUNITY_CATEGORY_ART_AND_CREATIVE = 3,
  PICKUP_COMMUNITY_CATEGORY_GAME = 4,
  PICKUP_COMMUNITY_CATEGORY_BUSINESS_AND_CAREER = 5,
  PICKUP_COMMUNITY_CATEGORY_ENTERTAINMENT = 6,
  PICKUP_COMMUNITY_CATEGORY_AREA_AND_TRAVEL = 7,
  PICKUP_COMMUNITY_CATEGORY_LIFE = 8,
  PICKUP_COMMUNITY_CATEGORY_FOOD_AND_COOKING = 9,
  PICKUP_COMMUNITY_CATEGORY_FASHION = 10,
  PICKUP_COMMUNITY_CATEGORY_ANIMAL = 11,
  PICKUP_COMMUNITY_CATEGORY_HOBBY = 12,
  PICKUP_COMMUNITY_CATEGORY_PHOTOGRAPH = 13,
  PICKUP_COMMUNITY_CATEGORY_COMICS_AND_ANIMATION = 14,
  PICKUP_COMMUNITY_CATEGORY_MUSIC_AND_CINEMA = 15,
}

export enum PlatformType {
  PLATFORM_TYPE_UNKNOWN = 0,
  PLATFORM_TYPE_IOS = 1,
  PLATFORM_TYPE_ANDROID = 2,
  PLATFORM_TYPE_WEB = 3,
}

export enum PostMaskType {
  POST_MASK_TYPE_NONE = 0,
  POST_MASK_TYPE_SENSITIVE = 1,
  POST_MASK_TYPE_SPOILER = 2,
}

export enum PostPublishingType {
  POST_PUBLISHING_TYPE_UNSPECIFIED = 0,
  POST_PUBLISHING_TYPE_FOLLOW_AND_COMMUNITY = 1,
}

export enum PostReactionType {
  POST_REACTION_TYPE_UNKNOWN = 0,
  POST_REACTION_TYPE_REPLY = 100,
  POST_REACTION_TYPE_REPOST = 101,
  POST_REACTION_TYPE_QUOTE = 102,
  POST_REACTION_TYPE_LIKE = 200,
  POST_REACTION_TYPE_BOOKMARK = 201,
}

export enum PostVisibility {
  POST_VISIBILITY_PUBLIC = 0,
  POST_VISIBILITY_PRIVATE = 1,
  POST_VISIBILITY_SEALED = 2,
}

export enum ProfileSocialMediaType {
  PROFILE_SOCIAL_MEDIA_TYPE_UNSPECIFIED = 0,
  PROFILE_SOCIAL_MEDIA_TYPE_TWITTER = 1,
  PROFILE_SOCIAL_MEDIA_TYPE_INSTAGRAM = 2,
  PROFILE_SOCIAL_MEDIA_TYPE_TIKTOK = 3,
  PROFILE_SOCIAL_MEDIA_TYPE_YOUTUBE = 4,
}

export enum ReportReasonType {
  REPORT_REASON_TYPE_UNSPECIFIED = 0,
  REPORT_REASON_TYPE_SPAM = 1,
  REPORT_REASON_TYPE_DISTURBING_OR_OFFENSIVE_BEHAVIOR = 2,
  REPORT_REASON_TYPE_SEXUAL_HARASSMENT_ENCOUNTER = 3,
  REPORT_REASON_TYPE_COPYRIGHT_INFRINGEMENT = 4,
  REPORT_REASON_TYPE_INVASION_OF_PRIVACY = 5,
  REPORT_REASON_TYPE_OTHER = 6,
  REPORT_REASON_TYPE_RIGHT_INFRINGEMENT = 7,
}

export enum ReportRightInfringementTarget {
  REPORT_RIGHT_INFRINGEMENT_TARGET_UNSPECIFIED = 0,
  REPORT_RIGHT_INFRINGEMENT_TARGET_SELF = 1,
  REPORT_RIGHT_INFRINGEMENT_TARGET_OTHERS = 2,
}

export enum RewardType {
  REWARD_TYPE_UNSPECIFIED = 0,
  REWARD_TYPE_STAMP = 1,
}

export enum SearchType {
  SEARCH_TYPE_PERSONAS = 0,
  SEARCH_TYPE_POSTS = 1,
  SEARCH_TYPE_COMMUNITIES = 2,
  SEARCH_TYPE_TOPIC = 3,
  SEARCH_TYPE_EVENT = 4,
}

export enum StampSetType {
  STAMP_SET_TYPE_UNSPECIFIED = 0,
  STAMP_SET_TYPE_DEFAULT = 1,
  STAMP_SET_TYPE_SECRET = 2,
  STAMP_SET_TYPE_SEASONAL = 3,
  STAMP_SET_TYPE_CAMPAIGN = 4,
}

export enum StatusIconType {
  STATUS_ICON_TYPE_NONE = 0,
  STATUS_ICON_TYPE_EMOJI = 1,
}

export enum TokenProvider {
  TOKEN_PROVIDER_MIXIM = 0,
}

export enum VerificationType {
  VERIFICATION_TYPE_UNVERIFIED = 0,
  VERIFICATION_TYPE_SERVICE = 1,
  VERIFICATION_TYPE_BUSINESS = 2,
  VERIFICATION_TYPE_PUBLIC_FIGURE = 3,
}

export interface AcceptChatRoomRequest {
  roomId: string
}

export interface AcceptChatRoomResponse {
  room: ChatRoom
}

export interface AddMembersToChatRoomRequest {
  roomId: string
  memberIds: string[]
}

export interface AddMembersToChatRoomResponse {
  room: ChatRoom
}

export interface AddStampToPostRequest {
  postId: string
  stampId: string
}

export interface AddStampToPostResponse {
  post: Post
}

export interface Announcement {
  announcementId: string
  caption: string
  expiresAt: Timestamp
  postId?: string
  createdAt: Timestamp
}

export interface ApplyForVerificationRequest {
  socialMediaTypes: ProfileSocialMediaType[]
}

export interface ApplyForVerificationResponse {
}

export interface ApproveFollowingRequestRequest {
  requestId: string
}

export interface ApproveFollowingRequestResponse {
}

export interface ApproveJoinCommunityRequest {
  communityId: string
  personaId: string
}

export interface ApproveJoinCommunityResponse {
  community: Community
}

export interface ArchiveCommunityRequest {
  communityId: string
}

export interface ArchiveCommunityResponse {
  community: Community
}

export interface Avatar {
  iconUrl: string
  iconMimeType: string
  iconHeight: number
  iconWidth: number
  profileImageUrl: string
  profileImageMimeType: string
  profileImageHeight: number
  profileImageWidth: number
  blurhash: string
}

export interface BookmarkCommunityRequest {
  communityId: string
}

export interface BookmarkCommunityResponse {
  community: Community
}

export interface CancelFollowingRequestRequest {
  personaId: string
}

export interface CancelFollowingRequestResponse {
  persona: Persona
}

export interface CancelJoinCommunityRequestRequest {
  communityId: string
}

export interface CancelJoinCommunityRequestResponse {
  community: Community
}

export interface ChangeCommunityAdminsRequest {
  communityId: string
  addedPersonaIds: string[]
  removedPersonaIds: string[]
}

export interface ChangeCommunityAdminsResponse {
  admins: CommunityMember[]
}

export interface ChangeCommunityPostSubscriptionTypeRequest {
  communityId: string
  postSubscriptionType: CommunityPostSubscriptionType
}

export interface ChangeCommunityPostSubscriptionTypeResponse {
  community: Community
}

export interface ChangeMyPersonaVisibilityRequest {
  visibility: PersonaVisibility
}

export interface ChangeMyPersonaVisibilityResponse {
  persona: Persona
}

export interface ChatRoom {
  roomId: string
  isGroup: boolean
  title?: string
  members: ChatRoomMember[]
  createdAt: Timestamp
  message?: ChatRoomMessage
  status: ChatRoomStatus
  isMute: boolean
  isInvisible: boolean
}

export interface ChatRoomMember {
  personaId: string
  readMessageId?: string
}

export interface ChatRoomMessage {
  roomId: string
  messageId: string
  personaId: string
  messageType: ChatRoomMessageType
  messageTargetId?: string
  text?: string
  createdAt: Timestamp
  media: Media[]
  post?: Post
}

export interface CheckPendingPostRequest {
  postId: string
}

export interface CheckPendingPostResponse {
  post: Post
  isPending: boolean
}

export interface CloseEventCommunityRequest {
  eventCommunityId: string
}

export interface CloseEventCommunityResponse {
  community: Community
}

export interface CommunitiesResult {
  communities: Community[]
  nextCursor?: string
}

export interface Community {
  communityId: string
  name: string
  purpose: string
  accessLevel: CommunityAccessLevel
  admins: CommunityMember[]
  rules: CommunityRule[]
  myself?: CommunityMember
  countOfMembers: number
  createdAt: Timestamp
  isArchived: boolean
  coverImage: Media
  members: CommunityMember[]
  type: CommunityType
  parent?: CommunitySummary
  children: CommunitySummary[]
  eventSchedule?: EventSchedule
  postPins: CommunityPostPin[]
  lastPurposeEditor?: Persona
  lastPurposeEditorId?: string
  tags: string[]
  visibility: CommunityVisibility
  creatorId?: string
  creator?: Persona
  postConstraint: CommunityPostConstraint
  isPostNotificationTarget: boolean
  isSubscriptionDisabled: boolean
  isSearchable: boolean
  hasAggregationFeed: boolean
  postSubscriptionType: CommunityPostSubscriptionType
}

export interface CommunityAggregationPost {
  communityId: string
  post: Post
  aggregationCount: number
  hasMore: boolean
  community: CommunitySummary
  untilCursor: string
  endCursor: string
}

export interface CommunityJoinRequest {
  communityId: string
  requestId: string
  timeSeriesId: string
  approverPersonaId: string
  requestorPersonaId: string
  status: CommunityApproveStatus
}

export interface CommunityMember {
  communityId: string
  persona: Persona
  status: CommunityMemberStatus
  isAdmin: boolean
  isCreator: boolean
  createdAt: Timestamp
  personaId: string
}

export interface CommunityPostPin {
  communityPostPinId: string
  postId: string
  operatorPersonaId: string
}

export interface CommunityResponse {
  communities: Community[]
  recommendedCommunities: RecommendedCommunity[]
}

export interface CommunityRule {
  communityId: string
  ruleId: string
  createdAt: Timestamp
  text: string
}

export interface CommunityStamp {
  stampId: string
  url: string
  searchTags: string[]
}

export interface CommunityStampDetail {
  stampId: string
  url: string
  searchTags: string[]
  createdAt: Timestamp
}

export interface CommunityStampSet {
  communityId: string
  stamps: CommunityStamp[]
}

export interface CommunitySummary {
  communityId: string
  name: string
  accessLevel: CommunityAccessLevel
  isArchived: boolean
  myself?: CommunityMember
  coverImage: Media
  type: CommunityType
  eventSchedule?: EventSchedule
  parent?: CommunitySummary
  postConstraint: CommunityPostConstraint
  creatorId?: string
}

export interface CreateBookmarkRequest {
  postId: string
}

export interface CreateBookmarkResponse {
  post: Post
}

export interface CreateChatRoomRequest {
  isGroup: boolean
  memberIds: string[]
}

export interface CreateChatRoomResponse {
  room: ChatRoom
}

export interface CreateCommunityRequest {
  name: string
  purpose: string
  accessLevel: CommunityAccessLevel
}

export interface CreateCommunityResponse {
  community: Community
}

export interface CreateEventCommunityRequest {
  eventName: string
  eventPurpose: string
  accessLevel: CommunityAccessLevel
  startAt: Timestamp
  endAt?: Timestamp
  defaultCoverImageIndex?: number
  communityId?: string
  postConstraint?: CommunityPostConstraint
  locationType?: CommunityEventLocationType
}

export interface CreateEventCommunityResponse {
  community: Community
}

export interface CreateFollowingRequest {
  followingId: string
}

export interface CreateFollowingResponse {
  following: Following
}

export interface CreateLikeRequest {
  postId: string
}

export interface CreateLikeResponse {
  post: Post
}

export interface CreatePersonaFromSessionRequest {
  name: string
  displayName: string
}

export interface CreatePersonaRequest {
  refreshToken: string
  name: string
  displayName: string
}

export interface CreatePostAndEventCommunityRequest {
  postText: string
  communityId?: string
  eventName: string
  eventPurpose: string
  accessLevel: CommunityAccessLevel
  startAt: Timestamp
  endAt?: Timestamp
  defaultCoverImageIndex?: number
  decorations: number[]
  eventLocationType?: CommunityEventLocationType
  publishingType?: PostPublishingType
}

export interface CreatePostAndEventCommunityResponse {
  post: Post
}

export interface CreatePostRequest {
  text: string
  inReplyToPostId?: string
  quotePostId?: string
  mediaIds: string[]
  repostId?: string
  isSensitive: boolean
  communityId?: string
  attachedCommunityId?: string
  decorations: number[]
  maskType?: PostMaskType
  maskCaption?: string
  publishingType?: PostPublishingType
}

export interface CreatePostResponse {
  post: Post
  isPending: boolean
}

export interface CreateTopicCommunityRequest {
  name: string
  purpose: string
  accessLevel: CommunityAccessLevel
  defaultCoverImageIndex?: number
  postConstraint?: CommunityPostConstraint
  searchable?: boolean
}

export interface CreateTopicCommunityResponse {
  community: Community
}

export interface DeleteAccountRequest {
  refreshToken: string
}

export interface DeleteAccountResponse {
}

export interface DeleteBookmarkRequest {
  postId: string
}

export interface DeleteBookmarkResponse {
  post: Post
}

export interface DeleteCommunityStampRequest {
  communityId: string
  stampId: string
}

export interface DeleteCommunityStampResponse {
}

export interface DeleteExcludedCommunityMemberRequest {
  communityId: string
  personaId: string
}

export interface DeleteExcludedCommunityMemberResponse {
}

export interface DeleteExcludedCommunityMembersRequest {
  communityId: string
  personaIds: string[]
}

export interface DeleteExcludedCommunityMembersResponse {
}

export interface DeleteFCMTokenRequest {
  fcmToken: string
}

export interface DeleteFCMTokenResponse {
}

export interface DeleteFollowingRequest {
  followingId: string
}

export interface DeleteFollowingResponse {
  following: Following
}

export interface DeleteLikeRequest {
  postId: string
}

export interface DeleteLikeResponse {
  post: Post
}

export interface DeletePostRequest {
  postId: string
}

export interface DeletePostResponse {
  deleted: boolean
}

export interface DeleteRepostRequest {
  referencePostId: string
}

export interface DeleteRepostResponse {
  deletedPostId: string
  referencePost: Post
}

export interface DeleteSessionRequest {
  fcmToken?: string
}

export interface DeleteSessionResponse {
}

export interface DenyJoinCommunityRequest {
  communityId: string
  personaId: string
}

export interface DenyJoinCommunityResponse {
}

export interface EventSchedule {
  startAt: Timestamp
  endAt?: Timestamp
  status: CommunityEventStatus
  closedAt?: Timestamp
  eventLocationType?: CommunityEventLocationType
}

export interface ExcludeCommunityMemberRequest {
  communityId: string
  personaId: string
}

export interface ExcludeCommunityMemberResponse {
  member: CommunityMember
  community: Community
}

export interface ExcludeCommunityMembersRequest {
  communityId: string
  personaIds: string[]
}

export interface ExcludeCommunityMembersResponse {
  members: CommunityMember[]
  community: Community
}

export interface ExitChatRoomRequest {
  roomId: string
}

export interface ExitChatRoomResponse {
}

export interface Feed {
  feedType: FeedType
  timeSeriesId: string
  post: Post
  communityAggregationPost: CommunityAggregationPost
}

export interface Follower {
  personaId: string
  createdAt: Timestamp
  persona: Persona
  connectivity: PersonaConnectivity
}

export interface Following {
  personaId: string
  createdAt: Timestamp
  persona: Persona
  connectivity: PersonaConnectivity
}

export interface FollowingCount {
  followingCount: number
  followedCount: number
}

export interface FollowingPersonaResponse {
  personas: PersonaWithConnectivity[]
  recommendedPersonas: RecommendedPersona[]
}

export interface FollowingRequest {
  requestId: string
  senderId: string
  receiverId: string
  createdAt: Timestamp
  status: FollowingRequestStatus
}

export interface GetAnnouncementsRequest {
}

export interface GetAnnouncementsResponse {
  announcements: Announcement[]
}

export interface GetBadgeCountRequest {
}

export interface GetBadgeCountResponse {
  accountUnreadCount: number
  personaUnreadNotificationCount: number
  personaUnreadActiveRoomCount: number
  personaUnreadRequestedRoomCount: number
  personaUnreadMutedRoomCount: number
  unreadList: boolean[]
}

export interface GetBlockingMembersInCommunityRequest {
  communityId: string
}

export interface GetBlockingMembersInCommunityResponse {
  blockingMembersCount: number
}

export interface GetBlockPersonasRequest {
}

export interface GetBlockPersonasResponse {
  personaIds: string[]
}

export interface GetChatRoomMessagesRequest {
  roomId: string
  limit?: number
  untilMessageId?: string
  sinceMessageId?: string
}

export interface GetChatRoomMessagesResponse {
  messages: ChatRoomMessage[]
  hasNext: boolean
}

export interface GetChatRoomRequest {
  roomId: string
}

export interface GetChatRoomResponse {
  room: ChatRoom
}

export interface GetChatRoomsRequest {
  limit?: number
  untilMessageId?: string
  sinceMessageId?: string
}

export interface GetChatRoomsResponse {
  rooms: ChatRoom[]
  hasNext: boolean
}

export interface GetCommunitiesPostNotificationsRequest {
  type: CommunityType
}

export interface GetCommunitiesPostNotificationsResponse {
  communityIds: string[]
}

export interface GetCommunitiesRequest {
  communityIds: string[]
}

export interface GetCommunitiesResponse {
  communities: Community[]
}

export interface GetCommunityBookmarksRequest {
  personaId: string
}

export interface GetCommunityBookmarksResponse {
  communities: Community[]
}

export interface GetCommunityInvitablePersonasRequest {
  communityId: string
  cursor?: string
}

export interface GetCommunityInvitablePersonasResponse {
  invitablePersonas: InvitablePersona[]
  nextCursor?: string
}

export interface GetCommunityInvitationCodeRequest {
  communityId: string
}

export interface GetCommunityInvitationCodeResponse {
  invitationCode: string
}

export interface GetCommunityInvitationRequest {
  invitationCode: string
}

export interface GetCommunityInvitationResponse {
  expiresAt: Timestamp
  community: Community
  inviter: Persona
}

export interface GetCommunityJoinRequestsRequest {
  requestIds: string[]
}

export interface GetCommunityJoinRequestsResponse {
  joinRequests: CommunityJoinRequest[]
}

export interface GetCommunityPostPinRequest {
  postId: string
}

export interface GetCommunityPostPinResponse {
  postPin?: CommunityPostPin
}

export interface GetCommunityRequest {
  communityId: string
}

export interface GetCommunityResponse {
  community: Community
}

export interface GetCommunityStampsRequest {
  communityId: string
}

export interface GetCommunityStampsResponse {
  stamps: CommunityStampDetail[]
}

export interface GetCommunityTimelineRequest {
  communityId: string
  untilCursorId?: string
  sinceCursorId?: string
  limit?: number
  endCursorId?: string
  mediaOnly?: boolean
}

export interface GetCompletedOrClosedEventCommunitiesRequest {
  cursor?: string
  limit?: number
  isAdminOnly?: boolean
  personaId?: string
}

export interface GetCompletedOrClosedEventCommunitiesResponse {
  communities: Community[]
  nextCursor?: string
}

export interface GetEventCommunitiesWithinCommunityRequest {
  parentCommunityId: string
  limit?: number
  cursor?: string
}

export interface GetEventCommunitiesWithinCommunityResponse {
  communities: Community[]
  nextCursor?: string
}

export interface GetExclusiveCommunityMembersRequest {
  communityId: string
  status: CommunityMemberStatus
  limit?: number
  cursor?: string
}

export interface GetExclusiveCommunityMembersResponse {
  members: CommunityMember[]
  cursor?: string
}

export interface GetFeatureFlagsRequest {
}

export interface GetFeatureFlagsResponse {
  featureFlags: boolean
}

export interface GetFollowersRequest {
  cursorId?: string
  limit?: number
  personaId?: string
}

export interface GetFollowersResponse {
  followers: Follower[]
  cursorId: string
}

export interface GetFollowingCountRequest {
  personaId: string
}

export interface GetFollowingCountResponse {
  followingCount: FollowingCount
}

export interface GetFollowingRequestsRequest {
  requestIds: string[]
}

export interface GetFollowingRequestsResponse {
  followingRequests: FollowingRequest[]
}

export interface GetFollowingsRequest {
  cursorId?: string
  limit?: number
  personaId?: string
}

export interface GetFollowingsResponse {
  followings: Following[]
  cursorId: string
}

export interface GetFollowingsTimelineRequest {
  untilCursorId?: string
  sinceCursorId?: string
  limit?: number
  endCursorId?: string
}

export interface GetGlobalCountRequest {
  key: GlobalCounterKey
}

export interface GetGlobalCountResponse {
  count: number
}

export interface GetHashtagTimelineRequest {
  hashtag: string
  mediaOnly?: boolean
  untilCursorId?: string
  sinceCursorId?: string
  limit?: number
  endCursorId?: string
}

export interface GetInAppEventStatusAllRequest {
}

export interface GetInAppEventStatusAllResponse {
  eventStatusAll: InAppEventStatusAll
}

export interface GetInAppEventStatusRequest {
  eventType: PersonaInAppEventType
}

export interface GetInAppEventStatusResponse {
  eventStatus: PersonaInAppEventStatus
}

export interface GetInvitationCodeRequest {
  disableCampaign?: boolean
}

export interface GetInvitationCodeResponse {
  invitationCode: string
  campaign?: InvitationCampaign
}

export interface GetInvitationRequest {
  invitationCode: string
}

export interface GetInvitationResponse {
  expiresAt: Timestamp
  profile: Profile
  campaign?: InvitationCampaign
}

export interface GetLatestRenameLogRequest {
}

export interface GetLatestRenameLogResponse {
  renameLog?: RenameLog
  isRenamable: boolean
}

export interface GetLikingPersonasRequest {
  postId: string
  limit?: number
  cursor?: string
}

export interface GetLikingPersonasResponse {
  personas: Persona[]
  nextCursor: string
  hasNext: boolean
}

export interface GetLimitedTimeCampaignRequest {
}

export interface GetLimitedTimeCampaignResponse {
  giftCampaignInfo: GiftCampaignInfo[]
}

export interface GetMediaRequest {
  mediaId: string
}

export interface GetMediaResponse {
  media: Media
}

export interface GetMuteChatRoomsRequest {
  limit?: number
  untilMessageId?: string
  sinceMessageId?: string
}

export interface GetMuteChatRoomsResponse {
  rooms: ChatRoom[]
  hasNext: boolean
}

export interface GetMutePersonasRequest {
}

export interface GetMutePersonasResponse {
  personaIds: string[]
}

export interface GetNotificationsRequest {
  activityType?: NotificationActivityType
  limit?: number
  untilTimeSeriesId?: string
  endTimeSeriesId?: string
  activityTypes: NotificationActivityType[]
}

export interface GetNotificationsResponse {
  notifications: Notification[]
  hasNext: boolean
}

export interface GetOngoingEventCommunitiesRequest {
  cursor?: string
  limit?: number
  isAdminOnly?: boolean
  personaId?: string
}

export interface GetOngoingEventCommunitiesResponse {
  communities: Community[]
  nextCursor?: string
}

export interface GetOngoingOrUpcomingEventCommunitiesRequest {
  cursor?: string
  limit?: number
  isAdminOnly?: boolean
  personaId?: string
}

export interface GetOngoingOrUpcomingEventCommunitiesResponse {
  communities: Community[]
  nextCursor?: string
}

export interface GetParticipatingCommunitiesRequest {
  personaId?: string
  type?: CommunityType
  limit?: number
  cursor?: string
  isAdminOnly?: boolean
  rejectArchived?: boolean
}

export interface GetParticipatingCommunitiesResponse {
  communities: Community[]
  nextCursor?: string
}

export interface GetParticipatingCommunityMembersRequest {
  communityId: string
  limit?: number
  cursor?: string
}

export interface GetParticipatingCommunityMembersResponse {
  members: CommunityMember[]
  cursor?: string
}

export interface GetPastOrClosedEventCommunitiesRequest {
  cursor?: string
  limit?: number
  isAdminOnly?: boolean
}

export interface GetPastOrClosedEventCommunitiesResponse {
  communities: Community[]
  nextCursor?: string
}

export interface GetPendingFollowingRequestsRequest {
  cursor?: string
}

export interface GetPendingFollowingRequestsResponse {
  followingRequests: FollowingRequest[]
  nextCursor?: string
}

export interface GetPendingVerificationSocialMediaRequest {
}

export interface GetPendingVerificationSocialMediaResponse {
  socialMediaTypes: ProfileSocialMediaType[]
}

export interface GetPersonaByNameRequest {
  name: string
}

export interface GetPersonalCommunityPostsRequest {
  untilCursorId?: string
  sinceCursorId?: string
  limit?: number
  endCursorId?: string
}

export interface GetPersonalInformationRequest {
}

export interface GetPersonalInformationResponse {
  email: string
}

export interface GetPersonalTimelineRequest {
  personaId: string
  untilCursorId?: string
  sinceCursorId?: string
  limit?: number
  endCursorId?: string
  mediaOnly?: boolean
}

export interface GetPersonaResponse {
  persona: Persona
}

export interface GetPersonasPostNotificationsRequest {
}

export interface GetPersonasPostNotificationsResponse {
  personaIds: string[]
}

export interface GetPersonasRequest {
  personaIds: string[]
}

export interface GetPersonasResponse {
  personas: Persona[]
}

export interface GetPostableCommunitiesRequest {
  limit?: number
  cursor?: string
}

export interface GetPostableCommunitiesResponse {
  communities: CommunitySummary[]
  nextCursor?: string
}

export interface GetPostRequest {
  postId: string
}

export interface GetPostResponse {
  post: Post
}

export interface GetPostsRequest {
  postIds: string[]
}

export interface GetPostsResponse {
  posts: Post[]
}

export interface GetPostStampReactionsRequest {
  postId: string
  cursor?: string
  limit?: number
}

export interface GetPostStampReactionsResponse {
  stamps: PostStamp[]
  stampReactions: StampReaction[]
  nextCursor?: string
}

export interface GetProfileByNameRequest {
  name: string
}

export interface GetProfilePostPinRequest {
  postId: string
}

export interface GetProfilePostPinResponse {
  postPin?: ProfilePostPin
}

export interface GetProfileRequest {
  personaId: string
}

export interface GetProfileResponse {
  profile: Profile
}

export interface GetQuotePostsRequest {
  postId: string
  limit?: number
  cursor?: string
}

export interface GetQuotePostsResponse {
  posts: Post[]
  nextCursor: string
  hasNext: boolean
}

export interface GetReactionPostsRequest {
  reactionType: PostReactionType
  limit?: number
  cursor?: string
}

export interface GetReactionPostsResponse {
  posts: Post[]
  nextCursor: string
  hasNext: boolean
}

export interface GetRecommendationsRequest {
  operations: Operation[]
  limit?: number
}

export interface GetRecommendationsResponse {
  followingPersona?: FollowingPersonaResponse
  community?: CommunityResponse
  rookiePersona?: RookiePersonaResponse
  newCommunity?: NewCommunityResponse
  pickupCommunity?: PickupCommunityResponse
  verifiedPersona?: VerifiedPersonaResponse
}

export interface GetRecommendedCommunitiesRequest {
  limit?: number
}

export interface GetRecommendedCommunitiesResponse {
  communities: Community[]
}

export interface GetRecommendedTimelineRequest {
  untilCursorId?: string
  sinceCursorId?: string
  limit?: number
  endCursorId?: string
}

export interface GetRemoteConfigRequest {
}

export interface GetRemoteConfigResponse {
  invitationDisabled: boolean
}

export interface GetRemotePushSettingsRequest {
}

export interface GetRemotePushSettingsResponse {
  like: boolean
  reply: boolean
  repost: boolean
  quote: boolean
  mention: boolean
  follow: boolean
  chat: boolean
  communityApproval: boolean
  event: boolean
  communityInvitation: boolean
  recommendedPost: boolean
  reaction: boolean
  communityGrantAdminPrivileges: boolean
  communityJoin: boolean
  followingRequest: boolean
  personaPostLike: boolean
  personaPostReaction: boolean
  personaPostReply: boolean
  personaPostRepost: boolean
  personaPostQuote: boolean
  personaPostMention: boolean
  communityPostLike: boolean
  communityPostReaction: boolean
  communityPostReply: boolean
  communityPostRepost: boolean
  communityPostQuote: boolean
  communityPostMention: boolean
  serviceAnnouncement: boolean
}

export interface GetRepliesRequest {
  postId: string
  limit?: number
  cursor?: string
}

export interface GetRepliesResponse {
  posts: Post[]
  nextCursor: string
  hasNext: boolean
  repliesFromOriginalSender: Post[]
}

export interface GetReplyAncestorsRequest {
  postId: string
  limit?: number
}

export interface GetReplyAncestorsResponse {
  posts: Post[]
  basePost: Post
}

export interface GetRepostingPersonasRequest {
  postId: string
  limit?: number
  cursor?: string
}

export interface GetRepostingPersonasResponse {
  personas: Persona[]
  nextCursor: string
  hasNext: boolean
}

export interface GetRequestedChatRoomsRequest {
  limit?: number
  untilMessageId?: string
  sinceMessageId?: string
}

export interface GetRequestedChatRoomsResponse {
  rooms: ChatRoom[]
  hasNext: boolean
}

export interface GetSessionRequest {
}

export interface GetStampsRequest {
  officialStampLanguage?: LanguageCode
  communityIds: string[]
}

export interface GetStampsResponse {
  officialStampSets: OfficialStampSet[]
  communityStampSets: CommunityStampSet[]
  personaObtainedStampSets: PersonaObtainedStampSet[]
}

export interface GetStorageRateLimitRequest {
}

export interface GetStorageRateLimitResponse {
  usage: number
  limit: number
  startTime: Timestamp
  endTime: Timestamp
}

export interface GetSubscribingFeedsRequest {
  untilCursor?: string
  limit?: number
  sinceCursor?: string
  endCursor?: string
  feedSourceType?: FeedSourceType
}

export interface GetSubscribingFeedsResponse {
  feeds: Feed[]
  nextCursor?: string
}

export interface GetThreadPostsRequest {
  threadPostId: string
  untilCursorId?: string
  sinceCursorId?: string
  limit?: number
  endCursorId?: string
}

export interface GetTimelineResponse {
  posts: Post[]
}

export interface GetTimelineSettingRequest {
}

export interface GetTimelineSettingResponse {
  personalPostReplySubscribingDisabled: boolean
  communityPostReplySubscribingDisabled: boolean
  topicPostReplySubscribingDisabled: boolean
  eventPostReplySubscribingDisabled: boolean
}

export interface GetUnreadChatRoomCountRequest {
}

export interface GetUnreadChatRoomCountResponse {
  activeRoomCount: number
  requestedRoomCount: number
  mutedRoomCount: number
}

export interface GetUpcomingEventCommunitiesRequest {
  cursor?: string
  limit?: number
  isAdminOnly?: boolean
  personaId?: string
}

export interface GetUpcomingEventCommunitiesResponse {
  communities: Community[]
  nextCursor?: string
}

export interface GetWaitingCommunitiesRequest {
  type?: CommunityType
  limit?: number
  cursor?: string
}

export interface GetWaitingCommunitiesResponse {
  communities: Community[]
  nextCursor?: string
}

export interface GiftCampaignInfo {
  campaignId: string
  campaignKey: GiftCampaignKey
  startAt: Timestamp
  endAt: Timestamp
  campaignRewards: GiftCampaignReward[]
}

export interface GiftCampaignReward {
  campaignId: string
  rewardType: RewardType
  rewardItemId: string
  rewardSubItemId?: string
  rewardOrder: number
}

export interface Header {
  key: string
  value: string
}

export interface InAppEventStatusAll {
  statuses: number
}

export interface IncrementGlobalCountRequest {
  key: GlobalCounterKey
}

export interface IncrementGlobalCountResponse {
  count: number
}

export interface InvitablePersona {
  personaId: string
  isSent: boolean
}

export interface InvitationCampaign {
  campaignId: string
  ogpBackgroundUrl?: string
  ogpTitleUrl?: string
  ticketBackgroundTopUrl?: string
  ticketBackgroundMiddleUrl?: string
  ticketBackgroundBottomUrl?: string
  ticketTitleUrl?: string
  backgroundUrl?: string
  backgroundColor?: string
  ticketButtonColor?: string
  instagramCardStartColor?: string
  instagramCardEndColor?: string
  instagramCardTitleUrl?: string
  ticketStep1Url?: string
  ticketStep2Url?: string
}

export interface JoinCommunityRequest {
  communityId: string
  skipBlockingMemberCheck: boolean
}

export interface JoinCommunityResponse {
  community: Community
}

export interface LeaveCommunityRequest {
  communityId: string
}

export interface LeaveCommunityResponse {
  leftChildCommunityIds: string[]
}

export interface LinkCard {
  cardId: string
  url: string
  status: LinkCardStatus
  contentType: ContentType
  title: string
  description: string
  imageUrl: string
  faviconUrl: string
}

export interface MakeChatRoomInvisibleRequest {
  roomId: string
}

export interface MakeChatRoomInvisibleResponse {
  room: ChatRoom
}

export interface MakeChatRoomMuteRequest {
  roomId: string
}

export interface MakeChatRoomMuteResponse {
  room: ChatRoom
}

export interface MakeChatRoomUnmuteRequest {
  roomId: string
}

export interface MakeChatRoomUnmuteResponse {
  room: ChatRoom
}

export interface MakeCommunityPostNotificationDisabledRequest {
  communityId: string
}

export interface MakeCommunityPostNotificationDisabledResponse {
  community: Community
}

export interface MakeCommunityPostNotificationEnabledRequest {
  communityId: string
}

export interface MakeCommunityPostNotificationEnabledResponse {
  community: Community
}

export interface MakeCommunitySubscriptionDisabledRequest {
  communityId: string
}

export interface MakeCommunitySubscriptionDisabledResponse {
  community: Community
}

export interface MakeCommunitySubscriptionEnabledRequest {
  communityId: string
}

export interface MakeCommunitySubscriptionEnabledResponse {
  community: Community
}

export interface MakePersonaBlockRequest {
  personaId: string
}

export interface MakePersonaBlockResponse {
  profile: Profile
}

export interface MakePersonaMuteRequest {
  personaId: string
}

export interface MakePersonaMuteResponse {
  persona: Persona
}

export interface MakePersonaPostNotificationDisabledRequest {
  personaId: string
}

export interface MakePersonaPostNotificationDisabledResponse {
  profile: Profile
}

export interface MakePersonaPostNotificationEnabledRequest {
  personaId: string
}

export interface MakePersonaPostNotificationEnabledResponse {
  profile: Profile
}

export interface MakePersonaUnblockRequest {
  personaId: string
}

export interface MakePersonaUnblockResponse {
  profile: Profile
}

export interface MakePersonaUnmuteRequest {
  personaId: string
}

export interface MakePersonaUnmuteResponse {
  persona: Persona
}

export interface ManagedPersona {
  profile: Profile
  accessToken: string
  isSharedPersona: boolean
  eventStatusAll: InAppEventStatusAll
}

export interface MarkAnnouncementAsReadRequest {
  announcementId: string
}

export interface MarkAnnouncementAsReadResponse {
}

export interface MarkNotificationAsReadRequest {
  timeSeriesId: string
}

export interface MarkNotificationAsReadResponse {
}

export interface MarkNotificationsAsReadBeforeTimeRequest {
  latestTimeSeriesId: string
}

export interface MarkNotificationsAsReadResponse {
}

export interface Media {
  mediaId: string
  category: Category
  status: MediaStatus
  avatar?: Avatar
  postImage?: PostImage
  postVideo?: PostVideo
  stamp?: MediaStamp
  description?: string
}

export interface MediaStamp {
  url: string
  mimeType: string
  height: number
  width: number
}

export interface NewCommunityResponse {
  communities: Community[]
  recommendedCommunities: RecommendedCommunity[]
}

export interface NewTokenResponse {
  refreshToken: string
  expiresAt: Timestamp
  managedPersonas: ManagedPersona[]
  isAccountFrozen: boolean
  warnings: PersonaWarning[]
}

export interface Notification {
  activityType: NotificationActivityType
  createdAt: Timestamp
  timeSeriesId: string
  issuerId: string
  postId?: string
  communityRequestId?: string
  communityId?: string
  reaction?: NotificationReaction
  followingRequestId?: string
}

export interface NotificationReaction {
  stampId: string
  imageUrl: string
}

export interface OfficialStamp {
  stampId: string
  index: number
  searchTags: string[]
  url: string
}

export interface OfficialStampSet {
  name: string
  spriteUrl: string
  stamps: OfficialStamp[]
  stampSetId: string
  startAt?: Timestamp
  endAt?: Timestamp
  stampSetType: StampSetType
}

export interface Persona {
  personaId: string
  name: string
  displayName: string
  avatarUrl: string
  isDeleted: boolean
  following: boolean
  followed: boolean
  profileText: string
  profileImageUrl: string
  statusIcon?: StatusIcon
  statusText?: string
  isPersonaFrozen: boolean
  verificationType: VerificationType
  isBlocking: boolean
  visibility: PersonaVisibility
  followingStatus: FollowingStatus
  createdAt: Timestamp
  personaType: PersonaType
}

export interface PersonaConnectivity {
  following: boolean
  countOfFollowingAmongMyFollowings: number
  followingPersonasAmongMyFollowings: Persona[]
  followed: boolean
  followingStatus: FollowingStatus
}

export interface PersonaName {
  personaId: string
  name: string
}

export interface PersonaObtainedStampSet {
  name: string
  spriteUrl: string
  stamps: OfficialStamp[]
  obtainedStamps: OfficialStamp[]
  stampSetId: string
  startAt?: Timestamp
  endAt?: Timestamp
}

export interface PersonasResult {
  personaWithConnectivities: PersonaWithConnectivity[]
  nextCursor: string
}

export interface PersonaWarning {
  warningId: string
  personaId: string
  titleJp: string
  bodyJp: string
  titleEn: string
  bodyEn: string
}

export interface PersonaWithConnectivity {
  persona: Persona
  connectivity: PersonaConnectivity
}

export interface PickupCommunityResponse {
  recommendedCommunities: RecommendedCommunity[]
}

export interface PinCommunityPostRequest {
  communityId: string
  postId: string
}

export interface PinCommunityPostResponse {
  community: Community
}

export interface PinProfilePostRequest {
  postId: string
}

export interface PinProfilePostResponse {
  profile: Profile
}

export interface Post {
  postId: string
  timeSeriesId: string
  createdAt: Timestamp
  personaId: string
  visibility?: PostVisibility
  isDeleted?: boolean
  medias?: Media[]
  repostCount?: number
  likesCount?: number
  repliesCount?: number
  quotedCount?: number
  text?: string
  inReplyToPostId?: string
  repostId?: string
  quotePostId?: string
  liked?: boolean
  reposted?: boolean
  bookmarked?: boolean
  referencePost?: Post
  quoted?: boolean
  replied?: boolean
  linkCards?: LinkCard[]
  isMuted?: boolean
  isSensitive?: boolean
  community?: CommunitySummary
  attachedCommunity?: Community
  mentions?: PersonaName[]
  decorations?: number[]
  stamps?: PostStamp[]
  readerStampId?: string
  isRestricted?: boolean
  maskType?: PostMaskType
  maskCaption?: string
  publishingType?: PostPublishingType
}

export interface PostImage {
  largeImageUrl: string
  largeImageMimeType: string
  largeImageHeight: number
  largeImageWidth: number
  smallImageUrl: string
  smallImageMimeType: string
  smallImageHeight: number
  smallImageWidth: number
  blurhash: string
}

export interface PostsResult {
  posts: Post[]
  nextCursor: string
}

export interface PostStamp {
  stamp: Stamp
  count: number
}

export interface PostVideo {
  url: string
  mimeType: string
  height: number
  width: number
  previewImageUrl: string
  previewImageMimeType: string
  previewImageHeight: number
  previewImageWidth: number
  blurhash: string
  duration: number
}

export interface PrepareMediaUploadingRequest {
  mimeType: string
  dataSize: number
  category: Category
  communityId?: string
  description?: string
}

export interface PrepareMediaUploadingResponse {
  mediaId: string
  request: Request
}

export interface Profile {
  persona: Persona
  followingCount: number
  followedCount: number
  text: string
  profileImageUrl: string
  link: string
  personaConnectivity: PersonaConnectivity
  isMuted: boolean
  postPins: ProfilePostPin[]
  isBlocking: boolean
  isBlocked: boolean
  isPostNotificationTarget: boolean
  socialMedia: ProfileSocialMedia[]
}

export interface ProfilePostPin {
  postPinId: string
  postId: string
}

export interface ProfileSocialMedia {
  socialMediaType: ProfileSocialMediaType
  username: string
  verified: boolean
}

export interface ReadPersonaWarningRequest {
  warningId: string
}

export interface ReadPersonaWarningResponse {
}

export interface RecommendedCommunity {
  community: Community
  isNew: boolean
  pickupCommunityCategory: PickupCommunityCategory
}

export interface RecommendedPersona {
  persona: PersonaWithConnectivity
  isNew: boolean
}

export interface RefreshTokenRequest {
  refreshToken: string
}

export interface RegisterFCMTokenRequest {
  fcmToken: string
  platform: PlatformType
}

export interface RegisterFCMTokenResponse {
}

export interface RejectFollowingRequestRequest {
  requestId: string
}

export interface RejectFollowingRequestResponse {
}

export interface RemoveCommunityBookmarkRequest {
  communityId: string
}

export interface RemoveCommunityBookmarkResponse {
  community: Community
}

export interface RemoveCommunityPostPinRequest {
  communityPostPinId: string
}

export interface RemoveCommunityPostPinResponse {
  community: Community
}

export interface RemoveProfilePostPinRequest {
  postPinId: string
}

export interface RemoveProfilePostPinResponse {
  profile: Profile
}

export interface RemoveStampFromOwnPostRequest {
  postId: string
  personaId: string
  stampId: string
}

export interface RemoveStampFromOwnPostResponse {
  post: Post
}

export interface RemoveStampFromPostRequest {
  postId: string
  stampId: string
}

export interface RemoveStampFromPostResponse {
  post: Post
}

export interface RenameLog {
  oldName: string
  newName: string
  createdAt: Timestamp
}

export interface ReportChatRoomMessageRequest {
  roomId: string
  messageId: string
  reasonType: ReportReasonType
  reasonContent: string
}

export interface ReportChatRoomMessageResponse {
  message: ChatRoomMessage
}

export interface ReportCommunityRequest {
  communityId: string
  reasonType: ReportReasonType
  reasonContent: string
}

export interface ReportCommunityResponse {
  community: Community
}

export interface ReportPersonaRequest {
  personaId: string
  reasonType: ReportReasonType
  reasonContent: string
  rightInfringementTarget?: ReportRightInfringementTarget
}

export interface ReportPersonaResponse {
  persona: Persona
}

export interface ReportPostRequest {
  postId: string
  reasonType: ReportReasonType
  reasonContent: string
  rightInfringementTarget?: ReportRightInfringementTarget
}

export interface ReportPostResponse {
  post: Post
}

export interface Request {
  url: string
  method: string
  headers: Header[]
}

export interface RequestJoinCommunityRequest {
  communityId: string
  skipBlockingMemberCheck: boolean
}

export interface RequestJoinCommunityResponse {
  community: Community
}

export interface ResendEmailPassCodeRequest {
  verificationId: string
}

export interface ResendEmailPassCodeResponse {
}

export interface ResendSMSPassCodeRequest {
  verificationId: string
}

export interface ResendSMSPassCodeResponse {
}

export interface RestrictCommunityPostRequest {
  postId: string
}

export interface RestrictCommunityPostResponse {
  post: Post
}

export interface RookiePersonaResponse {
  personas: PersonaWithConnectivity[]
  recommendedPersonas: RecommendedPersona[]
}

export interface SearchChatRoomsRequest {
  isGroup: boolean
  memberIds: string[]
}

export interface SearchChatRoomsResponse {
  rooms: ChatRoom[]
}

export interface SearchEventOption {
  startTimeAfter?: Timestamp
  endTimeAfter?: Timestamp
}

export interface SearchOperation {
  type: SearchType
  operationId: number
  untilCursor?: string
  sinceCursor?: string
  limit?: number
  endCursor?: string
  mediaAttachedOnly?: boolean
  startTimeAfter?: Timestamp
  endTimeAfter?: Timestamp
  personaOption?: SearchPersonaOption
  postOption?: SearchPostOption
  eventOption?: SearchEventOption
}

export interface SearchPersonaOption {
  botOnly: boolean
}

export interface SearchPostOption {
  mediaAttachedOnly: boolean
  personaId?: string
}

export interface SearchRequest {
  query: string
  operations: SearchOperation[]
}

export interface SearchResponse {
  results: SearchResult[]
}

export interface SearchResult {
  operationId: number
  personasResult?: PersonasResult
  postsResult?: PostsResult
  communitiesResult?: CommunitiesResult
}

export interface SearchTypeaheadItem {
  itemType: ItemType
  persona?: Persona
}

export interface SearchTypeaheadRequest {
  query: string
}

export interface SearchTypeaheadResponse {
  items: SearchTypeaheadItem[]
}

export interface SendCommunityInvitationRequest {
  communityId: string
  personaIds: string[]
}

export interface SendCommunityInvitationResponse {
}

export interface SendDirectMessageRequest {
  receiverId: string
  text?: string
  mediaIds: string[]
  postId?: string
}

export interface SendDirectMessageResponse {
  message: ChatRoomMessage
}

export interface SendFollowingRequestRequest {
  personaId: string
}

export interface SendFollowingRequestResponse {
  persona: Persona
}

export interface SendGroupMessageRequest {
  receiverIds: string[]
  text?: string
  mediaIds: string[]
}

export interface SendGroupMessageResponse {
  message: ChatRoomMessage
}

export interface SendMessageToRoomRequest {
  roomId: string
  text?: string
  mediaIds: string[]
}

export interface SendMessageToRoomResponse {
  message: ChatRoomMessage
}

export interface SessionManagedPersona {
  profile: Profile
  isSharedPersona: boolean
  eventStatusAll: InAppEventStatusAll
}

export interface SessionResponse {
  sessionManagedPersonas: SessionManagedPersona[]
  activePersonaId?: string
  isAccountFrozen: boolean
}

export interface SetCommunityTagsRequest {
  communityId: string
  tags: string[]
}

export interface SetCommunityTagsResponse {
  community: Community
}

export interface SigninRequest {
  tokenProvider: TokenProvider
  idToken: string
}

export interface SignOutRequest {
  refreshToken: string
  fcmToken?: string
}

export interface SignOutResponse {
}

export interface SignupRequest {
  tokenProvider: TokenProvider
  idToken: string
  invitationCode?: string
  invitationKind?: InvitationKind
}

export interface Stamp {
  stampId: string
  url: string
}

export interface StampReaction {
  stampId: string
  persona: Persona
}

export interface StartEmailAuthenticationRequest {
  email: string
  languageCode: AuthenticationLanguageCode
  type: AuthenticationType
  platform: AuthenticationPlatform
  invitationCode?: string
  invitationKind?: InvitationKind
}

export interface StartEmailAuthenticationResponse {
  verificationId: string
}

export interface StartSMSAuthenticationRequest {
  countryCode: string
  phoneNumber: string
  languageCode: AuthenticationLanguageCode
  type: AuthenticationType
  platform: AuthenticationPlatform
  invitationCode?: string
  invitationKind?: InvitationKind
}

export interface StartSMSAuthenticationResponse {
  verificationId: string
}

export interface StatusIcon {
  statusIconType: StatusIconType
  statusIcon: string
}

export interface SwitchPersonaRequest {
  personaId: string
}

export interface SwitchPersonaResponse {
}

export interface Timestamp {
  seconds: number
  nanos: number
}

export interface UpdateChatRoomTitleRequest {
  roomId: string
  title: string
}

export interface UpdateChatRoomTitleResponse {
  room: ChatRoom
}

export interface UpdateCommunityLastAccessTimeRequest {
  communityId: string
}

export interface UpdateCommunityLastAccessTimeResponse {
}

export interface UpdateCommunityRequest {
  communityId: string
  name?: string
  purpose?: string
  coverImageMediaId?: string
  accessLevel?: CommunityAccessLevel
}

export interface UpdateCommunityResponse {
  community: Community
}

export interface UpdateDisplayNameRequest {
  displayName: string
}

export interface UpdateDisplayNameResponse {
  persona: Persona
}

export interface UpdateEventCommunityRequest {
  communityId: string
  name?: string
  purpose?: string
  coverImageMediaId?: string
  accessLevel?: CommunityAccessLevel
  startAt?: Timestamp
  endAt?: Timestamp
  locationType?: CommunityEventLocationType
}

export interface UpdateEventCommunityResponse {
  community: Community
}

export interface UpdateInAppEventDoneRequest {
  eventType: PersonaInAppEventType
}

export interface UpdateInAppEventDoneResponse {
}

export interface UpdateNameRequest {
  name: string
}

export interface UpdateNameResponse {
  profile: Profile
}

export interface UpdateProfileRequest {
  displayName?: string
  profileText?: string
  statusIcon?: StatusIcon
  statusText?: string
  link?: string
}

export interface UpdateProfileResponse {
  profile: Profile
}

export interface UpdateProfileSocialMediaRequest {
  socialMediaType: ProfileSocialMediaType
  username: string
  forceVerifiedUpdate: boolean
}

export interface UpdateProfileSocialMediaResponse {
  profile: Profile
}

export interface UpdateRemotePushSettingsRequest {
  like?: boolean
  reply?: boolean
  repost?: boolean
  quote?: boolean
  mention?: boolean
  follow?: boolean
  chat?: boolean
  communityApproval?: boolean
  event?: boolean
  communityInvitation?: boolean
  recommendedPost?: boolean
  reaction?: boolean
  communityGrantAdminPrivileges?: boolean
  communityJoin?: boolean
  followingRequest?: boolean
  personaPostLike?: boolean
  personaPostReaction?: boolean
  personaPostReply?: boolean
  personaPostRepost?: boolean
  personaPostQuote?: boolean
  personaPostMention?: boolean
  communityPostLike?: boolean
  communityPostReaction?: boolean
  communityPostReply?: boolean
  communityPostRepost?: boolean
  communityPostQuote?: boolean
  communityPostMention?: boolean
  serviceAnnouncement?: boolean
}

export interface UpdateRemotePushSettingsResponse {
}

export interface UpdateTimelineSettingRequest {
  personalPostReplySubscribingDisabled?: boolean
  communityPostReplySubscribingDisabled?: boolean
  topicPostReplySubscribingDisabled?: boolean
  eventPostReplySubscribingDisabled?: boolean
}

export interface UpdateTimelineSettingResponse {
}

export interface UpdateTopicCommunityRequest {
  communityId: string
  name?: string
  purpose?: string
  coverImageMediaId?: string
  accessLevel?: CommunityAccessLevel
  searchable?: boolean
}

export interface UpdateTopicCommunityResponse {
  community: Community
}

export interface VerifiedPersonaResponse {
  recommendedPersonas: RecommendedPersona[]
}

export interface VerifyEmailAuthenticationRequest {
  verificationId: string
  passCode: number
}

export interface VerifyEmailSessionAuthenticationRequest {
  verificationId: string
  passCode: number
}

export interface VerifyEmailSessionAuthenticationResponse {
  sessionResponse: SessionResponse
}

export interface VerifySMSAuthenticationRequest {
  verificationId: string
  passCode: number
}
