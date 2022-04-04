import SendbirdChatOptions from './options';
import { DoNotDisturbPreference, FriendChangelogs, FriendDiscovery, InvitationPreference, PushTemplate, PushTokenRegistrationState, PushTokens, PushTokenType, PushTriggerOption, SnoozePeriod } from './types';
import { MessageModule } from './module/messageModule';
import Module, { ModuleNamespaces } from './module/baseModule';
import User from './model/user';
import EmojiContainer from './model/emojiContainer';
import EmojiCategory from './model/emojiCategory';
import Emoji from './model/emoji';
import UserUpdateParams from './model/params/userUpdateParams';
import UnreadItemCountParams from './model/params/unreadItemCountParams';
import TotalUnreadMessageCountParams from './model/params/totalUnreadMessageCountParams';
import SessionHandler from './model/handler/sessionHandler';
import ConnectionHandler from './model/handler/connectionHandler';
import UserEventHandler from './model/handler/userEventHandler';
import { UnreadItemCount } from './comm/command/user/getUnreadItemCountCommand';
import { ConnectionState } from './core/websocket/websocketClient';
import ApplicationUserListQuery, { ApplicationUserListQueryParams } from './query/applicationUserListQuery';
import BlockedUserListQuery, { BlockedUserListQueryParams } from './query/blockedUserListQuery';
import FriendListQuery, { FriendListQueryParams } from './query/friendListQuery';
import MessageSearchQuery, { MessageSearchQueryParams } from './query/messageSearchQuery';
import { Encryption, MemoryStore } from './lib/nestdb/src/nest';
import { AsyncStorageStatic } from './lib/nestdb/src/store/asyncStorageStore/interface';
import { LogLevel } from './utils/logger';
interface SendbirdChatParams<Modules extends Module[]> {
    appId: string;
    appVersion?: string;
    customApiHost?: string;
    customWebSocketHost?: string;
    newInstance?: boolean;
    modules?: Modules;
    options?: SendbirdChatOptions;
    logLevel?: LogLevel;
    debugMode?: boolean;
    localCacheEnabled?: boolean;
    localCacheEncryption?: Encryption;
    useAsyncStorageStore?: AsyncStorageStatic;
}
export default class SendbirdChat {
    /**
     * @internal
     */
    readonly _iid: string;
    private _appState;
    private _onlineDetector;
    private _fcmPushToken;
    private _apnsPushToken;
    readonly options: SendbirdChatOptions;
    readonly message: MessageModule;
    /**
     * @private
     */
    constructor(_iid: string, options: SendbirdChatOptions, modules: Module[]);
    static init<Modules extends Module[]>(params: SendbirdChatParams<Modules>): SendbirdChat & ModuleNamespaces<[...Modules, MessageModule]>;
    static get instance(): SendbirdChat;
    static get version(): string;
    get appId(): string;
    get appVersion(): string;
    get debugMode(): boolean;
    get logLevel(): LogLevel;
    set logLevel(val: LogLevel);
    get isCacheEnabled(): boolean;
    get ekey(): string;
    get currentUser(): User;
    get connectionState(): ConnectionState;
    get lastConnectedAt(): number;
    get fcmPushToken(): string;
    get apnsPushToken(): string;
    getMemoryStoreForDebugging(): MemoryStore;
    addExtension(key: string, version: string): void;
    initializeCache(userId: string): Promise<void>;
    clearCache(): Promise<void>;
    connect(userId: string, authToken?: string): Promise<User>;
    reconnect(): boolean;
    disconnect(): Promise<void>;
    setBackgroundState(): void;
    setForegroundState(): void;
    setSessionHandler(handler: SessionHandler): void;
    addUserEventHandler(key: string, handler: UserEventHandler): void;
    removeUserEventHandler(key: string): void;
    removeAllUserEventHandler(): void;
    addConnectionHandler(key: string, handler: ConnectionHandler): void;
    removeConnectionHandler(key: string): void;
    removeAllConnectionHandler(): void;
    createApplicationUserListQuery(params?: ApplicationUserListQueryParams): ApplicationUserListQuery;
    createBlockedUserListQuery(params?: BlockedUserListQueryParams): BlockedUserListQuery;
    createFriendListQuery(params?: FriendListQueryParams): FriendListQuery;
    createMessageSearchQuery(params: MessageSearchQueryParams): MessageSearchQuery;
    buildUserFromSerializedData(serialized: object): User;
    updateCurrentUserInfo(params: UserUpdateParams): Promise<User>;
    updateCurrentUserInfoWithPreferredLanguages(preferredLanguages: string[]): Promise<User>;
    registerFCMPushTokenForCurrentUser(token: string): Promise<PushTokenRegistrationState>;
    unregisterFCMPushTokenForCurrentUser(token: string): Promise<PushTokenRegistrationState>;
    unregisterFCMPushTokenAllForCurrentUser(): Promise<void>;
    registerAPNSPushTokenForCurrentUser(token: string): Promise<PushTokenRegistrationState>;
    unregisterAPNSPushTokenForCurrentUser(token: string): Promise<PushTokenRegistrationState>;
    unregisterAPNSPushTokenAllForCurrentUser(): Promise<void>;
    getChannelInvitationPreference(): Promise<InvitationPreference>;
    setChannelInvitationPreference(willAutoAccept: boolean): Promise<InvitationPreference>;
    getDoNotDisturb(): Promise<DoNotDisturbPreference>;
    setDoNotDisturb(doNotDisturbOn: boolean, startHour?: number, startMin?: number, endHour?: number, endMin?: number, timezone?: string): Promise<DoNotDisturbPreference>;
    getSnoozePeriod(): Promise<SnoozePeriod>;
    setSnoozePeriod(snoozeOn: boolean, startTs?: number, endTs?: number): Promise<SnoozePeriod>;
    getMyPushTokensByToken(token: string, type: PushTokenType): Promise<PushTokens>;
    getPushTriggerOption(): Promise<PushTriggerOption>;
    setPushTriggerOption(pushTriggerOption: PushTriggerOption): Promise<PushTriggerOption>;
    getPushTemplate(): Promise<PushTemplate>;
    setPushTemplate(templateName: PushTemplate): Promise<PushTemplate>;
    blockUser(userOrUserId: User | string): Promise<void>;
    blockUserWithUserId(userId: string): Promise<void>;
    unblockUser(userOrUserId: User | string): Promise<void>;
    unblockUserWithUserId(userId: string): Promise<void>;
    getFriendChangeLogsByToken(token: string): Promise<FriendChangelogs>;
    getAllowFriendDiscovery(): Promise<boolean>;
    setAllowFriendDiscovery(allowFriendDiscovery: boolean): Promise<boolean>;
    uploadFriendDiscoveries(discoveries: FriendDiscovery[]): Promise<string>;
    deleteFriendDiscovery(discoveryKey: string): Promise<void>;
    deleteFriendDiscoveries(discoveryKeys: string[]): Promise<void>;
    addFriends(userIds: string[]): Promise<User[]>;
    deleteFriend(userId: string): Promise<void>;
    deleteFriends(userIds: string[]): Promise<void>;
    getAllEmoji(): Promise<EmojiContainer>;
    getEmojiCategory(categoryId: number): Promise<EmojiCategory>;
    getEmoji(emojiKey: string): Promise<Emoji>;
    getUnreadItemCount(params: UnreadItemCountParams): Promise<UnreadItemCount>;
    getTotalUnreadChannelCount(): Promise<number>;
    getTotalUnreadMessageCount(params: TotalUnreadMessageCountParams): Promise<number>;
    getSubscribedTotalUnreadMessageCount(): number;
    getSubscribedCustomTypeTotalUnreadMessageCount(): number;
    getSubscribedCustomTypeUnreadMessageCount(customType: string): number;
}
export * from './exports';
export { SendbirdChatParams, SendbirdChatOptions, };
