const fs = require('fs');

( async () => {
    let stack = await fs.readFileSync('./response.json','utf-8');

    
    const parsed_stack = JSON.parse(stack);
    
    const events = parsed_stack.data.events;

    var event_arr = [];

    var counter = 0;
    for (id in events){
        eventId = events[id].eventId;
        eventName = events[id].eventName;
        bettingStatus = events[id].bettingStatus;
        hazai = Number(events[id].markets[0].outcomes[0].fixedOdds);
        dontetlen = Number(events[id].markets[0].outcomes[1].fixedOdds);
        vendeg = Number(events[id].markets[0].outcomes[2].fixedOdds);
        counter++;
        
        if ( hazai > 2.4 && hazai < 2.6 && hazai+0.25 <= vendeg ) {
            console.log(eventId);
        }

        if ( vendeg > 2.35 && vendeg < 2.6 && vendeg+0.25 <= hazai ) {
            console.log(eventId);
        }

    }
    
})();




