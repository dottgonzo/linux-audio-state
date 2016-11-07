import audio from "../index";

audio().then(function (doc) {
    console.log(JSON.stringify(doc));
}).catch(function (err) {
    console.error("error", err);
})
