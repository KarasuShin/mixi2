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

  async request<T = any>(options: {
    rpcName: string
    inputMessageName: string
    outputMessageName: string
    payload?: any
  }) {
    let input: Uint8Array | undefined

    if (options.payload) {
      input = await encode(options.payload, options.inputMessageName)
    }

    const response = await this.http.request(`/${options.rpcName}`, input).then(res => res.bytes())

    return await decode<T>(response, options.outputMessageName)
  }

  acceptChatRoom(payload: AcceptChatRoomRequest) {
    return this.request<AcceptChatRoomResponse>({
      rpcName: 'AcceptChatRoom',
      inputMessageName: 'AcceptChatRoomRequest',
      outputMessageName: 'AcceptChatRoomResponse',
      payload,
    })
  }

  addMembersToChatRoom(payload: AddMembersToChatRoomRequest) {
    return this.request<AddMembersToChatRoomResponse>({
      rpcName: 'AddMembersToChatRoom',
      inputMessageName: 'AddMembersToChatRoomRequest',
      outputMessageName: 'AddMembersToChatRoomResponse',
      payload,
    })
  }

  addStampToPost(payload: AddStampToPostRequest) {
    return this.request<AddStampToPostResponse>({
      rpcName: 'AddStampToPost',
      inputMessageName: 'AddStampToPostRequest',
      outputMessageName: 'AddStampToPostResponse',
      payload,
    })
  }

  applyForVerification(payload: ApplyForVerificationRequest) {
    return this.request<ApplyForVerificationResponse>({
      rpcName: 'ApplyForVerification',
      inputMessageName: 'ApplyForVerificationRequest',
      outputMessageName: 'ApplyForVerificationResponse',
      payload,
    })
  }

  approveFollowingRequest(payload: ApproveFollowingRequestRequest) {
    return this.request<ApproveFollowingRequestResponse>({
      rpcName: 'ApproveFollowingRequest',
      inputMessageName: 'ApproveFollowingRequestRequest',
      outputMessageName: 'ApproveFollowingRequestResponse',
      payload,
    })
  }

  approveJoinCommunity(payload: ApproveJoinCommunityRequest) {
    return this.request<ApproveJoinCommunityResponse>({
      rpcName: 'ApproveJoinCommunity',
      inputMessageName: 'ApproveJoinCommunityRequest',
      outputMessageName: 'ApproveJoinCommunityResponse',
      payload,
    })
  }

  archiveCommunity(payload: ArchiveCommunityRequest) {
    return this.request<ArchiveCommunityResponse>({
      rpcName: 'ArchiveCommunity',
      inputMessageName: 'ArchiveCommunityRequest',
      outputMessageName: 'ArchiveCommunityResponse',
      payload,
    })
  }

  bookmarkCommunity(payload: BookmarkCommunityRequest) {
    return this.request<BookmarkCommunityResponse>({
      rpcName: 'BookmarkCommunity',
      inputMessageName: 'BookmarkCommunityRequest',
      outputMessageName: 'BookmarkCommunityResponse',
      payload,
    })
  }

  cancelFollowingRequest(payload: CancelFollowingRequestRequest) {
    return this.request<CancelFollowingRequestResponse>({
      rpcName: 'CancelFollowingRequest',
      inputMessageName: 'CancelFollowingRequestRequest',
      outputMessageName: 'CancelFollowingRequestResponse',
      payload,
    })
  }

  cancelJoinCommunityRequest(payload: CancelJoinCommunityRequestRequest) {
    return this.request<CancelJoinCommunityRequestResponse>({
      rpcName: 'CancelJoinCommunityRequest',
      inputMessageName: 'CancelJoinCommunityRequestRequest',
      outputMessageName: 'CancelJoinCommunityRequestResponse',
      payload,
    })
  }

  changeCommunityAdmins(payload: ChangeCommunityAdminsRequest) {
    return this.request<ChangeCommunityAdminsResponse>({
      rpcName: 'ChangeCommunityAdmins',
      inputMessageName: 'ChangeCommunityAdminsRequest',
      outputMessageName: 'ChangeCommunityAdminsResponse',
      payload,
    })
  }

  changeCommunityPostSubscriptionType(payload: ChangeCommunityPostSubscriptionTypeRequest) {
    return this.request<ChangeCommunityPostSubscriptionTypeResponse>({
      rpcName: 'ChangeCommunityPostSubscriptionType',
      inputMessageName: 'ChangeCommunityPostSubscriptionTypeRequest',
      outputMessageName: 'ChangeCommunityPostSubscriptionTypeResponse',
      payload,
    })
  }

  changeMyPersonaVisibility(payload: ChangeMyPersonaVisibilityRequest) {
    return this.request<ChangeMyPersonaVisibilityResponse>({
      rpcName: 'ChangeMyPersonaVisibility',
      inputMessageName: 'ChangeMyPersonaVisibilityRequest',
      outputMessageName: 'ChangeMyPersonaVisibilityResponse',
      payload,
    })
  }

  checkPendingPost(payload: CheckPendingPostRequest) {
    return this.request<CheckPendingPostResponse>({
      rpcName: 'CheckPendingPost',
      inputMessageName: 'CheckPendingPostRequest',
      outputMessageName: 'CheckPendingPostResponse',
      payload,
    })
  }

  closeEventCommunity(payload: CloseEventCommunityRequest) {
    return this.request<CloseEventCommunityResponse>({
      rpcName: 'CloseEventCommunity',
      inputMessageName: 'CloseEventCommunityRequest',
      outputMessageName: 'CloseEventCommunityResponse',
      payload,
    })
  }

  createBookmark(payload: CreateBookmarkRequest) {
    return this.request<CreateBookmarkResponse>({
      rpcName: 'CreateBookmark',
      inputMessageName: 'CreateBookmarkRequest',
      outputMessageName: 'CreateBookmarkResponse',
      payload,
    })
  }

  createChatRoom(payload: CreateChatRoomRequest) {
    return this.request<CreateChatRoomResponse>({
      rpcName: 'CreateChatRoom',
      inputMessageName: 'CreateChatRoomRequest',
      outputMessageName: 'CreateChatRoomResponse',
      payload,
    })
  }

  createCommunity(payload: CreateCommunityRequest) {
    return this.request<CreateCommunityResponse>({
      rpcName: 'CreateCommunity',
      inputMessageName: 'CreateCommunityRequest',
      outputMessageName: 'CreateCommunityResponse',
      payload,
    })
  }

  createEventCommunity(payload: CreateEventCommunityRequest) {
    return this.request<CreateEventCommunityResponse>({
      rpcName: 'CreateEventCommunity',
      inputMessageName: 'CreateEventCommunityRequest',
      outputMessageName: 'CreateEventCommunityResponse',
      payload,
    })
  }

  createFollowing(payload: CreateFollowingRequest) {
    return this.request<CreateFollowingResponse>({
      rpcName: 'CreateFollowing',
      inputMessageName: 'CreateFollowingRequest',
      outputMessageName: 'CreateFollowingResponse',
      payload,
    })
  }

  createLike(payload: CreateLikeRequest) {
    return this.request<CreateLikeResponse>({
      rpcName: 'CreateLike',
      inputMessageName: 'CreateLikeRequest',
      outputMessageName: 'CreateLikeResponse',
      payload,
    })
  }

  createPersona(payload: CreatePersonaRequest) {
    return this.request<NewTokenResponse>({
      rpcName: 'CreatePersona',
      inputMessageName: 'CreatePersonaRequest',
      outputMessageName: 'NewTokenResponse',
      payload,
    })
  }

  createPersonaFromSession(payload: CreatePersonaFromSessionRequest) {
    return this.request<SessionResponse>({
      rpcName: 'CreatePersonaFromSession',
      inputMessageName: 'CreatePersonaFromSessionRequest',
      outputMessageName: 'SessionResponse',
      payload,
    })
  }

  createPost(payload: CreatePostRequest) {
    return this.request<CreatePostResponse>({
      rpcName: 'CreatePost',
      inputMessageName: 'CreatePostRequest',
      outputMessageName: 'CreatePostResponse',
      payload,
    })
  }

  createPostAndEventCommunity(payload: CreatePostAndEventCommunityRequest) {
    return this.request<CreatePostAndEventCommunityResponse>({
      rpcName: 'CreatePostAndEventCommunity',
      inputMessageName: 'CreatePostAndEventCommunityRequest',
      outputMessageName: 'CreatePostAndEventCommunityResponse',
      payload,
    })
  }

  createTopicCommunity(payload: CreateTopicCommunityRequest) {
    return this.request<CreateTopicCommunityResponse>({
      rpcName: 'CreateTopicCommunity',
      inputMessageName: 'CreateTopicCommunityRequest',
      outputMessageName: 'CreateTopicCommunityResponse',
      payload,
    })
  }

  deleteAccount(payload: DeleteAccountRequest) {
    return this.request<DeleteAccountResponse>({
      rpcName: 'DeleteAccount',
      inputMessageName: 'DeleteAccountRequest',
      outputMessageName: 'DeleteAccountResponse',
      payload,
    })
  }

  deleteBookmark(payload: DeleteBookmarkRequest) {
    return this.request<DeleteBookmarkResponse>({
      rpcName: 'DeleteBookmark',
      inputMessageName: 'DeleteBookmarkRequest',
      outputMessageName: 'DeleteBookmarkResponse',
      payload,
    })
  }

  deleteCommunityStamp(payload: DeleteCommunityStampRequest) {
    return this.request<DeleteCommunityStampResponse>({
      rpcName: 'DeleteCommunityStamp',
      inputMessageName: 'DeleteCommunityStampRequest',
      outputMessageName: 'DeleteCommunityStampResponse',
      payload,
    })
  }

  deleteExcludedCommunityMember(payload: DeleteExcludedCommunityMemberRequest) {
    return this.request<DeleteExcludedCommunityMemberResponse>({
      rpcName: 'DeleteExcludedCommunityMember',
      inputMessageName: 'DeleteExcludedCommunityMemberRequest',
      outputMessageName: 'DeleteExcludedCommunityMemberResponse',
      payload,
    })
  }

  deleteExcludedCommunityMembers(payload: DeleteExcludedCommunityMembersRequest) {
    return this.request<DeleteExcludedCommunityMembersResponse>({
      rpcName: 'DeleteExcludedCommunityMembers',
      inputMessageName: 'DeleteExcludedCommunityMembersRequest',
      outputMessageName: 'DeleteExcludedCommunityMembersResponse',
      payload,
    })
  }

  deleteFCMToken(payload: DeleteFCMTokenRequest) {
    return this.request<DeleteFCMTokenResponse>({
      rpcName: 'DeleteFCMToken',
      inputMessageName: 'DeleteFCMTokenRequest',
      outputMessageName: 'DeleteFCMTokenResponse',
      payload,
    })
  }

  deleteFollowing(payload: DeleteFollowingRequest) {
    return this.request<DeleteFollowingResponse>({
      rpcName: 'DeleteFollowing',
      inputMessageName: 'DeleteFollowingRequest',
      outputMessageName: 'DeleteFollowingResponse',
      payload,
    })
  }

  deleteLike(payload: DeleteLikeRequest) {
    return this.request<DeleteLikeResponse>({
      rpcName: 'DeleteLike',
      inputMessageName: 'DeleteLikeRequest',
      outputMessageName: 'DeleteLikeResponse',
      payload,
    })
  }

  deletePost(payload: DeletePostRequest) {
    return this.request<DeletePostResponse>({
      rpcName: 'DeletePost',
      inputMessageName: 'DeletePostRequest',
      outputMessageName: 'DeletePostResponse',
      payload,
    })
  }

  deleteRepost(payload: DeleteRepostRequest) {
    return this.request<DeleteRepostResponse>({
      rpcName: 'DeleteRepost',
      inputMessageName: 'DeleteRepostRequest',
      outputMessageName: 'DeleteRepostResponse',
      payload,
    })
  }

  deleteSession(payload: DeleteSessionRequest) {
    return this.request<DeleteSessionResponse>({
      rpcName: 'DeleteSession',
      inputMessageName: 'DeleteSessionRequest',
      outputMessageName: 'DeleteSessionResponse',
      payload,
    })
  }

  denyJoinCommunity(payload: DenyJoinCommunityRequest) {
    return this.request<DenyJoinCommunityResponse>({
      rpcName: 'DenyJoinCommunity',
      inputMessageName: 'DenyJoinCommunityRequest',
      outputMessageName: 'DenyJoinCommunityResponse',
      payload,
    })
  }

  excludeCommunityMember(payload: ExcludeCommunityMemberRequest) {
    return this.request<ExcludeCommunityMemberResponse>({
      rpcName: 'ExcludeCommunityMember',
      inputMessageName: 'ExcludeCommunityMemberRequest',
      outputMessageName: 'ExcludeCommunityMemberResponse',
      payload,
    })
  }

  excludeCommunityMembers(payload: ExcludeCommunityMembersRequest) {
    return this.request<ExcludeCommunityMembersResponse>({
      rpcName: 'ExcludeCommunityMembers',
      inputMessageName: 'ExcludeCommunityMembersRequest',
      outputMessageName: 'ExcludeCommunityMembersResponse',
      payload,
    })
  }

  exitChatRoom(payload: ExitChatRoomRequest) {
    return this.request<ExitChatRoomResponse>({
      rpcName: 'ExitChatRoom',
      inputMessageName: 'ExitChatRoomRequest',
      outputMessageName: 'ExitChatRoomResponse',
      payload,
    })
  }

  getAnnouncements(payload: GetAnnouncementsRequest) {
    return this.request<GetAnnouncementsResponse>({
      rpcName: 'GetAnnouncements',
      inputMessageName: 'GetAnnouncementsRequest',
      outputMessageName: 'GetAnnouncementsResponse',
      payload,
    })
  }

  getBadgeCount(payload: GetBadgeCountRequest) {
    return this.request<GetBadgeCountResponse>({
      rpcName: 'GetBadgeCount',
      inputMessageName: 'GetBadgeCountRequest',
      outputMessageName: 'GetBadgeCountResponse',
      payload,
    })
  }

  getBlockingMembersInCommunity(payload: GetBlockingMembersInCommunityRequest) {
    return this.request<GetBlockingMembersInCommunityResponse>({
      rpcName: 'GetBlockingMembersInCommunity',
      inputMessageName: 'GetBlockingMembersInCommunityRequest',
      outputMessageName: 'GetBlockingMembersInCommunityResponse',
      payload,
    })
  }

  getBlockPersonas(payload: GetBlockPersonasRequest) {
    return this.request<GetBlockPersonasResponse>({
      rpcName: 'GetBlockPersonas',
      inputMessageName: 'GetBlockPersonasRequest',
      outputMessageName: 'GetBlockPersonasResponse',
      payload,
    })
  }

  getChatRoom(payload: GetChatRoomRequest) {
    return this.request<GetChatRoomResponse>({
      rpcName: 'GetChatRoom',
      inputMessageName: 'GetChatRoomRequest',
      outputMessageName: 'GetChatRoomResponse',
      payload,
    })
  }

  getChatRoomMessages(payload: GetChatRoomMessagesRequest) {
    return this.request<GetChatRoomMessagesResponse>({
      rpcName: 'GetChatRoomMessages',
      inputMessageName: 'GetChatRoomMessagesRequest',
      outputMessageName: 'GetChatRoomMessagesResponse',
      payload,
    })
  }

  getChatRooms(payload: GetChatRoomsRequest) {
    return this.request<GetChatRoomsResponse>({
      rpcName: 'GetChatRooms',
      inputMessageName: 'GetChatRoomsRequest',
      outputMessageName: 'GetChatRoomsResponse',
      payload,
    })
  }

  getCommunities(payload: GetCommunitiesRequest) {
    return this.request<GetCommunitiesResponse>({
      rpcName: 'GetCommunities',
      inputMessageName: 'GetCommunitiesRequest',
      outputMessageName: 'GetCommunitiesResponse',
      payload,
    })
  }

  getCommunitiesPostNotifications(payload: GetCommunitiesPostNotificationsRequest) {
    return this.request<GetCommunitiesPostNotificationsResponse>({
      rpcName: 'GetCommunitiesPostNotifications',
      inputMessageName: 'GetCommunitiesPostNotificationsRequest',
      outputMessageName: 'GetCommunitiesPostNotificationsResponse',
      payload,
    })
  }

  getCommunity(payload: GetCommunityRequest) {
    return this.request<GetCommunityResponse>({
      rpcName: 'GetCommunity',
      inputMessageName: 'GetCommunityRequest',
      outputMessageName: 'GetCommunityResponse',
      payload,
    })
  }

  getCommunityBookmarks(payload: GetCommunityBookmarksRequest) {
    return this.request<GetCommunityBookmarksResponse>({
      rpcName: 'GetCommunityBookmarks',
      inputMessageName: 'GetCommunityBookmarksRequest',
      outputMessageName: 'GetCommunityBookmarksResponse',
      payload,
    })
  }

  getCommunityInvitablePersonas(payload: GetCommunityInvitablePersonasRequest) {
    return this.request<GetCommunityInvitablePersonasResponse>({
      rpcName: 'GetCommunityInvitablePersonas',
      inputMessageName: 'GetCommunityInvitablePersonasRequest',
      outputMessageName: 'GetCommunityInvitablePersonasResponse',
      payload,
    })
  }

  getCommunityInvitation(payload: GetCommunityInvitationRequest) {
    return this.request<GetCommunityInvitationResponse>({
      rpcName: 'GetCommunityInvitation',
      inputMessageName: 'GetCommunityInvitationRequest',
      outputMessageName: 'GetCommunityInvitationResponse',
      payload,
    })
  }

  getCommunityInvitationCode(payload: GetCommunityInvitationCodeRequest) {
    return this.request<GetCommunityInvitationCodeResponse>({
      rpcName: 'GetCommunityInvitationCode',
      inputMessageName: 'GetCommunityInvitationCodeRequest',
      outputMessageName: 'GetCommunityInvitationCodeResponse',
      payload,
    })
  }

  getCommunityJoinRequests(payload: GetCommunityJoinRequestsRequest) {
    return this.request<GetCommunityJoinRequestsResponse>({
      rpcName: 'GetCommunityJoinRequests',
      inputMessageName: 'GetCommunityJoinRequestsRequest',
      outputMessageName: 'GetCommunityJoinRequestsResponse',
      payload,
    })
  }

  getCommunityPostPin(payload: GetCommunityPostPinRequest) {
    return this.request<GetCommunityPostPinResponse>({
      rpcName: 'GetCommunityPostPin',
      inputMessageName: 'GetCommunityPostPinRequest',
      outputMessageName: 'GetCommunityPostPinResponse',
      payload,
    })
  }

  getCommunityStamps(payload: GetCommunityStampsRequest) {
    return this.request<GetCommunityStampsResponse>({
      rpcName: 'GetCommunityStamps',
      inputMessageName: 'GetCommunityStampsRequest',
      outputMessageName: 'GetCommunityStampsResponse',
      payload,
    })
  }

  getCommunityTimeline(payload: GetCommunityTimelineRequest) {
    return this.request<GetTimelineResponse>({
      rpcName: 'GetCommunityTimeline',
      inputMessageName: 'GetCommunityTimelineRequest',
      outputMessageName: 'GetTimelineResponse',
      payload,
    })
  }

  getCompletedOrClosedEventCommunities(payload: GetCompletedOrClosedEventCommunitiesRequest) {
    return this.request<GetCompletedOrClosedEventCommunitiesResponse>({
      rpcName: 'GetCompletedOrClosedEventCommunities',
      inputMessageName: 'GetCompletedOrClosedEventCommunitiesRequest',
      outputMessageName: 'GetCompletedOrClosedEventCommunitiesResponse',
      payload,
    })
  }

  getEventCommunitiesWithinCommunity(payload: GetEventCommunitiesWithinCommunityRequest) {
    return this.request<GetEventCommunitiesWithinCommunityResponse>({
      rpcName: 'GetEventCommunitiesWithinCommunity',
      inputMessageName: 'GetEventCommunitiesWithinCommunityRequest',
      outputMessageName: 'GetEventCommunitiesWithinCommunityResponse',
      payload,
    })
  }

  getExclusiveCommunityMembers(payload: GetExclusiveCommunityMembersRequest) {
    return this.request<GetExclusiveCommunityMembersResponse>({
      rpcName: 'GetExclusiveCommunityMembers',
      inputMessageName: 'GetExclusiveCommunityMembersRequest',
      outputMessageName: 'GetExclusiveCommunityMembersResponse',
      payload,
    })
  }

  getFeatureFlags(payload: GetFeatureFlagsRequest) {
    return this.request<GetFeatureFlagsResponse>({
      rpcName: 'GetFeatureFlags',
      inputMessageName: 'GetFeatureFlagsRequest',
      outputMessageName: 'GetFeatureFlagsResponse',
      payload,
    })
  }

  getFollowers(payload: GetFollowersRequest) {
    return this.request<GetFollowersResponse>({
      rpcName: 'GetFollowers',
      inputMessageName: 'GetFollowersRequest',
      outputMessageName: 'GetFollowersResponse',
      payload,
    })
  }

  getFollowingCount(payload: GetFollowingCountRequest) {
    return this.request<GetFollowingCountResponse>({
      rpcName: 'GetFollowingCount',
      inputMessageName: 'GetFollowingCountRequest',
      outputMessageName: 'GetFollowingCountResponse',
      payload,
    })
  }

  getFollowingRequests(payload: GetFollowingRequestsRequest) {
    return this.request<GetFollowingRequestsResponse>({
      rpcName: 'GetFollowingRequests',
      inputMessageName: 'GetFollowingRequestsRequest',
      outputMessageName: 'GetFollowingRequestsResponse',
      payload,
    })
  }

  getFollowings(payload: GetFollowingsRequest) {
    return this.request<GetFollowingsResponse>({
      rpcName: 'GetFollowings',
      inputMessageName: 'GetFollowingsRequest',
      outputMessageName: 'GetFollowingsResponse',
      payload,
    })
  }

  getFollowingsTimeline(payload: GetFollowingsTimelineRequest) {
    return this.request<GetTimelineResponse>({
      rpcName: 'GetFollowingsTimeline',
      inputMessageName: 'GetFollowingsTimelineRequest',
      outputMessageName: 'GetTimelineResponse',
      payload,
    })
  }

  getGlobalCount(payload: GetGlobalCountRequest) {
    return this.request<GetGlobalCountResponse>({
      rpcName: 'GetGlobalCount',
      inputMessageName: 'GetGlobalCountRequest',
      outputMessageName: 'GetGlobalCountResponse',
      payload,
    })
  }

  getHashtagTimeline(payload: GetHashtagTimelineRequest) {
    return this.request<GetTimelineResponse>({
      rpcName: 'GetHashtagTimeline',
      inputMessageName: 'GetHashtagTimelineRequest',
      outputMessageName: 'GetTimelineResponse',
      payload,
    })
  }

  getInAppEventStatus(payload: GetInAppEventStatusRequest) {
    return this.request<GetInAppEventStatusResponse>({
      rpcName: 'GetInAppEventStatus',
      inputMessageName: 'GetInAppEventStatusRequest',
      outputMessageName: 'GetInAppEventStatusResponse',
      payload,
    })
  }

  getInAppEventStatusAll(payload: GetInAppEventStatusAllRequest) {
    return this.request<GetInAppEventStatusAllResponse>({
      rpcName: 'GetInAppEventStatusAll',
      inputMessageName: 'GetInAppEventStatusAllRequest',
      outputMessageName: 'GetInAppEventStatusAllResponse',
      payload,
    })
  }

  getInvitation(payload: GetInvitationRequest) {
    return this.request<GetInvitationResponse>({
      rpcName: 'GetInvitation',
      inputMessageName: 'GetInvitationRequest',
      outputMessageName: 'GetInvitationResponse',
      payload,
    })
  }

  getInvitationCode(payload: GetInvitationCodeRequest) {
    return this.request<GetInvitationCodeResponse>({
      rpcName: 'GetInvitationCode',
      inputMessageName: 'GetInvitationCodeRequest',
      outputMessageName: 'GetInvitationCodeResponse',
      payload,
    })
  }

  getLatestRenameLog(payload: GetLatestRenameLogRequest) {
    return this.request<GetLatestRenameLogResponse>({
      rpcName: 'GetLatestRenameLog',
      inputMessageName: 'GetLatestRenameLogRequest',
      outputMessageName: 'GetLatestRenameLogResponse',
      payload,
    })
  }

  getLikingPersonas(payload: GetLikingPersonasRequest) {
    return this.request<GetLikingPersonasResponse>({
      rpcName: 'GetLikingPersonas',
      inputMessageName: 'GetLikingPersonasRequest',
      outputMessageName: 'GetLikingPersonasResponse',
      payload,
    })
  }

  getLimitedTimeCampaign(payload: GetLimitedTimeCampaignRequest) {
    return this.request<GetLimitedTimeCampaignResponse>({
      rpcName: 'GetLimitedTimeCampaign',
      inputMessageName: 'GetLimitedTimeCampaignRequest',
      outputMessageName: 'GetLimitedTimeCampaignResponse',
      payload,
    })
  }

  getMedia(payload: GetMediaRequest) {
    return this.request<GetMediaResponse>({
      rpcName: 'GetMedia',
      inputMessageName: 'GetMediaRequest',
      outputMessageName: 'GetMediaResponse',
      payload,
    })
  }

  getMuteChatRooms(payload: GetMuteChatRoomsRequest) {
    return this.request<GetMuteChatRoomsResponse>({
      rpcName: 'GetMuteChatRooms',
      inputMessageName: 'GetMuteChatRoomsRequest',
      outputMessageName: 'GetMuteChatRoomsResponse',
      payload,
    })
  }

  getMutePersonas(payload: GetMutePersonasRequest) {
    return this.request<GetMutePersonasResponse>({
      rpcName: 'GetMutePersonas',
      inputMessageName: 'GetMutePersonasRequest',
      outputMessageName: 'GetMutePersonasResponse',
      payload,
    })
  }

  getNotifications(payload: GetNotificationsRequest) {
    return this.request<GetNotificationsResponse>({
      rpcName: 'GetNotifications',
      inputMessageName: 'GetNotificationsRequest',
      outputMessageName: 'GetNotificationsResponse',
      payload,
    })
  }

  getOngoingEventCommunities(payload: GetOngoingEventCommunitiesRequest) {
    return this.request<GetOngoingEventCommunitiesResponse>({
      rpcName: 'GetOngoingEventCommunities',
      inputMessageName: 'GetOngoingEventCommunitiesRequest',
      outputMessageName: 'GetOngoingEventCommunitiesResponse',
      payload,
    })
  }

  getOngoingOrUpcomingEventCommunities(payload: GetOngoingOrUpcomingEventCommunitiesRequest) {
    return this.request<GetOngoingOrUpcomingEventCommunitiesResponse>({
      rpcName: 'GetOngoingOrUpcomingEventCommunities',
      inputMessageName: 'GetOngoingOrUpcomingEventCommunitiesRequest',
      outputMessageName: 'GetOngoingOrUpcomingEventCommunitiesResponse',
      payload,
    })
  }

  getParticipatingCommunities(payload: GetParticipatingCommunitiesRequest) {
    return this.request<GetParticipatingCommunitiesResponse>({
      rpcName: 'GetParticipatingCommunities',
      inputMessageName: 'GetParticipatingCommunitiesRequest',
      outputMessageName: 'GetParticipatingCommunitiesResponse',
      payload,
    })
  }

  getParticipatingCommunityMembers(payload: GetParticipatingCommunityMembersRequest) {
    return this.request<GetParticipatingCommunityMembersResponse>({
      rpcName: 'GetParticipatingCommunityMembers',
      inputMessageName: 'GetParticipatingCommunityMembersRequest',
      outputMessageName: 'GetParticipatingCommunityMembersResponse',
      payload,
    })
  }

  getPastOrClosedEventCommunities(payload: GetPastOrClosedEventCommunitiesRequest) {
    return this.request<GetPastOrClosedEventCommunitiesResponse>({
      rpcName: 'GetPastOrClosedEventCommunities',
      inputMessageName: 'GetPastOrClosedEventCommunitiesRequest',
      outputMessageName: 'GetPastOrClosedEventCommunitiesResponse',
      payload,
    })
  }

  getPendingFollowingRequests(payload: GetPendingFollowingRequestsRequest) {
    return this.request<GetPendingFollowingRequestsResponse>({
      rpcName: 'GetPendingFollowingRequests',
      inputMessageName: 'GetPendingFollowingRequestsRequest',
      outputMessageName: 'GetPendingFollowingRequestsResponse',
      payload,
    })
  }

  getPendingVerificationSocialMedia(payload: GetPendingVerificationSocialMediaRequest) {
    return this.request<GetPendingVerificationSocialMediaResponse>({
      rpcName: 'GetPendingVerificationSocialMedia',
      inputMessageName: 'GetPendingVerificationSocialMediaRequest',
      outputMessageName: 'GetPendingVerificationSocialMediaResponse',
      payload,
    })
  }

  getPersonaByName(payload: GetPersonaByNameRequest) {
    return this.request<GetPersonaResponse>({
      rpcName: 'GetPersonaByName',
      inputMessageName: 'GetPersonaByNameRequest',
      outputMessageName: 'GetPersonaResponse',
      payload,
    })
  }

  getPersonalCommunityPosts(payload: GetPersonalCommunityPostsRequest) {
    return this.request<GetTimelineResponse>({
      rpcName: 'GetPersonalCommunityPosts',
      inputMessageName: 'GetPersonalCommunityPostsRequest',
      outputMessageName: 'GetTimelineResponse',
      payload,
    })
  }

  getPersonalInformation(payload: GetPersonalInformationRequest) {
    return this.request<GetPersonalInformationResponse>({
      rpcName: 'GetPersonalInformation',
      inputMessageName: 'GetPersonalInformationRequest',
      outputMessageName: 'GetPersonalInformationResponse',
      payload,
    })
  }

  getPersonalTimeline(payload: GetPersonalTimelineRequest) {
    return this.request<GetTimelineResponse>({
      rpcName: 'GetPersonalTimeline',
      inputMessageName: 'GetPersonalTimelineRequest',
      outputMessageName: 'GetTimelineResponse',
      payload,
    })
  }

  getPersonas(payload: GetPersonasRequest) {
    return this.request<GetPersonasResponse>({
      rpcName: 'GetPersonas',
      inputMessageName: 'GetPersonasRequest',
      outputMessageName: 'GetPersonasResponse',
      payload,
    })
  }

  getPersonasPostNotifications(payload: GetPersonasPostNotificationsRequest) {
    return this.request<GetPersonasPostNotificationsResponse>({
      rpcName: 'GetPersonasPostNotifications',
      inputMessageName: 'GetPersonasPostNotificationsRequest',
      outputMessageName: 'GetPersonasPostNotificationsResponse',
      payload,
    })
  }

  getPost(payload: GetPostRequest) {
    return this.request<GetPostResponse>({
      rpcName: 'GetPost',
      inputMessageName: 'GetPostRequest',
      outputMessageName: 'GetPostResponse',
      payload,
    })
  }

  getPostableCommunities(payload: GetPostableCommunitiesRequest) {
    return this.request<GetPostableCommunitiesResponse>({
      rpcName: 'GetPostableCommunities',
      inputMessageName: 'GetPostableCommunitiesRequest',
      outputMessageName: 'GetPostableCommunitiesResponse',
      payload,
    })
  }

  getPosts(payload: GetPostsRequest) {
    return this.request<GetPostsResponse>({
      rpcName: 'GetPosts',
      inputMessageName: 'GetPostsRequest',
      outputMessageName: 'GetPostsResponse',
      payload,
    })
  }

  getPostStampReactions(payload: GetPostStampReactionsRequest) {
    return this.request<GetPostStampReactionsResponse>({
      rpcName: 'GetPostStampReactions',
      inputMessageName: 'GetPostStampReactionsRequest',
      outputMessageName: 'GetPostStampReactionsResponse',
      payload,
    })
  }

  getProfile(payload: GetProfileRequest) {
    return this.request<GetProfileResponse>({
      rpcName: 'GetProfile',
      inputMessageName: 'GetProfileRequest',
      outputMessageName: 'GetProfileResponse',
      payload,
    })
  }

  getProfileByName(payload: GetProfileByNameRequest) {
    return this.request<GetProfileResponse>({
      rpcName: 'GetProfileByName',
      inputMessageName: 'GetProfileByNameRequest',
      outputMessageName: 'GetProfileResponse',
      payload,
    })
  }

  getProfilePostPin(payload: GetProfilePostPinRequest) {
    return this.request<GetProfilePostPinResponse>({
      rpcName: 'GetProfilePostPin',
      inputMessageName: 'GetProfilePostPinRequest',
      outputMessageName: 'GetProfilePostPinResponse',
      payload,
    })
  }

  getQuotePosts(payload: GetQuotePostsRequest) {
    return this.request<GetQuotePostsResponse>({
      rpcName: 'GetQuotePosts',
      inputMessageName: 'GetQuotePostsRequest',
      outputMessageName: 'GetQuotePostsResponse',
      payload,
    })
  }

  getReactionPosts(payload: GetReactionPostsRequest) {
    return this.request<GetReactionPostsResponse>({
      rpcName: 'GetReactionPosts',
      inputMessageName: 'GetReactionPostsRequest',
      outputMessageName: 'GetReactionPostsResponse',
      payload,
    })
  }

  getRecommendations(payload: GetRecommendationsRequest) {
    return this.request<GetRecommendationsResponse>({
      rpcName: 'GetRecommendations',
      inputMessageName: 'GetRecommendationsRequest',
      outputMessageName: 'GetRecommendationsResponse',
      payload,
    })
  }

  getRecommendedCommunities(payload: GetRecommendedCommunitiesRequest) {
    return this.request<GetRecommendedCommunitiesResponse>({
      rpcName: 'GetRecommendedCommunities',
      inputMessageName: 'GetRecommendedCommunitiesRequest',
      outputMessageName: 'GetRecommendedCommunitiesResponse',
      payload,
    })
  }

  getRecommendedTimeline(payload: GetRecommendedTimelineRequest) {
    return this.request<GetTimelineResponse>({
      rpcName: 'GetRecommendedTimeline',
      inputMessageName: 'GetRecommendedTimelineRequest',
      outputMessageName: 'GetTimelineResponse',
      payload,
    })
  }

  getRemoteConfig(payload: GetRemoteConfigRequest) {
    return this.request<GetRemoteConfigResponse>({
      rpcName: 'GetRemoteConfig',
      inputMessageName: 'GetRemoteConfigRequest',
      outputMessageName: 'GetRemoteConfigResponse',
      payload,
    })
  }

  getRemotePushSettings(payload: GetRemotePushSettingsRequest) {
    return this.request<GetRemotePushSettingsResponse>({
      rpcName: 'GetRemotePushSettings',
      inputMessageName: 'GetRemotePushSettingsRequest',
      outputMessageName: 'GetRemotePushSettingsResponse',
      payload,
    })
  }

  getReplies(payload: GetRepliesRequest) {
    return this.request<GetRepliesResponse>({
      rpcName: 'GetReplies',
      inputMessageName: 'GetRepliesRequest',
      outputMessageName: 'GetRepliesResponse',
      payload,
    })
  }

  getReplyAncestors(payload: GetReplyAncestorsRequest) {
    return this.request<GetReplyAncestorsResponse>({
      rpcName: 'GetReplyAncestors',
      inputMessageName: 'GetReplyAncestorsRequest',
      outputMessageName: 'GetReplyAncestorsResponse',
      payload,
    })
  }

  getRepostingPersonas(payload: GetRepostingPersonasRequest) {
    return this.request<GetRepostingPersonasResponse>({
      rpcName: 'GetRepostingPersonas',
      inputMessageName: 'GetRepostingPersonasRequest',
      outputMessageName: 'GetRepostingPersonasResponse',
      payload,
    })
  }

  getRequestedChatRooms(payload: GetRequestedChatRoomsRequest) {
    return this.request<GetRequestedChatRoomsResponse>({
      rpcName: 'GetRequestedChatRooms',
      inputMessageName: 'GetRequestedChatRoomsRequest',
      outputMessageName: 'GetRequestedChatRoomsResponse',
      payload,
    })
  }

  getSession(payload: GetSessionRequest) {
    return this.request<SessionResponse>({
      rpcName: 'GetSession',
      inputMessageName: 'GetSessionRequest',
      outputMessageName: 'SessionResponse',
      payload,
    })
  }

  getStamps(payload: GetStampsRequest) {
    return this.request<GetStampsResponse>({
      rpcName: 'GetStamps',
      inputMessageName: 'GetStampsRequest',
      outputMessageName: 'GetStampsResponse',
      payload,
    })
  }

  getStorageRateLimit(payload: GetStorageRateLimitRequest) {
    return this.request<GetStorageRateLimitResponse>({
      rpcName: 'GetStorageRateLimit',
      inputMessageName: 'GetStorageRateLimitRequest',
      outputMessageName: 'GetStorageRateLimitResponse',
      payload,
    })
  }

  getSubscribingFeeds(payload: GetSubscribingFeedsRequest) {
    return this.request<GetSubscribingFeedsResponse>({
      rpcName: 'GetSubscribingFeeds',
      inputMessageName: 'GetSubscribingFeedsRequest',
      outputMessageName: 'GetSubscribingFeedsResponse',
      payload,
    })
  }

  getThreadPosts(payload: GetThreadPostsRequest) {
    return this.request<GetTimelineResponse>({
      rpcName: 'GetThreadPosts',
      inputMessageName: 'GetThreadPostsRequest',
      outputMessageName: 'GetTimelineResponse',
      payload,
    })
  }

  getTimelineSetting(payload: GetTimelineSettingRequest) {
    return this.request<GetTimelineSettingResponse>({
      rpcName: 'GetTimelineSetting',
      inputMessageName: 'GetTimelineSettingRequest',
      outputMessageName: 'GetTimelineSettingResponse',
      payload,
    })
  }

  getUnreadChatRoomCount(payload: GetUnreadChatRoomCountRequest) {
    return this.request<GetUnreadChatRoomCountResponse>({
      rpcName: 'GetUnreadChatRoomCount',
      inputMessageName: 'GetUnreadChatRoomCountRequest',
      outputMessageName: 'GetUnreadChatRoomCountResponse',
      payload,
    })
  }

  getUpcomingEventCommunities(payload: GetUpcomingEventCommunitiesRequest) {
    return this.request<GetUpcomingEventCommunitiesResponse>({
      rpcName: 'GetUpcomingEventCommunities',
      inputMessageName: 'GetUpcomingEventCommunitiesRequest',
      outputMessageName: 'GetUpcomingEventCommunitiesResponse',
      payload,
    })
  }

  getWaitingCommunities(payload: GetWaitingCommunitiesRequest) {
    return this.request<GetWaitingCommunitiesResponse>({
      rpcName: 'GetWaitingCommunities',
      inputMessageName: 'GetWaitingCommunitiesRequest',
      outputMessageName: 'GetWaitingCommunitiesResponse',
      payload,
    })
  }

  incrementGlobalCount(payload: IncrementGlobalCountRequest) {
    return this.request<IncrementGlobalCountResponse>({
      rpcName: 'IncrementGlobalCount',
      inputMessageName: 'IncrementGlobalCountRequest',
      outputMessageName: 'IncrementGlobalCountResponse',
      payload,
    })
  }

  joinCommunity(payload: JoinCommunityRequest) {
    return this.request<JoinCommunityResponse>({
      rpcName: 'JoinCommunity',
      inputMessageName: 'JoinCommunityRequest',
      outputMessageName: 'JoinCommunityResponse',
      payload,
    })
  }

  leaveCommunity(payload: LeaveCommunityRequest) {
    return this.request<LeaveCommunityResponse>({
      rpcName: 'LeaveCommunity',
      inputMessageName: 'LeaveCommunityRequest',
      outputMessageName: 'LeaveCommunityResponse',
      payload,
    })
  }

  makeChatRoomInvisible(payload: MakeChatRoomInvisibleRequest) {
    return this.request<MakeChatRoomInvisibleResponse>({
      rpcName: 'MakeChatRoomInvisible',
      inputMessageName: 'MakeChatRoomInvisibleRequest',
      outputMessageName: 'MakeChatRoomInvisibleResponse',
      payload,
    })
  }

  makeChatRoomMute(payload: MakeChatRoomMuteRequest) {
    return this.request<MakeChatRoomMuteResponse>({
      rpcName: 'MakeChatRoomMute',
      inputMessageName: 'MakeChatRoomMuteRequest',
      outputMessageName: 'MakeChatRoomMuteResponse',
      payload,
    })
  }

  makeChatRoomUnmute(payload: MakeChatRoomUnmuteRequest) {
    return this.request<MakeChatRoomUnmuteResponse>({
      rpcName: 'MakeChatRoomUnmute',
      inputMessageName: 'MakeChatRoomUnmuteRequest',
      outputMessageName: 'MakeChatRoomUnmuteResponse',
      payload,
    })
  }

  makeCommunityPostNotificationDisabled(payload: MakeCommunityPostNotificationDisabledRequest) {
    return this.request<MakeCommunityPostNotificationDisabledResponse>({
      rpcName: 'MakeCommunityPostNotificationDisabled',
      inputMessageName: 'MakeCommunityPostNotificationDisabledRequest',
      outputMessageName: 'MakeCommunityPostNotificationDisabledResponse',
      payload,
    })
  }

  makeCommunityPostNotificationEnabled(payload: MakeCommunityPostNotificationEnabledRequest) {
    return this.request<MakeCommunityPostNotificationEnabledResponse>({
      rpcName: 'MakeCommunityPostNotificationEnabled',
      inputMessageName: 'MakeCommunityPostNotificationEnabledRequest',
      outputMessageName: 'MakeCommunityPostNotificationEnabledResponse',
      payload,
    })
  }

  makeCommunitySubscriptionDisabled(payload: MakeCommunitySubscriptionDisabledRequest) {
    return this.request<MakeCommunitySubscriptionDisabledResponse>({
      rpcName: 'MakeCommunitySubscriptionDisabled',
      inputMessageName: 'MakeCommunitySubscriptionDisabledRequest',
      outputMessageName: 'MakeCommunitySubscriptionDisabledResponse',
      payload,
    })
  }

  makeCommunitySubscriptionEnabled(payload: MakeCommunitySubscriptionEnabledRequest) {
    return this.request<MakeCommunitySubscriptionEnabledResponse>({
      rpcName: 'MakeCommunitySubscriptionEnabled',
      inputMessageName: 'MakeCommunitySubscriptionEnabledRequest',
      outputMessageName: 'MakeCommunitySubscriptionEnabledResponse',
      payload,
    })
  }

  makePersonaBlock(payload: MakePersonaBlockRequest) {
    return this.request<MakePersonaBlockResponse>({
      rpcName: 'MakePersonaBlock',
      inputMessageName: 'MakePersonaBlockRequest',
      outputMessageName: 'MakePersonaBlockResponse',
      payload,
    })
  }

  makePersonaMute(payload: MakePersonaMuteRequest) {
    return this.request<MakePersonaMuteResponse>({
      rpcName: 'MakePersonaMute',
      inputMessageName: 'MakePersonaMuteRequest',
      outputMessageName: 'MakePersonaMuteResponse',
      payload,
    })
  }

  makePersonaPostNotificationDisabled(payload: MakePersonaPostNotificationDisabledRequest) {
    return this.request<MakePersonaPostNotificationDisabledResponse>({
      rpcName: 'MakePersonaPostNotificationDisabled',
      inputMessageName: 'MakePersonaPostNotificationDisabledRequest',
      outputMessageName: 'MakePersonaPostNotificationDisabledResponse',
      payload,
    })
  }

  makePersonaPostNotificationEnabled(payload: MakePersonaPostNotificationEnabledRequest) {
    return this.request<MakePersonaPostNotificationEnabledResponse>({
      rpcName: 'MakePersonaPostNotificationEnabled',
      inputMessageName: 'MakePersonaPostNotificationEnabledRequest',
      outputMessageName: 'MakePersonaPostNotificationEnabledResponse',
      payload,
    })
  }

  makePersonaUnblock(payload: MakePersonaUnblockRequest) {
    return this.request<MakePersonaUnblockResponse>({
      rpcName: 'MakePersonaUnblock',
      inputMessageName: 'MakePersonaUnblockRequest',
      outputMessageName: 'MakePersonaUnblockResponse',
      payload,
    })
  }

  makePersonaUnmute(payload: MakePersonaUnmuteRequest) {
    return this.request<MakePersonaUnmuteResponse>({
      rpcName: 'MakePersonaUnmute',
      inputMessageName: 'MakePersonaUnmuteRequest',
      outputMessageName: 'MakePersonaUnmuteResponse',
      payload,
    })
  }

  markAnnouncementAsRead(payload: MarkAnnouncementAsReadRequest) {
    return this.request<MarkAnnouncementAsReadResponse>({
      rpcName: 'MarkAnnouncementAsRead',
      inputMessageName: 'MarkAnnouncementAsReadRequest',
      outputMessageName: 'MarkAnnouncementAsReadResponse',
      payload,
    })
  }

  markNotificationAsRead(payload: MarkNotificationAsReadRequest) {
    return this.request<MarkNotificationAsReadResponse>({
      rpcName: 'MarkNotificationAsRead',
      inputMessageName: 'MarkNotificationAsReadRequest',
      outputMessageName: 'MarkNotificationAsReadResponse',
      payload,
    })
  }

  markNotificationsAsReadBeforeTime(payload: MarkNotificationsAsReadBeforeTimeRequest) {
    return this.request<MarkNotificationsAsReadResponse>({
      rpcName: 'MarkNotificationsAsReadBeforeTime',
      inputMessageName: 'MarkNotificationsAsReadBeforeTimeRequest',
      outputMessageName: 'MarkNotificationsAsReadResponse',
      payload,
    })
  }

  pinCommunityPost(payload: PinCommunityPostRequest) {
    return this.request<PinCommunityPostResponse>({
      rpcName: 'PinCommunityPost',
      inputMessageName: 'PinCommunityPostRequest',
      outputMessageName: 'PinCommunityPostResponse',
      payload,
    })
  }

  pinProfilePost(payload: PinProfilePostRequest) {
    return this.request<PinProfilePostResponse>({
      rpcName: 'PinProfilePost',
      inputMessageName: 'PinProfilePostRequest',
      outputMessageName: 'PinProfilePostResponse',
      payload,
    })
  }

  prepareMediaUploading(payload: PrepareMediaUploadingRequest) {
    return this.request<PrepareMediaUploadingResponse>({
      rpcName: 'PrepareMediaUploading',
      inputMessageName: 'PrepareMediaUploadingRequest',
      outputMessageName: 'PrepareMediaUploadingResponse',
      payload,
    })
  }

  readPersonaWarning(payload: ReadPersonaWarningRequest) {
    return this.request<ReadPersonaWarningResponse>({
      rpcName: 'ReadPersonaWarning',
      inputMessageName: 'ReadPersonaWarningRequest',
      outputMessageName: 'ReadPersonaWarningResponse',
      payload,
    })
  }

  refreshToken(payload: RefreshTokenRequest) {
    return this.request<NewTokenResponse>({
      rpcName: 'RefreshToken',
      inputMessageName: 'RefreshTokenRequest',
      outputMessageName: 'NewTokenResponse',
      payload,
    })
  }

  registerFCMToken(payload: RegisterFCMTokenRequest) {
    return this.request<RegisterFCMTokenResponse>({
      rpcName: 'RegisterFCMToken',
      inputMessageName: 'RegisterFCMTokenRequest',
      outputMessageName: 'RegisterFCMTokenResponse',
      payload,
    })
  }

  rejectFollowingRequest(payload: RejectFollowingRequestRequest) {
    return this.request<RejectFollowingRequestResponse>({
      rpcName: 'RejectFollowingRequest',
      inputMessageName: 'RejectFollowingRequestRequest',
      outputMessageName: 'RejectFollowingRequestResponse',
      payload,
    })
  }

  removeCommunityBookmark(payload: RemoveCommunityBookmarkRequest) {
    return this.request<RemoveCommunityBookmarkResponse>({
      rpcName: 'RemoveCommunityBookmark',
      inputMessageName: 'RemoveCommunityBookmarkRequest',
      outputMessageName: 'RemoveCommunityBookmarkResponse',
      payload,
    })
  }

  removeCommunityPostPin(payload: RemoveCommunityPostPinRequest) {
    return this.request<RemoveCommunityPostPinResponse>({
      rpcName: 'RemoveCommunityPostPin',
      inputMessageName: 'RemoveCommunityPostPinRequest',
      outputMessageName: 'RemoveCommunityPostPinResponse',
      payload,
    })
  }

  removeProfilePostPin(payload: RemoveProfilePostPinRequest) {
    return this.request<RemoveProfilePostPinResponse>({
      rpcName: 'RemoveProfilePostPin',
      inputMessageName: 'RemoveProfilePostPinRequest',
      outputMessageName: 'RemoveProfilePostPinResponse',
      payload,
    })
  }

  removeStampFromOwnPost(payload: RemoveStampFromOwnPostRequest) {
    return this.request<RemoveStampFromOwnPostResponse>({
      rpcName: 'RemoveStampFromOwnPost',
      inputMessageName: 'RemoveStampFromOwnPostRequest',
      outputMessageName: 'RemoveStampFromOwnPostResponse',
      payload,
    })
  }

  removeStampFromPost(payload: RemoveStampFromPostRequest) {
    return this.request<RemoveStampFromPostResponse>({
      rpcName: 'RemoveStampFromPost',
      inputMessageName: 'RemoveStampFromPostRequest',
      outputMessageName: 'RemoveStampFromPostResponse',
      payload,
    })
  }

  reportChatRoomMessage(payload: ReportChatRoomMessageRequest) {
    return this.request<ReportChatRoomMessageResponse>({
      rpcName: 'ReportChatRoomMessage',
      inputMessageName: 'ReportChatRoomMessageRequest',
      outputMessageName: 'ReportChatRoomMessageResponse',
      payload,
    })
  }

  reportCommunity(payload: ReportCommunityRequest) {
    return this.request<ReportCommunityResponse>({
      rpcName: 'ReportCommunity',
      inputMessageName: 'ReportCommunityRequest',
      outputMessageName: 'ReportCommunityResponse',
      payload,
    })
  }

  reportPersona(payload: ReportPersonaRequest) {
    return this.request<ReportPersonaResponse>({
      rpcName: 'ReportPersona',
      inputMessageName: 'ReportPersonaRequest',
      outputMessageName: 'ReportPersonaResponse',
      payload,
    })
  }

  reportPost(payload: ReportPostRequest) {
    return this.request<ReportPostResponse>({
      rpcName: 'ReportPost',
      inputMessageName: 'ReportPostRequest',
      outputMessageName: 'ReportPostResponse',
      payload,
    })
  }

  requestJoinCommunity(payload: RequestJoinCommunityRequest) {
    return this.request<RequestJoinCommunityResponse>({
      rpcName: 'RequestJoinCommunity',
      inputMessageName: 'RequestJoinCommunityRequest',
      outputMessageName: 'RequestJoinCommunityResponse',
      payload,
    })
  }

  resendEmailPassCode(payload: ResendEmailPassCodeRequest) {
    return this.request<ResendEmailPassCodeResponse>({
      rpcName: 'ResendEmailPassCode',
      inputMessageName: 'ResendEmailPassCodeRequest',
      outputMessageName: 'ResendEmailPassCodeResponse',
      payload,
    })
  }

  resendSMSPassCode(payload: ResendSMSPassCodeRequest) {
    return this.request<ResendSMSPassCodeResponse>({
      rpcName: 'ResendSMSPassCode',
      inputMessageName: 'ResendSMSPassCodeRequest',
      outputMessageName: 'ResendSMSPassCodeResponse',
      payload,
    })
  }

  restrictCommunityPost(payload: RestrictCommunityPostRequest) {
    return this.request<RestrictCommunityPostResponse>({
      rpcName: 'RestrictCommunityPost',
      inputMessageName: 'RestrictCommunityPostRequest',
      outputMessageName: 'RestrictCommunityPostResponse',
      payload,
    })
  }

  search(payload: SearchRequest) {
    return this.request<SearchResponse>({
      rpcName: 'Search',
      inputMessageName: 'SearchRequest',
      outputMessageName: 'SearchResponse',
      payload,
    })
  }

  searchChatRooms(payload: SearchChatRoomsRequest) {
    return this.request<SearchChatRoomsResponse>({
      rpcName: 'SearchChatRooms',
      inputMessageName: 'SearchChatRoomsRequest',
      outputMessageName: 'SearchChatRoomsResponse',
      payload,
    })
  }

  searchTypeahead(payload: SearchTypeaheadRequest) {
    return this.request<SearchTypeaheadResponse>({
      rpcName: 'SearchTypeahead',
      inputMessageName: 'SearchTypeaheadRequest',
      outputMessageName: 'SearchTypeaheadResponse',
      payload,
    })
  }

  sendCommunityInvitation(payload: SendCommunityInvitationRequest) {
    return this.request<SendCommunityInvitationResponse>({
      rpcName: 'SendCommunityInvitation',
      inputMessageName: 'SendCommunityInvitationRequest',
      outputMessageName: 'SendCommunityInvitationResponse',
      payload,
    })
  }

  sendDirectMessage(payload: SendDirectMessageRequest) {
    return this.request<SendDirectMessageResponse>({
      rpcName: 'SendDirectMessage',
      inputMessageName: 'SendDirectMessageRequest',
      outputMessageName: 'SendDirectMessageResponse',
      payload,
    })
  }

  sendFollowingRequest(payload: SendFollowingRequestRequest) {
    return this.request<SendFollowingRequestResponse>({
      rpcName: 'SendFollowingRequest',
      inputMessageName: 'SendFollowingRequestRequest',
      outputMessageName: 'SendFollowingRequestResponse',
      payload,
    })
  }

  sendGroupMessage(payload: SendGroupMessageRequest) {
    return this.request<SendGroupMessageResponse>({
      rpcName: 'SendGroupMessage',
      inputMessageName: 'SendGroupMessageRequest',
      outputMessageName: 'SendGroupMessageResponse',
      payload,
    })
  }

  sendMessageToRoom(payload: SendMessageToRoomRequest) {
    return this.request<SendMessageToRoomResponse>({
      rpcName: 'SendMessageToRoom',
      inputMessageName: 'SendMessageToRoomRequest',
      outputMessageName: 'SendMessageToRoomResponse',
      payload,
    })
  }

  setCommunityTags(payload: SetCommunityTagsRequest) {
    return this.request<SetCommunityTagsResponse>({
      rpcName: 'SetCommunityTags',
      inputMessageName: 'SetCommunityTagsRequest',
      outputMessageName: 'SetCommunityTagsResponse',
      payload,
    })
  }

  signin(payload: SigninRequest) {
    return this.request<NewTokenResponse>({
      rpcName: 'Signin',
      inputMessageName: 'SigninRequest',
      outputMessageName: 'NewTokenResponse',
      payload,
    })
  }

  signOut(payload: SignOutRequest) {
    return this.request<SignOutResponse>({
      rpcName: 'SignOut',
      inputMessageName: 'SignOutRequest',
      outputMessageName: 'SignOutResponse',
      payload,
    })
  }

  signup(payload: SignupRequest) {
    return this.request<NewTokenResponse>({
      rpcName: 'Signup',
      inputMessageName: 'SignupRequest',
      outputMessageName: 'NewTokenResponse',
      payload,
    })
  }

  startEmailAuthentication(payload: StartEmailAuthenticationRequest) {
    return this.request<StartEmailAuthenticationResponse>({
      rpcName: 'StartEmailAuthentication',
      inputMessageName: 'StartEmailAuthenticationRequest',
      outputMessageName: 'StartEmailAuthenticationResponse',
      payload,
    })
  }

  startSMSAuthentication(payload: StartSMSAuthenticationRequest) {
    return this.request<StartSMSAuthenticationResponse>({
      rpcName: 'StartSMSAuthentication',
      inputMessageName: 'StartSMSAuthenticationRequest',
      outputMessageName: 'StartSMSAuthenticationResponse',
      payload,
    })
  }

  switchPersona(payload: SwitchPersonaRequest) {
    return this.request<SwitchPersonaResponse>({
      rpcName: 'SwitchPersona',
      inputMessageName: 'SwitchPersonaRequest',
      outputMessageName: 'SwitchPersonaResponse',
      payload,
    })
  }

  updateChatRoomTitle(payload: UpdateChatRoomTitleRequest) {
    return this.request<UpdateChatRoomTitleResponse>({
      rpcName: 'UpdateChatRoomTitle',
      inputMessageName: 'UpdateChatRoomTitleRequest',
      outputMessageName: 'UpdateChatRoomTitleResponse',
      payload,
    })
  }

  updateCommunity(payload: UpdateCommunityRequest) {
    return this.request<UpdateCommunityResponse>({
      rpcName: 'UpdateCommunity',
      inputMessageName: 'UpdateCommunityRequest',
      outputMessageName: 'UpdateCommunityResponse',
      payload,
    })
  }

  updateCommunityLastAccessTime(payload: UpdateCommunityLastAccessTimeRequest) {
    return this.request<UpdateCommunityLastAccessTimeResponse>({
      rpcName: 'UpdateCommunityLastAccessTime',
      inputMessageName: 'UpdateCommunityLastAccessTimeRequest',
      outputMessageName: 'UpdateCommunityLastAccessTimeResponse',
      payload,
    })
  }

  updateDisplayName(payload: UpdateDisplayNameRequest) {
    return this.request<UpdateDisplayNameResponse>({
      rpcName: 'UpdateDisplayName',
      inputMessageName: 'UpdateDisplayNameRequest',
      outputMessageName: 'UpdateDisplayNameResponse',
      payload,
    })
  }

  updateEventCommunity(payload: UpdateEventCommunityRequest) {
    return this.request<UpdateEventCommunityResponse>({
      rpcName: 'UpdateEventCommunity',
      inputMessageName: 'UpdateEventCommunityRequest',
      outputMessageName: 'UpdateEventCommunityResponse',
      payload,
    })
  }

  updateInAppEventDone(payload: UpdateInAppEventDoneRequest) {
    return this.request<UpdateInAppEventDoneResponse>({
      rpcName: 'UpdateInAppEventDone',
      inputMessageName: 'UpdateInAppEventDoneRequest',
      outputMessageName: 'UpdateInAppEventDoneResponse',
      payload,
    })
  }

  updateName(payload: UpdateNameRequest) {
    return this.request<UpdateNameResponse>({
      rpcName: 'UpdateName',
      inputMessageName: 'UpdateNameRequest',
      outputMessageName: 'UpdateNameResponse',
      payload,
    })
  }

  updateProfile(payload: UpdateProfileRequest) {
    return this.request<UpdateProfileResponse>({
      rpcName: 'UpdateProfile',
      inputMessageName: 'UpdateProfileRequest',
      outputMessageName: 'UpdateProfileResponse',
      payload,
    })
  }

  updateProfileSocialMedia(payload: UpdateProfileSocialMediaRequest) {
    return this.request<UpdateProfileSocialMediaResponse>({
      rpcName: 'UpdateProfileSocialMedia',
      inputMessageName: 'UpdateProfileSocialMediaRequest',
      outputMessageName: 'UpdateProfileSocialMediaResponse',
      payload,
    })
  }

  updateRemotePushSettings(payload: UpdateRemotePushSettingsRequest) {
    return this.request<UpdateRemotePushSettingsResponse>({
      rpcName: 'UpdateRemotePushSettings',
      inputMessageName: 'UpdateRemotePushSettingsRequest',
      outputMessageName: 'UpdateRemotePushSettingsResponse',
      payload,
    })
  }

  updateTimelineSetting(payload: UpdateTimelineSettingRequest) {
    return this.request<UpdateTimelineSettingResponse>({
      rpcName: 'UpdateTimelineSetting',
      inputMessageName: 'UpdateTimelineSettingRequest',
      outputMessageName: 'UpdateTimelineSettingResponse',
      payload,
    })
  }

  updateTopicCommunity(payload: UpdateTopicCommunityRequest) {
    return this.request<UpdateTopicCommunityResponse>({
      rpcName: 'UpdateTopicCommunity',
      inputMessageName: 'UpdateTopicCommunityRequest',
      outputMessageName: 'UpdateTopicCommunityResponse',
      payload,
    })
  }

  verifyEmailAuthentication(payload: VerifyEmailAuthenticationRequest) {
    return this.request<NewTokenResponse>({
      rpcName: 'VerifyEmailAuthentication',
      inputMessageName: 'VerifyEmailAuthenticationRequest',
      outputMessageName: 'NewTokenResponse',
      payload,
    })
  }

  verifyEmailSessionAuthentication(payload: VerifyEmailSessionAuthenticationRequest) {
    return this.request<VerifyEmailSessionAuthenticationResponse>({
      rpcName: 'VerifyEmailSessionAuthentication',
      inputMessageName: 'VerifyEmailSessionAuthenticationRequest',
      outputMessageName: 'VerifyEmailSessionAuthenticationResponse',
      payload,
    })
  }

  verifySMSAuthentication(payload: VerifySMSAuthenticationRequest) {
    return this.request<NewTokenResponse>({
      rpcName: 'VerifySMSAuthentication',
      inputMessageName: 'VerifySMSAuthenticationRequest',
      outputMessageName: 'NewTokenResponse',
      payload,
    })
  }
}
