async function waitMs(ms) {
    await new Promise((resolve) => {
        setTimeout(resolve, ms).ref();
    })
}
async function sendAck() {
    let limit = 10;
    for (let i = 0; i < limit; i++) {
        try {
            process.send("INIT_ACK");
            console.log(`Sent ack ${i}`);
            await waitMs(50);
        } catch (error) {
            console.log(error);
        }
    }
}

sendAck();
console.log("Sent Ack");