var Promise = require("bluebird");
var child_process = require("child_process");
var exec = child_process.exec;
module.exports = function () {
    return new Promise(function (resolve, reject) {
        var callbacked = false;
        var timo = setTimeout(function () {
            if (!callbacked) {
                console.log("timeout video script");
                reject("timeout");
            }
        }, 10000);
        exec(__dirname + "/audio.sh", { timeout: 9000 }, function (error, stdout, stderr) {
            if (error != null) {
                callbacked = true;
                clearTimeout(timo);
                reject(error);
            }
            else if (stderr && stderr != null) {
                callbacked = true;
                clearTimeout(timo);
                reject(stderr);
            }
            else {
                callbacked = true;
                clearTimeout(timo);
                resolve(JSON.parse(stdout.toString("utf-8")));
            }
        });
    });
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLElBQVksT0FBTyxXQUFNLFVBQVUsQ0FBQyxDQUFBO0FBQ3BDLElBQVksYUFBYSxXQUFNLGVBQWUsQ0FBQyxDQUFBO0FBRS9DLElBQUksSUFBSSxHQUFHLGFBQWEsQ0FBQyxJQUFJLENBQUM7QUFjOUIsaUJBQVM7SUFDTCxNQUFNLENBQUMsSUFBSSxPQUFPLENBQVcsVUFBUyxPQUFPLEVBQUUsTUFBTTtRQUNqRCxJQUFJLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFDdkIsSUFBSSxJQUFJLEdBQUcsVUFBVSxDQUFDO1lBQ2xCLEVBQUUsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztnQkFDZCxPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDLENBQUM7Z0JBQ3BDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUN0QixDQUFDO1FBQ0wsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBR1YsSUFBSSxDQUFDLFNBQVMsR0FBRyxXQUFXLEVBQUUsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLEVBQUUsVUFBUyxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU07WUFDM0UsRUFBRSxDQUFDLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQ2hCLFVBQVUsR0FBRyxJQUFJLENBQUM7Z0JBQ2xCLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDbkIsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ2xCLENBQUM7WUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxJQUFJLE1BQU0sSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUNsQyxVQUFVLEdBQUcsSUFBSSxDQUFDO2dCQUNsQixZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ25CLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNuQixDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ0osVUFBVSxHQUFHLElBQUksQ0FBQztnQkFDbEIsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNuQixPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNsRCxDQUFDO1FBRUwsQ0FBQyxDQUFDLENBQUM7SUFFUCxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUMsQ0FBQyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFByb21pc2UgZnJvbSBcImJsdWViaXJkXCI7XG5pbXBvcnQgKiBhcyBjaGlsZF9wcm9jZXNzIGZyb20gXCJjaGlsZF9wcm9jZXNzXCI7XG5cbmxldCBleGVjID0gY2hpbGRfcHJvY2Vzcy5leGVjO1xuXG5pbnRlcmZhY2UgQ2hhbm5lbCB7XG4gICAgZGV2OiBzdHJpbmc7XG4gICAgYWN0aXZlOiBib29sZWFuO1xufVxuXG5pbnRlcmZhY2UgQW5zd2VyIHtcbiAgICBsYWJlbDogc3RyaW5nO1xuICAgIGRldjogc3RyaW5nO1xuICAgIHB1bHNlbmFtZTogc3RyaW5nO1xuICAgIGFjdGl2ZTogYm9vbGVhbjtcbiAgICBjaGFubmVsczogQ2hhbm5lbFtdO1xufVxuZXhwb3J0ID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPEFuc3dlcltdPihmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgbGV0IGNhbGxiYWNrZWQgPSBmYWxzZTtcbiAgICAgICAgbGV0IHRpbW8gPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYgKCFjYWxsYmFja2VkKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0aW1lb3V0IHZpZGVvIHNjcmlwdFwiKTtcbiAgICAgICAgICAgICAgICByZWplY3QoXCJ0aW1lb3V0XCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCAxMDAwMCk7XG5cblxuICAgICAgICBleGVjKF9fZGlybmFtZSArIFwiL2F1ZGlvLnNoXCIsIHsgdGltZW91dDogOTAwMCB9LCBmdW5jdGlvbihlcnJvciwgc3Rkb3V0LCBzdGRlcnIpIHtcbiAgICAgICAgICAgIGlmIChlcnJvciAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2tlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbW8pO1xuICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHN0ZGVyciAmJiBzdGRlcnIgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1vKTtcbiAgICAgICAgICAgICAgICByZWplY3Qoc3RkZXJyKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2tlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbW8pO1xuICAgICAgICAgICAgICAgIHJlc29sdmUoSlNPTi5wYXJzZShzdGRvdXQudG9TdHJpbmcoXCJ1dGYtOFwiKSkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pO1xuXG4gICAgfSk7XG59OyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
