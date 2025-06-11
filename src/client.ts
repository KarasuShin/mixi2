import type {
  AcceptChatRoomRequest,
  AcceptChatRoomResponse,
  AddMembersToChatRoomRequest,
  AddMembersToChatRoomResponse,
  AddStampToPostRequest,
  AddStampToPostResponse,
  ApplyForVerificationRequest,
  ApplyForVerificationResponse,
  ApproveFollowingRequestRequest,
  ApproveFollowingRequestResponse,
  ApproveJoinCommunityRequest,
  ApproveJoinCommunityResponse,
  ArchiveCommunityRequest,
  ArchiveCommunityResponse,
  BookmarkCommunityRequest,
  BookmarkCommunityResponse,
  CancelFollowingRequestRequest,
  CancelFollowingRequestResponse,
  CancelJoinCommunityRequestRequest,
  CancelJoinCommunityRequestResponse,
  ChangeCommunityAdminsRequest,
  ChangeCommunityAdminsResponse,
  ChangeCommunityPostSubscriptionTypeRequest,
  ChangeCommunityPostSubscriptionTypeResponse,
  ChangeMyPersonaVisibilityRequest,
  ChangeMyPersonaVisibilityResponse,
  CheckPendingPostRequest,
  CheckPendingPostResponse,
  CloseEventCommunityRequest,
  CloseEventCommunityResponse,
  CreateBookmarkRequest,
  CreateBookmarkResponse,
  CreateChatRoomRequest,
  CreateChatRoomResponse,
  CreateCommunityRequest,
  CreateCommunityResponse,
  CreateEventCommunityRequest,
  CreateEventCommunityResponse,
  CreateFollowingRequest,
  CreateFollowingResponse,
  CreateLikeRequest,
  CreateLikeResponse,
  CreatePersonaFromSessionRequest,
  CreatePersonaRequest,
  CreatePostAndEventCommunityRequest,
  CreatePostAndEventCommunityResponse,
  CreatePostRequest,
  CreatePostResponse,
  CreateTopicCommunityRequest,
  CreateTopicCommunityResponse,
  DeleteAccountRequest,
  DeleteAccountResponse,
  DeleteBookmarkRequest,
  DeleteBookmarkResponse,
  DeleteCommunityStampRequest,
  DeleteCommunityStampResponse,
  DeleteExcludedCommunityMemberRequest,
  DeleteExcludedCommunityMemberResponse,
  DeleteExcludedCommunityMembersRequest,
  DeleteExcludedCommunityMembersResponse,
  DeleteFCMTokenRequest,
  DeleteFCMTokenResponse,
  DeleteFollowingRequest,
  DeleteFollowingResponse,
  DeleteLikeRequest,
  DeleteLikeResponse,
  DeletePostRequest,
  DeletePostResponse,
  DeleteRepostRequest,
  DeleteRepostResponse,
  DeleteSessionRequest,
  DeleteSessionResponse,
  DenyJoinCommunityRequest,
  DenyJoinCommunityResponse,
  ExcludeCommunityMemberRequest,
  ExcludeCommunityMemberResponse,
  ExcludeCommunityMembersRequest,
  ExcludeCommunityMembersResponse,
  ExitChatRoomRequest,
  ExitChatRoomResponse,
  GetAnnouncementsRequest,
  GetAnnouncementsResponse,
  GetBadgeCountRequest,
  GetBadgeCountResponse,
  GetBlockingMembersInCommunityRequest,
  GetBlockingMembersInCommunityResponse,
  GetBlockPersonasRequest,
  GetBlockPersonasResponse,
  GetChatRoomMessagesRequest,
  GetChatRoomMessagesResponse,
  GetChatRoomRequest,
  GetChatRoomResponse,
  GetChatRoomsRequest,
  GetChatRoomsResponse,
  GetCommunitiesPostNotificationsRequest,
  GetCommunitiesPostNotificationsResponse,
  GetCommunitiesRequest,
  GetCommunitiesResponse,
  GetCommunityBookmarksRequest,
  GetCommunityBookmarksResponse,
  GetCommunityInvitablePersonasRequest,
  GetCommunityInvitablePersonasResponse,
  GetCommunityInvitationCodeRequest,
  GetCommunityInvitationCodeResponse,
  GetCommunityInvitationRequest,
  GetCommunityInvitationResponse,
  GetCommunityJoinRequestsRequest,
  GetCommunityJoinRequestsResponse,
  GetCommunityPostPinRequest,
  GetCommunityPostPinResponse,
  GetCommunityRequest,
  GetCommunityResponse,
  GetCommunityStampsRequest,
  GetCommunityStampsResponse,
  GetCommunityTimelineRequest,
  GetCompletedOrClosedEventCommunitiesRequest,
  GetCompletedOrClosedEventCommunitiesResponse,
  GetEventCommunitiesWithinCommunityRequest,
  GetEventCommunitiesWithinCommunityResponse,
  GetExclusiveCommunityMembersRequest,
  GetExclusiveCommunityMembersResponse,
  GetFeatureFlagsRequest,
  GetFeatureFlagsResponse,
  GetFollowersRequest,
  GetFollowersResponse,
  GetFollowingCountRequest,
  GetFollowingCountResponse,
  GetFollowingRequestsRequest,
  GetFollowingRequestsResponse,
  GetFollowingsRequest,
  GetFollowingsResponse,
  GetFollowingsTimelineRequest,
  GetGlobalCountRequest,
  GetGlobalCountResponse,
  GetHashtagTimelineRequest,
  GetInAppEventStatusAllRequest,
  GetInAppEventStatusAllResponse,
  GetInAppEventStatusRequest,
  GetInAppEventStatusResponse,
  GetInvitationCodeRequest,
  GetInvitationCodeResponse,
  GetInvitationRequest,
  GetInvitationResponse,
  GetLatestRenameLogRequest,
  GetLatestRenameLogResponse,
  GetLikingPersonasRequest,
  GetLikingPersonasResponse,
  GetLimitedTimeCampaignRequest,
  GetLimitedTimeCampaignResponse,
  GetMediaRequest,
  GetMediaResponse,
  GetMuteChatRoomsRequest,
  GetMuteChatRoomsResponse,
  GetMutePersonasRequest,
  GetMutePersonasResponse,
  GetNotificationsRequest,
  GetNotificationsResponse,
  GetOngoingEventCommunitiesRequest,
  GetOngoingEventCommunitiesResponse,
  GetOngoingOrUpcomingEventCommunitiesRequest,
  GetOngoingOrUpcomingEventCommunitiesResponse,
  GetParticipatingCommunitiesRequest,
  GetParticipatingCommunitiesResponse,
  GetParticipatingCommunityMembersRequest,
  GetParticipatingCommunityMembersResponse,
  GetPastOrClosedEventCommunitiesRequest,
  GetPastOrClosedEventCommunitiesResponse,
  GetPendingFollowingRequestsRequest,
  GetPendingFollowingRequestsResponse,
  GetPendingVerificationSocialMediaRequest,
  GetPendingVerificationSocialMediaResponse,
  GetPersonaByNameRequest,
  GetPersonalCommunityPostsRequest,
  GetPersonalInformationRequest,
  GetPersonalInformationResponse,
  GetPersonalTimelineRequest,
  GetPersonaResponse,
  GetPersonasPostNotificationsRequest,
  GetPersonasPostNotificationsResponse,
  GetPersonasRequest,
  GetPersonasResponse,
  GetPostableCommunitiesRequest,
  GetPostableCommunitiesResponse,
  GetPostRequest,
  GetPostResponse,
  GetPostsRequest,
  GetPostsResponse,
  GetPostStampReactionsRequest,
  GetPostStampReactionsResponse,
  GetProfileByNameRequest,
  GetProfilePostPinRequest,
  GetProfilePostPinResponse,
  GetProfileRequest,
  GetProfileResponse,
  GetQuotePostsRequest,
  GetQuotePostsResponse,
  GetReactionPostsRequest,
  GetReactionPostsResponse,
  GetRecommendationsRequest,
  GetRecommendationsResponse,
  GetRecommendedCommunitiesRequest,
  GetRecommendedCommunitiesResponse,
  GetRecommendedTimelineRequest,
  GetRemoteConfigRequest,
  GetRemoteConfigResponse,
  GetRemotePushSettingsRequest,
  GetRemotePushSettingsResponse,
  GetRepliesRequest,
  GetRepliesResponse,
  GetReplyAncestorsRequest,
  GetReplyAncestorsResponse,
  GetRepostingPersonasRequest,
  GetRepostingPersonasResponse,
  GetRequestedChatRoomsRequest,
  GetRequestedChatRoomsResponse,
  GetSessionRequest,
  GetStampsRequest,
  GetStampsResponse,
  GetStorageRateLimitRequest,
  GetStorageRateLimitResponse,
  GetSubscribingFeedsRequest,
  GetSubscribingFeedsResponse,
  GetThreadPostsRequest,
  GetTimelineResponse,
  GetTimelineSettingRequest,
  GetTimelineSettingResponse,
  GetUnreadChatRoomCountRequest,
  GetUnreadChatRoomCountResponse,
  GetUpcomingEventCommunitiesRequest,
  GetUpcomingEventCommunitiesResponse,
  GetWaitingCommunitiesRequest,
  GetWaitingCommunitiesResponse,
  IncrementGlobalCountRequest,
  IncrementGlobalCountResponse,
  JoinCommunityRequest,
  JoinCommunityResponse,
  LeaveCommunityRequest,
  LeaveCommunityResponse,
  MakeChatRoomInvisibleRequest,
  MakeChatRoomInvisibleResponse,
  MakeChatRoomMuteRequest,
  MakeChatRoomMuteResponse,
  MakeChatRoomUnmuteRequest,
  MakeChatRoomUnmuteResponse,
  MakeCommunityPostNotificationDisabledRequest,
  MakeCommunityPostNotificationDisabledResponse,
  MakeCommunityPostNotificationEnabledRequest,
  MakeCommunityPostNotificationEnabledResponse,
  MakeCommunitySubscriptionDisabledRequest,
  MakeCommunitySubscriptionDisabledResponse,
  MakeCommunitySubscriptionEnabledRequest,
  MakeCommunitySubscriptionEnabledResponse,
  MakePersonaBlockRequest,
  MakePersonaBlockResponse,
  MakePersonaMuteRequest,
  MakePersonaMuteResponse,
  MakePersonaPostNotificationDisabledRequest,
  MakePersonaPostNotificationDisabledResponse,
  MakePersonaPostNotificationEnabledRequest,
  MakePersonaPostNotificationEnabledResponse,
  MakePersonaUnblockRequest,
  MakePersonaUnblockResponse,
  MakePersonaUnmuteRequest,
  MakePersonaUnmuteResponse,
  MarkAnnouncementAsReadRequest,
  MarkAnnouncementAsReadResponse,
  MarkNotificationAsReadRequest,
  MarkNotificationAsReadResponse,
  MarkNotificationsAsReadBeforeTimeRequest,
  MarkNotificationsAsReadResponse,
  NewTokenResponse,
  PinCommunityPostRequest,
  PinCommunityPostResponse,
  PinProfilePostRequest,
  PinProfilePostResponse,
  PrepareMediaUploadingRequest,
  PrepareMediaUploadingResponse,
  ReadPersonaWarningRequest,
  ReadPersonaWarningResponse,
  RefreshTokenRequest,
  RegisterFCMTokenRequest,
  RegisterFCMTokenResponse,
  RejectFollowingRequestRequest,
  RejectFollowingRequestResponse,
  RemoveCommunityBookmarkRequest,
  RemoveCommunityBookmarkResponse,
  RemoveCommunityPostPinRequest,
  RemoveCommunityPostPinResponse,
  RemoveProfilePostPinRequest,
  RemoveProfilePostPinResponse,
  RemoveStampFromOwnPostRequest,
  RemoveStampFromOwnPostResponse,
  RemoveStampFromPostRequest,
  RemoveStampFromPostResponse,
  ReportChatRoomMessageRequest,
  ReportChatRoomMessageResponse,
  ReportCommunityRequest,
  ReportCommunityResponse,
  ReportPersonaRequest,
  ReportPersonaResponse,
  ReportPostRequest,
  ReportPostResponse,
  RequestJoinCommunityRequest,
  RequestJoinCommunityResponse,
  ResendEmailPassCodeRequest,
  ResendEmailPassCodeResponse,
  ResendSMSPassCodeRequest,
  ResendSMSPassCodeResponse,
  RestrictCommunityPostRequest,
  RestrictCommunityPostResponse,
  SearchChatRoomsRequest,
  SearchChatRoomsResponse,
  SearchRequest,
  SearchResponse,
  SearchTypeaheadRequest,
  SearchTypeaheadResponse,
  SendCommunityInvitationRequest,
  SendCommunityInvitationResponse,
  SendDirectMessageRequest,
  SendDirectMessageResponse,
  SendFollowingRequestRequest,
  SendFollowingRequestResponse,
  SendGroupMessageRequest,
  SendGroupMessageResponse,
  SendMessageToRoomRequest,
  SendMessageToRoomResponse,
  SessionResponse,
  SetCommunityTagsRequest,
  SetCommunityTagsResponse,
  SigninRequest,
  SignOutRequest,
  SignOutResponse,
  SignupRequest,
  StartEmailAuthenticationRequest,
  StartEmailAuthenticationResponse,
  StartSMSAuthenticationRequest,
  StartSMSAuthenticationResponse,
  SwitchPersonaRequest,
  SwitchPersonaResponse,
  UpdateChatRoomTitleRequest,
  UpdateChatRoomTitleResponse,
  UpdateCommunityLastAccessTimeRequest,
  UpdateCommunityLastAccessTimeResponse,
  UpdateCommunityRequest,
  UpdateCommunityResponse,
  UpdateDisplayNameRequest,
  UpdateDisplayNameResponse,
  UpdateEventCommunityRequest,
  UpdateEventCommunityResponse,
  UpdateInAppEventDoneRequest,
  UpdateInAppEventDoneResponse,
  UpdateNameRequest,
  UpdateNameResponse,
  UpdateProfileRequest,
  UpdateProfileResponse,
  UpdateProfileSocialMediaRequest,
  UpdateProfileSocialMediaResponse,
  UpdateRemotePushSettingsRequest,
  UpdateRemotePushSettingsResponse,
  UpdateTimelineSettingRequest,
  UpdateTimelineSettingResponse,
  UpdateTopicCommunityRequest,
  UpdateTopicCommunityResponse,
  VerifyEmailAuthenticationRequest,
  VerifyEmailSessionAuthenticationRequest,
  VerifyEmailSessionAuthenticationResponse,
  VerifySMSAuthenticationRequest,
} from '~/types'
import { decode } from '~/lib/decode'
import { encode } from '~/lib/encode'
import { Http } from '~/lib/http'

