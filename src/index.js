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
            console.log('Creacion Address Wallet');
            break;
        }
        case 'Consultar Transacciones': {
            console.log('Consultar Transacciones');
            break;
        }
        case 'Salvar Wallet a Disco': {
            console.log('Salvar Wallet a Disco');
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
            console.log('Leer Wallet de Disco');
            break;
        }
        case 'Revisar balances (XEM y Mosaics)': {
            console.log('Revisar balances (XEM y Mosaics)');
            break;
        }
        case 'Transferir Mosaics': {
            console.log('Transferir Mosaics');
            break;
        }
        case 'Salir': {
            console.log('Saliendo...');
            break;
        }
    }
    ;
});
run();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsbURBQWdEO0FBRWhELE1BQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUNyQyxNQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDL0IsTUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBUWpDLE1BQU0sVUFBVSxHQUFHLEdBQUcsRUFBRTtJQUN2QixNQUFNLFFBQVEsR0FBRyxnQkFBZ0IsQ0FBQztJQUNsQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ2hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDdkIsQ0FBQyxDQUFDO0FBR0YsTUFBTSxJQUFJLEdBQUcsR0FBRyxFQUFFO0lBQ2hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FDbkIsTUFBTSxDQUFDLFFBQVEsQ0FBQyxrQkFBa0IsRUFBRTtRQUNsQyxJQUFJLEVBQUUsUUFBUTtRQUNkLGdCQUFnQixFQUFFLFNBQVM7UUFDM0IsY0FBYyxFQUFFLFNBQVM7S0FDMUIsQ0FBQyxDQUNILENBQ0YsQ0FBQztBQUNKLENBQUMsQ0FBQztBQUVGLE1BQU0sWUFBWSxHQUFHLEdBQUcsRUFBRTtJQUN4QixNQUFNLE9BQU8sR0FBRztRQUNkO1lBQ0UsSUFBSSxFQUFFLFdBQVc7WUFDakIsSUFBSSxFQUFFLE1BQU07WUFDWixPQUFPLEVBQUUsd0JBQXdCO1lBQ2pDLE9BQU8sRUFBRSxDQUFDLGdCQUFnQjtnQkFDaEIsNEJBQTRCO2dCQUM1Qiw0QkFBNEI7Z0JBQzVCLDBCQUEwQjtnQkFDMUIseUJBQXlCO2dCQUN6QixvQkFBb0I7Z0JBQ3BCLHFDQUFxQztnQkFDckMsdUJBQXVCO2dCQUN2QixVQUFVLENBQUM7WUFDckIsTUFBTSxFQUFFLFVBQVMsR0FBRztnQkFDbEIsT0FBTyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzNCLENBQUM7U0FDRjtLQUNGLENBQUM7SUFDRixPQUFPLFFBQVEsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDbEMsQ0FBQyxDQUFDO0FBRUYsTUFBTSxHQUFHLEdBQUcsR0FBUyxFQUFFO0lBRXJCLElBQUksRUFBRSxDQUFDO0lBR1AsTUFBTSxPQUFPLEdBQUcsTUFBTSxZQUFZLEVBQUUsQ0FBQztJQUNyQyxNQUFNLEVBQUUsU0FBUyxFQUFFLEdBQUcsT0FBTyxDQUFDO0lBRS9CLFFBQU8sU0FBUyxFQUFFO1FBQ2pCLEtBQUssYUFBYSxDQUFDLENBQUM7WUFDakIsVUFBVSxFQUFFLENBQUM7WUFDYixNQUFNO1NBQ047UUFDSCxLQUFLLHlCQUF5QixDQUFDLENBQUM7WUFDN0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO1lBQ3ZDLE1BQU07U0FDTjtRQUNILEtBQUsseUJBQXlCLENBQUMsQ0FBQztZQUM3QixPQUFPLENBQUMsR0FBRyxDQUFDLHlCQUF5QixDQUFDLENBQUM7WUFDdkMsTUFBTTtTQUNOO1FBQ0gsS0FBSyx1QkFBdUIsQ0FBQyxDQUFDO1lBQzNCLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsQ0FBQztZQUNyQyxNQUFNO1NBQ047UUFDRixLQUFLLHNCQUFzQixDQUFDLENBQUM7WUFDN0IsNkJBQWEsRUFBRSxDQUFDO1lBQ2QsTUFBTTtTQUNOO1FBQ0gsS0FBSyxzQkFBc0IsQ0FBQyxDQUFDO1lBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDcEIsTUFBTTtTQUNOO1FBQ0gsS0FBSyxpQkFBaUIsQ0FBQyxDQUFDO1lBQ3JCLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQztZQUNwQyxNQUFNO1NBQ047UUFDSCxLQUFLLGtDQUFrQyxDQUFDLENBQUM7WUFDdEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDO1lBQ2hELE1BQU07U0FDTjtRQUNILEtBQUssb0JBQW9CLENBQUMsQ0FBQztZQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUM7WUFDbEMsTUFBTTtTQUNOO1FBQ0gsS0FBSyxPQUFPLENBQUMsQ0FBQztZQUNYLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDM0IsTUFBTTtTQUNOO0tBQ0g7SUFBQSxDQUFDO0FBQ0gsQ0FBQyxDQUFBLENBQUM7QUFFRixHQUFHLEVBQUUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHdhbGxldFJlYWRpbmcgfSBmcm9tIFwiLi93YWxsZXRSZWFkaW5nXCI7XHJcblxyXG5jb25zdCBpbnF1aXJlciA9IHJlcXVpcmUoXCJpbnF1aXJlclwiKTtcclxuY29uc3QgY2hhbGsgPSByZXF1aXJlKFwiY2hhbGtcIik7XHJcbmNvbnN0IGZpZ2xldCA9IHJlcXVpcmUoXCJmaWdsZXRcIik7XHJcblxyXG4vKlxyXG4vLyBQcmltZXIgZWplbXBsby4uLlxyXG4vLyBQcnVlYmEgZGUgZW50b3Juby4gRWwgY2xhc2ljbyBoZWxsbyB3b3JsZC5cclxuXHJcbiovXHJcblxyXG5jb25zdCBoZWxsb1dvcmxkID0gKCkgPT4ge1xyXG5cdGNvbnN0IHNNZXNzYWdlID0gJ0hlbGxvIHdvcmxkISEhJztcclxuXHRjb25zb2xlLmxvZygnJyk7XHJcblx0Y29uc29sZS5sb2coc01lc3NhZ2UpO1xyXG59O1xyXG5cclxuLy8gTWVudSBkZSBpbmljaW8gZGUgbGEgYXBsaWNhY2lvbi5cclxuY29uc3QgaW5pdCA9ICgpID0+IHtcclxuICBjb25zb2xlLmxvZyhjaGFsay5ncmVlbihcclxuICAgICAgZmlnbGV0LnRleHRTeW5jKFwiQ29hbGEgV2FsbGV0IFBPQ1wiLCB7XHJcbiAgICAgICAgZm9udDogJ0Jhbm5lcicsXHJcbiAgICAgICAgaG9yaXpvbnRhbExheW91dDogXCJkZWZhdWx0XCIsXHJcbiAgICAgICAgdmVydGljYWxMYXlvdXQ6IFwiZGVmYXVsdFwiXHJcbiAgICAgIH0pXHJcbiAgICApXHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IG1udVByaW5jaXBhbCA9ICgpID0+IHtcclxuICBjb25zdCBvcHRpb25zID0gW1xyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIm1udU9QQ0lPTlwiLFxyXG4gICAgICB0eXBlOiBcImxpc3RcIixcclxuICAgICAgbWVzc2FnZTogXCJTZWxlY2Npb25lIHVuYSBvcGNpb246XCIsXHJcbiAgICAgIGNob2ljZXM6IFtcIjAxLkhlbGxvIFdvcmxkXCIsXHJcbiAgICAgICAgICAgICAgICBcIjAyLkNyZWFjaW9uIEFkZHJlc3MgV2FsbGV0XCIsXHJcbiAgICAgICAgICAgICAgICBcIjAzLkNvbnN1bHRhciBUcmFuc2FjY2lvbmVzXCIsXHJcbiAgICAgICAgICAgICAgICBcIjA0LlNhbHZhciBXYWxsZXQgYSBEaXNjb1wiLFxyXG4gICAgICAgICAgICAgICAgXCIwNS5MZWVyIFdhbGxldCBkZSBEaXNjb1wiLFxyXG4gICAgICAgICAgICAgICAgXCIwNi5UcmFuc2ZlcmlyIFhFTXNcIixcclxuICAgICAgICAgICAgICAgIFwiMDcuUmV2aXNhciBiYWxhbmNlcyAoWEVNIHkgTW9zYWljcylcIixcclxuICAgICAgICAgICAgICAgIFwiMDguVHJhbnNmZXJpciBNb3NhaWNzXCIsXHJcbiAgICAgICAgICAgICAgICBcIjk5LlNhbGlyXCJdLFxyXG4gICAgICBmaWx0ZXI6IGZ1bmN0aW9uKHZhbCkge1xyXG4gICAgICAgIHJldHVybiB2YWwuc3BsaXQoXCIuXCIpWzFdO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgXTtcclxuICByZXR1cm4gaW5xdWlyZXIucHJvbXB0KG9wdGlvbnMpO1xyXG59O1xyXG5cclxuY29uc3QgcnVuID0gYXN5bmMgKCkgPT4ge1xyXG4gIC8vIE1vc3RyYXIgVGl0dWxvIHByaW5jaXBhbCBkZWwgbWVudS5cclxuICBpbml0KCk7XHJcblxyXG4gIC8vIE1vc3RyYXIgbWVudSB5IGVzcGVyYXIgbGEgcmVzcHVlc3RhXHJcbiAgY29uc3QgYW5zd2VycyA9IGF3YWl0IG1udVByaW5jaXBhbCgpO1xyXG4gIGNvbnN0IHsgbW51T1BDSU9OIH0gPSBhbnN3ZXJzO1xyXG5cclxuXHRzd2l0Y2gobW51T1BDSU9OKSB7XHJcblx0XHRjYXNlICdIZWxsbyBXb3JsZCc6IHtcclxuICAgIFx0aGVsbG9Xb3JsZCgpO1xyXG4gICAgXHRicmVhaztcclxuICAgXHR9XHJcblx0XHRjYXNlICdDcmVhY2lvbiBBZGRyZXNzIFdhbGxldCc6IHtcclxuICAgIFx0Y29uc29sZS5sb2coJ0NyZWFjaW9uIEFkZHJlc3MgV2FsbGV0Jyk7XHJcbiAgICBcdGJyZWFrO1xyXG4gICBcdH1cclxuXHRcdGNhc2UgJ0NvbnN1bHRhciBUcmFuc2FjY2lvbmVzJzoge1xyXG4gICAgXHRjb25zb2xlLmxvZygnQ29uc3VsdGFyIFRyYW5zYWNjaW9uZXMnKTtcclxuICAgIFx0YnJlYWs7XHJcbiAgIFx0fVxyXG5cdFx0Y2FzZSAnU2FsdmFyIFdhbGxldCBhIERpc2NvJzoge1xyXG4gICAgXHRjb25zb2xlLmxvZygnU2FsdmFyIFdhbGxldCBhIERpc2NvJyk7XHJcbiAgICBcdGJyZWFrO1xyXG4gICBcdH1cclxuICBcdGNhc2UgJ0xlZXIgV2FsbGV0IGRlIERpc2NvJzoge1xyXG5cdFx0XHR3YWxsZXRSZWFkaW5nKCk7XHJcbiAgICBcdGJyZWFrO1xyXG4gICBcdH1cclxuXHRcdGNhc2UgJ0xlZXIgV2FsbGV0IGRlIERpc2NvJzoge1xyXG4gICAgXHRjb25zb2xlLmxvZyhcIkdvb2RcIik7XHJcbiAgICBcdGJyZWFrO1xyXG4gICBcdH1cclxuXHRcdGNhc2UgJ1RyYW5zZmVyaXIgWEVNcyc6IHtcclxuICAgIFx0Y29uc29sZS5sb2coJ0xlZXIgV2FsbGV0IGRlIERpc2NvJyk7XHJcbiAgICBcdGJyZWFrO1xyXG4gICBcdH1cclxuXHRcdGNhc2UgJ1JldmlzYXIgYmFsYW5jZXMgKFhFTSB5IE1vc2FpY3MpJzoge1xyXG4gICAgXHRjb25zb2xlLmxvZygnUmV2aXNhciBiYWxhbmNlcyAoWEVNIHkgTW9zYWljcyknKTtcclxuICAgIFx0YnJlYWs7XHJcbiAgIFx0fVxyXG5cdFx0Y2FzZSAnVHJhbnNmZXJpciBNb3NhaWNzJzoge1xyXG4gICAgXHRjb25zb2xlLmxvZygnVHJhbnNmZXJpciBNb3NhaWNzJyk7XHJcbiAgICBcdGJyZWFrO1xyXG4gICBcdH1cclxuXHRcdGNhc2UgJ1NhbGlyJzoge1xyXG4gICAgXHRjb25zb2xlLmxvZygnU2FsaWVuZG8uLi4nKTtcclxuICAgIFx0YnJlYWs7XHJcbiAgIFx0fVxyXG5cdH07XHJcbn07XHJcblxyXG5ydW4oKTtcclxuXHJcbi8qXHJcblxyXG4vLyBTaSBxdWlzaWVyYW1vcyB0cmFiYWphciBjb24gcGFyYW1ldHJvcyBkZXNkZSBsYSBsaW5lYSBkZSBjb21hbmRvcyxcclxuLy8gRGViZXJpYW1vcyBwcm9jZXNhciBsb3MgYXJndW1lbnRvcyBxdWUgcmVjaWJhXHJcblxyXG4vLyBTZSBsZWVuIGxvcyBwYXJhbWV0cm9zIHkgc2UgYWxtYWNlbmFuIGVuIHVuYSB2YXJpYWJsZVxyXG5jb25zdCBpbnB1dEFyZ3VtZW50cyA9IHByb2Nlc3MuYXJndi5zbGljZSgyKTtcclxuXHJcbi8vIEZ1bmNpb24gcGFyYSBwcm9jZXNhciBsb3MgcGFyYW1ldHJvc1xyXG5jb25zdCBtYWluID0gYXN5bmMgKCkgPT4ge1xyXG5cdGlmIChpbnB1dEFyZ3VtZW50c1swXSA9PT0gJ3dhbGxldCcpIHtcclxuXHRcdGlmIChpbnB1dEFyZ3VtZW50c1sxXSA9PT0gJ3JlYWQnKSB7XHJcblx0XHRcdHdhbGxldFJlYWRpbmcoKTtcclxuXHRcdH07XHJcblx0fTtcclxufTtcclxuXHJcbi8vIEZ1bmNpb24gZGUgaW5pY2lvIHByaW5jaXBhbFxyXG5tYWluKCk7XHJcblxyXG4qL1xyXG4iXX0=