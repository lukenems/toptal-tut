"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.UsersRoutes = void 0;
var common_routes_config_1 = require("../common/common.routes.config");
var UsersRoutes = /** @class */ (function (_super) {
    __extends(UsersRoutes, _super);
    function UsersRoutes(app) {
        return _super.call(this, app, 'UserRoutes') || this;
    }
    UsersRoutes.prototype.configureRoutes = function () {
        this.app.route("/users")
            .get(function (req, res) {
            res.status(200).send("list of users");
        })
            .post(function (req, res) {
            res.status(200).send("Post to users");
        });
        this.app.route("/users/:userId")
            .all(function (req, res, next) {
            // this middleware function runs before any request to /users/:userId
            // but it doesn't accomplish anything just yet---
            // it simply passes control to the next applicable function below using next()
            next();
        })
            .get(function (req, res) {
            res.status(200).send("GET requested for id " + req.params.userId);
        })
            .put(function (req, res) {
            res.status(200).send("PUT requested for id " + req.params.userId);
        })
            .patch(function (req, res) {
            res.status(200).send("PATCH requested for id " + req.params.userId);
        })["delete"](function (req, res) {
            res.status(200).send("DELETE requested for id " + req.params.userId);
        });
        return this.app;
    };
    return UsersRoutes;
}(common_routes_config_1.CommonRoutesConfig));
exports.UsersRoutes = UsersRoutes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMucm91dGVzLmNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3VzZXJzL3VzZXJzLnJvdXRlcy5jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdUVBQWtFO0FBR2xFO0lBQWlDLCtCQUFrQjtJQUNqRCxxQkFBWSxHQUF3QjtlQUNsQyxrQkFBTSxHQUFHLEVBQUUsWUFBWSxDQUFDO0lBQzFCLENBQUM7SUFFRCxxQ0FBZSxHQUFmO1FBQ0UsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDO2FBQ3JCLEdBQUcsQ0FBQyxVQUFDLEdBQW9CLEVBQUUsR0FBcUI7WUFDL0MsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDeEMsQ0FBQyxDQUFDO2FBQ0QsSUFBSSxDQUFDLFVBQUMsR0FBb0IsRUFBRSxHQUFxQjtZQUNoRCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUN4QyxDQUFDLENBQUMsQ0FBQTtRQUVKLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDO2FBQzdCLEdBQUcsQ0FBQyxVQUFDLEdBQW9CLEVBQUUsR0FBcUIsRUFBRSxJQUEwQjtZQUMzRSxxRUFBcUU7WUFDckUsaURBQWlEO1lBQ2pELDhFQUE4RTtZQUM5RSxJQUFJLEVBQUUsQ0FBQztRQUNULENBQUMsQ0FBQzthQUNELEdBQUcsQ0FBQyxVQUFDLEdBQW9CLEVBQUUsR0FBcUI7WUFDL0MsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsMEJBQXdCLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBUSxDQUFDLENBQUM7UUFDcEUsQ0FBQyxDQUFDO2FBQ0QsR0FBRyxDQUFDLFVBQUMsR0FBb0IsRUFBRSxHQUFxQjtZQUMvQyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQywwQkFBd0IsR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFRLENBQUMsQ0FBQztRQUNwRSxDQUFDLENBQUM7YUFDRCxLQUFLLENBQUMsVUFBQyxHQUFvQixFQUFFLEdBQXFCO1lBQ2pELEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLDRCQUEwQixHQUFHLENBQUMsTUFBTSxDQUFDLE1BQVEsQ0FBQyxDQUFDO1FBQ3RFLENBQUMsQ0FBQyxDQUNELFFBQU0sQ0FBQSxDQUFDLFVBQUMsR0FBb0IsRUFBRSxHQUFxQjtZQUNsRCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyw2QkFBMkIsR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFRLENBQUMsQ0FBQztRQUN2RSxDQUFDLENBQUMsQ0FBQTtRQUVKLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQztJQUNsQixDQUFDO0lBQ0gsa0JBQUM7QUFBRCxDQUFDLEFBcENELENBQWlDLHlDQUFrQixHQW9DbEQ7QUFwQ1ksa0NBQVcifQ==