export class MixiClient {
  private cookie: string
  private authKey: string
  private http: Http

  constructor(
    cookie: string,
    authKey: string,
    options?: {
      baseUrl?: string
      httpAdapter?: (input: string, init?: RequestInit) => Promise<Response>
    },
  ) {
    if (!cookie || !authKey) {
      throw new Error('cookie and authKey are required')
    }

    this.cookie = cookie
    this.authKey = authKey
    this.http = new Http(cookie, authKey, {
      baseUrl: options?.baseUrl,
      httpAdapter: options?.httpAdapter,
    })
  }

  async request<T = any>(rpcName: string, data?: any) {
    let input: Uint8Array | undefined

    if (data) {
      input = await encode(data, `${rpcName}Request`)
    }

    const response = await this.http.request(`/${rpcName}`, input).then(res => res.bytes())

    return await decode<T>(response, `${rpcName}Response`)
  }

  acceptChatRoom(payload: AcceptChatRoomRequest) {
    return this.request<AcceptChatRoomResponse>('AcceptChatRoom', payload)
  }

  addMembersToChatRoom(payload: AddMembersToChatRoomRequest) {
    return this.request<AddMembersToChatRoomResponse>('AddMembersToChatRoom', payload)
  }

  addStampToPost(payload: AddStampToPostRequest) {
    return this.request<AddStampToPostResponse>('AddStampToPost', payload)
  }

