import { ConnectionOptions, Json, SignalingConnectMessage } from "./types";
export declare function isEdge(): boolean;
export declare function isSafari(): boolean;
export declare function isChrome(): boolean;
export declare function createSignalingMessage(offerSDP: string, role: string, channelId: string | null | undefined, metadata: Json, options: ConnectionOptions): SignalingConnectMessage;
export declare function trace(clientId: string | null, title: string, value: any): void;
