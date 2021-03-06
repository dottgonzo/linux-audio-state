import * as Promise from "bluebird";
import * as child_process from "child_process";

let exec = child_process.exec;

interface Channel {
    dev: string;
    active: boolean;
}

interface Answer {
    label: string;
    dev: string;
    pulsename: string;
    active: boolean;
    channels: Channel[];
    alsa_card_id:number
}
export default function las() {
    return new Promise<Answer[]>(function(resolve, reject) {
        let callbacked = false;
        let timo = setTimeout(function() {
            if (!callbacked) {
                console.log("timeout video script");
                reject("timeout");
            }
        }, 10000);


        exec(__dirname + "/audio.sh", { timeout: 9000 }, function(error, stdout, stderr) {
            if (error != null) {
                callbacked = true;
                clearTimeout(timo);
                reject(error);
            } else if (stderr && stderr != null) {
                callbacked = true;
                clearTimeout(timo);
                reject(stderr);
            } else {
                callbacked = true;
                clearTimeout(timo);
                resolve(JSON.parse(stdout.toString()));
            }

        });

    });
};