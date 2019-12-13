function waitMs(ms) {
    return new Promise(c => setTimeout(c, ms))
}
async function sendAck() {
    let limit = 10;
    for (let i = 0; i < limit; i++) {
        try {
            console.log(`Sent ack ${i}`);
            await waitMs(50);
        } catch (error) {
            console.log(error);
        }
    }
}

sendAck();
console.log("Sent Ack");