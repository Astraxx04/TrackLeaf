const moment = require('moment');
const Items = require("../models/items");

async function checkExpiryDates() {
    try {
        const today = moment();
        const items = await Items.find({});

        const alerts = [];

        items.forEach((item) => {
            const expiryDate = moment(item.expiry, moment.ISO_8601);
            const daysUntilExpiry = expiryDate.diff(today, 'days');

            if (daysUntilExpiry <= 2 && daysUntilExpiry >= 0) {
                alerts.push({
                    itemName: item.name,
                    daysUntilExpiry: daysUntilExpiry
                });
            }
        });

        return JSON.stringify(alerts);
    } catch (error) {
        console.error('Error while checking expiry dates:', error);
        return JSON.stringify({ error: 'An error occurred while checking expiry dates.' });
    }
}

async function checkShortage() {
    try {
        const items = await Items.find({});
        const alerts = {};

        const categoryCounts = {};
        items.forEach(item => {
            if (categoryCounts[item.category]) {
                categoryCounts[item.category]++;
            } else {
                categoryCounts[item.category] = 1;
            }
        });

        for (const category in categoryCounts) {
            if (categoryCounts[category] < 5) {
                alerts[category] = `Category ${category} has less than 5 items.`;
            }
        }
        
        return JSON.stringify(alerts);
    } catch (error) {
        console.error('Error while checking shortages:', error);
        return JSON.stringify({ error: 'An error occurred while checking for shortages.' });
    }
}

module.exports = { checkExpiryDates, checkShortage };