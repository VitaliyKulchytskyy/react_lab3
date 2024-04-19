/**
 * Get a random message from the internal array of messages
 * @returns a random message
 */
export function getRandomMessage() {
    const messages = [
        "got it!",
        "past me!",
        "copied!",
        "will do!",
        "it'll rock!",
        "right one!"
    ];

    return messages[Math.floor(Math.random() * messages.length)];
}