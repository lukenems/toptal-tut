"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var http = __importStar(require("http"));
var winston = __importStar(require("winston"));
var expressWinston = __importStar(require("express-winston"));
var cors_1 = __importDefault(require("cors"));
var users_routes_config_1 = require("./users/users.routes.config");
var debug_1 = __importDefault(require("debug"));
var app = express_1["default"]();
var server = http.createServer(app);
var port = 3000;
var routes = [];
var debugLog = debug_1["default"]('app');
app.use(express_1["default"].json());
app.use(cors_1["default"]());
var loggerOptions = {
    transports: [new winston.transports.Console()],
    format: winston.format.combine(winston.format.json(), winston.format.prettyPrint(), winston.format.colorize({ all: true }))
};
// when not debugging, log requests as one-liners
if (!process.env.DEBUG) {
    loggerOptions.meta = false;
}
// initialize the logger with the above configuration
app.use(expressWinston.logger(loggerOptions));
// here we are adding the UserRoutes to our array,
// after sending the Express.js application object to have the routes added to our app!
routes.push(new users_routes_config_1.UsersRoutes(app));
// this is a simple route to make sure everything is working properly
var runningMessage = "Server running at http://localhost:" + port;
app.get('/', function (req, res) {
    res.status(200).send(runningMessage);
});
server.listen(port, function () {
    routes.forEach(function (route) {
        debugLog("Routes configured for " + route.getName());
    });
    console.log(runningMessage);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9EQUE4QjtBQUM5Qix5Q0FBNkI7QUFFN0IsK0NBQW1DO0FBQ25DLDhEQUFrRDtBQUNsRCw4Q0FBd0I7QUFFeEIsbUVBQXdEO0FBQ3hELGdEQUEwQjtBQUUxQixJQUFNLEdBQUcsR0FBd0Isb0JBQU8sRUFBRSxDQUFDO0FBQzNDLElBQU0sTUFBTSxHQUFnQixJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ25ELElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQztBQUNsQixJQUFNLE1BQU0sR0FBOEIsRUFBRSxDQUFDO0FBQzdDLElBQU0sUUFBUSxHQUFvQixrQkFBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBRS9DLEdBQUcsQ0FBQyxHQUFHLENBQUMsb0JBQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBRXhCLEdBQUcsQ0FBQyxHQUFHLENBQUMsaUJBQUksRUFBRSxDQUFDLENBQUM7QUFFaEIsSUFBTSxhQUFhLEdBQWlDO0lBQ2xELFVBQVUsRUFBRSxDQUFDLElBQUksT0FBTyxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUM5QyxNQUFNLEVBQUUsT0FBTyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQzVCLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLEVBQ3JCLE9BQU8sQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLEVBQzVCLE9BQU8sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEVBQUMsR0FBRyxFQUFFLElBQUksRUFBQyxDQUFDLENBQ3JDO0NBQ0YsQ0FBQztBQUNGLGlEQUFpRDtBQUNqRCxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUU7SUFDdEIsYUFBYSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7Q0FDNUI7QUFDRCxxREFBcUQ7QUFDckQsR0FBRyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7QUFFOUMsa0RBQWtEO0FBQ2xELHVGQUF1RjtBQUN2RixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksaUNBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBRWxDLHFFQUFxRTtBQUNyRSxJQUFNLGNBQWMsR0FBRyx3Q0FBc0MsSUFBTSxDQUFDO0FBQ3BFLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLFVBQUMsR0FBb0IsRUFBRSxHQUFxQjtJQUN2RCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztBQUN2QyxDQUFDLENBQUMsQ0FBQztBQUVILE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFO0lBQ2xCLE1BQU0sQ0FBQyxPQUFPLENBQUMsVUFBQyxLQUF5QjtRQUN2QyxRQUFRLENBQUMsMkJBQXlCLEtBQUssQ0FBQyxPQUFPLEVBQUksQ0FBQyxDQUFDO0lBQ3ZELENBQUMsQ0FBQyxDQUFDO0lBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztBQUM5QixDQUFDLENBQUMsQ0FBQSJ9