  applyForVerification(payload: ApplyForVerificationRequest) {
    return this.request<ApplyForVerificationResponse>('ApplyForVerification', payload)
  }

  approveFollowingRequest(payload: ApproveFollowingRequestRequest) {
    return this.request<ApproveFollowingRequestResponse>('ApproveFollowingRequest', payload)
  }

  approveJoinCommunity(payload: ApproveJoinCommunityRequest) {
    return this.request<ApproveJoinCommunityResponse>('ApproveJoinCommunity', payload)
  }

  archiveCommunity(payload: ArchiveCommunityRequest) {
    return this.request<ArchiveCommunityResponse>('ArchiveCommunity', payload)
  }

  bookmarkCommunity(payload: BookmarkCommunityRequest) {
    return this.request<BookmarkCommunityResponse>('BookmarkCommunity', payload)
  }

  cancelFollowingRequest(payload: CancelFollowingRequestRequest) {
    return this.request<CancelFollowingRequestResponse>('CancelFollowingRequest', payload)
  }

  cancelJoinCommunityRequest(payload: CancelJoinCommunityRequestRequest) {
    return this.request<CancelJoinCommunityRequestResponse>('CancelJoinCommunityRequest', payload)
  }

  changeCommunityAdmins(payload: ChangeCommunityAdminsRequest) {
    return this.request<ChangeCommunityAdminsResponse>('ChangeCommunityAdmins', payload)
  }

  changeCommunityPostSubscriptionType(payload: ChangeCommunityPostSubscriptionTypeRequest) {
    return this.request<ChangeCommunityPostSubscriptionTypeResponse>('ChangeCommunityPostSubscriptionType', payload)
  }

