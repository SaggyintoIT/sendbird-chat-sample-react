import{a1 as e,O as n,_ as r,a_ as t}from"./bundle/bundle.shared.js";export{a$ as OpenChannel,a_ as OpenChannelCreateParams,b0 as OpenChannelUpdateParams,b1 as ParticipantListQuery}from"./bundle/bundle.shared.js";import{O as s}from"./bundle/bundle.openChannel.js";export{a as OpenChannelHandler,O as OpenChannelListQuery}from"./bundle/bundle.openChannel.js";import"./vendor/vendor.internal.js";class i extends e{constructor(){super(...arguments),this.name="openChannel"}init(e,{sdkState:a,cacheContext:r,dispatcher:t,sessionManager:s,requestQueue:i}){super.init(e,{sdkState:a,cacheContext:r,dispatcher:t,sessionManager:s,requestQueue:i}),this._manager=new n(e,{sdkState:a,dispatcher:t,requestQueue:i})}createOpenChannelListQuery(e={}){return new s(this._iid,e)}addOpenChannelHandler(e,n){this._manager.addHandler(e,n)}removeOpenChannelHandler(e){this._manager.removeHandler(e)}removeAllOpenChannelHandlers(){this._manager.clearHandler()}buildOpenChannelFromSerializedData(e){return this._manager.buildOpenChannelFromSerializedData(e)}getChannel(e){return r(this,void 0,void 0,(function*(){return this._manager.getChannel(e)}))}getChannelWithoutCache(e){return r(this,void 0,void 0,(function*(){return this._manager.getChannelWithoutCache(e)}))}createChannel(e){return r(this,void 0,void 0,(function*(){return this._manager.createChannel(e)}))}createChannelWithOperatorUserIds(e,n,a,s,i){return r(this,void 0,void 0,(function*(){const r=new t;return r.name=e,r.coverUrlOrImage=n,r.data=a,r.operatorUserIds=s,r.customType=i,this._manager.createChannel(r)}))}}export{i as OpenChannelModule};
