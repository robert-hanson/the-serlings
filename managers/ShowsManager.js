
const ShowsRepo = require('../models/Shows');


// get all upcoming serlings shows
exports.getUpcomingShowsAsync = async()=>{
    console.log('Retrieving all upcoming serlings shows...');
    const currentDateTime = new Date();
    // remove time from datetime value so that we can use to filter
    const currentDateWithoutTime = new Date(currentDateTime.getFullYear(), currentDateTime.getMonth(), currentDateTime.getDate());

    const shows = await ShowsRepo.find({date: {$gte: currentDateWithoutTime}});
    console.log('Number of upcoming shows: ' + shows.length);
    return shows;
};