  changeMyPersonaVisibility(payload: ChangeMyPersonaVisibilityRequest) {
    return this.request<ChangeMyPersonaVisibilityResponse>('ChangeMyPersonaVisibility', payload)
  }

  checkPendingPost(payload: CheckPendingPostRequest) {
    return this.request<CheckPendingPostResponse>('CheckPendingPost', payload)
  }

  closeEventCommunity(payload: CloseEventCommunityRequest) {
    return this.request<CloseEventCommunityResponse>('CloseEventCommunity', payload)
  }

  createBookmark(payload: CreateBookmarkRequest) {
    return this.request<CreateBookmarkResponse>('CreateBookmark', payload)
  }

  createChatRoom(payload: CreateChatRoomRequest) {
    return this.request<CreateChatRoomResponse>('CreateChatRoom', payload)
  }

  createCommunity(payload: CreateCommunityRequest) {
    return this.request<CreateCommunityResponse>('CreateCommunity', payload)
  }

  createEventCommunity(payload: CreateEventCommunityRequest) {
    return this.request<CreateEventCommunityResponse>('CreateEventCommunity', payload)
  }

  createFollowing(payload: CreateFollowingRequest) {
    return this.request<CreateFollowingResponse>('CreateFollowing', payload)
  }

  createLike(payload: CreateLikeRequest) {
    return this.request<CreateLikeResponse>('CreateLike', payload)
  }

  createPersona(payload: CreatePersonaRequest) {
    return this.request<NewTokenResponse>('CreatePersona', payload)
  }

  createPersonaFromSession(payload: CreatePersonaFromSessionRequest) {
    return this.request<SessionResponse>('CreatePersonaFromSession', payload)
  }

  createPost(payload: CreatePostRequest) {
    return this.request<CreatePostResponse>('CreatePost', payload)
  }

  createPostAndEventCommunity(payload: CreatePostAndEventCommunityRequest) {
    return this.request<CreatePostAndEventCommunityResponse>('CreatePostAndEventCommunity', payload)
  }

  createTopicCommunity(payload: CreateTopicCommunityRequest) {
    return this.request<CreateTopicCommunityResponse>('CreateTopicCommunity', payload)
  }

  deleteAccount(payload: DeleteAccountRequest) {
    return this.request<DeleteAccountResponse>('DeleteAccount', payload)
  }

  deleteBookmark(payload: DeleteBookmarkRequest) {
    return this.request<DeleteBookmarkResponse>('DeleteBookmark', payload)
  }

  deleteCommunityStamp(payload: DeleteCommunityStampRequest) {
    return this.request<DeleteCommunityStampResponse>('DeleteCommunityStamp', payload)
  }

  deleteExcludedCommunityMember(payload: DeleteExcludedCommunityMemberRequest) {
    return this.request<DeleteExcludedCommunityMemberResponse>('DeleteExcludedCommunityMember', payload)
  }

  deleteExcludedCommunityMembers(payload: DeleteExcludedCommunityMembersRequest) {
    return this.request<DeleteExcludedCommunityMembersResponse>('DeleteExcludedCommunityMembers', payload)
  }

  deleteFCMToken(payload: DeleteFCMTokenRequest) {
    return this.request<DeleteFCMTokenResponse>('DeleteFCMToken', payload)
  }

  deleteFollowing(payload: DeleteFollowingRequest) {
    return this.request<DeleteFollowingResponse>('DeleteFollowing', payload)
  }

  deleteLike(payload: DeleteLikeRequest) {
    return this.request<DeleteLikeResponse>('DeleteLike', payload)
  }

  deletePost(payload: DeletePostRequest) {
    return this.request<DeletePostResponse>('DeletePost', payload)
  }

  deleteRepost(payload: DeleteRepostRequest) {
    return this.request<DeleteRepostResponse>('DeleteRepost', payload)
  }

  deleteSession(payload: DeleteSessionRequest) {
    return this.request<DeleteSessionResponse>('DeleteSession', payload)
  }

  denyJoinCommunity(payload: DenyJoinCommunityRequest) {
    return this.request<DenyJoinCommunityResponse>('DenyJoinCommunity', payload)
  }

  excludeCommunityMember(payload: ExcludeCommunityMemberRequest) {
    return this.request<ExcludeCommunityMemberResponse>('ExcludeCommunityMember', payload)
  }

  excludeCommunityMembers(payload: ExcludeCommunityMembersRequest) {
    return this.request<ExcludeCommunityMembersResponse>('ExcludeCommunityMembers', payload)
  }

  exitChatRoom(payload: ExitChatRoomRequest) {
    return this.request<ExitChatRoomResponse>('ExitChatRoom', payload)
  }

  getAnnouncements(payload: GetAnnouncementsRequest) {
    return this.request<GetAnnouncementsResponse>('GetAnnouncements', payload)
  }

  getBadgeCount(payload: GetBadgeCountRequest) {
    return this.request<GetBadgeCountResponse>('GetBadgeCount', payload)
  }

  getBlockingMembersInCommunity(payload: GetBlockingMembersInCommunityRequest) {
    return this.request<GetBlockingMembersInCommunityResponse>('GetBlockingMembersInCommunity', payload)
  }

  getBlockPersonas(payload: GetBlockPersonasRequest) {
    return this.request<GetBlockPersonasResponse>('GetBlockPersonas', payload)
  }

  getChatRoom(payload: GetChatRoomRequest) {
    return this.request<GetChatRoomResponse>('GetChatRoom', payload)
  }

  getChatRoomMessages(payload: GetChatRoomMessagesRequest) {
    return this.request<GetChatRoomMessagesResponse>('GetChatRoomMessages', payload)
  }

  getChatRooms(payload: GetChatRoomsRequest) {
    return this.request<GetChatRoomsResponse>('GetChatRooms', payload)
  }

  getCommunities(payload: GetCommunitiesRequest) {
    return this.request<GetCommunitiesResponse>('GetCommunities', payload)
  }

  getCommunitiesPostNotifications(payload: GetCommunitiesPostNotificationsRequest) {
    return this.request<GetCommunitiesPostNotificationsResponse>('GetCommunitiesPostNotifications', payload)
  }

