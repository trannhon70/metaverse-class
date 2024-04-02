import { KJUR } from "jsrsasign";
type generateZoomJWTType = {
  topic: string;
  password: string;
  userIdentity?: string;
  sessionKey?: string;
  roleType: 1 | 0;
};

export function generateZoomJWT({
  topic,
  password,
  userIdentity,
  sessionKey,
  roleType,
}: generateZoomJWTType) {
  const iat = Math.round(new Date().getTime() / 1000);
  const exp = iat + 60 * 60 * 24;

  const oHeader = { alg: "HS256", typ: "JWT" };
  const sdkKey = import.meta.env.VITE_APP_ZOOM_SDK_KEY;
  const sdkSecret = import.meta.env.VITE_APP_ZOOM_SDK_SECRET;
  const oPayload = {
    app_key: sdkKey,
    iat,
    exp,
    tpc: topic,
    pwd: password,
    user_identity: userIdentity,
    session_key: sessionKey,
    role_type: roleType,
  };
  const sHeader = JSON.stringify(oHeader);
  const sPayload = JSON.stringify(oPayload);
  const signature = KJUR.jws.JWS.sign("HS256", sHeader, sPayload, sdkSecret);
  return signature;
}
