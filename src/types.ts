// syntax = "proto3";

// package mixi;

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

export enum FollowingStatus {
  FOLLOWING_STATUS_NONE = 0,
  FOLLOWING_STATUS_FOLLOWING = 1,
  FOLLOWING_STATUS_REQUESTING = 2,
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

export enum PostMaskType {
  POST_MASK_TYPE_NONE = 0,
  POST_MASK_TYPE_SENSITIVE = 1,
  POST_MASK_TYPE_SPOILER = 2,
}

export enum PostPublishingType {
  POST_PUBLISHING_TYPE_UNSPECIFIED = 0,
  POST_PUBLISHING_TYPE_FOLLOW_AND_COMMUNITY = 1,
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

export enum Status {
  STATUS_UNKNOWN = 0,
  STATUS_WAIT_FOR_UPLOADING = 1,
  STATUS_IN_PROGRESS = 2,
  STATUS_SUCCESS = 3,
  STATUS_FAILURE = 4,
}

export enum StatusIconType {
  STATUS_ICON_TYPE_NONE = 0,
  STATUS_ICON_TYPE_EMOJI = 1,
}

export enum VerificationType {
  VERIFICATION_TYPE_UNVERIFIED = 0,
  VERIFICATION_TYPE_SERVICE = 1,
  VERIFICATION_TYPE_BUSINESS = 2,
  VERIFICATION_TYPE_PUBLIC_FIGURE = 3,
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
  roomId: number
  messageId: string
  personaId: string
  messageType: ChatRoomMessageType
  messageTargetId?: string
  text?: string
  createdAt: Timestamp
  media: Media[]
  post: Post
}

export interface Community {
  communityId: string
  name: string
  purpose: string
  accessLevel: CommunityAccessLevel
  admins: CommunityMember[]
  rules: CommunityRule
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
  visibility: CommunityPostConstraint
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

export interface CommunityRule {
  communityId: string
  ruleId: string
  createdAt: Timestamp
  text: string
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

export interface EventSchedule {
  startAt: Timestamp
  endAt?: Timestamp
  status: CommunityEventStatus
  closedAt?: Timestamp
  eventLocationType?: CommunityEventLocationType
}

export interface Feed {
  feedType: FeedType
  timeSeriesId: string
  post: Post
  communityAggregationPost?: CommunityAggregationPost
}

export interface LinkCard {
  cardId: string
  url: string
  status: Status
  contentType: ContentType
  title: string
  description: string
  imageUrl: string
  faviconUrl: string
}

export interface Media {
  mediaId: string
  category: Category
  status: Status
  avatar?: Avatar
  postImage?: PostImage
  postVideo?: PostVideo
  stamp?: Stamp
  description?: string
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

export interface PersonaName {
  personaId: string
  name: string
}

export interface Post {
  postId: string
  timeSeriesId: string
  createdAt: Timestamp
  personaId: string
  visibility: PostVisibility
  isDeleted: boolean
  medias: Media[]
  repostCount: number
  likesCount: number
  repliesCount: number
  quotedCount: number
  text?: string
  inReplyToPostId?: string
  repostId?: string
  quotePostId?: string
  liked: boolean
  reposted: boolean
  bookmarked: boolean
  referencePost?: Post
  quoted: boolean
  replied: boolean
  linkCards: LinkCard[]
  isMuted: boolean
  isSensitive: boolean
  community?: CommunitySummary
  attachedCommunity?: Community
  mentions: PersonaName[]
  decorations: number[]
  stamps: PostStamp[]
  readerStampId?: string
  isRestricted: boolean
  maskType: PostMaskType
  maskCaption?: string
  publishingType: PostPublishingType
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

export interface Stamp {
  url: string
  mimeType: string
  height: number
  width: number
}

export interface StatusIcon {
  statusIconType: StatusIconType
  statusIconUrl: string
}

export interface Timestamp {
  seconds: number
  nanos: number
}

// ============================================================

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

export interface ApplyForVerificationRequest {
  socialMediaTypes: ProfileSocialMediaType[]
}

export interface ApplyForVerificationResponse {
}

export interface GetCommunityRequest {
  communityId: string
}

export interface GetCommunityResponse {
  community: Community
}

export interface GetPersonaByNameRequest {
  name: string
}

export interface GetPersonaByNameResponse {
  persona?: Persona
}

export interface GetPostRequest {
  postId: string
}

export interface GetPostResponse {
  post: Post
}

export interface GetSubscribingFeedsRequest {
  untilCursor?: string
  limit?: number
  sinceCursor?: string
  endCursor?: string
  feedSourceType?: FeedSourceType
}

export interface GetSubscribingFeedsResponse {
  feeds?: Feed[]
  nextCursor?: string
}

export interface GetThreadPostsRequest {
  threadPostId: string
  untilCursorId?: string
  sinceCursorId?: string
  limit?: number
  endCursorId?: string
}

export interface GetThreadPostsRequest {
  posts: Post[]
}
