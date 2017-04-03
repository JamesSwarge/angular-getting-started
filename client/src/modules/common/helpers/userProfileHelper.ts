import { CACHE_CONSTANT } from "../services/cache/cacheService";
import cacheService from "../services/cache/cacheService";
import appHelper from "../application/appHelper";
let userProfileHelper: any = {
    getLang: getLang
};

export default userProfileHelper;
function getLang() {
    let defaultLang: string = appHelper.getConfig().localization.lang;

    if (!cacheService.exist(CACHE_CONSTANT.USER_PROFILE)) {
        return defaultLang;
    }
    let userProfile = cacheService.get(CACHE_CONSTANT.USER_PROFILE);
    return !!userProfile.lang && !String.isNullOrWhiteSpace(userProfile.lang) ? userProfile.languageCode : defaultLang;
}
