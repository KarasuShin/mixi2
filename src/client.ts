import type { GetPersonaByNameRequest, GetSubscribingFeedsRequest } from '~/types'
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
    },
  ) {
    if (!cookie || !authKey) {
      throw new Error('cookie and authKey are required')
    }

    this.cookie = cookie
    this.authKey = authKey
    this.http = new Http(cookie, authKey, {
      baseUrl: options?.baseUrl,
    })
  }

  async request(rpcName: string, data?: any) {
    let input: Uint8Array | undefined

    if (data) {
      input = await encode(data, `${rpcName}Request`)
    }

    const response = await this.http.request(`/${rpcName}`, input).then(res => res.bytes())

    return await decode(response, `${rpcName}Response`)
  }

  acceptChatRoom() {}

  addMembersToChatRoom() {}

  addStampToPost() {}

  applyForVerification() {}

  approveFollowingRequest() {}

  approveJoinCommunity() {}

  archiveCommunity() {}

  bookmarkCommunity() {}

  cancelFollowingRequest() {}

  cancelJoinCommunityRequest() {}

  changeCommunityAdmins() {}

  changeCommunityPostSubscriptionType() {}

  changeMyPersonaVisibility() {}

  checkPendingPost() {}

  closeEventCommunity() {}

  createBookmark() {}

  createChatRoom() {}

  createCommunity() {}

  createEventCommunity() {}

  createFollowing() {}

  createLike() {}

  createPersona() {}

  createPersonaFromSession() {}

  createPost() {}

  createPostAndEventCommunity() {}

  createTopicCommunity() {}

  deleteAccount() {}

  deleteBookmark() {}

  deleteCommunityStamp() {}

  deleteExcludedCommunityMember() {}

  deleteExcludedCommunityMembers() {}

  deleteFCMToken() {}

  deleteFollowing() {}

  deleteLike() {}

  deletePost() {}

  deleteRepost() {}

  deleteSession() {}

  denyJoinCommunity() {}

  excludeCommunityMember() {}

  excludeCommunityMembers() {}

  exitChatRoom() {}

  getAnnouncements() {}

  getBadgeCount() {}

  getBlockPersonas() {}

  getBlockingMembersInCommunity() {}

  getChatRoom() {}

  getChatRoomMessages() {}

  getChatRooms() {}

  getCommunities() {}

  getCommunitiesPostNotifications() {}

  getCommunity() {}

  getCommunityBookmarks() {}

  getCommunityInvitablePersonas() {}

  getCommunityInvitation() {}

  getCommunityInvitationCode() {}

  getCommunityJoinRequests() {}

  getCommunityPostPin() {}

  getCommunityStamps() {}

  getCommunityTimeline() {}

  getCompletedOrClosedEventCommunities() {}

  getEventCommunitiesWithinCommunity() {}

  getExclusiveCommunityMembers() {}

  getFeatureFlags() {}

  getFollowers() {}

  getFollowingCount() {}

  getFollowingRequests() {}

  getFollowings() {}

  getFollowingsTimeline() {}

  getGlobalCount() {}

  getHashtagTimeline() {}

  getInAppEventStatus() {}

  getInAppEventStatusAll() {}

  getInvitation() {}

  getInvitationCode() {}

  getLatestRenameLog() {}

  getLikingPersonas() {}

  getLimitedTimeCampaign() {}

  getMedia() {}

  getMuteChatRooms() {}

  getMutePersonas() {}

  getNotifications() {}

  getOngoingEventCommunities() {}

  getOngoingOrUpcomingEventCommunities() {}

  getParticipatingCommunities() {}

  getParticipatingCommunityMembers() {}

  getPastOrClosedEventCommunities() {}

  getPendingFollowingRequests() {}

  getPendingVerificationSocialMedia() {}

  getPersonaByName(payload: GetPersonaByNameRequest) {
    return this.request('GetPersonaByName', payload)
  }

  getPersonalCommunityPosts() {}

  getPersonalInformation() {}

  getPersonalTimeline() {}

  getPersonas() {}

  getPersonasPostNotifications() {}

  getPost() {}

  getPostStampReactions() {}

  getPostableCommunities() {}

  getPosts() {}

  getProfile() {}

  getProfileByName() {}

  getProfilePostPin() {}

  getQuotePosts() {}

  getReactionPosts() {}

  getRecommendations() {}

  getRecommendedCommunities() {}

  getRecommendedTimeline() {}

  getRemoteConfig() {}

  getRemotePushSettings() {}

  getReplies() {}

  getReplyAncestors() {}

  getRepostingPersonas() {}

  getRequestedChatRooms() {}

  getSession() {}

  getStamps() {}

  getStorageRateLimit() {}

  getSubscribingFeeds(payload?: GetSubscribingFeedsRequest) {
    return this.request('GetSubscribingFeeds', payload)
  }

  getThreadPosts() {}

  getTimelineSetting() {}

  getUnreadChatRoomCount() {}

  getUpcomingEventCommunities() {}

  getWaitingCommunities() {}

  incrementGlobalCount() {}

  joinCommunity() {}

  leaveCommunity() {}

  makeChatRoomInvisible() {}

  makeChatRoomMute() {}

  makeChatRoomUnmute() {}

  makeCommunityPostNotificationDisabled() {}

  makeCommunityPostNotificationEnabled() {}

  makeCommunitySubscriptionDisabled() {}

  makeCommunitySubscriptionEnabled() {}

  makePersonaBlock() {}

  makePersonaMute() {}

  makePersonaPostNotificationDisabled() {}

  makePersonaPostNotificationEnabled() {}

  makePersonaUnblock() {}

  makePersonaUnmute() {}

  markAnnouncementAsRead() {}

  markNotificationAsRead() {}

  markNotificationsAsReadBeforeTime() {}

  pinCommunityPost() {}

  pinProfilePost() {}

  prepareMediaUploading() {}

  readPersonaWarning() {}

  refreshToken() {}

  registerFCMToken() {}

  rejectFollowingRequest() {}

  removeCommunityBookmark() {}

  removeCommunityPostPin() {}

  removeProfilePostPin() {}

  removeStampFromOwnPost() {}

  removeStampFromPost() {}

  reportChatRoomMessage() {}

  reportCommunity() {}

  reportPersona() {}

  reportPost() {}

  requestJoinCommunity() {}

  resendEmailPassCode() {}

  resendSMSPassCode() {}

  restrictCommunityPost() {}

  search() {}

  searchChatRooms() {}

  searchTypeahead() {}

  sendCommunityInvitation() {}

  sendDirectMessage() {}

  sendFollowingRequest() {}

  sendGroupMessage() {}

  sendMessageToRoom() {}

  setCommunityTags() {}

  signOut() {}

  signin() {}

  signup() {}

  startEmailAuthentication() {}

  startSMSAuthentication() {}

  switchPersona() {}

  updateChatRoomTitle() {}

  updateCommunity() {}

  updateCommunityLastAccessTime() {}

  updateDisplayName() {}

  updateEventCommunity() {}

  updateInAppEventDone() {}

  updateName() {}

  updateProfile() {}

  updateProfileSocialMedia() {}

  updateRemotePushSettings() {}

  updateTimelineSetting() {}

  updateTopicCommunity() {}

  verifyEmailAuthentication() {}

  verifyEmailSessionAuthentication() {}

  verifySMSAuthentication() {}
}