  getCommunity(payload: GetCommunityRequest) {
    return this.request<GetCommunityResponse>('GetCommunity', payload)
  }

  getCommunityBookmarks(payload: GetCommunityBookmarksRequest) {
    return this.request<GetCommunityBookmarksResponse>('GetCommunityBookmarks', payload)
  }

  getCommunityInvitablePersonas(payload: GetCommunityInvitablePersonasRequest) {
    return this.request<GetCommunityInvitablePersonasResponse>('GetCommunityInvitablePersonas', payload)
  }

  getCommunityInvitation(payload: GetCommunityInvitationRequest) {
    return this.request<GetCommunityInvitationResponse>('GetCommunityInvitation', payload)
  }

  getCommunityInvitationCode(payload: GetCommunityInvitationCodeRequest) {
    return this.request<GetCommunityInvitationCodeResponse>('GetCommunityInvitationCode', payload)
  }

  getCommunityJoinRequests(payload: GetCommunityJoinRequestsRequest) {
    return this.request<GetCommunityJoinRequestsResponse>('GetCommunityJoinRequests', payload)
  }

  getCommunityPostPin(payload: GetCommunityPostPinRequest) {
    return this.request<GetCommunityPostPinResponse>('GetCommunityPostPin', payload)
  }

  getCommunityStamps(payload: GetCommunityStampsRequest) {
    return this.request<GetCommunityStampsResponse>('GetCommunityStamps', payload)
  }

  getCommunityTimeline(payload: GetCommunityTimelineRequest) {
    return this.request<GetTimelineResponse>('GetCommunityTimeline', payload)
  }

  getCompletedOrClosedEventCommunities(payload: GetCompletedOrClosedEventCommunitiesRequest) {
    return this.request<GetCompletedOrClosedEventCommunitiesResponse>('GetCompletedOrClosedEventCommunities', payload)
  }

  getEventCommunitiesWithinCommunity(payload: GetEventCommunitiesWithinCommunityRequest) {
    return this.request<GetEventCommunitiesWithinCommunityResponse>('GetEventCommunitiesWithinCommunity', payload)
  }

  getExclusiveCommunityMembers(payload: GetExclusiveCommunityMembersRequest) {
    return this.request<GetExclusiveCommunityMembersResponse>('GetExclusiveCommunityMembers', payload)
  }

  getFeatureFlags(payload: GetFeatureFlagsRequest) {
    return this.request<GetFeatureFlagsResponse>('GetFeatureFlags', payload)
  }

  getFollowers(payload: GetFollowersRequest) {
    return this.request<GetFollowersResponse>('GetFollowers', payload)
  }

  getFollowingCount(payload: GetFollowingCountRequest) {
    return this.request<GetFollowingCountResponse>('GetFollowingCount', payload)
  }

  getFollowingRequests(payload: GetFollowingRequestsRequest) {
    return this.request<GetFollowingRequestsResponse>('GetFollowingRequests', payload)
  }

  getFollowings(payload: GetFollowingsRequest) {
    return this.request<GetFollowingsResponse>('GetFollowings', payload)
  }

  getFollowingsTimeline(payload: GetFollowingsTimelineRequest) {
    return this.request<GetTimelineResponse>('GetFollowingsTimeline', payload)
  }

  getGlobalCount(payload: GetGlobalCountRequest) {
    return this.request<GetGlobalCountResponse>('GetGlobalCount', payload)
  }

  getHashtagTimeline(payload: GetHashtagTimelineRequest) {
    return this.request<GetTimelineResponse>('GetHashtagTimeline', payload)
  }

  getInAppEventStatus(payload: GetInAppEventStatusRequest) {
    return this.request<GetInAppEventStatusResponse>('GetInAppEventStatus', payload)
  }

  getInAppEventStatusAll(payload: GetInAppEventStatusAllRequest) {
    return this.request<GetInAppEventStatusAllResponse>('GetInAppEventStatusAll', payload)
  }

  getInvitation(payload: GetInvitationRequest) {
    return this.request<GetInvitationResponse>('GetInvitation', payload)
  }

  getInvitationCode(payload: GetInvitationCodeRequest) {
    return this.request<GetInvitationCodeResponse>('GetInvitationCode', payload)
  }

  getLatestRenameLog(payload: GetLatestRenameLogRequest) {
    return this.request<GetLatestRenameLogResponse>('GetLatestRenameLog', payload)
  }

  getLikingPersonas(payload: GetLikingPersonasRequest) {
    return this.request<GetLikingPersonasResponse>('GetLikingPersonas', payload)
  }

  getLimitedTimeCampaign(payload: GetLimitedTimeCampaignRequest) {
    return this.request<GetLimitedTimeCampaignResponse>('GetLimitedTimeCampaign', payload)
  }

  getMedia(payload: GetMediaRequest) {
    return this.request<GetMediaResponse>('GetMedia', payload)
  }

  getMuteChatRooms(payload: GetMuteChatRoomsRequest) {
    return this.request<GetMuteChatRoomsResponse>('GetMuteChatRooms', payload)
  }

  getMutePersonas(payload: GetMutePersonasRequest) {
    return this.request<GetMutePersonasResponse>('GetMutePersonas', payload)
  }

  getNotifications(payload: GetNotificationsRequest) {
    return this.request<GetNotificationsResponse>('GetNotifications', payload)
  }

  getOngoingEventCommunities(payload: GetOngoingEventCommunitiesRequest) {
    return this.request<GetOngoingEventCommunitiesResponse>('GetOngoingEventCommunities', payload)
  }

  getOngoingOrUpcomingEventCommunities(payload: GetOngoingOrUpcomingEventCommunitiesRequest) {
    return this.request<GetOngoingOrUpcomingEventCommunitiesResponse>('GetOngoingOrUpcomingEventCommunities', payload)
  }

  getParticipatingCommunities(payload: GetParticipatingCommunitiesRequest) {
    return this.request<GetParticipatingCommunitiesResponse>('GetParticipatingCommunities', payload)
  }

