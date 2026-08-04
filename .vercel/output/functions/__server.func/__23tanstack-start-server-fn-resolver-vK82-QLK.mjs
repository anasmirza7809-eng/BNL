//#region node_modules/.nitro/vite/services/ssr/assets/__23tanstack-start-server-fn-resolver-vK82-QLK.js
var manifest = {
	"07720c655a1eda1cb3ae37d8e25474963c8e10a8de8b04ffd25f13c3c55f4046": {
		functionName: "listAdminGallery_createServerFn_handler",
		importer: () => import("./_ssr/gallery.functions-Dn0tfIBo.mjs")
	},
	"0dbfff667478277cf1ea80217e1fd15b826ac57e627ccec11b1ad120656580d9": {
		functionName: "upsertProperty_createServerFn_handler",
		importer: () => import("./_ssr/admin-properties.functions-B51SlmZs.mjs")
	},
	"1c5ea22a1b719e031967c330ba1fdc096f5bbc66a099bb0f7a56201da8d42fbe": {
		functionName: "deleteCareer_createServerFn_handler",
		importer: () => import("./_ssr/careers.functions-BP1yvkKi.mjs")
	},
	"1fcae9e91c68fa2a0ca731cda98f572c9c5aed40159a35696f1ff31790b23841": {
		functionName: "listPublicGallery_createServerFn_handler",
		importer: () => import("./_ssr/gallery.functions-Dn0tfIBo.mjs")
	},
	"2aea7d78267cd5052846b2db5649a19299ecbb5bf4a23dab88f025161a24fc4d": {
		functionName: "upsertCareer_createServerFn_handler",
		importer: () => import("./_ssr/careers.functions-BP1yvkKi.mjs")
	},
	"49e4b7dcacfd5df53c240b47a547c39745b57bc8e8824fff9ffe8923e9f0594e": {
		functionName: "listApplications_createServerFn_handler",
		importer: () => import("./_ssr/careers.functions-BP1yvkKi.mjs")
	},
	"a21fcbc230f9790d55556c8a1eb726090d8599d76f0dee447c065a77558662bb": {
		functionName: "listCareersAdmin_createServerFn_handler",
		importer: () => import("./_ssr/careers.functions-BP1yvkKi.mjs")
	},
	"aa2c26a83fd863d1d75d08347b56bc0b43f0e133c7a18007a940ac08139453a1": {
		functionName: "deleteProperty_createServerFn_handler",
		importer: () => import("./_ssr/admin-properties.functions-B51SlmZs.mjs")
	},
	"af3e33fbcfbd5fa89bf9a6e6b40da4742ad002de066c73b59fa96de1617b747b": {
		functionName: "upsertGalleryImage_createServerFn_handler",
		importer: () => import("./_ssr/gallery.functions-Dn0tfIBo.mjs")
	},
	"c5b12a6b46461630cbf631c3fa3b5ff9bb2edce2fb7c22c32d1bd2163a11e99c": {
		functionName: "deleteGalleryImage_createServerFn_handler",
		importer: () => import("./_ssr/gallery.functions-Dn0tfIBo.mjs")
	},
	"c706c02de4b9ac647ff5702a13040fd7e6e5cf04adc040131333cd3bef0bbc84": {
		functionName: "listAdminProperties_createServerFn_handler",
		importer: () => import("./_ssr/admin-properties.functions-B51SlmZs.mjs")
	},
	"c82552885b116d510226b1e160577bfa0ab7a2643cb07f404bbaec0b190d4be7": {
		functionName: "updateApplicationStatus_createServerFn_handler",
		importer: () => import("./_ssr/careers.functions-BP1yvkKi.mjs")
	}
};
async function getServerFnById(id, access) {
	const serverFnInfo = manifest[id];
	if (!serverFnInfo) throw new Error("Server function info not found for " + id);
	const fnModule = serverFnInfo.module ?? await serverFnInfo.importer();
	if (!fnModule) throw new Error("Server function module not resolved for " + id);
	const action = fnModule[serverFnInfo.functionName];
	if (!action) throw new Error("Server function module export not resolved for serverFn ID: " + id);
	return action;
}
//#endregion
export { getServerFnById as t };
