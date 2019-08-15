"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const walletReading_1 = require("./walletReading");
const sMessage = 'Hello world!!!';
console.log(sMessage);
const inputArguments = process.argv.slice(2);
const main = () => __awaiter(this, void 0, void 0, function* () {
    if (inputArguments[0] === 'wallet') {
        if (inputArguments[1] === 'read') {
            walletReading_1.walletReading();
        }
        ;
    }
    ;
});
main();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsbURBQWdEO0FBUWhELE1BQU0sUUFBUSxHQUFHLGdCQUFnQixDQUFDO0FBQ2xDLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7QUFHdEIsTUFBTSxjQUFjLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFFN0MsTUFBTSxJQUFJLEdBQUcsR0FBUyxFQUFFO0lBQ3ZCLElBQUksY0FBYyxDQUFDLENBQUMsQ0FBQyxLQUFLLFFBQVEsRUFBRTtRQUNuQyxJQUFJLGNBQWMsQ0FBQyxDQUFDLENBQUMsS0FBSyxNQUFNLEVBQUU7WUFDakMsNkJBQWEsRUFBRSxDQUFDO1NBQ2hCO1FBQUEsQ0FBQztLQUNGO0lBQUEsQ0FBQztBQUNILENBQUMsQ0FBQSxDQUFDO0FBRUYsSUFBSSxFQUFFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB3YWxsZXRSZWFkaW5nIH0gZnJvbSBcIi4vd2FsbGV0UmVhZGluZ1wiO1xyXG5cclxuLypcclxuLy8gUHJpbWVyIGVqZW1wbG8uLi5cclxuLy8gUHJ1ZWJhIGRlIGVudG9ybm8uIEVsIGNsYXNpY28gaGVsbG8gd29ybGQuXHJcblxyXG4qL1xyXG5cclxuY29uc3Qgc01lc3NhZ2UgPSAnSGVsbG8gd29ybGQhISEnO1xyXG5jb25zb2xlLmxvZyhzTWVzc2FnZSk7XHJcblxyXG4vLyBTZSBsZWVuIGxvcyBwYXJhbWV0cm9zIHkgc2UgYWxtYWNlbmFuIGVuIHVuYSB2YXJpYWJsZVxyXG5jb25zdCBpbnB1dEFyZ3VtZW50cyA9IHByb2Nlc3MuYXJndi5zbGljZSgyKTtcclxuXHJcbmNvbnN0IG1haW4gPSBhc3luYyAoKSA9PiB7XHJcblx0aWYgKGlucHV0QXJndW1lbnRzWzBdID09PSAnd2FsbGV0Jykge1xyXG5cdFx0aWYgKGlucHV0QXJndW1lbnRzWzFdID09PSAncmVhZCcpIHtcclxuXHRcdFx0d2FsbGV0UmVhZGluZygpO1xyXG5cdFx0fTtcclxuXHR9O1xyXG59O1xyXG5cclxubWFpbigpO1xyXG4iXX0=