  getParticipatingCommunityMembers(payload: GetParticipatingCommunityMembersRequest) {
    return this.request<GetParticipatingCommunityMembersResponse>('GetParticipatingCommunityMembers', payload)
  }

  getPastOrClosedEventCommunities(payload: GetPastOrClosedEventCommunitiesRequest) {
    return this.request<GetPastOrClosedEventCommunitiesResponse>('GetPastOrClosedEventCommunities', payload)
  }

  getPendingFollowingRequests(payload: GetPendingFollowingRequestsRequest) {
    return this.request<GetPendingFollowingRequestsResponse>('GetPendingFollowingRequests', payload)
  }

  getPendingVerificationSocialMedia(payload: GetPendingVerificationSocialMediaRequest) {
    return this.request<GetPendingVerificationSocialMediaResponse>('GetPendingVerificationSocialMedia', payload)
  }

  getPersonaByName(payload: GetPersonaByNameRequest) {
    return this.request<GetPersonaResponse>('GetPersonaByName', payload)
  }

  getPersonalCommunityPosts(payload: GetPersonalCommunityPostsRequest) {
    return this.request<GetTimelineResponse>('GetPersonalCommunityPosts', payload)
  }

  getPersonalInformation(payload: GetPersonalInformationRequest) {
    return this.request<GetPersonalInformationResponse>('GetPersonalInformation', payload)
  }

  getPersonalTimeline(payload: GetPersonalTimelineRequest) {
    return this.request<GetTimelineResponse>('GetPersonalTimeline', payload)
  }

  getPersonas(payload: GetPersonasRequest) {
    return this.request<GetPersonasResponse>('GetPersonas', payload)
  }

  getPersonasPostNotifications(payload: GetPersonasPostNotificationsRequest) {
    return this.request<GetPersonasPostNotificationsResponse>('GetPersonasPostNotifications', payload)
  }

  getPost(payload: GetPostRequest) {
    return this.request<GetPostResponse>('GetPost', payload)
  }

  getPostableCommunities(payload: GetPostableCommunitiesRequest) {
    return this.request<GetPostableCommunitiesResponse>('GetPostableCommunities', payload)
  }

  getPosts(payload: GetPostsRequest) {
    return this.request<GetPostsResponse>('GetPosts', payload)
  }

  getPostStampReactions(payload: GetPostStampReactionsRequest) {
    return this.request<GetPostStampReactionsResponse>('GetPostStampReactions', payload)
  }

  getProfile(payload: GetProfileRequest) {
    return this.request<GetProfileResponse>('GetProfile', payload)
  }

  getProfileByName(payload: GetProfileByNameRequest) {
    return this.request<GetProfileResponse>('GetProfileByName', payload)
  }

  getProfilePostPin(payload: GetProfilePostPinRequest) {
    return this.request<GetProfilePostPinResponse>('GetProfilePostPin', payload)
  }

  getQuotePosts(payload: GetQuotePostsRequest) {
    return this.request<GetQuotePostsResponse>('GetQuotePosts', payload)
  }

  getReactionPosts(payload: GetReactionPostsRequest) {
    return this.request<GetReactionPostsResponse>('GetReactionPosts', payload)
  }

  getRecommendations(payload: GetRecommendationsRequest) {
    return this.request<GetRecommendationsResponse>('GetRecommendations', payload)
  }

  getRecommendedCommunities(payload: GetRecommendedCommunitiesRequest) {
    return this.request<GetRecommendedCommunitiesResponse>('GetRecommendedCommunities', payload)
  }

  getRecommendedTimeline(payload: GetRecommendedTimelineRequest) {
    return this.request<GetTimelineResponse>('GetRecommendedTimeline', payload)
  }

  getRemoteConfig(payload: GetRemoteConfigRequest) {
    return this.request<GetRemoteConfigResponse>('GetRemoteConfig', payload)
  }

  getRemotePushSettings(payload: GetRemotePushSettingsRequest) {
    return this.request<GetRemotePushSettingsResponse>('GetRemotePushSettings', payload)
  }

  getReplies(payload: GetRepliesRequest) {
    return this.request<GetRepliesResponse>('GetReplies', payload)
  }

  getReplyAncestors(payload: GetReplyAncestorsRequest) {
    return this.request<GetReplyAncestorsResponse>('GetReplyAncestors', payload)
  }

  getRepostingPersonas(payload: GetRepostingPersonasRequest) {
    return this.request<GetRepostingPersonasResponse>('GetRepostingPersonas', payload)
  }

  getRequestedChatRooms(payload: GetRequestedChatRoomsRequest) {
    return this.request<GetRequestedChatRoomsResponse>('GetRequestedChatRooms', payload)
  }

  getSession(payload: GetSessionRequest) {
    return this.request<SessionResponse>('GetSession', payload)
  }

  getStamps(payload: GetStampsRequest) {
    return this.request<GetStampsResponse>('GetStamps', payload)
  }

  getStorageRateLimit(payload: GetStorageRateLimitRequest) {
    return this.request<GetStorageRateLimitResponse>('GetStorageRateLimit', payload)
  }

  getSubscribingFeeds(payload: GetSubscribingFeedsRequest) {
    return this.request<GetSubscribingFeedsResponse>('GetSubscribingFeeds', payload)
  }

  getThreadPosts(payload: GetThreadPostsRequest) {
    return this.request<GetTimelineResponse>('GetThreadPosts', payload)
  }

  getTimelineSetting(payload: GetTimelineSettingRequest) {
    return this.request<GetTimelineSettingResponse>('GetTimelineSetting', payload)
  }

  getUnreadChatRoomCount(payload: GetUnreadChatRoomCountRequest) {
    return this.request<GetUnreadChatRoomCountResponse>('GetUnreadChatRoomCount', payload)
  }

  getUpcomingEventCommunities(payload: GetUpcomingEventCommunitiesRequest) {
    return this.request<GetUpcomingEventCommunitiesResponse>('GetUpcomingEventCommunities', payload)
  }

