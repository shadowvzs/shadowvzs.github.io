class MessagingService {
    constructor() {
        this.enableLog = true;
        this.subscriptions = [];
    }

    subscribe = (topic, callback) => {
        if (!callback) {
            throw new Error('Cannot subscribe without a callback');
        }
        this.subscriptions.push({
            topic,
            callback
        });

        if (this.enableLog) {
            console.info('New subscription', topic, callback)
        }
        return () => this.subscribe(topic, callback);
    };

    unsubscribe = (topic, callback) => {
        const newSubscriptions = this.subscriptions
            .filter(sub => sub.topic !== topic || (callback && sub.callback !== callback));
        if (this.enableLog) {
            const unsubscribedCounter = this.subscriptions.length - newSubscriptions.length;
            console.info(`Unsubscribed from topic: ${topic}, ${unsubscribedCounter} callback(s)`);
        }
        this.subscriptions = newSubscriptions;
    }

    publish = (topic, payload) => {
       const filteredSubscriptions = this.subscriptions.filter(sub => sub.topic === topic);
       filteredSubscriptions.forEach(sub => sub.callback(payload));
       if (this.enableLog) {
          console.info(`Published message to topic: ${topic}`, payload);
       }
       return this;
    }
}

export default MessagingService;