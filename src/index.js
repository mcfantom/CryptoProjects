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
const inquirer = require("inquirer");
const chalk = require("chalk");
const figlet = require("figlet");
const helloWorld = () => {
    const sMessage = 'Hello world!!!';
    console.log('');
    console.log(sMessage);
};
const init = () => {
    console.log(chalk.green(figlet.textSync("Coala Wallet POC", {
        font: 'Banner',
        horizontalLayout: "default",
        verticalLayout: "default"
    })));
};
const mnuPrincipal = () => {
    const options = [
        {
            name: "mnuOPCION",
            type: "list",
            message: "Seleccione una opcion:",
            choices: ["01.Hello World",
                "02.Creacion Address Wallet",
                "03.Consultar Transacciones",
                "04.Salvar Wallet a Disco",
                "05.Leer Wallet de Disco",
                "06.Transferir XEMs",
                "07.Revisar balances (XEM y Mosaics)",
                "08.Transferir Mosaics",
                "99.Salir"],
            filter: function (val) {
                return val.split(".")[1];
            }
        }
    ];
    return inquirer.prompt(options);
};
const run = () => __awaiter(this, void 0, void 0, function* () {
    init();
    const answers = yield mnuPrincipal();
    const { mnuOPCION } = answers;
    switch (mnuOPCION) {
        case 'Hello World': {
            helloWorld();
            break;
        }
        case 'Creacion Address Wallet': {
            console.log("Good");
            break;
        }
        case 'Consultar Transacciones': {
            console.log("Good");
            break;
        }
        case 'Salvar Wallet a Disco': {
            console.log("Good");
            break;
        }
        case 'Leer Wallet de Disco': {
            walletReading_1.walletReading();
            break;
        }
        case 'Leer Wallet de Disco': {
            console.log("Good");
            break;
        }
        case 'Transferir XEMs': {
            console.log("Good");
            break;
        }
        case 'Revisar balances (XEM y Mosaics)': {
            console.log("Good");
            break;
        }
        case 'Transferir Mosaics': {
            console.log("Good");
            break;
        }
        case 'Salir': {
            console.log("Good");
            break;
        }
        case 'B': {
            console.log("Good");
            break;
        }
    }
    ;
});
run();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsbURBQWdEO0FBRWhELE1BQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUNyQyxNQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDL0IsTUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBUWpDLE1BQU0sVUFBVSxHQUFHLEdBQUcsRUFBRTtJQUN2QixNQUFNLFFBQVEsR0FBRyxnQkFBZ0IsQ0FBQztJQUNsQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ2hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDdkIsQ0FBQyxDQUFDO0FBZUYsTUFBTSxJQUFJLEdBQUcsR0FBRyxFQUFFO0lBQ2hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FDbkIsTUFBTSxDQUFDLFFBQVEsQ0FBQyxrQkFBa0IsRUFBRTtRQUNsQyxJQUFJLEVBQUUsUUFBUTtRQUNkLGdCQUFnQixFQUFFLFNBQVM7UUFDM0IsY0FBYyxFQUFFLFNBQVM7S0FDMUIsQ0FBQyxDQUNILENBQ0YsQ0FBQztBQUNKLENBQUMsQ0FBQztBQUVGLE1BQU0sWUFBWSxHQUFHLEdBQUcsRUFBRTtJQUN4QixNQUFNLE9BQU8sR0FBRztRQUNkO1lBQ0UsSUFBSSxFQUFFLFdBQVc7WUFDakIsSUFBSSxFQUFFLE1BQU07WUFDWixPQUFPLEVBQUUsd0JBQXdCO1lBQ2pDLE9BQU8sRUFBRSxDQUFDLGdCQUFnQjtnQkFDaEIsNEJBQTRCO2dCQUM1Qiw0QkFBNEI7Z0JBQzVCLDBCQUEwQjtnQkFDMUIseUJBQXlCO2dCQUN6QixvQkFBb0I7Z0JBQ3BCLHFDQUFxQztnQkFDckMsdUJBQXVCO2dCQUN2QixVQUFVLENBQUM7WUFDckIsTUFBTSxFQUFFLFVBQVMsR0FBRztnQkFDbEIsT0FBTyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzNCLENBQUM7U0FDRjtLQUNGLENBQUM7SUFDRixPQUFPLFFBQVEsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDbEMsQ0FBQyxDQUFDO0FBRUYsTUFBTSxHQUFHLEdBQUcsR0FBUyxFQUFFO0lBRXJCLElBQUksRUFBRSxDQUFDO0lBR1AsTUFBTSxPQUFPLEdBQUcsTUFBTSxZQUFZLEVBQUUsQ0FBQztJQUNyQyxNQUFNLEVBQUUsU0FBUyxFQUFFLEdBQUcsT0FBTyxDQUFDO0lBRS9CLFFBQU8sU0FBUyxFQUFFO1FBQ2pCLEtBQUssYUFBYSxDQUFDLENBQUM7WUFDakIsVUFBVSxFQUFFLENBQUM7WUFDYixNQUFNO1NBQ047UUFDSCxLQUFLLHlCQUF5QixDQUFDLENBQUM7WUFDN0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNwQixNQUFNO1NBQ047UUFDSCxLQUFLLHlCQUF5QixDQUFDLENBQUM7WUFDN0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNwQixNQUFNO1NBQ047UUFDSCxLQUFLLHVCQUF1QixDQUFDLENBQUM7WUFDM0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNwQixNQUFNO1NBQ047UUFDRixLQUFLLHNCQUFzQixDQUFDLENBQUM7WUFDN0IsNkJBQWEsRUFBRSxDQUFDO1lBQ2QsTUFBTTtTQUNOO1FBQ0gsS0FBSyxzQkFBc0IsQ0FBQyxDQUFDO1lBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDcEIsTUFBTTtTQUNOO1FBQ0gsS0FBSyxpQkFBaUIsQ0FBQyxDQUFDO1lBQ3JCLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDcEIsTUFBTTtTQUNOO1FBQ0gsS0FBSyxrQ0FBa0MsQ0FBQyxDQUFDO1lBQ3RDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDcEIsTUFBTTtTQUNOO1FBQ0gsS0FBSyxvQkFBb0IsQ0FBQyxDQUFDO1lBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDcEIsTUFBTTtTQUNOO1FBQ0gsS0FBSyxPQUFPLENBQUMsQ0FBQztZQUNYLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDcEIsTUFBTTtTQUNOO1FBQ0YsS0FBSyxHQUFHLENBQUMsQ0FBQztZQUNSLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDcEIsTUFBTTtTQUNOO0tBQ0g7SUFBQSxDQUFDO0FBQ0gsQ0FBQyxDQUFBLENBQUM7QUFFRixHQUFHLEVBQUUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHdhbGxldFJlYWRpbmcgfSBmcm9tIFwiLi93YWxsZXRSZWFkaW5nXCI7XHJcblxyXG5jb25zdCBpbnF1aXJlciA9IHJlcXVpcmUoXCJpbnF1aXJlclwiKTtcclxuY29uc3QgY2hhbGsgPSByZXF1aXJlKFwiY2hhbGtcIik7XHJcbmNvbnN0IGZpZ2xldCA9IHJlcXVpcmUoXCJmaWdsZXRcIik7XHJcblxyXG4vKlxyXG4vLyBQcmltZXIgZWplbXBsby4uLlxyXG4vLyBQcnVlYmEgZGUgZW50b3Juby4gRWwgY2xhc2ljbyBoZWxsbyB3b3JsZC5cclxuXHJcbiovXHJcblxyXG5jb25zdCBoZWxsb1dvcmxkID0gKCkgPT4ge1xyXG5cdGNvbnN0IHNNZXNzYWdlID0gJ0hlbGxvIHdvcmxkISEhJztcclxuXHRjb25zb2xlLmxvZygnJyk7XHJcblx0Y29uc29sZS5sb2coc01lc3NhZ2UpO1xyXG59O1xyXG5cclxuLy8gLy8gU2UgbGVlbiBsb3MgcGFyYW1ldHJvcyB5IHNlIGFsbWFjZW5hbiBlbiB1bmEgdmFyaWFibGVcclxuLy8gY29uc3QgaW5wdXRBcmd1bWVudHMgPSBwcm9jZXNzLmFyZ3Yuc2xpY2UoMik7XHJcbi8vXHJcbi8vIGNvbnN0IG1haW4gPSBhc3luYyAoKSA9PiB7XHJcbi8vIFx0aWYgKGlucHV0QXJndW1lbnRzWzBdID09PSAnd2FsbGV0Jykge1xyXG4vLyBcdFx0aWYgKGlucHV0QXJndW1lbnRzWzFdID09PSAncmVhZCcpIHtcclxuLy8gXHRcdFx0d2FsbGV0UmVhZGluZygpO1xyXG4vLyBcdFx0fTtcclxuLy8gXHR9O1xyXG4vLyB9O1xyXG4vL1xyXG4vLyBtYWluKCk7XHJcblxyXG5jb25zdCBpbml0ID0gKCkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKGNoYWxrLmdyZWVuKFxyXG4gICAgICBmaWdsZXQudGV4dFN5bmMoXCJDb2FsYSBXYWxsZXQgUE9DXCIsIHtcclxuICAgICAgICBmb250OiAnQmFubmVyJyxcclxuICAgICAgICBob3Jpem9udGFsTGF5b3V0OiBcImRlZmF1bHRcIixcclxuICAgICAgICB2ZXJ0aWNhbExheW91dDogXCJkZWZhdWx0XCJcclxuICAgICAgfSlcclxuICAgIClcclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgbW51UHJpbmNpcGFsID0gKCkgPT4ge1xyXG4gIGNvbnN0IG9wdGlvbnMgPSBbXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwibW51T1BDSU9OXCIsXHJcbiAgICAgIHR5cGU6IFwibGlzdFwiLFxyXG4gICAgICBtZXNzYWdlOiBcIlNlbGVjY2lvbmUgdW5hIG9wY2lvbjpcIixcclxuICAgICAgY2hvaWNlczogW1wiMDEuSGVsbG8gV29ybGRcIixcclxuICAgICAgICAgICAgICAgIFwiMDIuQ3JlYWNpb24gQWRkcmVzcyBXYWxsZXRcIixcclxuICAgICAgICAgICAgICAgIFwiMDMuQ29uc3VsdGFyIFRyYW5zYWNjaW9uZXNcIixcclxuICAgICAgICAgICAgICAgIFwiMDQuU2FsdmFyIFdhbGxldCBhIERpc2NvXCIsXHJcbiAgICAgICAgICAgICAgICBcIjA1LkxlZXIgV2FsbGV0IGRlIERpc2NvXCIsXHJcbiAgICAgICAgICAgICAgICBcIjA2LlRyYW5zZmVyaXIgWEVNc1wiLFxyXG4gICAgICAgICAgICAgICAgXCIwNy5SZXZpc2FyIGJhbGFuY2VzIChYRU0geSBNb3NhaWNzKVwiLFxyXG4gICAgICAgICAgICAgICAgXCIwOC5UcmFuc2ZlcmlyIE1vc2FpY3NcIixcclxuICAgICAgICAgICAgICAgIFwiOTkuU2FsaXJcIl0sXHJcbiAgICAgIGZpbHRlcjogZnVuY3Rpb24odmFsKSB7XHJcbiAgICAgICAgcmV0dXJuIHZhbC5zcGxpdChcIi5cIilbMV07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICBdO1xyXG4gIHJldHVybiBpbnF1aXJlci5wcm9tcHQob3B0aW9ucyk7XHJcbn07XHJcblxyXG5jb25zdCBydW4gPSBhc3luYyAoKSA9PiB7XHJcbiAgLy8gTW9zdHJhciBUaXR1bG8gcHJpbmNpcGFsIGRlbCBtZW51LlxyXG4gIGluaXQoKTtcclxuXHJcbiAgLy8gTW9zdHJhciBtZW51IHkgZXNwZXJhciBsYSByZXNwdWVzdGFcclxuICBjb25zdCBhbnN3ZXJzID0gYXdhaXQgbW51UHJpbmNpcGFsKCk7XHJcbiAgY29uc3QgeyBtbnVPUENJT04gfSA9IGFuc3dlcnM7XHJcblxyXG5cdHN3aXRjaChtbnVPUENJT04pIHtcclxuXHRcdGNhc2UgJ0hlbGxvIFdvcmxkJzoge1xyXG4gICAgXHRoZWxsb1dvcmxkKCk7XHJcbiAgICBcdGJyZWFrO1xyXG4gICBcdH1cclxuXHRcdGNhc2UgJ0NyZWFjaW9uIEFkZHJlc3MgV2FsbGV0Jzoge1xyXG4gICAgXHRjb25zb2xlLmxvZyhcIkdvb2RcIik7XHJcbiAgICBcdGJyZWFrO1xyXG4gICBcdH1cclxuXHRcdGNhc2UgJ0NvbnN1bHRhciBUcmFuc2FjY2lvbmVzJzoge1xyXG4gICAgXHRjb25zb2xlLmxvZyhcIkdvb2RcIik7XHJcbiAgICBcdGJyZWFrO1xyXG4gICBcdH1cclxuXHRcdGNhc2UgJ1NhbHZhciBXYWxsZXQgYSBEaXNjbyc6IHtcclxuICAgIFx0Y29uc29sZS5sb2coXCJHb29kXCIpO1xyXG4gICAgXHRicmVhaztcclxuICAgXHR9XHJcbiAgXHRjYXNlICdMZWVyIFdhbGxldCBkZSBEaXNjbyc6IHtcclxuXHRcdFx0d2FsbGV0UmVhZGluZygpO1xyXG4gICAgXHRicmVhaztcclxuICAgXHR9XHJcblx0XHRjYXNlICdMZWVyIFdhbGxldCBkZSBEaXNjbyc6IHtcclxuICAgIFx0Y29uc29sZS5sb2coXCJHb29kXCIpO1xyXG4gICAgXHRicmVhaztcclxuICAgXHR9XHJcblx0XHRjYXNlICdUcmFuc2ZlcmlyIFhFTXMnOiB7XHJcbiAgICBcdGNvbnNvbGUubG9nKFwiR29vZFwiKTtcclxuICAgIFx0YnJlYWs7XHJcbiAgIFx0fVxyXG5cdFx0Y2FzZSAnUmV2aXNhciBiYWxhbmNlcyAoWEVNIHkgTW9zYWljcyknOiB7XHJcbiAgICBcdGNvbnNvbGUubG9nKFwiR29vZFwiKTtcclxuICAgIFx0YnJlYWs7XHJcbiAgIFx0fVxyXG5cdFx0Y2FzZSAnVHJhbnNmZXJpciBNb3NhaWNzJzoge1xyXG4gICAgXHRjb25zb2xlLmxvZyhcIkdvb2RcIik7XHJcbiAgICBcdGJyZWFrO1xyXG4gICBcdH1cclxuXHRcdGNhc2UgJ1NhbGlyJzoge1xyXG4gICAgXHRjb25zb2xlLmxvZyhcIkdvb2RcIik7XHJcbiAgICBcdGJyZWFrO1xyXG4gICBcdH1cclxuICBcdGNhc2UgJ0InOiB7XHJcbiAgICBcdGNvbnNvbGUubG9nKFwiR29vZFwiKTtcclxuICAgIFx0YnJlYWs7XHJcbiAgIFx0fVxyXG5cdH07XHJcbn07XHJcblxyXG5ydW4oKTtcclxuIl19