  getWaitingCommunities(payload: GetWaitingCommunitiesRequest) {
    return this.request<GetWaitingCommunitiesResponse>('GetWaitingCommunities', payload)
  }

  incrementGlobalCount(payload: IncrementGlobalCountRequest) {
    return this.request<IncrementGlobalCountResponse>('IncrementGlobalCount', payload)
  }

  joinCommunity(payload: JoinCommunityRequest) {
    return this.request<JoinCommunityResponse>('JoinCommunity', payload)
  }

  leaveCommunity(payload: LeaveCommunityRequest) {
    return this.request<LeaveCommunityResponse>('LeaveCommunity', payload)
  }

  makeChatRoomInvisible(payload: MakeChatRoomInvisibleRequest) {
    return this.request<MakeChatRoomInvisibleResponse>('MakeChatRoomInvisible', payload)
  }

  makeChatRoomMute(payload: MakeChatRoomMuteRequest) {
    return this.request<MakeChatRoomMuteResponse>('MakeChatRoomMute', payload)
  }

  makeChatRoomUnmute(payload: MakeChatRoomUnmuteRequest) {
    return this.request<MakeChatRoomUnmuteResponse>('MakeChatRoomUnmute', payload)
  }

  makeCommunityPostNotificationDisabled(payload: MakeCommunityPostNotificationDisabledRequest) {
    return this.request<MakeCommunityPostNotificationDisabledResponse>('MakeCommunityPostNotificationDisabled', payload)
  }

  makeCommunityPostNotificationEnabled(payload: MakeCommunityPostNotificationEnabledRequest) {
    return this.request<MakeCommunityPostNotificationEnabledResponse>('MakeCommunityPostNotificationEnabled', payload)
  }

  makeCommunitySubscriptionDisabled(payload: MakeCommunitySubscriptionDisabledRequest) {
    return this.request<MakeCommunitySubscriptionDisabledResponse>('MakeCommunitySubscriptionDisabled', payload)
  }

  makeCommunitySubscriptionEnabled(payload: MakeCommunitySubscriptionEnabledRequest) {
    return this.request<MakeCommunitySubscriptionEnabledResponse>('MakeCommunitySubscriptionEnabled', payload)
  }

  makePersonaBlock(payload: MakePersonaBlockRequest) {
    return this.request<MakePersonaBlockResponse>('MakePersonaBlock', payload)
  }

  makePersonaMute(payload: MakePersonaMuteRequest) {
    return this.request<MakePersonaMuteResponse>('MakePersonaMute', payload)
  }

  makePersonaPostNotificationDisabled(payload: MakePersonaPostNotificationDisabledRequest) {
    return this.request<MakePersonaPostNotificationDisabledResponse>('MakePersonaPostNotificationDisabled', payload)
  }

  makePersonaPostNotificationEnabled(payload: MakePersonaPostNotificationEnabledRequest) {
    return this.request<MakePersonaPostNotificationEnabledResponse>('MakePersonaPostNotificationEnabled', payload)
  }

  makePersonaUnblock(payload: MakePersonaUnblockRequest) {
    return this.request<MakePersonaUnblockResponse>('MakePersonaUnblock', payload)
  }

  makePersonaUnmute(payload: MakePersonaUnmuteRequest) {
    return this.request<MakePersonaUnmuteResponse>('MakePersonaUnmute', payload)
  }

  markAnnouncementAsRead(payload: MarkAnnouncementAsReadRequest) {
    return this.request<MarkAnnouncementAsReadResponse>('MarkAnnouncementAsRead', payload)
  }

  markNotificationAsRead(payload: MarkNotificationAsReadRequest) {
    return this.request<MarkNotificationAsReadResponse>('MarkNotificationAsRead', payload)
  }

  markNotificationsAsReadBeforeTime(payload: MarkNotificationsAsReadBeforeTimeRequest) {
    return this.request<MarkNotificationsAsReadResponse>('MarkNotificationsAsReadBeforeTime', payload)
  }

  pinCommunityPost(payload: PinCommunityPostRequest) {
    return this.request<PinCommunityPostResponse>('PinCommunityPost', payload)
  }

  pinProfilePost(payload: PinProfilePostRequest) {
    return this.request<PinProfilePostResponse>('PinProfilePost', payload)
  }

  prepareMediaUploading(payload: PrepareMediaUploadingRequest) {
    return this.request<PrepareMediaUploadingResponse>('PrepareMediaUploading', payload)
  }

  readPersonaWarning(payload: ReadPersonaWarningRequest) {
    return this.request<ReadPersonaWarningResponse>('ReadPersonaWarning', payload)
  }

  refreshToken(payload: RefreshTokenRequest) {
    return this.request<NewTokenResponse>('RefreshToken', payload)
  }

  registerFCMToken(payload: RegisterFCMTokenRequest) {
    return this.request<RegisterFCMTokenResponse>('RegisterFCMToken', payload)
  }

  rejectFollowingRequest(payload: RejectFollowingRequestRequest) {
    return this.request<RejectFollowingRequestResponse>('RejectFollowingRequest', payload)
  }

  removeCommunityBookmark(payload: RemoveCommunityBookmarkRequest) {
    return this.request<RemoveCommunityBookmarkResponse>('RemoveCommunityBookmark', payload)
  }

  removeCommunityPostPin(payload: RemoveCommunityPostPinRequest) {
    return this.request<RemoveCommunityPostPinResponse>('RemoveCommunityPostPin', payload)
  }

  removeProfilePostPin(payload: RemoveProfilePostPinRequest) {
    return this.request<RemoveProfilePostPinResponse>('RemoveProfilePostPin', payload)
  }

  removeStampFromOwnPost(payload: RemoveStampFromOwnPostRequest) {
    return this.request<RemoveStampFromOwnPostResponse>('RemoveStampFromOwnPost', payload)
  }

  removeStampFromPost(payload: RemoveStampFromPostRequest) {
    return this.request<RemoveStampFromPostResponse>('RemoveStampFromPost', payload)
  }

  reportChatRoomMessage(payload: ReportChatRoomMessageRequest) {
    return this.request<ReportChatRoomMessageResponse>('ReportChatRoomMessage', payload)
  }

