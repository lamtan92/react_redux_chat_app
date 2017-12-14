import SendBird from 'sendbird'

const sendbird = new SendBird({
    appId: "AB3685ED-F4EC-4CBA-A69C-49F7E53784FE"
});

const fetchChannels = (dispatch) => () => {
    const payload = new Promise((resolve, reject) => {
        sendbird.OpenChannel.createOpenChannelListQuery().next((ch, err) => {
            resolve(ch);
        })
    });
    return dispatch({
        type : 'FETCH_CHANNELS',
        payload
    })
}   

export default function mapDispatchToProps(dispatch){
    return{
        connect: (userId) => {
            const payLoad = new Promise((resolve, reject) => {
                sendbird.connect(userId, (u, err) => {
                    resolve(u);
                });
            });
            console.log("hehe", dispatch);
            return dispatch({
                type: 'CONNECTION',
                payload: payLoad
            })
            .then(fetchChannels(dispatch));
        }
        // connect: (userId) => {
        //     dispatch({type: 'CONNECTION_STARTED'});
        //     sendbird.connect(userId, (u, err) => {
        //         console.log(u)
        //         dispatch({type: 'CONNECTION_COMPLETED', user: u})
        //     });
        // }
    }
}