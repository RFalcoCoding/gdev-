var gdjs;(function(i){const d=new i.Logger("Model3DManager");class l{constructor(r,e){this._loadedThreeModels=new Map;this._loader=null;this._dracoLoader=null;if(this._resources=new Map,this.setResources(r),this._resourcesLoader=e,typeof THREE!="undefined"){this._loader=new THREE_ADDONS.GLTFLoader,this._dracoLoader=new THREE_ADDONS.DRACOLoader,this._dracoLoader.setDecoderPath("./pixi-renderers/draco/gltf/"),this._loader.setDRACOLoader(this._dracoLoader);const s=new THREE.Group;s.add(new THREE.Mesh(new THREE.BoxGeometry(1,1,1),new THREE.MeshBasicMaterial({color:"#ff00ff"}))),this._invalidModel={scene:s,animations:[],cameras:[],scenes:[],asset:{},userData:{},parser:null}}}setResources(r){this._resources.clear();for(const e of r)e.kind==="model3D"&&this._resources.set(e.name,e)}async loadModels(r){const e=this._loader;if(this._resources.size===0||!e)return 0;let s=0;return await Promise.all([...this._resources.values()].map(async o=>{const t=this._resourcesLoader.getFullUrl(o.file);e.withCredentials=this._resourcesLoader.checkIfCredentialsRequired(t);try{const a=await e.loadAsync(t,c=>{});this._loadedThreeModels.set(o.name,a)}catch(a){d.error("Can't fetch the 3D model file "+o.file+", error: "+a)}s++,r(s,this._resources.size)})),s}getModel(r){return this._loadedThreeModels.get(r)||this._invalidModel}}i.Model3DManager=l})(gdjs||(gdjs={}));
//# sourceMappingURL=Model3DManager.js.map