  reportCommunity(payload: ReportCommunityRequest) {
    return this.request<ReportCommunityResponse>('ReportCommunity', payload)
  }

  reportPersona(payload: ReportPersonaRequest) {
    return this.request<ReportPersonaResponse>('ReportPersona', payload)
  }

  reportPost(payload: ReportPostRequest) {
    return this.request<ReportPostResponse>('ReportPost', payload)
  }

  requestJoinCommunity(payload: RequestJoinCommunityRequest) {
    return this.request<RequestJoinCommunityResponse>('RequestJoinCommunity', payload)
  }

  resendEmailPassCode(payload: ResendEmailPassCodeRequest) {
    return this.request<ResendEmailPassCodeResponse>('ResendEmailPassCode', payload)
  }

  resendSMSPassCode(payload: ResendSMSPassCodeRequest) {
    return this.request<ResendSMSPassCodeResponse>('ResendSMSPassCode', payload)
  }

  restrictCommunityPost(payload: RestrictCommunityPostRequest) {
    return this.request<RestrictCommunityPostResponse>('RestrictCommunityPost', payload)
  }

  search(payload: SearchRequest) {
    return this.request<SearchResponse>('Search', payload)
  }

  searchChatRooms(payload: SearchChatRoomsRequest) {
    return this.request<SearchChatRoomsResponse>('SearchChatRooms', payload)
  }

  searchTypeahead(payload: SearchTypeaheadRequest) {
    return this.request<SearchTypeaheadResponse>('SearchTypeahead', payload)
  }

  sendCommunityInvitation(payload: SendCommunityInvitationRequest) {
    return this.request<SendCommunityInvitationResponse>('SendCommunityInvitation', payload)
  }

  sendDirectMessage(payload: SendDirectMessageRequest) {
    return this.request<SendDirectMessageResponse>('SendDirectMessage', payload)
  }

  sendFollowingRequest(payload: SendFollowingRequestRequest) {
    return this.request<SendFollowingRequestResponse>('SendFollowingRequest', payload)
  }

  sendGroupMessage(payload: SendGroupMessageRequest) {
    return this.request<SendGroupMessageResponse>('SendGroupMessage', payload)
  }

  sendMessageToRoom(payload: SendMessageToRoomRequest) {
    return this.request<SendMessageToRoomResponse>('SendMessageToRoom', payload)
  }

  setCommunityTags(payload: SetCommunityTagsRequest) {
    return this.request<SetCommunityTagsResponse>('SetCommunityTags', payload)
  }

  signin(payload: SigninRequest) {
    return this.request<NewTokenResponse>('Signin', payload)
  }

  signOut(payload: SignOutRequest) {
    return this.request<SignOutResponse>('SignOut', payload)
  }

  signup(payload: SignupRequest) {
    return this.request<NewTokenResponse>('Signup', payload)
  }

  startEmailAuthentication(payload: StartEmailAuthenticationRequest) {
    return this.request<StartEmailAuthenticationResponse>('StartEmailAuthentication', payload)
  }

  startSMSAuthentication(payload: StartSMSAuthenticationRequest) {
    return this.request<StartSMSAuthenticationResponse>('StartSMSAuthentication', payload)
  }

  switchPersona(payload: SwitchPersonaRequest) {
    return this.request<SwitchPersonaResponse>('SwitchPersona', payload)
  }

  updateChatRoomTitle(payload: UpdateChatRoomTitleRequest) {
    return this.request<UpdateChatRoomTitleResponse>('UpdateChatRoomTitle', payload)
  }

  updateCommunity(payload: UpdateCommunityRequest) {
    return this.request<UpdateCommunityResponse>('UpdateCommunity', payload)
  }

  updateCommunityLastAccessTime(payload: UpdateCommunityLastAccessTimeRequest) {
    return this.request<UpdateCommunityLastAccessTimeResponse>('UpdateCommunityLastAccessTime', payload)
  }

  updateDisplayName(payload: UpdateDisplayNameRequest) {
    return this.request<UpdateDisplayNameResponse>('UpdateDisplayName', payload)
  }

  updateEventCommunity(payload: UpdateEventCommunityRequest) {
    return this.request<UpdateEventCommunityResponse>('UpdateEventCommunity', payload)
  }

  updateInAppEventDone(payload: UpdateInAppEventDoneRequest) {
    return this.request<UpdateInAppEventDoneResponse>('UpdateInAppEventDone', payload)
  }

  updateName(payload: UpdateNameRequest) {
    return this.request<UpdateNameResponse>('UpdateName', payload)
  }

  updateProfile(payload: UpdateProfileRequest) {
    return this.request<UpdateProfileResponse>('UpdateProfile', payload)
  }

  updateProfileSocialMedia(payload: UpdateProfileSocialMediaRequest) {
    return this.request<UpdateProfileSocialMediaResponse>('UpdateProfileSocialMedia', payload)
  }

  updateRemotePushSettings(payload: UpdateRemotePushSettingsRequest) {
    return this.request<UpdateRemotePushSettingsResponse>('UpdateRemotePushSettings', payload)
  }

  updateTimelineSetting(payload: UpdateTimelineSettingRequest) {
    return this.request<UpdateTimelineSettingResponse>('UpdateTimelineSetting', payload)
  }

  updateTopicCommunity(payload: UpdateTopicCommunityRequest) {
    return this.request<UpdateTopicCommunityResponse>('UpdateTopicCommunity', payload)
  }

  verifyEmailAuthentication(payload: VerifyEmailAuthenticationRequest) {
    return this.request<NewTokenResponse>('VerifyEmailAuthentication', payload)
  }

  verifyEmailSessionAuthentication(payload: VerifyEmailSessionAuthenticationRequest) {
    return this.request<VerifyEmailSessionAuthenticationResponse>('VerifyEmailSessionAuthentication', payload)
  }

  verifySMSAuthentication(payload: VerifySMSAuthenticationRequest) {
    return this.request<NewTokenResponse>('VerifySMSAuthentication', payload)
  }
}
