import { HelperFacade } from "./models/helperFacade";
export * from "./commonModule";
export * from "./ioc/enum";
export * from "./connectors/httpConnector";
export * from "./connectors/iconnector";
export * from "./models/promise";
export * from "./models/basePage";
export * from "./application/iapplication";

import iocHelper from "./ioc/iocHelper";
import appHelper from "./helpers/appHelper";
import routerHelper from "./helpers/routerHelper";
import domHelper from "./helpers/domHelper";

let helperFacade: HelperFacade = new HelperFacade();
helperFacade.iocHelper = iocHelper;
helperFacade.appHelper = appHelper;
helperFacade.routeHelper = routerHelper;
helperFacade.domHelper = domHelper;
export default helperFacade;
